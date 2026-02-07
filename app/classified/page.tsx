"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { classifiedProduct } from "@/lib/products";
import GlitchText from "@/components/GlitchText";

const VALID_USER = "operator";
const VALID_PASS = "kansho2026";

export default function ClassifiedPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(false);

    // Simulated authentication delay
    setTimeout(() => {
      if (username === VALID_USER && password === VALID_PASS) {
        setIsAuthenticated(true);
      } else {
        setError(true);
      }
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="py-4 sm:py-8 md:py-12 relative min-h-[60vh]">
      {/* CLASSIFIED watermark */}
      <div className="classified-watermark" aria-hidden="true">
        CLASSIFIED
      </div>

      <AnimatePresence mode="wait">
        {!isAuthenticated ? (
          <motion.div
            key="login"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "hue-rotate(90deg) blur(4px)" }}
            transition={{ duration: 0.3 }}
            className="relative z-10 max-w-md mx-auto"
          >
            {/* Header */}
            <div className="text-center mb-8 sm:mb-12">
              <div className="text-[10px] sm:text-xs text-kansho-red tracking-[0.3em] mb-2">
                ▲ RESTRICTED SECTOR ▲
              </div>
              <GlitchText
                text="AUTHENTICATION REQUIRED"
                className="text-sm sm:text-base md:text-lg text-kansho-black tracking-wider"
                as="h2"
                flickerEnabled
              />
              <div className="text-[10px] text-frame-mid tracking-wider mt-2">
                CLEARANCE LEVEL: OPERATOR
              </div>
            </div>

            {/* Login form */}
            <div className="console-frame p-4 sm:p-6 bg-parchment-light/50">
              <div className="console-frame-inner p-4 sm:p-6">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label
                      htmlFor="username"
                      className="block text-[10px] sm:text-xs text-frame-dark tracking-[0.15em] mb-1"
                    >
                      OPERATOR ID:
                    </label>
                    <input
                      id="username"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="terminal-input w-full text-xs sm:text-sm tracking-wider"
                      placeholder="enter_username"
                      autoComplete="username"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-[10px] sm:text-xs text-frame-dark tracking-[0.15em] mb-1"
                    >
                      ACCESS KEY:
                    </label>
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="terminal-input w-full text-xs sm:text-sm tracking-wider"
                      placeholder="enter_passkey"
                      autoComplete="current-password"
                      required
                    />
                  </div>

                  {/* Error message */}
                  <AnimatePresence>
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="glitch-active"
                      >
                        <p className="text-kansho-red text-xs sm:text-sm tracking-[0.15em] text-center py-2 border border-kansho-red/30 bg-kansho-red/5">
                          ✖ ACCESS DENIED — INVALID CREDENTIALS
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-2.5 sm:py-3 bg-kansho-black text-parchment text-xs sm:text-sm tracking-[0.2em] border-2 border-frame-dark hover:border-kansho-red hover:bg-kansho-red transition-all disabled:opacity-50"
                  >
                    {isLoading ? "AUTHENTICATING..." : "AUTHENTICATE"}
                  </button>
                </form>
              </div>
            </div>

            {/* Return link */}
            <div className="text-center mt-6">
              <Link
                href="/"
                className="text-xs text-kansho-red underline underline-offset-4 decoration-kansho-red/40 hover:decoration-kansho-red tracking-wider hover-glow transition-all"
              >
                ◄ RETURN TO CONSOLE
              </Link>
            </div>
          </motion.div>
        ) : (
          /* ═══ AUTHENTICATED DASHBOARD ═══ */
          <motion.div
            key="dashboard"
            initial={{ opacity: 0, filter: "hue-rotate(90deg) brightness(1.5) blur(4px)" }}
            animate={{ opacity: 1, filter: "hue-rotate(0deg) brightness(1) blur(0px)" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative z-10"
          >
            {/* Dashboard header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
                <span className="text-[10px] sm:text-xs text-green-700 tracking-[0.2em]">
                  AUTHENTICATED // CLEARANCE GRANTED
                </span>
              </div>
              <GlitchText
                text="RESTRICTED DEVELOPMENT SECTOR"
                className="text-sm sm:text-lg md:text-xl text-kansho-red tracking-wider"
                as="h2"
                flickerEnabled
              />
              <div className="w-full h-px bg-kansho-red/20 mt-3" />
            </div>

            {/* SHIPPO prototype */}
            <div className="console-frame p-4 sm:p-6 mb-8 bg-parchment-light/30">
              <div className="console-frame-inner p-4 sm:p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-3 h-3 bg-kansho-red/20 border border-kansho-red/40 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm sm:text-base text-kansho-red tracking-wider font-bold">
                      {classifiedProduct.title}
                    </h3>
                    <div className="text-[10px] text-frame-mid tracking-wider mt-0.5">
                      STATUS: ALPHA // RESTRICTED
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm leading-relaxed text-kansho-black/80 tracking-wide mb-6">
                  {classifiedProduct.description}
                </p>

                <div className="text-[10px] sm:text-xs text-kansho-red/60 tracking-[0.2em] mb-3">
                  SPECIFICATIONS (PRELIMINARY):
                </div>
                <div className="space-y-1.5">
                  {classifiedProduct.specs.map((spec, i) => (
                    <div
                      key={i}
                      className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-3 text-xs"
                    >
                      <span className="text-frame-dark tracking-wider min-w-[180px] text-[11px]">
                        {spec.label}:
                      </span>
                      <span className="text-kansho-black/80 tracking-wide">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Redacted entries */}
            {[
              { code: "MABOROSHI_幻_[PROTOTYPE]", status: "PRE-ALPHA" },
              { code: "KAGE_影_[PROTOTYPE]", status: "CONCEPTUAL" },
              { code: "YUUREI_幽霊_[PROTOTYPE]", status: "CLASSIFIED" },
            ].map((entry, i) => (
              <div
                key={i}
                className="console-frame p-4 sm:p-6 mb-4 bg-parchment-light/20 opacity-60"
              >
                <div className="console-frame-inner p-4">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-3 h-3 bg-frame-mid/30 border border-frame-mid mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-sm text-frame-dark tracking-wider">
                        {entry.code}
                      </h3>
                      <div className="text-[10px] text-frame-mid tracking-wider mt-0.5">
                        STATUS: {entry.status} // [REDACTED]
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <p className="redacted text-xs leading-relaxed">
                      This content has been redacted per security classification
                      directive KT-SEC-2026. Unauthorized attempts to access
                      this information will be logged and reported.
                    </p>
                    <p className="redacted text-xs leading-relaxed">
                      Specifications and operational parameters are restricted
                      to personnel with Level 3 clearance or above.
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Return link */}
            <div className="text-center mt-8">
              <Link
                href="/"
                className="text-xs sm:text-sm text-kansho-red underline underline-offset-4 decoration-kansho-red/40 hover:decoration-kansho-red tracking-wider hover-glow transition-all"
              >
                ◄ RETURN TO CONSOLE
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
