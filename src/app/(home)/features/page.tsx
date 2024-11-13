"use client";

import { Card } from "@/components/ui/card";
import {
  detailedFeatures,
  additionalFeatures,
  integrations,
} from "@/utils/constants/features";
import { Check } from "lucide-react";

export default function FeaturesPage() {
  return (
    <div className="container mx-auto px-4 py-32">
      <div className="mb-20 text-center">
        <h2 className="mb-6 text-5xl font-bold tracking-tight">
          Powerful Features
        </h2>
        <p className="mx-auto max-w-2xl text-xl text-gray-600">
          Everything you need to streamline your booking process and delight
          your customers
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2">
        {detailedFeatures.map((feature, index) => (
          <Card
            key={index}
            className="relative overflow-hidden p-8 shadow-lg transition-all hover:shadow-xl"
          >
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-violet-50/50" />

            <div className="relative">
              <div className="mb-8">
                <div className="mb-6 inline-block rounded-xl bg-violet-100 p-4">
                  {feature.icon}
                </div>
                <h3 className="mb-4 text-2xl font-bold">{feature.title}</h3>
                <p className="text-lg text-gray-600">{feature.description}</p>
              </div>

              <ul className="space-y-4">
                {feature.subFeatures.map((subFeature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="mr-3 mt-1 h-5 w-5 shrink-0 text-green-500" />
                    <span className="text-gray-600">{subFeature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>

      <div className="mx-auto mt-32 max-w-6xl">
        <h3 className="mb-12 text-center text-3xl font-bold">
          Everything You Need in One Place
        </h3>
        <div className="grid gap-8 md:grid-cols-3">
          {additionalFeatures.map((feature, index) => (
            <Card
              key={index}
              className="p-6 shadow-lg transition-transform hover:scale-105"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-violet-100">
                {feature.icon}
              </div>
              <h4 className="mb-2 text-xl font-semibold">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-32 max-w-4xl text-center">
        <h3 className="mb-6 text-3xl font-bold">Seamless Integrations</h3>
        <p className="mb-12 text-xl text-gray-600">
          Connect BookFlow with your favorite tools and services
        </p>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {integrations.map((integration, index) => (
            <div key={index} className="rounded-lg bg-white p-6 shadow-lg">
              <div className="flex h-16 items-center justify-center">
                <div className="h-12 w-12 rounded-lg bg-violet-100" />
              </div>
              <p className="mt-4 font-medium">{integration}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
