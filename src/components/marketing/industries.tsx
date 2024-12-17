import Container from "../global/container";
import MagicBadge from "../ui/magic-badge";
import { BentoCard, BentoGrid, CARDS } from "@/components/ui/bento-grid";

const Industries = () => {
    return (
        <div className="flex flex-col items-center justify-center py-8 md:py-12 w-full">
            <Container delay={0.1}>
                <div
                    id="features"
                    className="flex w-full flex-col items-center justify-center py-8 lg:items-center"
                >
                    <MagicBadge title="Features" />
                    <h2 className="!leading-[1.1] mt-6 text-center font-heading font-medium text-3xl text-foreground md:text-5xl lg:text-center">
                        Manage Blogs Like a Pro
                    </h2>
                    <p className="mt-4 max-w-lg text-center text-lg text-muted-foreground lg:text-center">
                        Writora AI is a cutting-edge blog generation tool that delivers
                        content-driven blogs in just seconds.
                    </p>
                </div>
            </Container>
            <Container delay={0.2}>
                <BentoGrid className="py-8">
                    {CARDS.map((feature, idx) => (
                        <BentoCard key={idx} {...feature} />
                    ))}
                </BentoGrid>
            </Container>
        </div>
    )
};

export default Industries
