import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  PlusCircle, 
  Users, 
  TrendingUp, 
  Filter, 
  Download, 
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
  MapPin,
  Clock
} from 'lucide-react';

export default function CampaignEvents() {
  const [events, setEvents] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/events')
      .then(res => res.json())
      .then(data => {
        setEvents(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch events:", err);
        setIsLoading(false);
      });
  }, []);

  const stats = [
    { label: 'Scheduled Events', value: events.length.toString(), change: '+3 this week', icon: Calendar, color: 'text-primary' },
    { label: 'Total Attendees', value: events.reduce((acc, e) => acc + e.attendees, 0).toLocaleString(), change: '+12% from last month', icon: Users, color: 'text-primary' },
    { label: 'Avg. Engagement', value: '82%', change: 'Steady', icon: TrendingUp, color: 'text-primary' },
  ];

  return (
    <div className="p-4 md:p-6 lg:px-10 space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-slate-900 dark:text-white text-3xl font-black leading-tight tracking-tight">Campaign Events</h1>
          <p className="text-slate-500 dark:text-slate-400 text-base">Manage and monitor national campaign rallies and town halls.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-2.5 bg-primary hover:bg-primary/90 text-white rounded-lg font-bold transition-all shadow-lg shadow-primary/20">
          <PlusCircle size={20} />
          <span>Create Event</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-xl shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{stat.label}</p>
              <stat.icon className={stat.color} size={20} />
            </div>
            <p className="text-slate-900 dark:text-white text-3xl font-bold">{stat.value}</p>
            <p className="text-emerald-600 text-xs font-bold mt-1 flex items-center gap-1">
              <TrendingUp size={12} /> {stat.change}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
            <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <h3 className="text-lg font-bold">Upcoming Rallies & Town Halls</h3>
              <div className="flex gap-2">
                <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                  <Filter size={20} />
                </button>
                <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                  <Download size={20} />
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-4">Event Name</th>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4">Location</th>
                    <th className="px-6 py-4">Attendees</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  {events.map((event) => (
                    <tr key={event.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-primary/10 text-primary rounded-lg">
                            {event.type === 'rally' ? <TrendingUp size={18} /> : <Users size={18} />}
                          </div>
                          <span className="font-bold text-sm">{event.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm">{event.date}</td>
                      <td className="px-6 py-4 text-sm">{event.location}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                            <div className="bg-primary h-full" style={{ width: `${(event.attendees / 1500) * 100}%` }}></div>
                          </div>
                          <span className="text-xs font-medium">{event.attendees.toLocaleString()}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 whitespace-nowrap">
                          {event.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-slate-400 hover:text-primary transition-colors"><MoreVertical size={18} /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-500">Showing 3 of 24 events</span>
              <div className="flex gap-2">
                <button className="px-3 py-1 border border-slate-200 dark:border-slate-700 rounded-lg text-xs hover:bg-slate-50 dark:hover:bg-slate-800">Prev</button>
                <button className="px-3 py-1 bg-primary text-white rounded-lg text-xs">Next</button>
              </div>
            </div>
          </div>
        </div>

        <aside className="lg:col-span-4 space-y-6">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-sm uppercase tracking-wider text-slate-500">Upcoming Schedule</h3>
              <button className="text-primary"><Calendar size={18} /></button>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { month: 'OCT', day: '12', title: 'Nairobi Town Hall', sub: 'KICC, 6:30 PM' },
                { month: 'OCT', day: '15', title: 'Mombasa Rally', sub: 'Waterfront, 2:00 PM' },
                { month: 'OCT', day: '18', title: 'Kisumu Meetup', sub: 'Sports Ground, 10:00 AM' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`flex flex-col items-center justify-center w-12 h-12 rounded-lg border ${i === 0 ? 'bg-primary/10 text-primary border-primary/20' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 border-transparent'}`}>
                    <span className="text-[10px] font-bold leading-none">{item.month}</span>
                    <span className="text-lg font-black leading-tight">{item.day}</span>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm font-bold">{item.title}</p>
                    <p className="text-xs text-slate-500">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-2 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-lg text-xs font-bold text-slate-500 hover:text-primary hover:border-primary transition-all">
              View Full Calendar
            </button>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-xl shadow-sm border-l-4 border-l-amber-500">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-sm text-amber-600 flex items-center gap-2">
                <AlertTriangle size={18} />
                Fraud Watch
              </h3>
              <span className="bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 text-[10px] px-2 py-0.5 rounded font-bold">86 Flagged</span>
            </div>
            <p className="text-[11px] text-slate-500 mb-4 leading-relaxed">Suspicious registration patterns detected in recent Mombasa rally RSVPs.</p>
            <div className="space-y-3">
              {[
                { title: 'Duplicate IP Block', sub: '12 registrations (Mombasa)' },
                { title: 'Pattern Alert', sub: '12 registrations (Mombasa)' },
              ].map((alert, i) => (
                <div key={i} className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/50 flex items-center justify-between group cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold">{alert.title}</span>
                    <span className="text-[10px] text-slate-400">{alert.sub}</span>
                  </div>
                  <ChevronRight size={14} className="text-slate-300 group-hover:text-primary" />
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-2 bg-amber-500/10 text-amber-700 dark:text-amber-400 text-xs font-bold rounded-lg hover:bg-amber-500/20 transition-colors">
              Review All Flags
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
