import Image from "next/image";
import { MapPin, Star, Phone, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    name: "Corte de Cabelo",
    description: "Estilo personalizado com as últimas tendências.",
    price: "R$ 50,00",
  },
  {
    name: "Sobrancelha",
    description: "Expressão acentuada com modelagem precisa.",
    price: "R$ 25,00",
  },
  {
    name: "Barba",
    description: "Modelagem completa para destacar sua masculinidade.",
    price: "R$ 45,00",
  },
  {
    name: "Massagem",
    description: "Relaxe e renove com nossos tratamentos revitalizantes.",
    price: "R$ 35,00",
  },
  {
    name: "Pézinho",
    description: "Acabamento perfeito para um visual renovado.",
    price: "R$ 20,00",
  },
  {
    name: "Hidratação",
    description: "Fios hidratados, macios e brilhantes.",
    price: "R$ 30,00",
  },
];

const openingHours = [
  { day: "Segunda", hours: "Fechado" },
  { day: "Terça-Feira", hours: "09:00 - 21:00" },
  { day: "Quarta-Feira", hours: "09:00 - 21:00" },
  { day: "Quinta-Feira", hours: "09:00 - 21:00" },
  { day: "Sexta-Feira", hours: "09:00 - 21:00" },
  { day: "Sábado", hours: "08:00 - 17:00" },
  { day: "Domingo", hours: "Fechado" },
];

export default function Component() {
  return (
    <div className="min-h-screen bg-background text-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="relative aspect-video mb-8">
              <Image
                src="/placeholder.svg"
                alt="Vintage Barber Interior"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-2">Vintage Barber</h1>
              <div className="flex items-center text-sm mb-4">
                <MapPin className="mr-2 h-4 w-4" />
                <span>Avenida São Sebastião, 357, São Paulo</span>
              </div>
              <div className="flex items-center">
                <Star className="text-yellow-400 mr-1 h-5 w-5" />
                <span className="font-bold mr-2">5.0</span>
                <span className="text-gray-400">(889 avaliações)</span>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {services.map((service) => (
                <Card key={service.name} className="bg-gray-800">
                  <CardHeader>
                    <CardTitle>{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-400 mb-4">
                      {service.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-purple-400">
                        {service.price}
                      </span>
                      <Button variant="outline">Reservar</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <Card className="bg-gray-800 mb-8">
              <CardHeader>
                <CardTitle>Mapa</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-gray-700 rounded-lg"></div>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 mb-8">
              <CardHeader>
                <CardTitle>Contato</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <Phone className="mr-2 h-4 w-4" />
                    <span>(11) 98204-5108</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Phone className="mr-2 h-4 w-4" />
                    <span>(11) 99503-2351</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-800">
              <CardHeader>
                <CardTitle>Horário de Funcionamento</CardTitle>
              </CardHeader>
              <CardContent>
                {openingHours.map((day) => (
                  <div key={day.day} className="flex justify-between mb-2">
                    <span>{day.day}</span>
                    <span>{day.hours}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Sobre Nós</h2>
          <p className="text-gray-400">
            Bem-vindo à Vintage Barber, onde tradição encontra estilo. Nossa
            equipe de mestres barbeiros transforma cortes de cabelo e barbas em
            obras de arte. Em um ambiente acolhedor, promovemos confiança,
            estilo e uma comunidade unida.
          </p>
        </div>
      </div>
    </div>
  );
}
