import { AboutSection } from "@/components/about-section";
import { HeroSection } from "@/components/hero-section";
import { ProgramSection } from "@/components/program-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteData } from "@/lib/site-data";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader />
      <main className="space-y-16">
        <HeroSection
          titleText={siteData.organization_name}
          mottoText={siteData.motto_text}
          sloganText={siteData.slogan_text}
        />
        <AboutSection
          titleText="Gerakan Remaja Berdaya"
          descriptionText="Kami membina remaja Indonesia melalui edukasi, aksi sosial, dan kolaborasi lintas daerah."
        />
        <ProgramSection items={siteData.highlight_items} />
      </main>
      <SiteFooter
        domainName={siteData.domain_name}
        organizerName={siteData.organizer_name}
      />
    </div>
  );
}
