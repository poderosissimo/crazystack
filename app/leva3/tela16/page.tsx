"use client"

import React, { useState } from 'react'
import { Bell, Calendar, Clock, AlertTriangle, CheckCircle, User, Briefcase, Trash2, X,Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

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

export default function NotificationsPopover() {
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: 1, type: 'reminder', userType: 'client', message: 'Lembrete: Consulta com Dr. Silva amanhã às 14h', time: '1 hora atrás', read: false, appointmentId: 101, actionLabel: 'Ver detalhes', actionUrl: '/appointment/101' },
    { id: 2, type: 'change', userType: 'provider', message: 'O paciente João solicitou mudança de horário', time: '2 horas atrás', read: false, appointmentId: 102, actionLabel: 'Responder', actionUrl: '/reschedule/102' },
    { id: 3, type: 'cancellation', userType: 'provider', message: 'A consulta das 16h foi cancelada pelo paciente', time: '3 horas atrás', read: false, appointmentId: 103 },
    { id: 4, type: 'confirmation', userType: 'client', message: 'Sua consulta foi confirmada para 18/05 às 10h', time: '1 dia atrás', read: true, appointmentId: 104, actionLabel: 'Adicionar ao calendário', actionUrl: '/calendar/add/104' },
    { id: 5, type: 'review', userType: 'provider', message: 'Novo feedback recebido do paciente Maria', time: '2 dias atrás', read: true, appointmentId: 105, actionLabel: 'Ver avaliação', actionUrl: '/review/105' },
  ])

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ))
  }

  const removeNotification = (id: number) => {
    setNotifications(notifications.filter(notif => notif.id !== id))
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, read: true })))
  }

  const unreadCount = notifications.filter(n => !n.read).length

  return (
    <TooltipProvider>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            {unreadCount > 0 && (
              <Badge variant="destructive" className="absolute -top-2 -right-2 px-2 py-1">
                {unreadCount}
              </Badge>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-96" align="end" side="bottom">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold">Notificações</h3>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" onClick={markAllAsRead}>
                Marcar todas como lidas
              </Button>
              <Badge variant="secondary">{notifications.length} total</Badge>
            </div>
          </div>
          <Separator className="my-2" />
          <ScrollArea className="h-[400px] overflow-y-auto">
            {notifications.map((notification) => (
              <div 
                key={notification.id} 
                className={`mb-4 p-3 rounded-md ${getNotificationColor(notification.type, notification.read)}`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-start space-x-2">
                    {getNotificationIcon(notification.type)}
                    <div>
                      <div className="flex items-center space-x-2">
                        <p className="text-sm font-medium">{notification.message}</p>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Badge variant="outline" className="text-xs">
                              {notification.userType === 'client' ? <User className="h-3 w-3" /> : <Briefcase className="h-3 w-3" />}
                            </Badge>
                          </TooltipTrigger>
                          <TooltipContent>
                            {notification.userType === 'client' ? 'Notificação para cliente' : 'Notificação para prestador'}
                          </TooltipContent>
                        </Tooltip>
                      </div>
                      <p className="text-xs text-muted-foreground">{notification.time}</p>
                      {notification.actionLabel && (
                        <Button variant="link" size="sm" className="p-0 h-auto" asChild>
                          <a href={notification.actionUrl}>{notification.actionLabel}</a>
                        </Button>
                      )}
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {!notification.read && (
                      <Button variant="ghost" size="icon" onClick={() => markAsRead(notification.id)} className="h-6 w-6">
                        <CheckCircle className="h-4 w-4" />
                      </Button>
                    )}
                    <Button variant="ghost" size="icon" onClick={() => removeNotification(notification.id)} className="h-6 w-6">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </ScrollArea>
          {notifications.length === 0 && (
            <p className="text-center text-muted-foreground py-4">Nenhuma notificação</p>
          )}
          <Separator className="my-2" />
          <div className="flex justify-end">
            <Button variant="outline" size="sm" onClick={() => setNotifications([])}>
              Limpar todas
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </TooltipProvider>
  )
}