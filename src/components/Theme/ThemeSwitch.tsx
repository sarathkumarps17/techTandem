"use client";
import { Sun, Moon } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";
import classNames from "classnames";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const isLight = theme === "light";
  const toggleTheme = () => (isLight ? setTheme("dark") : setTheme("light"));
  return (
    <div className="flex">
      <div className="cursor-pointer" onClick={toggleTheme}>
        <Sun
          color="black"
          className={classNames(
            isLight ? "hidden" : "relative left-5 top-[2px] pl-2 z-10 scale-75"
          )}
        />
        <Moon
          color="black"
          className={classNames(
            !isLight ? "hidden" : "relative left-9 z-10 top-[2px] pl-2 scale-75"
          )}
        />
      </div>
      <Switch
        className="mt-1 bg-primary-foreground"
        checked={!isLight}
        onCheckedChange={toggleTheme}
        aria-label="Toggle italic"
      ></Switch>
    </div>
  );
}
