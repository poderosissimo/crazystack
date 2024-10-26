"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  MapPin,
  Zap,
  Wind,
  Paintbrush,
  Truck,
  Sofa,
  Home,
  Wrench,
  Droplet,
} from "lucide-react";

const popularServices = [
  { name: "Serviços Hidráulicos", icon: <Droplet className="h-6 w-6" /> },
  { name: "Serviços Elétricos", icon: <Zap className="h-6 w-6" /> },
  { name: "Serviços de Ar-condicionado", icon: <Wind className="h-6 w-6" /> },
  { name: "Pequenos Reparos", icon: <Wrench className="h-6 w-6" /> },
  { name: "Pintura", icon: <Paintbrush className="h-6 w-6" /> },
  { name: "Fretes", icon: <Truck className="h-6 w-6" /> },
  { name: "Montagem de Móveis", icon: <Sofa className="h-6 w-6" /> },
  { name: "Serviços Residenciais", icon: <Home className="h-6 w-6" /> },
];

const cities = [
  "Porto Alegre",
  "São Paulo",
  "Rio de Janeiro",
  "Belo Horizonte",
  "Brasília",
  "Curitiba",
  "Salvador",
  "Fortaleza",
  "Recife",
  "Goiânia",
];

export default function HomePage() {
  const [selectedCity, setSelectedCity] = useState("Porto Alegre");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-background border-b border-border sticky top-0 z-10">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-primary mr-2">
                ServicePro
              </span>
            </div>
            <nav className="flex space-x-4">
              <Button variant="ghost">Como funciona</Button>
              <Button variant="ghost">Para Profissionais</Button>
              <Button variant="outline">Entrar</Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Qual é o seu projeto?
          </h1>
          <p className="text-xl mb-8 text-muted-foreground">
            Manutenção, instalação, conserto ou reforma?
          </p>
          <div className="flex flex-col md:flex-row max-w-2xl mx-auto space-y-4 md:space-y-0 md:space-x-4">
            <Select value={selectedCity} onValueChange={setSelectedCity}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Selecione a cidade" />
              </SelectTrigger>
              <SelectContent>
                {cities.map((city) => (
                  <SelectItem key={city} value={city}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="flex-grow flex">
              <Input
                className="flex-grow rounded-r-none"
                placeholder="Pesquisar serviço..."
              />
              <Button className="rounded-l-none">
                <Search className="h-4 w-4 mr-2" />
                Buscar
              </Button>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-primary">
            Serviços Populares
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {popularServices.map((service, index) => (
              <Card
                key={index}
                className="cursor-pointer hover:shadow-lg transition-shadow group"
              >
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <div className="mb-4 text-primary group-hover:text-secondary transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-center font-medium group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 text-primary">
            Encontre serviços por categoria
          </h2>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="w-full justify-start overflow-x-auto">
              <TabsTrigger value="all">Todas as Categorias</TabsTrigger>
              <TabsTrigger value="home">Casa</TabsTrigger>
              <TabsTrigger value="outdoor">Área Externa</TabsTrigger>
              <TabsTrigger value="specialized">Especializados</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {popularServices.map((service, index) => (
                  <Card
                    key={index}
                    className="cursor-pointer hover:shadow-lg transition-shadow group"
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <div className="mr-3 text-primary group-hover:text-secondary transition-colors">
                          {service.icon}
                        </div>
                        {service.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            {/* Add content for other tabs as needed */}
          </Tabs>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground mt-16">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">ServicePro</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Sobre nós
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Como funciona
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Carreiras
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Para Você</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Catálogo de serviços
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Cidades atendidas
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Avaliações
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Para Profissionais</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Cadastre-se
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    App do Profissional
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Central de Ajuda
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Siga-nos</h3>
              <div className="flex space-x-4">
                {/* Add social media icons here */}
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center">
            <p>&copy; 2024 ServicePro - Todos os direitos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
