export type GalleryItem = {
  id: string;
  url: string;
  caption: string;
  category: "TechyPad" | "software" | "workstation" | "other";
};

export const GALLERY_ITEMS: GalleryItem[] = [
  // TechyPad Hardware Journey
  {
    id: "tp-1",
    url: "https://i.ibb.co/4nMRrsn9/6300548957326741571.jpg",
    caption: "TechyPad: Production-ready unit.",
    category: "TechyPad",
  },
  {
    id: "tp-2",
    url: "https://i.ibb.co/svmrQckF/6300548957326741568.jpg",
    caption: "Soldering the hotswap sockets.",
    category: "TechyPad",
  },
  {
    id: "tp-3",
    url: "https://i.ibb.co/KxMqySMW/6300548957326741569.jpg",
    caption: "Final hardware assembly and case fitting.",
    category: "TechyPad",
  },
  {
    id: "tp-4",
    url: "https://i.ibb.co/CDR3QHH/6300548957326741567.jpg",
    caption: "TechyPad: Early prototype PCB testing.",
    category: "TechyPad",
  },
  {
    id: "tp-5",
    url: "https://i.ibb.co/Fk3YtySv/6300548957326741570.jpg",
    caption: "SMD mouting.",
    category: "TechyPad",
  },

];
