"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CalendarIcon,
  MapPinIcon,
  PackageIcon,
  TruckIcon,
  CheckCircleIcon,
} from "lucide-react";

export default function MovingSummary() {
  const moveDetails = {
    status: "Em andamento",
    origin: "Rua A, 123 - São Paulo, SP",
    destination: "Rua B, 456 - Rio de Janeiro, RJ",
    date: "15 de Novembro de 2023",
    items: 42,
    nextStep: "Dia da Mudança",
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Resumo da Mudança</h2>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            Status da Mudança
            <Badge
              variant={
                moveDetails.status === "Em andamento" ? "default" : "success"
              }
            >
              {moveDetails.status}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            <li className="flex items-center">
              <MapPinIcon className="mr-2 h-5 w-5 text-muted-foreground" />
              <span>
                <strong>Origem:</strong> {moveDetails.origin}
              </span>
            </li>
            <li className="flex items-center">
              <MapPinIcon className="mr-2 h-5 w-5 text-muted-foreground" />
              <span>
                <strong>Destino:</strong> {moveDetails.destination}
              </span>
            </li>
            <li className="flex items-center">
              <CalendarIcon className="mr-2 h-5 w-5 text-muted-foreground" />
              <span>
                <strong>Data:</strong> {moveDetails.date}
              </span>
            </li>
            <li className="flex items-center">
              <PackageIcon className="mr-2 h-5 w-5 text-muted-foreground" />
              <span>
                <strong>Itens:</strong> {moveDetails.items}
              </span>
            </li>
          </ul>
        </CardContent>
      </Card>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Próximo Passo</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <span className="font-semibold">{moveDetails.nextStep}</span>
            <TruckIcon className="h-6 w-6 text-primary" />
          </div>
        </CardContent>
      </Card>
      <div className="space-y-4">
        <Button className="w-full">Ver Detalhes da Mudança</Button>
        <Button variant="outline" className="w-full">
          <CheckCircleIcon className="mr-2 h-4 w-4" />
          Marcar Etapa como Concluída
        </Button>
      </div>
    </div>
  );
}
