
"use client";
import React from "react";
import Container from "@/components/global/container";
import Wrapper from "@/components/global/wrapper";
import MagicBadge from "@/components/ui/magic-badge";
import { identityFraud } from "@/constants/industries";
import { ScheduleCall } from "@/components/ui/cal";
import { Calendar, Rocket } from "lucide-react";
import { Particles } from "@/components/ui/particles";
import RetroGrid from "@/components/ui/retro-grid";
import MagicCard from "@/components/ui/magic-card";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonial";
import { ConsortiumBenefits, HarvestorBenefits, InsightsBenefits } from "@/constants/benefits";
import { SolutionsBenefits } from "@/components/marketing/solution-benefits";

const problems = [
    {
        text:
            "Legacy systems rely on fragmented and outdated verification processes, leaving critical gaps that fraudsters exploit. These systems often fail to adapt to rapidly evolving threats like AI-generated Deep Fakes and advanced identity spoofing. The rise of sophisticated fraud schemes demands more than just isolated checks; it requires a holistic, proactive strategy.",
        src: "/placeholder.svg",
    },
    {
        text:
            "inVerus offers a revolutionary solution by integrating advanced intelligence and real-time data from diverse industries. By fostering collaboration and leveraging AI-driven insights, InVerus empowers businesses to detect patterns, predict fraud, and prevent breaches before they occur. This unified approach not only minimizes risk but also restores trust in digital transactions.",
        src: "/placeholder.svg",
    },
];

const SolutionsPage = () => {
    return (
        <>
            {/* Section Landing */}
            <Wrapper className="flex flex-col items-center justify-center py-40 pb-10 w-full">
                <Container delay={0.1} className="w-full">
                    <div className="flex w-full flex-col items-center justify-center py-8 lg:items-center">
                        <MagicBadge title="Our Solution" />
                        <h2 className="!leading-[1.1] mt-6 max-w-2xl text-center font-heading font-medium text-3xl text-foreground md:text-4xl lg:text-center">
                            Your Ultimate Defense Against Digital Identity Fraud
                        </h2>
                        <p className="mt-4 max-w-xl text-center text-lg text-muted-foreground lg:text-center">
                            Prevent identity fraud before it impacts your business. InVerus combines shared intelligence, advanced search, and behavioral analytics to provide unmatched protection.
                        </p>
                        <div className="flex items-center justify-center gap-x-4 mt-8">
                            <ScheduleCall
                                buttonText="Learn More About Our Solution"
                                iconr={<Calendar className="w-4 h-4" />}
                            />
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* Fraud Challenge Section */}
            <Wrapper className="flex flex-col items-center justify-center py-4 md:py-12 w-full">
                <Container delay={0.2} className="w-full">
                    <div className="flex w-full flex-col items-center justify-center py-8 lg:items-center">
                        <MagicBadge title="The Digital Identity Landscape" />
                        <h2 className="!leading-[1.1] mt-6 max-w-2xl text-center font-heading font-medium text-3xl text-foreground md:text-4xl lg:text-center">
                            The Global Rise of Identity Fraud
                        </h2>
                        <p className="mt-4 max-w-xl text-center text-lg text-muted-foreground lg:text-center">
                            As identity fraud escalates, costing $43 billion annually, traditional defenses fall short against AI-driven threats and Deep Fakes.
                        </p>
                    </div>
                </Container>
                <div className="grid w-full grid-cols-1 gap-4 py-8 pb-18 md:pb-10 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
                    {identityFraud.map((target, id) => (
                        <Container delay={0.2 * id} key={id}>
                            <MagicCard className="group md:py-8">
                                <div className="flex w-full flex-col items-center justify-center"> {/* Updated alignment */}
                                    <target.icon
                                        strokeWidth={1.5}
                                        className="h-10 w-10 text-primary"
                                    />
                                    <div className="relative flex flex-col items-center justify-center"> {/* Ensures left alignment */}
                                        <h3 className="mt-6 font-medium text-base text-foreground">
                                            {target.title}
                                        </h3>
                                        <p className="mt-2 text-left text-muted-foreground text-sm text-center justify-center"> {/* Added text-left */}
                                            {target.info}
                                        </p>
                                    </div>
                                </div>
                            </MagicCard>
                        </Container>
                    ))}
                </div>
            </Wrapper>

            {/* Why Solution */}
            <Wrapper className="flex flex-col items-center justify-center py-18 md:py-12 w-full">
                <Container delay={0.3}>
                    <div className="flex w-full flex-col items-center justify-center py-20 md:py-8 lg:items-center">
                        <MagicBadge title="Why a New Approach is Needed?" />
                    </div>
                </Container>
                <Container delay={0.2}>
                    <AnimatedTestimonials testimonials={problems} />
                </Container>
            </Wrapper >

            {/* Consortium */}
            <Wrapper className="flex flex-col items-center justify-center py-4 md:py-12 w-full">
                <Container delay={0.2} className="w-full">
                    <div className="flex w-full flex-col items-center justify-center py-8 lg:items-center">
                        <MagicBadge title="Our Unique Patented Solution" />
                        <h2 className="!leading-[1.1] mt-6 max-w-2xl text-center font-heading font-medium text-3xl text-foreground md:text-4xl lg:text-center">
                            The inVerus Trust Ecosystem
                        </h2>
                        <p className="mt-4 max-w-xl text-center text-lg text-muted-foreground lg:text-center">
                            inVerus offers a three-pillar approach to proactive, accurate identity fraud prevention.
                        </p>
                    </div>
                </Container>
                <Container>
                    <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
                        <div className="flex flex-col-reverse overflow-clip rounded-xl border border-border md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
                            <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                                <h3 className="mb-3 text-lg font-semibold text-center md:mb-4 md:text-2xl lg:mb-6">
                                    Consortium Intelligence – The Wisdom of the Crowd
                                </h3>
                                <p className="text-muted-foreground text-center lg:text-lg">
                                    Shared Data. Collective Defense.
                                </p>
                                <dl className="mt-5 max-w-xl space-y-4 text-base text-muted-foreground lg:max-w-none">
                                    {ConsortiumBenefits.map((benefit) => (
                                        <div key={benefit.title} className="relative pl-9">
                                            <dt className="inline font-semibold text-foreground">
                                                <benefit.icon aria-hidden="true" className="absolute left-1 top-1 size-5 text-primary" />
                                                {benefit.title}
                                            </dt>{' '}
                                            <dd className="inline">
                                                {benefit.description}
                                            </dd>
                                        </div>
                                    ))}
                                </dl>
                                <figure className="mt-4 border-l border-blue-500 pl-8 text-foreground">
                                    <blockquote className="text-foreground text-start">
                                        <p>
                                            Key Benefit: Gain insights you wouldn&apos;t have alone.
                                        </p>
                                    </blockquote>
                                </figure>
                            </div>
                            <div className="md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]">
                                <img
                                    src="/placeholder.svg"
                                    alt="Consortium"
                                    className="aspect-[16/9] h-full w-full object-cover object-center"
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </Wrapper >

            {/* Harvestor */}
            <Wrapper className="flex flex-col items-center justify-center py-4 md:py-4 w-full">
                <Container>
                    <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
                        <div className="flex flex-col overflow-clip rounded-xl border border-border md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
                            <div className="md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]">
                                <img
                                    src="/placeholder.svg"
                                    alt="Harvestor"
                                    className="aspect-[16/9] h-full w-full object-cover object-center"
                                />
                            </div>
                            <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                                <h3 className="mb-3 text-lg font-semibold text-center md:mb-4 md:text-2xl lg:mb-6">
                                    Harvestor - What the Internet Knows
                                </h3>
                                <p className="text-muted-foreground text-center lg:text-lg">
                                    Advanced Search for Modern Fraud Detection
                                </p>
                                <dl className="mt-5 max-w-xl space-y-4 text-base text-muted-foreground lg:max-w-none">
                                    {HarvestorBenefits.map((benefit) => (
                                        <div key={benefit.title} className="relative pl-9">
                                            <dt className="inline font-semibold text-foreground">
                                                <benefit.icon aria-hidden="true" className="absolute left-1 top-1 size-5 text-primary" />
                                                {benefit.title}
                                            </dt>{' '}
                                            <dd className="inline">
                                                {benefit.description}
                                            </dd>
                                        </div>
                                    ))}
                                </dl>
                                <figure className="mt-4 border-l border-blue-500 pl-8 text-foreground">
                                    <blockquote className="text-foreground text-start">
                                        <p>
                                            Key Benefit: Detect hidden threats with precision and speed.
                                        </p>
                                    </blockquote>
                                </figure>
                            </div>
                        </div>
                    </div>
                </Container>
            </Wrapper >

            {/* Insights */}
            <Wrapper className="flex flex-col items-center justify-center py-4 md:py-12 w-full">
                <Container>
                    <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
                        <div className="flex flex-col-reverse overflow-clip rounded-xl border border-border md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
                            <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                                <h3 className="mb-3 text-lg font-semibold text-center md:mb-4 md:text-2xl lg:mb-6">
                                    Behavioral Insights – What We Learn
                                </h3>
                                <p className="text-muted-foreground text-center lg:text-lg">
                                    Analyze Behavior. Detect Anomalies.
                                </p>
                                <dl className="mt-5 max-w-xl space-y-4 text-base text-muted-foreground lg:max-w-none">
                                    {InsightsBenefits.map((benefit) => (
                                        <div key={benefit.title} className="relative pl-9">
                                            <dt className="inline font-semibold text-foreground">
                                                <benefit.icon aria-hidden="true" className="absolute left-1 top-1 size-5 text-primary" />
                                                {benefit.title}
                                            </dt>{' '}
                                            <dd className="inline">
                                                {benefit.description}
                                            </dd>
                                        </div>
                                    ))}
                                </dl>
                                <figure className="mt-4 border-l border-blue-500 pl-8 text-foreground">
                                    <blockquote className="text-foreground text-start">
                                        <p>
                                            Key Benefit: Stop fraud before it escalates by uncovering the unexpected.
                                        </p>
                                    </blockquote>
                                </figure>
                            </div>
                            <div className="md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]">
                                <img
                                    src="/placeholder.svg"
                                    alt="Insights"
                                    className="aspect-[16/9] h-full w-full object-cover object-center"
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </Wrapper >

            {/* Benefits Section */}
            <Wrapper className="flex flex-col items-center justify-center py-18 md:py-12 w-full">
                <Container delay={0.3}>
                    <div className="flex w-full flex-col items-center justify-center py-20 md:py-8 lg:items-center">
                        <MagicBadge title="Features" />
                        <h2 className="!leading-[1.1] mt-6 max-w-2xl text-center font-heading font-medium text-3xl text-foreground md:text-4xl lg:text-center">
                            Why inVerus is the Future of Identity Fraud Prevention.
                        </h2>
                        <p className="mt-4 max-w-xl text-center text-lg text-muted-foreground lg:text-center">
                            inVerus helps businesses detect and prevent fraud in real time, reducing costs and improving decision accuracy with scalable, cross-industry solutions.
                        </p>
                    </div>
                </Container>
                <Container delay={0.2}>
                    <SolutionsBenefits />
                </Container>
            </Wrapper >

            {/* CTA */}
            < Wrapper className="flex flex-col items-center justify-center py-12 md:py-8 w-full" >
                <Container delay={0.2} className="w-full">
                    <div className="flex flex-col items-center justify-center text-center w-full px-4 md:px-0 mx-auto h-[500px] border border-border rounded-3xl overflow-hidden relative">
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-12 bg-violet-500 blur-[10rem]"></div>
                        <div className="flex flex-col items-center justify-center w-full z-20">
                            <h2 className="text-4xl md:text-6xl font-heading heading font-semibold !leading-tight mt-6">
                                Protect Your Business <br className="hidden md:block" /> From Identity Fraud Today
                            </h2>
                            <p className="text-base md:text-lg text-center text-accent-foreground/80 max-w-xl mx-auto mt-6">
                                Ready to get started? Ensure seamless fraud prevention and identity verification with scalable, secure solutions.
                            </p>
                            <div className="flex flex-col md:flex-row items-center justify-center w-full gap-6 mt-6">
                                <ScheduleCall
                                    buttonText="Learn More About Our Solution"
                                    iconr={<Rocket className="w-4 h-4" />}
                                />
                            </div>
                        </div>
                        <RetroGrid />
                        <Particles
                            refresh
                            ease={80}
                            color="#075AC2"
                            quantity={100}
                            className="size-full absolute inset-0"
                        />
                    </div>
                </Container>
            </Wrapper >
        </>
    )
};

export default SolutionsPage