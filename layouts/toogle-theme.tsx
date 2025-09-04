import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "../components/ui/button";

export const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <Button
      onClick={() => setTheme(isLight ? "dark" : "light")}
      size="sm"
      variant="ghost"
      className="w-full justify-start"
    >
      {isLight ? <Moon className="size-5" /> : <Sun className="size-5" />}
      {theme && (
        <span className="block lg:hidden">
          {theme?.charAt(0)?.toUpperCase() + theme?.slice(1)}
        </span>
      )}
    </Button>
  );
};
