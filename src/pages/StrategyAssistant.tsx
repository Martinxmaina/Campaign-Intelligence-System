import React, { useState, useEffect, useRef } from 'react';
import { Send, Paperclip, Sparkles, History, LayoutDashboard, Users, Database, Settings } from 'lucide-react';
import { chatWithAssistant } from '../services/aiService';
import { Message } from '../types';
import Markdown from 'react-markdown';

export default function StrategyAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'How can I help with your strategy today? Analyze voter trends, refine campaign messaging, or generate sentiment reports in real-time.', timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const history = messages.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }]
      }));
      const response = await chatWithAssistant(input, history);
      const assistantMessage: Message = { role: 'assistant', content: response || "I'm sorry, I couldn't process that.", timestamp: new Date() };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Chat error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-[calc(100vh-64px)] overflow-hidden bg-background-light dark:bg-background-dark">
      {/* Left Sidebar: Navigation & History */}
      <aside className="w-72 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col shrink-0 hidden lg:flex">
        <div className="p-6 flex items-center gap-3 border-b border-slate-100 dark:border-slate-800">
          <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
            <Sparkles size={18} />
          </div>
          <div>
            <h1 className="text-sm font-bold leading-tight">Strategy Assistant</h1>
            <p className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">Voter Insights Engine</p>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar">
          <nav className="space-y-1">
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary cursor-pointer">
              <History size={18} />
              <span className="text-sm font-medium">Recent Insights</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 cursor-pointer transition-colors">
              <LayoutDashboard size={18} />
              <span className="text-sm font-medium">Campaign Dashboard</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 cursor-pointer transition-colors">
              <Users size={18} />
              <span className="text-sm font-medium">Audience Segments</span>
            </div>
          </nav>
          <div>
            <h3 className="px-3 text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">Saved Sessions</h3>
            <div className="space-y-1">
              <div className="px-3 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-primary cursor-pointer truncate">Swing State Polling Q3</div>
              <div className="px-3 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-primary cursor-pointer truncate">Education Policy Sentiment</div>
              <div className="px-3 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-primary cursor-pointer truncate">Digital Ad Performance</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col relative">
        <div className="flex-1 overflow-y-auto custom-scrollbar" ref={scrollRef}>
          <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
            <div className="text-center space-y-4 mb-12">
              <div className="inline-flex items-center justify-center size-16 bg-primary/10 rounded-2xl text-primary mb-2">
                <Sparkles size={32} />
              </div>
              <h3 className="text-2xl font-bold tracking-tight">How can I help with your strategy today?</h3>
              <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto">Analyze voter trends, refine campaign messaging, or generate sentiment reports in real-time.</p>
            </div>

            <div className="space-y-6">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start gap-4'}`}>
                  {msg.role === 'assistant' && (
                    <div className="size-8 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-800">
                      <Sparkles size={14} className="text-primary" />
                    </div>
                  )}
                  <div className={`max-w-[85%] rounded-2xl px-5 py-4 shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-primary text-white rounded-tr-none' 
                      : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-tl-none'
                  }`}>
                    <div className={`text-sm leading-relaxed ${msg.role === 'assistant' ? 'markdown-body' : ''}`}>
                      {msg.role === 'assistant' ? <Markdown>{msg.content}</Markdown> : <p>{msg.content}</p>}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start gap-4 animate-pulse">
                  <div className="size-8 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-800">
                    <Sparkles size={14} className="text-primary" />
                  </div>
                  <div className="max-w-[85%] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl rounded-tl-none px-5 py-4 shadow-sm">
                    <div className="flex gap-1">
                      <div className="size-1.5 bg-slate-300 rounded-full animate-bounce"></div>
                      <div className="size-1.5 bg-slate-300 rounded-full animate-bounce delay-75"></div>
                      <div className="size-1.5 bg-slate-300 rounded-full animate-bounce delay-150"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-6 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <div className="max-w-3xl mx-auto relative">
            <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm p-2 flex items-center gap-2">
              <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
                <Paperclip size={20} />
              </button>
              <input 
                className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-2" 
                placeholder="Ask anything about campaign strategy..." 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="size-10 bg-primary text-white rounded-xl flex items-center justify-center hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-[10px] text-center text-slate-400 mt-3 font-medium uppercase tracking-widest">AI can make mistakes. Verify critical campaign data.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
