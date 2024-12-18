import Container from "@/components/global/container";
import Icons from '../global/icons';
import Link from "next/link";
import { ShieldCheckIcon } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="flex flex-col relative items-center justify-center border-t border-border pt-16 pb-8 md:pb-0 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32 bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)]">
            <div className="absolute top-0 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-1.5 bg-primary rounded-full"></div>

            <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">
                <Container delay={0.1}>
                    <div className="flex flex-col items-start justify-start md:max-w-[200px]">
                        <div className="flex items-start">
                            <ShieldCheckIcon className="w-28 h-28 text-blue-300 animate-glow" />
                        </div>
                        <p className="text-muted-foreground mt-4 text-sm text-start">
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
                <div className="grid grid-cols-2 gap-8 mt-4 xl:col-span-2 xl:mt-0">
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <Container delay={0.2}>
                            <div>
                                <h3 className="text-base font-medium text-white">Industries</h3>
                                <ul className="mt-4 text-sm text-muted-foreground">
                                    <li className="mt-2">
                                        <Link href="" className="hover:text-foreground transition-all duration-300">
                                            Car Dealers
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="" className="hover:text-foreground transition-all duration-300">
                                            Financial Institutions
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="" className="hover:text-foreground transition-all duration-300">
                                            Healthcare Providers
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="" className="hover:text-foreground transition-all duration-300">
                                            Government
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Container>
                    </div>

                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <Container delay={0.4}>
                            <div>
                                <h3 className="text-base font-medium text-white">Company</h3>
                                <ul className="mt-4 text-sm text-muted-foreground">
                                    <li className="mt-2">
                                        <Link href="/resources/blog" className="hover:text-foreground transition-all duration-300">
                                            Blog
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/resources/help" className="hover:text-foreground transition-all duration-300">
                                            About Us
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/resources/help" className="hover:text-foreground transition-all duration-300">
                                            Contact Us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Container>
                    </div>
                </div>
            </div>

            <div className="mt-auto border-t border-border/40 pt-4 w-full flex flex-col md:flex-row items-center md:flex-row md:justify-between">
                <p className="text-sm text-muted-foreground text-center md:text-left">
                    &copy; {new Date().getFullYear()} inVerus Inc. All rights reserved.
                </p>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300">
                        Privacy Policy
                    </Link>
                    <span>|</span>
                    <Link href="/terms-and-conditions" className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300">
                        Terms & Conditions
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;