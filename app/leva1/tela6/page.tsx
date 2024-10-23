"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Tool, Zap, Wind, Paintbrush, Truck, Sofa } from "lucide-react"

const popularServices = [
  { name: "Serviços Hidráulicos", icon: <Tool className="h-6 w-6" /> },
  { name: "Serviços Elétricos", icon: <Zap className="h-6 w-6" /> },
  { name: "Serviços de Ar-condicionado", icon: <Wind className="h-6 w-6" /> },
  { name: "Pequenos Reparos", icon: <Tool className="h-6 w-6" /> },
  { name: "Pintura", icon: <Paintbrush className="h-6 w-6" /> },
  { name: "Fretes", icon: <Truck className="h-6 w-6" /> },
  { name: "Montagem de Móveis", icon: <Sofa className="h-6 w-6" /> },
]

const cities = [
  "Porto Alegre", "São Paulo", "Rio de Janeiro", "Belo Horizonte", "Brasília",
  "Curitiba", "Salvador", "Fortaleza", "Recife", "Goiânia"
]

export default function HomePage() {
  const [selectedCity, setSelectedCity] = useState("Porto Alegre")

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <Tool className="h-8 w-8 text-primary mr-2" />
            <span className="text-2xl font-bold text-primary">ServicePro</span>
          </div>
          <nav>
            <Button variant="ghost">Como funciona</Button>
            <Button variant="ghost">Para Profissionais</Button>
            <Button>Entrar</Button>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Qual é o seu projeto?</h1>
          <p className="text-xl mb-8">Manutenção, instalação, conserto ou reforma?</p>
          <div className="flex max-w-2xl mx-auto">
            <Select value={selectedCity} onValueChange={setSelectedCity}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Selecione a cidade" />
              </SelectTrigger>
              <SelectContent>
                {cities.map((city) => (
                  <SelectItem key={city} value={city}>{city}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input className="flex-grow mx-2" placeholder="Pesquisar serviço..." />
            <Button>
              <Search className="h-4 w-4 mr-2" />
              Buscar
            </Button>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Serviços Populares</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {popularServices.map((service, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  {service.icon}
                  <h3 className="mt-2 text-center">{service.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Encontre serviços por categoria</h2>
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">Todas as Categorias</TabsTrigger>
              <TabsTrigger value="home">Casa</TabsTrigger>
              <TabsTrigger value="outdoor">Área Externa</TabsTrigger>
              <TabsTrigger value="specialized">Especializados</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {popularServices.map((service, index) => (
                  <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      {service.icon}
                      <h3 className="mt-2 text-center">{service.name}</h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            {/* Add content for other tabs as needed */}
          </Tabs>
        </section>
      </main>

      <footer className="bg-gray-800 text-white mt-12">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">ServicePro</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Sobre nós</a></li>
                <li><a href="#" className="hover:underline">Como funciona</a></li>
                <li><a href="#" className="hover:underline">Carreiras</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Para Você</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Catálogo de serviços</a></li>
                <li><a href="#" className="hover:underline">Cidades atendidas</a></li>
                <li><a href="#" className="hover:underline">Avaliações</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Para Profissionais</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Cadastre-se</a></li>
                <li><a href="#" className="hover:underline">App do Profissional</a></li>
                <li><a href="#" className="hover:underline">Central de Ajuda</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Siga-nos</h3>
              <div className="flex space-x-4">
                {/* Add social media icons here */}
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2024 ServicePro - Todos os direitos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  )
}