"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

const ExperienceSection = () => {
  const experienceData = [
    {
      id: 1,
      company: "Code Vita",
      position: "UI & UX Engineer",
      period: "July 2025 - Present",
      status: "current",
      image: "/assets/code vita.JPG",
      description: "Designing and implementing intuitive user interfaces and creating seamless user experiences.",
      skills: ["UI Design", "UX Research", "Figma", "Prototyping", "User Testing"],
      icon: "💼",
    },
  ];

  return (
    <section id="experience" className="min-h-screen max-w-7xl mx-auto py-12 sm:py-20 px-4 sm:px-6">
      <Link href={"#experience"}>
        <h2
          className={cn(
            "bg-clip-text text-3xl sm:text-4xl text-center text-transparent md:text-7xl pt-8 sm:pt-16 mb-8 relative z-10",
            "bg-gradient-to-b from-black/80 to-black/50",
            "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50"
          )}
        >
          MY <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text">Experience</span>
        </h2>
      </Link>

      <p className="text-center text-base sm:text-lg text-muted-foreground mb-12 sm:mb-16 max-w-3xl mx-auto font-mono">
        Building products and experiences that make a difference.
      </p>

      {/* Experience Cards */}
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 gap-8 sm:gap-12">
          {experienceData.map((exp) => (
            <Card
              key={exp.id}
              className={cn(
                "group bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-2xl overflow-hidden",
                "hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20",
                "transition-all duration-300 ease-out",
                "border-2 border-primary/20 hover:border-primary/40"
              )}
            >
              <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-0">
                {/* Image Section */}
                <div className="relative h-48 md:h-auto overflow-hidden bg-white dark:bg-gray-900">
                  <Image
                    src={exp.image}
                    alt={exp.company}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-110 p-6"
                  />
                </div>

                {/* Content Section */}
                <CardContent className="p-6 sm:p-8 flex flex-col justify-center">
                  {/* Status Badge */}
                  <div className="mb-4">
                    <span
                      className={cn(
                        "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold",
                        exp.status === "current"
                          ? "bg-green-500/20 text-green-600 dark:text-green-400 border border-green-500/30"
                          : "bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/30"
                      )}
                    >
                      {exp.status === "current" ? "💼 Currently Working" : "✅ Completed"}
                    </span>
                  </div>

                  {/* Company Name */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {exp.company}
                  </h3>

                  {/* Position */}
                  <p className="text-lg sm:text-xl font-semibold text-primary mb-3">
                    {exp.position}
                  </p>

                  {/* Period */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono mb-4">
                    <svg
                      className="w-4 h-4 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span>{exp.period}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-muted-foreground mb-4">
                    {exp.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-12 sm:mt-16 text-center">
        <p className="text-base sm:text-lg text-muted-foreground font-mono px-4">
          Growing through real-world challenges! 💪✨
        </p>
      </div>
    </section>
  );
};

export default ExperienceSection;
