'use client'

import { useState, useEffect } from 'react'
import { Calendar, Clock, MapPin, Users, AlertCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Toast } from "@/components/ui/toast"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Tipos
type Sessao = {
  id: string
  data: string
  hora: string
  local: string
  maxAssentos: number
}

type CategoriaIngresso = {
  id: string
  nome: string
  preco: number
}

type Assento = {
  id: string
  numero: string
  categoria: string
  preco: number
  disponivel: boolean
  reservadoAte?: number
}

// Dados mockados
const sessoes: Sessao[] = [
  { id: '1', data: '2023-10-15', hora: '20:00', local: 'Teatro Municipal', maxAssentos: 10 },
  { id: '2', data: '2023-10-16', hora: '19:00', local: 'Teatro Municipal', maxAssentos: 10 },
]

const categoriasIngresso: CategoriaIngresso[] = [
  { id: '1', nome: 'Inteira', preco: 100 },
  { id: '2', nome: 'Meia', preco: 50 },
  { id: '3', nome: 'Criança', preco: 25 },
]

const assentos: Assento[] = Array.from({ length: 100 }, (_, i) => ({
  id: `${i + 1}`,
  numero: `${i + 1}`,
  categoria: i < 50 ? 'Plateia' : 'Balcão',
  preco: i < 50 ? 100 : 80,
  disponivel: Math.random() > 0.3
}))

export default function DetalheEvento() {
  const [sessaoSelecionada, setSessaoSelecionada] = useState<string>('')
  const [tipoIngresso, setTipoIngresso] = useState<'sequencial' | 'numerado'>('sequencial')
  const [quantidadeIngressos, setQuantidadeIngressos] = useState<Record<string, number>>({})
  const [assentosSelecionados, setAssentosSelecionados] = useState<string[]>([])
  const [assentosReservados, setAssentosReservados] = useState<Record<string, number>>({})
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now()
      setAssentosReservados(prev => {
        const updated = { ...prev }
        Object.keys(updated).forEach(id => {
          if (updated[id] < now) {
            delete updated[id]
          }
        })
        return updated
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const handleQuantidadeChange = (categoriaId: string, quantidade: number) => {
    const sessao = sessoes.find(s => s.id === sessaoSelecionada)
    const totalAtual = Object.values(quantidadeIngressos).reduce((a, b) => a + b, 0)
    if (sessao && totalAtual + quantidade - (quantidadeIngressos[categoriaId] || 0) > sessao.maxAssentos) {
      setToastMessage(`Você não pode selecionar mais de ${sessao.maxAssentos} ingressos para esta sessão.`)
      return
    }
    setQuantidadeIngressos(prev => ({ ...prev, [categoriaId]: quantidade }))
  }

  const handleAssentoClick = (assento: Assento) => {
    if (assentosReservados[assento.id]) {
      setToastMessage('Este assento está temporariamente reservado.')
      return
    }

    const sessao = sessoes.find(s => s.id === sessaoSelecionada)
    if (sessao && assentosSelecionados.length >= sessao.maxAssentos && !assentosSelecionados.includes(assento.id)) {
      setToastMessage(`Você não pode selecionar mais de ${sessao.maxAssentos} assentos para esta sessão.`)
      return
    }

    setAssentosSelecionados(prev => 
      prev.includes(assento.id) 
        ? prev.filter(id => id !== assento.id)
        : [...prev, assento.id]
    )

    // Reserva temporária do assento
    if (!assentosSelecionados.includes(assento.id)) {
      setAssentosReservados(prev => ({
        ...prev,
        [assento.id]: Date.now() + 5 * 60 * 1000 // 5 minutos de reserva
      }))
    }
  }

  const totalIngressos = Object.values(quantidadeIngressos).reduce((a, b) => a + b, 0)
  const totalValor = tipoIngresso === 'sequencial'
    ? Object.entries(quantidadeIngressos).reduce((total, [categoriaId, quantidade]) => {
        const categoria = categoriasIngresso.find(c => c.id === categoriaId)
        return total + (categoria?.preco || 0) * quantidade
      }, 0)
    : assentosSelecionados.reduce((total, assentoId) => {
        const assento = assentos.find(a => a.id === assentoId)
        return total + (assento?.preco || 0)
      }, 0)

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Show do Metallica</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <img 
            src="/placeholder.svg?height=300&width=400" 
            alt="Imagem do evento" 
            className="w-full h-auto rounded-lg mb-4"
          />
          <p className="text-muted-foreground mb-4">
            Prepare-se para uma noite épica de rock com o lendário Metallica! 
            Com mais de quatro décadas de carreira, a banda promete um show 
            eletrizante com seus maiores hits e novas músicas.
          </p>
          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            <MapPin size={20} />
            <span>Teatro Municipal</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users size={20} />
            <span>Capacidade: 5000 pessoas</span>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Selecione sua sessão</CardTitle>
            <CardDescription>Escolha a data e horário desejados</CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup value={sessaoSelecionada} onValueChange={setSessaoSelecionada}>
              {sessoes.map(sessao => (
                <div key={sessao.id} className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value={sessao.id} id={`sessao-${sessao.id}`} />
                  <Label htmlFor={`sessao-${sessao.id}`} className="flex items-center gap-2">
                    <Calendar size={16} />
                    {new Date(sessao.data).toLocaleDateString('pt-BR')}
                    <Clock size={16} />
                    {sessao.hora}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>
      </div>

      {sessaoSelecionada && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Escolha seus ingressos</CardTitle>
            <CardDescription>Selecione o tipo e a quantidade de ingressos</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={tipoIngresso} onValueChange={(value: 'sequencial' | 'numerado') => setTipoIngresso(value)}>
              <TabsList className="mb-4">
                <TabsTrigger value="sequencial">Ingresso Sequencial</TabsTrigger>
                <TabsTrigger value="numerado">Ingresso Numerado</TabsTrigger>
              </TabsList>
              <TabsContent value="sequencial">
                {categoriasIngresso.map(categoria => (
                  <div key={categoria.id} className="flex items-center justify-between mb-4">
                    <Label htmlFor={`quantidade-${categoria.id}`}>{categoria.nome} - R$ {categoria.preco.toFixed(2)}</Label>
                    <Select
                      value={quantidadeIngressos[categoria.id]?.toString() || '0'}
                      onValueChange={(value) => handleQuantidadeChange(categoria.id, parseInt(value))}
                    >
                      <SelectTrigger className="w-20">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 11 }, (_, i) => (
                          <SelectItem key={i} value={i.toString()}>{i}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                ))}
              </TabsContent>
              <TabsContent value="numerado">
                <div className="grid grid-cols-10 gap-2">
                  {assentos.map(assento => (
                    <TooltipProvider key={assento.id}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant={assentosSelecionados.includes(assento.id) ? "default" : "outline"}
                            className="w-10 h-10 p-0"
                            disabled={!assento.disponivel || !!assentosReservados[assento.id]}
                            onClick={() => handleAssentoClick(assento)}
                            aria-label={`Assento ${assento.numero}, ${assento.categoria}, R$ ${assento.preco.toFixed(2)}`}
                          >
                            {assento.numero}
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Assento {assento.numero}</p>
                          <p>{assento.categoria}</p>
                          <p>R$ {assento.preco.toFixed(2)}</p>
                          {assentosReservados[assento.id] && <p>Reservado</p>}
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      )}

      {(totalIngressos > 0 || assentosSelecionados.length > 0) && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Resumo do pedido</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Total de ingressos: {tipoIngresso === 'sequencial' ? totalIngressos : assentosSelecionados.length}</p>
            <p>Valor total: R$ {totalValor.toFixed(2)}</p>
            <Button className="mt-4 w-full">Finalizar compra</Button>
          </CardContent>
        </Card>
      )}

      {toastMessage && (
        <Toast>
          <div className="flex items-center">
            <AlertCircle className="mr-2" />
            <span>{toastMessage}</span>
          </div>
        </Toast>
      )}
    </div>
  )
}