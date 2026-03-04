"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

interface ProfileImageProps {
    src?: string;
    alt?: string;
}

const DEFAULT_IMAGE = "/profile.jpg";

function AnimatedProfileImage({ src = DEFAULT_IMAGE, alt = "Profile" }: ProfileImageProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.to(imageRef.current, {
            y: -10,
            duration: 2,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true,
        });
    }, { scope: containerRef });

    return (
        <ScrollReveal>
            <div ref={containerRef} className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-3xl blur-2xl opacity-20" />
                <div
                    ref={imageRef}
                    className="relative w-72 h-72 mx-auto rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500"
                >
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 288px, 288px"
                        priority
                        onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = "none";
                        }}
                    />
                </div>
            </div>
        </ScrollReveal>
    );
}

export { AnimatedProfileImage, DEFAULT_IMAGE };
