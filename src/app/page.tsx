import { SectionWrapper } from "@/components/layout/SectionWrapper";
import Story from "@/components/layout/Story";
import Works from "@/components/layout/Works";

export default function Home() {
  return (
    <>
      <SectionWrapper id="story">
        <Story />
      </SectionWrapper>
      <SectionWrapper id="works">
        <Works />
      </SectionWrapper>
    </>
  );
}
