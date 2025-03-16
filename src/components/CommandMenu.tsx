"use client";

import * as React from "react";
import { Settings, User, FileText, Home, Mail, Globe } from "lucide-react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Command as CommandPrimitive } from "cmdk";
import { useCursor } from "@/components/CursorContext";

import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

// Import the same icons used in the Navbar
const Icons = {
  github: (props: React.HTMLAttributes<SVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>GitHub</title>
      <path
        fill="currentColor"
        d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
      />
    </svg>
  ),
  linkedin: (props: React.HTMLAttributes<SVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>LinkedIn</title>
      <path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  ),
  x: (props: React.HTMLAttributes<SVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>X</title>
      <path
        fill="currentColor"
        d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
      />
    </svg>
  ),
  email: (props: React.HTMLAttributes<SVGElement>) => <Mail {...props} />,
};

// Custom command dialog to fix blurry rendering
const CustomCommandDialog = ({
  open,
  setOpen,
  children,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="!fixed !left-1/2 !top-1/2 !-ml-[225px] !-mt-[200px] !w-[450px] !translate-x-0 !translate-y-0 !transform-none overflow-hidden !rounded-lg !border !bg-background p-0 shadow-lg dark:!border-neutral-800 dark:!bg-neutral-900">
        <CommandPrimitive className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </CommandPrimitive>
      </DialogContent>
    </Dialog>
  );
};

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);
  const { theme, setTheme } = useTheme();
  const [isMac, setIsMac] = React.useState(false);
  const { showCustomCursor, toggleCustomCursor } = useCursor();

  React.useEffect(() => {
    // Check if user is on Mac
    setIsMac(navigator.userAgent.indexOf("Mac") !== -1);

    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <CustomCommandDialog open={open} setOpen={setOpen}>
        <CommandInput
          placeholder="Type a command or search..."
          className="border-none focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-neutral-900 dark:text-neutral-200 dark:placeholder:text-neutral-400"
        />
        <CommandList className="max-h-[300px] overflow-y-auto dark:bg-neutral-900">
          <CommandEmpty className="py-6 text-center text-sm dark:text-neutral-400">
            No results found.
          </CommandEmpty>
          <CommandGroup
            heading="Navigation"
            className="px-2 py-1.5 text-xs font-medium dark:text-neutral-400"
          >
            <CommandItem
              onSelect={() => (window.location.href = "#")}
              className="flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none dark:text-neutral-200 dark:aria-selected:bg-neutral-800 dark:data-[selected=true]:bg-neutral-800"
            >
              <Home className="mr-2 h-4 w-4" />
              <span>Home</span>
            </CommandItem>
            <CommandItem
              onSelect={() => (window.location.href = "https://www.beny.one")}
              className="flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none dark:text-neutral-200 dark:aria-selected:bg-neutral-800 dark:data-[selected=true]:bg-neutral-800"
            >
              <Globe className="mr-2 h-4 w-4" />
              <span>Personal Site</span>
              <CommandShortcut className="ml-auto text-xs tracking-widest text-muted-foreground dark:text-neutral-500">
                ↗
              </CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator className="-mx-1 h-px bg-border dark:bg-neutral-800" />
          <CommandGroup
            heading="Social"
            className="px-2 py-1.5 text-xs font-medium dark:text-neutral-400"
          >
            <CommandItem
              onSelect={() => window.open("https://github.com/BenyD", "_blank")}
              className="flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none dark:text-neutral-200 dark:aria-selected:bg-neutral-800 dark:data-[selected=true]:bg-neutral-800"
            >
              <Icons.github className="mr-2 h-4 w-4" />
              <span>GitHub</span>
              <CommandShortcut className="ml-auto text-xs tracking-widest text-muted-foreground dark:text-neutral-500">
                ↗
              </CommandShortcut>
            </CommandItem>
            <CommandItem
              onSelect={() =>
                window.open("https://www.linkedin.com/in/benydishon/", "_blank")
              }
              className="flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none dark:text-neutral-200 dark:aria-selected:bg-neutral-800 dark:data-[selected=true]:bg-neutral-800"
            >
              <Icons.linkedin className="mr-2 h-4 w-4" />
              <span>LinkedIn</span>
              <CommandShortcut className="ml-auto text-xs tracking-widest text-muted-foreground dark:text-neutral-500">
                ↗
              </CommandShortcut>
            </CommandItem>
            <CommandItem
              onSelect={() => window.open("https://x.com/benydishon", "_blank")}
              className="flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none dark:text-neutral-200 dark:aria-selected:bg-neutral-800 dark:data-[selected=true]:bg-neutral-800"
            >
              <Icons.x className="mr-2 h-4 w-4" />
              <span>X</span>
              <CommandShortcut className="ml-auto text-xs tracking-widest text-muted-foreground dark:text-neutral-500">
                ↗
              </CommandShortcut>
            </CommandItem>
            <CommandItem
              onSelect={() =>
                (window.location.href = "mailto:benydishon@gmail.com")
              }
              className="flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none dark:text-neutral-200 dark:aria-selected:bg-neutral-800 dark:data-[selected=true]:bg-neutral-800"
            >
              <Icons.email className="mr-2 h-4 w-4" />
              <span>Email</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator className="-mx-1 h-px bg-border dark:bg-neutral-800" />
          <CommandGroup
            heading="Theme"
            className="px-2 py-1.5 text-xs font-medium dark:text-neutral-400"
          >
            <CommandItem
              onSelect={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none dark:text-neutral-200 dark:aria-selected:bg-neutral-800 dark:data-[selected=true]:bg-neutral-800"
            >
              {theme === "dark" ? (
                <SunIcon className="mr-2 h-4 w-4" />
              ) : (
                <MoonIcon className="mr-2 h-4 w-4" />
              )}
              <span>Toggle Theme</span>
              <CommandShortcut className="ml-auto text-xs tracking-widest text-muted-foreground dark:text-neutral-500">
                {theme === "dark" ? "☀️" : "🌙"}
              </CommandShortcut>
            </CommandItem>
            <CommandItem
              onSelect={toggleCustomCursor}
              className="flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none dark:text-neutral-200 dark:aria-selected:bg-neutral-800 dark:data-[selected=true]:bg-neutral-800"
            >
              {showCustomCursor ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <path d="m13 13 5.4-5.4L12 2l-1 4-4 1 5.4 5.4Z" />
                  <path d="m13 13-5.5 5.5 3 1 1 3 5.5-5.5" />
                  <path d="m13 13 5 5" />
                  <path d="M2 21 10 13" />
                </svg>
              )}
              <span>Custom Cursor</span>
              <CommandShortcut className="ml-auto text-xs tracking-widest text-muted-foreground dark:text-neutral-500">
                {showCustomCursor ? "ON" : "OFF"}
              </CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CustomCommandDialog>
    </>
  );
}
