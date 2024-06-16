import React from "react";
import { cn } from "../utils/cn";
import { Spotlight } from "./ui/Spotlight";

export function SpotlightPreview() {
  return (
    <div className="h-screen w-full flex md:items-center pt-24 md:pt-0 md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 max-w-7xl md:mx-auto relative z-10 w-full pt-20 md:pt-0 flex flex-col items-start md:items-center gap-2 md:mt-20 mx-8">
        <h1 className="text-6xl md:text-7xl font-bold text-start md:text-center gradient-text">
          Hi, Dibyendu here <br /> a digital nomad
        </h1>
        <p className="mt-4 font-normal text-lg text-neutral-300 max-w-lg text-start md:text-center mx-auto">
          I help you build your online presence be it Web or App with stable
          frontend and backend libraries and frameworks that work smoothly
        </p>
        <button className="inline-flex mt-5 md:mt-10 h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-10 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Hire Me
        </button>
      </div>
    </div>
  );
}
