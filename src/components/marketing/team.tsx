import Marquee from "../ui/marquee";
import MagicBadge from "../ui/magic-badge";
import Container from "../global/container";

const Team = () => {
    return (
        <div className="flex flex-col items-center justify-center py-8 md:py-12 w-full">
            <Container delay={0.1}>
                <div
                    id="team"
                    className="flex w-full flex-col items-center justify-center py-8 lg:items-center"
                >
                    <MagicBadge title="Global Leadership" />
                    <h2 className="!leading-[1.1] mt-6 text-center font-heading font-medium text-3xl text-foreground md:text-5xl lg:text-center">
                        A track record of success with the world&apos;s most trusted names.
                    </h2>
                </div>
            </Container>
            <div className="flex flex-col items-center justify-center text-center w-full py-2">
                <div className="mt-16 w-full relative overflow-hidden">
                    <Marquee pauseOnHover className="[--duration:30s]">
                        <div className="flex gap-8 md:gap-12">
                            <img src="/images/companies/1.svg" alt="Company 1" className="w-12 h-12 text-white fill-current" />
                            <img src="/images/companies/2.svg" alt="Company 2" className="w-12 h-12 text-white fill-current" />
                            <img src="/images/companies/3.svg" alt="Company 3" className="w-12 h-12 text-white fill-current" />
                            <img src="/images/companies/4.svg" alt="Company 4" className="w-12 h-12 text-white fill-current" />
                            <img src="/images/companies/5.svg" alt="Company 5" className="w-12 h-12 text-white fill-current" />
                            <img src="/images/companies/6.svg" alt="Company 6" className="w-12 h-12 text-white fill-current" />
                            <img src="/images/companies/7.svg" alt="Company 7" className="w-12 h-12 text-white fill-current" />
                            <img src="/images/companies/8.svg" alt="Company 8" className="w-12 h-12 text-white fill-current" />
                            <img src="/images/companies/9.svg" alt="Company 9" className="w-12 h-12 text-white fill-current" />
                            <img src="/images/companies/10.svg" alt="Company 10" className="w-12 h-12 text-white fill-current" />
                            <img src="/images/companies/11.svg" alt="Company 11" className="w-12 h-12 text-white fill-current" />
                            <img src="/images/companies/12.svg" alt="Company 12" className="w-12 h-12 text-white fill-current" />
                            <img src="/images/companies/13.svg" alt="Company 13" className="w-12 h-12 text-white fill-current" />
                            <img src="/images/companies/14.svg" alt="Company 14" className="w-12 h-12 text-white fill-current" />
                            <img src="/images/companies/15.svg" alt="Company 15" className="w-12 h-12 text-white fill-current" />
                        </div>
                    </Marquee>
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
                </div>
            </div>
        </div>
    );
};

export default Team;
