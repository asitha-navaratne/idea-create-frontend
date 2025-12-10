"use client";

import { useTheme } from "next-themes";

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const DarkModeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const handleToggleClick = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <div className="absolute bottom-5 left-5 md:static flex items-center space-x-4 mr-4">
      <Switch
        id="theme-toggle"
        checked={theme === "dark"}
        onCheckedChange={handleToggleClick}
      />
      <Label htmlFor="theme-toggle">Dark Mode</Label>
    </div>
  );
};

export default DarkModeToggle;
