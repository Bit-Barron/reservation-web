import { Heart, Rocket, Shield, Lightbulb } from "lucide-react";

export const stats = [
  {
    value: "10k+",
    label: "Active Users",
  },
  {
    value: "1M+",
    label: "Bookings Made",
  },
  {
    value: "98%",
    label: "Customer Satisfaction",
  },
];

export const values = [
  {
    icon: <Heart className="h-6 w-6 text-violet-600" />,
    title: "Customer First",
    description:
      "We put our customers at the heart of everything we do, ensuring their success is our top priority.",
  },
  {
    icon: <Rocket className="h-6 w-6 text-violet-600" />,
    title: "Innovation",
    description:
      "We continuously push boundaries to deliver cutting-edge solutions that transform scheduling experiences.",
  },
  {
    icon: <Shield className="h-6 w-6 text-violet-600" />,
    title: "Reliability",
    description:
      "Our platform is built on trust, ensuring dependable service that businesses can count on 24/7.",
  },
  {
    icon: <Lightbulb className="h-6 w-6 text-violet-600" />,
    title: "Simplicity",
    description:
      "We believe in making complex scheduling simple, with intuitive solutions that anyone can use.",
  },
];

export const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Co-founder",
    description:
      "Leading BookFlow's mission to revolutionize appointment scheduling with over 15 years of industry experience.",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    description:
      "Driving technical innovation with expertise in scalable systems and AI-powered scheduling solutions.",
  },
  {
    name: "Emma Williams",
    role: "Head of Product",
    description:
      "Crafting the future of booking experiences with a user-centered approach to product development.",
  },
];
