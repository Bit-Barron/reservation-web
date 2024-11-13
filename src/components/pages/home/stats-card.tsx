import { Card } from "@/components/ui/card";
import React from "react";

interface StatsCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ReactNode;
}

export const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  subtitle,
  icon,
}) => {
  return (
    <Card className="border border-violet-100 bg-white/60 p-6 backdrop-blur">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-semibold">{title}</h3>
        {icon}
      </div>
      <p className="text-3xl font-bold">{value}</p>
      <p className="text-sm text-green-600">{subtitle}</p>
    </Card>
  );
};
