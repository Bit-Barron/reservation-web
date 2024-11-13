"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import { faqs } from "@/utils/constants/faq";
import {
  starterFeatures,
  professionalFeatures,
  enterpriseFeatures,
} from "@/utils/constants/pricing";

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-32">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-4xl font-bold tracking-tight">
          Simple, Transparent Pricing
        </h2>
        <p className="mx-auto max-w-2xl text-xl text-gray-600">
          Choose the perfect plan for your business with our straightforward
          pricing options
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        <Card className="relative flex flex-col border border-violet-100 p-8 shadow-lg transition-transform hover:scale-105">
          <div className="mb-8">
            <h3 className="mb-2 text-2xl font-bold">Starter</h3>
            <p className="mb-4 text-gray-600">Perfect for small businesses</p>
            <div className="mb-4 flex items-end border-b border-gray-100 pb-4">
              <span className="text-4xl font-bold">€29</span>
              <span className="ml-2 text-gray-600">/month</span>
            </div>
          </div>

          <ul className="mb-8 flex-grow space-y-4">
            {starterFeatures.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle2 className="mr-3 h-5 w-5 shrink-0 text-green-500" />
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>

          <Button className="w-full bg-violet-600 hover:bg-violet-700">
            Get Started
          </Button>
        </Card>

        <Card className="relative flex flex-col border-2 border-violet-600 p-8 shadow-xl transition-transform hover:scale-105">
          <Badge className="absolute -top-3 right-4 bg-violet-600 px-3 py-1 text-sm font-medium">
            Most Popular
          </Badge>
          <div className="mb-8">
            <h3 className="mb-2 text-2xl font-bold">Professional</h3>
            <p className="mb-4 text-gray-600">For growing teams</p>
            <div className="mb-4 flex items-end border-b border-gray-100 pb-4">
              <span className="text-4xl font-bold">€79</span>
              <span className="ml-2 text-gray-600">/month</span>
            </div>
          </div>

          <ul className="mb-8 flex-grow space-y-4">
            {professionalFeatures.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle2 className="mr-3 h-5 w-5 shrink-0 text-green-500" />
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>

          <Button className="w-full bg-violet-600 hover:bg-violet-700">
            Get Started
          </Button>
        </Card>

        <Card className="relative flex flex-col border border-violet-100 p-8 shadow-lg transition-transform hover:scale-105">
          <div className="mb-8">
            <h3 className="mb-2 text-2xl font-bold">Enterprise</h3>
            <p className="mb-4 text-gray-600">For large organizations</p>
            <div className="mb-4 flex items-end border-b border-gray-100 pb-4">
              <span className="text-4xl font-bold">Custom</span>
            </div>
          </div>

          <ul className="mb-8 flex-grow space-y-4">
            {enterpriseFeatures.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle2 className="mr-3 h-5 w-5 shrink-0 text-green-500" />
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>

          <Button className="w-full bg-violet-600 hover:bg-violet-700">
            Contact Sales
          </Button>
        </Card>
      </div>

      <div className="mx-auto mt-32 max-w-3xl">
        <h3 className="mb-8 text-center text-3xl font-bold">
          Frequently Asked Questions
        </h3>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-violet-100 pb-6">
              <h4 className="mb-2 text-xl font-semibold">{faq.question}</h4>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
