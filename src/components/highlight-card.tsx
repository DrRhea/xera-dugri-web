import type { ReactNode } from "react";

type HighlightCardProps = {
  titleText: string;
  descriptionText: string;
  icon: ReactNode;
};

export const HighlightCard = ({
  titleText,
  descriptionText,
  icon,
}: HighlightCardProps) => (
  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-slate-900">{titleText}</h3>
    <p className="mt-2 text-sm text-slate-600">{descriptionText}</p>
  </div>
);
