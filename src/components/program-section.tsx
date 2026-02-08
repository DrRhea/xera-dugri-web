import { HighlightCard } from "@/components/highlight-card";
import { SectionHeading } from "@/components/section-heading";
import { getIconByName } from "@/lib/icon-map";
import type { HighlightItem } from "@/types/site";

type ProgramSectionProps = {
  items: HighlightItem[];
};

export const ProgramSection = ({ items }: ProgramSectionProps) => (
  <section id="program" className="bg-white py-16">
    <div className="mx-auto max-w-6xl px-6">
      <SectionHeading
        eyebrowText="Program"
        titleText="Fokus Program 2026"
        descriptionText="Inisiatif inti yang membangun kepemimpinan, literasi, dan dampak nyata."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <HighlightCard
            key={item.title_text}
            titleText={item.title_text}
            descriptionText={item.description_text}
            icon={getIconByName(item.icon_name)}
          />
        ))}
      </div>
    </div>
  </section>
);
