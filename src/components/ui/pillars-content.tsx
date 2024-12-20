import { BrainCircuit, ScanSearch, Share2 } from 'lucide-react';
import Image from "next/image";
import GlobeAndStars from "@/components/ui/globe-and-stars";
import RadarAnimation from '@/components/ui/radar';

export const PillarContent = [
    {
        Icon: Share2,
        name: "Consortium",
        description: "Harness the power of shared intelligence across trusted partners to identify and prevent identity fraud before it occurs.",
        href: "/solutions#consortium",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-1",
        background: (
            <Image
                src="/images/pillars/consortium.svg"
                alt="Consortium"
                width={300}
                height={300}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 origin-top rounded-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_0%,#000_100%)] group-hover:scale-105"
            />
        ),
    },
    {
        Icon: ScanSearch,
        name: "Harvestor",
        description:
            "Our Reverse Search Engine technology scours publicly available and consortium data to validate identities and uncover suspicious activity with precision.",
        href: "/solutions#harvestor",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-1",
        background: (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 origin-top rounded-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_0%,#000_100%)] group-hover:scale-105">
                <RadarAnimation />
            </div>
        ),
    },
    {
        Icon: BrainCircuit,
        name: "Behavioral Insights",
        description: "Leverage behavioral patterns and advanced analytics to detect anomalies, predict fraud risks, and enhance decision-making.",
        href: "/government",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-2",
        background: (
            <div className="absolute w-full h-full right-0 top-0 origin-top rounded-md transition-all duration-300 ease-out  [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] md:[mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105 group-hover:-translate-y-4">
                <GlobeAndStars />
            </div>
        ),
    },
];

