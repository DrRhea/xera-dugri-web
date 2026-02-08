type SectionHeadingProps = {
  eyebrowText: string;
  titleText: string;
  descriptionText: string;
};

export const SectionHeading = ({
  eyebrowText,
  titleText,
  descriptionText,
}: SectionHeadingProps) => (
  <div className="space-y-3 text-center">
    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
      {eyebrowText}
    </p>
    <h2 className="text-3xl font-semibold text-slate-900">{titleText}</h2>
    <p className="text-sm text-slate-600">{descriptionText}</p>
  </div>
);
