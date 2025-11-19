import { BackgroundRippleEffect } from "./ui/background-ripple-effect"
import { PixelImage } from "./ui/pixel-image";
import { TextGenerateEffect } from "./ui/text-generate-effect"

const HeroSection = () => {
    const data =
        "I build high-performance digital products for startups and businesses using React, Next.js, Node.js, and modern cloud technologies.";

    return (
        <div className="relative z-10 h-[calc(100vh-100px)] w-full">
            <BackgroundRippleEffect />

            <div className="absolute inset-0 flex items-center justify-center">

                <div className="relative z-20 mx-auto w-full max-w-7xl px-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">

                    {/* LEFT SIDE — TEXT */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4">

                        {/* NAME + HAND ICON */}
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center justify-center lg:justify-start gap-2">
                            <span>👋</span>
                            <span>My Self <span className="text-purple-500 dark:text-purple-400">Nitin Malviya</span></span>
                        </h2>

                        {/* Animated intro text */}
                        <TextGenerateEffect words={data} />
                    </div>

                    {/* RIGHT SIDE — IMAGE */}
                    <div className="w-full lg:w-1/2 flex items-center justify-center">
                        <PixelImage src="/images/hero-image.png" grid="8x8" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HeroSection;
