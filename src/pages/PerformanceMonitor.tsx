import React from 'react';
import { 
  TrendingUp, 
  Users, 
  Eye, 
  MousePointer2, 
  ShoppingCart, 
  Filter, 
  Download, 
  MoreVertical,
  Facebook,
  Instagram,
  MessageCircle,
  ArrowUp,
  ArrowDown
} from 'lucide-react';

export default function PerformanceMonitor() {
  const stats = [
    { label: 'Total Spend', value: '$12,450.00', change: '12.5%', trend: 'up', icon: ShoppingCart },
    { label: 'Reach', value: '850.4K', change: '5.2%', trend: 'up', icon: Users },
    { label: 'Impressions', value: '2.1M', change: '8.1%', trend: 'up', icon: Eye },
    { label: 'Avg. CTR', value: '2.4%', change: '0.4%', trend: 'down', icon: MousePointer2 },
    { label: 'Conv. Rate', value: '3.8%', change: '1.2%', trend: 'up', icon: TrendingUp },
  ];

  const adSets = [
    { name: 'Mount Kenya Region - Direct', sub: 'Facebook News Feed', status: 'Active', spend: 'KSh 425,000', imp: '620,000', ctr: '2.85%', res: '152 Conv.', icon: Facebook, color: 'text-primary' },
    { name: 'Rift Valley - Flash Sale', sub: 'Instagram Stories', status: 'Active', spend: 'KSh 312,000', imp: '485,000', ctr: '1.92%', res: '98 Conv.', icon: Instagram, color: 'text-purple-600' },
    { name: 'Western Region - Awareness', sub: 'Multi-placement', status: 'Paused', spend: 'KSh 280,000', imp: '310,000', ctr: '2.10%', res: '76 Conv.', icon: Facebook, color: 'text-primary' },
    { name: 'Nyanza - Customer Care', sub: 'Messenger App', status: 'Active', spend: 'KSh 128,000', imp: '125,000', ctr: '3.40%', res: '45 Conv.', icon: MessageCircle, color: 'text-emerald-600' },
  ];

  return (
    <div className="p-4 sm:p-8 space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{stat.label}</p>
              <stat.icon className="text-primary" size={20} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</h3>
            <p className={`text-xs font-semibold flex items-center mt-2 ${stat.trend === 'up' ? 'text-emerald-500' : 'text-rose-500'}`}>
              {stat.trend === 'up' ? <ArrowUp size={12} /> : <ArrowDown size={12} />}
              {stat.change} from last month
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h4 className="text-slate-900 dark:text-white font-bold">Performance Over Time</h4>
              <p className="text-slate-500 text-sm">Last 30 days breakdown</p>
            </div>
            <select className="bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-xs font-medium px-3 py-1.5 focus:ring-primary/20 text-slate-700 dark:text-slate-200">
              <option>Impressions</option>
              <option>Clicks</option>
              <option>Spend</option>
            </select>
          </div>
          <div className="h-64 flex flex-col justify-end">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 500 200">
              <defs>
                <linearGradient id="perfGradient" x1="0%" x2="0%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="#0079db" stopOpacity="0.2"></stop>
                  <stop offset="100%" stopColor="#0079db" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
              <path d="M0,150 Q50,130 100,160 T200,100 T300,80 T400,120 T500,50 L500,200 L0,200 Z" fill="url(#perfGradient)"></path>
              <path d="M0,150 Q50,130 100,160 T200,100 T300,80 T400,120 T500,50" fill="none" stroke="#0079db" strokeLinecap="round" strokeWidth="3"></path>
            </svg>
            <div className="flex justify-between mt-4 px-2">
              {['01 MAY', '07 MAY', '14 MAY', '21 MAY', '28 MAY'].map((d, i) => (
                <span key={i} className="text-[10px] text-slate-400 font-bold tracking-wider">{d}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h4 className="text-slate-900 dark:text-white font-bold">Spend by Platform</h4>
              <p className="text-slate-500 text-sm">Channel distribution</p>
            </div>
            <div className="text-right">
              <h5 className="text-lg font-bold text-slate-900 dark:text-white">KSh 1,245,000 Total</h5>
              <p className="text-emerald-500 text-xs font-bold">+10% MoM</p>
            </div>
          </div>
          <div className="h-64 flex items-end justify-between px-4 pb-2">
            {[
              { label: 'Facebook', h: 80, op: 1 },
              { label: 'Instagram', h: 95, op: 0.6 },
              { label: 'Messenger', h: 40, op: 0.4 },
              { label: 'Audience', h: 25, op: 0.2 },
            ].map((p, i) => (
              <div key={i} className="flex flex-col items-center gap-3 w-1/5">
                <div className="bg-primary/10 dark:bg-slate-800 rounded-t-lg w-full relative" style={{ height: '120px' }}>
                  <div className="absolute bottom-0 left-0 w-full bg-primary rounded-t-lg transition-all" style={{ height: `${p.h}%`, opacity: p.op }}></div>
                </div>
                <span className="text-[10px] font-bold text-slate-500 uppercase">{p.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="px-4 sm:px-6 py-4 sm:py-5 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h4 className="text-slate-900 dark:text-white font-bold">Ad Set Performance Breakdown</h4>
          <div className="flex items-center gap-2">
            <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"><Filter size={18} /></button>
            <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"><Download size={18} /></button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 dark:bg-slate-800/50">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Ad Set Name</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">Spend</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">Impressions</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">CTR</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">Result</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {adSets.map((ad, i) => (
                <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`size-8 rounded bg-primary/20 flex items-center justify-center ${ad.color}`}>
                        <ad.icon size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">{ad.name}</p>
                        <p className="text-[10px] text-slate-500">{ad.sub}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      ad.status === 'Active' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-400'
                    }`}>
                      {ad.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-right font-medium">{ad.spend}</td>
                  <td className="px-6 py-4 text-sm text-right">{ad.imp}</td>
                  <td className="px-6 py-4 text-sm text-right">{ad.ctr}</td>
                  <td className="px-6 py-4 text-sm text-right font-bold text-primary">{ad.res}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-slate-600 dark:hover:text-white"><MoreVertical size={18} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
