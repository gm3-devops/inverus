"use client";
import HyperText from "@/components/ui/hyper-text";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.back();
        }, 4000);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div className="flex flex-col items-center justify-center h-full overflow-hidden">
            <HyperText
                className="text-4xl font-bold text-black mt-60 text-foreground"
                text="404 - Page not found"
            />
        </div>
    );
}