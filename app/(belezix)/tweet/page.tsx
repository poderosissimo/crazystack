'use client'

import { useState } from 'react'
import { Search, Home, Bell, Mail, User, Hash, Scissors, Sparkles, Camera, Calendar, Star, Clock, MapPin, DollarSign, ThumbsUp, ThumbsDown, MessageCircle, Share2 } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type AppointmentStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled'

interface Appointment {
  id: number
  salon: string
  service: string
  date: string
  time: string
  status: AppointmentStatus
  price: number
  duration: number
  stylist: string
  location: string
}

interface BeautyPost {
  id: number
  salon: string
  username: string
  content: string
  image: string
  likes: number
  comments: number
  shares: number
  timestamp: string
  replies: BeautyPost[]
}

interface Review {
  id: number
  appointmentId: number
  rating: number
  comment: string
  timestamp: string
}

const NavItem = ({ icon: Icon, label }: { icon: React.ElementType; label: string }) => (
  <Button variant="ghost" className="w-full justify-start">
    <Icon className="mr-2 h-4 w-4" />
    {label}
  </Button>
)

const PostActions = ({ post, onLike, onReply }: { post: BeautyPost; onLike: () => void; onReply: (content: string) => void }) => (
  <CardFooter className="flex justify-between">
    <Button variant="ghost" size="sm" onClick={onLike}>
      <ThumbsUp className="h-4 w-4 mr-1" /> {post.likes}
    </Button>
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm">
          <MessageCircle className="h-4 w-4 mr-1" /> {post.comments}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Comentários</DialogTitle>
        </DialogHeader>
        <div className="max-h-[300px] overflow-y-auto">
          {post.replies.map((reply) => (
            <div key={reply.id} className="mb-4 p-2 bg-gray-100 rounded">
              <p className="font-semibold">{reply.salon}</p>
              <p>{reply.content}</p>
            </div>
          ))}
        </div>
        <form onSubmit={(e) => {
          e.preventDefault()
          const form = e.target as HTMLFormElement
          const replyContent = (form.elements.namedItem('reply') as HTMLTextAreaElement).value
          onReply(replyContent)
          form.reset()
        }}>
          <Textarea name="reply" placeholder="Adicione um comentário..." className="mb-2" />
          <Button type="submit">Enviar</Button>
        </form>
      </DialogContent>
    </Dialog>
    <Button variant="ghost" size="sm">
      <Share2 className="h-4 w-4 mr-1" /> {post.shares}
    </Button>
  </CardFooter>
)

const AppointmentCard = ({ appointment, onAction, onReview }: { appointment: Appointment; onAction: (id: number, action: 'book' | 'cancel' | 'reschedule') => void; onReview: (id: number, rating: number, comment: string) => void }) => (
  <Card key={appointment.id}>
    <CardHeader>
      <CardTitle>{appointment.service}</CardTitle>
      <CardDescription>{appointment.salon}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-2 gap-2">
        {[
          { icon: Calendar, value: appointment.date },
          { icon: Clock, value: appointment.time },
          { icon: User, value: appointment.stylist },
          { icon: DollarSign, value: `R$ ${appointment.price.toFixed(2)}` },
          { icon: Clock, value: `${appointment.duration} min` },
          { icon: MapPin, value: appointment.location },
        ].map(({ icon: Icon, value }, index) => (
          <div key={index} className="flex items-center">
            <Icon className="h-4 w-4 mr-2" />
            <p>{value}</p>
          </div>
        ))}
      </div>
    </CardContent>
    <CardFooter className="flex justify-between">
      {appointment.status === 'pending' && (
        <>
          <Button onClick={() => onAction(appointment.id, 'book')}>Confirmar</Button>
          <Button variant="outline" onClick={() => onAction(appointment.id, 'cancel')}>Cancelar</Button>
        </>
      )}
      {appointment.status === 'confirmed' && (
        <>
          <Button variant="outline" onClick={() => onAction(appointment.id, 'reschedule')}>Reagendar</Button>
          <Button variant="outline" onClick={() => onAction(appointment.id, 'cancel')}>Cancelar</Button>
        </>
      )}
      {appointment.status === 'completed' && (
        <Dialog>
          <DialogTrigger asChild>
            <Button>Avaliar</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Avalie seu atendimento</DialogTitle>
              <DialogDescription>Compartilhe sua experiência com {appointment.salon}</DialogDescription>
            </DialogHeader>
            <form onSubmit={(e) => {
              e.preventDefault()
              const form = e.target as HTMLFormElement
              const rating = parseInt((form.elements.namedItem('rating') as HTMLSelectElement).value)
              const comment = (form.elements.namedItem('comment') as HTMLTextAreaElement).value
              onReview(appointment.id, rating, comment)
              form.reset()
            }}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="rating" className="text-right">
                    Avaliação
                  </Label>
                  <Select name="rating">
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Selecione uma nota" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <SelectItem key={rating} value={rating.toString()}>
                          {rating} {rating === 1 ? 'estrela' : 'estrelas'}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="comment" className="text-right">
                    Comentário
                  </Label>
                  <Textarea name="comment" placeholder="Conte-nos sobre sua experiência..." className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Enviar avaliação</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      )}
      {appointment.status === 'cancelled' && (
        <p className="text-red-500">Agendamento cancelado</p>
      )}
    </CardFooter>
  </Card>
)

export default function BeautyTweetExpanded() {
  const [newPost, setNewPost] = useState('')
  const [appointments, setAppointments] = useState<Appointment[]>([
    { id: 1, salon: "Beleza Total", service: "Corte de Cabelo", date: "2023-06-15", time: "14:00", status: 'pending', price: 50, duration: 60, stylist: "Ana Silva", location: "Rua das Flores, 123" },
    { id: 2, salon: "Estilo Chique", service: "Manicure", date: "2023-06-16", time: "10:30", status: 'confirmed', price: 30, duration: 45, stylist: "Maria Oliveira", location: "Av. da Beleza, 456" },
    { id: 3, salon: "Glamour Total", service: "Maquiagem", date: "2023-06-17", time: "16:00", status: 'completed', price: 80, duration: 90, stylist: "Carla Santos", location: "Praça da Vaidade, 789" },
  ])
  const [beautyPosts, setBeautyPosts] = useState<BeautyPost[]>([
    {
      id: 1,
      salon: "Salão Beleza Total",
      username: "@belezatotal",
      content: "Novo corte em tendência: o 'bob' moderno está fazendo sucesso! 💇‍♀️✨ #TendênciasCabelo #SalãoDeBeleza",
      image: "/placeholder.svg?height=200&width=400",
      likes: 103,
      comments: 22,
      shares: 18,
      timestamp: "2h atrás",
      replies: [
        {
          id: 101,
          salon: "Cliente Feliz",
          username: "@clientefeliz",
          content: "Adorei o corte que fiz com vocês! Super recomendo!",
          image: "",
          likes: 5,
          comments: 1,
          shares: 0,
          timestamp: "1h atrás",
          replies: []
        }
      ]
    },
    {
      id: 2,
      salon: "Estilo Chique",
      username: "@estilochique",
      content: "Nossas unhas decoradas estão fazendo o maior sucesso! Venha fazer as suas! 💅 #UnhasDecoradas #NailArt",
      image: "/placeholder.svg?height=200&width=400",
      likes: 87,
      comments: 15,
      shares: 12,
      timestamp: "4h atrás",
      replies: []
    }
  ])
  const [reviews, setReviews] = useState<Review[]>([
    { id: 1, appointmentId: 3, rating: 5, comment: "Excelente serviço! A maquiagem ficou perfeita.", timestamp: "2023-06-17 18:30" }
  ])

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newBeautyPost: BeautyPost = {
      id: beautyPosts.length + 1,
      salon: "Meu Salão",
      username: "@meusalao",
      content: newPost,
      image: "",
      likes: 0,
      comments: 0,
      shares: 0,
      timestamp: "Agora",
      replies: []
    }
    setBeautyPosts([newBeautyPost, ...beautyPosts])
    setNewPost('')
  }

  const handleAppointmentAction = (appointmentId: number, action: 'book' | 'cancel' | 'reschedule') => {
    setAppointments(appointments.map(app => 
      app.id === appointmentId 
        ? { ...app, status: action === 'book' ? 'confirmed' : action === 'cancel' ? 'cancelled' : 'pending' } 
        : app
    ))
  }

  const handleReview = (appointmentId: number, rating: number, comment: string) => {
    const newReview: Review = {
      id: reviews.length + 1,
      appointmentId,
      rating,
      comment,
      timestamp: new Date().toISOString()
    }
    setReviews([...reviews, newReview])
  }

  const handleLike = (postId: number) => {
    setBeautyPosts(beautyPosts.map(post => 
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ))
  }

  const handleReply = (postId: number, replyContent: string) => {
    setBeautyPosts(beautyPosts.map(post => {
      if (post.id === postId) {
        const newReply: BeautyPost = {
          id: post.replies.length + 1,
          salon: "Usuário",
          username: "@usuario",
          content: replyContent,
          image: "",
          likes: 0,
          comments: 0,
          shares: 0,
          timestamp: "Agora",
          replies: []
        }
        return { ...post, replies: [...post.replies, newReply], comments: post.comments + 1 }
      }
      return post
    }))
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Barra lateral esquerda */}
          <div className="hidden md:block">
            <nav className="space-y-4">
              {[
                { icon: Home, label: "Início" },
                { icon: Hash, label: "Explorar" },
                { icon: Bell, label: "Notificações" },
                { icon: Mail, label: "Mensagens" },
                { icon: Calendar, label: "Agendamentos" },
                { icon: User, label: "Perfil" },
              ].map((item, index) => (
                <NavItem key={index} icon={item.icon} label={item.label} />
              ))}
            </nav>
          </div>

          {/* Feed principal */}
          <div className="md:col-span-2">
            <header className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">BeautyTweet</h1>
              <div  className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Buscar no BeautyTweet"
                  className="pl-10 pr-4 py-2 rounded-full"
                />
              </div>
            </header>

            <Tabs defaultValue="posts" className="mb-6">
              <TabsList>
                <TabsTrigger value="posts">Posts</TabsTrigger>
                <TabsTrigger value="appointments">Agendamentos</TabsTrigger>
              </TabsList>
              <TabsContent value="posts">
                {/* Criar novo BeautyPost */}
                <div className="bg-white rounded-lg shadow p-4 mb-6">
                  <form onSubmit={handlePostSubmit}>
                    <Textarea
                      placeholder="O que está acontecendo no seu salão?"
                      value={newPost}
                      onChange={(e) => setNewPost(e.target.value)}
                      className="mb-2"
                    />
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2">
                        <Button type="button" variant="ghost" size="icon">
                          <Camera className="h-4 w-4" />
                        </Button>
                        <Button type="button" variant="ghost" size="icon">
                          <Scissors className="h-4 w-4" />
                        </Button>
                      </div>
                      <Button type="submit">BeautyPost</Button>
                    </div>
                  </form>
                </div>

                {/* Feed de BeautyPosts */}
                <div className="space-y-6">
                  {beautyPosts.map((post) => (
                    <Card key={post.id}>
                      <CardHeader>
                        <div className="flex items-center">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt="Avatar" />
                            <AvatarFallback>{post.salon[0]}</AvatarFallback>
                          </Avatar>
                          <div className="ml-2">
                            <CardTitle>{post.salon}</CardTitle>
                            <CardDescription>{post.username} • {post.timestamp}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-2">{post.content}</p>
                        {post.image && (
                          <img src={post.image} alt="Post image" className="w-full h-48 object-cover rounded-md" />
                        )}
                      </CardContent>
                      <PostActions
                        post={post}
                        onLike={() => handleLike(post.id)}
                        onReply={(content) => handleReply(post.id, content)}
                      />
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="appointments">
                <div className="space-y-4">
                  {appointments.map((appointment) => (
                    <AppointmentCard
                      key={appointment.id}
                      appointment={appointment}
                      onAction={handleAppointmentAction}
                      onReview={handleReview}
                    />
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
                {['Estilo Chique', 'Beleza Express', 'Glamour Total'].map((salon) => (
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
    </div>
  )
}