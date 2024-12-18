"use client"

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { CarFront, HospitalIcon, DollarSign, UsersIcon, ShieldCheckIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface Props {
    title: string;
    href: string;
    children: React.ReactNode;
    icon: React.ReactNode;
}

const Menu = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className="h-10 px-4 py-2 text-sm font-normal rounded-md text-foreground hover:text-muted-foreground w-max hover:bg-none">
                            Home
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/solutions" legacyBehavior passHref>
                        <NavigationMenuLink className="h-10 px-4 py-2 text-sm font-normal rounded-md text-foreground hover:text-muted-foreground w-max hover:bg-none">
                            Solutions
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-foreground hover:text-muted-foreground">
                        Industries
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid rounded-3xl gap-3 p-4 md:w-[400px] lg:w-[500px] xl:w-[550px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <Link
                                        href="/industries"
                                        className="flex flex-col justify-end w-full h-full p-4 no-underline rounded-lg outline-none select-none bg-gradient-to-tr from-accent to-accent/50 focus:shadow-md"
                                    >
                                        <div className="text-blue-300 animate-glow">
                                            <ShieldCheckIcon className="w-32 h-32" />
                                        </div>
                                        <div className="my-2 text-lg font-normal">
                                            inVerus
                                        </div>
                                        <p className="text-sm text-foreground">
                                            The Next Evolution in Identity Fraud Prevention
                                        </p>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                            <Item title="Car Dealers" href="/industries#cardealers" icon={<CarFront className="w-5 h-5" />}>
                                <p className="line-clamp-1 text-sm leading-snug text-muted-foreground">
                                    Supporting Dealers, DMS Providers, and Fraud Prevention Teams.
                                </p>
                            </Item>
                            <Item title="Financial Institutions" href="/industries#finance" icon={<DollarSign className="w-5 h-5" />}>
                                <p className="line-clamp-1 text-sm leading-snug text-muted-foreground">
                                    Fraud Prevention Teams, Compliance Officers, and Account Managers.
                                </p>
                            </Item>
                            <Item title="Healthcare Providers" href="/industries#healthcare" icon={<HospitalIcon className="w-5 h-5" />}>
                                <p className="line-clamp-1 text-sm leading-snug text-muted-foreground">
                                    Hospital Administrators, Compliance Teams, and Medical Practice Owners.
                                </p>
                            </Item>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/blog" legacyBehavior passHref>
                        <NavigationMenuLink className="h-10 px-4 py-2 text-sm font-normal rounded-md text-foreground hover:text-muted-foreground w-max hover:bg-none">
                            Blog
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/about-us" legacyBehavior passHref>
                        <NavigationMenuLink className="h-10 px-4 py-2 text-sm font-normal rounded-md text-foreground hover:text-muted-foreground w-max hover:bg-none">
                            About us
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/contact-us" legacyBehavior passHref>
                        <NavigationMenuLink className="h-10 px-4 py-2 text-sm font-normal rounded-md text-foreground hover:text-muted-foreground w-max hover:bg-none">
                            Contact us
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
};

const Item = ({ title, href, children, icon, ...props }: Props) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    passHref
                    href={href}
                    {...props}
                    className="grid grid-cols-[.15fr_1fr] select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group"
                >
                    <div className="flex items-center mt-1 justify-center p-1 w-8 h-8 rounded-md border border-border/80">
                        {icon}
                    </div>
                    <div className="text-start ml-3">
                        <span className="text-sm group-hover:text-muted-foreground font-normal leading-none">
                            {title}
                        </span>
                        <p className="text-sm mt-0.5 line-clamp-2 text-foreground">
                            {children}
                        </p>
                    </div>
                </Link>
            </NavigationMenuLink>
        </li>
    )
};

Item.displayName = "Item";

export default Menu
