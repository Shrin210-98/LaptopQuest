import { Moon, Sun} from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/configs/theme-provider";

export default function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <header className="flex justify-between items-center px-10 py-4">
        <div className="flex items-center">
          {/* <img src={lq_logo} className="w-[7em] h-[5em]" /> */}
          <div className="text-3xl font-extrabold">LQ</div>
          <div className="text-xl font-bold font-['Roboto',sans-serif] pl-3">
            (the Laptop Quest)
          </div>
        </div>
       
        <div className="flex gap-5">
          <Button
            variant="outline"
            size="icon"
            onClick={() =>
              theme == "dark" ? setTheme("light") : setTheme("dark")
            }
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
        {/* <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu> */}
      </header>
      <div className="border-b border-gray-300 dark:border-gray-600 mx-8"></div>
    </>
  );
}
