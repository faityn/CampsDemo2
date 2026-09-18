export type Camp = {
  slug: string;
  number: string;
  name: string;
  logo: string;
  region: string;
  country: string;
  label: string;
  description: string;
  accommodationCaption: string;
  arrivalCaption?: string;
  mapUrl: string;
  mapCenter: string;
  contactEmail: string;
  contactPhone: string;
  experience: string;
  image: string;
  gallery: string[];
  accommodationGallery: {
    src: string;
    label: string;
  }[];
  href: string;
};

export const camps: Camp[] = [
  {
    slug: "hoyor-zagal",
    number: "01",
    name: "HOYOR ZAGAL",
    logo: "/images/hoyorzagal/logo.png",
    region: "Bulgan Province",
    country: "Mongolia",
    label: "Elsen Tasarkhai · Countryside Escape",
    description:
      "A peaceful countryside escape surrounded by open steppe, fresh air and authentic Mongolian hospitality.",
    accommodationCaption:
      "Choose a traditional ger for an authentic nomadic stay, with warm interiors, comfortable beds and the landscape right outside your door.",
    arrivalCaption:
      "Hoyor Zagal is in Elsen Tasarkhai, about a four-hour drive west of Ulaanbaatar. We can help arrange a private transfer or include the camp in a wider central Mongolia route.",
    mapUrl:
      "https://www.openstreetmap.org/export/embed.html?bbox=103.55%2C47.15%2C104.10%2C47.55&layer=mapnik&marker=47.35%2C103.82",
    mapCenter: "47.35,103.82",
    contactEmail: "info@hoyorzagal.mn",
    contactPhone: "+976 99984593",
    experience:
      "A peaceful countryside escape surrounded by open steppe, fresh air and authentic Mongolian hospitality.",
    image: "/images/12.jpg",
    gallery: [
      "/images/hoyorzagal/18.jpg",
      "/images/hoyorzagal/2.jpg",
      "/images/hoyorzagal/a1.jpg",
      "/images/hoyorzagal/g1.JPG",
      "/images/hoyorzagal/r1.jpg",
      "/images/hoyorzagal/r2.jpg",
      "/images/hoyorzagal/r4.jpg",
      "/images/hoyorzagal/g6.jpg",
    ],
    accommodationGallery: [
      { src: "/images/hoyorzagal/a1.jpg", label: "Exterior" },
      { src: "/images/hoyorzagal/a2.jpg", label: "Interior" },
      { src: "/images/hoyorzagal/a3.jpg", label: "Interior" },
      { src: "/images/hoyorzagal/a4.jpg", label: "Exterior" },
      { src: "/images/hoyorzagal/g2.jpg", label: "Interior" },
      { src: "/images/hoyorzagal/r1.jpg", label: "Exterior" },
    ],
    href: "https://www.hoyorzagal.mn/web",
  },
  {
    slug: "alungoo-ger-hotel",
    number: "02",
    name: "ALUNGOO GER HOTEL",
    logo: "/images/alungoo/logo.png",
    region: "Terelj National Park",
    country: "Ulaanbaatar, Mongolia",
    label: "Terelj · Ger Stay",
    description:
      "A refined ger stay in the dramatic landscapes of Gorkhi–Terelj National Park, close to nature and the city.",
    accommodationCaption:
      "Stay in a comfortable ger with the character of a nomadic home, thoughtful details and peaceful views over the surrounding Terelj landscape.",
    arrivalCaption:
      "Alungoo Ger Hotel is in Gorkhi-Terelj National Park, around two hours east of Ulaanbaatar. A private car transfer is the easiest way to arrive and explore nearby sights.",
    mapUrl:
      "https://www.openstreetmap.org/export/embed.html?bbox=107.20%2C47.80%2C107.60%2C48.10&layer=mapnik&marker=47.877372%2C107.430132",
    mapCenter: "47.877372,107.430132",
    contactEmail: "info@hoyorzagal.mn",
    contactPhone: "+976 99098720",
    experience:
      "A refined ger stay in the dramatic landscapes of Gorkhi–Terelj National Park, close to nature and the city.",
    image: "/images/15.jpg",
    gallery: [
      "/images/alungoo/1.jpg",
      "/images/alungoo/13.jpg",
      "/images/alungoo/14.jpg",
      "/images/alungoo/r3.jpg",
      "/images/alungoo/a1.jpg",
      "/images/alungoo/r2.jpg",
      "/images/alungoo/7.jpg",
      "/images/alungoo/5.jpg",
    ],
    accommodationGallery: [
      { src: "/images/alungoo/a1.jpg", label: "Exterior" },
      { src: "/images/alungoo/a2.jpg", label: "Interior" },
      { src: "/images/alungoo/1.jpg", label: "Interior" },
      { src: "/images/alungoo/13.jpg", label: "Exterior" },
      { src: "/images/alungoo/a3.jpg", label: "Interior" },
      { src: "/images/alungoo/3.jpg", label: "Exterior" },
    ],
    href: "https://www.hoyorzagal.mn/alungoo",
  },
  {
    slug: "guru-eco-complex",
    number: "03",
    name: "GURU ECO COMPLEX",
    logo: "/images/guru/logo.png",
    region: "Terelj National Park",
    country: "Ulaanbaatar, Mongolia",
    label: "Terelj · Eco Escape",
    description:
      "An immersive nature retreat where modern comfort meets granite mountains, forests and the wide Mongolian sky.",
    accommodationCaption:
      "Sleep in a thoughtfully prepared ger surrounded by fresh air and mountain views, with the comfort you need after a full day outdoors.",
    mapUrl:
      "https://www.openstreetmap.org/export/embed.html?bbox=107.20%2C47.80%2C107.60%2C48.10&layer=mapnik&marker=47.8811077%2C107.4284165",
    mapCenter: "47.8811077,107.4284165",
    contactEmail: "info@hoyorzagal.mn",
    contactPhone: "+976 99096714",
    experience:
      "An immersive nature retreat where modern comfort meets granite mountains, forests and the wide Mongolian sky.",
    image: "/images/11.jpg",
    gallery: [
      "/images/guru/11.jpg",
      "/images/guru/12.jpg",
      "/images/guru/g2.jpg",
      "/images/guru/g3.jpg",
      "/images/guru/r2.jpg",
      "/images/guru/r3.jpg",
      "/images/guru/r5.jpg",
      "/images/guru/a3.jpg",
    ],
    accommodationGallery: [
      { src: "/images/guru/a2.jpg", label: "Exterior" },
      { src: "/images/guru/a3.jpg", label: "Interior" },
      { src: "/images/guru/a4.jpg", label: "Interior" },
      { src: "/images/guru/a5.jpg", label: "Exterior" },
      { src: "/images/guru/a6.jpg", label: "Interior" },
    ],
    href: "https://www.hoyorzagal.mn/guru",
  },
];

export function getCamp(slug: string) {
  return camps.find((camp) => camp.slug === slug);
}
