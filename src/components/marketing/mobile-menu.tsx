"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/functions";
import { useClickOutside } from "@/hooks";
import { motion } from "framer-motion";
import { BadgeCheck, Box, CalendarClock, Captions, CarFront, CircleHelp, CopyCheck, DollarSign, FileText, Gem, Home, HospitalIcon, Landmark, Layers3, LineChart, Newspaper, NotebookPen, Radar, Scan, Send, Waypoints } from "lucide-react";
import Link from "next/link";
import React from 'react';

interface Props {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu = ({ isOpen, setIsOpen }: Props) => {

    const ref = useClickOutside(() => setIsOpen(false));

    const variants = {
        open: { opacity: 1, y: 20 },
        closed: { opacity: 0, y: 0 },
    };

    return (
        <div
            ref={ref}
            className={cn(
                "absolute top-12 inset-x-0 size-full p-4 z-20 bg-inherit flex flex-1",
                isOpen ? "flex" : "hidden"
            )}
        >
            <motion.div
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                variants={variants}
                transition={{
                    type: "spring",
                    bounce: 0.15,
                    duration: 0.5,
                }}
                className="size-full flex flex-col justify-start"
            >
                <ul className="flex flex-col items-start flex-1 w-full space-y-3">
                    <li
                        onClick={() => setIsOpen(false)}
                        className="w-full px-4 py-2 text-lg hover:text-muted-foreground font-normal transition transform rounded-md cursor-pointer text-foreground text-start active:scale-95 hover:bg-muted/20 active:opacity-80"
                    >
                        <Link href="/" className="flex items-center w-full text-start">
                            <Home className="w-4 h-4 mr-2" />
                            Home
                        </Link>
                    </li>
                    <li
                        onClick={() => setIsOpen(false)}
                        className="w-full px-4 py-2 text-lg hover:text-muted-foreground font-normal transition transform rounded-md cursor-pointer text-foreground text-start active:scale-95 hover:bg-muted/20 active:opacity-80"
                    >
                        <Link href="/solutions" className="flex items-center w-full text-start">
                            <Radar className="w-4 h-4 mr-2" />
                            Solutions
                        </Link>
                    </li>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1" className="border-transparent">
                            <AccordionTrigger className="px-4 py-2 text-lg hover:text-muted-foreground font-normal">
                                <span className="flex items-center">
                                    <Scan className="w-4 h-4 mr-2" />
                                    Industries
                                </span>
                            </AccordionTrigger>
                            <AccordionContent onClick={() => setIsOpen(false)} className="flex flex-col items-start gap-1 mt-1">
                                <li
                                    className="w-full px-4 py-2 text-lg font-normal transition transform rounded-md cursor-pointer text-foreground/80 hover:text-muted-foreground text-start active:scale-95 hover:bg-muted/20 active:opacity-80"
                                >
                                    <Link href="/industries/car-dealers" className="flex items-center w-full text-start">
                                        <CarFront className="w-4 h-4 mr-2" />
                                        Car Dealers
                                    </Link>
                                </li>
                                <li
                                    className="w-full px-4 py-2 text-lg font-normal transition transform rounded-md cursor-pointer text-foreground/80 hover:text-muted-foreground text-start active:scale-95 hover:bg-muted/20 active:opacity-80"
                                >
                                    <Link href="/industries/finance" className="flex items-center w-full text-start">
                                        <DollarSign className="w-4 h-4 mr-2" />
                                        Financial Institutions
                                    </Link>
                                </li>
                                <li
                                    className="w-full px-4 py-2 text-lg font-normal transition transform rounded-md cursor-pointer text-foreground/80 hover:text-muted-foreground text-start active:scale-95 hover:bg-muted/20 active:opacity-80"
                                >
                                    <Link href="/industries/healthcare" className="flex items-center w-full text-start">
                                        <HospitalIcon className="w-4 h-4 mr-2" />
                                        Healthcare Providers
                                    </Link>
                                </li>
                                <li
                                    className="w-full px-4 py-2 text-lg font-normal transition transform rounded-md cursor-pointer text-foreground/80 hover:text-muted-foreground text-start active:scale-95 hover:bg-muted/20 active:opacity-80"
                                >
                                    <Link href="/industries/government" className="flex items-center w-full text-start">
                                        <Landmark className="w-4 h-4 mr-2" />
                                        Government
                                    </Link>
                                </li>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <li
                        onClick={() => setIsOpen(false)}
                        className="w-full px-4 py-2 text-lg hover:text-muted-foreground font-normal transition transform rounded-md cursor-pointer text-foreground text-start active:scale-95 hover:bg-muted/20 active:opacity-80"
                    >
                        <Link href="/blog" className="flex items-center w-full text-start">
                            <NotebookPen className="w-4 h-4 mr-2" />
                            Blog
                        </Link>
                    </li>
                    <li
                        onClick={() => setIsOpen(false)}
                        className="w-full px-4 py-2 text-lg hover:text-muted-foreground font-normal transition transform rounded-md cursor-pointer text-foreground text-start active:scale-95 hover:bg-muted/20 active:opacity-80"
                    >
                        <Link href="/about-us" className="flex items-center w-full text-start">
                            <BadgeCheck className="w-4 h-4 mr-2" />
                            About Us
                        </Link>
                    </li>
                    <li
                        onClick={() => setIsOpen(false)}
                        className="w-full px-4 py-2 text-lg hover:text-muted-foreground font-normal transition transform rounded-md cursor-pointer text-foreground text-start active:scale-95 hover:bg-muted/20 active:opacity-80"
                    >
                        <Link
                            href="mailto:andrew@inverus.tech?subject=Potential%20Project%20Request&body=Hello%20inVerus,%0D%0A%0D%0AI%20am%20interested%20in%20discussing%20a%20potential%20project%20with%20you.%20Here%20are%20the%20details:%0D%0A%0D%0A[Add%20your%20project%20details%20here]%0D%0A%0D%0AThank%20you,%0D%0A[Your%20Name]"
                            className="flex items-center w-full text-start">
                            <Send className="w-4 h-4 mr-2" />
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </motion.div>
        </div>
    )
};

export default MobileMenu
