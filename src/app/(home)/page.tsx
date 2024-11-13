"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Calendar,
  Clock,
  Users,
  BarChart,
  ArrowRight,
  Check,
  Star,
  Zap,
  Shield,
  Globe,
  ArrowDownCircle,
  PlayCircle,
} from "lucide-react";

import { Header } from "@/components/pages/container/header";
import { FeatureCard } from "@/components/pages/home/feature-card";
import { StatsCard } from "@/components/pages/home/stats-card";
import { features, testimonials } from "@/utils/constants/home";

export default function HomePage() {
  const [email, setEmail] = useState("");

  const scrollToFeatures = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-violet-50 via-white to-violet-50">
      <Header />

      <div className="container relative mx-auto px-4 pb-16 pt-32">
        <div className="pointer-events-none absolute left-0 right-0 top-0 -z-10">
          <div className="absolute -left-64 -top-32 h-[500px] w-[500px] rounded-full bg-violet-100/20 blur-3xl" />
          <div className="absolute -right-64 top-32 h-[500px] w-[500px] rounded-full bg-violet-100/30 blur-3xl" />
        </div>

        <div className="relative">
          <Badge className="animate-fade-in-up absolute -top-4 left-1/4 border-green-200 bg-green-100 text-green-700">
            <Check className="mr-1 h-4 w-4" /> Smart Scheduling
          </Badge>
          <Badge className="animate-fade-in-up absolute right-1/4 top-32 border-blue-200 bg-blue-100 text-blue-700 delay-100">
            <Users className="mr-1 h-4 w-4" /> Team Management
          </Badge>
          <Badge className="animate-fade-in-up absolute left-1/3 top-48 border-violet-200 bg-violet-100 text-violet-700 delay-200">
            <Star className="mr-1 h-4 w-4" /> 4.9/5 Rating
          </Badge>
        </div>

        <div className="mx-auto max-w-4xl space-y-8 text-center">
          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            <span className="text-violet-600">Streamline</span> Your
            <br />
            Booking Experience
          </h1>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed text-gray-600">
            Powerful reservation system that helps you manage bookings, optimize
            schedules, and delight your customers with a seamless booking
            experience.
          </p>

          <div className="space-y-4">
            <div className="mx-auto flex max-w-md gap-2 rounded-full bg-white p-2 shadow-lg">
              <Input
                type="email"
                placeholder="Enter your email"
                className="border-0 text-base focus-visible:ring-0"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button className="rounded-full bg-violet-600 px-6 hover:bg-violet-700">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-gray-500">
              Free 14-day trial • No credit card required
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-8">
            <Badge variant="outline" className="px-4 py-2">
              <Shield className="mr-2 h-4 w-4" /> Enterprise-grade security
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              <Globe className="mr-2 h-4 w-4" /> Used in 100+ countries
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              <Zap className="mr-2 h-4 w-4" /> 99.9% uptime
            </Badge>
          </div>
        </div>

        <button
          onClick={scrollToFeatures}
          className="mx-auto mt-16 flex animate-bounce items-center text-gray-500 hover:text-violet-600"
        >
          <ArrowDownCircle className="h-6 w-6" />
        </button>
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-violet-50/30" />
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            <StatsCard
              title="Today's Bookings"
              value="24"
              subtitle="↑ 12% from yesterday"
              icon={<Calendar className="h-5 w-5 text-violet-600" />}
            />
            <StatsCard
              title="Average Duration"
              value="45m"
              subtitle="Per appointment"
              icon={<Clock className="h-5 w-5 text-violet-600" />}
            />
            <StatsCard
              title="Revenue"
              value="€1,280"
              subtitle="↑ 8% this week"
              icon={<BarChart className="h-5 w-5 text-violet-600" />}
            />
          </div>
        </div>
      </div>

      <div id="features" className="container mx-auto px-4 py-32">
        <div className="mb-16 text-center">
          <Badge className="mb-4 px-4 py-2">
            <Zap className="mr-2 h-4 w-4" /> Powerful Features
          </Badge>
          <h2 className="mb-6 text-4xl font-bold">
            Everything You Need to Succeed
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Streamline your booking process with our comprehensive suite of
            features
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>

      <div className="bg-violet-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <Badge className="mb-4 px-4 py-2">
                <Star className="mr-2 h-4 w-4" /> Trusted by Thousands
              </Badge>
              <h2 className="mb-6 text-3xl font-bold">
                Join 10,000+ Happy Customers
              </h2>
              <p className="text-xl text-gray-600">
                See why businesses love BookFlow
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6">
                  <div className="mb-4 flex items-center space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="mb-4 text-gray-600">{testimonial.content}</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-violet-600 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-bold">
              Ready to Transform Your Booking Experience?
            </h2>
            <p className="mb-8 text-xl text-violet-100">
              Join thousands of businesses already using BookFlow to streamline
              their operations.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-white text-violet-600 hover:bg-gray-100"
              >
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-violet-700"
              >
                <PlayCircle className="mr-2 h-5 w-5" /> Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
