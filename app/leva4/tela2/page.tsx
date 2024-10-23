'use client'

import { useState } from 'react'
import { Calendar, Clock, MapPin, Scissors, X, Edit2, Check, AlertTriangle } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

interface Appointment {
  id: number
  salonName: string
  serviceName: string
  date: string
  time: string
  price: string
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
}

export default function UserAppointments() {
  const [appointments, setAppointments] = useState<Appointment[]>([
    { id: 1, salonName: "Salão Beleza Total", serviceName: "Corte de Cabelo", date: "2023-06-20", time: "14:00", price: "R$ 50,00", status: 'confirmed' },
    { id: 2, salonName: "Estilo Chique", serviceName: "Manicure", date: "2023-06-22", time: "10:30", price: "R$ 35,00", status: 'pending' },
    { id: 3, salonName: "Glamour Total", serviceName: "Maquiagem", date: "2023-06-25", time: "16:00", price: "R$ 80,00", status: 'confirmed' },
    { id: 4, salonName: "Beleza Express", serviceName: "Hidratação", date: "2023-06-18", time: "11:00", price: "R$ 70,00", status: 'completed' },
  ])

  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null)
  const [isReschedulingDialogOpen, setIsReschedulingDialogOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  const handleReschedule = (appointment: Appointment) => {
    setSelectedAppointment(appointment)
    setIsReschedulingDialogOpen(true)
  }

  const handleCancelAppointment = (appointmentId: number) => {
    setAppointments(appointments.map(app => 
      app.id === appointmentId ? { ...app, status: 'cancelled' as const } : app
    ))
  }

  const confirmReschedule = (newDate: Date, newTime: string) => {
    if (selectedAppointment) {
      setAppointments(appointments.map(app =>
        app.id === selectedAppointment.id
          ? { ...app, date: newDate.toISOString().split('T')[0], time: newTime, status: 'confirmed' as const }
          : app
      ))
      setIsReschedulingDialogOpen(false)
    }
  }

  const getStatusBadge = (status: Appointment['status']) => {
    switch (status) {
      case 'pending':
        return <Badge variant="secondary">Pendente</Badge>
      case 'confirmed':
        return <Badge variant="default">Confirmado</Badge>
      case 'completed':
        return <Badge variant="success">Concluído</Badge>
      case 'cancelled':
        return <Badge variant="destructive">Cancelado</Badge>
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Meus Agendamentos</h1>

      <Tabs defaultValue="upcoming">
        <TabsList className="mb-4">
          <TabsTrigger value="upcoming">Próximos</TabsTrigger>
          <TabsTrigger value="past">Passados</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming">
          <div className="space-y-4">
            {appointments.filter(app => ['pending', 'confirmed'].includes(app.status)).map((appointment) => (
              <Card key={appointment.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${appointment.salonName[0]}`} />
                        <AvatarFallback>{appointment.salonName[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle>{appointment.serviceName}</CardTitle>
                        <CardDescription>{appointment.salonName}</CardDescription>
                      </div>
                    </div>
                    {getStatusBadge(appointment.status)}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      {appointment.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4" />
                      {appointment.time}
                    </div>
                    <div className="flex items-center">
                      <Scissors className="mr-2 h-4 w-4" />
                      {appointment.price}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end space-x-2">
                  {appointment.status !== 'cancelled' && (
                    <>
                      <Button variant="outline" onClick={() => handleReschedule(appointment)}>
                        <Edit2 className="mr-2 h-4 w-4" />
                        Reagendar
                      </Button>
                      <Button variant="destructive" onClick={() => handleCancelAppointment(appointment.id)}>
                        <X className="mr-2 h-4 w-4" />
                        Cancelar
                      </Button>
                    </>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="past">
          <div className="space-y-4">
            {appointments.filter(app => ['completed', 'cancelled'].includes(app.status)).map((appointment) => (
              <Card key={appointment.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${appointment.salonName[0]}`} />
                        <AvatarFallback>{appointment.salonName[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle>{appointment.serviceName}</CardTitle>
                        <CardDescription>{appointment.salonName}</CardDescription>
                      </div>
                    </div>
                    {getStatusBadge(appointment.status)}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      {appointment.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4" />
                      {appointment.time}
                    </div>
                    <div className="flex items-center">
                      <Scissors className="mr-2 h-4 w-4" />
                      {appointment.price}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  {appointment.status === 'completed' && (
                    <Button variant="outline">
                      Avaliar Serviço
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <Dialog open={isReschedulingDialogOpen} onOpenChange={setIsReschedulingDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Reagendar Agendamento</DialogTitle>
            <DialogDescription>
              Escolha uma nova data e horário para o seu agendamento.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <CalendarComponent
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border"
            />
            <Select onValueChange={(value) => confirmReschedule(selectedDate!, value)}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione um horário" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="09:00">09:00</SelectItem>
                <SelectItem value="10:00">10:00</SelectItem>
                <SelectItem value="11:00">11:00</SelectItem>
                <SelectItem value="14:00">14:00</SelectItem>
                <SelectItem value="15:00">15:00</SelectItem>
                <SelectItem value="16:00">16:00</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsReschedulingDialogOpen(false)}>Cancelar</Button>
            <Button onClick={() => confirmReschedule(selectedDate!, "09:00")}>Confirmar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}