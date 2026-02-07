"use client";

export default function DisclaimerBanner() {
  return (
    <div
      className="border-2 border-kansho-red/30 bg-kansho-red/[0.03] px-4 py-3 sm:px-6 sm:py-4 text-sm sm:text-base leading-relaxed tracking-wide"
      role="alert"
    >
      <p className="text-kansho-red font-bold text-xs sm:text-sm tracking-[0.15em] mb-2">
        ⚠ WARNING: AUTHORIZED USE ONLY
      </p>
      <p className="text-kansho-black/80 text-sm sm:text-base leading-relaxed">
        All products are intended exclusively for legal purposes including
        authorized penetration testing, security research, and use on
        networks/devices you own or have explicit permission to test.
        Unauthorized use may violate federal, state, and local laws. By
        accessing this site, you agree to comply with all applicable
        regulations. Kansho.tech assumes no liability for misuse.
      </p>
    </div>
  );
}
