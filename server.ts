import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import Database from "better-sqlite3";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = new Database("campaign.db");

// Initialize database
const schema = `
CREATE TABLE IF NOT EXISTS voters (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  location TEXT,
  party TEXT,
  score INTEGER,
  tags TEXT,
  last_contact TEXT,
  segment TEXT,
  avatar TEXT
);

CREATE TABLE IF NOT EXISTS events (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  date TEXT,
  location TEXT,
  attendees INTEGER,
  status TEXT,
  type TEXT
);

CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE,
  role TEXT,
  status TEXT,
  last_active TEXT,
  avatar TEXT
);
`;

db.exec(schema);

// Seed data if empty
const voterCount = db.prepare("SELECT count(*) as count FROM voters").get() as { count: number };
if (voterCount.count === 0) {
  const insertVoter = db.prepare("INSERT INTO voters (id, name, location, party, score, tags, last_contact, segment, avatar) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
  insertVoter.run('#8829-XJ', 'Sarah Njeri', 'Westlands, Nairobi', 'UDA', 85, 'Donor,Volunteer', '2 days ago (Email)', 'High Propensity', 'https://i.pravatar.cc/150?u=sarah');
  insertVoter.run('#4412-MK', 'Michael Otieno', "Lang'ata, Nairobi", 'ODM', 42, 'Undecided', '1 week ago (Door)', 'Swing Voter', 'https://i.pravatar.cc/150?u=michael');
  insertVoter.run('#9931-JW', 'James Kamau', 'Nyali, Mombasa', 'Jubilee', 98, 'VIP,Host', 'Live (SMS Chat)', 'Influencer', 'https://i.pravatar.cc/150?u=james');
}

const userCount = db.prepare("SELECT count(*) as count FROM users").get() as { count: number };
if (userCount.count === 0) {
  const insertUser = db.prepare("INSERT INTO users (id, name, email, role, status, last_active, avatar) VALUES (?, ?, ?, ?, ?, ?, ?)");
  insertUser.run('1', 'Sarah Wanjiku', 'sarah.w@company.co.ke', 'Super Admin', 'Active', '2 mins ago', 'https://i.pravatar.cc/150?u=sarahw');
  insertUser.run('2', 'Otieno Mark', 'm.otieno@company.co.ke', 'Researcher', 'Active', '4 hours ago', 'https://i.pravatar.cc/150?u=mark');
  insertUser.run('3', 'Chloe Achieng', 'c.achieng@company.co.ke', 'Communications', 'Inactive', '2 days ago', 'https://i.pravatar.cc/150?u=chloe');
}

const eventCount = db.prepare("SELECT count(*) as count FROM events").get() as { count: number };
if (eventCount.count === 0) {
  const insertEvent = db.prepare("INSERT INTO events (id, name, date, location, attendees, status, type) VALUES (?, ?, ?, ?, ?, ?, ?)");
  insertEvent.run('1', 'Mombasa Youth Rally', 'Oct 12, 2024', 'Mama Ngina Waterfront', 1240, 'Mombasa Youth', 'rally');
  insertEvent.run('2', 'Nairobi Town Hall', 'Oct 15, 2024', 'KICC, Nairobi', 450, 'Nairobi Hall', 'townhall');
  insertEvent.run('3', 'Kisumu Farmers Meetup', 'Oct 18, 2024', 'Jaramogi Oginga Odinga Sports Ground', 890, 'Kisumu Meetup', 'meetup');
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get("/api/voters", (req, res) => {
    const voters = db.prepare("SELECT * FROM voters").all();
    res.json(voters.map((v: any) => ({
      ...v,
      tags: v.tags ? v.tags.split(',') : []
    })));
  });

  app.get("/api/events", (req, res) => {
    const events = db.prepare("SELECT * FROM events").all();
    res.json(events);
  });

  app.get("/api/users", (req, res) => {
    const users = db.prepare("SELECT * FROM users").all();
    res.json(users);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
