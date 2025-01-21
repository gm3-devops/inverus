import Icons from '../global/icons';
import Link from "next/link";
import { ShieldCheckIcon } from 'lucide-react';

const Footer = () => {
    return (
        <section className="py-10">
            <div className="container">
                <footer className="flex flex-col relative items-center justify-center border-t border-border pt-8 pb-8 md:pb-0 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-10 bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)]">
                    <div className="absolute top-0 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-1.5 bg-primary rounded-full"></div>
                    <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">
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
                        <div className="grid grid-cols-2 gap-8 mt-2 xl:col-span-2 xl:mt-0">
                            <div className="md:grid md:grid-cols-2 md:gap-8">
                                <div className="pt-4 pb-4 md:pt-8 md:pb-8">
                                    <h3 className="text-base font-medium text-white">Industries</h3>
                                    <ul className="mt-4 text-sm text-muted-foreground">
                                        <li className="mt-2">
                                            <Link href="/industries/car-dealers" className="hover:text-foreground transition-all duration-300">
                                                Auto Dealers
                                            </Link>
                                        </li>
                                        <li className="mt-2">
                                            <Link href="/industries/finance" className="hover:text-foreground transition-all duration-300">
                                                Financial Institutions
                                            </Link>
                                        </li>
                                        <li className="mt-2">
                                            <Link href="/industries/healthcare" className="hover:text-foreground transition-all duration-300">
                                                Healthcare Providers
                                            </Link>
                                        </li>
                                        <li className="mt-2">
                                            <Link href="/industries/government" className="hover:text-foreground transition-all duration-300">
                                                Government
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="md:grid md:grid-cols-2 md:gap-8">
                                <div className="pt-4 pb-4 md:pt-8 md:pb-8">
                                    <h3 className="text-base font-medium text-white">Company</h3>
                                    <ul className="mt-4 text-sm text-muted-foreground">
                                        <li className="mt-2">
                                            <Link href="/blog" className="hover:text-foreground transition-all duration-300">
                                                Blog
                                            </Link>
                                        </li>
                                        <li className="mt-2">
                                            <Link href="/about-us" className="hover:text-foreground transition-all duration-300">
                                                About Us
                                            </Link>
                                        </li>
                                        <li className="mt-2">
                                            <Link
                                                href="mailto:andrew@inverus.tech?subject=Potential%20Project%20Request&body=Hello%20inVerus,%0D%0A%0D%0AI%20am%20interested%20in%20discussing%20a%20potential%20project%20with%20you.%20Here%20are%20the%20details:%0D%0A%0D%0A[Add%20your%20project%20details%20here]%0D%0A%0D%0AThank%20you,%0D%0A[Your%20Name]"
                                                className="hover:text-foreground transition-all duration-300">
                                                Contact Us
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div >
        </section >
    )
}

export default Footer;