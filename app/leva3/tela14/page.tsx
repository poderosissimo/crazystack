
"use client"
import React, { useState } from 'react'
import { Bell, Calendar, Clock, AlertTriangle, CheckCircle, User, Briefcase, Trash2, X, Star, Filter, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

type NotificationType = 'reminder' | 'change' | 'cancellation' | 'confirmation' | 'review'
type UserType = 'client' | 'provider'

interface Notification {
  id: number
  type: NotificationType
  userType: UserType
  message: string
  time: string
  read: boolean
  appointmentId: number
  actionLabel?: string
  actionUrl?: string
}

const getNotificationIcon = (type: NotificationType) => {
  switch (type) {
    case 'reminder': return <Clock className="h-5 w-5 text-blue-500" />
    case 'change': return <Calendar className="h-5 w-5 text-yellow-500" />
    case 'cancellation': return <X className="h-5 w-5 text-red-500" />
    case 'confirmation': return <CheckCircle className="h-5 w-5 text-green-500" />
    case 'review': return <Star className="h-5 w-5 text-purple-500" />
  }
}

const getNotificationColor = (type: NotificationType, read: boolean) => {
  if (read) return 'bg-secondary'
  switch (type) {
    case 'reminder': return 'bg-blue-100'
    case 'change': return 'bg-yellow-100'
    case 'cancellation': return 'bg-red-100'
    case 'confirmation': return 'bg-green-100'
    case 'review': return 'bg-purple-100'
  }
}

export default function NotificationsList() {
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: 1, type: 'reminder', userType: 'client', message: 'Lembrete: Consulta com Dr. Silva amanhã às 14h', time: '1 hora atrás', read: false, appointmentId: 101, actionLabel: 'Ver detalhes', actionUrl: '/appointment/101' },
    { id: 2, type: 'change', userType: 'provider', message: 'O paciente João solicitou mudança de horário', time: '2 horas atrás', read: false, appointmentId: 102, actionLabel: 'Responder', actionUrl: '/reschedule/102' },
    { id: 3, type: 'cancellation', userType: 'provider', message: 'A consulta das 16h foi cancelada pelo paciente', time: '3 horas atrás', read: false, appointmentId: 103 },
    { id: 4, type: 'confirmation', userType: 'client', message: 'Sua consulta foi confirmada para 18/05 às 10h', time: '1 dia atrás', read: true, appointmentId: 104, actionLabel: 'Adicionar ao calendário', actionUrl: '/calendar/add/104' },
    { id: 5, type: 'review', userType: 'provider', message: 'Novo feedback recebido do paciente Maria', time: '2 dias atrás', read: true, appointmentId: 105, actionLabel: 'Ver avaliação', actionUrl: '/review/105' },
    // Adicione mais notificações aqui para demonstrar a paginação
  ])

  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(5)
  const [filter, setFilter] = useState<{ type: NotificationType | 'all', userType: UserType | 'all', read: 'all' | 'read' | 'unread' }>({
    type: 'all',
    userType: 'all',
    read: 'all'
  })
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notif =>
      notif.id === id ? { ...notif, read: true } : notif
    ))
  }

  const removeNotification = (id: number) => {
    setNotifications(notifications.filter(notif => notif.id !== id))
  }

  const filteredNotifications = notifications.filter(notif =>
    (filter.type === 'all' || notif.type === filter.type) &&
    (filter.userType === 'all' || notif.userType === filter.userType) &&
    (filter.read === 'all' || (filter.read === 'read' ? notif.read : !notif.read))
  )

  const pageCount = Math.ceil(filteredNotifications.length / itemsPerPage)
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredNotifications.slice(indexOfFirstItem, indexOfLastItem)

  const changePage = (newPage: number) => {
    setIsLoading(true)
    setCurrentPage(newPage)
    setTimeout(() => setIsLoading(false), 500) // Simula um carregamento de 500ms
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar for desktop / Drawer for mobile */}
      <div className="hidden md:block w-64 bg-white p-6 shadow-md">
        <h2 className="text-xl font-semibold mb-4">Filtros</h2>
        <div className="space-y-4">
          <div>
            <Label htmlFor="type-filter">Tipo de Notificação</Label>
            <Select onValueChange={(value) => setFilter({ ...filter, type: value as NotificationType | 'all' })}>
              <SelectTrigger id="type-filter">
                <SelectValue placeholder="Todos os tipos" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os tipos</SelectItem>
                <SelectItem value="reminder">Lembrete</SelectItem>
                <SelectItem value="change">Mudança</SelectItem>
                <SelectItem value="cancellation">Cancelamento</SelectItem>
                <SelectItem value="confirmation">Confirmação</SelectItem>
                <SelectItem value="review">Avaliação</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="user-type-filter">Tipo de Usuário</Label>
            <Select onValueChange={(value) => setFilter({ ...filter, userType: value as UserType | 'all' })}>
              <SelectTrigger id="user-type-filter">
                <SelectValue placeholder="Todos os usuários" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os usuários</SelectItem>
                <SelectItem value="client">Cliente</SelectItem>
                <SelectItem value="provider">Prestador</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="read-filter">Status de Leitura</Label>
            <Select onValueChange={(value) => setFilter({ ...filter, read: value as 'all' | 'read' | 'unread' })}>
              <SelectTrigger id="read-filter">
                <SelectValue placeholder="Todas as notificações" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas as notificações</SelectItem>
                <SelectItem value="read">Lidas</SelectItem>
                <SelectItem value="unread">Não lidas</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
          <DrawerTrigger asChild>
            <Button variant="outline" size="icon" className="fixed top-4 left-4">
              <Filter className="h-4 w-4" />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Filtros</DrawerTitle>
            </DrawerHeader>
            <div className="p-4">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="type-filter">Tipo de Notificação</Label>
                  <Select onValueChange={(value) => setFilter({ ...filter, type: value as NotificationType | 'all' })}>
                    <SelectTrigger id="type-filter">
                      <SelectValue placeholder="Todos os tipos" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos os tipos</SelectItem>
                      <SelectItem value="reminder">Lembrete</SelectItem>
                      <SelectItem value="change">Mudança</SelectItem>
                      <SelectItem value="cancellation">Cancelamento</SelectItem>
                      <SelectItem value="confirmation">Confirmação</SelectItem>
                      <SelectItem value="review">Avaliação</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="user-type-filter">Tipo de Usuário</Label>
                  <Select onValueChange={(value) => setFilter({ ...filter, userType: value as UserType | 'all' })}>
                    <SelectTrigger id="user-type-filter">
                      <SelectValue placeholder="Todos os usuários" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos os usuários</SelectItem>
                      <SelectItem value="client">Cliente</SelectItem>
                      <SelectItem value="provider">Prestador</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="read-filter">Status de Leitura</Label>
                  <Select onValueChange={(value) => setFilter({ ...filter, read: value as 'all' | 'read' | 'unread' })}>
                    <SelectTrigger id="read-filter">
                      <SelectValue placeholder="Todas as notificações" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todas as notificações</SelectItem>
                      <SelectItem value="read">Lidas</SelectItem>
                      <SelectItem value="unread">Não lidas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outline">Fechar</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>

      {/* Main content */}
      <div className="flex-1 p-4 md:p-10">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Notificações</h1>
        {isLoading && (
          <div className="flex justify-center items-center h-20">
            <Loader2 className="h-6 w-6 animate-spin" />
          </div>
        )}
        <div className="bg-white rounded-lg shadow-md">
          <ScrollArea className="h-[calc(100vh-200px)]">
            {currentItems.map((notification) => (
              <div
                key={notification.id}
                className={`p-3 md:p-4 border-b last:border-b-0 ${getNotificationColor(notification.type, notification.read)}`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-start space-x-3">
                    {getNotificationIcon(notification.type)}
                    <div>
                      <div className="flex items-center space-x-2">
                        <p className="text-xs md:text-sm font-medium">{notification.message}</p>
                        <Badge variant="outline" className="text-xs">
                          {notification.userType === 'client' ? <User className="h-3 w-3" /> : <Briefcase className="h-3 w-3" />}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                      {notification.actionLabel && (
                        <Button variant="link" size="sm" className="p-0 h-auto" asChild>
                          <a href={notification.actionUrl}>{notification.actionLabel}</a>
                        </Button>
                      )}
                    </div>
                  </div>
                  <div className="flex space-x-1 mt-2 md:mt-0">
                    {!notification.read && (
                      <Button variant="ghost" size="sm" onClick={() => markAsRead(notification.id)} className="h-8 w-8 md:h-8 md:w-8">
                        <CheckCircle className="h-4 w-4" />
                        <span className="sr-only">Marcar como lida</span>
                      </Button>
                    )}
                    <Button variant="ghost" size="sm" onClick={() => removeNotification(notification.id)} className="h-8 w-8 md:h-8 md:w-8">
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Remover notificação</span>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </ScrollArea>
        </div>
        {/* Pagination */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-4 space-y-2 md:space-y-0">
          <p className="text-xs md:text-sm text-muted-foreground order-2 md:order-1">
            Mostrando {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, filteredNotifications.length)} de {filteredNotifications.length}
          </p>
          <div className="flex space-x-2 order-1 md:order-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => changePage(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1 || isLoading}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => changePage(Math.min(currentPage + 1, pageCount))}
              disabled={currentPage === pageCount || isLoading}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}