'use client'

import { useState } from 'react'
import { User, Truck, MapPin, Clock, DollarSign, Bell, Shield, Save } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ConfiguracaoPrestador() {
  const [config, setConfig] = useState({
    nome: 'João Silva',
    email: 'joao.silva@email.com',
    telefone: '(11) 98765-4321',
    bio: 'Especialista em mudanças residenciais e comerciais com 10 anos de experiência.',
    raioAtuacao: '50',
    horariosDisponiveis: ['manha', 'tarde'],
    precoMinimo: '200',
    notificacoesApp: true,
    notificacoesEmail: false,
    verificacaoDuasEtapas: true,
  })

  const handleChange = (field: string, value: string | boolean | string[]) => {
    setConfig(prev => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    console.log('Configurações salvas:', config)
    // Aqui você implementaria a lógica para salvar as configurações no backend
  }

  return (
    <div className="container mx-auto p-4 space-y-6 bg-background min-h-screen">
      <h1 className="text-3xl font-bold text-primary text-center mb-6">Configurações do Prestador</h1>

      <Card className="shadow-lg">
        <CardHeader className="bg-primary/10">
          <CardTitle className="text-2xl text-primary flex items-center">
            <User className="mr-2 h-6 w-6" />
            Informações Pessoais
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          <div className="flex items-center space-x-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src="/placeholder.svg" alt={config.nome} />
              <AvatarFallback>{config.nome.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <Button variant="outline">Alterar Foto</Button>
          </div>
          <div className="space-y-2">
            <Label htmlFor="nome">Nome Completo</Label>
            <Input id="nome" value={config.nome} onChange={(e) => handleChange('nome', e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" type="email" value={config.email} onChange={(e) => handleChange('email', e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="telefone">Telefone</Label>
            <Input id="telefone" value={config.telefone} onChange={(e) => handleChange('telefone', e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bio">Biografia</Label>
            <Textarea id="bio" value={config.bio} onChange={(e) => handleChange('bio', e.target.value)} />
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader className="bg-primary/10">
          <CardTitle className="text-2xl text-primary flex items-center">
            <Truck className="mr-2 h-6 w-6" />
            Preferências de Serviço
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="raioAtuacao">Raio de Atuação (km)</Label>
            <Input 
              id="raioAtuacao" 
              type="number" 
              value={config.raioAtuacao} 
              onChange={(e) => handleChange('raioAtuacao', e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="horariosDisponiveis">Horários Disponíveis</Label>
            <Select 
              value={config.horariosDisponiveis.join(',')} 
              onValueChange={(value) => handleChange('horariosDisponiveis', value.split(','))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione os horários" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="manha,tarde,noite">Manhã, Tarde e Noite</SelectItem>
                <SelectItem value="manha,tarde">Manhã e Tarde</SelectItem>
                <SelectItem value="tarde,noite">Tarde e Noite</SelectItem>
                <SelectItem value="manha">Apenas Manhã</SelectItem>
                <SelectItem value="tarde">Apenas Tarde</SelectItem>
                <SelectItem value="noite">Apenas Noite</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="precoMinimo">Preço Mínimo (R$)</Label>
            <Input 
              id="precoMinimo" 
              type="number" 
              value={config.precoMinimo} 
              onChange={(e) => handleChange('precoMinimo', e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader className="bg-primary/10">
          <CardTitle className="text-2xl text-primary flex items-center">
            <Bell className="mr-2 h-6 w-6" />
            Notificações
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="notificacoesApp">Notificações no App</Label>
            <Switch 
              id="notificacoesApp" 
              checked={config.notificacoesApp} 
              onCheckedChange={(checked) => handleChange('notificacoesApp', checked)}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="notificacoesEmail">Notificações por E-mail</Label>
            <Switch 
              id="notificacoesEmail" 
              checked={config.notificacoesEmail} 
              onCheckedChange={(checked) => handleChange('notificacoesEmail', checked)}
            />
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader className="bg-primary/10">
          <CardTitle className="text-2xl text-primary flex items-center">
            <Shield className="mr-2 h-6 w-6" />
            Segurança
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="verificacaoDuasEtapas">Verificação em Duas Etapas</Label>
            <Switch 
              id="verificacaoDuasEtapas" 
              checked={config.verificacaoDuasEtapas} 
              onCheckedChange={(checked) => handleChange('verificacaoDuasEtapas', checked)}
            />
          </div>
          <Button variant="outline" className="w-full">Alterar Senha</Button>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button onClick={handleSave} className="px-8">
          <Save className="mr-2 h-4 w-4" />
          Salvar Configurações
        </Button>
      </div>
    </div>
  )
}