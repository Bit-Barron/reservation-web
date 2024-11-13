"use client";

import { Card } from "@/components/ui/card";
import { stats, values, team } from "@/utils/constants/about";
import { Users } from "lucide-react";

export default function AboutSection() {
  return (
    <div className="container mx-auto px-4 py-32">
      <div className="mb-20 text-center">
        <h2 className="mb-6 text-5xl font-bold tracking-tight">
          About BookFlow
        </h2>
        <p className="mx-auto max-w-2xl text-xl text-gray-600">
          Revolutionizing the way businesses manage appointments and deliver
          exceptional experiences
        </p>
      </div>

      <div className="mx-auto max-w-4xl">
        <div className="mb-20">
          <h3 className="mb-6 text-3xl font-bold">Our Story</h3>
          <div className="space-y-6 text-lg leading-relaxed text-gray-600">
            <p>
              Founded in 2022, BookFlow emerged from a simple observation:
              businesses needed a better way to manage their appointments and
              schedules. What started as a simple scheduling tool has evolved
              into a comprehensive booking platform used by thousands of
              businesses worldwide.
            </p>
            <p>
              Today, were proud to help businesses of all sizes streamline their
              booking processes, save time, and deliver exceptional customer
              experiences. Our platform has become the trusted choice for
              businesses looking to modernize their scheduling systems.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <div className="grid gap-8 md:grid-cols-3">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="overflow-hidden p-6 text-center shadow-lg transition-transform hover:scale-105"
              >
                <div className="relative">
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-violet-50" />
                  <h4 className="relative mb-2 text-4xl font-bold text-violet-600">
                    {stat.value}
                  </h4>
                  <p className="relative text-gray-600">{stat.label}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h3 className="mb-8 text-3xl font-bold">Our Values</h3>
          <div className="grid gap-8 md:grid-cols-2">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-8 shadow-lg transition-transform hover:scale-105"
              >
                <div className="mb-6 flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-violet-100">
                    {value.icon}
                  </div>
                  <h4 className="ml-4 text-xl font-semibold">{value.title}</h4>
                </div>
                <p className="leading-relaxed text-gray-600">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="mb-8 text-3xl font-bold">Meet the Team</h3>
          <div className="grid gap-8 md:grid-cols-3">
            {team.map((member, index) => (
              <Card
                key={index}
                className="overflow-hidden p-8 text-center shadow-lg transition-transform hover:scale-105"
              >
                <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-violet-100">
                  <Users className="h-14 w-14 text-violet-600" />
                </div>
                <h4 className="mb-2 text-xl font-semibold">{member.name}</h4>
                <p className="mb-4 font-medium text-violet-600">
                  {member.role}
                </p>
                <p className="leading-relaxed text-gray-600">
                  {member.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-violet-50 p-8 text-center">
          <h3 className="mb-4 text-2xl font-bold">Our Mission</h3>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-700">
            To empower businesses worldwide with intelligent scheduling
            solutions that save time, reduce complexity, and create delightful
            booking experiences for everyone.
          </p>
        </div>
      </div>
    </div>
  );
}
