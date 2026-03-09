import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import StrategyAssistant from './pages/StrategyAssistant';
import UsersPermissions from './pages/UsersPermissions';
import CampaignEvents from './pages/CampaignEvents';
import SocialListening from './pages/SocialListening';
import Analytics from './pages/Analytics';
import SurveyBuilder from './pages/SurveyBuilder';
import PeopleDatabase from './pages/PeopleDatabase';
import PerformanceMonitor from './pages/PerformanceMonitor';
import MessagingCampaigns from './pages/MessagingCampaigns';
import SentimentOverview from './pages/SentimentOverview';
import LoginPage from './pages/LoginPage';
import { Page } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');
  const [user, setUser] = useState<any>(null);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('campaign_pulse_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsCheckingAuth(false);
  }, []);

  const handleLogin = (userData: any) => {
    setUser(userData);
    localStorage.setItem('campaign_pulse_user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('campaign_pulse_user');
  };

  if (isCheckingAuth) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) {
    return <LoginPage onLogin={handleLogin} />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard': return <Dashboard />;
      case 'assistant': return <StrategyAssistant />;
      case 'users': return <UsersPermissions />;
      case 'events': return <CampaignEvents />;
      case 'social': return <SocialListening />;
      case 'analytics': return <Analytics />;
      case 'surveys': return <SurveyBuilder />;
      case 'database': return <PeopleDatabase />;
      case 'performance': return <PerformanceMonitor />;
      case 'messaging': return <MessagingCampaigns />;
      case 'sentiment': return <SentimentOverview />;
      default:
        return (
          <div className="flex flex-col items-center justify-center h-full text-slate-500 space-y-4">
            <div className="size-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-4xl">construction</span>
            </div>
            <h2 className="text-xl font-bold">Page Under Construction</h2>
            <p>The {currentPage} page is currently being built. Check back soon!</p>
            <button 
              onClick={() => setCurrentPage('dashboard')}
              className="bg-primary text-white px-6 py-2 rounded-lg font-bold"
            >
              Back to Dashboard
            </button>
          </div>
        );
    }
  };

  const getPageTitle = () => {
    switch (currentPage) {
      case 'dashboard': return 'Campaign Dashboard';
      case 'users': return 'Users & Permissions';
      case 'events': return 'Campaign Events';
      case 'social': return 'Social Listening';
      case 'analytics': return 'Analytics & Reports';
      case 'surveys': return 'Survey Builder';
      case 'assistant': return 'AI Strategy Assistant';
      case 'database': return 'People Database';
      case 'performance': return 'Performance Monitor';
      case 'messaging': return 'Messaging Campaigns';
      case 'sentiment': return 'Sentiment Overview';
      default: return 'Campaign Pulse';
    }
  };

  return (
    <div className="flex min-h-screen bg-background-light dark:bg-background-dark">
      <Sidebar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        user={user}
        onLogout={handleLogout}
      />
      <div className="flex-1 flex flex-col min-w-0">
        <Header title={getPageTitle()} />
        <main className="flex-1 overflow-y-auto custom-scrollbar">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}
