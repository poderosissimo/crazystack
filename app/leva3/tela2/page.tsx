'use client'

import { useState } from 'react'
import { Star, MapPin, Clock, Phone, Instagram, Facebook, Calendar, Globe, Mail, Scissors, Camera, Award, Users, Percent, Gift } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

interface Service {
  id: number
  name: string
  price: string
  duration: string
}

interface Review {
  id: number
  user: string
  rating: number
  comment: string
}

interface SalonProfileProps {
  salonId: string
  name: string
  rating: number
  totalReviews: number
  address: string
  openingHours: string
  phone: string
  website: string
  email: string
  instagram: string
  facebook: string
  services: Service[]
  reviews: Review[]
  specialties: string[]
  yearsInBusiness: number
}

export default function SalonProfile({
  salonId,
  name,
  rating,
  totalReviews,
  address,
  openingHours,
  phone,
  website,
  email,
  instagram,
  facebook,
  services,
  reviews,
  specialties,
  yearsInBusiness
}: SalonProfileProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [isBookingDialogOpen, setIsBookingDialogOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<Service | null>(null)

  const handleBooking = (date: Date, time: string) => {
    console.log(`Agendamento para ${date.toLocaleDateString()} às ${time}`)
    setIsBookingDialogOpen(false)
    // Implementar lógica de agendamento aqui
  }

  const getAvatarFallback = (name: string) => {
    return name && name.length > 0 ? name[0].toUpperCase() : 'S'
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mb-8">
        <CardHeader className="flex flex-row items-center space-x-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src={`/placeholder.svg?height=80&width=80&text=${getAvatarFallback(name)}`} alt={name} />
            <AvatarFallback>{getAvatarFallback(name)}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-2xl">{name || 'Nome do Salão'}</CardTitle>
            <CardDescription className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 mr-1" />
              {rating || 0} ({totalReviews || 0} avaliações)
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              {address || 'Endereço não disponível'}
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              {openingHours || 'Horário não disponível'}
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-2" />
              {phone || 'Telefone não disponível'}
            </div>
            <div className="flex items-center">
              <Globe className="h-5 w-5 mr-2" />
              {website ? (
                <a href={website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{website}</a>
              ) : (
                'Website não disponível'
              )}
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-2" />
              {email ? (
                <a href={`mailto:${email}`} className="text-blue-500 hover:underline">{email}</a>
              ) : (
                'Email não disponível'
              )}
            </div>
            <div className="flex items-center space-x-4">
              {instagram && (
                <div className="flex items-center">
                  <Instagram className="h-5 w-5 mr-1" />
                  <a href={`https://instagram.com/${instagram}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{instagram}</a>
                </div>
              )}
              {facebook && (
                <div className="flex items-center">
                  <Facebook className="h-5 w-5 mr-1" />
                  <a href={`https://facebook.com/${facebook}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{facebook}</a>
                </div>
              )}
            </div>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Especialidades:</h3>
            <div className="flex flex-wrap gap-2">
              {specialties && specialties.length > 0 ? (
                specialties.map((specialty, index) => (
                  <Badge key={index} variant="secondary">{specialty}</Badge>
                ))
              ) : (
                <span>Nenhuma especialidade listada</span>
              )}
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <Award className="h-5 w-5 mr-2" />
            <span>{yearsInBusiness || 0} anos de experiência</span>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={() => setIsBookingDialogOpen(true)}>Agendar Serviço</Button>
        </CardFooter>
      </Card>

      <Tabs defaultValue="services">
        <TabsList className="mb-4">
          <TabsTrigger value="services">Serviços</TabsTrigger>
          <TabsTrigger value="reviews">Avaliações</TabsTrigger>
        </TabsList>
        <TabsContent value="services">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services && services.length > 0 ? (
              services.map((service) => (
                <Card key={service.id}>
                  <CardHeader>
                    <CardTitle>{service.name}</CardTitle>
                    <CardDescription>{service.duration}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">{service.price}</p>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={() => {
                      setSelectedService(service)
                      setIsBookingDialogOpen(true)
                    }}>Agendar</Button>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <p>Nenhum serviço disponível no momento.</p>
            )}
          </div>
        </TabsContent>
        <TabsContent value="reviews">
          <div className="space-y-4">
            {reviews && reviews.length > 0 ? (
              reviews.map((review) => (
                <Card key={review.id}>
                  <CardHeader>
                    <CardTitle>{review.user}</CardTitle>
                    <CardDescription className="flex items-center">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400" />
                      ))}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{review.comment}</p>
                  </CardContent>
                </Card>
              ))
            ) : (
              <p>Nenhuma avaliação disponível no momento.</p>
            )}
          </div>
        </TabsContent>
      </Tabs>

      <Dialog open={isBookingDialogOpen} onOpenChange={setIsBookingDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Agendar Serviço</DialogTitle>
            <DialogDescription>
              {selectedService ? `Agendando: ${selectedService.name}` : 'Escolha a data e horário para seu agendamento.'}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <CalendarComponent
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border"
            />
            <Select onValueChange={(value) => handleBooking(selectedDate!, value)}>
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
            <Button onClick={() => setIsBookingDialogOpen(false)}>Cancelar</Button>
            <Button onClick={() => handleBooking(selectedDate!, "09:00")}>Confirmar Agendamento</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}