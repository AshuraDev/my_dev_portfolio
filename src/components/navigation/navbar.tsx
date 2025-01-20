"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useNavLinks } from "@/constants/nav-links";
import MenuButton from "./menu-button";
import LanguageButton from "./language-button";

const Navigation = ({ locale }: { locale: string }) => {
  //logic
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const navLinks = useNavLinks();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setIsScrolled(window.scrollY > 0);
      }
    };

    const disableScroll = (e: Event) => {
      if (isMenuOpen) {
        e.preventDefault();
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    if (isMenuOpen) {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "hidden";
        document.body.addEventListener("touchmove", disableScroll, {
          passive: false,
        });
      }
    } else {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "auto";
      }
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
      if (typeof document !== "undefined") {
        document.body.removeEventListener("touchmove", disableScroll);
      }
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={`flex justify-between items-center py-3 default-padding h-16 w-full text-foreground fixed inset-0 z-50 transition-all ${
          isScrolled
            ? "bg-white/10 backdrop-blur-lg shadow-sm"
            : "bg-transparent"
        }`}
        role="navigation"
      >
        {/* Mobile menu toggle button */}
        <MenuButton status={isMenuOpen} action={toggleMenu} />
        {/* Logo */}
        <Link
          href={"/"}
          className="font-extrabold text-xl md:text-2xl lg:text-3xl truncate"
        >
          Donald<span className="gradient-text">.dev</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center justify-center font-medium text-base gap-4 ">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={`${locale}/${link.href}`}
              className="hover:text-primary capitalize"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Language button */}
        <LanguageButton locale={locale} />
      </nav>
      {/* Mobile menu panel */}
      {isMenuOpen && (
        <div
          className="fixed top-16 inset-x-0 z-40 h-full w-full bg-black/50 backdrop-blur-sm p-6 transition-opacity duration-300 opacity-100 backdrop-fade-in lg:hidden"
          onClick={closeMenu}
        >
          <div
            className="flex flex-col bg-background text-foreground rounded-md z-50 w-full h-96 items-center justify-center font-medium text-lg gap-6 transform menu-slide-down"
            onClick={(e) => e.stopPropagation()} // Prevent close on panel click
          >
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={`${locale}/${link.href}`}
                className="hover:text-primary capitalize"
                onClick={() => closeMenu()}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
