import Container from "@/components/global/container";
import Wrapper from "@/components/global/wrapper";
import MagicBadge from "@/components/ui/magic-badge";
import { governmentImplementation, governmentProblems } from "@/constants/industries";
import { Icons } from "@/components";
import { ScheduleCall } from "@/components/ui/cal";
import { Calendar, Rocket } from "lucide-react";
import { Particles } from "@/components/ui/particles";
import RetroGrid from "@/components/ui/retro-grid";
import { BrainCircuit, ScanSearch, Share2 } from 'lucide-react';
import Image from "next/image";
import GlobeAndStars from "@/components/ui/globe-and-stars";
import RadarAnimation from '@/components/ui/radar';
import { PillarsCard, PillarsGrid } from "@/components/ui/bento-grid-pillars";
import MagicCard from "@/components/ui/magic-card";

interface CardData {
    title: string;
    description: string;
    imageUrl: string;
}

const cardData: CardData[] = [
    {
        title: "Tax Systems",
        description: "Verify identities for tax filings to prevent fraudulent submissions and protect public funds. Detect anomalies in declarations and ensure compliance with legal frameworks, safeguarding the integrity of national tax systems while reducing costly errors and misuse.",
        imageUrl: "/images/industries/tax-systems.jpg?height=800&width=600"
    },
    {
        title: "Public Benefits",
        description: "Prevent fraudulent claims for welfare and social programs by validating identities and detecting fake or duplicate applications. Streamline benefits distribution to ensure support reaches the citizens who truly need it, reducing financial waste and abuse.",
        imageUrl: "/images/industries/public-benefits.jpg?height=800&width=600"
    },
    {
        title: "Licensing & Permits",
        description: "Authenticate applications for credentials and licenses with robust identity verification processes. Prevent identity manipulation, protect sensitive sectors, and build confidence in systems governing professional certifications, vehicle permits, and more.",
        imageUrl: "/images/industries/license-permits.jpg?height=800&width=600"
    }
];

const PillarContent = [
    {
        Icon: Share2,
        name: "Consortium Intelligence",
        description: "Cross-agency collaboration for fraud detection.",
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
        name: "Harvestor / Reverse Search Engine",
        description: "Identify fraudulent records and fake identities.",
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
        description: "Analyze anomalies in applications, tax records, and service usage.",
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

const GovernmentPage = () => {
    return (
        <>
            {/* Section Landing */}
            <Wrapper className="flex flex-col items-center justify-center py-40 pb-10 w-full">
                <Container delay={0.1} className="w-full">
                    <div className="flex w-full flex-col items-center justify-center py-8 lg:items-center">
                        <MagicBadge title="Government" />
                        <h2 className="!leading-[1.1] mt-6 max-w-3xl text-center font-heading font-medium text-3xl text-foreground md:text-4xl lg:text-center">
                            Strengthening Systems, Safeguarding Public Trust
                        </h2>
                        <p className="mt-4 max-w-lg text-center text-lg text-muted-foreground lg:text-center">
                            Proactively combat identity fraud to protect government services and citizens.
                        </p>
                        <div className="flex items-center justify-center gap-x-4 mt-8">
                            <ScheduleCall
                                buttonText="Learn more about inVerus for Government"
                                iconr={<Calendar className="w-4 h-4" />}
                            />
                        </div>
                    </div>
                </Container>
                <Container delay={0.2} className="w-full">
                    <div className="w-full flex max-w-4xl py-18 mx-auto items-center justify-center">
                        <div className="fingerprint-box flex items-center justify-center">
                            <div className="svg-box flex items-center justify-center">
                                <Icons.fingerprint />
                            </div>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* Fraud Challenge Section */}
            <Wrapper className="flex flex-col items-center justify-center py-4 md:py-12 w-full">
                <Container delay={0.2} className="w-full">
                    <div className="flex w-full flex-col items-center justify-center py-8 lg:items-center">
                        <MagicBadge title="Fraud in Government Services" />
                        <h2 className="!leading-[1.1] mt-6 max-w-3xl text-center font-heading font-medium text-3xl text-foreground md:text-4xl lg:text-center">
                            Fraud in Government Services: A Growing Concern
                        </h2>
                        <p className="mt-4 max-w-lg text-center text-lg text-muted-foreground lg:text-center">
                            As fraudulent claims, data breaches, and identity theft escalate, governments must act swiftly to protect public resources, restore trust, and minimize financial damage.
                        </p>
                    </div>
                </Container>
                <Container>
                    <div className="flex items-center justify-center mx-auto mt-0">
                        <Icons.feature className="w-auto h-80" />
                    </div>
                </Container>
                <div className="grid w-full grid-cols-1 gap-4 py-8 pb-24 md:pb-10 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
                    {governmentProblems.map((target, id) => (
                        <Container delay={0.2 * id} key={id}>
                            <MagicCard className="group md:py-8">
                                <div className="flex w-full flex-col items-center justify-start"> {/* Updated alignment */}
                                    <target.icon
                                        strokeWidth={1.5}
                                        className="h-10 w-10 text-primary"
                                    />
                                    <div className="relative flex flex-col text-center justify-center"> {/* Ensures left alignment */}
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

            {/* Solution Section */}
            <Wrapper className="flex flex-col items-center justify-center py-18 md:py-12 w-full">
                <Container delay={0.3}>
                    <div className="flex w-full flex-col items-center justify-center py-20 md:py-8 lg:items-center">
                        <MagicBadge title="Our Unique Patented Solution" />
                        <h2 className="!leading-[1.1] mt-6 max-w-3xl text-center font-heading font-medium text-3xl text-foreground md:text-4xl lg:text-center">
                            How inVerus Enhances Public Sector Integrity
                        </h2>
                        <p className="mt-4 max-w-lg text-center text-lg text-muted-foreground lg:text-center">
                            inVerus empowers government agencies with advanced fraud detection tools, enabling cross-agency collaboration, identity verification, and anomaly analysis to safeguard public resources and protect citizens.                        </p>
                    </div>
                </Container>
                <Container delay={0.2}>
                    <PillarsGrid className="py-8">
                        {PillarContent.map((feature, idx) => (
                            <PillarsCard key={idx} {...feature} />
                        ))}
                    </PillarsGrid>
                </Container>
            </Wrapper >

            {/* Implementation */}
            <Wrapper className="flex flex-col items-center justify-center py-4 md:py-12 w-full">
                <Container delay={0.2} className="w-full">
                    <div className="flex w-full flex-col items-center justify-center py-8 lg:items-center">
                        <h2 className="!leading-[1.1] mt-6 max-w-3xl text-center font-heading font-medium text-3xl text-foreground md:text-4xl lg:text-center">
                            Ease of Implementation
                        </h2>
                    </div>
                </Container>
                <Container>
                    <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full divide-x-0 md:divide-x divide-y md:divide-y-0 divide-gray-900 first:border-l-2 lg:first:border-none first:border-gray-900">
                            {governmentImplementation.map((step) => (
                                <div key={step.title} className="flex flex-col items-center justify-center px-4 md:px-6 lg:px-8 lg:py-6 py-4">
                                    <div className="flex items-center justify-center">
                                        <step.icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-medium mt-4">
                                        {step.title}
                                    </h3>
                                    <p className="text-muted-foreground mt-2 text-center justify-center">
                                        {step.info}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </Wrapper >

            {/* Use Cases */}
            <Wrapper className="flex flex-col items-center justify-center py-4 md:py-12 w-full">
                <Container delay={0.1} className="w-full">
                    <div className="flex w-full flex-col items-center justify-center py-8 lg:items-center">
                        <MagicBadge title="Use Cases" />
                        <h2 className="!leading-[1.1] mt-6 max-w-3xl text-center font-heading font-medium text-3xl text-foreground md:text-4xl lg:text-center">
                            Secure Governance, Trusted Services
                        </h2>
                        <p className="mt-4 max-w-lg text-center text-lg text-muted-foreground lg:text-center">
                            Protect government systems and citizens from identity fraud with advanced solutions. Enhance operational efficiency, reduce financial waste, and restore trust in public services. Build a fraud-free future with scalable, secure tools.
                        </p>
                    </div>
                </Container>
                <Container>
                    <ul className="cards">
                        {cardData.map((card, index) => (
                            <li key={index} className="card">
                                <div className="cardBody">
                                    <div
                                        className="imageHalf"
                                        style={{ backgroundImage: `url(${card.imageUrl})` }}
                                    />
                                    <div className="textHalf">
                                        <h2 className="!leading-[1.1] mt-6 max-w-3xl text-center font-heading font-medium text-3xl text-foreground md:text-4xl lg:text-center">
                                            {card.title}
                                        </h2>
                                        <p className="mt-4 max-w-lg text-center text-lg text-muted-foreground lg:text-center">
                                            {card.description}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </Container>
            </Wrapper >

            {/* CTA */}
            <Wrapper className="flex flex-col items-center justify-center py-12 md:py-8 w-full">
                <Container delay={0.2} className="w-full">
                    <div className="flex flex-col items-center justify-center text-center w-full px-4 md:px-0 mx-auto h-[500px] border border-border rounded-3xl overflow-hidden relative">
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-12 bg-violet-500 blur-[10rem]"></div>
                        <div className="flex flex-col items-center justify-center w-full z-20">
                            <h2 className="text-4xl md:text-6xl font-heading heading font-semibold !leading-tight mt-6">
                                Strengthen Your <br className="hidden md:block" /> Fraud Prevention Strategy
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
            </Wrapper >
        </>
    )
};

export default GovernmentPage