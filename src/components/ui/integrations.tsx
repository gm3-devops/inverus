"use client";

import { AnimatedBeam } from "@/components/ui/animated-beam";
import { cn } from "@/functions";
import { LucideProps } from 'lucide-react';
import React, { forwardRef, useRef } from "react";

const Circle = forwardRef<
    HTMLDivElement,
    { className?: string; children?: React.ReactNode }
>(function Circle({ className, children }, ref) {
    return (
        <div
            ref={ref}
            className={cn(
                "z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
                className,
            )}
        >
            {children}
        </div>
    );
});

export function Integrations({
    className,
}: {
    className?: string;
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const div1Ref = useRef<HTMLDivElement>(null);
    const div2Ref = useRef<HTMLDivElement>(null);
    const div3Ref = useRef<HTMLDivElement>(null);
    const div4Ref = useRef<HTMLDivElement>(null);
    const div5Ref = useRef<HTMLDivElement>(null);
    const div6Ref = useRef<HTMLDivElement>(null);
    const div7Ref = useRef<HTMLDivElement>(null);

    return (
        <div
            className={cn(
                "relative flex w-full max-w-[500px] items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-xl",
                className,
            )}
            ref={containerRef}
        >
            <div className="flex h-full w-full flex-row items-stretch justify-between gap-10">
                <div className="flex flex-col justify-center">
                    <Circle ref={div7Ref}>
                        <Icons.user className="text-black" />
                    </Circle>
                </div>
                <div className="flex flex-col justify-center">
                    <Circle ref={div6Ref} className="h-16 w-16">
                        <Icons.inverus className="h-6 w-6" />
                    </Circle>
                </div>
                <div className="flex flex-col justify-center gap-2">
                    <Circle ref={div1Ref}>
                        <Icons.pillar className="h-8 w-8" />
                    </Circle>
                    <Circle ref={div2Ref}>
                        <Icons.googleDocs className="h-6 w-6" />
                    </Circle>
                    <Circle ref={div3Ref}>
                        <Icons.justice className="h-8 w-8" />
                    </Circle>
                    <Circle ref={div4Ref}>
                        <Icons.handshake className="h-8 w-8" />
                    </Circle>
                    <Circle ref={div5Ref}>
                        <Icons.bookKey className="h-8 w-8" />
                    </Circle>
                </div>
            </div>

            {/* AnimatedBeams */}
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div1Ref}
                toRef={div6Ref}
                duration={3}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div2Ref}
                toRef={div6Ref}
                duration={3}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div3Ref}
                toRef={div6Ref}
                duration={3}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div4Ref}
                toRef={div6Ref}
                duration={3}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div5Ref}
                toRef={div6Ref}
                duration={3}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div6Ref}
                toRef={div7Ref}
                duration={3}
            />
        </div>
    );
}

const Icons = {
    inverus: (props: LucideProps) => (
        <svg role="img" viewBox="0 0 24 24" {...props}>
            <path
                d="M20 6L9 17l-5-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-300"
            />
        </svg>
    ),
    user: (props: LucideProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-user"
            {...props}
        >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    ),
    pillar: (props: LucideProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-landmark text-blue-300"
            {...props}
        >
            <line x1="3" x2="21" y1="22" y2="22" />
            <line x1="6" x2="6" y1="18" y2="11" />
            <line x1="10" x2="10" y1="18" y2="11" />
            <line x1="14" x2="14" y1="18" y2="11" />
            <line x1="18" x2="18" y1="18" y2="11" />
            <polygon points="12 2 20 7 4 7" />
        </svg>
    ),
    googleDocs: (props: LucideProps) => (
        <svg
            width="47px"
            height="65px"
            viewBox="0 0 47 65"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <title>Docs-icon</title>
            <desc>Created with Sketch.</desc>
            <defs>
                <path
                    d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
                    id="path-1"
                ></path>
                <path
                    d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
                    id="path-3"
                ></path>
                <linearGradient
                    x1="50.0053945%"
                    y1="8.58610612%"
                    x2="50.0053945%"
                    y2="100.013939%"
                    id="linearGradient-5"
                >
                    <stop stopColor="#1A237E" stopOpacity="0.2" offset="0%"></stop>
                    <stop stopColor="#1A237E" stopOpacity="0.02" offset="100%"></stop>
                </linearGradient>
                <path
                    d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
                    id="path-6"
                ></path>
                <path
                    d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
                    id="path-8"
                ></path>
                <path
                    d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
                    id="path-10"
                ></path>
                <path
                    d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
                    id="path-12"
                ></path>
                <path
                    d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
                    id="path-14"
                ></path>
                <radialGradient
                    cx="3.16804688%"
                    cy="2.71744318%"
                    fx="3.16804688%"
                    fy="2.71744318%"
                    r="161.248516%"
                    gradientTransform="translate(0.031680,0.027174),scale(1.000000,0.723077),translate(-0.031680,-0.027174)"
                    id="radialGradient-16"
                >
                    <stop stopColor="#FFFFFF" stopOpacity="0.1" offset="0%"></stop>
                    <stop stopColor="#FFFFFF" stopOpacity="0" offset="100%"></stop>
                </radialGradient>
            </defs>
            <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
            >
                <g
                    id="Consumer-Apps-Docs-Large-VD-R8"
                    transform="translate(-451.000000, -463.000000)"
                >
                    <g id="Hero" transform="translate(0.000000, 63.000000)">
                        <g id="Personal" transform="translate(277.000000, 309.000000)">
                            <g id="Docs-icon" transform="translate(174.000000, 91.000000)">
                                <g id="Group">
                                    <g id="Clipped">
                                        <mask id="mask-2" fill="white">
                                            <use xlinkHref="#path-1"></use>
                                        </mask>
                                        <g id="SVGID_1_"></g>
                                        <path
                                            d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L36.71875,10.3409091 L29.375,0 Z"
                                            id="Path"
                                            fill="#4285F4"
                                            fillRule="nonzero"
                                            mask="url(#mask-2)"
                                        ></path>
                                    </g>
                                    <g id="Clipped">
                                        <mask id="mask-4" fill="white">
                                            <use xlinkHref="#path-3"></use>
                                        </mask>
                                        <g id="SVGID_1_"></g>
                                        <polygon
                                            id="Path"
                                            fill="url(#linearGradient-5)"
                                            fillRule="nonzero"
                                            mask="url(#mask-4)"
                                            points="30.6638281 16.4309659 47 32.8582386 47 17.7272727"
                                        ></polygon>
                                    </g>
                                    <g id="Clipped">
                                        <mask id="mask-7" fill="white">
                                            <use xlinkHref="#path-6"></use>
                                        </mask>
                                        <g id="SVGID_1_"></g>
                                        <path
                                            d="M11.75,47.2727273 L35.25,47.2727273 L35.25,44.3181818 L11.75,44.3181818 L11.75,47.2727273 Z M11.75,53.1818182 L29.375,53.1818182 L29.375,50.2272727 L11.75,50.2272727 L11.75,53.1818182 Z M11.75,32.5 L11.75,35.4545455 L35.25,35.4545455 L35.25,32.5 L11.75,32.5 Z M11.75,41.3636364 L35.25,41.3636364 L35.25,38.4090909 L11.75,38.4090909 L11.75,41.3636364 Z"
                                            id="Shape"
                                            fill="#F1F1F1"
                                            fillRule="nonzero"
                                            mask="url(#mask-7)"
                                        ></path>
                                    </g>
                                    <g id="Clipped">
                                        <mask id="mask-9" fill="white">
                                            <use xlinkHref="#path-8"></use>
                                        </mask>
                                        <g id="SVGID_1_"></g>
                                        <g id="Group" mask="url(#mask-9)">
                                            <g transform="translate(26.437500, -2.954545)">
                                                <path
                                                    d="M2.9375,2.95454545 L2.9375,16.25 C2.9375,18.6985795 4.90929688,20.6818182 7.34375,20.6818182 L20.5625,20.6818182 L2.9375,2.95454545 Z"
                                                    id="Path"
                                                    fill="#A1C2FA"
                                                    fillRule="nonzero"
                                                ></path>
                                            </g>
                                        </g>
                                    </g>
                                    <g id="Clipped">
                                        <mask id="mask-11" fill="white">
                                            <use xlinkHref="#path-10"></use>
                                        </mask>
                                        <g id="SVGID_1_"></g>
                                        <path
                                            d="M4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,4.80113636 C0,2.36363636 1.9828125,0.369318182 4.40625,0.369318182 L29.375,0.369318182 L29.375,0 L4.40625,0 Z"
                                            id="Path"
                                            fillOpacity="0.2"
                                            fill="#FFFFFF"
                                            fillRule="nonzero"
                                            mask="url(#mask-11)"
                                        ></path>
                                    </g>
                                    <g id="Clipped">
                                        <mask id="mask-13" fill="white">
                                            <use xlinkHref="#path-12"></use>
                                        </mask>
                                        <g id="SVGID_1_"></g>
                                        <path
                                            d="M42.59375,64.6306818 L4.40625,64.6306818 C1.9828125,64.6306818 0,62.6363636 0,60.1988636 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,60.1988636 C47,62.6363636 45.0171875,64.6306818 42.59375,64.6306818 Z"
                                            id="Path"
                                            fillOpacity="0.2"
                                            fill="#1A237E"
                                            fillRule="nonzero"
                                            mask="url(#mask-13)"
                                        ></path>
                                    </g>
                                    <g id="Clipped">
                                        <mask id="mask-15" fill="white">
                                            <use xlinkHref="#path-14"></use>
                                        </mask>
                                        <g id="SVGID_1_"></g>
                                        <path
                                            d="M33.78125,17.7272727 C31.3467969,17.7272727 29.375,15.7440341 29.375,13.2954545 L29.375,13.6647727 C29.375,16.1133523 31.3467969,18.0965909 33.78125,18.0965909 L47,18.0965909 L47,17.7272727 L33.78125,17.7272727 Z"
                                            id="Path"
                                            fillOpacity="0.1"
                                            fill="#1A237E"
                                            fillRule="nonzero"
                                            mask="url(#mask-15)"
                                        ></path>
                                    </g>
                                </g>
                                <path
                                    d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
                                    id="Path"
                                    fill="url(#radialGradient-16)"
                                    fillRule="nonzero"
                                ></path>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    ),
    justice: (props: LucideProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#3b82f6"  // Blue color
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-landmark"
            {...props}
        >
            <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
            <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
            <path d="M7 21h10" />
            <path d="M12 3v18" />
            <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
        </svg>
    ),
    handshake: (props: LucideProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-handshake"
            {...props}
        >
            <path d="m11 17 2 2a1 1 0 1 0 3-3" />
            <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
            <path d="m21 3 1 11h-2" />
            <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
            <path d="M3 4h8" />
        </svg>
    ),
    bookKey: (props: LucideProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-book-key"
            {...props}
        >
            <path d="m19 3 1 1" />
            <path d="m20 2-4.5 4.5" />
            <path d="M20 8v13a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H14" />
            <circle cx="14" cy="8" r="2" />
        </svg>
    ),
};