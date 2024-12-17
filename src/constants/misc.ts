import { Boxes, ScanSearch, WandSparklesIcon } from "lucide-react";

export const PAGINATION_LIMIT = 10;

export const Pillars = [
  {
    title: "Consortium",
    description:
      "Easily categorize the scripts and optimize the media to create posts.",
    icon: Boxes,
  },
  {
    title: "Harvestor",
    description:
      "Create SEO-optimized blog posts that are easy to customize and share.",
    icon: ScanSearch,
  },
  {
    title: "Behavioral Insights",
    description:
      "Content is provided in Markdown format and can be easily exported.",
    icon: WandSparklesIcon,
  },
] as const;
