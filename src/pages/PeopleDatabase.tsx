import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Bell, 
  UserPlus, 
  Download, 
  Filter, 
  MoreVertical, 
  ChevronLeft, 
  ChevronRight,
  Mail,
  Phone,
  MessageSquare,
  Edit,
  X,
  CheckCircle2,
  ChevronDown
} from 'lucide-react';

export default function PeopleDatabase() {
  const [voters, setVoters] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/voters')
      .then(res => res.json())
      .then(data => {
        setVoters(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch voters:", err);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="flex-1 flex overflow-hidden">
      <div className="flex-1 overflow-y-auto p-4 lg:p-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <nav className="flex mb-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              <span>Campaign 2024</span>
              <span className="mx-2">/</span>
              <span>Voter Management</span>
            </nav>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">People Database</h2>
            <p className="text-slate-500 text-sm mt-1">Manage 24,502 total registered voters in your district.</p>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
              <Download size={18} /> Export CSV
            </button>
            <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 transition-all shadow-sm">
              <UserPlus size={18} /> Add Contact
            </button>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {['Party', 'Engagement Score', 'Tags', 'Location'].map((f, i) => (
            <button key={i} className="flex items-center gap-2 px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded-full text-xs font-semibold bg-white dark:bg-slate-800 hover:border-primary/50 transition-colors">
              {f} <ChevronDown size={14} />
            </button>
          ))}
          <div className="h-4 w-px bg-slate-300 dark:bg-slate-700 mx-1"></div>
          <button className="text-xs font-semibold text-primary hover:underline">Clear all filters</button>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Name</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Location</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Party</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Score</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Tags</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Last Contact</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Segment</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {voters.map((v, i) => (
                <tr key={i} className={`hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors group ${v.active ? 'bg-primary/5 border-l-4 border-primary' : ''}`}>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={v.avatar} alt={v.name} className="w-10 h-10 rounded-full border border-slate-100 dark:border-slate-700" referrerPolicy="no-referrer" />
                      <div>
                        <div className="font-bold text-sm text-slate-900 dark:text-white">{v.name}</div>
                        <div className="text-xs text-slate-500">ID: {v.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{v.loc}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${
                      v.party === 'UDA' ? 'bg-blue-100 text-blue-700' : 
                      v.party === 'ODM' ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {v.party}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 w-16 bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
                        <div className={`h-full ${v.score > 80 ? 'bg-primary' : v.score > 50 ? 'bg-yellow-500' : 'bg-orange-500'}`} style={{ width: `${v.score}%` }}></div>
                      </div>
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{v.score}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {v.tags.map((t, j) => (
                        <span key={j} className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-medium border border-slate-200 dark:border-slate-700">{t}</span>
                      ))}
                    </div>
                  </td>
                  <td className={`px-6 py-4 text-xs ${v.active ? 'text-primary font-semibold' : 'text-slate-500'}`}>{v.last}</td>
                  <td className="px-6 py-4 text-xs font-medium text-slate-700 dark:text-slate-300">{v.segment}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/30 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-500 font-medium">Showing 1 to 4 of 24,502 results</span>
            <div className="flex items-center gap-2">
              <button className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition-colors disabled:opacity-30" disabled><ChevronLeft size={16} /></button>
              <span className="text-xs font-bold px-2">1</span>
              <button className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition-colors"><ChevronRight size={16} /></button>
            </div>
          </div>
        </div>
      </div>

      <aside className="w-80 border-l border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shrink-0 flex flex-col hidden lg:flex">
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <h3 className="font-bold text-slate-900 dark:text-white">Profile Quick View</h3>
          <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"><X size={18} /></button>
        </div>
        <div className="p-6 flex-1 overflow-y-auto custom-scrollbar">
          <div className="flex flex-col items-center text-center mb-8">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnmG7wywL0CYN4Y8UHSUWiPY6ESjNYWZ0JQLZErr64PlU9-YLPMCzUXRFHV5c-VQm2LEA7T3pPhqo_RLDBtTup0PNeLRUfztI7DVaTQEhiyLULLtWTML7oOwcx7CJEsUl-teN9tN87euiWa8P9XAWc-WUHCCj8ACNLjEd-3UhbLws1sics2SIFYacKFAJx5aFJhonaWypJ8q10N1Ccm8bL0hDWXr38e_Hf6DAy9o4ZxJfSg-LKdav08YKvMO5diiqO96rEhHBi9_Hk" alt="Profile" className="w-20 h-20 rounded-full mb-4 ring-4 ring-primary/10" referrerPolicy="no-referrer" />
            <h4 className="text-lg font-bold">James Kamau</h4>
            <div className="flex items-center gap-2 mt-1">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-tighter">Active Conversation</span>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">Voter Info</label>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-slate-400">Voter ID</div>
                  <div className="text-sm font-semibold">22894105</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400">Registered</div>
                  <div className="text-sm font-semibold">Aug 2012</div>
                </div>
                <div className="col-span-2">
                  <div className="text-xs text-slate-400">Address</div>
                  <div className="text-sm font-semibold italic">Block B, Nyali, Mombasa</div>
                </div>
              </div>
            </div>
            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">Quick Actions</label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: 'Send SMS', icon: MessageSquare },
                  { label: 'Phone Log', icon: Phone },
                  { label: 'Add Note', icon: Edit },
                  { label: 'Email', icon: Mail },
                ].map((a, i) => (
                  <button key={i} className="flex flex-col items-center gap-1 p-3 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    <a.icon className="text-primary" size={18} />
                    <span className="text-[10px] font-bold">{a.label}</span>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">Recent Activity</label>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                  <div>
                    <div className="text-xs font-bold">SMS Sent</div>
                    <div className="text-[10px] text-slate-500 italic">"Thanks for the support at the rally..."</div>
                    <div className="text-[9px] text-slate-400 mt-0.5">Today at 10:42 AM</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5"></div>
                  <div>
                    <div className="text-xs font-bold">Donation Processed</div>
                    <div className="text-[10px] text-slate-500 font-medium">$50.00 Contribution</div>
                    <div className="text-[9px] text-slate-400 mt-0.5">3 days ago</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 border-t border-slate-100 dark:border-slate-800">
          <button className="w-full py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-bold hover:bg-slate-200 transition-colors">
            View Full Profile
          </button>
        </div>
      </aside>
    </div>
  );
}
