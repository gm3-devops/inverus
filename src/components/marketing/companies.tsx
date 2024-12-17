import Images from "../global/images";
import Marquee from "../ui/marquee";
import MagicBadge from "../ui/magic-badge";
import Container from "../global/container";

const Companies = () => {
    return (
        <div className="flex flex-col items-center justify-center py-8 md:py-12 w-full">
            <Container delay={0.1}>
                <div
                    id="companies"
                    className="flex w-full flex-col items-center justify-center py-8 lg:items-center"
                >
                    <MagicBadge title="Companies that trust us" />
                    <h2 className="!leading-[1.1] mt-6 text-center font-heading font-medium text-3xl text-foreground md:text-5xl lg:text-center">
                        Lorum Ipsum Dipsum
                    </h2>
                </div>
            </Container>
            <div className="flex flex-col items-center justify-center text-center w-full py-2">
                <div className="mt-16 w-full relative overflow-hidden">
                    <Marquee pauseOnHover className="[--duration:30s]">
                        <div className="flex gap-8 md:gap-12">
                            <Images.company1 className="w-24 h-8" />
                            <Images.company2 className="w-24 h-8" />
                            <Images.company3 className="w-24 h-8" />
                            <Images.company4 className="w-24 h-8" />
                            <Images.company5 className="w-24 h-8" />
                            <Images.company6 className="w-24 h-8" />
                            <Images.company7 className="w-24 h-8" />
                            <Images.company8 className="w-24 h-8" />
                            <Images.company9 className="w-24 h-8" />
                            <Images.company10 className="w-24 h-8" />
                        </div>
                    </Marquee>
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
                </div>
            </div>
        </div>
    )
};

export default Companies
