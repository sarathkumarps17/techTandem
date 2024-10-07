"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ThemeSwitch from "../Theme/ThemeSwitch";

import { useScroll } from "./ScrollProvider";
import { useSession } from "next-auth/react";

import ChatButton from "../chat/ChatButton";
import sections from "./Sections";
import { cn } from "@/lib/utils";

export default function AppBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { scrollToSection, activeSection } = useScroll();
  const session = useSession();
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
              {sections.map((section, index) => (
                <Button
                  key={section.order}
                  variant="link"
                  className="group text-foreground hover:no-underline group relative px-2 py-1 transition-all duration-300 ease-in-out"
                  onClick={() => scrollToSection(index)}
                >
                  <span className="relative text-[1rem]">
                    {section.id.charAt(0).toUpperCase() + section.id.slice(1)}
                    <span
                      className={cn(
                        "absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-500 ease-in-out group-hover:w-full group-focus:w-full",
                        section.order === activeSection ? "w-full" : "w-0"
                      )}
                    ></span>
                  </span>
                </Button>
              ))}
            </div>
          </div>
          <div className="md:flex hidden items-center">
            <ChatButton
              sessionData={session}
              onClick={() => console.log("clicked")}
            />
          </div>

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
                    {sections.map((section, index) => (
                      <Button
                        key={section.order}
                        variant="ghost"
                        onClick={() => {
                          setIsMenuOpen(false);
                          scrollToSection(index);
                        }}
                      >
                        {section.id.charAt(0).toUpperCase() +
                          section.id.slice(1)}
                      </Button>
                    ))}
                    <ChatButton
                      sessionData={session}
                      onClick={() => console.log("clicked")}
                      isMobile
                    />
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
