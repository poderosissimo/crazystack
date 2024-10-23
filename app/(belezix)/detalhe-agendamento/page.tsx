import { ChevronLeft, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-purple-600 text-white p-4 md:p-6">
        <div className="flex items-center">
          <ChevronLeft className="h-6 w-6 mr-2" />
          <h1 className="text-xl font-semibold">Agendamentos</h1>
        </div>
      </header>

      <main className="p-4 md:p-6 max-w-4xl mx-auto">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Meu próximo agendamento</CardTitle>
          </CardHeader>
          <CardContent>
            <AppointmentCard
              image="/placeholder.svg?height=100&width=100"
              title="Espaço Bem Me Quero"
              date="15/11/2021"
              time="16h:30m"
              service="Peeling facial"
              status="Confirmado pelo local"
            />
          </CardContent>
        </Card>

        <div className="flex justify-between mb-4">
          <Button
            variant="outline"
            className="text-purple-600 border-purple-600"
          >
            Filtros
          </Button>
          <Button
            variant="outline"
            className="text-purple-600 border-purple-600"
          >
            Ordenar
          </Button>
        </div>

        <Tabs defaultValue="proximos">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="proximos">PRÓXIMOS</TabsTrigger>
            <TabsTrigger value="concluidos">CONCLUÍDOS</TabsTrigger>
          </TabsList>
          <TabsContent value="proximos">
            <Card>
              <CardContent className="p-0">
                <AppointmentCard
                  image="/placeholder.svg?height=100&width=100"
                  title="Espaço Bem Me Quero"
                  date="15/11/2021"
                  time="16h:30m"
                  service="Peeling facial"
                  status="Confirmado pelo local"
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="concluidos">
            <Card>
              <CardContent>
                <p>Nenhum agendamento concluído.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Filtrar por:</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-around">
            <FilterButton label="Confirmados" icon="check" active />
            <FilterButton label="Aguardando confirmação" icon="clock" />
            <FilterButton label="Recorrentes" icon="repeat" />
          </CardContent>
        </Card>

        <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700">
          OK
        </Button>
      </main>
    </div>
  );
}

function AppointmentCard({ image, title, date, time, service, status }) {
  return (
    <div className="flex items-start p-4 border-b last:border-b-0">
      <img src={image} alt={title} className="w-16 h-16 rounded-full mr-4" />
      <div className="flex-grow">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">
          {date} • {time}
        </p>
        <p className="text-sm">{service}</p>
        <p className="text-sm text-green-600">{status}</p>
      </div>
      <ChevronLeft className="h-6 w-6 transform rotate-180" />
    </div>
  );
}

function FilterButton({ label, icon, active = false }) {
  return (
    <Button
      variant="outline"
      className={`flex flex-col items-center p-2 ${
        active ? "bg-purple-100 text-purple-600 border-purple-600" : ""
      }`}
    >
      {icon === "check" && (
        <div className="w-6 h-6 rounded-full border-2 border-current mb-1" />
      )}
      {icon === "clock" && (
        <div className="w-6 h-6 rounded-full border-2 border-current mb-1" />
      )}
      {icon === "repeat" && (
        <div className="w-6 h-6 rounded-full border-2 border-current mb-1" />
      )}
      <span className="text-xs text-center">{label}</span>
    </Button>
  );
}
