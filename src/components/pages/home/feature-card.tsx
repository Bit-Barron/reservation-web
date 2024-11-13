import { Card } from "@/components/ui/card";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <Card className="border border-violet-100 bg-white/60 p-6 backdrop-blur">
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-violet-100">
      {icon}
    </div>
    <h3 className="mb-2 text-xl font-semibold">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </Card>
);
