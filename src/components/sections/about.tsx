"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen max-w-7xl mx-auto py-12 sm:py-20 px-4 sm:px-6">
      <Link href={"#about"}>
        <h2
          className={cn(
            "bg-clip-text text-3xl sm:text-4xl text-center text-transparent md:text-7xl pt-8 sm:pt-16 mb-12 sm:mb-20 relative z-10",
            "bg-gradient-to-b from-black/80 to-black/50",
            "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50"
          )}
        >
          ABOUT ME
        </h2>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-[3fr_7fr] gap-6 sm:gap-8 md:gap-12 items-stretch">
        {/* Image Card - 30% */}
        <Card className="bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
          <CardContent className="p-0 h-full">
            <div className="relative w-full aspect-[3/4] md:aspect-auto md:h-full">
              <Image
                src="/assets/profile.jpg"
                alt="Luxaprathan Nagaselvam"
                fill
                className="object-cover"
                priority
              />
            </div>
          </CardContent>
        </Card>

        {/* About Content - 70% */}
        <div className="space-y-4 sm:space-y-6 z-10 h-full flex flex-col">
          <Card className="bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 border-2 border-primary/20 flex-1 h-full">
            <CardContent className="p-0 space-y-3 sm:space-y-4 h-full flex flex-col justify-center">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Hey there! I&apos;m Luxaprathan! 👋
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                  Software Engineering Student at SLIIT | UI & UX Engineer Intern at Code Vita
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base leading-relaxed">
                <p>
                  I&apos;m a passionate <span className="font-semibold text-primary">Software Engineering student at SLIIT</span>, 
                  currently in <span className="font-semibold">Year 2 Semester 1</span>. I&apos;m all about turning ideas into 
                  reality through clean code, creative problem-solving, and modern tech.
                </p>

                <p>
                  Whether it&apos;s <span className="font-semibold text-primary">building user-friendly apps, optimizing databases, 
                  or exploring new frameworks</span>, I love getting my hands dirty in development.
                </p>

                <p className="hidden sm:block">
                  Currently, I&apos;m interning at <span className="font-semibold text-primary">Code Vita</span> as a 
                  <span className="font-semibold"> UI & UX Engineer</span>, where I&apos;m gaining hands-on experience in 
                  creating intuitive and visually appealing user interfaces.
                </p>

                <div className="pt-2 sm:pt-4">
                  <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-primary">What I Do</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      <span className="text-xs sm:text-sm">UI/UX Design</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      <span className="text-xs sm:text-sm">Frontend Development</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      <span className="text-xs sm:text-sm">Database Optimization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      <span className="text-xs sm:text-sm">Full-Stack Development</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      <span className="text-xs sm:text-sm">Problem Solving</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      <span className="text-xs sm:text-sm">Modern Frameworks</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-12 sm:mt-16 text-center">
        <p className="text-base sm:text-lg text-muted-foreground font-mono px-4">
          Let's build something amazing together! 🚀
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
