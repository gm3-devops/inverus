"use client";

import React from "react";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export interface ScheduleCallButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    buttonText?: string;
    iconl?: React.ReactNode; // Icon on the left
    iconr?: React.ReactNode; // Icon on the right
}

export function ScheduleCall({
    buttonText = "Book a Demo",
    iconl,
    iconr,
    className,
    ...props
}: ScheduleCallButtonProps) {
    const { theme } = useTheme();

    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ namespace: "inverus" });
            cal("ui", {
                theme: "dark",
                cssVarsPerTheme: {
                    dark: { "--brand-color": "#000000" },
                    light: { "--brand-color": "#ffffff" },
                },
                hideEventTypeDetails: false,
                layout: "month_view",
            });
        })();
    }, [theme]);

    return (
        <Button
            data-cal-namespace="inverus"
            data-cal-link="inverus"
            data-cal-config='{"layout":"month_view"}'
            className={`bg-primary text-primary-foreground hover:opacity-70 bt-primary ${className}`}
            {...props}
        >
            {iconl && <span className="mr-2">{iconl}</span>}
            {buttonText}
            {iconr && <span className="ml-2">{iconr}</span>}
        </Button>
    );
}
