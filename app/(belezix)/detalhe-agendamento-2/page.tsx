"use client";
import { useState } from "react";
import {
  ChevronLeft,
  MessageCircle,
  Phone,
  Check,
  Clock,
  Repeat,
  ChevronRight,
  Filter,
  SortDesc,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Component() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-purple-600 text-white p-4 md:p-6 sticky top-0 z-10 shadow-md">
        <div className="flex items-center max-w-4xl mx-auto">
          <Button variant="ghost" size="icon" className="mr-2 text-white">
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-xl font-semibold">Agendamentos</h1>
        </div>
      </header>

      <main className="p-4 md:p-6 max-w-4xl mx-auto">
        <Card className="mb-6 overflow-hidden">
          <CardHeader className="bg-purple-100">
            <CardTitle className="text-purple-800">
              Meu próximo agendamento
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <AppointmentCard
              image="/placeholder.svg?height=100&width=100"
              title="Espaço Bem Me Quero"
              date="15/11/2021"
              time="16h:30m"
              service="Peeling facial"
              status="Confirmado pelo local"
              showActions
            />
          </CardContent>
        </Card>

        <div className="flex justify-between mb-4">
          <Button
            variant="outline"
            className="text-purple-600 border-purple-600 hover:bg-purple-100"
            onClick={() => setIsFilterOpen(true)}
          >
            <Filter className="w-4 h-4 mr-2" />
            Filtros
          </Button>
          <Button
            variant="outline"
            className="text-purple-600 border-purple-600 hover:bg-purple-100"
          >
            <SortDesc className="w-4 h-4 mr-2" />
            Ordenar
          </Button>
        </div>

        <Tabs defaultValue="proximos" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="proximos">PRÓXIMOS</TabsTrigger>
            <TabsTrigger value="concluidos">CONCLUÍDOS</TabsTrigger>
          </TabsList>
          <TabsContent value="proximos">
            <ScrollArea className="h-[400px] rounded-md border p-4">
              <AppointmentCard
                image="/placeholder.svg?height=100&width=100"
                title="Espaço Bem Me Quero"
                date="15/11/2021"
                time="16h:30m"
                service="Peeling facial"
                status="Confirmado pelo local"
              />
              <AppointmentCard
                image="/placeholder.svg?height=100&width=100"
                title="Salão Beleza Pura"
                date="20/11/2021"
                time="14h:00m"
                service="Corte de cabelo"
                status="Aguardando confirmação"
              />
              <AppointmentCard
                image="/placeholder.svg?height=100&width=100"
                title="Clínica Estética Renove"
                date="25/11/2021"
                time="10h:15m"
                service="Limpeza de pele"
                status="Confirmado pelo local"
              />
            </ScrollArea>
          </TabsContent>
          <TabsContent value="concluidos">
            <Card>
              <CardContent>
                <p className="text-center text-gray-500 py-4">
                  Nenhum agendamento concluído.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {isFilterOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center p-4 z-50"
            onClick={() => setIsFilterOpen(false)}
          >
            <Card
              className="w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <CardHeader>
                <CardTitle>Filtrar por:</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-3 gap-4">
                <FilterButton
                  label="Confirmados"
                  icon={<Check className="w-6 h-6" />}
                  active
                />
                <FilterButton
                  label="Aguardando confirmação"
                  icon={<Clock className="w-6 h-6" />}
                />
                <FilterButton
                  label="Recorrentes"
                  icon={<Repeat className="w-6 h-6" />}
                />
              </CardContent>
              <div className="p-4">
                <Button
                  className="w-full bg-purple-600 hover:bg-purple-700"
                  onClick={() => setIsFilterOpen(false)}
                >
                  Aplicar Filtros
                </Button>
              </div>
            </Card>
          </motion.div>
        )}
      </main>
    </div>
  );
}

function AppointmentCard({
  image,
  title,
  date,
  time,
  service,
  status,
  showActions = false,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex items-start p-4 border-b last:border-b-0 hover:bg-gray-50 transition-colors duration-200"
    >
      <Avatar className="w-16 h-16 mr-4">
        <AvatarImage src={image} alt={title} />
        <AvatarFallback>{title.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex-grow">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-gray-600">
          {date} • {time}
        </p>
        <p className="text-sm font-medium mt-1">{service}</p>
        <Badge
          variant={status.includes("Confirmado") ? "success" : "warning"}
          className="mt-2"
        >
          {status}
        </Badge>
        {showActions && (
          <div className="flex mt-4 space-x-2">
            <Button size="sm" variant="outline" className="flex-1">
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat
            </Button>
            <Button size="sm" variant="outline" className="flex-1">
              <Phone className="w-4 h-4 mr-2" />
              Ligar
            </Button>
          </div>
        )}
      </div>
      <ChevronRight className="h-6 w-6 text-gray-400" />
    </motion.div>
  );
}

function FilterButton({ label, icon, active = false }) {
  return (
    <Button
      variant="outline"
      className={`flex flex-col items-center justify-center p-4 h-auto ${
        active ? "bg-purple-100 text-purple-600 border-purple-600" : ""
      }`}
    >
      {icon}
      <span className="text-xs text-center mt-2">{label}</span>
    </Button>
  );
}
