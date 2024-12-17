import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/functions";
import Image from "next/image";
import {
    ArrowRightIcon,
    CarFrontIcon,
    Landmark,
    DollarSign,
    Activity,
} from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { Integrations } from "@/components/ui/integrations";

export const CARDS = [
    {
        Icon: CarFrontIcon,
        name: "Auto Dealers",
        description: "Safeguard dealerships, streamline integrations, and secure brand networks with real-time fraud prevention.",
        href: "#",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-1",
        background: (
            <Image
                src="/images/porsche.svg"
                alt="Industry Spotlight"
                width={300}
                height={300}
                className="absolute top-10 left-10 origin-top rounded-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_0%,#000_100%)] group-hover:scale-105"
            />
        ),
    },
    {
        Icon: DollarSign,
        name: "Financial Institutions",
        description:
            "Prevent identity fraud, ensure compliance, and reduce operational costs with precision-driven solutions.",
        href: "#",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-2",
        background: (
            <Image
                src="/images/cards.svg"
                alt="Financial Institutions"
                width={300}
                height={300}
                className="absolute top-10 left-10 origin-top rounded-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_0%,#000_100%)] group-hover:scale-105"
            />
        ),
    },
    {
        Icon: Landmark,
        name: "Government",
        description: "Strengthen systems, safeguard public trust",
        href: "#",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-2 max-w-full overflow-hidden",
        background: (
            <Integrations className="absolute top-4 right-2 h-[300px] w-[600px] border-none pl-28 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105 md:pl-0" />
        ),
    },
    {
        Icon: Activity,
        name: "Healthcare Providers",
        description: "Protect patient data, prevent medical fraud",
        className: "col-span-3 lg:col-span-1",
        href: "#",
        cta: "Learn more",
        background: (
            <Image
                src="/images/healthcare.svg"
                alt="Healthcare Institutions"
                width={300}
                height={300}
                className="absolute top-10 left-10 origin-top rounded-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_0%,#000_100%)] group-hover:scale-105"
            />
        ),
    },
];

const BentoGrid = ({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
                className,
            )}
        >
            {children}
        </div>
    );
};

const BentoCard = ({
    name,
    className,
    background,
    Icon,
    description,
    href,
    cta,
}: {
    name: string;
    className: string;
    background: ReactNode;
    Icon: any;
    description: string;
    href: string;
    cta: string;
}) => (
    <div
        key={name}
        className={cn(
            "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl border border-border",
            "bg-background [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
            className,
        )}
    >
        <div>{background}</div>
        <div className="group-hover:-translate-y-10 pointer-events-none z-10 flex flex-col gap-1 p-6 transition-all duration-300">
            <Icon className="h-7 w-7 origin-left text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" />
            <h3 className="font-semibold text-neutral-300 text-xl">{name}</h3>
            <p className="max-w-lg text-neutral-400">{description}</p>
        </div>

        <div
            className={cn(
                "absolute bottom-0 flex w-full translate-y-10 flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
            )}
        >
            <Link
                href={href}
                className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                    className: "cursor-pointer",
                })}
            >
                {cta}
                <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
        </div>
        <div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
    </div>
);

export { BentoCard, BentoGrid };