// components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { DialogTitle } from "@/components/ui/dialog";
import { Menu, X } from "lucide-react";
import logo from "@/app/favicon.ico";

const services = [
  { title: "Catering", href: "/catering" },
  { title: "Restaurant", href: "/restaurant" },
  { title: "Event Management", href: "/event-management" },
  { title: "Party Center", href: "/party-center" },
  { title: "Prime Namira Accessories", href: "/accessories" },
  { title: "Namira Corporation", href: "/corporation" },
];

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link href={href} legacyBehavior passHref>
    <NavigationMenuLink
      className={cn(
        navigationMenuTriggerStyle(),
        "hover:text-primary hover:bg-primary/10 transition-colors"
      )}
    >
      {children}
    </NavigationMenuLink>
  </Link>
);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-b bg-background">
      <div className="container h-16 flex items-center justify-between px-4 lg:px-8">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logo}
            alt="Namira BD"
            width={40}
            height={40}
            className="rounded-full border-2 border-primary"
          />
          <span className="text-lg font-bold hidden sm:inline-block">
            Namira BD
          </span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-2">
            {/* Services Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  {services.map((service) => (
                    <li key={service.href}>
                      <Link
                        href={service.href}
                        className="hover:bg-accent p-2 rounded block"
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Regular Links */}
            <NavigationMenuItem>
              <NavLink href="/about">About</NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavLink href="/contact">Contact</NavLink>
            </NavigationMenuItem>

            {/* Booking Button */}
            <NavigationMenuItem>
              <Button
                asChild
                variant="default"
                className="ml-2 px-6 font-semibold hover:bg-primary/90"
              >
                <Link href="/booking">Booking Now</Link>
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger className="md:hidden">
            <Menu className="h-6 w-6" />
          </SheetTrigger>

          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <VisuallyHidden>
              <DialogTitle>Mobile Navigation Menu</DialogTitle>
            </VisuallyHidden>

            <div className="flex flex-col gap-6 h-full">
              {/* Mobile Header */}
              <div className="flex items-center justify-between">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <Image
                    src={logo}
                    alt="Namira BD"
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-primary"
                  />
                </Link>
                <X
                  className="h-6 w-6 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                />
              </div>

              {/* Mobile Menu Items */}
              <div className="flex flex-col gap-2 flex-1">
                <div className="flex flex-col gap-1">
                  <h4 className="font-medium px-2 py-2">Services</h4>
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={() => setIsOpen(false)}
                      className="p-3 hover:bg-primary/10 rounded-md text-sm transition-colors"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>

                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className="p-3 hover:bg-primary/10 rounded-md"
                >
                  About
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="p-3 hover:bg-primary/10 rounded-md"
                >
                  Contact
                </Link>

                <Button
                  asChild
                  variant="default"
                  className="mt-4 mx-2 hover:bg-primary/90"
                >
                  <Link href="/booking" onClick={() => setIsOpen(false)}>
                    Booking Now
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
