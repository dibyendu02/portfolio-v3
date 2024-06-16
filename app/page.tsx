"use client";
import { SpotlightPreview } from "@/components/SpotlightPreview";
import React, { useEffect } from "react";
import { FaRegBuilding } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { IoMdArrowForward } from "react-icons/io";

const ExperienceCard = ({
  role,
  company,
  desc,
}: {
  role: string;
  company: string;
  desc: string;
}) => {
  return (
    <div className="mt-10">
      <div className="flex gap-5 items-center">
        <div className="w-14 h-14 bg-white/5 rounded-full hidden md:flex justify-center items-center">
          <FaRegBuilding color="white" size={25} />
        </div>
        <div>
          <h1 className="font-medium text-lg">{role}</h1>
          <div className="flex gap-2 items-center">
            <h1 className="text-white/[0.5] font-medium text-lg">{company}</h1>
            <MdArrowOutward color="lightgreen" size={20} />
          </div>
        </div>
      </div>
      <h1 className="md:ml-20 mt-4 text-base text-white/[0.9]">{desc}</h1>
    </div>
  );
};

const TechStackCard = ({ stack }: { stack: string }) => {
  return (
    <div className="flex gap-3 items-center transition-transform duration-300 hover:translate-x-1">
      <IoMdArrowForward color="lightgreen" size={16} />
      <h1 className="font-bold">{stack}</h1>
    </div>
  );
};

const page = () => {
  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      const scrollSpeed = 0.3; // Adjust this value to control scroll speed
      window.scrollBy(0, event.deltaY * scrollSpeed);
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);
  return (
    <div className="min-h-screen">
      <div className="h-screen w-full bg-black bg-grid-white/[0.07]   md:bg-grid-white/[0.05]">
        <SpotlightPreview />
      </div>

      {/* experience section  */}

      <div className="bg-black min-h-[60vh] md:px-40 px-4 py-10">
        <div className="bg-white/[0.12] rounded-xl md:p-10 p-5">
          <h1 className="text-4xl font-semibold ">Worked As,</h1>
          {/* experience card */}
          <ExperienceCard
            role="Full Stack Developer"
            company="ASR Tech Solution"
            desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
              quidem vero ut voluptate, dolore rem quaerat omnis ea, accusantium
              voluptatum sed, harum illum quibusdam! Vero dignissimos neque
              autem. Molestiae, consectetur. harum illum quibusdam! Vero dignissimos neque
              autem. Molestiae, consectetur."
          />
          <ExperienceCard
            role="Full Stack Developer"
            company="ASR Tech Solution"
            desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
              quidem vero ut voluptate, dolore rem quaerat omnis ea, accusantium
              voluptatum sed, harum illum quibusdam! Vero dignissimos neque
              autem. Molestiae, consectetur. harum illum quibusdam! Vero dignissimos neque
              autem. Molestiae, consectetur."
          />
        </div>
      </div>

      {/* tech stack section  */}
      <div className="bg-black min-h-[60vh] md:px-40 px-4 py-10">
        <div className="bg-white/[0.12] rounded-xl md:p-10 p-5">
          <h1 className="text-4xl font-semibold ">Daily Uses,</h1>
          <h1 className="text-white/[0.5] font-medium mt-5 ">
            I constantly learn new and exciting concepts in computer science and
            web development. I try applying these concepts to solve real-world
            problems. A few technologies I enjoy working with:
          </h1>

          {/* tech stacks  */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4  my-5">
            <TechStackCard stack="React, Next Js" />
            <TechStackCard stack="HTML, JS, TS" />
            <TechStackCard stack="CSS (Tailwind, Bootstrap)" />
            <TechStackCard stack="SQL, Prisma, MongoDB" />
            <TechStackCard stack="Node, Express, GRaphQL" />
            <TechStackCard stack="Mongoose, TypeORM" />
            <TechStackCard stack="Cypress, Browserstack" />
            <TechStackCard stack="GoLang (Learning)" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
