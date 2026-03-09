import React, { useState } from 'react';
import { Shield, Lock, Mail, ArrowRight } from 'lucide-react';

interface LoginPageProps {
  onLogin: (user: any) => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login
    setTimeout(() => {
      onLogin({ name: 'Admin User', email, role: 'Super Admin' });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl shadow-xl shadow-primary/20 mb-4">
            <Shield className="text-white" size={32} />
          </div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Campaign Pulse</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">Secure access to campaign intelligence.</p>
        </div>

        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm"
                  placeholder="admin@campaign.co.ke"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-slate-300 text-primary focus:ring-primary" />
                <span className="text-xs text-slate-500">Remember me</span>
              </label>
              <a href="#" className="text-xs font-bold text-primary hover:underline">Forgot password?</a>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full py-3 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20 disabled:opacity-70"
            >
              {isLoading ? 'Authenticating...' : 'Sign In'}
              {!isLoading && <ArrowRight size={18} />}
            </button>
          </form>
        </div>

        <p className="text-center mt-8 text-xs text-slate-500">
          Protected by Campaign Pulse Security. <br />
          By signing in, you agree to our <a href="#" className="text-primary font-bold">Terms of Service</a>.
        </p>
      </div>
    </div>
  );
}
