"use client";

import Container from "../global/container";
import MagicCard from "../ui/magic-card";
import { Pillars } from "@/constants/misc";
import MagicBadge from "../ui/magic-badge";

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
            <div className="grid w-full grid-cols-1 gap-4 py-8 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
                {Pillars.map((pillar, id) => (
                    <Container delay={0.2 * id} key={id}>
                        <MagicCard className="group md:py-8">
                            <div className="flex w-full flex-col items-start justify-start"> {/* Updated alignment */}
                                <pillar.icon
                                    strokeWidth={1.5}
                                    className="h-10 w-10 text-primary"
                                />
                                <div className="relative flex flex-col items-start"> {/* Ensures left alignment */}
                                    {/* <span className="-top-6 absolute right-0 flex h-12 w-12 items-center justify-center rounded-full border-2 border-border pt-0.5 font-medium text-2xl text-primary">
                                        {id + 1}
                                    </span> */}
                                    <h3 className="mt-6 font-medium text-base text-foreground">
                                        {pillar.title}
                                    </h3>
                                    <p className="mt-2 text-left text-muted-foreground text-sm"> {/* Added text-left */}
                                        {pillar.description}
                                    </p>
                                </div>
                            </div>
                        </MagicCard>
                    </Container>
                ))}
            </div>
        </div>
    )
};

export default Features
