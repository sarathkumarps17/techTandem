"use client";

import { useEffect, useRef } from "react";

export default function ScrollWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (scrollContainerRef.current) {
        // Scroll horizontally based on vertical scroll movement
        scrollContainerRef.current.scrollLeft += e.deltaY;
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel);
    }

    // Cleanup event listener on unmount
    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth"
    >
      {children}
    </div>
  );
}
