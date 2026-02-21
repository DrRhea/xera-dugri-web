import { CtaSection } from "@/components/home/CtaSection";
import { HeroSection } from "@/components/home/HeroSection";
import { HighlightsSection } from "@/components/home/HighlightsSection";
import { IntroSection } from "@/components/home/IntroSection";
import { TahapanSection } from "@/components/home/TahapanSection";
import { Navbar } from "@/components/layout/Navbar";
import { MarqueeTicker } from "@/components/MarqueeTicker";
import { SiteFooter } from "@/components/site-footer";
import { siteData } from "@/lib/site-data";

export default function Home() {
  return (
    <div className="min-h-screen text-slate-900">
      <Navbar />
      <main className="w-full">
        <HeroSection />
        <IntroSection />
        <HighlightsSection />
        <TahapanSection />
        <CtaSection />
        <MarqueeTicker />
        <SiteFooter
          domainName={siteData.domain_name}
          organizerName={siteData.organizer_name}
        />
      </main>
    </div>
  );
}
