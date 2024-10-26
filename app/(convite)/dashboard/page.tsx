"use client";

import React from "react";
import {
  Bell,
  Calendar,
  ChevronRight,
  Mail,
  Search,
  Users,
  BarChart,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
            <h1 className="text-2xl font-bold text-primary">EventMaster</h1>
          </div>
          <nav className="hidden md:flex space-x-1">
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-primary"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Criar
            </Button>
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-primary"
            >
              <Users className="mr-2 h-4 w-4" />
              Convidados
            </Button>
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-primary"
            >
              <BarChart className="mr-2 h-4 w-4" />
              Estatísticas
            </Button>
          </nav>
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Novo convite recebido</DropdownMenuItem>
                <DropdownMenuItem>5 respostas pendentes</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <h2 className="text-3xl font-bold mb-4 md:mb-0">Visão Geral</h2>
          <div className="w-full md:w-auto">
            <Input
              type="search"
              placeholder="Buscar convites ou eventos..."
              className="w-full md:w-64"
              startIcon={<Search className="h-4 w-4 text-muted-foreground" />}
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-primary text-primary-foreground">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Convites Criados
              </CardTitle>
              <Mail className="h-4 w-4 text-primary-foreground/80" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">254</div>
              <Progress value={75} className="mt-2" />
              <p className="text-xs mt-2">+20% em relação ao mês passado</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Convites Enviados
              </CardTitle>
              <Mail className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">230</div>
              <Progress value={65} className="mt-2" />
              <p className="text-xs text-muted-foreground mt-2">
                +15% em relação ao mês passado
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Convites Confirmados
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">180</div>
              <Progress value={50} className="mt-2" />
              <p className="text-xs text-muted-foreground mt-2">
                +25% em relação ao mês passado
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Taxa de Resposta
              </CardTitle>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">78%</div>
              <Progress value={78} className="mt-2" />
              <p className="text-xs text-muted-foreground mt-2">
                +5% em relação ao mês passado
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <Tabs defaultValue="todos" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="todos">Todos</TabsTrigger>
              <TabsTrigger value="pendentes">Pendentes</TabsTrigger>
              <TabsTrigger value="confirmados">Confirmados</TabsTrigger>
              <TabsTrigger value="recusados">Recusados</TabsTrigger>
            </TabsList>
            <TabsContent value="todos">
              <Card>
                <CardHeader>
                  <CardTitle>Todos os Convites</CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <ul className="space-y-4">
                      {[...Array(10)].map((_, i) => (
                        <li
                          key={i}
                          className="flex items-center justify-between p-2 hover:bg-accent rounded-lg transition-colors"
                        >
                          <div className="flex items-center space-x-4">
                            <Avatar>
                              <AvatarFallback>{`G${i + 1}`}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">Evento {i + 1}</p>
                              <p className="text-sm text-muted-foreground">
                                12/12/2023
                              </p>
                            </div>
                          </div>
                          <Badge
                            variant={
                              i % 3 === 0
                                ? "default"
                                : i % 3 === 1
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {i % 3 === 0
                              ? "Confirmado"
                              : i % 3 === 1
                                ? "Pendente"
                                : "Recusado"}
                          </Badge>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="pendentes">
              <Card>
                <CardHeader>
                  <CardTitle>Convites Pendentes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Lista de convites pendentes aqui...</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="confirmados">
              <Card>
                <CardHeader>
                  <CardTitle>Convites Confirmados</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Lista de convites confirmados aqui...</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="recusados">
              <Card>
                <CardHeader>
                  <CardTitle>Convites Recusados</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Lista de convites recusados aqui...</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Button
        size="lg"
        className="fixed bottom-8 right-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg rounded-full"
      >
        <Mail className="mr-2 h-5 w-5" />
        Criar Novo Convite
      </Button>
    </div>
  );
}
