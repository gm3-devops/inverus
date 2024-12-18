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
                    <div className="max-w-md mx-auto text-start md:text-center">
                        <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
                            The Fraud Challenge Across Automotive Ecosystem
                        </h2>
                        <p className="text-muted-foreground mt-6">
                            Astra offers a range of features to help you build a stunning website in no time
                        </p>
                    </div>
                </Container>
                <Container>
                    <div className="flex items-center justify-center mx-auto mt-0">
                        <Icons.feature className="w-auto h-80" />
                    </div>
                </Container>
                <Container>
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
            </Wrapper>
        </>
    )
};

export default LinkShorteningPage