"use client";

import type React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Code,
  Shield,
  ChevronRight,
  Terminal,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MatrixRain } from "@/components/matrix-rain";
import { HexGrid } from "@/components/hex-grid";
import { TokenValue } from "@/components/token-value";
import { NetworkGraph } from "@/components/network-graph";
import { InteractiveTerminal } from "@/components/interactive-terminal";

export default function Portfolio() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <MatrixRain />
      <NetworkGraph />

      <div className="relative z-10">
        <main className="container mx-auto p-4">
          {/* Terminal Header */}
          <div className="mb-6 font-mono">
            <div className="flex items-center mb-2">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
              <div className="text-xs text-gray-500">jason@web3-security:~</div>
            </div>
            <div className="flex items-center text-cyan-400 text-sm">
              <span className="mr-2">$</span>
              <span className="typing-animation">./launch-portfolio.sh</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
            {/* Left Column - Profile */}
            <div className="lg:col-span-4 space-y-6">
              {/* Profile Card */}
              <Card className="border-purple-900/30 backdrop-blur-md bg-black/30 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-cyan-500 to-purple-600"></div>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="w-24 h-24 rounded-full border-2 border-cyan-500 p-1 mb-3 relative overflow-hidden">
                      <div className="w-full h-full rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center relative">
                        <span className="text-3xl font-bold font-mono">JS</span>
                        <div className="absolute inset-0 bg-black/20 "></div>
                      </div>
                    </div>
                    <h1 className="text-2xl font-bold mb-1 font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                      Jason Suarez
                    </h1>
                    <div className="text-gray-400 font-mono text-sm mb-3 flex items-center">
                      <Shield className="w-4 h-4 mr-1 text-cyan-400" />
                      Web3 Security Researcher
                    </div>
                    <p className="text-sm text-gray-300 mb-4 max-w-xs">
                      Securing the decentralized future, one smart contract at a
                      time.
                    </p>
                    <div className="flex justify-center space-x-3">
                      <SocialLink
                        icon={<Github size={18} />}
                        href="https://github.com/All-Khwarizmi"
                      />
                      <SocialLink
                        icon={<Twitter size={18} />}
                        href="https://twitter.com/swarecito"
                      />
                      <SocialLink
                        icon={<Linkedin size={18} />}
                        href="https://www.linkedin.com/in/jason-suarez/"
                      />
                      <SocialLink
                        icon={<Mail size={18} />}
                        href="mailto:contact@jason-suarez.com"
                      />
                    </div>
                  </div>

                  {/* Token Stats */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <TokenValue label="Audits" value="2" />
                    <TokenValue label="Vulns Found" value="12" />
                    <TokenValue label="Projects" value="4" />
                  </div>

                  {/* Skills */}
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 rounded-full bg-cyan-500 mr-2"></div>
                      <h3 className="text-sm font-mono text-cyan-400">
                        SKILLS
                      </h3>
                    </div>
                    <HexGrid />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Projects & Content */}
            <div className="lg:col-span-8 space-y-6">
              {/* Featured Projects */}
              <Card className="border-purple-900/30 backdrop-blur-md bg-black/30 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-cyan-500 to-purple-600"></div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                    <h2 className="text-lg font-mono text-purple-400">
                      FEATURED PROJECTS
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Web3ProjectCard
                      title="Security Research Portfolio"
                      description="Smart contract vulnerability research and security methodologies"
                      icon={<Shield className="w-5 h-5" />}
                      link="https://github.com/All-Khwarizmi/security-reviews"
                      tags={["Audits", "Research"]}
                      color="cyan"
                    />

                    <Web3ProjectCard
                      title="EVM Visualizer"
                      description="Interactive tool for visualizing Ethereum Virtual Machine execution"
                      icon={<Code className="w-5 h-5" />}
                      link="https://github.com/All-Khwarizmi/evm-visualization"
                      demoLink="https://evm-visualizer.vercel.app"
                      tags={["Tool", "EVM"]}
                      color="purple"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Interactive Terminal Section */}
          <Card className="border-purple-900/30 backdrop-blur-md bg-black/30 overflow-hidden mb-6">
            <div className="h-2 bg-gradient-to-r from-cyan-500 to-purple-600"></div>
            <CardContent className="p-0">
              <div className="flex items-center p-2 border-b border-gray-800">
                <Terminal className="w-4 h-4 text-cyan-400 mr-2" />
                <h2 className="text-sm font-mono text-cyan-400">
                  INTERACTIVE TERMINAL
                </h2>
              </div>
              <InteractiveTerminal />
            </CardContent>
          </Card>
        </main>

        <footer className="container mx-auto px-4 py-3 text-center text-gray-500 font-mono text-xs">
          <p>© {new Date().getFullYear()} Jason Suarez. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

interface Web3ProjectCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  demoLink?: string;
  tags: string[];
  color: "cyan" | "purple" | "green" | "amber" | "pink";
}

function Web3ProjectCard({
  title,
  description,
  icon,
  link,
  demoLink,
  tags,
  color,
}: Web3ProjectCardProps) {
  const colorClasses = {
    cyan: "from-cyan-500/20 to-cyan-900/5 border-cyan-700/30 hover:border-cyan-500/50",
    purple:
      "from-purple-500/20 to-purple-900/5 border-purple-700/30 hover:border-purple-500/50",
    green:
      "from-green-500/20 to-green-900/5 border-green-700/30 hover:border-green-500/50",
    amber:
      "from-amber-500/20 to-amber-900/5 border-amber-700/30 hover:border-amber-500/50",
    pink: "from-pink-500/20 to-pink-900/5 border-pink-700/30 hover:border-pink-500/50",
  };

  const iconColorClasses = {
    cyan: "text-cyan-600",
    purple: "text-purple-600",
    green: "text-green-600",
    amber: "text-amber-600",
    pink: "text-pink-600",
  };

  const tagColorClasses = {
    cyan: "bg-cyan-950/30 text-cyan-400 border-cyan-700/50",
    purple: "bg-purple-950/30 text-purple-400 border-purple-700/50",
    green: "bg-green-950/30 text-green-400 border-green-700/50",
    amber: "bg-amber-950/30 text-amber-400 border-amber-700/50",
    pink: "bg-pink-950/30 text-pink-400 border-pink-700/50",
  };

  return (
    <div
      className={cn(
        "rounded-lg p-4 border bg-gradient-to-br transition-all duration-300",
        colorClasses[color]
      )}
    >
      <div className="flex items-start mb-3">
        <div
          className={cn(
            "p-2 rounded-md bg-black/30 mr-3",
            iconColorClasses[color]
          )}
        >
          {icon}
        </div>
        <div>
          <h3
            className={cn("font-mono text-base mb-1", iconColorClasses[color])}
          >
            {title}
          </h3>
          <p className="text-xs text-gray-300">{description}</p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          {tags.map((tag) => (
            <Badge key={tag} className={cn("text-xs", tagColorClasses[color])}>
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex gap-2">
          {demoLink && (
            <Button
              asChild
              size="sm"
              variant="outline"
              className="h-7 px-2 text-xs border-gray-700 text-gray-300 hover:bg-gray-800/50"
            >
              <a href={demoLink} target="_blank" rel="noopener noreferrer">
                Demo
              </a>
            </Button>
          )}
          <Button
            asChild
            size="sm"
            className={cn("h-7 px-2 text-xs", iconColorClasses[color])}
          >
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              View <ChevronRight className="ml-1 h-3 w-3" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
}

function SocialLink({ icon, href }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 rounded-md flex items-center justify-center border border-purple-700/50 text-purple-400 hover:bg-purple-900/20 transition-colors"
    >
      {icon}
    </a>
  );
}
