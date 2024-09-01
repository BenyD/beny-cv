"use client";

import { useState, useRef } from "react";
import { Button } from "./ui/button";
import { PrinterIcon, Download, X } from "lucide-react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "./ui/drawer";

export const PrintDrawer = () => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          id="print-drawer-trigger"
          className="fixed bottom-4 right-4 size-16 rounded-full shadow-2xl print:hidden"
        >
          <PrinterIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent ref={contentRef}>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Save CV</DrawerTitle>
            <DrawerDescription>
              Choose how you want to save your CV.
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button className="w-full">
              <PrinterIcon className="mr-2 h-4 w-4" /> Print CV
            </Button>
            <Button className="w-full">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
            <DrawerClose asChild>
              <Button variant="outline" className="w-full">
                <X className="mr-2 h-4 w-4" /> Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
