"use client";
import { useState } from "react";
import {
  ArrowLeft,
  ChevronDown,
  ChevronRight,
  Filter,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Component() {
  const [selectedTab, setSelectedTab] = useState("proximos");

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="bg-purple-600 text-white p-4 flex items-center justify-between">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className="mr-2 text-white hover:text-purple-200"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-xl font-semibold">Agendamentos</h1>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="text-white hover:text-purple-200"
        >
          Novo Agendamento
        </Button>
      </header>

      <ScrollArea className="flex-1">
        <main className="p-4 max-w-3xl mx-auto">
          <section className="mb-6">
            <h2 className="text-lg font-semibold mb-2">
              Meu próximo agendamento
            </h2>
            <AppointmentCard
              image="/placeholder.svg?height=80&width=80"
              name="Espaço Bem Me Quero"
              date="15/11/2021"
              time="16h:30m"
              service="Peeling facial"
              status="Confirmado pelo local"
              isNextAppointment
            />
          </section>

          <div className="flex justify-between mb-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-purple-600 border-purple-600"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Filtros
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Filtrar Agendamentos</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o serviço" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todos">Todos os serviços</SelectItem>
                      <SelectItem value="peeling">Peeling facial</SelectItem>
                      <SelectItem value="pedicure">Pedicure</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todos">Todos os status</SelectItem>
                      <SelectItem value="confirmado">Confirmado</SelectItem>
                      <SelectItem value="aguardando">
                        Aguardando confirmação
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </DialogContent>
            </Dialog>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="data-asc">Data (mais recente)</SelectItem>
                <SelectItem value="data-desc">Data (mais antiga)</SelectItem>
                <SelectItem value="nome-asc">Nome (A-Z)</SelectItem>
                <SelectItem value="nome-desc">Nome (Z-A)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Tabs
            defaultValue="proximos"
            className="w-full"
            onValueChange={setSelectedTab}
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="proximos">PRÓXIMOS</TabsTrigger>
              <TabsTrigger value="concluidos">CONCLUÍDOS</TabsTrigger>
            </TabsList>
            <TabsContent value="proximos">
              <div className="mt-4 space-y-4">
                <AppointmentCard
                  image="/placeholder.svg?height=80&width=80"
                  name="Espaço Bem Me Quero"
                  date="15/11/2021"
                  time="16h:30m"
                  service="Peeling facial"
                  status="Confirmado pelo local"
                />
                <AppointmentCard
                  image="/placeholder.svg?height=80&width=80"
                  name="Salão Sempre Bela"
                  date="24/11/2021"
                  time="15h:30m"
                  service="Pedicure"
                  status="Aguardando confirmação do local"
                  statusColor="text-orange-500"
                />
              </div>
            </TabsContent>
            <TabsContent value="concluidos">
              <div className="mt-4 space-y-4">
                <AppointmentCard
                  image="/placeholder.svg?height=80&width=80"
                  name="Espaço Zen"
                  date="10/11/2021"
                  time="14h:00m"
                  service="Massagem relaxante"
                  status="Concluído"
                  statusColor="text-gray-500"
                />
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </ScrollArea>
    </div>
  );
}

function AppointmentCard({
  image,
  name,
  date,
  time,
  service,
  status,
  statusColor = "text-green-500",
  isNextAppointment = false,
}) {
  return (
    <div
      className={`bg-white rounded-lg shadow p-4 flex items-start ${isNextAppointment ? "border-l-4 border-purple-600" : ""}`}
    >
      <img
        src={image}
        alt={name}
        className="w-20 h-20 rounded-lg object-cover mr-4"
      />
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold">{name}</h3>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </div>
        <div className="flex items-center text-purple-600 mt-1">
          <Calendar className="w-4 h-4 mr-1" />
          {date}
          <Clock className="w-4 h-4 ml-2 mr-1" />
          {time}
        </div>
        <p className="text-gray-600 mt-1">{service}</p>
        <p className={`${statusColor} text-sm mt-1 flex items-center`}>
          {status === "Confirmado pelo local" ? (
            <CheckCircle className="w-4 h-4 mr-1" />
          ) : status === "Aguardando confirmação do local" ? (
            <AlertCircle className="w-4 h-4 mr-1" />
          ) : null}
          {status}
        </p>
      </div>
    </div>
  );
}
