import Container from "@/components/global/container";
import Wrapper from "@/components/global/wrapper";
import { Button } from "@/components/ui/button";
import MagicBadge from "@/components/ui/magic-badge";
import Image from "next/image";
import Link from "next/link";

const LinkShorteningPage = () => {
    return (
        <>
            <Wrapper>
                <Container delay={0.1} className="w-full">
                    <div id="cardealers" className="flex flex-col items-center justify-center py-40 max-w-xl mx-auto">
                        <MagicBadge title="Government" />
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
                            Shorten links and track their performance
                        </h1>
                        <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
                            Simplify your workflow with powerful link management tools. Shorten links, track clicks, and optimize your strategy with ease.
                        </p>
                        <div className="flex items-center justify-center gap-x-4 mt-8">
                            <Button size="sm" asChild>
                                <Link href="/dashboard">
                                    Get started
                                </Link>
                            </Button>
                            <Button size="sm" variant="outline" asChild>
                                <Link href="/blog">
                                    Learn more
                                </Link>
                            </Button>
                        </div>
                    </div>
                </Container>
                <Container delay={0.2} className="w-full">
                    <div className="w-full flex max-w-4xl py-10 mx-auto">
                        <Image
                            src="/images/industries/password-protection.svg"
                            alt="Shorten links and track their performance"
                            width={80}
                            height={80}
                            className="w-full h-auto"
                        />
                    </div>
                </Container>
            </Wrapper>
        </>
    )
};

export default LinkShorteningPage