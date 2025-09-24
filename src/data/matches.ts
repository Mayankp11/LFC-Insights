

export interface Match {
  id: number;
  date: string;
  team1: { name: string; logoUrl: string; score?: number };
  team2: { name: string; logoUrl: string; score?: number };
  venue: string;
}

export const matches: Match[] = [
  {
    id: 1,
    date: "September 17, 2025",
    team1: { name: "Liverpool FC", logoUrl: "/logos/LFC.png", score: 3 },
    team2: { name: "Atletico Madrid", logoUrl: "/logos/ATM.png", score: 2 },
    venue: "Anfield",
  },
  {
    id: 2,
    date: "September 30, 2025",
    team1: { name: "Liverpool FC", logoUrl: "/logos/LFC.png"},
    team2: { name: "Galatasaray", logoUrl: "/logos/Galatasaray-logo.png"},
    venue: "Rams Park",
  },
];
