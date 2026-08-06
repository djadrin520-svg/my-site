"use client";

import { cn } from "@/lib/utils";

interface SkillsMarqueeProps {
  skills: string[];
  direction?: "left" | "right";
}

export function SkillsMarquee({
  skills,
  direction = "left",
}: SkillsMarqueeProps) {
  const items = [...skills, ...skills];

  return (
    <div className="marquee relative overflow-hidden py-3">
      <div
        className={cn(
          "marquee-track",
          direction === "right" && "marquee-track--right"
        )}
      >
        {items.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="marquee-item text-base font-medium tracking-wide whitespace-nowrap sm:text-lg lg:text-xl"
          >
            {skill}
            <span className="mx-6 text-primary/40">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
