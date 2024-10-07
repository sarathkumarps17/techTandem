import Story from "@/components/layout/Story";
import Works from "./Works";
export interface Section {
  order: number;
  id: string;
  component: React.JSX.Element;
}

const sections: Section[] = [
  {
    order: 0,
    id: "story",
    component: <Story />,
  },
  {
    order: 1,
    id: "works",
    component: <Works />,
  },
];

export default sections;
