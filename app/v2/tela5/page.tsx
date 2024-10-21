"use client";

import { useState } from "react";
import {
  ChevronLeft,
  MapPin,
  Search,
  MoreVertical,
  CheckCircle2,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Address {
  id: number;
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
  details?: string;
}

export default function Component() {
  const [selectedAddress, setSelectedAddress] = useState<number>(1);

  const addresses: Address[] = [
    {
      id: 1,
      street: "R. Hanover",
      number: "110",
      neighborhood: "Jardim Europa",
      city: "Uberlândia",
      state: "MG",
    },
    {
      id: 2,
      street: "Av. Dr. Guilherme Dumont Vilares",
      number: "1136",
      neighborhood: "Jardim Londrina",
      city: "São Paulo",
      state: "SP",
      details: "Apt 103 bloco 7 - Favor Subir Ao Bloco 7\nSolicitar Portaria",
    },
    {
      id: 3,
      street: "R. Prudente de Morais",
      number: "975",
      neighborhood: "Centro",
      city: "Ribeirão Preto",
      state: "SP",
      details: "Apt 81",
    },
  ];

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">
      <header className="flex items-center p-4 border-b">
        <Button variant="ghost" size="icon">
          <ChevronLeft className="h-6 w-6 text-red-500" />
        </Button>
        <h1 className="text-lg font-semibold flex-grow text-center">
          ENDEREÇO DE ENTREGA
        </h1>
      </header>

      <div className="p-4 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Endereço e número"
            className="pl-10 bg-gray-100"
          />
        </div>

        <div className="flex items-center space-x-2 text-gray-600">
          <MapPin className="h-5 w-5" />
          <div>
            <p className="font-semibold">Usar localização atual</p>
            <p className="text-sm">
              R. Hanover - Jardim Europa, Uberlândia - MG
            </p>
          </div>
        </div>

        {addresses.map((address) => (
          <div
            key={address.id}
            className={`p-3 rounded-lg flex items-start space-x-3 ${selectedAddress === address.id ? "bg-red-50 border border-red-200" : "bg-white"}`}
            onClick={() => setSelectedAddress(address.id)}
          >
            {selectedAddress === address.id && (
              <CheckCircle2 className="h-5 w-5 text-red-500 flex-shrink-0 mt-1" />
            )}
            <div className="flex-grow">
              <p className="font-semibold">
                {address.street}, {address.number}
              </p>
              <p className="text-sm text-gray-600">
                {address.neighborhood}, {address.city} - {address.state}
              </p>
              {address.details && (
                <p className="text-sm text-gray-600 mt-1">{address.details}</p>
              )}
            </div>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-5 w-5 text-gray-400" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
