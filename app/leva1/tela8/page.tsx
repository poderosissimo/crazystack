'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Star, MessageCircle, ChevronRight, Truck, Package, Wrench } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"


export default function ServiceProviderProfile() {
  const theme="dark"
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="container mx-auto p-4 space-y-6 bg-background min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-primary">Perfil do Prestador de Serviço</h1>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? '🌞' : '🌙'}
        </Button>
      </div>

      <Card className="shadow-lg">
        <CardHeader className="bg-primary/10">
          <CardTitle className="text-2xl text-primary">Informações Pessoais</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 pt-6">
          <Avatar className="w-32 h-32 border-4 border-primary">
            <AvatarImage src="/placeholder.svg" alt="João Silva" />
            <AvatarFallback className="text-2xl">JS</AvatarFallback>
          </Avatar>
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold text-primary mb-2">João Silva</h2>
            <Button variant="outline" className="mb-4">
              <MessageCircle className="mr-2 h-4 w-4" /> Contatar via WhatsApp
            </Button>
            <h3 className="font-semibold text-lg mb-2">Especialidades:</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              <Badge variant="secondary"><Truck className="mr-1 h-4 w-4" /> Mudanças residenciais</Badge>
              <Badge variant="secondary"><Package className="mr-1 h-4 w-4" /> Transporte de itens frágeis</Badge>
              <Badge variant="secondary"><Wrench className="mr-1 h-4 w-4" /> Montagem e desmontagem de móveis</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader className="bg-primary/10">
          <CardTitle className="text-2xl text-primary">Avaliações e Feedback</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="text-4xl font-bold text-primary">4.5</div>
            <div className="flex">
              {[1, 2, 3, 4].map((i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400" />
              ))}
              <Star className="w-6 h-6 fill-muted stroke-muted-foreground" />
            </div>
            <div className="text-sm text-muted-foreground">(120 avaliações)</div>
          </div>
          <div className="space-y-4">
            <Card className="bg-primary/5">
              <CardContent className="py-3">
                <p className="text-sm italic">"Excelente serviço, muito cuidadoso com os móveis e extremamente pontual. Recomendo!"</p>
              </CardContent>
            </Card>
            <Card className="bg-primary/5">
              <CardContent className="py-3">
                <p className="text-sm italic">"Pontual, eficiente e profissional. Fez a mudança em tempo recorde sem nenhum dano. Ótimo trabalho!"</p>
              </CardContent>
            </Card>
          </div>
          <Button variant="link" className="mt-4">
            Ver mais comentários <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader className="bg-primary/10">
          <CardTitle className="text-2xl text-primary">Contato e Especialidades</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex items-center space-x-2 mb-4">
            <MessageCircle className="h-5 w-5 text-primary" />
            <span className="font-semibold">+55 11 91234-5678</span>
          </div>
          <Button variant="outline" className="mb-6">
            <MessageCircle className="mr-2 h-4 w-4" /> Abrir Chat no WhatsApp
          </Button>
          <h3 className="font-semibold text-lg mb-2">Especialidades:</h3>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Mudanças residenciais</li>
            <li>Transporte de itens frágeis</li>
            <li>Montagem e desmontagem de móveis</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader className="bg-primary/10">
          <CardTitle className="text-2xl text-primary">Histórico de Serviços</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="text-lg font-semibold mb-4">Total de Serviços Realizados: <span className="text-primary">250</span></p>
          <h3 className="font-semibold text-lg mb-2">Serviços Recentes:</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Truck className="mr-2 h-4 w-4 text-primary" />
              <span>Mudança residencial (Janeiro/2024)</span>
            </li>
            <li className="flex items-center">
              <Package className="mr-2 h-4 w-4 text-primary" />
              <span>Transporte de equipamentos (Fevereiro/2024)</span>
            </li>
            <li className="flex items-center">
              <Truck className="mr-2 h-4 w-4 text-primary" />
              <span>Mudança comercial (Março/2024)</span>
            </li>
          </ul>
          <Button variant="link" className="mt-4">
            Ver histórico completo <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}