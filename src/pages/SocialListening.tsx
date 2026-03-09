import React from 'react';
import { 
  Radio, 
  Search, 
  Bell, 
  Download, 
  Heart, 
  Eye, 
  Zap, 
  MessageCircle, 
  Repeat, 
  CheckCircle2,
  Filter,
  RefreshCw,
  Sparkles,
  Users
} from 'lucide-react';

export default function SocialListening() {
  const kpis = [
    { label: 'Total Mentions', value: '12.5k', change: '+14%', trend: 'up', icon: MessageCircle, color: 'text-primary' },
    { label: 'Net Sentiment', value: '+62%', change: '-2.1%', trend: 'down', icon: Heart, color: 'text-primary' },
    { label: 'Potential Reach', value: '2.4M', change: '+8%', trend: 'up', icon: Eye, color: 'text-primary' },
    { label: 'Viral Velocity', value: '8.4', change: '0.0', trend: 'neutral', icon: Zap, color: 'text-primary' },
  ];

  const keywords = [
    { text: '#Vantage2024', size: 'text-2xl', color: 'text-primary font-bold' },
    { text: 'Maandamano', size: 'text-sm', color: 'text-slate-400 font-medium' },
    { text: 'Finance Bill', size: 'text-xl', color: 'text-primary/70 font-semibold' },
    { text: 'BBI', size: 'text-xs', color: 'text-slate-500 font-medium' },
    { text: 'Nairobi', size: 'text-lg', color: 'text-primary/90 font-bold' },
    { text: 'Gachagua', size: 'text-sm', color: 'text-slate-400 font-medium' },
    { text: 'Gen Z', size: 'text-2xl', color: 'text-primary font-bold' },
    { text: 'Kenyatta', size: 'text-xs', color: 'text-slate-500 font-medium' },
    { text: 'Raila', size: 'text-lg', color: 'text-primary/80 font-semibold' },
    { text: 'Mombasa', size: 'text-sm', color: 'text-slate-400 font-medium' },
  ];

  const feedItems = [
    { id: 1, user: 'Dr. Maina Kamau', handle: '@kamau_maina', time: '14m ago', sentiment: 'Positive', text: 'The proposed upgrades to the Commuter Rail system in #Nairobi is a game changer for the daily hustle. Finally some focus on mass transit. #Vantage2024', stats: { replies: 24, retweets: 152, likes: 842 }, verified: true },
    { id: 2, user: 'r/Kenya', handle: 'via u/Nairobi-Sentinel', time: '42m ago', sentiment: 'Neutral', text: 'Does the new Finance Bill actually address the housing levy concerns? Specifically regarding the deductions for civil servants in Nairobi. Needs more transparency.', stats: { upvotes: '1.2k', comments: 435 } },
    { id: 3, user: 'Citizen Digital (Politics)', handle: 'Breaking Press', time: '1h ago', sentiment: 'Critical', text: '"High Court issues conservatory order halting the implementation of the new SHIF rollout pending further hearing."', stats: { link: 'Read Full Article' }, italic: true },
  ];

  return (
    <div className="p-6 space-y-6 bg-background-light dark:bg-background-dark">
      <div className="flex border-b border-slate-200 dark:border-slate-800 gap-8 overflow-x-auto whitespace-nowrap no-scrollbar">
        <button className="border-b-2 border-primary text-primary px-2 pb-3 text-sm font-bold flex items-center gap-2">
          <Radio size={18} /> X (Twitter)
        </button>
        <button className="border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 px-2 pb-3 text-sm font-bold flex items-center gap-2">
          <Users size={18} /> Facebook
        </button>
        <button className="border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 px-2 pb-3 text-sm font-bold flex items-center gap-2">
          <Radio size={18} /> Press/Blogs
        </button>
        <button className="border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 px-2 pb-3 text-sm font-bold flex items-center gap-2">
          <Repeat size={18} /> r/Kenya
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">{kpi.label}</span>
              <kpi.icon className={kpi.color} size={20} />
            </div>
            <div className="flex items-baseline gap-2">
              <h3 className="text-2xl font-bold">{kpi.value}</h3>
              <span className={`text-xs font-bold ${kpi.trend === 'up' ? 'text-green-500' : kpi.trend === 'down' ? 'text-red-500' : 'text-slate-400'}`}>
                {kpi.change}
              </span>
            </div>
            <p className="text-[10px] text-slate-400 mt-1">vs last 24 hours</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h4 className="font-bold text-slate-800 dark:text-white">Mentions Timeline (24h)</h4>
            <select className="text-xs bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded p-1 outline-none">
              <option>Hourly</option>
              <option>Real-time</option>
            </select>
          </div>
          <div className="h-64 flex flex-col justify-between">
            <div className="flex-1 relative">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 100">
                <path d="M0,80 Q50,20 100,50 T200,30 T300,70 T400,10" fill="none" stroke="#0079db" strokeLinecap="round" strokeWidth="3"></path>
                <path d="M0,80 Q50,20 100,50 T200,30 T300,70 T400,10 V100 H0 Z" fill="url(#grad)" opacity="0.1"></path>
                <defs>
                  <linearGradient id="grad" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#0079db', stopOpacity: 1 }}></stop>
                    <stop offset="100%" style={{ stopColor: '#0079db', stopOpacity: 0 }}></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex justify-between mt-4">
              {['00:00', '06:00', '12:00', '18:00', '23:59'].map((time, i) => (
                <span key={i} className="text-[10px] text-slate-400 font-bold uppercase">{time}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <h4 className="font-bold text-slate-800 dark:text-white mb-6">Trending Keywords</h4>
          <div className="flex flex-wrap gap-2 items-center justify-center content-center h-52">
            {keywords.map((kw, i) => (
              <span key={i} className={`${kw.size} ${kw.color} px-2`}>{kw.text}</span>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-500">Key Rising Term:</span>
              <span className="text-primary font-bold">Climate Policy</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
          <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
            <h4 className="font-bold text-slate-800 dark:text-white flex items-center gap-2">
              <Radio className="text-primary" size={20} /> Hot Topics Feed
            </h4>
            <div className="flex gap-2">
              <button className="p-1.5 rounded bg-slate-100 dark:bg-slate-800 text-primary">
                <Filter size={16} />
              </button>
              <button className="p-1.5 rounded bg-slate-100 dark:bg-slate-800">
                <RefreshCw size={16} />
              </button>
            </div>
          </div>
          <div className="divide-y divide-slate-100 dark:divide-slate-800 max-h-[500px] overflow-y-auto custom-scrollbar">
            {feedItems.map((item) => (
              <div key={item.id} className="p-4 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200 shrink-0"></div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm font-bold flex items-center gap-1">
                          {item.user} {item.verified && <CheckCircle2 size={14} className="text-primary" />}
                        </p>
                        <p className="text-[11px] text-slate-500">{item.handle} · {item.time}</p>
                      </div>
                      <div className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                        item.sentiment === 'Positive' ? 'bg-green-100 text-green-600' : 
                        item.sentiment === 'Critical' ? 'bg-red-100 text-red-600' : 'bg-slate-100 text-slate-500'
                      }`}>
                        {item.sentiment}
                      </div>
                    </div>
                    <p className={`text-sm mt-2 text-slate-700 dark:text-slate-300 ${item.italic ? 'italic font-bold' : ''}`}>
                      {item.text}
                    </p>
                    <div className="flex gap-6 mt-3 text-slate-400">
                      {item.stats.replies && <div className="flex items-center gap-1.5 text-xs"><MessageCircle size={14} /> {item.stats.replies}</div>}
                      {item.stats.retweets && <div className="flex items-center gap-1.5 text-xs"><Repeat size={14} /> {item.stats.retweets}</div>}
                      {item.stats.likes && <div className="flex items-center gap-1.5 text-xs"><Heart size={14} /> {item.stats.likes}</div>}
                      {item.stats.upvotes && <div className="flex items-center gap-1.5 text-xs"><Zap size={14} /> {item.stats.upvotes}</div>}
                      {item.stats.link && <div className="flex items-center gap-1.5 text-xs font-bold text-primary underline cursor-pointer">{item.stats.link}</div>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h4 className="font-bold text-slate-800 dark:text-white mb-4">Sentiment Breakdown</h4>
            <div className="space-y-4">
              {[
                { label: 'Positive', value: 64, color: 'bg-green-500', text: 'text-green-600' },
                { label: 'Neutral', value: 24, color: 'bg-slate-400', text: 'text-slate-400' },
                { label: 'Negative', value: 12, color: 'bg-red-500', text: 'text-red-500' },
              ].map((s, i) => (
                <div key={i}>
                  <div className="flex justify-between text-xs mb-1 font-bold">
                    <span className={s.text}>{s.label}</span>
                    <span>{s.value}%</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className={`${s.color} h-full`} style={{ width: `${s.value}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary p-6 rounded-xl shadow-lg text-white">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles size={20} />
              <h4 className="font-bold">AI Strategy Insight</h4>
            </div>
            <p className="text-sm leading-relaxed opacity-90">
              Current negative sentiment is focused on <span className="font-bold underline">funding details</span> of the Urban Renewal project. 
              <br/><br/>
              <strong>Action:</strong> Release an infographic detailing the fiscal responsibility and public-private partnership model of the project within the next 4 hours.
            </p>
            <button className="mt-4 w-full py-2 bg-white text-primary text-xs font-bold rounded-lg hover:bg-slate-50 transition-colors">
              Generate Draft Response
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
