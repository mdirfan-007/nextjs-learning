'use client'

import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

const projects = [
  {
    title: "Musix 5 School",
    description:
      "An online music education platform offering structured courses, expert mentorship, and hands-on learning for musicians at all levels.",
    link: "https://musix5school.com",
  },
  {
    title: "SoundWave Studio",
    description:
      "A modern music production studio providing recording, mixing, mastering, and creative collaboration services.",
    link: "https://soundwavestudio.com",
  },
  {
    title: "Harmony Learn",
    description:
      "A digital learning platform focused on teaching music theory, instruments, and composition through interactive lessons.",
    link: "https://harmonylearn.com",
  },
  {
    title: "BeatCraft Academy",
    description:
      "An academy dedicated to electronic music production, beat making, and sound design using industry-standard tools.",
    link: "https://beatcraftacademy.com",
  },
  {
    title: "Melody Hub",
    description:
      "A community-driven platform where musicians share knowledge, collaborate on projects, and grow their creative skills.",
    link: "https://melodyhub.com",
  },
  {
    title: "Rhythm Lab",
    description:
      "A creative lab that blends music education with technology, helping artists experiment, innovate, and perform.",
    link: "https://rhythmlab.com",
  },
];

const Webinar = () => {
  return (
    <div className="bg-gray-800 py-10 px-4 sm:py-12 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center px-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-teal-400 mb-3 sm:mb-4">
            Join Our Webinar
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Join us for an interactive session where we'll dive deep into the latest trends in web development and share practical insights to help you build better applications.
          </p>
        </div>

        {/* Cards */}
        <HoverEffect
          items={projects}
          className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        />

        {/* CTA Button */}
        <div className="text-center mt-8 sm:mt-10">
          <Link
            href="/webinar"
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-bold py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg transition duration-300 text-sm sm:text-base"
          >
            View All Webinars
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Webinar;