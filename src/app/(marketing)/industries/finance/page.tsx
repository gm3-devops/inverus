import Container from "@/components/global/container";
import Wrapper from "@/components/global/wrapper";
import MagicBadge from "@/components/ui/magic-badge";
import { finance, fincnanceImplementation } from "@/constants/industries";
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
        title: "Account Opening",
        description: "Validate identities before account creation with advanced fraud detection tools. Ensure that every new account belongs to a legitimate individual, minimizing the risk of onboarding fraudulent or synthetic identities. Build trust with your customers while protecting your institution from potential fraud.",
        imageUrl: "/images/industries/account-opening.jpg?height=800&width=600"
    },
    {
        title: "Loan Approvals",
        description: "Detect fraudulent loan applications early by analyzing patterns and behaviors indicative of identity manipulation. Prevent approval delays for genuine applicants while ensuring your institution isn’t exposed to high-risk individuals or synthetic identities.",
        imageUrl: "/images/industries/loan-approval.jpg?height=800&width=600"
    },
    {
        title: "Transaction Monitoring",
        description: "Enable real-time risk detection across all banking activities to identify suspicious transactions as they occur. By monitoring geographic activity, transactional irregularities, and account behavior, financial institutions can reduce false positives and focus on truly fraudulent activity.",
        imageUrl: "/images/industries/transaction-monitoring.jpg?height=800&width=600"
    }
];

const PillarContent = [
    {
        Icon: Share2,
        name: "Consortium Intelligence",
        description: "Proactively flag identity risks using shared fraud data.",
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
        description:
            "Identify suspicious patterns and anomalies instantly.",
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
        description: "Detect irregularities in transactions, geographic activity, and account usage.",
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

const FinancePage = () => {
    return (
        <>
            {/* Section Landing */}
            <Wrapper className="flex flex-col items-center justify-center py-40 pb-10 w-full">
                <Container delay={0.1} className="w-full">
                    <div className="flex w-full flex-col items-center justify-center py-8 lg:items-center">
                        <MagicBadge title="Financial Institutions" />
                        <h2 className="!leading-[1.1] mt-6 max-w-3xl text-center font-heading font-medium text-3xl text-foreground md:text-4xl lg:text-center">
                            Securing Financial Transactions with Trusted Identity Validation
                        </h2>
                        <p className="mt-4 max-w-lg text-center text-lg text-muted-foreground lg:text-center">
                            Stop identity fraud before it starts. Protect your customers, reduce costs, and ensure compliance with ease.
                        </p>
                        <div className="flex items-center justify-center gap-x-4 mt-8">
                            <ScheduleCall
                                buttonText="Book a Call Today"
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
                        <MagicBadge title="Fraud in Financial Identity" />
                        <h2 className="!leading-[1.1] mt-6 max-w-3xl text-center font-heading font-medium text-3xl text-foreground md:text-4xl lg:text-center">
                            The Growing Threat of Financial Identity Fraud
                        </h2>
                        <p className="mt-4 max-w-lg text-center text-lg text-muted-foreground lg:text-center">
                            Addressing vulnerabilities in financial institutions with innovative identity validation and fraud prevention solutions.
                        </p>
                    </div>
                </Container>
                <Container>
                    <div className="flex items-center justify-center mx-auto mt-0">
                        <Icons.feature className="w-auto h-80" />
                    </div>
                </Container>
                <div className="grid w-full grid-cols-1 gap-4 py-8 pb-24 md:pb-10 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
                    {finance.map((target, id) => (
                        <Container delay={0.2 * id} key={id}>
                            <MagicCard className="group md:py-8">
                                <div className="flex w-full flex-col items-center justify-start"> {/* Updated alignment */}
                                    <target.icon
                                        strokeWidth={1.5}
                                        className="h-10 w-10 text-primary"
                                    />
                                    <div className="relative flex flex-col text-center justify-start "> {/* Ensures left alignment */}
                                        <h3 className="mt-6 font-medium text-base text-foreground">
                                            {target.title}
                                        </h3>
                                        <p className="mt-2 text-left text-muted-foreground text-sm text-center justify-start" > {/* Added text-left */}
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
                            How inVerus Supports Financial Institutions
                        </h2>
                        <p className="mt-4 max-w-lg text-center text-lg text-muted-foreground lg:text-center">
                            inVerus empowers financial institutions with cutting-edge fraud detection solutions to combat identity theft, ensure regulatory compliance, and minimize operational costs, safeguarding both institutions and their customers.
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
                            {fincnanceImplementation.map((step) => (
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
                            Fraud Prevention for Financial Growth
                        </h2>
                        <p className="mt-4 max-w-lg text-center text-lg text-muted-foreground lg:text-center">
                            Enhance security with real-time fraud detection and compliance tools tailored for financial institutions. Proactively address identity fraud, reduce costs, and safeguard transactions. Trust in cutting-edge technology to protect your business and customers.
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
                                Secure Your <br className="hidden md:block" /> Institution Against Fraud
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

export default FinancePage