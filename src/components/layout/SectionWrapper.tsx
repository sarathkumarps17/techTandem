"use client";
import React, { useEffect } from "react";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
}

export function SectionWrapper({ id, children }: SectionWrapperProps) {
  return (
    <section id={id} className="snap-center w-full flex-shrink-0">
      {children}
    </section>
  );
}
