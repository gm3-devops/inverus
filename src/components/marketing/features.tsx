"use client";

import Container from "../global/container";
import MagicCard from "../ui/magic-card";
import { Pillars } from "@/constants/misc";
import MagicBadge from "../ui/magic-badge";
import Image
    from "next/image";
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
                <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                    <div className="mt-10 grid gap-6 lg:grid-cols-3 sm:mt-16">
                        <div className="relative">
                            <div className="absolute inset-px rounded-lg bg-background [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] border border-border"></div>
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                    <h3 className="font-semibold text-neutral-300 text-xl">
                                        Behavioral Insights
                                    </h3>
                                    <p className="text-muted-foreground mt-2 text-start">
                                        Detect anomalies in buyer behavior during test drives, warranty claims, and purchase cycles.
                                    </p>
                                </div>
                                <div className="flex flex-1 items-center max-lg:py-6 lg:pb-2">
                                    <div className="flex flex-1 items-center justify-center max-lg:py-6 lg:pb-2">
                                        <Image
                                            className="object-contain"
                                            src="/images/industries/insights.svg"
                                            alt="Consortium Intelligence"
                                            width={250}
                                            height={250}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-px rounded-lg bg-background [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] border border-border"></div>
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                    <h3 className="font-semibold text-neutral-300 text-xl">
                                        Harvestor / Reverse Search Engine
                                    </h3>
                                    <p className="text-muted-foreground mt-2 text-start">
                                        Pinpoint fraudsters and repeat offenders through advanced search.
                                    </p>
                                </div>
                                <div className="flex flex-1 items-center justify-center max-lg:py-6 lg:pb-2">
                                    <Image
                                        className="object-contain"
                                        src="/images/industries/ai.svg"
                                        alt="Consortium Intelligence"
                                        width={250}
                                        height={250}
                                    />
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-px rounded-lg bg-background [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] border border-border"></div>
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                    <h3 className="font-semibold text-neutral-300 text-xl">
                                        Consortium Intelligence
                                    </h3>
                                    <p className="text-muted-foreground mt-2 text-start">
                                        Shared real-time data on fraudulent behaviors across the dealer network.
                                    </p>
                                </div>
                                <div className="flex flex-1 items-center justify-center max-lg:py-6 lg:pb-2">
                                    <Image
                                        className="object-contain"
                                        src="/images/industries/consortium.svg"
                                        alt="Consortium Intelligence"
                                        width={250}
                                        height={250}
                                    />
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
};

export default Features
