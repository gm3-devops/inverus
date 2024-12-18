import Container from "@/components/global/container";
import Icons from '../global/icons';
import Link from "next/link";
import { ShieldCheckIcon } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative mx-auto flex w-full max-w-6xl flex-col items-center justify-center border-border border-t px-6 pt-8 pb-8 md:pb-0 lg:px-8 lg:pt-8">
            <div
                className="-translate-x-1/2 -translate-y-1/2 absolute top-0 right-1/2 left-1/2 h-1.5 w-8 rounded-full bg-foreground">
            </div>
            <div className="grid w-full gap-8 md:grid-cols-3 md:gap-12">
                <Container delay={0.1}>
                    <div className="flex flex-col items-start justify-start md:max-w-[200px]">
                        <div className="flex items-start">
                            <ShieldCheckIcon className="w-28 h-28 text-blue-300 animate-glow" />
                        </div>
                        <p className="mt-4 text-start text-muted-foreground text-sm">
                            Preventing Identity Fraud.
                            <br />
                            Safeguarding Businesses.
                            <br />
                            Building Trust.
                        </p>
                        <div className="flex items-center gap-4 pt-2 text-muted-foreground">
                            <Link href="https://x.com/inverus_ai" target="_blank">
                                <Icons.twitter className="size-6 hover:text-white" />
                            </Link>
                            <Link href="https://www.linkedin.com/company/inverus-ai/" target="_blank">
                                <Icons.linkedin className="size-6 hover:text-white" />
                            </Link>
                        </div>
                    </div>
                </Container>

                <div className="grid grid-cols-2 gap-8">
                    <Container delay={0.2}>
                        <div>
                            <h3 className="font-medium text-base text-white">
                                Solution
                            </h3>
                            <ul className="mt-4 text-muted-foreground text-sm">
                                <li className="mt-2">
                                    <Link
                                        href="/"
                                        className="transition-all duration-300 hover:text-foreground"
                                    >
                                        Consortium
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link
                                        href="/"
                                        className="transition-all duration-300 hover:text-foreground"
                                    >
                                        Harvestor
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link
                                        href="/"
                                        className="transition-all duration-300 hover:text-foreground"
                                    >
                                        Behavioural Insights
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Container>

                    <Container delay={0.3}>
                        <div>
                            <h3 className="font-medium text-base text-white">
                                Industries
                            </h3>
                            <ul className="mt-4 text-muted-foreground text-sm">
                                <li>
                                    <Link
                                        href="/industries#cardealers"
                                        className="transition-all duration-300 hover:text-foreground"
                                    >
                                        Car Dealers
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link
                                        href="/industries#finance"
                                        className="transition-all duration-300 hover:text-foreground"
                                    >
                                        Financial Institutions
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link
                                        href="/industries#healthcare"
                                        className="transition-all duration-300 hover:text-foreground"
                                    >
                                        Healthcare Providers
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link
                                        href="/industries#government"
                                        className="transition-all duration-300 hover:text-foreground"
                                    >
                                        Government
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Container>
                </div>

                <Container delay={0.4}>
                    <div>
                        <h3 className="font-medium text-base text-white">
                            Company
                        </h3>
                        <ul className="mt-4 text-muted-foreground text-sm">
                            <li className="mt-2">
                                <Link
                                    href="/blog"
                                    className="transition-all duration-300 hover:text-foreground"
                                >
                                    Blog
                                </Link>
                            </li>
                            <li className="mt-2">
                                <Link
                                    href="/about-us"
                                    className="transition-all duration-300 hover:text-foreground"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li className="mt-2">
                                <Link
                                    href="/help"
                                    className="transition-all duration-300 hover:text-foreground"
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </Container>
            </div>

            <div className="mt-8 w-full border-border/40 border-t pt-4 md:flex md:items-center md:justify-between md:pt-8">
                <Container delay={0.6}>
                    <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 text-muted-foreground text-sm">
                        <p>
                            &copy; {new Date().getFullYear()} inVerus Inc. All rights reserved.
                        </p>
                        <div className="flex items-center gap-2">
                            <Link
                                href="/privacy-policy"
                                className="hover:text-white hover:underline transition-colors"
                            >
                                | Privacy Policy
                            </Link>
                            <span>|</span>
                            <Link
                                href="/terms-and-conditions"
                                className="hover:text-white hover:underline transition-colors"
                            >
                                Terms & Conditions
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;