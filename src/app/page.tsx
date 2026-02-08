import { HeroSection } from "@/components/home/HeroSection";
import { Navbar } from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main className="space-y-16">
        <HeroSection />
      </main>
    </div>
  );
}
