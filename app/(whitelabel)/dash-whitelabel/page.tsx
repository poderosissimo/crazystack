"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Bell,
  DollarSign,
  Users,
  Car,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Dados simulados para os gráficos
const tripData = [
  { name: "00:00", trips: 120 },
  { name: "04:00", trips: 80 },
  { name: "08:00", trips: 250 },
  { name: "12:00", trips: 200 },
  { name: "16:00", trips: 300 },
  { name: "20:00", trips: 220 },
];

const revenueData = [
  { name: "Seg", revenue: 5000 },
  { name: "Ter", revenue: 5500 },
  { name: "Qua", revenue: 6000 },
  { name: "Qui", revenue: 5800 },
  { name: "Sex", revenue: 7000 },
  { name: "Sáb", revenue: 8000 },
  { name: "Dom", revenue: 7500 },
];

export default function Dashboard() {
  return (
    <div className="container mx-auto p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Dashboard MobilidadeX</h1>
        <Select defaultValue="today">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Selecione o período" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="today">Hoje</SelectItem>
            <SelectItem value="week">Esta Semana</SelectItem>
            <SelectItem value="month">Este Mês</SelectItem>
            <SelectItem value="year">Este Ano</SelectItem>
          </SelectContent>
        </Select>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total de Viagens
            </CardTitle>
            <Car className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,284</div>
            <p className="text-xs text-muted-foreground">
              +12% em relação à semana passada
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Receita Total</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 15,231.89</div>
            <p className="text-xs text-muted-foreground">
              +8% em relação à semana passada
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Usuários Ativos
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">573</div>
            <p className="text-xs text-muted-foreground">
              +18% em relação ao mês passado
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Taxa de Crescimento
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12%</div>
            <p className="text-xs text-muted-foreground">
              +2% em relação ao mês passado
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Viagens por Hora</CardTitle>
            <CardDescription>
              Número de viagens realizadas nas últimas 24 horas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={tripData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="trips" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Receita Diária</CardTitle>
            <CardDescription>Receita total dos últimos 7 dias</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Alertas e Notificações</h2>
        <Alert>
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Pico de Demanda</AlertTitle>
          <AlertDescription>
            Esperamos um aumento de 30% na demanda hoje à noite devido a um
            evento na cidade.
          </AlertDescription>
        </Alert>
        <Alert>
          <Bell className="h-4 w-4" />
          <AlertTitle>Atualização do Aplicativo</AlertTitle>
          <AlertDescription>
            Nova versão do aplicativo disponível. Recomendamos atualizar todos
            os motoristas.
          </AlertDescription>
        </Alert>
        <Alert>
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Área de Alta Demanda</AlertTitle>
          <AlertDescription>
            Região central com escassez de motoristas. Considere oferecer
            incentivos.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
