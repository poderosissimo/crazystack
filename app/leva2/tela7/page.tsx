"use client";
import { useState } from "react";
import {
  Star,
  ChevronDown,
  ChevronUp,
  Package,
  Shield,
  Clock,
  DollarSign,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Service = {
  id: number;
  company: string;
  price: number;
  availability: string;
  rating: number;
  totalRatings: number;
  details: {
    packaging: string;
    assembly: string;
    insurance: string;
  };
  comments: Array<{
    text: string;
    rating: number;
  }>;
  features: string[];
};

const services: Service[] = [
  {
    id: 1,
    company: "Transportes Silva",
    price: 200,
    availability: "01/06/2024, 08:00 - 12:00",
    rating: 4,
    totalRatings: 120,
    details: {
      packaging: "Embalagem incluída",
      assembly: "Desmontagem/Montagem incluída",
      insurance: "Seguro básico incluído",
    },
    comments: [
      { text: "Excelente serviço, equipe pontual...", rating: 5 },
      { text: "Muito cuidadosos com os móveis...", rating: 4 },
    ],
    features: [
      "Rastreamento em tempo real",
      "Equipe especializada",
      "Garantia de pontualidade",
    ],
  },
  {
    id: 2,
    company: "Mudanças Rápidas",
    price: 180,
    availability: "01/06/2024, 10:00 - 14:00",
    rating: 4,
    totalRatings: 85,
    details: {
      packaging: "Embalagem não incluída",
      assembly: "Desmontagem/Montagem disponível por R$50",
      insurance: "Seguro adicional disponível",
    },
    comments: [
      { text: "Serviço rápido e eficiente...", rating: 4 },
      { text: "Preço justo, mas cobrança extra para embalagem...", rating: 3 },
    ],
    features: ["Serviço expresso", "Opções flexíveis", "Atendimento 24/7"],
  },
  {
    id: 3,
    company: "Fretes Econômicos",
    price: 150,
    availability: "01/06/2024, 14:00 - 18:00",
    rating: 3,
    totalRatings: 200,
    details: {
      packaging: "Embalagem não incluída",
      assembly: "Desmontagem/Montagem não disponível",
      insurance: "Seguro não disponível",
    },
    comments: [
      { text: "Preço bom, mas serviço básico...", rating: 3 },
      { text: "Atrasaram um pouco, mas entregaram tudo...", rating: 2 },
    ],
    features: [
      "Menor preço garantido",
      "Opção de agendamento flexível",
      "Descontos para mudanças recorrentes",
    ],
  },
];

export default function Test() {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const handleSelect = (id: number) => {
    setSelectedService(id === selectedService ? null : id);
  };

  const handleExpand = (id: number) => {
    setExpandedService(id === expandedService ? null : id);
  };

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
        />
      ));
  };

  const renderRatingDistribution = (service: Service) => {
    const distribution = [0, 0, 0, 0, 0];
    service.comments.forEach((comment) => {
      distribution[comment.rating - 1]++;
    });
    return (
      <div className="space-y-2">
        {distribution.reverse().map((count, index) => (
          <div key={5 - index} className="flex items-center">
            <span className="w-4 text-sm">{5 - index}</span>
            <Progress
              value={(count / service.comments.length) * 100}
              className="h-2 w-full mx-2"
            />
            <span className="w-8 text-sm text-right">{count}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Resultados da Busca</h1>
      <div className="space-y-6">
        {services.map((service) => (
          <Card
            key={service.id}
            className={`${
              selectedService === service.id ? "border-primary shadow-lg" : ""
            } transition-all duration-300`}
          >
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>{service.company}</span>
                <Badge
                  variant={
                    service.rating >= 4
                      ? "default"
                      : service.rating >= 3
                        ? "secondary"
                        : "destructive"
                  }
                >
                  {service.rating.toFixed(1)}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="details" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="details">Detalhes</TabsTrigger>
                  <TabsTrigger value="ratings">Avaliações</TabsTrigger>
                  <TabsTrigger value="features">Recursos</TabsTrigger>
                </TabsList>
                <TabsContent value="details">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-2xl text-primary">{`R$ ${service.price.toFixed(
                        2,
                      )}`}</span>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="outline" size="sm">
                              <Clock className="mr-2 h-4 w-4" />
                              {service.availability}
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Horário disponível para agendamento</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center">
                        <Package className="mr-2 h-5 w-5 text-primary" />
                        <span>{service.details.packaging}</span>
                      </div>
                      <div className="flex items-center">
                        <Shield className="mr-2 h-5 w-5 text-primary" />
                        <span>{service.details.assembly}</span>
                      </div>
                      <div className="flex items-center">
                        <Shield className="mr-2 h-5 w-5 text-primary" />
                        <span>{service.details.insurance}</span>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="ratings">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex mr-2">
                          {renderStars(service.rating)}
                        </div>
                        <span className="text-sm text-muted-foreground">
                          ({service.totalRatings} avaliações)
                        </span>
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm">
                            Ver todos
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>
                              Avaliações para {service.company}
                            </DialogTitle>
                          </DialogHeader>
                          <div className="mt-4 space-y-4">
                            {renderRatingDistribution(service)}
                            <div className="space-y-2">
                              {service.comments.map((comment, index) => (
                                <div
                                  key={index}
                                  className="bg-muted p-3 rounded-md"
                                >
                                  <div className="flex justify-between items-center mb-2">
                                    <div className="flex">
                                      {renderStars(comment.rating)}
                                    </div>
                                    <span className="text-sm text-muted-foreground">
                                      Usuário anônimo
                                    </span>
                                  </div>
                                  <p>{comment.text}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                    <div className="space-y-2">
                      {service.comments.slice(0, 2).map((comment, index) => (
                        <div key={index} className="bg-muted p-3 rounded-md">
                          <p className="line-clamp-2">{comment.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="features">
                  <ul className="list-disc list-inside space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                onClick={() => handleSelect(service.id)}
                variant={
                  selectedService === service.id ? "secondary" : "default"
                }
              >
                {selectedService === service.id ? "Selecionado" : "Selecionar"}
              </Button>
              <Button
                variant="outline"
                onClick={() => handleExpand(service.id)}
              >
                {expandedService === service.id ? (
                  <>
                    Menos detalhes
                    <ChevronUp className="ml-2 h-4 w-4" />
                  </>
                ) : (
                  <>
                    Mais detalhes
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-8 flex justify-between items-center">
        <Button disabled={selectedService === null} size="lg">
          <DollarSign className="mr-2 h-5 w-5" />
          Confirmar Seleção
        </Button>
        <div className="flex space-x-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <ThumbsUp className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Gostei dos resultados</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <ThumbsDown className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Não gostei dos resultados</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
}
