"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const EducationSection = () => {
  const educationData = [
    {
      id: 1,
      institution: "SLIIT Northern Uni",
      program: "Software Engineering",
      degree: "University Of Bedfordshire Degree",
      period: "2024-Now",
      status: "Currently Reading",
      statusType: "current",
      image: "/assets/northen uni.jpeg",
      icon: "🎓",
    },
    {
      id: 2,
      institution: "St Johns College Jaffna",
      program: "Secondary Education",
      degree: "G.C.E Advanced Level",
      period: "2014-2022",
      status: "Completed",
      statusType: "completed",
      image: "/assets/scool.PNG",
      icon: "🏫",
    },
  ];

  return (
    <section id="education" className="min-h-screen max-w-7xl mx-auto py-12 sm:py-20 px-4 sm:px-6">
      <Link href={"#education"}>
        <h2
          className={cn(
            "bg-clip-text text-3xl sm:text-4xl text-center text-transparent md:text-7xl pt-8 sm:pt-16 mb-8 relative z-10",
            "bg-gradient-to-b from-black/80 to-black/50",
            "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50"
          )}
        >
          MY <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text">Education</span>
        </h2>
      </Link>

      <p className="text-center text-base sm:text-lg text-muted-foreground mb-12 sm:mb-16 max-w-3xl mx-auto font-mono">
        Education Is Not The Learning Of Facts, But The Training Of The Mind To Think.
      </p>

      {/* Timeline Container */}
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical Timeline Line */}
        <div className="absolute left-8 sm:left-12 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 transform md:-translate-x-1/2 z-0" />
        
        {/* Timeline Items */}
        <div className="space-y-12 sm:space-y-16">
          {educationData.map((edu, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={edu.id}
                className={cn(
                  "relative flex items-center gap-8 md:gap-12",
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 sm:left-12 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 dark:from-primary/40 dark:to-primary/20 backdrop-blur-sm border-4 border-background flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                    <span className="text-2xl sm:text-3xl">{edu.icon}</span>
                  </div>
                </div>

                {/* Spacer for desktop */}
                <div className="hidden md:block md:w-1/2" />

                {/* Content Card */}
                <div className={cn(
                  "ml-20 sm:ml-24 md:ml-0 md:w-1/2",
                  "group cursor-default"
                )}>
                  <Card 
                    className={cn(
                      "bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-2xl overflow-hidden",
                      "hover:scale-105 hover:shadow-2xl hover:shadow-primary/20",
                      "transition-all duration-300 ease-out",
                      "border-2 border-primary/20 hover:border-primary/40"
                    )}
                  >
                    {/* Image Header */}
                    <div className="relative h-32 sm:h-40 overflow-hidden bg-white dark:bg-gray-900">
                      <Image
                        src={edu.image}
                        alt={edu.institution}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      
                      {/* Status Badge on Image */}
                      <div className="absolute top-4 right-4">
                        <span
                          className={cn(
                            "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-md",
                            edu.statusType === "current"
                              ? "bg-green-500/30 text-green-100 border border-green-400/50"
                              : "bg-blue-500/30 text-blue-100 border border-blue-400/50"
                          )}
                        >
                          {edu.statusType === "current" ? "📚 " : "✅ "}
                          {edu.status}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <CardContent className="p-5 sm:p-6">
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {edu.institution}
                      </h3>
                      
                      <p className="text-base sm:text-lg font-semibold text-primary mb-2">
                        {edu.program}
                      </p>
                      
                      <p className="text-sm sm:text-base text-muted-foreground mb-4">
                        {edu.degree}
                      </p>

                      {/* Period with Icon */}
                      <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
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
                        <span>{edu.period}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-12 sm:mt-16 text-center">
        <p className="text-base sm:text-lg text-muted-foreground font-mono px-4">
          Continuous learning, endless possibilities! 🎓✨
        </p>
      </div>
    </section>
  );
};

export default EducationSection;
