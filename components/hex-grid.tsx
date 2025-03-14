"use client";
import { cn } from "@/lib/utils";

const skills = [
  { name: "Solidity", color: "cyan" },
  { name: "EVM", color: "cyan" },
  { name: "Foundry", color: "cyan" },
  { name: "React", color: "purple" },
  { name: "TS", color: "purple" },
  { name: "Next.js", color: "purple" },
  { name: "Python", color: "green" },
  { name: "AI", color: "green" },
];

export function HexGrid() {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {skills.map((skill, index) => (
        <HexSkill
          key={skill.name}
          name={skill.name}
          color={skill.color as "cyan" | "purple" | "green"}
          delay={index * 0.1}
        />
      ))}
    </div>
  );
}

interface HexSkillProps {
  name: string;
  color: "cyan" | "purple" | "green";
  delay: number;
}

function HexSkill({ name, color, delay }: HexSkillProps) {
  const colorClasses = {
    cyan: "border-cyan-700/50 text-cyan-400 hover:border-cyan-500",
    purple: "border-purple-700/50 text-purple-400 hover:border-purple-500",
    green: "border-green-700/50 text-green-400 hover:border-green-500",
  };

  return (
    <div
      className={cn(
        "hex-container border text-xs font-mono transition-all duration-300",
        colorClasses[color]
      )}
      style={{
        animationDelay: `${delay}s`,
      }}
    >
      <div className="hex-content">{name}</div>
    </div>
  );
}
