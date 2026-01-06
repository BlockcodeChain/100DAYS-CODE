import React from "react";
import heroimage from "../assets/images/hero-img.png";
import herobgvideo from "../assets/videos/hero-bg.mp4";
import herobg from "../assets/images/hero-bg.png";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.8 });

    tl.to(".hero-content", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
    })
      .to(
        ".hero-text-scroll",
        {
          duration: 0.9,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "circ.out",
        },
        "-=0.4"
      )
      .from(
        ".hero-title span",
        {
          yPercent: 150,
          stagger: 0.025,
          ease: "power3.out",
        },
        "-=0.5"
      );

    gsap.to(".hero-container", {
      scrollTrigger: {
        trigger: ".hero-container",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      scale: 0.92,
      rotate: 5,
      yPercent: 20,
      ease: "none",
    });
  });

  return (
  <section className="bg-main-bg">
  <div className="hero-container relative min-h-screen overflow-hidden">

    {/* BACKGROUND */}
    {isTablet ? (
      <img
        src={herobg}
        className="absolute inset-0 w-full h-full object-cover z-0"
        alt=""
      />
    ) : (
      <video
        src={herobgvideo}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
    )}

    {/* HERO IMAGE */}
    <img
      src={heroimage}
      alt=""
      className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 max-h-[75vh] pointer-events-none"
    />

    {/* CONTENT */}
    <div className="hero-content relative z-20 opacity-0 translate-y-6 text-center px-6 pt-28">

      <div className="overflow-hidden">
        <h1 className="hero-title text-5xl md:text-7xl font-bold">
          {"Freaking Delicious".split("").map((char, i) => (
            <span key={i} className="inline-block">
              {char}
            </span>
          ))}
        </h1>
      </div>

      <div
        className="hero-text-scroll mt-4 inline-block"
        style={{
          clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
        }}
      >
        <div className="hero-subtitle">
          <h1>Protein + Caffine</h1>
        </div>
      </div>

      <h2 className="mt-5 max-w-xl mx-auto text-sm md:text-base opacity-80">
        Live life to the fullest with SPYLT: Shatter boredom and embrace
        your inner kid with every deliciously smooth chug.
      </h2>

      {/* BUTTON — NOW VISIBLE */}
      <div className="hero-button mt-8 inline-block z-20">
        <button className="px-7 py-3 border border-black rounded-full hover:bg-black hover:text-white transition">
          Chug a SPYLT
        </button>
      </div>

    </div>
  </div>
</section>

  );
};

export default HeroSection;
