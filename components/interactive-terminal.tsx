"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import {
  Code,
  Mail,
  User,
  FileText,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";

type CommandResult = {
  content: React.ReactNode;
  isHtml?: boolean;
};

export function InteractiveTerminal() {
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [output, setOutput] = useState<
    { command: string; result: CommandResult }[]
  >([
    {
      command: "",
      result: {
        content: (
          <div>
            <p className="text-green-400 mb-2">
              Welcome to Jason&apos;s Web3 Security Portfolio Terminal!
            </p>
            <p className="text-gray-300 mb-2">
              Type <span className="text-cyan-400">help</span> to see available
              commands.
            </p>
          </div>
        ),
        isHtml: true,
      },
    },
  ]);
  const [inputLocked, setInputLocked] = useState(false);

  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when output changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  // Focus input when terminal is clicked
  useEffect(() => {
    const handleClick = () => {
      if (inputRef.current && !inputLocked) {
        inputRef.current.focus();
      }
    };

    const terminal = terminalRef.current;
    if (terminal) {
      terminal.addEventListener("click", handleClick);
      return () => terminal.removeEventListener("click", handleClick);
    }
  }, [inputLocked]);

  const processCommand = async (cmd: string): Promise<CommandResult> => {
    const command = cmd.trim().toLowerCase();

    // Simulate network delay for more realistic terminal feel
    await new Promise((resolve) => setTimeout(resolve, 300));

    if (command === "" || command === "cls" || command === "clear") {
      setOutput([]);
      return { content: "" };
    }

    if (command === "help") {
      return {
        content: (
          <div className="space-y-2">
            <p className="text-cyan-400 font-bold">Available Commands:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="flex items-start">
                <div className="w-16 text-purple-400">help</div>
                <div>Show available commands</div>
              </div>
              <div className="flex items-start">
                <div className="w-16 text-purple-400">about</div>
                <div>About me and my background</div>
              </div>
              <div className="flex items-start">
                <div className="w-16 text-purple-400">projects</div>
                <div>View my featured projects</div>
              </div>
              <div className="flex items-start">
                <div className="w-16 text-purple-400">skills</div>
                <div>List my technical skills</div>
              </div>
              <div className="flex items-start">
                <div className="w-16 text-purple-400">contact</div>
                <div>How to get in touch</div>
              </div>
              <div className="flex items-start">
                <div className="w-16 text-purple-400">clear</div>
                <div>Clear the terminal</div>
              </div>
              <div className="flex items-start">
                <div className="w-16 text-purple-400">all</div>
                <div>Show all information</div>
              </div>
            </div>
            <p className="text-gray-400 mt-2">
              Type any command to continue...
            </p>
          </div>
        ),
        isHtml: true,
      };
    }

    if (command === "about") {
      return {
        content: (
          <div className="space-y-3">
            <div className="flex items-center">
              <User className="text-cyan-400 mr-2 h-5 w-5" />
              <span className="text-cyan-400 font-bold">About Me</span>
            </div>
            <p className="text-gray-300">
              I specialize in identifying vulnerabilities in smart contracts and
              blockchain protocols, with a focus on securing the Web3 ecosystem
              against emerging threats.
            </p>
            <p className="text-gray-300">
              My approach combines deep technical expertise with innovative
              tooling to make blockchain technology more secure, transparent,
              and accessible to developers and users alike.
            </p>
            {/* <p className="text-gray-300">
              With over 5 years of experience in blockchain security, I've helped secure millions in TVL across various
              DeFi protocols and NFT platforms.
            </p> */}
          </div>
        ),
        isHtml: true,
      };
    }

    if (command === "projects") {
      return {
        content: (
          <div className="space-y-4">
            <div className="flex items-center">
              <Code className="text-purple-400 mr-2 h-5 w-5" />
              <span className="text-purple-400 font-bold">
                Featured Projects
              </span>
            </div>

            <div className="space-y-3">
              <div className="border border-cyan-700/30 rounded-md p-3 bg-cyan-900/10">
                <h3 className="text-cyan-400 font-mono">
                  Security Research Portfolio
                </h3>
                <p className="text-gray-300 text-sm my-1">
                  Comprehensive collection of smart contract vulnerability
                  assessments and security methodologies for blockchain
                  protocols.
                </p>
                <div className="flex gap-2 mt-2">
                  <span className="text-xs bg-cyan-950/30 text-cyan-400 border border-cyan-700/50 px-2 py-0.5 rounded">
                    Audits
                  </span>
                  <span className="text-xs bg-cyan-950/30 text-cyan-400 border border-cyan-700/50 px-2 py-0.5 rounded">
                    Research
                  </span>
                </div>
                <div className="mt-2 text-sm">
                  <a
                    href="https://github.com/All-Khwarizmi/security-reviews"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:underline"
                  >
                    github.com/All-Khwarizmi/security-reviews
                  </a>
                </div>
              </div>

              <div className="border border-purple-700/30 rounded-md p-3 bg-purple-900/10">
                <h3 className="text-purple-400 font-mono">EVM Visualizer</h3>
                <p className="text-gray-300 text-sm my-1">
                  Interactive tool for visualizing Ethereum Virtual Machine
                  execution, helping developers understand contract behavior.
                </p>
                <div className="flex gap-2 mt-2">
                  <span className="text-xs bg-purple-950/30 text-purple-400 border border-purple-700/50 px-2 py-0.5 rounded">
                    Tool
                  </span>
                  <span className="text-xs bg-purple-950/30 text-purple-400 border border-purple-700/50 px-2 py-0.5 rounded">
                    EVM
                  </span>
                </div>
                <div className="mt-2 text-sm">
                  <a
                    href="https://github.com/All-Khwarizmi/evm-visualization"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:underline"
                  >
                    github.com/All-Khwarizmi/evm-visualization
                  </a>
                  <span className="mx-2">|</span>
                  <a
                    href="https://evm-visualizer.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:underline"
                  >
                    Live Demo
                  </a>
                </div>
              </div>

              <div className="border border-green-700/30 rounded-md p-3 bg-green-900/10">
                <h3 className="text-green-400 font-mono">AgentDex</h3>
                <p className="text-gray-300 text-sm my-1">
                  AI-powered trading agent system for decentralized exchanges,
                  featuring secure architecture and advanced trading strategies.
                </p>
                <div className="flex gap-2 mt-2">
                  <span className="text-xs bg-green-950/30 text-green-400 border border-green-700/50 px-2 py-0.5 rounded">
                    DeFi
                  </span>
                  <span className="text-xs bg-green-950/30 text-green-400 border border-green-700/50 px-2 py-0.5 rounded">
                    AI
                  </span>
                </div>
                <div className="mt-2 text-sm">
                  <a
                    href="https://github.com/All-Khwarizmi/agent-dex"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:underline"
                  >
                    github.com/All-Khwarizmi/agent-dex
                  </a>
                </div>
              </div>
            </div>
          </div>
        ),
        isHtml: true,
      };
    }

    if (command === "skills") {
      return {
        content: (
          <div className="space-y-4">
            <div className="flex items-center">
              <FileText className="text-green-400 mr-2 h-5 w-5" />
              <span className="text-green-400 font-bold">Technical Skills</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <h3 className="text-cyan-400 font-mono border-b border-cyan-900/50 pb-1">
                  Security & Blockchain
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Solidity</li>
                  <li>Smart Contract Auditing</li>
                  <li>EVM Architecture</li>
                  <li>Foundry & Hardhat</li>
                  <li>Formal Verification</li>
                  <li>Security Research</li>
                  <li>Slither & Mythril</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-purple-400 font-mono border-b border-purple-900/50 pb-1">
                  Development
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>TypeScript</li>
                  <li>React & Next.js</li>
                  <li>Node.js</li>
                  <li>Web3.js & ethers.js</li>
                  <li>GraphQL</li>
                  <li>Tailwind CSS</li>
                  <li>Rust (learning)</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-green-400 font-mono border-b border-green-900/50 pb-1">
                  AI & Data
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Python</li>
                  <li>TensorFlow</li>
                  <li>LLM Integration</li>
                  <li>Data Analysis</li>
                  <li>Agent Systems</li>
                  <li>ML for Security</li>
                </ul>
              </div>
            </div>
          </div>
        ),
        isHtml: true,
      };
    }

    if (command === "contact") {
      return {
        content: (
          <div className="space-y-3">
            <div className="flex items-center">
              <Mail className="text-amber-400 mr-2 h-5 w-5" />
              <span className="text-amber-400 font-bold">
                Contact Information
              </span>
            </div>

            <p className="text-gray-300">
              Interested in collaborating on a project, need a security audit,
              or just want to chat about Web3 security? Reach out through any of
              these channels:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
              <a
                href="https://github.com/All-Khwarizmi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-purple-400 hover:underline"
              >
                <Github className="mr-2 h-4 w-4" />
                github.com/All-Khwarizmi
              </a>

              <a
                href="https://twitter.com/swarecito"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-purple-400 hover:underline"
              >
                <Twitter className="mr-2 h-4 w-4" />
                twitter.com/swarecito
              </a>

              <a
                href="https://www.linkedin.com/in/jason-suarez/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-purple-400 hover:underline"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                linkedin.com/in/jason-suarez
              </a>

              <a
                href="mailto:contact@jason-suarez.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-purple-400 hover:underline"
              >
                <Mail className="mr-2 h-4 w-4" />
                contact@jason-suarez.com
              </a>
            </div>

            <div className="mt-4 p-3 border border-amber-700/30 rounded-md bg-amber-900/10">
              <p className="text-amber-400 font-mono mb-1">
                Security Audit Requests
              </p>
              <p className="text-gray-300 text-sm">
                For security audit inquiries, please include project details,
                timeline, and scope in your initial message.
              </p>
            </div>
          </div>
        ),
        isHtml: true,
      };
    }

    if (command === "all") {
      // Process multiple commands in sequence
      setInputLocked(true);

      const commands = ["about", "projects", "skills", "contact"];

      for (const cmd of commands) {
        setOutput((prev) => [
          ...prev,
          {
            command: cmd,
            result: { content: `Processing ${cmd}...` },
          },
        ]);

        await new Promise((resolve) => setTimeout(resolve, 500));

        const result = await processCommand(cmd);

        setOutput((prev) => {
          const newOutput = [...prev];
          newOutput[newOutput.length - 1] = {
            command: cmd,
            result,
          };
          return newOutput;
        });

        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      setInputLocked(false);
      return { content: "" };
    }

    return {
      content: (
        <div>
          <p className="text-red-400">Command not found: {command}</p>
          <p className="text-gray-300">
            Type <span className="text-cyan-400">help</span> to see available
            commands.
          </p>
        </div>
      ),
      isHtml: true,
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (input.trim() === "" || inputLocked) return;

    const command = input;
    setInput("");
    setCommandHistory((prev) => [command, ...prev]);
    setHistoryIndex(-1);

    setOutput((prev) => [
      ...prev,
      {
        command,
        result: { content: "Processing..." },
      },
    ]);

    const result = await processCommand(command);

    setOutput((prev) => {
      const newOutput = [...prev];
      newOutput[newOutput.length - 1] = {
        command,
        result,
      };
      return newOutput;
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (inputLocked) return;

    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = Math.min(historyIndex + 1, commandHistory.length - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      // Simple autocomplete for commands
      const commands = [
        "help",
        "about",
        "projects",
        "skills",
        "contact",
        "clear",
        "all",
      ];
      const matchingCommand = commands.find((cmd) =>
        cmd.startsWith(input.toLowerCase())
      );
      if (matchingCommand) {
        setInput(matchingCommand);
      }
    }
  };

  return (
    <div
      ref={terminalRef}
      className="bg-black font-mono text-sm text-gray-300 p-4 h-[400px] overflow-y-auto"
    >
      {output.map((item, index) => (
        <div key={index} className="mb-4">
          {item.command && (
            <div className="flex items-center mb-1">
              <span className="text-green-400 mr-2">$</span>
              <span className="text-cyan-400">{item.command}</span>
            </div>
          )}
          <div
            className={cn("pl-4", { "terminal-output": !item.result.isHtml })}
          >
            {item.result.isHtml ? (
              item.result.content
            ) : (
              <pre>{item.result.content}</pre>
            )}
          </div>
        </div>
      ))}

      <form onSubmit={handleSubmit} className="flex items-center">
        <span className="text-green-400 mr-2">$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={inputLocked}
          className="flex-1 bg-transparent outline-none text-cyan-400 caret-cyan-400"
          autoComplete="off"
          spellCheck="false"
        />
      </form>
    </div>
  );
}
