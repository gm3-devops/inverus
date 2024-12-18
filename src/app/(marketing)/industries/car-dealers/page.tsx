import Container from "@/components/global/container";
import Wrapper from "@/components/global/wrapper";
import MagicBadge from "@/components/ui/magic-badge";
import Image from "next/image";
import { ScheduleCall } from "@/components/ui/cal";
import { fraud, implementation } from "@/constants/industries";
import { Icons } from "@/components";

const LinkShorteningPage = () => {
    return (
        <>
            <Wrapper className="flex flex-col items-center justify-center py-8 md:py-12 w-full">
                <Container delay={0.1} className="w-full">
                    <div id="cardealers" className="flex flex-col items-center justify-center py-40 max-w-2xl mx-auto">
                        <MagicBadge title="Car Dealers" />
                        <h2 className="text-3xl lg:text-4xl font-semibold font-heading text-center mt-6 !leading-tight">
                            Protect Your Dealerships, Empower Your Systems, Secure Your Brand.
                        </h2>
                        <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
                            Fraud is costing auto dealers billions annually. inVerus delivers advanced solutions to safeguard every step of the process.
                        </p>
                        <div className="flex items-center justify-center gap-x-4 mt-8">
                            <ScheduleCall />
                        </div>
                    </div>
                </Container>
                <Container delay={0.2} className="w-full">
                    <div className="w-full flex max-w-4xl py-2 mx-auto">
                        <Image
                            src="/images/industries/qr-codes.svg"
                            alt="Create QR codes for your links"
                            width={80}
                            height={80}
                            className="w-full h-auto"
                        />
                    </div>
                </Container>
                <Container className="pt-10">
                    <div className="max-w-2xl mx-auto mx-auto text-start md:text-center">
                        <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
                            The Fraud Challenge Across Automotive Ecosystem
                        </h2>
                        <p className="text-muted-foreground mt-6">
                            Uncovering vulnerabilities across the automotive landscape, from dealerships to DMS providers and car brands, and the strategies needed to combat them.
                        </p>
                    </div>
                </Container>
                <Container>
                    <div className="flex items-center justify-center mx-auto mt-0">
                        <Icons.feature className="w-auto h-80" />
                    </div>
                </Container>
                <Container delay={0.1} className="w-full">
                    <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
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
                <Container delay={0.1} className="w-full">
                    <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                        <div className="max-w-2xl mx-auto text-start md:text-center">
                            <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
                                How inVerus Delivers for Auto Industry Leaders
                            </h2>
                        </div>
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
            </Wrapper >
            <Wrapper className="flex flex-col items-center justify-center py-12 relative">
                <Container>
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
            </Wrapper>
        </>
    )
};

export default LinkShorteningPage