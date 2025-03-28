import React from "react";
import { SolutionsGrid, SolutionsGridItem } from "@/components/ui/solution-grid";
import {
    ShieldCheck,
    DollarSign,
    Target,
    Network,
    Layers,
} from "lucide-react";

export function SolutionsBenefits() {
    return (
        <SolutionsGrid className="max-w-4xl mx-auto">
            {items.map((item, i) => (
                <SolutionsGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={
                        <img
                            src={item.header}
                            alt={item.title}
                            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl"
                        />
                    }
                    icon={item.icon}
                    className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                />
            ))}
        </SolutionsGrid>
    );
}
const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
    {
        title: "Real-Time Fraud Detection",
        description: "Proactively stop identity fraud at critical stages.",
        header: "/images/industries/real-time-fraud.jpg",
        icon: <ShieldCheck className="h-6 w-6 text-primary" />,
    },
    {
        title: "Cost Reduction",
        description: "Lower investigation and fraud-related costs.",
        header: "/images/industries/cost-reduction.jpg",
        icon: <DollarSign className="h-6 w-6 text-primary" />,
    },
    {
        title: "Accurate Decision-Making",
        description: "Reduce false positives and false negatives with confidence.",
        header: "/images/industries/decision-making.jpg",
        icon: <Target className="h-6 w-6 text-primary" />,
    },
    {
        title: "Cross-Industry Collaboration",
        description: "Benefit from a shared fraud intelligence network.",
        header: "/images/industries/cross-industry.jpg",
        icon: <Network className="h-6 w-6 text-primary" />,
    },
    {
        title: "Scalable Solutions",
        description: "Designed for businesses of all sizes and industries.",
        header: "/images/industries/scalable-solution.jpg",
        icon: <Layers className="h-6 w-6 text-primary" />,
    },
];

