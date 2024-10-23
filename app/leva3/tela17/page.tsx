"use client"

import React, { useState } from 'react'
import { Bell, Check, Info, AlertTriangle, Trash2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

type Notification = {
  id: number
  type: 'info' | 'success' | 'warning'
  message: string
  time: string
  read: boolean
}

export default function NotificationsPopover() {
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: 1, type: 'info', message: 'Nova atualização disponível', time: '5 min atrás', read: false },
    { id: 2, type: 'success', message: 'Tarefa concluída com sucesso', time: '1 hora atrás', read: false },
    { id: 3, type: 'warning', message: 'Atenção: prazo se aproximando', time: '2 horas atrás', read: false },
    { id: 4, type: 'info', message: 'Lembrete: reunião às 15h', time: '3 horas atrás', read: true },
    { id: 5, type: 'success', message: 'Projeto aprovado pelo cliente', time: '1 dia atrás', read: true },
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
      <PopoverContent className="w-80" align="end" side="bottom">
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
        <ScrollArea className="h-[300px] overflow-y-auto">
          {notifications.map((notification) => (
            <div 
              key={notification.id} 
              className={`mb-4 p-3 rounded-md cursor-pointer ${
                notification.read ? 'bg-secondary' : 
                notification.type === 'info' ? 'bg-blue-100' :
                notification.type === 'success' ? 'bg-green-100' :
                'bg-yellow-100'
              }`}
              onClick={() => markAsRead(notification.id)}
            >
              <div className="flex justify-between items-start">
                <div className="flex items-start space-x-2">
                  {notification.type === 'info' && <Info className="h-5 w-5 text-blue-500" />}
                  {notification.type === 'success' && <Check className="h-5 w-5 text-green-500" />}
                  {notification.type === 'warning' && <AlertTriangle className="h-5 w-5 text-yellow-500" />}
                  <div>
                    <p className="text-sm font-medium">{notification.message}</p>
                    <p className="text-xs text-muted-foreground">{notification.time}</p>
                  </div>
                </div>
                <div className="flex space-x-1">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={(e) => { 
                      e.stopPropagation(); 
                      removeNotification(notification.id) 
                    }} 
                    className="h-6 w-6"
                  >
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
  )
}