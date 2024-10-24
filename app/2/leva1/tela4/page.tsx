'use client'

import { useState } from 'react'
import { Check, Download, Eye, ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from 'next/link'

// Tipos
type Ingresso = {
  id: string
  eventoNome: string
  sessao: string
  tipo: string
  quantidade: number
  preco: number
}

// Dados mockados do pedido
const pedido = {
  numeroPedido: '123456',
  data: new Date().toLocaleDateString('pt-BR'),
  ingressos: [
    { id: '1', eventoNome: 'Show do Metallica', sessao: '15/10/2023 20:00', tipo: 'Inteira', quantidade: 2, preco: 100 },
    { id: '2', eventoNome: 'Show do Metallica', sessao: '15/10/2023 20:00', tipo: 'Meia', quantidade: 1, preco: 50 },
    { id: '3', eventoNome: 'Festival de Jazz', sessao: '20/11/2023 19:00', tipo: 'VIP', quantidade: 2, preco: 200 },
  ] as Ingresso[],
}

export default function TelaConfirmacao() {
  const [downloadStatus, setDownloadStatus] = useState<Record<string, boolean>>({})

  const handleDownload = (ingressoId: string) => {
    // Simula o download do ingresso
    setTimeout(() => {
      setDownloadStatus(prev => ({ ...prev, [ingressoId]: true }))
    }, 1500)
  }

  const totalValor = pedido.ingressos.reduce((total, ingresso) => total + ingresso.quantidade * ingresso.preco, 0)

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-4">
            <Check className="h-6 w-6 text-green-600" />
          </div>
          <CardTitle className="text-2xl text-center">Compra Confirmada!</CardTitle>
          <CardDescription className="text-center">
            Obrigado por sua compra. Seu pedido foi processado com sucesso.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <p className="font-semibold">Número do Pedido: {pedido.numeroPedido}</p>
              <p className="text-sm text-muted-foreground">Data da Compra: {pedido.data}</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-semibold mb-2">Detalhes do Pedido</h3>
              {pedido.ingressos.map((ingresso) => (
                <Card key={ingresso.id} className="mb-4">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold">{ingresso.eventoNome}</h4>
                        <p className="text-sm text-muted-foreground">{ingresso.sessao}</p>
                      </div>
                      <p className="font-semibold">
                        R$ {(ingresso.preco * ingresso.quantidade).toFixed(2)}
                      </p>
                    </div>
                    <p className="text-sm">
                      {ingresso.tipo} - Quantidade: {ingresso.quantidade}
                    </p>
                    <div className="mt-4 flex space-x-2">
                      <Button variant="outline" size="sm" className="flex items-center">
                        <Eye className="mr-2 h-4 w-4" />
                        Ver Ingresso
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center"
                        onClick={() => handleDownload(ingresso.id)}
                        disabled={downloadStatus[ingresso.id]}
                      >
                        <Download className="mr-2 h-4 w-4" />
                        {downloadStatus[ingresso.id] ? 'Baixado' : 'Baixar'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Separator />
            <div className="flex justify-between items-center font-semibold">
              <span>Total</span>
              <span>R$ {totalValor.toFixed(2)}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href="/eventos" passHref>
            <Button variant="outline" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para Eventos
            </Button>
          </Link>
          <Button>Minha Conta</Button>
        </CardFooter>
      </Card>
    </div>
  )
}