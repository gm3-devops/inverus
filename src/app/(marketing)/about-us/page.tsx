import Container from "@/components/global/container";
import Wrapper from "@/components/global/wrapper";
import MagicBadge from "@/components/ui/magic-badge";
import Image from "next/image";
import { ScheduleCall } from "@/components/ui/cal";
import { Rocket } from 'lucide-react';
import { advisorMember, leadershipTeam, teamMembers } from "@/constants/team";
import { BrainCircuit, ScanSearch, Share2 } from 'lucide-react';
import BioCard from "@/components/ui/bio-card";
import { Particles } from "@/components/ui/particles";
import RetroGrid from "@/components/ui/retro-grid";
import GlobeAndStars from "@/components/ui/globe-and-stars";
import RadarAnimation from '@/components/ui/radar';
import { PillarsCard, PillarsGrid } from "@/components/ui/bento-grid-pillars";

const PillarContent = [
    {
        Icon: Share2,
        name: "Collaboration Through Consortium Intelligence",
        description: "A first-of-its-kind approach, enabling members to collectively fight identity fraud.",
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
        name: "Advanced Search Capabilities with Harvestor",
        description:
            "Leveraging real-time data analysis to identify anomalies faster.",
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
        name: "Behavioral Analytics for Precision Detection",
        description: "Bringing advanced machine learning and data science to uncover fraudulent behaviors.",
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

const AboutUs = () => {
    return (
        <>
            {/* Section Landing */}
            <Wrapper className="flex flex-col items-center justify-center py-8 md:py-12 w-full">
                <Container delay={0.1} className="w-full">
                    <div className="flex flex-col items-center justify-center py-40 max-w-2xl mx-auto">
                        <MagicBadge title="About Us" />
                        <h2 className="text-3xl lg:text-4xl font-semibold font-heading text-center mt-6 !leading-tight">
                            Building a Safer World Through Trusted Identity Validation
                        </h2>
                        <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
                            inVerus is redefining identity fraud prevention with innovation, collaboration, and a proven leadership team committed to solving one of the most critical challenges of the digital age.
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="flex flex-col justify-between gap-10 rounded-2xl bg-background/10 [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] border border-border p-10">
                            <p className="text-sm text-muted-foreground">
                                OUR MISSION
                            </p>
                            <p className="text-lg font-medium">
                                To empower businesses across industries with
                                advanced identity validation solutions, reducing fraud, protecting trust,
                                and ensuring secure transactions globally.
                            </p>
                        </div>
                        <div className="flex flex-col justify-between gap-10 rounded-2xl bg-background/10 [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] border border-border p-10">
                            <p className="text-sm text-muted-foreground">
                                OUR VISION
                            </p>
                            <p className="text-lg font-medium">
                                To become the leading global identity verification ecosystem,
                                leveraging innovation and collaboration to make identity fraud a
                                thing of the past.
                            </p>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* Leadeership */}
            <Wrapper className="flex flex-col items-center justify-center py-8 md:py-12 w-full">
                <Container delay={0.1} className="w-full">
                    <div className="flex flex-col items-center justify-center py-10 max-w-2xl mx-auto">
                        <MagicBadge title="Leadership Team" />
                        <h2 className="text-3xl lg:text-4xl font-semibold font-heading text-center mt-6 !leading-tight">
                            Leadership You Can Trust
                        </h2>
                        <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
                            Our leadership team combines decades of experience building, scaling, and exiting global companies across technology, finance, and enterprise solutions. From C-suite roles at public corporations to founding innovative startups, we bring unmatched expertise to solving the identity fraud challenge
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-8">
                        {leadershipTeam.map((member) => (
                            <BioCard
                                key={member.key}
                                name={member.name}
                                title={member.title}
                                avatar={member.avatar}
                                bio={member.description}
                                companies={member.companies}
                                linkedinUrl={member.linkedinUrl}
                            />
                        ))}
                    </div>
                </Container>
            </Wrapper>

            {/* Team */}
            <Wrapper className="flex flex-col items-center justify-center py-8 md:py-12 w-full">
                <Container delay={0.1} className="w-full">
                    <div className="flex flex-col items-center justify-center py-10 max-w-2xl mx-auto">
                        <MagicBadge title="Our Team" />
                        <h2 className="text-3xl lg:text-4xl font-semibold font-heading text-center mt-6 !leading-tight">
                            Thriving Through Adversity
                        </h2>
                        <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
                            A dedicated team committed to overcoming challenges and protecting
                            global organizations with Excellence
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-8">
                        {teamMembers.map((member) => (
                            <BioCard
                                key={member.key}
                                name={member.name}
                                title={member.title}
                                avatar={member.avatar}
                                bio={member.description}
                                companies={member.companies}
                                linkedinUrl={member.linkedinUrl}
                            />
                        ))}
                    </div>
                </Container>
            </Wrapper>

            {/* Advisors */}
            <Wrapper className="flex flex-col items-center justify-center py-8 md:py-12 w-full">
                <Container delay={0.1} className="w-full">
                    <div className="flex flex-col items-center justify-center py-10 max-w-2xl mx-auto">
                        <MagicBadge title="Our Advisors" />
                        <h2 className="text-3xl lg:text-4xl font-semibold font-heading text-center mt-6 !leading-tight">
                            Guiding Transformational Success
                        </h2>
                        <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
                            Our advisors bring unparalleled expertise in leading industries and businesses through dynamic and transformative changes.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-8">
                        {advisorMember.map((member) => (
                            <BioCard
                                key={member.key}
                                name={member.name}
                                title={member.title}
                                avatar={member.avatar}
                                bio={member.description}
                                companies={member.companies}
                                linkedinUrl={member.linkedinUrl}
                            />
                        ))}
                    </div>
                </Container>
            </Wrapper>

            {/* Features */}
            <Wrapper className="flex flex-col items-center justify-center py-8 md:py-12 w-full">
                <Container delay={0.1} className="w-full">
                    <div className="flex flex-col items-center justify-center py-10 max-w-2xl mx-auto">
                        <MagicBadge title="Innovation" />
                        <h2 className="text-3xl lg:text-4xl font-semibold font-heading text-center mt-6 !leading-tight">
                            Innovating to Stay Ahead of Emerging Threats
                        </h2>
                        <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
                            Our team combines deep technical expertise and a clear vision to deliver cutting-edge solutions that adapt to the ever-evolving landscape of identity fraud.
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

            {/* CTA */}
            < Wrapper className="flex flex-col items-center justify-center py-8 md:py-12 w-full" >
                <Container delay={0.2} className="w-full">
                    <div className="flex flex-col items-center justify-center text-center w-full px-4 md:px-0 mx-auto h-[500px] border border-border rounded-3xl overflow-hidden relative">
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-12 bg-violet-500 blur-[10rem]"></div>
                        <div className="flex flex-col items-center justify-center w-full z-20">
                            <h2 className="text-4xl md:text-6xl font-heading heading font-semibold !leading-tight mt-6">
                                Join Us in Building <br className="hidden md:block" /> a Safer, Fraud-Free Future
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
        </ >
    )
};

export default AboutUs