"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="py-4 sm:py-8 md:py-12"
    >
      <div className="mb-6 sm:mb-8">
        <div className="text-[10px] sm:text-xs text-frame-mid tracking-[0.2em] mb-1">
          LEGAL DOCUMENTATION
        </div>
        <h2 className="text-sm sm:text-base md:text-lg text-kansho-red tracking-wider font-bold">
          TERMS OF SERVICE
        </h2>
        <div className="w-full h-px bg-kansho-red/20 mt-3" />
      </div>

      <div className="space-y-6 sm:space-y-8 text-xs sm:text-sm leading-relaxed text-kansho-black/85 tracking-wide">
        {/* Section 1 */}
        <section>
          <h3 className="text-[10px] sm:text-xs text-kansho-red tracking-[0.15em] mb-2 font-bold">
            1. LIABILITY WAIVER
          </h3>
          <p>
            Kansho.tech provides hardware tools intended exclusively for
            authorized security testing, research, and educational purposes.
            All products are sold &ldquo;as-is&rdquo; without any express or implied
            representation or warranty regarding fitness for any particular
            purpose. Kansho.tech, its owners, officers, employees, and
            affiliates shall not be held liable for any damages, legal
            consequences, or losses arising from the use or misuse of any
            product purchased through this platform. By purchasing any product,
            the buyer assumes full responsibility for all consequences of
            product use, including but not limited to legal liability for
            unauthorized deployment.
          </p>
        </section>

        {/* Section 2 */}
        <section>
          <h3 className="text-[10px] sm:text-xs text-kansho-red tracking-[0.15em] mb-2 font-bold">
            2. COMPLIANCE WITH LOCAL LAWS
          </h3>
          <p>
            The buyer is solely responsible for ensuring that the purchase,
            possession, and use of any product complies with all applicable
            federal, state, provincial, and local laws and regulations in
            their jurisdiction. Certain products may be classified as
            restricted or prohibited items in specific regions. It is the
            buyer&apos;s obligation to research and understand all relevant legal
            requirements prior to purchase. Kansho.tech makes no
            representations regarding the legality of any product in any
            jurisdiction.
          </p>
        </section>

        {/* Section 3 */}
        <section>
          <h3 className="text-[10px] sm:text-xs text-kansho-red tracking-[0.15em] mb-2 font-bold">
            3. NO WARRANTY
          </h3>
          <p>
            All products are provided without warranty of any kind, whether
            express, implied, or statutory, including but not limited to
            implied warranties of merchantability, fitness for a particular
            purpose, and non-infringement. Kansho.tech does not warrant that
            products will meet your requirements, operate without
            interruption, or be free of defects. Any descriptions,
            specifications, or performance claims are provided for
            informational purposes only and do not constitute a warranty.
          </p>
        </section>

        {/* Section 4 */}
        <section>
          <h3 className="text-[10px] sm:text-xs text-kansho-red tracking-[0.15em] mb-2 font-bold">
            4. SHIPPING RESTRICTIONS
          </h3>
          <p>
            Certain products may be restricted in your jurisdiction. It is the
            buyer&apos;s responsibility to verify that the product can be legally
            shipped to and received in their location. Kansho.tech reserves
            the right to cancel any order if we determine, at our sole
            discretion, that fulfillment may violate applicable export
            controls, import regulations, or other legal restrictions. Refunds
            for cancelled orders due to shipping restrictions will be
            processed in accordance with our refund policy.
          </p>
        </section>

        {/* Section 5 */}
        <section>
          <h3 className="text-[10px] sm:text-xs text-kansho-red tracking-[0.15em] mb-2 font-bold">
            5. MINIMUM AGE REQUIREMENT
          </h3>
          <p>
            You must be at least 18 years of age to purchase products from
            Kansho.tech. By placing an order, you represent and warrant that
            you are at least 18 years old. Kansho.tech reserves the right to
            request age verification at any point during the ordering process
            and to cancel orders where age requirements are not met.
          </p>
        </section>

        {/* Section 6 */}
        <section>
          <h3 className="text-[10px] sm:text-xs text-kansho-red tracking-[0.15em] mb-2 font-bold">
            6. CONTACT
          </h3>
          <p>
            For legal inquiries, compliance questions, or concerns regarding
            these terms, contact us at:{" "}
            <a
              href="mailto:legal@kansho.tech"
              className="text-kansho-red underline underline-offset-2 decoration-kansho-red/40 hover:decoration-kansho-red hover-glow transition-all"
            >
              legal@kansho.tech
            </a>
          </p>
        </section>

        {/* Effective date */}
        <div className="border-t border-frame-mid/30 pt-4 text-[10px] sm:text-xs text-frame-mid tracking-wider">
          <p>EFFECTIVE DATE: 2026-01-01</p>
          <p>LAST UPDATED: 2026-02-01</p>
          <p>DOCUMENT VERSION: 1.0</p>
        </div>
      </div>

      {/* Return link */}
      <div className="text-center mt-8 sm:mt-12">
        <Link
          href="/"
          className="text-xs sm:text-sm text-kansho-red underline underline-offset-4 decoration-kansho-red/40 hover:decoration-kansho-red tracking-wider hover-glow transition-all"
        >
          ◄ RETURN TO CONSOLE
        </Link>
      </div>
    </motion.div>
  );
}
