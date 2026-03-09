import React from 'react';
import { Search, Bell, HelpCircle, Menu } from 'lucide-react';

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between z-10 px-4 md:px-8 sticky top-0">
      <div className="flex items-center gap-4">
        <button className="lg:hidden p-2 -ml-2 text-slate-600 dark:text-slate-400">
          <Menu size={20} />
        </button>
        <h2 className="text-lg font-bold text-slate-900 dark:text-white hidden sm:block">{title}</h2>
        <div className="relative w-full max-w-[200px] md:max-w-md ml-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary text-sm" 
            placeholder="Search data, volunteers, reports..." 
            type="text"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg relative">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
        </button>
        <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg hidden sm:block">
          <HelpCircle size={20} />
        </button>
        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-xs cursor-pointer">
          AR
        </div>
      </div>
    </header>
  );
}
