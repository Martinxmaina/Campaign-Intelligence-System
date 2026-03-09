import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Calendar, 
  TrendingUp, 
  MessageSquare, 
  BarChart3,
  Mail,
  ShieldAlert,
  ArrowUpRight,
  ArrowDownRight,
  MapPin,
  Activity,
  Target,
  Zap,
  Sparkles
} from 'lucide-react';
import { generateDashboardSummary } from '../services/aiService';

export default function Dashboard() {
  const [aiSummary, setAiSummary] = useState<string | undefined>("Analyzing campaign data for strategic insights...");
  const [isAiLoading, setIsAiLoading] = useState(true);

  const stats = [
    { label: 'Voter Sentiment', value: '68.4%', change: '+5.2%', trend: 'up', icon: TrendingUp, color: 'text-primary', bg: 'bg-primary/10' },
    { label: 'Reach (National)', value: '2.4M', change: '+124K', trend: 'up', icon: Activity, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Engagement Rate', value: '4.2%', change: '+0.8%', trend: 'up', icon: MessageSquare, color: 'text-purple-600', bg: 'bg-purple-50' },
    { label: 'Campaign Spend', value: 'KSh 12.4M', change: '82% of Budget', trend: 'neutral', icon: Target, color: 'text-orange-600', bg: 'bg-orange-50' },
  ];

  const regionalSupport = [
    { region: 'Nairobi', support: 72, trend: 'up' },
    { region: 'Mombasa', support: 58, trend: 'down' },
    { region: 'Kisumu', support: 84, trend: 'up' },
    { region: 'Nakuru', support: 45, trend: 'neutral' },
    { region: 'Eldoret', support: 61, trend: 'up' },
  ];

  const trendingTopics = ['Unga Prices', 'CBC Education', 'Healthcare', 'Infrastructure'];

  const activities = [
    { id: 1, type: 'email', title: 'Email Blast Dispatched', desc: '"Town Hall Invitation" sent to 120,000 voters across Nairobi County.', time: '2 hours ago', icon: Mail, color: 'text-blue-600', bg: 'bg-blue-100' },
    { id: 2, type: 'fund', title: 'New Fundraising Milestone', desc: 'Reached KSh 300M goal for the quarter. Major fundraiser held in Mombasa.', time: '5 hours ago', icon: TrendingUp, color: 'text-green-600', bg: 'bg-green-100' },
    { id: 3, type: 'alert', title: 'War Room Alert', desc: 'Disinformation campaign detected on social media targeting Nakuru voters.', time: '2 days ago', icon: ShieldAlert, color: 'text-orange-600', bg: 'bg-orange-100' },
  ];

  useEffect(() => {
    const fetchAiSummary = async () => {
      const summary = await generateDashboardSummary({
        sentiment: '68.4%',
        reach: '2.4M',
        regionalSupport,
        trendingTopics
      });
      setAiSummary(summary);
      setIsAiLoading(false);
    };
    fetchAiSummary();
  }, []);

  return (
    <div className="p-4 md:p-8 space-y-8 max-w-[1600px] mx-auto w-full">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Campaign Intelligence</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Real-time pulse of the 2024 National Election cycle.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map(i => (
              <img key={i} src={`https://i.pravatar.cc/150?u=${i}`} className="size-8 rounded-full border-2 border-white dark:border-slate-900" alt="Team" referrerPolicy="no-referrer" />
            ))}
          </div>
          <div className="h-8 w-px bg-slate-200 dark:bg-slate-800 mx-2"></div>
          <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 shadow-lg shadow-primary/20">
            <Zap size={16} /> Live War Room
          </button>
        </div>
      </header>

      {/* AI Strategic Summary Card */}
      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 p-6 rounded-2xl shadow-sm flex flex-col md:flex-row items-center gap-6">
        <div className="bg-primary text-white p-4 rounded-xl shadow-lg shadow-primary/20">
          <Sparkles size={32} />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">AI Strategic Directive</span>
            <div className="h-px flex-1 bg-primary/10"></div>
          </div>
          <p className={`text-lg font-bold text-slate-800 dark:text-slate-100 leading-tight ${isAiLoading ? 'animate-pulse text-slate-400' : ''}`}>
            {aiSummary}
          </p>
        </div>
        <button className="whitespace-nowrap px-6 py-2.5 bg-white dark:bg-slate-900 border border-primary/30 text-primary rounded-lg text-sm font-black hover:bg-primary hover:text-white transition-all">
          Refine Strategy
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow group">
            <div className="flex items-center justify-between mb-4">
              <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">{stat.label}</span>
              <div className={`p-2 ${stat.bg} ${stat.color} rounded-lg group-hover:scale-110 transition-transform`}>
                <stat.icon size={18} />
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <h3 className="text-3xl font-black text-slate-900 dark:text-white">{stat.value}</h3>
              <span className={`text-xs font-bold flex items-center ${stat.trend === 'up' ? 'text-emerald-500' : stat.trend === 'down' ? 'text-rose-500' : 'text-slate-400'}`}>
                {stat.trend === 'up' ? <ArrowUpRight size={12} /> : stat.trend === 'down' ? <ArrowDownRight size={12} /> : null}
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col min-h-[400px]">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">National Sentiment Pulse</h3>
              <p className="text-xs text-slate-500">Aggregated sentiment analysis across all major counties.</p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="size-3 rounded-full bg-primary"></div>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Positive</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-3 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Neutral</span>
              </div>
            </div>
          </div>
          <div className="flex-1 relative overflow-hidden rounded-lg bg-slate-50 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800">
            <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1000 200" preserveAspectRatio="none">
              <defs>
                <linearGradient id="dashGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#0079db" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#0079db" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0,150 Q100,130 200,145 T400,90 T600,110 T800,50 T1000,70 V200 H0 Z" fill="url(#dashGradient)" />
              <path d="M0,150 Q100,130 200,145 T400,90 T600,110 T800,50 T1000,70" fill="none" stroke="#0079db" strokeWidth="4" strokeLinecap="round" />
              <circle cx="800" cy="50" r="6" fill="#0079db" className="animate-pulse" />
            </svg>
            <div className="absolute inset-0 flex items-end justify-between px-6 pb-4 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
              <span>Week 1</span>
              <span>Week 2</span>
              <span>Week 3</span>
              <span>Week 4</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Regional Support</h3>
            <MapPin size={18} className="text-slate-400" />
          </div>
          <div className="space-y-5">
            {regionalSupport.map((region, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-slate-700 dark:text-slate-300">{region.region}</span>
                  <div className="flex items-center gap-2">
                    <span className={region.trend === 'up' ? 'text-emerald-500' : region.trend === 'down' ? 'text-rose-500' : 'text-slate-400'}>
                      {region.support}%
                    </span>
                    {region.trend === 'up' ? <ArrowUpRight size={12} /> : region.trend === 'down' ? <ArrowDownRight size={12} /> : null}
                  </div>
                </div>
                <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-1000 ${region.support > 70 ? 'bg-emerald-500' : region.support > 50 ? 'bg-primary' : 'bg-orange-500'}`} 
                    style={{ width: `${region.support}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-2.5 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg text-xs font-bold hover:bg-slate-100 transition-colors border border-slate-200 dark:border-slate-700">
            View Geographic Breakdown
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Recent Campaign Activity</h3>
            <button className="text-primary text-xs font-bold hover:underline">View Full Log</button>
          </div>
          <div className="space-y-6">
            {activities.map((activity) => (
              <div key={activity.id} className="flex gap-4 group cursor-pointer">
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${activity.bg} ${activity.color} flex items-center justify-center group-hover:scale-105 transition-transform`}>
                  <activity.icon size={22} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <p className="text-sm font-bold text-slate-900 dark:text-white">{activity.title}</p>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{activity.time}</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">{activity.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Trending Topics</h3>
          <div className="flex flex-wrap gap-2 flex-1">
            {[
              { tag: 'Unga Prices', score: 92 },
              { tag: 'CBC Education', score: 85 },
              { tag: 'Healthcare', score: 78 },
              { tag: 'Infrastructure', score: 72 },
              { tag: 'Job Creation', score: 68 },
              { tag: 'Housing', score: 64 },
              { tag: 'Taxation', score: 59 },
              { tag: 'Agriculture', score: 52 },
            ].map((issue, i) => (
              <span 
                key={i} 
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-default
                  ${i === 0 ? 'bg-primary text-white shadow-md shadow-primary/20 scale-105' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'}
                `}
              >
                {issue.tag}
              </span>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-emerald-500 animate-ping"></div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Live Insight</span>
              </div>
              <span className="text-primary font-black text-xs">Cost of Living +15%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
