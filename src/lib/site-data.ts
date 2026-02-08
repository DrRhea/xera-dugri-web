import type { SiteData } from "@/types/site";

export const siteData: SiteData = {
  organization_name: "Duta Generasi Remaja Indonesia",
  domain_name: "dutagenerasiremaja.com",
  motto_text: "Remaja Berkarya, Generasi Berdampak",
  slogan_text: "Suara Kita, Gerak Kita, & Berdampak Nyata",
  organizer_name: "CV. Pesona Prestasi Official",
  navigation_items: [
    { label_text: "Beranda", href_url: "#beranda" },
    { label_text: "Tentang", href_url: "#tentang" },
    { label_text: "Program", href_url: "#program" },
    { label_text: "Kontak", href_url: "#kontak" },
  ],
  highlight_items: [
    {
      title_text: "Komunitas Positif",
      description_text: "Ruang aman untuk remaja berkarya, bertumbuh, dan berdampak.",
      icon_name: "users",
    },
    {
      title_text: "Aksi Nyata",
      description_text: "Program kolaboratif yang mendorong kepemimpinan dan empati sosial.",
      icon_name: "megaphone",
    },
    {
      title_text: "Jejaring Nasional",
      description_text: "Memperluas koneksi lintas daerah untuk generasi remaja Indonesia.",
      icon_name: "sparkles",
    },
  ],
};
