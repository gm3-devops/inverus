"use client";

import { Particles } from "@/components/ui/particles";
import Globe from "@/components/ui/globe";

export default function GlobeAndStars() {
    const color = "#ffffff";

    return (
        <div className="w-full h-full">
            <Particles className="absolute inset-0" quantity={150} ease={80} color={color} refresh />
            <Globe />
        </div>
    );
}
