import { Menu } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./mode-toggle";
import { buttonVariants } from "./ui/button";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#categories",
    label: "Categories",
  },
  {
    href: "#pricing",
    label: "Pricing",
  },
  {
    href: "/contractors",
    label: "Contractor Directory",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b-[1px] bg-white dark:border-b-slate-700 dark:bg-background">
      <div className="container flex min-h-20 items-center justify-between px-4">
        <div className="font-bold flex">
            <a
              rel="noreferrer noopener"
              href="/"
              className="ml-2 flex min-h-11 items-center font-bold text-xl"
              aria-label="Niagara Home Improvement home"
            >
              <img
                src="/media/logo.webp"
                alt="Niagara Home Improvement Logo"
                className="h-10 max-w-full mr-2 object-contain"
              />
            </a>
          </div>

          {/* mobile */}
          <div className="flex xl:hidden items-center gap-1">
            <ModeToggle />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger
                className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-input bg-background"
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5" />
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                    Niagara Home Improvement
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({
                        variant: "ghost",
                        size: "lg",
                      })}
                    >
                      {label}
                    </a>
                  ))}
                  <a
                    rel="noreferrer noopener"
                    href="/signup"
                    className={`min-h-11 w-[140px] border ${buttonVariants({
                      variant: "secondary",
                      size: "lg",
                    })}`}
                  >
                    Submit Listing
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* desktop */}
          <nav
            className="hidden xl:flex items-center gap-2"
            aria-label="Primary navigation"
          >
            {routeList.map((route: RouteProps) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={route.label}
                className={`min-h-11 text-[17px] ${buttonVariants({
                  variant: "ghost",
                  size: "lg",
                })}`}
              >
                {route.label}
              </a>
            ))}
          </nav>

          <div className="hidden xl:flex gap-2">
            <a
              rel="noreferrer noopener"
              href="/signup"
              className={`min-h-11 border ${buttonVariants({ variant: "secondary", size: "lg" })}`}
            >
              Submit Listing
            </a>

            <ModeToggle />
          </div>
      </div>
    </header>
  );
};
