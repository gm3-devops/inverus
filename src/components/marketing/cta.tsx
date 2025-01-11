import Container from "../global/container";
import { LampContainer } from "@/components/ui/lamp";
import { ScheduleCall } from "@/components/ui/cal";
import { Calendar } from "lucide-react";

const CTA = () => {
    return (
        <div className="flex flex-col items-center justify-center py-8 md:py-12 w-full">
            <Container>
                <LampContainer>
                    <div className="flex flex-col items-center justify-center relative w-full text-center">
                        <h2 className="text-4xl lg:text-5xl xl:text-6xl lg:!leading-snug font-semibold mt-8">
                            Accelerate Security
                            <br />
                            Prevent Fraud
                            <br />
                            Safeguard Trust
                            <br />
                        </h2>
                        <p className="text-muted-foreground mt-6 max-w-md mx-auto">
                            Proactively Prevent Fraud and Protect Your Business with Confidence.
                        </p>
                        <div className="mt-6">
                            <ScheduleCall
                                buttonText="Book a Call"
                                iconr={<Calendar className="w-4 h-4" />}
                            />
                        </div>
                        {/* <Button variant="default" className="mt-6" asChild>
                            <Link href="/">
                                Schedule a demo
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </Button> */}
                    </div>
                </LampContainer>
            </Container>
        </div >
    )
};

export default CTA
