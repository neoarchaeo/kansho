"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { products } from "@/lib/products";
import type { Product } from "@/lib/products";
import ProductPanel from "@/components/ProductPanel";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import GlitchText from "@/components/GlitchText";

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSelect = useCallback(
    (product: Product) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      // Brief glitch delay
      setTimeout(() => {
        setSelectedProduct(product);
        setIsTransitioning(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 150);
    },
    [isTransitioning]
  );

  const handleClose = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedProduct(null);
      setIsTransitioning(false);
    }, 150);
  }, [isTransitioning]);

  return (
    <div className={`py-4 sm:py-8 md:py-12 ${isTransitioning ? "glitch-active" : ""}`}>
      <AnimatePresence mode="wait">
        {selectedProduct ? (
          <motion.div
            key="product"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ProductPanel product={selectedProduct} onClose={handleClose} />
          </motion.div>
        ) : (
          <motion.div
            key="console"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* System header */}
            <div className="mb-6 sm:mb-10">
              <div className="text-[10px] sm:text-xs text-frame-mid tracking-[0.2em] mb-1">
                TERMINAL SESSION // ACTIVE
              </div>
              <div className="text-[10px] text-frame-mid tracking-wider">
                ═══════════════════════════════════════
              </div>
            </div>

            {/* ACCESS menu */}
            <nav
              className="space-y-1 sm:space-y-2 mb-8 sm:mb-12"
              aria-label="Product navigation"
            >
              <div className="text-[10px] sm:text-xs text-kansho-red/60 tracking-[0.2em] mb-3 sm:mb-4">
                SELECT ASSET FOR DETAILED VIEW:
              </div>

              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.3 }}
                >
                  <button
                    onClick={() => handleSelect(product)}
                    className="access-link w-full text-left text-xs sm:text-sm md:text-base tracking-wider block"
                    disabled={isTransitioning}
                  >
                    <span className="text-kansho-red/60 mr-1">&gt;</span>{" "}
                    ACCESS:{" "}
                    <GlitchText
                      text={product.accessLabel}
                      glitchOnHover
                      className="inline"
                    />
                  </button>
                </motion.div>
              ))}

              {/* Classified link */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: products.length * 0.08, duration: 0.3 }}
              >
                <Link
                  href="/classified/"
                  className="access-link text-xs sm:text-sm md:text-base tracking-wider block"
                >
                  <span className="text-kansho-red/60 mr-1">&gt;</span>{" "}
                  ACCESS:{" "}
                  <GlitchText
                    text="[CLASSIFIED::RESTRICTED]"
                    glitchOnHover
                    className="inline"
                  />
                </Link>
              </motion.div>
            </nav>

            {/* Terminal separator */}
            <div className="text-[10px] text-frame-mid tracking-wider mb-6 sm:mb-8">
              ═══════════════════════════════════════
            </div>

            {/* Disclaimer */}
            <DisclaimerBanner />

            {/* System status footer */}
            <div className="mt-8 sm:mt-12 text-[9px] sm:text-[10px] text-frame-mid tracking-wider space-y-0.5" aria-hidden="true">
              <p>SYSTEM STATUS: NOMINAL</p>
              <p>ENCRYPTION: AES-256-GCM</p>
              <p>SESSION: AUTHENTICATED</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
