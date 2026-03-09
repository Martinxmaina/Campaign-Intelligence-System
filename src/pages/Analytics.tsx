import React, { useState } from 'react';
import { 
  TrendingUp, 
  Smile, 
  HeartHandshake, 
  Touchpad, 
  Download, 
  FileText,
  ChevronDown,
  Map as MapIcon,
  Sparkles,
  X
} from 'lucide-react';
import { generateStrategicReport } from '../services/aiService';
import Markdown from 'react-markdown';

export default function Analytics() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [reportContent, setReportContent] = useState<string | null>(null);
  const [reportTopic, setReportTopic] = useState('National Support Trends - Q4 Forecast');

  const handleGenerateReport = async () => {
    setIsGenerating(true);
    const content = await generateStrategicReport(reportTopic);
    setReportContent(content);
    setIsGenerating(false);
  };

  const stats = [
    { label: 'Total Voters Reach', value: '1,284,042', change: '+12.4% from last month', icon: TrendingUp, color: 'text-emerald-600', bg: 'bg-emerald-100' },
    { label: 'Net Sentiment Score', value: '68.2', sub: '/ 100', change: 'Stable across key demographics', icon: Smile, color: 'text-primary', bg: 'bg-primary/10' },
    { label: 'Active Volunteers', value: '4,520', change: '+234 new signups', icon: HeartHandshake, color: 'text-amber-600', bg: 'bg-amber-100' },
    { label: 'Digital Engagement', value: '18.5%', change: '+2.1% CTR on latest ads', icon: Touchpad, color: 'text-purple-600', bg: 'bg-purple-100' },
  ];

  const reports = [
    { name: 'National Support Trends - Q3 Analysis', cat: 'Sentiment', date: 'Oct 12, 2023', status: 'Ready', statusColor: 'bg-emerald-100 text-emerald-600' },
    { name: 'County-level Engagement - Nairobi & Kiambu', cat: 'Geographic', date: 'Oct 10, 2023', status: 'Ready', statusColor: 'bg-emerald-100 text-emerald-600' },
    { name: 'Universal Healthcare Policy Impact (Kenya)', cat: 'Forecasting', date: 'Oct 08, 2023', status: 'Archived', statusColor: 'bg-slate-100 text-slate-500' },
  ];

  return (
    <div className="p-4 lg:p-8 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="font-black text-slate-900 dark:text-white tracking-tight text-2xl md:text-3xl">Analytics & Strategic Reports</h1>
          <p className="text-slate-500 dark:text-slate-400">Comprehensive overview of voter behavior, sentiment shifts, and geographic engagement metrics.</p>
        </div>
        <button 
          onClick={handleGenerateReport}
          disabled={isGenerating}
          className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-lg font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all disabled:opacity-70"
        >
          <Sparkles size={18} />
          {isGenerating ? 'Generating Strategy...' : 'AI Strategic Insight'}
        </button>
      </div>

      {reportContent && (
        <div className="bg-white dark:bg-slate-900 border-2 border-primary/20 rounded-2xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="p-4 bg-primary/5 border-b border-primary/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-primary" />
              <span className="text-xs font-black text-primary uppercase tracking-widest">AI Strategic Report</span>
            </div>
            <button onClick={() => setReportContent(null)} className="text-slate-400 hover:text-slate-600"><X size={18} /></button>
          </div>
          <div className="p-8 prose dark:prose-invert max-w-none prose-sm prose-headings:font-black prose-headings:tracking-tight prose-p:text-slate-600 dark:prose-p:text-slate-400">
            <Markdown>{reportContent}</Markdown>
          </div>
          <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 flex justify-end gap-3">
            <button className="text-xs font-bold text-slate-500 hover:text-slate-700">Dismiss</button>
            <button className="flex items-center gap-2 px-4 py-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-bold shadow-sm">
              <Download size={14} /> Export PDF
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">{stat.label}</span>
              <div className={`p-2 ${stat.bg} ${stat.color} rounded-lg`}>
                <stat.icon size={20} />
              </div>
            </div>
            <div className="text-2xl font-bold">
              {stat.value} {stat.sub && <span className="text-sm font-normal text-slate-400">{stat.sub}</span>}
            </div>
            <div className={`text-xs font-medium mt-1 ${stat.color}`}>{stat.change}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="font-bold text-lg">National Voter Sentiment Trends</h3>
              <p className="text-xs text-slate-500">6-month aggregate tracking across platform channels</p>
            </div>
            <div className="flex gap-2">
              <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-slate-400"><span className="size-2 rounded-full bg-primary"></span> Positive</span>
              <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-slate-400"><span className="size-2 rounded-full bg-slate-300"></span> Neutral</span>
            </div>
          </div>
          <div className="h-64 flex items-end gap-1 relative pt-4">
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
              {[1, 2, 3, 4].map(i => <div key={i} className="border-t border-slate-100 dark:border-slate-800 w-full h-px"></div>)}
            </div>
            <div className="flex-1 h-full flex items-end gap-1 group">
              {[40, 55, 45, 70, 65, 85, 90, 75, 95, 100].map((h, i) => (
                <div key={i} className="w-full bg-primary/20 hover:bg-primary transition-all rounded-t-sm" style={{ height: `${h}%` }}></div>
              ))}
            </div>
          </div>
          <div className="flex justify-between mt-4 text-[10px] font-bold text-slate-400 uppercase">
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'].map(m => <span key={m}>{m}</span>)}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <h3 className="font-bold text-lg mb-1">Issue Popularity</h3>
          <p className="text-xs text-slate-500 mb-6">Topic engagement by mention volume</p>
          <div className="space-y-4">
            {[
              { label: 'Healthcare Reform', val: 82 },
              { label: 'Economic Policy', val: 64 },
              { label: 'Climate Action', val: 51 },
              { label: 'Education', val: 45 },
              { label: 'Public Safety', val: 38 },
            ].map((issue, i) => (
              <div key={i}>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span>{issue.label}</span>
                  <span className="text-primary">{issue.val}%</span>
                </div>
                <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: `${issue.val}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-center">
            <button className="text-primary text-xs font-bold hover:underline">View Detailed Topic Analysis</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col min-h-[450px]">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-bold text-lg">County-level Support Heatmap</h3>
              <p className="text-xs text-slate-500">Relative support levels by district</p>
            </div>
            <select className="text-xs bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg py-1">
              <option>All Counties</option>
              <option>Nairobi</option>
              <option>Mombasa</option>
            </select>
          </div>
          <div className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden relative border border-slate-200 dark:border-slate-700">
            <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA0XHD9I_xSEYZDEIr_1Ra3qBLcvGliZliEqqRUEAVh6VY4kxbK97u34wdlDK28_bTQFLPc-LybADpmUDFisxu6RI-T-GCBIoGn8-t6lp3_Iws0gpwLLoeOeUkpoK0WjhL22aVZTNINHafE51XFEEnT9OqRELJ51z6TA7VveVwSYQoTDbaDsn-fOAdQBrc-aMTBxmgnJwvNg89sk67va-g2q4IMBr6AfP8EcqP3ku6imjDh6GZcU8cWpxhves8dY8K7Bf8yxU2Gpy-5')" }}></div>
            <div className="absolute top-4 left-4 flex flex-col gap-2 p-3 bg-white/90 dark:bg-slate-900/90 rounded-lg shadow-lg border border-slate-200 dark:border-slate-800 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <span className="size-3 rounded-full bg-primary"></span>
                <span className="text-[10px] font-bold uppercase">Strong Support</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-3 rounded-full bg-primary/40"></span>
                <span className="text-[10px] font-bold uppercase">Moderate Support</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-3 rounded-full bg-slate-300"></span>
                <span className="text-[10px] font-bold uppercase">Neutral / contested</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col min-h-[450px]">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="font-bold text-lg">Engagement Metrics Comparison</h3>
              <p className="text-xs text-slate-500">Direct comparison across voter demographics</p>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-between">
            {[
              { label: 'Age Group: 18-35 (Youth)', growth: '+14%', val: 85, w1: 70, w2: 15 },
              { label: 'Age Group: 36-50', growth: '+8%', val: 75, w1: 55, w2: 20 },
              { label: 'Age Group: 51-65', growth: '+3%', val: 50, w1: 40, w2: 10 },
              { label: 'Age Group: 66+', growth: '-2%', val: 35, w1: 30, w2: 5 },
            ].map((m, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-slate-500">
                  <span>{m.label}</span>
                  <span>Growth: {m.growth}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-8 flex gap-1">
                    <div className="h-full bg-primary rounded-l-md" style={{ width: `${m.w1}%` }}></div>
                    <div className="h-full bg-primary/30 rounded-r-md" style={{ width: `${m.w2}%` }}></div>
                  </div>
                  <span className="text-sm font-bold w-12">{m.val}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
          <h3 className="font-bold text-lg">Available Strategic Reports</h3>
          <button className="text-primary text-sm font-bold hover:underline">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 font-medium">
              <tr>
                <th className="px-6 py-4">Report Name</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Date Generated</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {reports.map((report, i) => (
                <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4 font-semibold whitespace-nowrap">{report.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{report.cat}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{report.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${report.statusColor}`}>
                      {report.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right whitespace-nowrap">
                    <button className="text-slate-400 hover:text-primary transition-colors"><Download size={18} /></button>
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
