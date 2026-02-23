"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";


const musicSchoolContent = [
  {
    title: "Learn Music from Industry Experts",
    description:
      "Learn directly from experienced musicians and industry professionals who bring real-world knowledge in performance, composition, and music production. Our instructors focus on practical skills, creative growth, and industry insights to help you understand music beyond theory."
  },
  {
    title: "Structured Courses for All Skill Levels",
    description:
      "Our carefully designed curriculum supports learners at every stage, from complete beginners to advanced musicians. Each course follows a structured learning path that gradually builds technical skills, musical understanding, and creative confidence."
  },
  {
    title: "Hands-on Practice with Live Guidance",
    description:
      "Music is best learned through practice. We emphasize hands-on training through live sessions, guided exercises, and interactive assignments, ensuring students receive continuous feedback and practical experience."
  },
  {
    title: "Modern Music Production & Technology",
    description:
      "Gain in-depth knowledge of modern music production techniques including recording, editing, mixing, and sound design. Learn how to use industry-standard tools and workflows to create professional-quality music."
  },
  {
    title: "Build Confidence and Your Musical Identity",
    description:
      "Develop your unique musical voice while improving performance confidence and creativity. Our programs encourage self-expression, stage presence, and artistic growth, helping you evolve into a complete and confident musician."
  },
    {
    title: "Build Confidence and Your Musical Identity",
    description:
      "Develop your unique musical voice while improving performance confidence and creativity. Our programs encourage self-expression, stage presence, and artistic growth, helping you evolve into a complete and confident musician."
  },
    {
    title: "Build Confidence and Your Musical Identity",
    description:
      "Develop your unique musical voice while improving performance confidence and creativity. Our programs encourage self-expression, stage presence, and artistic growth, helping you evolve into a complete and confident musician."
  },
    {
    title: "Build Confidence and Your Musical Identity",
    description:
      "Develop your unique musical voice while improving performance confidence and creativity. Our programs encourage self-expression, stage presence, and artistic growth, helping you evolve into a complete and confident musician."
  },
    {
    title: "Build Confidence and Your Musical Identity",
    description:
      "Develop your unique musical voice while improving performance confidence and creativity. Our programs encourage self-expression, stage presence, and artistic growth, helping you evolve into a complete and confident musician."
  }
];




function StickySection() {
  return (
    
    <div className="">
        
        <StickyScroll content={musicSchoolContent} />
    </div>
  )
}

export default StickySection