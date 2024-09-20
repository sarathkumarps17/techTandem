"use client";

import React, { useEffect, useRef } from "react";
import { useScroll } from "@/components/layout/ScrollProvider";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
}

export function SectionWrapper({ id, children }: SectionWrapperProps) {
  const { registerSection } = useScroll();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    registerSection(id, sectionRef);
  }, [id, registerSection]);

  return (
    <section ref={sectionRef} id={id} className="w-full h-full flex-shrink-0">
      {children}
    </section>
  );
}
