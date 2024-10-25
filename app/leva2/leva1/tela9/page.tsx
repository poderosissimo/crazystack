import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ChevronRight,
  Code,
  FileCode,
  Globe,
  Rocket,
  Zap,
  Lock,
  Star,
  PlayCircle,
  CreditCard,
  LayoutDashboard,
  Database,
  MessageSquare,
  CreditCard as PaymentIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Icons } from "@/components/ui/icons";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-gray-100">
      {/* Existing header code... */}
      
      <main className="flex-1">
        {/* Existing sections... */}
        
        {/* New Technologies Used Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-lime-400 mb-8 text-center">
              Tecnologias Utilizadas
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center">
              {technologies.map((tech, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-16 h-16 mb-4">
                    <tech.icon className="w-full h-full text-lime-400" />
                  </div>
                  <span className="text-sm text-gray-300">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Existing sections... */}
      </main>
      
      {/* Existing footer code... */}
    </div>
  );
}

const technologies = [
  { name: "React", icon: Icons.react },
  { name: "Node.js", icon: Icons.nodejs },
  { name: "MongoDB", icon: Icons.mongodb },
  { name: "PostgreSQL", icon: Icons.postgresql },
  { name: "TypeScript", icon: Icons.typescript },
  { name: "Next.js", icon: Icons.nextjs },
  { name: "Fastify", icon: Icons.fastify },
  { name: "Redis", icon: Icons.redis },
  { name: "Kafka", icon: Icons.kafka },
  { name: "Docker", icon: Icons.docker },
  { name: "GraphQL", icon: Icons.graphql },
  { name: "Tailwind CSS", icon: Icons.tailwind },
];

// ... rest of the existing code (modules and topics arrays)