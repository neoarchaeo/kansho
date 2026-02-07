"use client";

import { ReactNode } from "react";
import GlitchText from "./GlitchText";
import Link from "next/link";

interface ConsoleFrameProps {
  children: ReactNode;
}

export default function ConsoleFrame({ children }: ConsoleFrameProps) {
  return (
    <div className="min-h-screen flex flex-col circuit-bg">
      {/* Outer metallic frame */}
      <div className="console-frame m-1 sm:m-2 md:m-3 flex-1 flex flex-col animate-border-pulse">
        <div className="console-frame-inner flex-1 flex flex-col">
          {/* Header bar */}
          <header className="border-b-2 border-frame-dark px-3 py-2 sm:px-6 sm:py-3 flex items-center justify-between bg-parchment-dark/50 relative">
            {/* Status indicators - left */}
            <div className="hidden sm:flex items-center gap-2" aria-hidden="true">
              <div className="w-2 h-2 rounded-full bg-kansho-red animate-glow-pulse" />
              <div className="w-2 h-2 rounded-full bg-frame-mid" />
              <div className="w-2 h-2 rounded-full bg-frame-mid" />
            </div>

            {/* Logo - center */}
            <Link href="/" className="mx-auto sm:mx-0 sm:absolute sm:left-1/2 sm:-translate-x-1/2">
              <GlitchText
                text="KANSHO.TECH"
                className="text-kansho-red text-lg sm:text-xl md:text-2xl tracking-[0.25em] font-bold"
                as="h1"
                glitchOnHover
                flickerEnabled
              />
            </Link>

            {/* System info - right */}
            <div className="hidden sm:block text-[10px] text-frame-mid tracking-wider" aria-hidden="true">
              LEDGER::REV.A // SYS::ONLINE
            </div>

            {/* Subtle letterhead rule */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-kansho-red/15" aria-hidden="true" />
          </header>

          {/* Main content area */}
          <main className="flex-1 overflow-y-auto px-3 py-4 sm:px-6 md:px-8 lg:px-12">
            <div className="max-w-5xl mx-auto w-full">
              {children}
            </div>
          </main>

          {/* Footer bar */}
          <footer className="border-t-2 border-frame-dark px-3 py-2 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-1 bg-parchment-dark/50 text-[10px] sm:text-xs text-frame-mid tracking-wider">
            <span>&copy; {new Date().getFullYear()} KANSHO.TECH // ALL RIGHTS RESERVED</span>
            <Link
              href="/terms/"
              className="hover-glow text-frame-dark hover:text-kansho-red transition-colors"
            >
              TERMS OF SERVICE
            </Link>
          </footer>
        </div>
      </div>
    </div>
  );
}
