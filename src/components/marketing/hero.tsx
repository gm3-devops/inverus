import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { BlurText } from "../ui/blur-text";
import { Button } from "../ui/button";
import Container from "../global/container";
import { ScheduleCall } from "@/components/ui/cal";

const Hero = () => {
    return (
        <div className="flex flex-col items-center text-center w-full max-w-5xl my-24 mx-auto z-40 relative">
            {/* Landing Section */}
            <Container delay={0.0}>
                <div className="pl-2 pr-1 py-1 rounded-full border border-foreground/10 hover:border-foreground/15 backdrop-blur-lg cursor-pointer flex items-center gap-2.5 select-none w-max mx-auto">
                    <div className="w-3.5 h-3.5 rounded-full bg-primary/40 flex items-center justify-center relative">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary/60 flex items-center justify-center animate-ping">
                            <div className="w-2.5 h-2.5 rounded-full bg-primary/60 flex items-center justify-center animate-ping"></div>
                        </div>
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        </div>
                    </div>
                    <Link href="/blog">
                        <span className="inline-flex items-center justify-center gap-2 animate-text-gradient animate-background-shine bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-sm text-transparent">
                            Build for the future
                            <span className="text-xs text-secondary-foreground px-1.5 py-0.5 rounded-full bg-gradient-to-b from-foreground/20 to-foreground/10 flex items-center justify-center">
                                What&apos;s new
                                <ArrowRightIcon className="w-3.5 h-3.5 ml-1 text-foreground/50" />
                            </span>
                        </span>
                    </Link>
                </div>
            </Container>
            <BlurText
                word={"The Next Evolution in Identity Fraud Prevention"}
                className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent py-2 md:py-0 lg:!leading-snug font-medium racking-[-0.0125em] mt-6 font-heading"
            />
            <Container delay={0.1}>
                <p className="text-sm sm:text-base lg:text-lg mt-4 text-accent-foreground/60 max-w-2xl mx-auto">
                    Identity fraud costs businesses $43 billion annually, with AI-driven deep fakes and attacks escalating the risks. InVerus delivers proactive, AI-powered identity fraud prevention to protect your business.
                </p>
            </Container>
            <Container delay={0.2}>
                <div className="flex items-center justify-center md:gap-x-6 mt-8">
                    <ScheduleCall />
                    <Button asChild size="lg" variant="white" className="hidden md:flex">
                        <Link href="/solutions">
                            Explore Our Solution
                        </Link>
                    </Button>
                </div>
            </Container>
        </div >
    )
};

export default Hero
