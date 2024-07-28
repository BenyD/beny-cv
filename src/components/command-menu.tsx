"use client";

import * as React from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Button } from "./ui/button";
import {
  CommandIcon,
  Menu,
  Apple,
  Monitor,
  Sun,
  Moon,
  Laptop,
} from "lucide-react";
import { useTheme } from "next-themes";

interface Props {
  links: { url: string; title: string }[];
}

export const CommandMenu = React.memo(({ links }: Props) => {
  const [open, setOpen] = React.useState(false);
  const [os, setOs] = React.useState<string>("");
  const [isMobile, setIsMobile] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  React.useEffect(() => {
    const userAgent = window.navigator.userAgent;
    if (userAgent.indexOf("Win") !== -1) setOs("Windows");
    else if (userAgent.indexOf("Mac") !== -1) setOs("MacOS");
    else if (userAgent.indexOf("Linux") !== -1) setOs("Linux");
    else setOs("Other");

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initialize the state based on the current window size
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getOsIcon = () => {
    if (isMobile) {
      return <Menu className="my-6 size-6" />;
    }
    switch (os) {
      case "MacOS":
        return <Apple className="my-6 size-6" />;
      case "Windows":
      case "Linux":
        return <Monitor className="my-6 size-6" />;
      default:
        return <CommandIcon className="my-6 size-6" />;
    }
  };

  const getCommandKey = () => {
    switch (os) {
      case "MacOS":
        return (
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>
            <span>+ </span>J
          </kbd>
        );
      case "Windows":
        return (
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 dark:border-neutral-600 dark:bg-neutral-700  dark:text-neutral-300">
            <span className="text-xs">Ctrl</span>
            <span>+ </span>J
          </kbd>
        );
      default:
        return (
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 dark:border-neutral-600 dark:bg-neutral-700  dark:text-neutral-300">
            <span className="text-xs">⌘/Ctrl</span>
            <span>+ </span>J
          </kbd>
        );
    }
  };

  return (
    <>
      <p className="fixed bottom-0 left-0 right-0 hidden border-t border-t-muted bg-white p-1 text-center text-sm text-muted-foreground print:hidden xl:block dark:border-neutral-600  dark:bg-neutral-900  dark:text-neutral-300">
        Press {getCommandKey()} to open the command menu
      </p>
      <Button
        onClick={() => setOpen((open) => !open)}
        variant="outline"
        size="icon"
        className="fixed bottom-4 right-4 flex rounded-full shadow-2xl print:hidden xl:hidden"
        aria-label="Open command menu"
      >
        {getOsIcon()}
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Actions">
            <CommandItem
              onSelect={() => {
                setOpen(false);
                window.print();
              }}
            >
              <span>Print</span>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Links">
            {links.map(({ url, title }) => (
              <CommandItem
                key={url}
                onSelect={() => {
                  setOpen(false);
                  window.open(url, "_blank");
                }}
              >
                <span>{title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Themes">
            <CommandItem onSelect={() => setTheme("system")}>
              <Monitor className="mr-2 h-4 w-4" />
              <span>System</span>
            </CommandItem>
            <CommandItem onSelect={() => setTheme("light")}>
              <Sun className="mr-2 h-4 w-4" />
              <span>Light</span>
            </CommandItem>
            <CommandItem onSelect={() => setTheme("dark")}>
              <Moon className="mr-2 h-4 w-4" />
              <span>Dark</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </CommandDialog>
    </>
  );
});

CommandMenu.displayName = "CommandMenu";
