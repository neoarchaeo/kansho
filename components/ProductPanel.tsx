"use client";

import { motion } from "framer-motion";
import { Product } from "@/lib/products";
import ImageCarousel from "./ImageCarousel";
import DisclaimerBanner from "./DisclaimerBanner";

interface ProductPanelProps {
  product: Product;
  onClose: () => void;
}

export default function ProductPanel({ product, onClose }: ProductPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "hue-rotate(90deg) brightness(1.5) blur(4px)" }}
      animate={{ opacity: 1, filter: "hue-rotate(0deg) brightness(1) blur(0px)" }}
      exit={{ opacity: 0, filter: "hue-rotate(-90deg) brightness(0.5) blur(4px)" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* Product title */}
      <div className="mb-6">
        <div className="text-[10px] sm:text-xs text-frame-mid tracking-[0.2em] mb-1">
          ASSET FILE // {product.id.toUpperCase()}
        </div>
        <h2 className="text-sm sm:text-base md:text-lg text-kansho-red tracking-wider leading-tight font-bold">
          {product.title}
        </h2>
        <div className="w-full h-px bg-kansho-red/20 mt-3" />
      </div>

      {/* Image carousel */}
      <div className="mb-8">
        <ImageCarousel images={product.images} alt={product.title} />
      </div>

      {/* Description */}
      <div className="mb-8">
        <h3 className="text-[10px] sm:text-xs text-kansho-red tracking-[0.2em] mb-3 border-b border-kansho-red/20 pb-1">
          DESCRIPTION
        </h3>
        <p className="text-xs sm:text-sm leading-relaxed text-kansho-black/85 tracking-wide">
          {product.description}
        </p>
      </div>

      {/* Specifications */}
      <div className="mb-8">
        <h3 className="text-[10px] sm:text-xs text-kansho-red tracking-[0.2em] mb-3 border-b border-kansho-red/20 pb-1">
          SPECIFICATIONS
        </h3>
        <div className="space-y-2">
          {product.specs.map((spec, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-3 text-xs sm:text-sm"
            >
              <span className="text-frame-dark tracking-wider min-w-[160px] text-[11px]">
                {spec.label}:
              </span>
              <span className="text-kansho-black/85 tracking-wide">
                {spec.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mb-8">
        <DisclaimerBanner />
      </div>

      {/* Acquire button */}
      <div className="mb-8">
        <button
          className="btn-acquire w-full text-xs sm:text-sm"
          disabled
          aria-label="Acquire asset - coming soon Q3 2026"
        >
          ACQUIRE ASSET
        </button>
        {/* Stripe placeholder - uncomment when ready
        
        // import { loadStripe } from '@stripe/stripe-js';
        // const stripePromise = loadStripe('pk_test_YOUR_KEY_HERE');
        //
        // const handleCheckout = async () => {
        //   const stripe = await stripePromise;
        //   if (!stripe) return;
        //   
        //   const { error } = await stripe.redirectToCheckout({
        //     lineItems: [{ price: 'price_YOUR_PRICE_ID', quantity: 1 }],
        //     mode: 'payment',
        //     successUrl: window.location.origin + '/?success=true',
        //     cancelUrl: window.location.origin + '/?canceled=true',
        //   });
        //   if (error) console.error(error);
        // };
        
        */}
      </div>

      {/* Return button */}
      <div className="text-center">
        <button
          onClick={onClose}
          className="text-xs sm:text-sm text-kansho-red underline underline-offset-4 decoration-kansho-red/40 hover:decoration-kansho-red tracking-wider hover-glow transition-all"
        >
          ◄ RETURN TO CONSOLE
        </button>
      </div>
    </motion.div>
  );
}
