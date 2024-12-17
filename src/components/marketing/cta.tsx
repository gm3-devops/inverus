import Container from "../global/container";
import { LampContainer } from "@/components/ui/lamp";
import { ScheduleCall } from "@/components/ui/cal";

const CTA = () => {
    return (
        <div className="flex flex-col items-center justify-center py-8 md:py-12 w-full">
            <Container>
                <LampContainer>
                    <div className="flex flex-col items-center justify-center relative w-full text-center">
                        <h2 className="text-4xl lg:text-5xl xl:text-6xl lg:!leading-snug font-semibold mt-8">
                            From Idea to Launch <br /> Faster Than Ever
                        </h2>
                        <p className="text-muted-foreground mt-6 max-w-md mx-auto">
                            Empower your institution with the confidence to prevent identity fraud and meet compliance with ease
                        </p>
                        <div className="mt-6">
                            <ScheduleCall />
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
