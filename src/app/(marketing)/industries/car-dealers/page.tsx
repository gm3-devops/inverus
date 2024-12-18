import Container from "@/components/global/container";
import Wrapper from "@/components/global/wrapper";
import { Button } from "@/components/ui/button";
import MagicBadge from "@/components/ui/magic-badge";
import Image from "next/image";
import Link from "next/link";
import { ScheduleCall } from "@/components/ui/cal";
import { fraud } from "@/constants/industries";
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
                {/* <Container>
                    <div className="flex items-center justify-center mx-auto mt-0">
                        <Icons.feature className="w-auto h-80" />
                    </div>
                </Container> */}
                <Container>
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-8">
                            <div className="lg:max-w-lg">
                                <h2 className="text-3xl lg:text-4xl font-semibold font-heading mt-6 !leading-tight">
                                    The Fraud Challenge Across Automotive Ecosystem
                                </h2>
                                <p className="text-base md:text-lg mt-6 text-muted-foreground">
                                    Uncovering vulnerabilities across the automotive landscape, from dealerships to DMS providers and car brands, and the strategies needed to combat them.
                                </p>
                                <dl className="mt-10 max-w-xl space-y-8  lg:max-w-none">
                                    {fraud.map((feature) => (
                                        <div key={feature.title} className="relative pl-9">
                                            <dt className="inline font-semibold">
                                                <feature.icon
                                                    aria-hidden="true"
                                                    className="absolute left-1 top-1 size-5"
                                                />
                                                {feature.title}
                                            </dt>{' '}
                                            <dd className="inline text-muted-foreground">
                                                {feature.info}
                                            </dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                        <img
                            alt="Car Dealers"
                            src="/images/industries/car-dealers.svg"
                            width={2432}
                            height={1442}
                            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                        />
                    </div>
                </Container>
            </Wrapper>
        </>
    )
};

export default LinkShorteningPage