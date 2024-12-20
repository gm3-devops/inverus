"use client";

import Container from "../global/container";
import MagicBadge from "../ui/magic-badge";
import { PillarsCard, PillarsGrid } from "@/components/ui/bento-grid-pillars";

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
        className: "col-span-3 lg:col-span-2",
        background: (
            <div className="absolute w-full h-full right-0 top-0 origin-top rounded-md transition-all duration-300 ease-out  [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] md:[mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105 group-hover:-translate-y-4">
                <GlobeAndStars />
            </div>
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
        href: "/solutions#behavioural-insights",
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
];


const Features = () => {
    return (
        <div className="flex flex-col items-center justify-center py-8 md:py-12 w-full">
            <Container delay={0.3}>
                <div
                    id="features"
                    className="flex w-full flex-col items-center justify-center py-8 lg:items-center"
                >
                    <MagicBadge title="Our Unique Patented Solution" />
                    <h2 className="!leading-[1.1] mt-6 text-center font-heading font-medium text-3xl text-foreground md:text-5xl lg:text-center">
                        The Ultimate Trust Ecosystem
                    </h2>
                    <p className="mt-4 max-w-lg text-center text-lg text-muted-foreground lg:text-center">
                        Innovative solutions to safeguard your business from emerging threats.
                    </p>
                </div>
            </Container>
            <Container delay={0.2}>
                <PillarsGrid className="py-8">
                    {PillarContent.map((feature, idx) => (
                        <PillarsCard key={idx} {...feature} />
                    ))}
                </PillarsGrid>
            </Container>
        </div>
    )
};

export default Features
