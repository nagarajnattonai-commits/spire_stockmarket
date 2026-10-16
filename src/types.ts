export interface LeadFormValues {
  fullName: string;
  phoneNumber: string;
  email: string;
  age: string;
  experience: string;
  learningGoal: string;
  preferredTime?: string;
  comments?: string;
}

export interface LeadSubmission extends LeadFormValues {
  id: string;
  submittedAt: string;
  status: 'New' | 'Contacted' | 'Enrolled' | 'Follow-up';
  source: string;
}

export interface CurriculumLevel {
  level: string;
  title: string;
  duration: string;
  color: string;
  badge: string;
  description: string;
  topics: string[];
}

export interface PracticalActivity {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface StockSample {
  symbol: string;
  name: string;
  sector: string;
  price: number;
  pe: number;
  marketCap: string;
  trend: 'Uptrend' | 'Downtrend' | 'Sideways';
  support: number;
  resistance: number;
  rsi: number;
  signal: 'Breakout Watch' | 'Value Buy' | 'Consolidating' | 'Overbought';
}
