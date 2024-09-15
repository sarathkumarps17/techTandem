"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ThemeSwitch from "../Theme/ThemeSwitch";

const navItems = [
  { name: "Story", href: "#story" },
  { name: "Works", href: "#works" },
  { name: "Skills", href: "#skills" },
  { name: "Certifications", href: "#certifications" },
  { name: "Connect", href: "#connect" },
];

export default function AppBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-b shadow-slate-200 shadow-sm dark:shadow-black bg-background text-primary sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Code className="h-6 w-6 mr-2" />
              <span className="font-bold text-xl">Tech Tandem</span>
            </Link>
          </div>
          <div className="hidden md:block md:w-[90%] text-foreground">
            <div className="ml-0 flex justify-end items-center md:space-x-0 lg:space-x-2 xl:space-x-4">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="link"
                  className="text-foreground hover:decoration-primary focus:decoration-primary focus:underline"
                  size="sm"
                  asChild
                >
                  <Link href={item.href}>{item.name}</Link>
                </Button>
              ))}
            </div>
          </div>
          <Button
            size="sm"
            className="ml-0 lg:ml-10 xl:ml-16 hidden md:block rounded-lg shadow-md bg-primary text-background hover:bg-foreground hover:text-background"
          >
            Say &quot;Hi&quot;
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
                        <Link href={item.href}>{item.name}</Link>
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
