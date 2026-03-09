import React from 'react';
import { 
  Vote, 
  PlusCircle, 
  Undo, 
  Redo, 
  Settings, 
  Trash2, 
  GripVertical,
  Smartphone,
  Mail,
  MessageSquare,
  Link as LinkIcon,
  CheckCircle2,
  Edit,
  Calendar,
  FileText,
  ChevronRight
} from 'lucide-react';

export default function SurveyBuilder() {
  const questionTypes = [
    { label: 'Multiple Choice', icon: Vote },
    { label: 'Open Text', icon: Edit },
    { label: 'Yes / No', icon: CheckCircle2 },
    { label: 'Ranking', icon: GripVertical },
    { label: 'Date Range', icon: Calendar },
  ];

  return (
    <div className="max-w-[1600px] mx-auto p-4 md:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
      <aside className="col-span-12 lg:col-span-3 flex flex-col gap-6 order-2 lg:order-1">
        <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">Question Types</h3>
          <div className="grid grid-cols-1 gap-2">
            {questionTypes.map((type, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg border-2 border-dashed border-slate-200 dark:border-slate-700 hover:border-primary/50 cursor-grab transition-all bg-slate-50 dark:bg-slate-800/50 group min-h-[48px] active:scale-95 touch-none">
                <type.icon className="text-primary group-hover:scale-110 transition-transform" size={18} />
                <span className="text-sm font-medium">{type.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">Survey Assets</h3>
          <div className="aspect-video rounded-lg bg-slate-100 dark:bg-slate-800 mb-3 flex items-center justify-center border border-slate-200 dark:border-slate-700 overflow-hidden relative group">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiL5LPSuNcExvidUHwPGzQxomvFoR_SmgypoCQZLhoHYy8G3c36EGx0qQqbXoWo8GcuDbem656UP1RQie5Yau71G3GexPWvf30Auol_jrIGT4doxwsKvJToq2F0zgiRZ3SRYpwbetwq5nlI4rhmwK7ZI6T8lsI7bOxcn_u1ErcojfJk2AzfarjvLHXKMHSx7sRpKwtp11YEgYnf5P85fHmefoLKGw3XxU25KqEGyBmgPzGj1PcxtqZdMqYIcTluk99K7TMkUTBHzqk" alt="Banner" referrerPolicy="no-referrer" />
            <button className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
              <Edit size={20} />
            </button>
          </div>
          <p className="text-xs text-slate-400">Header Image: Campaign_Banner_2024.jpg</p>
        </div>
      </aside>

      <section className="col-span-12 lg:col-span-6 flex flex-col gap-6 order-1 lg:order-2">
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
            <h2 className="text-xl font-bold">Survey Editor</h2>
            <div className="flex gap-2">
              <button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400"><Undo size={18} /></button>
              <button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400"><Redo size={18} /></button>
            </div>
          </div>
          <div className="p-6 space-y-6">
            <div className="p-5 rounded-xl border-2 border-primary bg-primary/5 relative">
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 flex flex-col gap-1 p-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded shadow-sm text-slate-400">
                <GripVertical size={14} />
              </div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xs font-bold text-primary uppercase">Question 1 • Multiple Choice</span>
                  <h4 className="text-lg font-semibold mt-1">Which issue is most important to you in the upcoming 2027 Kenyan election?</h4>
                </div>
                <div className="flex gap-2">
                  <button className="text-slate-400 hover:text-primary"><Settings size={18} /></button>
                  <button className="text-slate-400 hover:text-red-500"><Trash2 size={18} /></button>
                </div>
              </div>
              <div className="space-y-2">
                {['Infrastructure Development', 'Corruption Eradication', 'Youth Empowerment'].map((opt, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 min-h-[48px] cursor-pointer">
                    <div className="size-4 rounded-full border-2 border-slate-300"></div>
                    <span className="text-sm">{opt}</span>
                  </div>
                ))}
              </div>
              <button className="mt-4 text-sm text-primary font-medium flex items-center gap-1">
                <PlusCircle size={14} /> Add Option
              </button>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 transition-all bg-white dark:bg-slate-900">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase">Question 2 • Yes/No</span>
                  <h4 className="text-lg font-semibold mt-1">Do you plan to vote by mail this year?</h4>
                </div>
              </div>
              <div className="flex gap-4">
                {['Yes, definitely', "No, I'll vote in person"].map((opt, i) => (
                  <div key={i} className="flex-1 flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-700 min-h-[48px] cursor-pointer">
                    <div className="size-4 rounded-full border-2 border-slate-300"></div>
                    <span className="text-sm">{opt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl flex flex-col items-center justify-center text-slate-400 group hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
              <PlusCircle size={32} className="mb-2 group-hover:scale-110 transition-transform" />
              <p className="text-sm font-medium">Drop a question type here to add to survey</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">Real-time Responses Preview</h3>
            <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Live</span>
          </div>
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <p className="text-sm font-medium text-slate-500 mb-4">Sentiment Distribution</p>
              <div className="relative size-32 mx-auto">
                <svg className="size-full" viewBox="0 0 36 36">
                  <path className="text-slate-200 dark:text-slate-800" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="100, 100" strokeWidth="3"></path>
                  <path className="text-primary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="65, 100" strokeLinecap="round" strokeWidth="3"></path>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-xl font-bold">65%</span>
                  <span className="text-[10px] uppercase text-slate-400">Positive</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-sm font-medium text-slate-500">Top Priorities (N=412)</p>
              {[
                { label: 'Infrastructure', val: 42 },
                { label: 'Corruption', val: 28 },
                { label: 'Youth', val: 15 },
              ].map((p, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <div className="flex justify-between text-xs font-medium">
                    <span>{p.label}</span>
                    <span>{p.val}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="bg-primary h-full" style={{ width: `${p.val}%`, opacity: 1 - (i * 0.2) }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <aside className="col-span-12 lg:col-span-3 flex flex-col gap-6 order-3">
        <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">Preview Mode</h3>
            <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary cursor-pointer">
              <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition"></span>
            </div>
          </div>
          <div className="bg-background-light dark:bg-background-dark p-4 rounded-lg border border-slate-200 dark:border-slate-800 min-h-[300px] flex flex-col items-center justify-center text-center">
            <Smartphone size={48} className="text-primary/40 mb-3" />
            <p className="text-xs font-medium text-slate-500 px-4 leading-relaxed">Live preview shows how the survey looks on mobile devices.</p>
            <button className="mt-4 text-xs font-bold text-primary hover:underline">Open Full Preview</button>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-6">Distribution</h3>
          <div className="space-y-3">
            {[
              { label: 'Email Blast', icon: Mail },
              { label: 'SMS Invite', icon: MessageSquare },
              { label: 'Public Link', icon: LinkIcon },
            ].map((d, i) => (
              <div key={i} className="p-3 rounded-lg border border-slate-100 dark:border-slate-800 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors min-h-[56px]">
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded bg-primary/10 text-primary flex items-center justify-center">
                    <d.icon size={18} />
                  </div>
                  <span className="text-sm font-medium">{d.label}</span>
                </div>
                <ChevronRight size={16} className="text-slate-400" />
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-500 uppercase">Daily Limit</span>
              <span className="text-xs font-medium">8,200 / 10,000</span>
            </div>
            <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div className="bg-green-500 h-full w-[82%]"></div>
            </div>
            <p className="text-[10px] text-slate-400 mt-2">Upgrade to Pro for unlimited responses</p>
          </div>
        </div>

        <div className="bg-primary/10 p-5 rounded-xl border border-primary/20 text-center">
          <h4 className="text-primary font-bold text-sm mb-1">Targeted Audience</h4>
          <p className="text-xs text-primary/70 mb-4">You have 12,403 voters matching current filters in Nairobi County.</p>
          <button className="w-full bg-primary text-white text-xs font-bold py-2 rounded-lg hover:bg-primary/90 transition-colors">
            Configure Audience
          </button>
        </div>
      </aside>
    </div>
  );
}
