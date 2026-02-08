type SiteFooterProps = {
  domainName: string;
  organizerName: string;
};

export const SiteFooter = ({
  domainName,
  organizerName,
}: SiteFooterProps) => (
  <footer id="kontak" className="border-t border-slate-200 bg-white">
    <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
      <p>Domain resmi: {domainName}</p>
      <p>Penyelenggara: {organizerName}</p>
    </div>
  </footer>
);
