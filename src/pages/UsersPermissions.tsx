import React, { useState, useEffect } from 'react';
import { 
  Users, 
  UserPlus, 
  ShieldCheck, 
  Settings, 
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  Edit3,
  CheckCircle2
} from 'lucide-react';

export default function UsersPermissions() {
  const [users, setUsers] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch users:", err);
        setIsLoading(false);
      });
  }, []);

  const roles = [
    { name: 'Super Admin', access: 'Full Access', desc: 'Complete control over all settings, billing, users, and security logs.', tags: ['Settings', 'Financials', '+12 more'], color: 'border-primary' },
    { name: 'Research', access: 'Limited Access', desc: 'View reports and manage internal datasets. Cannot invite users.', tags: ['Analytics', 'Export', '+3 more'], color: 'border-slate-300' },
  ];

  return (
    <div className="p-4 md:p-8 lg:p-10 max-w-7xl mx-auto w-full space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="font-black text-slate-900 dark:text-white tracking-tight text-2xl">Users & Permissions</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Manage organization hierarchy and access control policies.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg font-bold text-sm hover:bg-slate-200 transition-all border border-slate-200 dark:border-slate-700">
            <ShieldCheck size={18} />
            Create Role
          </button>
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg font-bold text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
            <UserPlus size={18} />
            Invite User
          </button>
        </div>
      </div>

      <div className="border-b border-slate-200 dark:border-slate-800 overflow-x-auto">
        <nav className="flex gap-8 min-w-max px-1">
          <button className="border-b-2 border-primary text-primary pb-4 px-1 text-sm font-bold flex items-center gap-2">
            Users List
            <span className="bg-primary/10 text-primary text-[10px] px-1.5 py-0.5 rounded-full">24</span>
          </button>
          <button className="border-b-2 border-transparent text-slate-500 dark:text-slate-400 pb-4 px-1 text-sm font-medium hover:text-slate-900 dark:hover:text-white transition-all">Role Definitions</button>
          <button className="border-b-2 border-transparent text-slate-500 dark:text-slate-400 pb-4 px-1 text-sm font-medium hover:text-slate-900 dark:hover:text-white transition-all">Global Settings</button>
        </nav>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2 space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">User</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Role</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Last Active</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-right"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {users.map((user, i) => (
                    <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="size-9 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                            <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-900 dark:text-white">{user.name}</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">{user.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold ${user.role === 'Super Admin' ? 'bg-primary/10 text-primary' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'}`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{user.lastActive}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1.5">
                          <div className={`size-1.5 rounded-full ${user.status === 'Active' ? 'bg-emerald-500' : 'bg-slate-300'}`}></div>
                          <span className={`text-xs font-medium ${user.status === 'Active' ? 'text-emerald-600' : 'text-slate-500'}`}>{user.status}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition-colors text-slate-400">
                          <MoreVertical size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-slate-800/30 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <p className="text-xs text-slate-500 font-medium">Showing 1-3 of 24 users</p>
              <div className="flex gap-2">
                <button className="p-1.5 rounded border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 disabled:opacity-50" disabled>
                  <ChevronLeft size={16} />
                </button>
                <button className="p-1.5 rounded border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Role Summaries</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {roles.map((role, i) => (
                <div key={i} className={`p-4 bg-white dark:bg-slate-900 rounded-xl border-l-4 ${role.color} border-y border-r border-slate-200 dark:border-slate-800 shadow-sm`}>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-slate-900 dark:text-white">{role.name}</h4>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${role.access === 'Full Access' ? 'bg-primary/10 text-primary' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
                      {role.access}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-3">{role.desc}</p>
                  <div className="flex items-center gap-2">
                    {role.tags.map((tag, j) => (
                      <span key={j} className="text-[10px] bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-600 dark:text-slate-400">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="xl:col-span-1">
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm sticky top-24">
            <div className="p-5 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 text-primary mb-1">
                <Edit3 size={16} />
                <p className="text-xs font-bold uppercase tracking-widest">Selected Role Editor</p>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Researcher Permissions</h3>
            </div>
            <div className="p-5 space-y-6">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Data Management</h4>
                <div className="space-y-4">
                  {[
                    { label: 'View Datasets', desc: 'Allow reading research data', active: true },
                    { label: 'Export Reports', desc: 'Download CSV/PDF reports', active: true },
                    { label: 'Delete Entries', desc: 'Permanent data removal', active: false },
                  ].map((perm, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">{perm.label}</span>
                        <span className="text-xs text-slate-500">{perm.desc}</span>
                      </div>
                      <button className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${perm.active ? 'bg-primary' : 'bg-slate-200 dark:bg-slate-700'}`}>
                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${perm.active ? 'translate-x-6' : 'translate-x-1'}`} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">System Access</h4>
                <div className="space-y-4">
                  {[
                    { label: 'Manage Users', desc: 'Invite or remove members', active: false },
                    { label: 'Billing Access', desc: 'Manage subscriptions', active: false },
                  ].map((perm, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">{perm.label}</span>
                        <span className="text-xs text-slate-500">{perm.desc}</span>
                      </div>
                      <button className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${perm.active ? 'bg-primary' : 'bg-slate-200 dark:bg-slate-700'}`}>
                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${perm.active ? 'translate-x-6' : 'translate-x-1'}`} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-4">
                <button className="w-full py-2.5 bg-slate-900 dark:bg-primary text-white text-sm font-bold rounded-lg hover:opacity-90 transition-opacity">
                  Save Role Changes
                </button>
                <button className="w-full mt-2 py-2.5 text-slate-500 dark:text-slate-400 text-sm font-medium hover:text-slate-900 dark:hover:text-white transition-colors">
                  Reset to Default
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
