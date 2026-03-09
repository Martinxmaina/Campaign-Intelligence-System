import React from 'react';
import { 
  Shield, 
  TrendingUp, 
  Smile, 
  AlertTriangle, 
  ChevronRight, 
  Sparkles,
  MessageSquare,
  FileText,
  MessageCircle
} from 'lucide-react';

export default function SentimentOverview() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto w-full p-4 md:p-8">
      <section>
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Sentiment Overview</h1>
        <p className="text-slate-500 mt-1">Real-time sentiment analysis across all monitored Kenyan media channels (March 1-7, 2027).</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Sentiment Health</span>
            <div className="bg-green-100 dark:bg-green-900/30 text-green-600 px-2 py-1 rounded text-xs font-bold">+12%</div>
          </div>
          <p className="text-2xl font-bold text-slate-900 dark:text-white">POSITIVE SENTIMENT</p>
          <p className="text-sm text-slate-500 mt-2">Up 12% this week compared to last cycle</p>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="text-primary" size={16} />
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Top Drivers</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Nairobi Housing Plan', 'Regional Integration', 'Agricultural Reform'].map((d, i) => (
              <span key={i} className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">{d}</span>
            ))}
          </div>
        </div>

        <div className="bg-orange-50 dark:bg-orange-900/10 p-6 rounded-xl border border-orange-200 dark:border-orange-800/50 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="text-orange-600" size={16} />
            <span className="text-xs font-bold text-orange-700 uppercase tracking-widest">Negative Alert</span>
          </div>
          <p className="text-lg font-bold text-slate-900 dark:text-white leading-tight">85 mentions (Fuel Prices)</p>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">Sentiment dip detected across major cities due to transport strike risk</p>
        </div>
      </section>

      <section className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Sentiment Trends (Last 7 Days)</h2>
            <p className="text-sm text-slate-500">Tracking daily mention volume by category</p>
          </div>
          <div className="flex gap-4">
            {[
              { label: 'Positive', color: 'bg-green-500' },
              { label: 'Neutral', color: 'bg-slate-300' },
              { label: 'Negative', color: 'bg-red-500' },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className={`size-3 rounded-full ${s.color}`}></div>
                <span className="text-xs font-medium text-slate-600 dark:text-slate-400">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-80 w-full mt-4 overflow-x-auto">
          <svg className="w-full h-full overflow-visible" style={{ minWidth: '600px' }} viewBox="0 0 700 300">
            {[0, 75, 150, 225, 300].map(y => (
              <line key={y} className="text-slate-100 dark:text-slate-800" stroke="currentColor" strokeWidth="1" x1="0" x2="700" y1={y} y2={y}></line>
            ))}
            <path d="M0,130 L116,135 L232,125 L348,132 L464,128 L580,131 L700,134" fill="none" stroke="#94a3b8" strokeLinecap="round" strokeWidth="3"></path>
            <path d="M0,230 L116,220 L232,225 L348,205 L464,210 L580,215 L700,200" fill="none" stroke="#22c55e" strokeLinecap="round" strokeWidth="3"></path>
            <path d="M0,250 L116,260 L232,255 L348,270 L464,265 L580,258 L700,272" fill="none" stroke="#ef4444" strokeLinecap="round" strokeWidth="3"></path>
            <line className="text-primary/30" stroke="currentColor" strokeDasharray="4" strokeWidth="2" x1="348" x2="348" y1="0" y2="300"></line>
            <rect className="fill-primary" height="20" rx="4" width="100" x="300" y="-30"></rect>
            <text className="fill-white text-[10px] font-bold" textAnchor="middle" x="350" y="-16">Spike (Speech Day)</text>
            <circle cx="700" cy="200" fill="#22c55e" r="4"></circle>
            <text className="fill-slate-500 text-[10px] font-bold" textAnchor="end" x="700" y="190">Today</text>
          </svg>
          <div className="flex justify-between mt-6 text-xs font-bold text-slate-400 px-1">
            {['Mar 1, 2027', 'Mar 2', 'Mar 3', 'Mar 4', 'Mar 5', 'Mar 6', 'Mar 7'].map(d => <span key={d}>{d}</span>)}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="p-6 border-b border-slate-100 dark:border-slate-800">
            <h3 className="font-bold text-slate-900 dark:text-white">Detailed Sentiment Breakdown</h3>
          </div>
          <div className="p-6 space-y-4">
            {[
              { label: 'Social Media Mentions', val: 64, icon: MessageSquare },
              { label: 'Press/News Articles', val: 48, icon: FileText },
              { label: 'Direct Messaging Feedback', val: 72, icon: MessageCircle },
            ].map((b, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-400 flex items-center gap-2">
                    <b.icon size={14} /> {b.label}
                  </span>
                  <span className="font-bold">{b.val}% Positive</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-green-500 h-full" style={{ width: `${b.val}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 flex flex-col justify-center items-center text-center space-y-4">
          <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <Sparkles size={32} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">AI Strategy Insight</h3>
            <p className="text-sm text-slate-500 mt-2 px-6">
              "Capitalize on the positive reception of the Nairobi Housing Plan in informal settlements. Negative mentions of fuel prices are national; emphasize the palliative measures in agricultural reform."
            </p>
          </div>
          <button className="bg-primary text-white px-6 py-2 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity">
            View Full AI Strategy
          </button>
        </div>
      </section>
    </div>
  );
}
