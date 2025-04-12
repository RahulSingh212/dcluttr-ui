import { HomeIcon, TvIcon, PhotoIcon } from "@heroicons/react/24/outline";

export interface SidebarInfo {
  name: string;
  display: string;
  href: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  subLinks?: {
    name: string;
    display: string;
    href: string;
  }[];
}

export const sidebarLinks: SidebarInfo[] = [
  {
    name: "overview",
    display: "Overview",
    href: "/",
    icon: HomeIcon,
  },
  {
    name: "channels",
    display: "Channels",
    href: "/channels",
    icon: TvIcon,
    subLinks: [
      {
        name: "meta-ads",
        display: "Meta Ads",
        href: "/channels/meta-ads",
      },
      {
        name: "google-ads",
        display: "Google Ads",
        href: "/channels/google-ads",
      },
      {
        name: "quick-commerce",
        display: "Quick Commerce",
        href: "/channels/quick-commerce",
      },
    ],
  },
  {
    name: "creatives",
    display: "Creatives",
    href: "/creatives",
    icon: PhotoIcon,
  },
];
