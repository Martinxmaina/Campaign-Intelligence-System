export type Page = 
  | 'dashboard' 
  | 'users' 
  | 'events' 
  | 'social' 
  | 'analytics' 
  | 'surveys' 
  | 'assistant' 
  | 'database' 
  | 'performance' 
  | 'messaging' 
  | 'sentiment';

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'Active' | 'Inactive';
  lastActive: string;
  avatar: string;
}

export interface CampaignEvent {
  id: string;
  name: string;
  date: string;
  location: string;
  attendees: number;
  status: string;
  type: 'rally' | 'townhall' | 'meetup';
}

export interface Voter {
  id: string;
  name: string;
  location: string;
  party: string;
  score: number;
  tags: string[];
  lastContact: string;
  segment: string;
  avatar: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}
