'use client'

import { cn } from "@/functions";
import React, { useEffect, useRef } from 'react'
import { Search, Database, Globe, BarChart2, FileSearch } from 'lucide-react'

export interface AnimatedBeamProps {
  className?: string;
}

export const RadarAnimation: React.FC<AnimatedBeamProps> = ({
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateRadius = () => {
      if (containerRef.current) {
        const vmin = Math.min(window.innerWidth, window.innerHeight)
        containerRef.current.style.setProperty('--radius', `${vmin * 0.4}px`)
      }
    }

    updateRadius()
    window.addEventListener('resize', updateRadius)

    return () => {
      window.removeEventListener('resize', updateRadius)
    }
  }, [])

  return (

    <div className="flex h-screen items-center justify-center" ref={containerRef}>
      <div className="scanner-case">
        <div className="scanner">
          <div className="scanner-ray"></div>
        </div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="icon icon-1">
          <Search className="w-6 h-6" />
        </div>
        <div className="icon icon-2">
          <Globe className="w-6 h-6" />
        </div>
        <div className="icon icon-3">
          <Database className="w-6 h-6" />
        </div>
        <div className="icon icon-4">
          <BarChart2 className="w-6 h-6" />
        </div>
        <div className="icon icon-5">
          <FileSearch className="w-6 h-6" />
        </div>
      </div>
      <style jsx>{`
        .scanner-case {
          position: relative;
          border-radius: 50%;
          height: var(--radius);
          width: var(--radius);
          overflow: hidden;
          border: solid 1px #007adf;
          box-shadow: 0 0 10px #007adf80, inset 0 0 10px #007adf80;
          background: rgba(0, 122, 223, 0.05);
        }

        .line {
          position: absolute;
          top: 0;
          left: 50%;
          width: 2px;
          height: inherit;
          border-left: solid 1px rgba(0, 122, 223, 0.3);
        }

        .scanner {
          border-radius: inherit;
          height: inherit;
          width: inherit;
          overflow: inherit;
          position: relative;
          animation: spin 4s infinite linear;
        }

        .scanner-ray {
          position: absolute;
          top: 50%;
          left: 50%;
          height: inherit;
          width: inherit;
          background: linear-gradient(45deg, 
            rgba(0, 122, 223, 0.8) 0%, 
            rgba(0, 61, 111, 0.3) 30%,
            rgba(0, 0, 0, 0.1) 50%
          );
        }

        .scanner-case .line:nth-child(3) {
          transform: rotate(45deg);
        }

        .scanner-case .line:nth-child(4) {
          transform: rotate(90deg);
        }

        .scanner-case .line:nth-child(5) {
          transform: rotate(135deg);
        }

        .circle {
          border-radius: inherit;
          border: solid 1px rgba(0, 122, 223, 0.3);
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
        }

        .scanner-case .circle:nth-child(6) {
          width: calc(var(--radius) * 0.75);
          height: calc(var(--radius) * 0.75);
        }

        .scanner-case .circle:nth-child(7) {
          width: calc(var(--radius) * 0.5);
          height: calc(var(--radius) * 0.5);
        }

        .scanner-case .circle:nth-child(8) {
          width: calc(var(--radius) * 0.25);
          height: calc(var(--radius) * 0.25);
        }

        .icon {
          position: absolute;
          opacity: 0;
          color: #007adf;
        }

        .scanner-case .icon-1 {
          top: 65%;
          left: 50%;
          transform: translate(-50%, 0);
          animation: blip 4s linear infinite;
        }

        .scanner-case .icon-2 {
          top: 25%;
          left: 25%;
          animation: blip 4s linear infinite;
          animation-delay: 1.5s;
        }

        .scanner-case .icon-3 {
          top: 50%;
          left: 80%;
          transform: translate(0, -50%);
          animation: blip 4s linear infinite;
          animation-delay: 3s;
        }

        .scanner-case .icon-4 {
          top: 15%;
          left: 50%;
          transform: translate(-50%, 0);
          animation: blip 4s linear infinite;
          animation-delay: 2s;
        }

        .scanner-case .icon-5 {
          top: 50%;
          left: 15%;
          transform: translate(0, -50%);
          animation: blip 4s linear infinite;
          animation-delay: 3.5s;
        }

        @keyframes spin {
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes blip {
          0% {
            opacity: 0;
          }
          2% {
            opacity: 1;
          }
          75% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}

export default RadarAnimation

