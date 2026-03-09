import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  Radio, 
  BarChart3, 
  ClipboardList, 
  MessageSquare, 
  Database, 
  TrendingUp, 
  Send,
  Shield,
  Settings,
  LogOut
} from 'lucide-react';
import { Page } from '../types';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SidebarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  user: any;
  onLogout: () => void;
}

export default function Sidebar({ currentPage, setCurrentPage, user, onLogout }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'users', label: 'Users & Permissions', icon: Users },
    { id: 'events', label: 'Campaign Events', icon: Calendar },
    { id: 'social', label: 'Social Listening', icon: Radio },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'surveys', label: 'Survey Builder', icon: ClipboardList },
    { id: 'assistant', label: 'Strategy Assistant', icon: MessageSquare },
    { id: 'database', label: 'People Database', icon: Database },
    { id: 'performance', label: 'Performance', icon: TrendingUp },
    { id: 'messaging', label: 'Messaging', icon: Send },
    { id: 'sentiment', label: 'Sentiment', icon: Shield },
  ];

  return (
    <aside className="w-64 bg-navy-sidebar text-slate-300 flex flex-col h-screen sticky top-0 border-r border-slate-800 hidden lg:flex">
      <div className="p-6 flex items-center gap-3 border-b border-slate-800">
        <div className="bg-primary p-1.5 rounded-lg text-white">
          <LayoutDashboard size={24} />
        </div>
        <span className="font-bold text-white text-lg tracking-tight">Campaign Pulse</span>
      </div>
      
      <nav className="flex-1 overflow-y-auto py-4 custom-scrollbar">
        <div className="px-4 mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">Main Menu</div>
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentPage(item.id as Page)}
            className={cn(
              "w-full flex items-center gap-3 px-6 py-3 transition-colors text-left",
              currentPage === item.id 
                ? "bg-primary/20 text-white border-l-4 border-primary" 
                : "hover:bg-slate-800 text-slate-400"
            )}
          >
            <item.icon size={20} />
            <span className="text-sm font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800 bg-slate-900/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white overflow-hidden">
            <img 
              src={user?.avatar || "https://i.pravatar.cc/150?u=admin"} 
              alt="User" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">{user?.name || 'Alex Rodriguez'}</p>
            <p className="text-xs text-slate-400 truncate">{user?.role || 'Campaign Director'}</p>
          </div>
          <button onClick={onLogout} className="text-slate-500 hover:text-rose-500 transition-colors">
            <LogOut size={16} />
          </button>
        </div>
      </div>
    </aside>
  );
}
