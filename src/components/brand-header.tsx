"use client";

import { InfoIcon, DotsThreeIcon, MagnifyingGlassIcon, XIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSidebar } from "@/components/ui/sidebar";
import { useMountedAfter } from "@/hooks/useMountedAfter";
import { cn } from "@/lib/utils";

import { Logo } from "@/components/logo";

interface NavLink {
  href: string;
  label: string;
}

interface BrandHeaderProps {
  /** Marketing mode: pass nav links to render simple sticky scroll-aware header */
  links?: NavLink[];
  /** Marketing mode: brand label shown when links present */
  brandLabel?: string;
  /** Marketing mode: brand href, defaults to "/" */
  brandHref?: string;
}

export function BrandHeader({ links, brandLabel, brandHref = "/" }: BrandHeaderProps) {
  // Marketing mode: links passed → scroll-aware nav header
  if (links) {
    return <MarketingHeader links={links} label={brandLabel ?? ""} href={brandHref} />;
  }

  // App-shell mode: no links → sidebar toggle + search + avatar
  return <AppShellHeader />;
}

function MarketingHeader({
  links,
  label,
  href,
}: {
  links: NavLink[];
  label: string;
  href: string;
}) {
  const [scrolled, setScrolled] = useState(false);
  const mounted = useMountedAfter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "h-12 border-b bg-background/80 backdrop-blur-sm"
          : "h-16 border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-8 md:px-10 lg:px-4">
        <Link
          href={href}
          data-loaded={mounted}
          className="nav-logo scroll-m-20 text-balance font-extrabold tracking-tight"
        >
          {label}
        </Link>
        <nav className="flex items-center gap-3">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-foreground hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

function AppShellHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { state, toggleSidebar } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <header className="fixed z-50 w-full border-border border-b bg-background">
      <div className="flex h-16 items-center justify-between px-2">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="hidden size-8 md:flex"
            onClick={toggleSidebar}
          >
            {isCollapsed ? <DotsThreeIcon className="size-4" /> : <XIcon className="size-4" />}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="size-8 md:hidden"
            onClick={toggleSidebar}
          >
            <DotsThreeIcon className="size-4" />
          </Button>

          <Link href="/" className="flex items-center">
            <Logo />
          </Link>
        </div>

        <div className="hidden items-center space-x-1 md:flex">
          {isSearchOpen ? (
            <div className="relative">
              <Input
                type="text"
                placeholder="Search"
                className="h-9 w-64 pl-9"
                autoFocus
                onBlur={() => setIsSearchOpen(false)}
              />
              <MagnifyingGlassIcon className="absolute top-2.5 left-3 size-4 text-foreground" />
            </div>
          ) : (
            <Button
              variant="ghost"
              size="sm"
              className="text-foreground"
              onClick={() => setIsSearchOpen(true)}
            >
              <MagnifyingGlassIcon   className="mr-2 size-4" />
              Search
            </Button>
          )}

          <Button variant="ghost" size="sm" className="text-foreground">
            <InfoIcon className="mr-2 size-4" />
            Support
          </Button>

          <Button variant="ghost" size="sm" className="text-foreground">
            Upgrade Trial
          </Button>

          <Avatar className="size-8">
            <AvatarFallback className="bg-primary text-primary-foreground">
              <span className="text-xs">ME</span>
            </AvatarFallback>
          </Avatar>
        </div>

        <div className="flex gap-2 md:hidden">
          <Button variant="ghost" size="sm" className="text-foreground">
            <MagnifyingGlassIcon className="h-5 w-5" />
          </Button>
          <Avatar className="size-8">
            <AvatarFallback className="bg-primary text-primary-foreground">
              <span className="text-xs">ME</span>
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}