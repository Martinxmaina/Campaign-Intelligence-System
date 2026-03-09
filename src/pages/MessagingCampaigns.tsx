import React from 'react';
import { 
  Send, 
  Users, 
  Radio, 
  Settings, 
  Mail, 
  MessageSquare, 
  MessageCircle, 
  PlusCircle, 
  Filter, 
  MoreVertical, 
  Edit, 
  BarChart, 
  Calendar, 
  Clock, 
  Paperclip, 
  AtSign, 
  Bold, 
  Italic, 
  Link as LinkIcon,
  LayoutDashboard,
  Image as ImageIcon
} from 'lucide-react';

export default function MessagingCampaigns() {
  const campaigns = [
    { name: 'Azimio Grassroots Drive - Nairobi', time: 'Sent Oct 24, 2023 • 10:30 AM', status: 'Live', audience: '12,450 Nairobi Youth', rate: 74.2, clicks: '1,892' },
    { name: 'Bottom-Up Economic Forum: Kericho', time: 'Scheduled for Oct 28, 2023', status: 'Scheduled', audience: '45,000 Rift Valley Farmers', rate: 0, clicks: '—' },
    { name: 'Volunteer Recruitment Drive', time: 'Sent Oct 20, 2023 • 2:15 PM', status: 'Completed', audience: '8,200 Voters', rate: 52.8, clicks: '456' },
  ];

  return (
    <div className="max-w-7xl mx-auto w-full p-4 lg:p-8 grid grid-cols-12 gap-8 pb-24">
      <aside className="col-span-12 lg:col-span-3 flex flex-col gap-6">
        <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3 mb-6">
            <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">account_balance</span>
            </div>
            <div>
              <h3 className="font-bold text-sm">National Liberty Party</h3>
              <p className="text-xs text-slate-500">Admin Portal</p>
            </div>
          </div>
          <nav className="flex flex-col gap-1">
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary text-white font-medium" href="#">
              <Send size={18} /> <span>Messaging</span>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#">
              <Users size={18} /> <span>Voter Lists</span>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#">
              <Radio size={18} /> <span>Live Polls</span>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#">
              <Settings size={18} /> <span>Settings</span>
            </a>
          </nav>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
          <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Performance Overview</h4>
          <div className="space-y-6">
            {[
              { label: 'Avg. Open Rate', val: '68%', rot: 'rotate-45' },
              { label: 'Click-thru Rate', val: '12%', rot: 'rotate-[120deg]' },
              { label: 'Response Rate', val: '4.2%', rot: 'rotate-[10deg]' },
            ].map((s, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-2xl font-black text-primary">{s.val}</p>
                  <p className="text-xs font-medium">{s.label}</p>
                </div>
                <div className={`size-12 rounded-full border-4 border-primary border-r-slate-200 dark:border-r-slate-700 ${s.rot}`}></div>
              </div>
            ))}
          </div>
        </div>
      </aside>

      <section className="col-span-12 lg:col-span-9 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Messaging Campaigns</h1>
            <p className="text-slate-500 mt-1">Manage and monitor your digital outreach efforts.</p>
          </div>
          <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-all">
            <PlusCircle size={20} /> Create New Campaign
          </button>
        </div>

        <div className="border-b border-slate-200 dark:border-slate-800">
          <div className="flex gap-8 overflow-x-auto pb-px scrollbar-hide">
            <button className="flex items-center gap-2 py-4 px-1 border-b-2 border-primary text-primary font-bold whitespace-nowrap">
              <Mail size={18} /> Email Campaigns
            </button>
            <button className="flex items-center gap-2 py-4 px-1 border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 font-medium whitespace-nowrap">
              <MessageSquare size={18} /> SMS Outreach
            </button>
            <button className="flex items-center gap-2 py-4 px-1 border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 font-medium whitespace-nowrap">
              <MessageCircle size={18} /> WhatsApp Broadcast
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/50">
            <h3 className="font-bold">Active & Scheduled</h3>
            <button className="p-1 text-slate-400 hover:text-primary"><Filter size={18} /></button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="text-xs font-bold text-slate-500 uppercase tracking-wider bg-slate-50 dark:bg-slate-800/30">
                  <th className="px-6 py-4">Campaign Name</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Audience</th>
                  <th className="px-6 py-4 text-center">Open Rate</th>
                  <th className="px-6 py-4 text-center">Clicks</th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {campaigns.map((c, i) => (
                  <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-bold text-slate-900 dark:text-white">{c.name}</div>
                      <div className="text-xs text-slate-500">{c.time}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${
                        c.status === 'Live' ? 'bg-green-100 text-green-700' : 
                        c.status === 'Scheduled' ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-700'
                      }`}>
                        {c.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-medium text-sm">{c.audience}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <span className="font-bold text-primary">{c.rate > 0 ? `${c.rate}%` : '—'}</span>
                        {c.rate > 0 && (
                          <div className="w-12 h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                            <div className="bg-primary h-full" style={{ width: `${c.rate}%` }}></div>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center font-bold">{c.clicks}</td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-400 hover:text-primary">
                        {c.status === 'Scheduled' ? <Edit size={18} /> : c.status === 'Completed' ? <BarChart size={18} /> : <MoreVertical size={18} />}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 space-y-6">
            <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
              <Edit className="text-primary" size={20} />
              <h3 className="font-bold">Quick Message Draft</h3>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-600 dark:text-slate-400 mb-2">Recipient Segment</label>
                <select className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-primary">
                  <option>Nairobi Youth - Embakasi East</option>
                  <option>Rift Valley Farmers - Uasin Gishu</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-600 dark:text-slate-400 mb-2">Message Body</label>
                <div className="rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
                  <div className="flex gap-2 p-2 bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                    <button className="p-1 hover:bg-slate-200 rounded"><Bold size={14} /></button>
                    <button className="p-1 hover:bg-slate-200 rounded"><Italic size={14} /></button>
                    <button className="p-1 hover:bg-slate-200 rounded"><LinkIcon size={14} /></button>
                    <button className="p-1 hover:bg-slate-200 rounded"><AtSign size={14} /></button>
                  </div>
                  <textarea className="w-full border-none bg-white dark:bg-slate-900 focus:ring-0 p-4 text-sm resize-none" placeholder="Hi {{first_name}}, join us as we discuss the Bottom-Up Economic Model..." rows={6}></textarea>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-bold text-slate-600 dark:text-slate-400 mb-2">Schedule Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 pl-10 py-2 text-sm" type="date" />
                  </div>
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-bold text-slate-600 dark:text-slate-400 mb-2">Time</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 pl-10 py-2 text-sm" type="time" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-200 dark:bg-slate-900 rounded-xl flex items-center justify-center p-8 border border-slate-300 dark:border-slate-800">
            <div className="w-72 h-[500px] bg-white dark:bg-slate-900 rounded-[40px] border-[8px] border-slate-800 shadow-2xl overflow-hidden relative">
              <div className="bg-primary px-4 pt-8 pb-4 text-white text-center">
                <div className="text-[10px] opacity-75 uppercase font-bold tracking-widest">Election 2024</div>
                <div className="font-bold text-sm">Bottom-Up Economic Forum</div>
              </div>
              <div className="p-5 space-y-4">
                <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-3 text-[11px] leading-relaxed">Habari Mark! Join us for a critical forum on the Bottom-Up Economic Model this Thursday at 7 PM. Your voice matters in the future of the Nairobi Region.</div>
                <div className="bg-primary text-white text-[11px] font-bold py-2 rounded-lg text-center cursor-pointer">RSVP Now</div>
                <div className="flex justify-center">
                  <div className="size-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                    <ImageIcon size={24} className="text-slate-300" />
                  </div>
                </div>
                <div className="text-[9px] text-slate-400 text-center px-4">Stop to opt-out. Paid for by the National Liberty Party.</div>
              </div>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-slate-300 dark:bg-slate-700 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
