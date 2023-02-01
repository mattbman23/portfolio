export type PortfolioSocial = {
  title: string;
  name: string;
  url: string;
};

export type PortfolioExp = {
  logo: StaticImageData;
  title: string;
  company?: string;
  location?: string;
  duration: string;
};

export type PortfolioProject = {
  date: string;
  title: string;
  githubUrl: string;
  desc: string;
  tags: string[];
};

export type NavigationState = {
  navs: string[];
  curNav: string;
  setNav: (nav: string) => void;
};
