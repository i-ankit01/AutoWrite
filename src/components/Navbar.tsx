'use client'

import { Github } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [scrolled , setScrolled] = useState(false)
      useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // Trigger after scrolling 10px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className= {`h-20 w-full flex items-center justify-between p-3 bg-transparent fixed z-50 ${scrolled
          ? 'bg-white/30 backdrop-blur-md shadow-md'
          : 'bg-transparent'}`}>
      <h1 className="md:text-4xl text-3xl ml-2 md:ml-15 font-bold text-black/70">AutoWrite</h1>
      <div className="flex md:gap-7 gap-2 items-center">
        <Link
          href={"https://github.com/i-ankit01"}
          className="flex items-center space-x-1 p-1 sm:p-2 rounded-lg sm:rounded-xl transition-all duration-300 text-light-tertiary hover:bg-primary/15"
        >
          <Github className="sm:w-5 sm:h-5 md:w-6 md:h-6" />

          <div className="hidden text-xs sm:inline-block">
            Proudly Open Source
          </div>
        </Link>
        <div  className=" md:mr-10">
          <Button className="cursor-pointer">Sign Up</Button>
          </div>
      </div>
    </div>
  );
}
