import Container from "../global/container";
import MagicBadge from "../ui/magic-badge";
import { BentoCard, BentoGrid, CARDS } from "@/components/ui/bento-grid";

const Industries = () => {
    return (
        <div className="flex flex-col items-center justify-center py-8 md:py-12 w-full">
            <Container delay={0.1}>
                <div
                    id="industries"
                    className="flex w-full flex-col items-center justify-center py-8 lg:items-center"
                >
                    <MagicBadge title="Industries" />
                    <h2 className="!leading-[1.1] mt-6 text-center font-heading font-medium text-3xl text-foreground md:text-5xl lg:text-center">
                        Safeguarding Industries from Identity Fraud
                    </h2>
                    <p className="mt-4 max-w-lg text-center text-lg text-muted-foreground lg:text-center">
                        Tailored solutions to combat fraud and ensure trust across industries.
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
