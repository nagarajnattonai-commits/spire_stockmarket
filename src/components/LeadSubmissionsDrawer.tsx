import React from 'react';
import {
  X,
  Users,
  Download,
  Trash2,
  Mail,
  Phone,
  Calendar,
  Briefcase,
  Target,
  CheckCircle,
} from 'lucide-react';
import { LeadSubmission } from '../types';

interface LeadSubmissionsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  leads: LeadSubmission[];
  onClearLeads: () => void;
}

export const LeadSubmissionsDrawer: React.FC<LeadSubmissionsDrawerProps> = ({
  isOpen,
  onClose,
  leads,
  onClearLeads,
}) => {
  if (!isOpen) return null;

  const handleExportCSV = () => {
    if (leads.length === 0) return;
    const headers = [
      'ID',
      'SubmittedAt',
      'Name',
      'Phone',
      'Email',
      'Age',
      'Experience',
      'LearningGoal',
      'Source',
    ];
    const rows = leads.map((l) => [
      l.id,
      l.submittedAt,
      `"${l.fullName}"`,
      `"${l.phoneNumber}"`,
      `"${l.email}"`,
      l.age,
      `"${l.experience}"`,
      `"${l.learningGoal}"`,
      `"${l.source}"`,
    ]);

    const csvContent =
      'data:text/csv;charset=utf-8,' +
      [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `StockMarketMastery_Leads_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex justify-end">
      <div className="bg-slate-900 border-l border-slate-800 w-full max-w-md h-full flex flex-col justify-between p-6 shadow-2xl overflow-y-auto">
        
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-emerald-400" />
              <h3 className="text-base font-bold text-white">Captured Leads ({leads.length})</h3>
            </div>
            <button
              onClick={onClose}
              className="p-1 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            Lead submissions captured in browser local storage. Review lead details or export to CSV.
          </p>

          {/* Lead Cards List */}
          {leads.length === 0 ? (
            <div className="py-12 text-center text-xs text-slate-500 italic space-y-2">
              <Users className="w-8 h-8 text-slate-700 mx-auto" />
              <p>No leads submitted yet in this session.</p>
              <p className="text-[11px] text-slate-600">Submit a form on the page to see live entries here.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {leads.map((lead) => (
                <div
                  key={lead.id}
                  className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-sm">{lead.fullName}</span>
                    <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded font-mono font-bold">
                      {lead.id}
                    </span>
                  </div>

                  <div className="space-y-1 text-slate-300">
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-slate-500" />
                      <span>{lead.phoneNumber}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-slate-500" />
                      <span>{lead.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 text-[11px]">
                      <Briefcase className="w-3.5 h-3.5 text-slate-500" />
                      <span>Exp: {lead.experience} | Goal: {lead.learningGoal}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-500">
                    <span>Source: {lead.source}</span>
                    <span>{new Date(lead.submittedAt).toLocaleTimeString()}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Drawer Actions */}
        {leads.length > 0 && (
          <div className="pt-4 border-t border-slate-800 space-y-2">
            <button
              onClick={handleExportCSV}
              className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow"
            >
              <Download className="w-4 h-4" />
              <span>Export CSV File ({leads.length})</span>
            </button>

            <button
              onClick={onClearLeads}
              className="w-full py-2 rounded-xl bg-slate-800 hover:bg-rose-950/40 text-slate-400 hover:text-rose-400 font-medium text-xs flex items-center justify-center gap-2 transition-colors border border-slate-800"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear Test Submissions</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
