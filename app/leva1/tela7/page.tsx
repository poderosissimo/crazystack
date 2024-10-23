"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Zap, Search, Star, MapPin } from "lucide-react"

const electricalServices = [
  { name: "Instalação de Lâmpadas", description: "Instalação e substituição de lâmpadas e luminárias", price: "A partir de R$ 80" },
  { name: "Instalação de Tomadas", description: "Instalação de novas tomadas ou reparo das existentes", price: "A partir de R$ 100" },
  { name: "Instalação de Ventilador de Teto", description: "Montagem e instalação de ventiladores de teto", price: "A partir de R$ 150" },
  { name: "Reparo de Curto-Circuito", description: "Diagnóstico e reparo de problemas elétricos", price: "A partir de R$ 120" },
  { name: "Instalação de Disjuntores", description: "Instalação ou substituição de disjuntores no quadro elétrico", price: "A partir de R$ 90" },
  { name: "Passagem de Fiação", description: "Instalação de nova fiação elétrica", price: "A partir de R$ 200" },
]

export default function ElectricalServicesPage() {
  const [selectedCity, setSelectedCity] = useState("Porto Alegre")

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <Zap className="h-8 w-8 text-primary mr-2" />
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
        <div className="flex items-center mb-8">
          <h1 className="text-3xl font-bold mr-4">Serviços Elétricos</h1>
          <Select value={selectedCity} onValueChange={setSelectedCity}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Selecione a cidade" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Porto Alegre">Porto Alegre</SelectItem>
              <SelectItem value="São Paulo">São Paulo</SelectItem>
              <SelectItem value="Rio de Janeiro">Rio de Janeiro</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="mb-8">
          <Input className="w-full max-w-md" placeholder="Pesquisar serviço elétrico..." />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {electricalServices.map((service, index) => (
            <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle>{service.name}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-lg">{service.price}</p>
                <div className="flex items-center mt-2">
                  <Star className="h-5 w-5 text-yellow-400 mr-1" />
                  <span className="mr-2">4.8</span>
                  <span className="text-gray-500">(120 avaliações)</span>
                </div>
                <Button className="w-full mt-4">Ver detalhes</Button>
              </CardContent>
            </Card>
          ))}
        </div>
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