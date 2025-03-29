'use client';

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-background"
    )}>
      <DesktopNavbar />
      <MobileNavbar />
    </header>
  );
};

const items = [
  { label: "Home", link: "/" },
  { label: "About Us", link: "/about-us" },
  { label: "Services", link: "/packages" },
  { label: "Gallery", link: "/gallery" },
  { label: "Charity", link: "/charity" },
];

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="block border-separate bg-background md:hidden">
      <nav className="container flex items-center justify-between px-8">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[400px] sm:w-[540px]" side="left">
            <Link href="/">
              <Image
                src="/athaqofy-logo.svg"
                alt="athaqofy Logo"
                className="dark:invert"
                width={110}
                height={28}
                priority
              />
            </Link>
            <div className="flex flex-col gap-1 pt-4">
              {items.map((item) => (
                <NavbarItem
                  key={item.label}
                  link={item.link}
                  label={item.label}
                  onClick={() => setIsOpen((prev) => !prev)}
                />
              ))}
            </div>
          </SheetContent>
        </Sheet>
        <Link
          href="/"
          className="flex h-[80px] min-h-[60px] items-center gap-x-4"
        >
          <Image
            src="/athaqofy-logo.svg"
            alt="athaqofy Logo"
            className="dark:invert"
            width={110}
            height={28}
            priority
          />
        </Link>
        <div className="flex items-center gap-2">
          <Button asChild>
            <Link href="/packages">Book Now</Link>
          </Button>
        </div>
      </nav>
    </div>
  );
};

const DesktopNavbar = () => {
  return (
    <div className="hidden border-separate border-b bg-background md:block">
      <nav className="container flex items-center justify-between px-8">
        <div className="flex h-[70px] min-h-[60px] items-center gap-x-4">
          <Link href="/">
            <Image
              src="/athaqofy-logo.svg"
              alt="athaqofy Logo"
              className="dark:invert"
              width={110}
              height={28}
              priority
            />
          </Link>
        </div>
        <div className="flex h-full">
            {items.map((item) => (
              <NavbarItem
                key={item.label}
                link={item.link}
                label={item.label}
              />
            ))}
          </div>
        <div className="flex items-center gap-2">
          <Button asChild>
            <Link href="/reg-booking">Book Now</Link>
          </Button>
        </div>
      </nav>
    </div>
  );
};

const NavbarItem = ({
  link,
  label,
  onClick,
}: {
  link: string;
  label: string;
  onClick?: () => void;
}) => {
  const pathname = usePathname();
  const isActive = pathname === link;

  return (
    <div className="relative flex items-center">
      <Link
        href={link}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "w-full justify-start text-lg text-muted-foreground",
          isActive && "text-foreground"
        )}
        onClick={() => {
          if (onClick) onClick();
        }}
      >
        {label}
      </Link>
      {isActive && (
        <div className="absolute -bottom-[2px] left-1/2 hidden h-[2px] w-[80%] -translate-x-1/2 rounded-xl bg-foreground md:block"></div>
      )}
    </div>
  );
};

export default Header;