import React from "react";
import Image from "next/image";

const BrandSection = () => {
  return (
    <section className="w-full bg-black py-6">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-6 md:gap-[100px]  px-4">
        {/* Brand Logos */}
        <div className="w-20 h-auto md:w-28">
          <Image
            src="/images/versace.png"
            alt="Versace"
            className="object-contain"
            width={112}
            height={56}
          />
        </div>
        <div className="w-20 h-auto md:w-28">
          <Image
            src="/images/zara.png"
            alt="Zara"
            className="object-contain"
            width={112}
            height={56}
          />
        </div>
        <div className="w-20 h-auto md:w-28">
          <Image
            src="/images/gucci.png"
            alt="Gucci"
            className="object-contain"
            width={112}
            height={56}
          />
        </div>
        <div className="w-20 h-auto md:w-28">
          <Image
            src="/images/prada.png"
            alt="Prada"
            className="object-contain"
            width={112}
            height={56}
          />
        </div>
        <div className="w-20 h-auto md:w-28">
          <Image
            src="/images/calvin-klein.png"
            alt="Calvin Klein"
            className="object-contain"
            width={112}
            height={56}
          />
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
