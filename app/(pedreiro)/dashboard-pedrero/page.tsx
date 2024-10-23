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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Hammer,
  ShoppingBag,
  Briefcase,
  Bell,
  Search,
  Menu,
  Package,
} from "lucide-react";

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`bg-white w-64 min-h-screen p-4 ${isSidebarOpen ? "block" : "hidden"} md:block`}
      >
        <div className="flex items-center mb-6">
          <Hammer className="h-6 w-6 text-primary mr-2" />
          <span className="text-xl font-bold">PedreirosPro</span>
        </div>
        <nav>
          <Button variant="ghost" className="w-full justify-start mb-2">
            <Briefcase className="mr-2 h-4 w-4" /> Oportunidades
          </Button>
          <Button variant="ghost" className="w-full justify-start mb-2">
            <ShoppingBag className="mr-2 h-4 w-4" /> Materiais
          </Button>
          <Button variant="ghost" className="w-full justify-start mb-2">
            <Package className="mr-2 h-4 w-4" /> Ferramentas
          </Button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm z-10">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <Button
              variant="ghost"
              className="md:hidden"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <Input
                  type="search"
                  placeholder="Pesquisar..."
                  className="w-full max-w-xs"
                />
                <Button variant="ghost" size="icon">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex items-center">
              <Button variant="ghost" size="icon" className="mr-2">
                <Bell className="h-5 w-5" />
              </Button>
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-semibold text-gray-900 mb-4">
              Dashboard
            </h1>

            <Tabs defaultValue="oportunidades" className="mb-6">
              <TabsList>
                <TabsTrigger value="oportunidades">Oportunidades</TabsTrigger>
                <TabsTrigger value="materiais">Materiais</TabsTrigger>
              </TabsList>
              <TabsContent value="oportunidades">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3].map((job) => (
                    <Card key={job}>
                      <CardHeader>
                        <CardTitle>Reforma Residencial</CardTitle>
                        <CardDescription>São Paulo, SP</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>
                          Procura-se pedreiro para reforma de banheiro e
                          cozinha.
                        </p>
                        <Button className="mt-4">Ver Detalhes</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="materiais">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3].map((material) => (
                    <Card key={material}>
                      <CardHeader>
                        <CardTitle>Cimento Portland</CardTitle>
                        <CardDescription>50kg - Marca XYZ</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="font-bold text-lg">R$ 29,90</p>
                        <Button className="mt-4">Comprar</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Ferramentas e Serviços
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <CardTitle>Calculadora de Materiais</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button>Acessar</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Gerador de Orçamentos</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button>Criar</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Agenda de Trabalhos</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button>Ver Agenda</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Cursos e Treinamentos</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button>Explorar</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
