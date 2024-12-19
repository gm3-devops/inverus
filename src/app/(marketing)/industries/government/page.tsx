import Container from "@/components/global/container";
import Wrapper from "@/components/global/wrapper";
import MagicBadge from "@/components/ui/magic-badge";
import Image from "next/image";
import { fraud, implementation } from "@/constants/industries";
import { Icons } from "@/components";
import { ScheduleCall } from "@/components/ui/cal";
import { Calendar, Icon, Landmark, Rocket, Scale } from "lucide-react";
import { Particles } from "@/components/ui/particles";
import RetroGrid from "@/components/ui/retro-grid";
import { CasesCard, CasesGrid } from "@/components/ui/use-cases-grid";
import { CarFrontIcon, Box, Activity } from "lucide-react";

const DEALERSCASES = [
    {
        Icon: CarFrontIcon,
        name: "Auto Dealers",
        description:
            "Prevent test drive fraud and confirm buyer identity at purchase.",
        href: "/",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-1",
        background: (
            <Image
                src="/images/porsche.svg"
                alt="Industry Spotlight"
                width={300}
                height={300}
                className="absolute top-10 left-10 origin-top rounded-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_0%,#000_100%)] group-hover:scale-105"
            />
        ),
    },
    {
        Icon: Box,
        name: "DMS Providers",
        description:
            "Integrate fraud prevention tools as an added value for clients.",
        href: "/",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-2",
        background: (
            <Image
                src="/images/cards.svg"
                alt="Financial Institutions"
                width={300}
                height={300}
                className="absolute top-10 left-10 origin-top rounded-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_0%,#000_100%)] group-hover:scale-105"
            />
        ),
    },
    {
        Icon: Activity,
        name: "Car Brands",
        description: "Monitor fraud trends across regions and dealer networks.",
        className: "col-span-3 lg:col-span-3",
        href: "/",
        cta: "Learn more",
        background: (
            <Image
                src="/images/healthcare.svg"
                alt="Healthcare Institutions"
                width={300}
                height={300}
                className="absolute top-10 left-10 origin-top rounded-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_0%,#000_100%)] group-hover:scale-105"
            />
        ),
    },
];

const GovernmentPage = () => {
    return (
        <>
            {/* Section Landing */}
            <Wrapper className="flex flex-col items-center justify-center py-8 md:py-12 w-full">
                <Container delay={0.1} className="w-full">
                    <div className="flex flex-col items-center justify-center py-40 max-w-2xl mx-auto">
                        <MagicBadge title="Government" />
                        <h2 className="text-3xl lg:text-4xl font-semibold font-heading text-center mt-6 !leading-tight">
                            Strengthening Systems, Safeguarding Public Trust
                        </h2>
                        <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
                            Proactively combat identity fraud to protect government services and citizens.
                        </p>
                        <div className="flex items-center justify-center gap-x-4 mt-8">
                            <ScheduleCall
                                buttonText="Learn more abbout inVerus for government"
                                iconr={<Landmark className="w-4 h-4" />}
                            />
                        </div>
                    </div>
                </Container>
                <Container delay={0.2} className="w-full">
                    <div className="w-full flex max-w-4xl py-2 mx-auto items-center justify-center">
                        <div className="fingerprint-box flex items-center justify-center">
                            <div className="svg-box flex items-center justify-center">
                                <Icons.fingerprint />
                            </div>
                        </div>
                    </div>
                </Container>
            </Wrapper >

            {/* Fraud Challenge Section */}
            < Wrapper className="flex flex-col items-center justify-center py-8 md:py-12 w-full" >
                <Container delay={0.2} className="w-full">
                    <div className="max-w-2xl mx-auto mx-auto text-start md:text-center">
                        <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
                            Fraud in Government Services: A Growing Concern
                        </h2>
                        <p className="text-muted-foreground mt-6">
                            Fraudulent claims in social services, identity theft in tax systems, and fake credentials plague public systems.
                            Governments must ensure trust, reduce financial waste, and enhance citizen protection.
                        </p>
                    </div>
                </Container>
                <Container>
                    <div className="flex items-center justify-center mx-auto mt-0">
                        <Icons.feature className="w-auto h-80" />
                    </div>
                </Container>
                <Container delay={0.1} className="w-full">
                    <div className="flex flex-col items-center justify-center py-8 md:py-12 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
                            {fraud.map((feature) => (
                                <div key={feature.title} className="flex flex-col items-start lg:items-start px-0 md:px-0">
                                    <div className="flex items-center justify-center">
                                        <feature.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-lg font-medium mt-4">
                                        {feature.title}
                                    </h3>
                                    <p className="text-muted-foreground mt-2 text-start lg:text-start">
                                        {feature.info}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </Wrapper >

            {/* Solution Section */}
            < Wrapper className="flex flex-col items-center justify-center py-8 md:py-12 w-full" >
                <Container delay={0.2} className="w-full">
                    <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                        <div className="max-w-2xl mx-auto text-start md:text-center">
                            <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
                                How inVerus Delivers for Auto Industry Leaders
                            </h2>
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
                                                Analyze anomalies in applications, tax records, and service usage.
                                            </p>
                                        </div>
                                        <div className="flex flex-1 items-center max-lg:py-6 lg:pb-2">
                                            <div className="flex flex-1 items-center justify-center max-lg:py-6 lg:pb-2">
                                                <Image
                                                    className="object-contain"
                                                    src="/images/industries/insights.svg"
                                                    alt="Consortium Intelligence"
                                                    width={200}
                                                    height={200}
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
                                                Identify fraudulent records and fake identities.
                                            </p>
                                        </div>
                                        <div className="flex flex-1 items-center justify-center max-lg:py-6 lg:pb-2">
                                            <Image
                                                className="object-contain"
                                                src="/images/industries/ai.svg"
                                                alt="Consortium Intelligence"
                                                width={200}
                                                height={200}
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
                                                Cross-agency collaboration for fraud detection.
                                            </p>
                                        </div>
                                        <div className="flex flex-1 items-center justify-center max-lg:py-6 lg:pb-2">
                                            <Image
                                                className="object-contain"
                                                src="/images/industries/consortium.svg"
                                                alt="Consortium Intelligence"
                                                width={200}
                                                height={200}
                                            />
                                        </div>
                                    </div>
                                    <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Wrapper >

            {/* Implementation */}
            < Wrapper className="flex flex-col items-center justify-center md:py-12 w-full" >
                <Container delay={0.2} className="w-full">
                    <div className="max-w-md mx-auto text-start md:text-center">
                        <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
                            Ease of Implementation Section
                        </h2>
                    </div>
                </Container>
                <Container>
                    <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full divide-x-0 md:divide-x divide-y md:divide-y-0 divide-gray-900 first:border-l-2 lg:first:border-none first:border-gray-900">
                            {implementation.map((step) => (
                                <div key={step.title} className="flex flex-col items-start px-4 md:px-6 lg:px-8 lg:py-6 py-4">
                                    <div className="flex items-center justify-center">
                                        <step.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-lg font-medium mt-4">
                                        {step.title}
                                    </h3>
                                    <p className="text-muted-foreground mt-2 text-start lg:text-start">
                                        {step.info}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </Wrapper >

            {/* Use Cases */}
            < Wrapper className="flex flex-col items-center justify-center py-8 md:py-12 w-full" >
                <Container delay={0.2} className="w-full">
                    <div
                        className="flex w-full flex-col items-center justify-center py-8 lg:items-center"
                    >
                        <MagicBadge title="Industries" />
                        <h2 className="!leading-[1.1] mt-6 text-center font-heading font-medium text-3xl text-foreground md:text-5xl lg:text-center">
                            Safeguarding Critical Sectors
                        </h2>
                        <p className="mt-4 max-w-lg text-center text-lg text-muted-foreground lg:text-center">
                            Tailored solutions to combat fraud and ensure trust across industries.
                        </p>
                    </div>
                </Container>
                <Container delay={0.2}>
                    <CasesGrid className="py-8">
                        {DEALERSCASES.map((feature, idx) => (
                            <CasesCard key={idx} {...feature} />
                        ))}
                    </CasesGrid>
                </Container>
            </Wrapper >

            {/* CTA */}
            < Wrapper className="flex flex-col items-center justify-center py-8 md:py-12 w-full" >
                <Container delay={0.2} className="w-full">
                    <div className="flex flex-col items-center justify-center text-center w-full px-4 md:px-0 mx-auto h-[500px] border border-border rounded-3xl overflow-hidden relative">
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-12 bg-violet-500 blur-[10rem]"></div>
                        <div className="flex flex-col items-center justify-center w-full z-20">
                            <h2 className="text-4xl md:text-6xl font-heading heading font-semibold !leading-tight mt-6">
                                Protect Your <br className="hidden md:block" /> Dealership Network Today
                            </h2>
                            <p className="text-base md:text-lg text-center text-accent-foreground/80 max-w-xl mx-auto mt-6">
                                Ready to get started? Ensure seamless fraud prevention and identity verification with scalable, secure solutions.
                            </p>
                            <div className="flex flex-col md:flex-row items-center justify-center w-full gap-6 mt-6">
                                <ScheduleCall
                                    buttonText="Get Started Now"
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
            </Wrapper>
        </>
    )
};

export default GovernmentPage