import {
  Calendar,
  Users,
  BarChart,
  Globe,
  BellRing,
  Settings,
  Smartphone,
  Zap,
  MessageSquare,
} from "lucide-react";

export const detailedFeatures = [
  {
    icon: <Calendar className="h-8 w-8 text-violet-600" />,
    title: "Smart Scheduling",
    description:
      "Advanced AI-powered scheduling system that optimizes your booking process automatically.",
    subFeatures: [
      "Intelligent conflict resolution",
      "Automated buffer time management",
      "Smart resource allocation",
      "Dynamic availability optimization",
      "Multi-timezone support",
      "Customizable booking rules",
    ],
  },
  {
    icon: <Users className="h-8 w-8 text-violet-600" />,
    title: "Team Management",
    description:
      "Comprehensive tools to manage your team's schedules and workflows effectively.",
    subFeatures: [
      "Team calendar overview",
      "Skill-based assignment",
      "Leave management",
      "Workload balancing",
      "Performance analytics",
      "Team availability settings",
    ],
  },
  {
    icon: <BarChart className="h-8 w-8 text-violet-600" />,
    title: "Advanced Analytics",
    description:
      "Detailed insights and reporting to optimize your business performance.",
    subFeatures: [
      "Real-time booking analytics",
      "Customer behavior insights",
      "Revenue tracking",
      "Team performance metrics",
      "Custom report builder",
      "Data export options",
    ],
  },
  {
    icon: <Globe className="h-8 w-8 text-violet-600" />,
    title: "Customer Experience",
    description:
      "Tools and features designed to enhance your customers' booking experience.",
    subFeatures: [
      "Self-service booking portal",
      "Automated reminders",
      "Customer feedback system",
      "Personalized communications",
      "Multiple language support",
      "Mobile-friendly interface",
    ],
  },
];

export const additionalFeatures = [
  {
    icon: <BellRing className="h-6 w-6 text-violet-600" />,
    title: "Smart Notifications",
    description: "Automated reminders and updates to keep everyone in sync.",
  },
  {
    icon: <Settings className="h-6 w-6 text-violet-600" />,
    title: "Custom Settings",
    description: "Tailor the platform to match your business needs perfectly.",
  },
  {
    icon: <Smartphone className="h-6 w-6 text-violet-600" />,
    title: "Mobile Apps",
    description: "Manage bookings on the go with our mobile applications.",
  },
  {
    icon: <Zap className="h-6 w-6 text-violet-600" />,
    title: "Fast Performance",
    description: "Lightning-fast booking system that never slows you down.",
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-violet-600" />,
    title: "24/7 Support",
    description: "Round-the-clock support to help you succeed.",
  },
];

export const integrations = [
  "Google Calendar",
  "Outlook",
  "Zoom",
  "Stripe",
  "Slack",
  "Microsoft Teams",
  "Salesforce",
  "HubSpot",
];
