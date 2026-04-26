export type GalleryItem = {
  id: string;
  url: string;
  caption: string;
  category: "hardware" | "software" | "workstation" | "other";
};

export const GALLERY_ITEMS: GalleryItem[] = [
  // TechyPad Hardware Journey
  {
    id: "tp-1",
    url: "https://i.ibb.co/CDR3QHH/6300548957326741567.jpg",
    caption: "TechyPad: Early prototype PCB testing.",
    category: "hardware",
  },
  {
    id: "tp-2",
    url: "https://i.ibb.co/svmrQckF/6300548957326741568.jpg",
    caption: "Soldering the hotswap sockets.",
    category: "hardware",
  },
  {
    id: "tp-3",
    url: "https://i.ibb.co/KxMqySMW/6300548957326741569.jpg",
    caption: "Final hardware assembly and case fitting.",
    category: "hardware",
  },
  {
    id: "tp-4",
    url: "https://i.ibb.co/Fk3YtySv/6300548957326741570.jpg",
    caption: "Custom firmware initialization on ESP32-S3.",
    category: "hardware",
  },
  {
    id: "tp-5",
    url: "https://i.ibb.co/4nMRrsn9/6300548957326741571.jpg",
    caption: "TechyPad: Production-ready unit.",
    category: "hardware",
  },
  {
    id: "tp-6",
    url: "https://i.ibb.co/gLGY2Jk9/6300548957326741572.jpg",
    caption: "Precision components and refined design.",
    category: "hardware",
  },

  // Software & UI Projects
  {
    id: "cr-1",
    url: "https://i.ibb.co/3m2PPF9x/screenshot-1777220121690.png",
    caption: "Cricket Score: Real-time match dashboard.",
    category: "software",
  },
  {
    id: "ph-1",
    url: "https://i.ibb.co/RTMbzMsy/sssssssssss.png",
    caption: "Pizza Hut: Digital menu interface design.",
    category: "software",
  },
  {
    id: "lh-1",
    url: "https://i.ibb.co/39ZfJVBV/Janaa.png",
    caption: "Link Hub: Personal directory dashboard.",
    category: "software",
  },
  {
    id: "ph-2",
    url: "https://i.ibb.co/fz4fnX7Y/sssssssssssssssssssss.png",
    caption: "Pizza Hut: Item list and category flow.",
    category: "software",
  },
  {
    id: "cr-2",
    url: "https://i.ibb.co/ds5v2sMb/screenshot-1777220156090.png",
    caption: "Cricket Score: Rules and tournament information.",
    category: "software",
  },
];
