"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ThemeSwitch from "../Theme/ThemeSwitch";
import { Player } from "@lordicon/react";
import CONVERSATION from "@/assets/conversation.json";
import { useTheme } from "next-themes";
import { navItems } from "@/lib/constants";

export default function AppBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const playerRef = useRef<Player>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [conversationState, setConversationState] = useState("in-reveal");

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.play();
    }
  }, [conversationState, theme]);

  return (
    <nav className="border-b shadow-slate-200 shadow-sm dark:shadow-black bg-background text-primary sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-2 md:px-4 lg:px-8">
        <div className="flex items-center h-16">
          <div className="flex text-foreground items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Code className="h-8 w-8 mr-2" />
              <h1 className="font-bold  text-2xl">Tech Tandem</h1>
            </Link>
          </div>
          <div className="hidden md:block md:w-[90%] text-foreground">
            <div className="ml-0 flex justify-end items-center md:space-x-0 lg:space-x-2 xl:space-x-4">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="link"
                  className="group text-foreground hover:no-underline group relative px-2 py-1 transition-all duration-300 ease-in-out"
                  asChild
                >
                  <Link href={item.id}>
                    <span className="relative text-[1rem]">
                      {item.name}
                      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-500 ease-in-out group-hover:w-full group-focus:w-full"></span>
                    </span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>
          <Button
            aria-label="Open conversation"
            size="sm"
            variant="link"
            className="ml-0 lg:ml-10 text-foreground xl:ml-16 hidden md:block hover:border-primary border-foreground hover:text-primary"
            onMouseEnter={() => setConversationState("conversation-alt")}
            onMouseLeave={() => setConversationState("in-reveal")}
          >
            <Player
              colors={isDark ? "primary:#FFFFFF" : "primary:#000000"}
              icon={CONVERSATION}
              size={32}
              ref={playerRef}
              state={conversationState}
            />
          </Button>

          <div className="flex flex-auto justify-end items-center mr-1">
            <ThemeSwitch />
          </div>

          <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open main menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[240px] sm:w-[300px]">
                <div className="mt-6 flow-root">
                  <div className="flex flex-col space-y-2">
                    {navItems.map((item) => (
                      <Button
                        key={item.name}
                        variant="ghost"
                        asChild
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Link href={item.id}>{item.name}</Link>
                      </Button>
                    ))}
                    <Button className="rounded-lg shadow-md bg-primary text-background hover:bg-foreground hover:text-background">
                      Say &quot;Hi&quot;
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
