'use client'

import { useState } from 'react'
import { Minus, Plus, Trash2, ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import Link from 'next/link'

// Tipos
type Ingresso = {
  id: string
  eventoId: string
  eventoNome: string
  sessao: string
  tipo: string
  quantidade: number
  preco: number
}

// Dados mockados
const ingressosIniciais: Ingresso[] = [
  { id: '1', eventoId: 'evt1', eventoNome: 'Show do Metallica', sessao: '15/10/2023 20:00', tipo: 'Inteira', quantidade: 2, preco: 100 },
  { id: '2', eventoId: 'evt1', eventoNome: 'Show do Metallica', sessao: '15/10/2023 20:00', tipo: 'Meia', quantidade: 1, preco: 50 },
  { id: '3', eventoId: 'evt2', eventoNome: 'Festival de Jazz', sessao: '20/11/2023 19:00', tipo: 'VIP', quantidade: 2, preco: 200 },
]

export default function CarrinhoIngressos() {
  const [ingressos, setIngressos] = useState<Ingresso[]>(ingressosIniciais)

  const atualizarQuantidade = (id: string, novaQuantidade: number) => {
    setIngressos(ingressos.map(ingresso => 
      ingresso.id === id ? { ...ingresso, quantidade: Math.max(0, novaQuantidade) } : ingresso
    ).filter(ingresso => ingresso.quantidade > 0))
  }

  const removerIngresso = (id: string) => {
    setIngressos(ingressos.filter(ingresso => ingresso.id !== id))
  }

  const totalItens = ingressos.reduce((total, ingresso) => total + ingresso.quantidade, 0)
  const totalValor = ingressos.reduce((total, ingresso) => total + ingresso.quantidade * ingresso.preco, 0)

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Carrinho de Ingressos</h1>

      {ingressos.length === 0 ? (
        <Card>
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground">Seu carrinho está vazio.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            {ingressos.map((ingresso) => (
              <Card key={ingresso.id} className="mb-4">
                <CardHeader>
                  <CardTitle>{ingresso.eventoNome}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">{ingresso.sessao}</p>
                  <div className="flex justify-between items-center">
                    <span>{ingresso.tipo}</span>
                    <span>R$ {ingresso.preco.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => atualizarQuantidade(ingresso.id, ingresso.quantidade - 1)}
                        aria-label="Diminuir quantidade"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <Input
                        type="number"
                        min="0"
                        value={ingresso.quantidade}
                        onChange={(e) => atualizarQuantidade(ingresso.id, parseInt(e.target.value) || 0)}
                        className="w-16 mx-2 text-center"
                      />
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => atualizarQuantidade(ingresso.id, ingresso.quantidade + 1)}
                        aria-label="Aumentar quantidade"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => removerIngresso(ingresso.id)}
                      aria-label="Remover ingresso"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Resumo do Pedido</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between mb-2">
                  <span>Total de Itens:</span>
                  <span>{totalItens}</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span>Valor Total:</span>
                  <span>R$ {totalValor.toFixed(2)}</span>
                </div>
                <Separator className="my-4" />
                <Button className="w-full" size="lg">
                  Finalizar Compra
                </Button>
              </CardContent>
              <CardFooter>
                <Link href="/eventos" passHref>
                  <Button variant="outline" className="w-full">
                    Continuar Comprando
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      )}
    </div>
  )
}