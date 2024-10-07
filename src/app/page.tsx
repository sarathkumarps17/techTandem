import sections from "@/components/layout/Sections";
import { SectionWrapper } from "@/components/layout/SectionWrapper";

export default function Home() {
  return (
    <>
      {sections.map((section) => (
        <SectionWrapper key={section.order} id={section.id}>
          {section.component}
        </SectionWrapper>
      ))}
    </>
  );
}
