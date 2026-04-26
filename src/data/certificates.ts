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
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2025",
    image: "https://i.ibb.co/3m2PPF9x/screenshot-1777220121690.png"
  },
  {
    id: "2",
    title: "Meta Frontend Developer Professional Certificate",
    issuer: "Meta",
    date: "2024",
  },
  {
    id: "3",
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    date: "2025",
  },
  {
    id: "4",
    title: "Arduino Hardware Certification",
    issuer: "Arduino",
    date: "2023",
  },
];
