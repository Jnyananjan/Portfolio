export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image?: string;
  link?: string;
};

export const CERTIFICATES: Certificate[] = [
  {
    id: "1",
    title: "Working on it :)",
    issuer: "Figuring out",
    date: "2026",
    image: ""
  },
];
