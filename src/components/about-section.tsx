import { SectionHeading } from "@/components/section-heading";

type AboutSectionProps = {
  titleText: string;
  descriptionText: string;
};

export const AboutSection = ({
  titleText,
  descriptionText,
}: AboutSectionProps) => (
  <section id="tentang" className="py-4">
    <SectionHeading
      eyebrowText="Tentang"
      titleText={titleText}
      descriptionText={descriptionText}
    />
  </section>
);
