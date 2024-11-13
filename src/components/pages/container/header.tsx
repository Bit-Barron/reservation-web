import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export const Header: React.FC = ({}) => {
  const router = useRouter();

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-violet-100/30 bg-white/80 backdrop-blur-md">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex cursor-pointer items-center space-x-2">
          <Calendar className="h-6 w-6 text-violet-600" />
          <span className="text-xl font-bold">BookFlow</span>
        </div>
        <div className="flex items-center space-x-4">
          <Button onClick={() => router.push("/features")} variant="ghost">
            Features
          </Button>
          <Button onClick={() => router.push("/pricing")} variant="ghost">
            Pricing
          </Button>
          <Button onClick={() => router.push("/about")} variant="ghost">
            About
          </Button>
        </div>
        <div className="space-x-3">
          <Button onClick={() => router.push("/login")} variant="outline">
            Login
          </Button>
          <Button
            onClick={() => router.push("/register")}
            className="bg-violet-600 hover:bg-violet-700"
          >
            Get Started
          </Button>
        </div>
      </nav>
    </header>
  );
};
