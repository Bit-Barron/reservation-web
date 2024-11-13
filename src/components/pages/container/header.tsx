import { Button } from "@/components/ui/button";
import { Calendar, Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export const Header: React.FC = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { label: "Features", path: "/features" },
    { label: "Pricing", path: "/pricing" },
    { label: "About", path: "/about" },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-violet-100/30 bg-white/80 backdrop-blur-md">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo Section */}
        <div className="flex cursor-pointer items-center space-x-2">
          <Calendar className="h-6 w-6 text-violet-600" />
          <button
            onClick={() => router.push("/")}
            className="text-xl font-bold"
          >
            BookFlow
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-4 md:flex">
          {navItems.map((item) => (
            <Button
              key={item.path}
              onClick={() => router.push(item.path)}
              variant="ghost"
            >
              {item.label}
            </Button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button
            onClick={() => router.push("/register")}
            className="bg-violet-600 hover:bg-violet-700"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="p-2 text-violet-600 md:hidden">
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute left-0 right-0 top-16 border-b border-violet-100/30 bg-white px-4 py-4 shadow-lg md:hidden">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <Button
                key={item.path}
                onClick={() => {
                  router.push(item.path);
                  setIsMenuOpen(false);
                }}
                variant="ghost"
                className="w-full justify-start"
              >
                {item.label}
              </Button>
            ))}
            <Button
              onClick={() => {
                router.push("/register");
                setIsMenuOpen(false);
              }}
              className="w-full bg-violet-600 hover:bg-violet-700"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
