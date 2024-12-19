import Container from "@/components/global/container";
import Wrapper from "@/components/global/wrapper";
import MagicBadge from "@/components/ui/magic-badge";
import Image from "next/image";
import { ScheduleCall } from "@/components/ui/cal";
import { Rocket } from "lucide-react";
import { advisorMember, leadershipTeam, teamMembers } from "@/constants/team";
import BioCard from "@/components/ui/bio-card";
import { Particles } from "@/components/ui/particles";
import RetroGrid from "@/components/ui/retro-grid";

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
                    <div className="mt-14 sm:mt-20 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {teamMembers.map((member) => (
                            <div key={member.name}>
                                <Image
                                    key={member.key}
                                    src={member.imageUrl}
                                    alt={member.name}
                                    className="h-20 w-20 rounded-full object-cover"
                                    width={120}
                                    height={120}
                                />
                                <h3 className="mt-4 text-lg font-bold">{member.name}</h3>
                                <p className="text-muted-foreground">{member.title}</p>
                                <p className="mt-3 text-muted-foreground">{member.bio}</p>
                            </div>
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
                    <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                        <div className="mt-10 grid gap-6 lg:grid-cols-3 sm:mt-16">
                            <div className="relative">
                                <div className="absolute inset-px rounded-lg bg-background [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] border border-border"></div>
                                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                                    <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                        <h3 className="font-semibold text-neutral-300 text-xl">Behavioral Insights</h3>
                                        <p className="text-muted-foreground mt-2 text-start">
                                            Detect anomalies in buyer behavior during test drives, warranty claims, and purchase cycles.
                                        </p>
                                    </div>
                                    <div className="flex flex-1 items-center max-lg:py-6 lg:pb-2">
                                        <img
                                            className="h-[min(152px,40cqw)] object-cover"
                                            src="https://tailwindui.com/plus/img/component-images/bento-03-security.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-px rounded-lg bg-background [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] border border-border"></div>
                                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                                    <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                        <h3 className="font-semibold text-neutral-300 text-xl">Harvestor / Reverse Search Engine</h3>
                                        <p className="text-muted-foreground mt-2 text-start">
                                            Pinpoint fraudsters and repeat offenders through advanced search.
                                        </p>
                                    </div>
                                    <div className="flex flex-1 items-center justify-center px-8 sm:px-10 lg:pb-2">
                                        <img
                                            className="w-full max-lg:max-w-xs"
                                            src="https://tailwindui.com/plus/img/component-images/bento-03-performance.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-px rounded-lg bg-background [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] border border-border"></div>
                                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                                    <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                        <h3 className="font-semibold text-neutral-300 text-xl">Consortium Intelligence</h3>
                                        <p className="text-muted-foreground mt-2 text-start">
                                            Shared real-time data on fraudulent behaviors across the dealer network.
                                        </p>
                                    </div>
                                    <div className="flex flex-1 items-center max-lg:py-6 lg:pb-2">
                                        <img
                                            className="h-[min(152px,40cqw)] object-cover"
                                            src="https://tailwindui.com/plus/img/component-images/bento-03-security.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* CTA */}
            <Wrapper className="flex flex-col items-center justify-center py-8 md:py-12 w-full">
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
        </>
    )
};

export default AboutUs