"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Calendar } from "lucide-react";

export function ScheduleCall() {
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
            className="bg-primary text-primary-foreground hover:opacity-70 bt-primary"
        >
            Schedule Demo
            <Calendar className="w-4 h-4 ml-2 lg:block" />
        </Button>
    );
}
