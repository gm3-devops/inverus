import {
  CreditCardIcon,
  SettingsIcon,
  ChartPieIcon,
  LucideIcon,
  MegaphoneIcon,
  LineChartIcon,
  MessageSquareTextIcon,
  UsersIcon,
} from "lucide-react";

type Link = {
  href: string;
  label: string;
  icon: LucideIcon;
};

export const SIDEBAR_LINKS: Link[] = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: ChartPieIcon,
  },
  {
    href: "/dashboard/campaigns",
    label: "Campaigns",
    icon: MegaphoneIcon,
  },
  {
    href: "/dashboard/analytics",
    label: "Analytics",
    icon: LineChartIcon,
  },
  {
    href: "/dashboard/posts",
    label: "Posts",
    icon: MessageSquareTextIcon,
  },
  {
    href: "/dashboard/engagement",
    label: "Engagement",
    icon: UsersIcon,
  },
  {
    href: "/dashboard/billing",
    label: "Billing",
    icon: CreditCardIcon,
  },
  {
    href: "/dashboard/settings",
    label: "Settings",
    icon: SettingsIcon,
  },
];

export const FOOTER_LINKS = [
  {
    title: "Product",
    links: [
      { name: "Home", href: "/" },
      { name: "Features", href: "/" },
      { name: "Pricing", href: "/" },
      { name: "Contact", href: "/" },
      { name: "Download", href: "/" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "Help Center", href: "/help-center" },
      { name: "Community", href: "/community" },
      { name: "Guides", href: "/guides" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
      { name: "Cookies", href: "/cookies" },
    ],
  },
  {
    title: "Developers",
    links: [
      { name: "API Docs", href: "/api-docs" },
      { name: "SDKs", href: "/sdks" },
      { name: "Tools", href: "/tools" },
      { name: "Open Source", href: "/open-source" },
      { name: "Changelog", href: "/changelog" },
    ],
  },
];

export const FOOTER = [
  {
    title: "Solutions",
    links: [
      { name: "Consortium", href: "#" },
      { name: "Harvestor", href: "#" },
      { name: "Behavioral Insights", href: "#" },
    ],
  },
  {
    title: "Industries",
    links: [
      { name: "Auto Dealers", href: "#" },
      { name: "Financial Institutions", href: "#" },
      { name: "Healthcare Providers", href: "#" },
      { name: "Government", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "Blog", href: "#" },
      { name: "About Us", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "Privacy", href: "#" },
    ],
  },
];
