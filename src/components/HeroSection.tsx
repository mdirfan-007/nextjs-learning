"use client";
import React from "react";
import { Button } from "./ui/moving-border";
import { Spotlight } from "@/components/ui/Spotlight";

import Link from "next/link";


function HeroSection() {
  return (
    <div className="hero-section overflow-hidden relative flex flex-col items-center justify-center min-h-screen  text-white">
        <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className=" mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the Art of Music
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 mx-auto max-w-lg">
          Dive into our comprehensive music education platform and unlock your
          potential as a musician. whether you're a beginner or an advanced
          learner, we have something for everyone.
        </p>
      </div>
      <div className="mt-4">
        <Link href="/courses">
          <Button borderRadius="1.75rem" className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800">
            Explore Courses
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
