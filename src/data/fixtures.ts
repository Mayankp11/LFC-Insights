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
    date: "September 17, 2025. 2PM CDT",
    team1: { name: "Liverpool FC", logoUrl: "/logos/LFC.png", score: 3 },
    team2: { name: "Atletico Madrid", logoUrl: "/logos/ATM.png", score: 2 },
    venue: "Anfield",
  },
  {
    id: 2,
    date: "September 30, 2025. 2PM CDT",
    team1: { name: "Galatasaray", logoUrl: "/logos/Galatasaray-logo.png" },
    team2: { name: "Liverpool FC", logoUrl: "/logos/LFC.png" },
    venue: "Rams Park",
  },

  {
    id: 3,
    date: "October 22, 2025. 2PM CDT",
    team1: { name: "Eintracht Frankfurt", logoUrl: "/logos/Eintracht Frankfurt-logo.png" },
    team2: { name: "Liverpool FC", logoUrl: "/logos/LFC.png" },
    venue: "Deutsche Bank Park",
  },

  {
    id: 4,
    date: "November 4, 2025. 2PM CDT",
    team1: { name: "Liverpool FC", logoUrl: "/logos/LFC.png" },
    team2: { name: "Real Madrid", logoUrl: "/logos/Real-Madrid-logo.png" },
    venue: "Anfield",
  },
  {
    id: 5,
    date: "November 26, 2025. 2PM CDT",
    team1: { name: "Liverpool FC", logoUrl: "/logos/LFC.png" },
    team2: { name: "PSV", logoUrl: "/logos/PSV-logo.png" },
    venue: "Anfield",
  },
  {
    id: 6,
    date: "December 09, 2025. 2PM CDT",
    team1: { name: "Inter Milan", logoUrl: "/logos/Inter-Milan-logo.png" },
    team2: { name: "Liverpool FC", logoUrl: "/logos/LFC.png" },
    venue: "San Siro",
  },
  {
    id: 7,
    date: "January 21, 2025. 2PM CDT",
    team1: { name: "Marseille", logoUrl: "/logos/Marseilla-logo.png" },
    team2: { name: "Liverpool FC", logoUrl: "/logos/LFC.png" },
    venue: "Orange Vélodrome",
  },
  {
    id: 8,
    date: "November 26, 2025. 2PM CDT",
    team1: { name: "Liverpool FC", logoUrl: "/logos/LFC.png" },
    team2: { name: "Qarabag FK", logoUrl: "/logos/Qarabag-logo.png" },
    venue: "Anfield",
  },

];
