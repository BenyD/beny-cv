"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { PrinterIcon, Download, X, Loader2 } from "lucide-react";
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
import html2pdf from "html2pdf.js";

export const PrintDrawer = () => {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleBeforePrint = () => {
      if (contentRef.current) {
        contentRef.current.style.display = "none";
      }
    };

    const handleAfterPrint = () => {
      if (contentRef.current) {
        contentRef.current.style.display = "";
      }
    };

    window.addEventListener("beforeprint", handleBeforePrint);
    window.addEventListener("afterprint", handleAfterPrint);

    return () => {
      window.removeEventListener("beforeprint", handleBeforePrint);
      window.removeEventListener("afterprint", handleAfterPrint);
    };
  }, []);

  const handlePrint = () => {
    setOpen(false);
    setTimeout(() => {
      window.print();
    }, 100);
  };

  const handleDownloadPDF = async () => {
    setIsGeneratingPDF(true);
    setOpen(false);

    setTimeout(async () => {
      const element = document.body;
      const opt = {
        margin: 10,
        filename: "CV.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          logging: true,
          allowTaint: true,
          foreignObjectRendering: true,
        },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };

      try {
        // Hide elements that shouldn't be in the PDF
        const elementsToHide = document.querySelectorAll(".print\\:hidden");
        elementsToHide.forEach(
          (el) => ((el as HTMLElement).style.display = "none"),
        );

        // Generate PDF
        await html2pdf().set(opt).from(element).save();
      } catch (error) {
        console.error("Error generating PDF:", error);
        // You might want to show an error message to the user here
      } finally {
        // Restore hidden elements
        const elementsToRestore = document.querySelectorAll(".print\\:hidden");
        elementsToRestore.forEach(
          (el) => ((el as HTMLElement).style.display = ""),
        );

        setIsGeneratingPDF(false);
      }
    }, 100);
  };

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
            <Button onClick={handlePrint} className="w-full">
              <PrinterIcon className="mr-2 h-4 w-4" /> Print CV
            </Button>
            <Button
              onClick={handleDownloadPDF}
              className="w-full"
              disabled={isGeneratingPDF}
            >
              {isGeneratingPDF ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Download className="mr-2 h-4 w-4" />
              )}
              {isGeneratingPDF ? "Generating PDF..." : "Download CV"}
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
