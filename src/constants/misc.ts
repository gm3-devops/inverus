import { Boxes, ScanSearch, WandSparklesIcon } from "lucide-react";

export const PAGINATION_LIMIT = 10;

export const Pillars = [
  {
    title: "Consortium",
    description:
      "Harness the power of shared intelligence across trusted partners to identify and proactively prevent complex identity fraud before it occurs.",
    icon: Boxes,
  },
  {
    title: "Harvestor",
    description:
      "Our Reverse Search Engine technology scours publicly available and consortium data to validate identities and uncover suspicious activity with precision.",
    icon: ScanSearch,
  },
  {
    title: "Behavioral Insights",
    description:
      "Leverage behavioral patterns and advanced analytics to detect anomalies, predict fraud risks, and enhance decision-making.",
    icon: WandSparklesIcon,
  },
] as const;
