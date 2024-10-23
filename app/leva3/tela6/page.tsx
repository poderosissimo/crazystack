"use client"

import { useState, useEffect } from 'react'
import { Search, Home, Bell, Mail, User, Hash, Scissors, Sparkles, Camera, Calendar, Star, ChevronDown, ChevronUp, MessageCircle, Share2, Filter } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { Toast } from "@/components/ui/toast"

export default function BeautyTweetEnhanced() {
  const [posts, setPosts] = useState([
    { id: 1, salon: "Salão Beleza Total", username: "@belezatotal", content: "Novo corte em tendência: o 'bob' moderno está fazendo sucesso! 💇‍♀️✨ #TendênciasCabelo #SalãoDeBeleza", likes: 103, reposts: 18, comments: [] },
    { id: 2, salon: "Estilo Chique", username: "@estilochique", content: "Promoção de inverno! 20% de desconto em todos os tratamentos capilares. Agende já! ❄️💆‍♀️ #PromoçãoDeInverno #CuidadosComOCabelo", likes: 87, reposts: 25, comments: [] },
  ])
  const [appointments, setAppointments] = useState([
    { id: 1, salon: "Beleza Total", service: "Corte de Cabelo", date: "2023-06-15", time: "14:00", price: "R$ 50,00", duration: "45 min", status: "scheduled" },
    { id: 2, salon: "Estilo Chique", service: "Manicure", date: "2023-06-16", time: "10:30", price: "R$ 35,00", duration: "60 min", status: "completed" },
    { id: 3, salon: "Glamour Total", service: "Maquiagem", date: "2023-06-17", time: "16:00", price: "R$ 80,00", duration: "90 min", status: "scheduled" },
  ])
  const [postFilter, setPostFilter] = useState("recent")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [showNotification, setShowNotification] = useState(false)
  const [recommendedServices, setRecommendedServices] = useState([
    { id: 1, service: "Hidratação Capilar", salon: "Beleza Total", price: "R$ 70,00" },
    { id: 2, service: "Pedicure", salon: "Estilo Chique", price: "R$ 40,00" },
  ])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Implementação do envio do post
  }

  const handleShare = (postId: number) => {
    console.log(`Compartilhando post ${postId}`)
    // Implementação do compartilhamento
  }

  const handleHashtagClick = (hashtag: string) => {
    console.log(`Buscando posts com a hashtag ${hashtag}`)
    // Implementação da busca por hashtag
  }

  const filteredPosts = posts.filter(post => 
    post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.salon.toLowerCase().includes(searchTerm.toLowerCase())
  ).sort((a, b) => {
    if (postFilter === "recent") {
      return b.id - a.id
    } else if (postFilter === "popular") {
      return (b.likes + b.reposts) - (a.likes + a.reposts)
    }
    return 0
  })

  const filteredAppointments = appointments.filter(appointment => 
    appointment.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
    appointment.salon.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Barra lateral esquerda */}
          <div className="hidden md:block">
            <nav className="space-y-4">
              <Button variant="ghost" className="w-full justify-start">
                <Home className="mr-2 h-4 w-4" />
                Início
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Hash className="mr-2 h-4 w-4" />
                Explorar
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Bell className="mr-2 h-4 w-4" />
                Notificações
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Mail className="mr-2 h-4 w-4" />
                Mensagens
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Calendar className="mr-2 h-4 w-4" />
                Agendamentos
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <User className="mr-2 h-4 w-4" />
                Perfil
              </Button>
            </nav>
          </div>

          {/* Feed principal */}
          <div className="md:col-span-2">
            <header className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">BeautyTweet</h1>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Buscar no BeautyTweet"
                  className="pl-10 pr-4 py-2 rounded-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </header>

            <Tabs defaultValue="posts" className="mb-6">
              <TabsList>
                <TabsTrigger value="posts">Posts</TabsTrigger>
                <TabsTrigger value="appointments">Agendamentos</TabsTrigger>
              </TabsList>
              <TabsContent value="posts">
                <div className="mb-4 flex justify-between items-center">
                  <Select value={postFilter} onValueChange={setPostFilter}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filtrar posts" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recent">Mais recentes</SelectItem>
                      <SelectItem value="popular">Mais populares</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {/* Feed de BeautyPosts */}
                <div className="space-y-6">
                  {filteredPosts.map((post) => (
                    <Card key={post.id} className="bg-white rounded-lg shadow">
                      <CardHeader>
                        <div className="flex items-center">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt="Avatar" />
                            <AvatarFallback>{post.salon[0]}</AvatarFallback>
                          </Avatar>
                          <div className="ml-2">
                            <CardTitle>{post.salon}</CardTitle>
                            <CardDescription>{post.username}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-2">
                          {post.content.split(' ').map((word, index) => 
                            word.startsWith('#') ? (
                              <span 
                                key={index} 
                                className="text-blue-500 cursor-pointer" 
                                onClick={() => handleHashtagClick(word)}
                              >
                                {word}{' '}
                              </span>
                            ) : (
                              word + ' '
                            )
                          )}
                        </p>
                        <div className="rounded-lg overflow-hidden mb-2">
                          <img src="/placeholder.svg?height=200&width=400" alt="Post image" className="w-full h-48 object-cover" />
                        </div>
                        <div className="flex justify-between text-gray-500">
                          <Button variant="ghost" size="sm">
                            ❤️ {post.likes}
                          </Button>
                          <Button variant="ghost" size="sm">
                            🔁 {post.reposts}
                          </Button>
                          <Button variant="ghost" size="sm">
                            💬 {post.comments.length}
                          </Button>
                          <Button variant="ghost" size="sm" onClick={() => handleShare(post.id)}>
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="appointments">
                <div className="mb-4 flex justify-between items-center">
                  <Input
                    type="search"
                    placeholder="Buscar agendamentos"
                    className="max-w-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Calendário de Agendamentos</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CalendarComponent
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        className="rounded-md border"
                      />
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Serviços Recomendados</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {recommendedServices.map((service) => (
                          <li key={service.id} className="flex justify-between items-center">
                            <span>{service.service} - {service.salon}</span>
                            <Badge>{service.price}</Badge>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="space-y-4">
                  {filteredAppointments.map((appointment) => (
                    <Card key={appointment.id}>
                      <CardHeader>
                        <CardTitle>{appointment.service}</CardTitle>
                        <CardDescription>{appointment.salon}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>Data: {appointment.date}</p>
                        <p>Horário: {appointment.time}</p>
                        <p>Duração: {appointment.duration}</p>
                        <p>Preço: {appointment.price}</p>
                        <p>Status: {appointment.status}</p>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        {appointment.status === 'scheduled' && (
                          <>
                            <Button variant="destructive">Cancelar</Button>
                            <Button variant="outline">Reagendar</Button>
                          </>
                        )}
                        {appointment.status === 'completed' && (
                          <Button variant="outline">Avaliar</Button>
                        )}
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Barra lateral direita */}
          <div className="hidden md:block">
            <div className="bg-white rounded-lg shadow p-4 mb-6">
              <h2 className="font-bold mb-4">Tendências para você</h2>
              <ul className="space-y-2">
                <li>#CabelosSaudáveis</li>
                <li>#UnhasDaTemporada</li>
                <li>#MaquiagemNatural</li>
                <li>#CuidadosComAPele</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="font-bold mb-4">Quem seguir</h2>
              <ul className="space-y-4">
                {['Estilo Chique', 'Beleza Express',   'Glamour Total'].map((salon) => (
                  <li key={salon} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt="Avatar" />
                        <AvatarFallback>{salon[0]}</AvatarFallback>
                      </Avatar>
                      <div className="ml-2">
                        <p className="font-semibold">{salon}</p>
                        <p className="text-sm text-gray-500">@{salon.toLowerCase().replace(' ', '')}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Seguir</Button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {showNotification && (
        <Toast>
          <div className="flex items-center">
            <Bell className="h-4 w-4 mr-2" />
            <span>Você tem um agendamento amanhã às 14:00!</span>
          </div>
        </Toast>
      )}
    </div>
  )
}
