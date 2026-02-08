export type NavigationItem = {
  label_text: string;
  href_url: string;
};

export type HighlightItem = {
  title_text: string;
  description_text: string;
  icon_name: string;
};

export type SiteData = {
  organization_name: string;
  domain_name: string;
  motto_text: string;
  slogan_text: string;
  organizer_name: string;
  navigation_items: NavigationItem[];
  highlight_items: HighlightItem[];
};
