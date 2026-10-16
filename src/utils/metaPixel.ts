/**
 * Meta Pixel Tracking Utilities for Stock Market Mastery Program
 * Pixel ID: 1090970630572319
 */

declare global {
  interface Window {
    fbq?: ((...args: unknown[]) => void) & {
      callMethod?: (...args: unknown[]) => void;
      queue?: unknown[];
      loaded?: boolean;
      version?: string;
    };
    _fbq?: unknown;
  }
}

// Track if a Lead event has already fired to prevent duplicate events
// within a reasonable cooldown period (15 seconds) or duplicate postMessage triggers
let lastLeadFiredTimestamp = 0;
const LEAD_DEBOUNCE_MS = 15000;

/**
 * Fires the standard Meta Pixel 'Lead' event.
 * 
 * Safety & Privacy Guarantees:
 * 1. Checks if window and window.fbq exist and are callable.
 * 2. Does NOT send any PII (names, email addresses, phone numbers).
 * 3. Deduplicates multiple rapid calls (such as multiple postMessages sent
 *    by the embedded form iframe during a single submission).
 * 4. Safe against adblockers or blocked scripts (never throws).
 */
export const trackMetaPixelLead = (sourceDescription: string = 'form_submission'): boolean => {
  if (typeof window === 'undefined') {
    return false;
  }

  const now = Date.now();
  if (now - lastLeadFiredTimestamp < LEAD_DEBOUNCE_MS) {
    console.info(
      `[Meta Pixel] 'Lead' event deduplicated (already fired ${Math.round((now - lastLeadFiredTimestamp) / 1000)}s ago from ${sourceDescription})`
    );
    return false;
  }

  if (typeof window.fbq === 'function') {
    try {
      window.fbq('track', 'Lead');
      lastLeadFiredTimestamp = now;
      console.log(`[Meta Pixel] Successfully tracked 'Lead' event (source: ${sourceDescription})`);
      return true;
    } catch (err) {
      console.warn('[Meta Pixel] Error tracking Lead event:', err);
      return false;
    }
  } else {
    console.warn('[Meta Pixel] fbq function not found. Script may be blocked by adblocker or still loading.');
    return false;
  }
};

/**
 * Checks whether an incoming window message indicates a verified successful form submission
 * from the embedded Natton AI / GoHighLevel form widget (formId: WY84LeqbQa6ZYJXygSS3).
 */
export const isVerifiedFormSubmissionMessage = (event: MessageEvent): boolean => {
  const data = event.data;
  if (!data) return false;

  // Pattern 1: Natton / GoHighLevel form postMessage array
  // Upon successful API submission, GHL sends:
  // ["set-sticky-contacts", "_ud" | "embedded_iframe_...", ... , locationId, fingerprint]
  if (Array.isArray(data)) {
    if (data[0] === 'set-sticky-contacts') {
      return true;
    }
  }

  // Pattern 2: GoHighLevel standard FORM_SUBMITTED object or action
  if (typeof data === 'object') {
    if (
      data.type === 'FORM_SUBMITTED' ||
      data.type === 'form_submitted' ||
      data.type === 'form-submit' ||
      data.event === 'form-submit' ||
      data.event === 'FORM_SUBMITTED' ||
      data.action === 'form_submitted' ||
      data.action === 'set-sticky-contacts' ||
      data.message === 'form_submitted'
    ) {
      return true;
    }

    // Check if data payload mentions form submission
    if (data.formId === 'WY84LeqbQa6ZYJXygSS3' && (data.status === 'success' || data.isSubmitted)) {
      return true;
    }
  }

  // Pattern 3: Serialized JSON message string
  if (typeof data === 'string') {
    if (
      data.includes('FORM_SUBMITTED') ||
      (data.includes('set-sticky-contacts') && data.includes('embedded_iframe'))
    ) {
      return true;
    }

    try {
      const parsed = JSON.parse(data);
      if (
        parsed.type === 'FORM_SUBMITTED' ||
        parsed.type === 'form_submitted' ||
        parsed.type === 'form-submit' ||
        parsed.event === 'form-submit' ||
        (Array.isArray(parsed) && parsed[0] === 'set-sticky-contacts')
      ) {
        return true;
      }
    } catch {
      // Not JSON, ignore
    }
  }

  return false;
};

/**
 * Initializes listeners for cross-origin postMessage events emitted by the embedded
 * Natton AI form iframe. When the form successfully validates and is accepted by
 * the backend, the Lead event is automatically triggered.
 * 
 * Returns a cleanup function.
 */
export const initMetaPixelFormListener = (): (() => void) => {
  if (typeof window === 'undefined') {
    return () => {};
  }

  const handleMessage = (event: MessageEvent) => {
    // Only process verified success messages
    if (isVerifiedFormSubmissionMessage(event)) {
      trackMetaPixelLead('natton_ai_iframe_postMessage');
    }
  };

  // Also listen for storage updates (form_embed.js writes leadCollected: true to localStorage on submit)
  const handleStorage = (event: StorageEvent) => {
    if (event.key && event.key.startsWith('embedded_iframe_') && event.newValue) {
      try {
        const parsed = JSON.parse(event.newValue);
        if (parsed.leadCollected === true) {
          trackMetaPixelLead('natton_ai_localStorage_leadCollected');
        }
      } catch {
        // Ignore JSON parse errors
      }
    }
  };

  window.addEventListener('message', handleMessage);
  window.addEventListener('storage', handleStorage);

  return () => {
    window.removeEventListener('message', handleMessage);
    window.removeEventListener('storage', handleStorage);
  };
};
