const SITE_URL = "https://dutagenerasiremaja.com";

/**
 * JSON-LD structured data untuk SEO — Organization + WebSite.
 * Membantu mesin pencari memahami identitas dan situs DUGRI.
 */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Duta Generasi Remaja Indonesia",
  alternateName: "DUGRI",
  url: SITE_URL,
  logo: `${SITE_URL}/duta-generasi-remaja-indonesia-logo.png`,
  description:
    "Program pembinaan remaja berskala nasional. Remaja Berkarya, Generasi Berdampak.",
  slogan: "Suara Kita, Gerak Kita, & Berdampak Nyata",
  sameAs: [
    "https://instagram.com/duta_dugri",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "dutagenerasiremajaindonesia@gmail.com",
    contactType: "customer service",
    availableLanguage: "Indonesian",
    areaServed: "ID",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Duta Generasi Remaja Indonesia",
  url: SITE_URL,
  description:
    "Program pembinaan remaja berskala nasional untuk pelajar SMP–mahasiswa (14–21 tahun).",
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "id-ID",
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", url: `${SITE_URL}/program` },
    "query-input": "required name=keyword",
  },
};

export function JsonLd() {
  const organizationWithId = { ...organizationSchema, "@id": `${SITE_URL}/#organization` };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationWithId),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
