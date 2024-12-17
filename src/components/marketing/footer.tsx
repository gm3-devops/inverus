import Container from "@/components/global/container";
import Icons from '../global/icons';
import Link from "next/link";
import { ShieldCheckIcon } from 'lucide-react';
import Industries from './industries';

const Footer = () => {
    return (
        <footer className="relative mx-auto flex w-full max-w-6xl flex-col items-center justify-center border-border border-t px-6 pt-8 pb-8 md:pb-0 lg:px-8 lg:pt-8">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute top-0 right-1/2 left-1/2 h-1.5 w-8 rounded-full bg-foreground"></div>
            <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
                <Container delay={0.1}>
                    <div className="flex flex-col items-start justify-start md:max-w-[200px]">
                        <div className="flex items-start">
                            <ShieldCheckIcon className="w-28 h-28 text-blue-300 animate-glow" />
                        </div>
                        <p className="mt-4 text-start text-muted-foreground text-sm">
                            Securing Financial Transactions with Trusted Identity Validation
                        </p>
                        <div className="flex items-center gap-1 pt-2 text-muted-foreground">
                            <Link
                                href=""
                                target="_blank"
                            >
                                <Icons.twitter className="size-4 hover:text-white" />
                            </Link>
                            <Link
                                href=""
                                target="_blank"
                            >
                                <Icons.discord className="size-4 hover:text-white" />
                            </Link>
                        </div>
                    </div>
                </Container>
                <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <Container delay={0.2}>
                            <div className="">
                                <h3 className="font-medium text-base text-white">
                                    Product
                                </h3>
                                <ul className="mt-4 text-muted-foreground text-sm">
                                    <li className="mt-2">
                                        <Link
                                            href="#solution"
                                            className="transition-all duration-300 hover:text-foreground"
                                        >
                                            Solutions
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link
                                            href="#industries"
                                            className="transition-all duration-300 hover:text-foreground"
                                        >
                                            Car Dealers
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link
                                            href="#testimonials"
                                            className="transition-all duration-300 hover:text-foreground"
                                        >
                                            Financial Institutions
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link
                                            href="/"
                                            className="transition-all duration-300 hover:text-foreground"
                                        >
                                            Healthcare Providers
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Container>
                        <Container delay={0.3}>
                            <div className="mt-10 flex flex-col md:mt-0">
                                <h3 className="font-medium text-base text-white">
                                    Resources
                                </h3>
                                <ul className="mt-4 text-muted-foreground text-sm">
                                    <li>
                                        <Link
                                            href="#"
                                            className="transition-all duration-300 hover:text-foreground"
                                        >
                                            About us
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link
                                            href="#"
                                            className="transition-all duration-300 hover:text-foreground"
                                        >
                                            Blog
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link
                                            href="#"
                                            className="transition-all duration-300 hover:text-foreground"
                                        >
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link
                                            href="#"
                                            className="transition-all duration-300 hover:text-foreground"
                                        >
                                            Terms & Conditions
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Container>
                    </div>
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <Container delay={0.4}>
                            <div className="">
                                <h3 className="font-medium text-base text-white">Resources</h3>
                                <ul className="mt-4 text-muted-foreground text-sm">
                                    <li className="mt-2">
                                        <Link
                                            href="/resources/blog"
                                            className="transition-all duration-300 hover:text-foreground"
                                        >
                                            Blog
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link
                                            href="/resources/help"
                                            className="transition-all duration-300 hover:text-foreground"
                                        >
                                            Support
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Container>
                        <Container delay={0.5}>
                            <div className="mt-10 flex flex-col md:mt-0">
                                <h3 className="font-medium text-base text-white">Company</h3>
                                <ul className="mt-4 text-muted-foreground text-sm">
                                    <li className="">
                                        <Link
                                            href="#"
                                            className="transition-all duration-300 hover:text-foreground"
                                        >
                                            About Us
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link
                                            href="/privacy"
                                            className="transition-all duration-300 hover:text-foreground"
                                        >
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link
                                            href="/terms"
                                            className="transition-all duration-300 hover:text-foreground"
                                        >
                                            Terms & Conditions
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Container>
                    </div>
                </div>
            </div>

            <div className="mt-8 w-full border-border/40 border-t pt-4 md:flex md:items-center md:justify-between md:pt-8">
                <Container delay={0.6}>
                    <p className="mt-8 text-muted-foreground text-sm md:mt-0">
                        &copy; {new Date().getFullYear()} inVerus Inc. All rights reserved.
                    </p>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;