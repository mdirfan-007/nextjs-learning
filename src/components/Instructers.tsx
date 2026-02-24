import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";


const people = [
  {
    id: 1,
    name: "Arjun Sharma",
    designation: "Software Engineer",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Priya Patel",
    designation: "Product Manager",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 3,
    name: "Rohit Verma",
    designation: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3560&q=80",
  },
  {
    id: 4,
    name: "Sneha Iyer",
    designation: "Data Analyst",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3561&q=80",
  },
  {
    id: 5,
    name: "Vikram Mehta",
    designation: "DevOps Engineer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
];

function Instructers() {
  return (
    <div className="relative overflow-hidden h-[40rem] flex items-center justify-center">
      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <h2 className="text-3xl md:text-4xl lg:text-7xl font-bold text-center text-white mb-10">
          Meet Our Instructors
        </h2>
        <p className="text-center text-base md:text-lg text-gray-400 mb-10">
          Learn from industry experts who are passionate about teaching and
          sharing their knowledge.
        </p>
        <div className="flex flex-row mb-10 w-full items-center justify-center">
            <AnimatedTooltip items={people} />
        </div>
      </WavyBackground>
    </div>
  ); 
}

export default Instructers;
