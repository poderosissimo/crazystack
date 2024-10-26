"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color?: string;
}

const MotionCard = motion(Card);

export function FeatureItem({
  icon,
  title,
  description,
  color = "text-foreground",
}: FeatureItemProps) {
  return (
    <MotionCard
      className={cn("text-center", color)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <CardContent className="flex flex-col items-center space-y-4 p-6">
        {icon}
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm">{description}</p>
      </CardContent>
    </MotionCard>
  );
}
