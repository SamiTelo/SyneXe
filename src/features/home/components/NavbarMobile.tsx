"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";
import Image from "next/image";

const SHEET_SIDES = ["left"] as const;

export function SheetSide() {
  return (
    <div className="flex flex-wrap gap-2 md:hidden">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          {/* Trigger */}
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-primary/10 focus:bg-transparent active:bg-transparent"
            >
              <Menu className="h-6 w-6 text-background" />
            </Button>
          </SheetTrigger>

          {/* Content */}
          <SheetContent
            side={side}
            className="data-[side=bottom]:max-h-[50vh] data-[side=top]:max-h-[50vh] bg-background border-border"
          >
            {/* Header */}
            <SheetHeader className="mt-10 px-6">
              <SheetTitle>
                <div className="flex items-center gap-2 font-bold tracking-wider">
                  <div className="-ml-6 md:ml-0 h-10 w-50 md:h-10 md:w-50 rounded-full relative">
                    <Image
                      src="/assets/logo.svg"
                      alt="logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </SheetTitle>

              <SheetDescription className="text-muted-foreground">
                Solution & Technologies IT
              </SheetDescription>
            </SheetHeader>

            {/* Main */}
            <main>
              <div className="hidden md:flex items-center gap-8 text-sm">
                <a
                  href="#hero"
                  className="text-primary font-medium transition-colors"
                >
                  Home
                </a>

                <a
                  href="#about"
                  className="hover:text-primary transition-colors"
                >
                  A propos
                </a>

                <a
                  href="#competence"
                  className="hover:text-primary transition-colors"
                >
                  Services
                </a>

                <a
                  href="#experience"
                  className="hover:text-primary transition-colors"
                >
                  Faqs
                </a>

                <a
                  href="#project"
                  className="hover:text-primary transition-colors"
                >
                  Pricing
                </a>

                <a
                  href="#contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </div>
            </main>

            {/* Footer */}
            <SheetFooter>
              <a
                href="/assets/cv/cv-tiemtore-samuel.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full h-10 px-6 py- text-sm font-semibold text-center transition-all bg-primary text-primary-foreground hover:bg-foreground hover:text-background"
              >
                Demander un devis
              </a>

              <SheetClose asChild>
                <Button
                  variant="outline"
                  className="rounded-full h-10 px-6 py-2 border-border"
                >
                  Fermer
                </Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
