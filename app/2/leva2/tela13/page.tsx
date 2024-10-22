"use client"

import React, { useState } from 'react'
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// Tipo para representar um item no carrinho
type CartItem = {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

// Componente principal do Carrinho de Compras
export default function CarrinhoDeCompras() {
  // Estado para armazenar os itens do carrinho
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: "Produto 1", price: 50, quantity: 1, image: "/placeholder.svg?height=50&width=50" },
    { id: 2, name: "Produto 2", price: 30, quantity: 2, image: "/placeholder.svg?height=50&width=50" },
  ])
  
  // Estado para armazenar o CEP e cupom de desconto
  const [cep, setCep] = useState("")
  const [cupom, setCupom] = useState("")
  
  // Cálculos do carrinho
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const frete = cep ? 15 : 0 // Valor fixo de frete para exemplo
  const desconto = cupom === "DESCONTO10" ? subtotal * 0.1 : 0
  const total = subtotal + frete - desconto

  // Função para atualizar a quantidade de um item
  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item
    ).filter(item => item.quantity > 0))
  }

  // Função para remover um item do carrinho
  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  // Função para gerar a mensagem do WhatsApp
  const generateWhatsAppMessage = () => {
    let message = "Olá! Gostaria de fazer o seguinte pedido:\n\n"
    cartItems.forEach(item => {
      message += `${item.quantity}x ${item.name} - R$ ${(item.price * item.quantity).toFixed(2)}\n`
    })
    message += `\nSubtotal: R$ ${subtotal.toFixed(2)}`
    message += `\nFrete: R$ ${frete.toFixed(2)}`
    if (desconto > 0) {
      message += `\nDesconto: R$ ${desconto.toFixed(2)}`
    }
    message += `\nTotal: R$ ${total.toFixed(2)}`
    return encodeURIComponent(message)
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Carrinho de Compras</h1>
      
      {/* Lista de Itens */}
      <div className="space-y-4 mb-6">
        {cartItems.map(item => (
          <div key={item.id} className="flex items-center space-x-4 border-b pb-4">
            <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
            <div className="flex-grow">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-500">R$ {item.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center">{item.quantity}</span>
              <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)}>
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
      
      {/* Cálculo de Frete */}
      <div className="mb-4">
        <Label htmlFor="cep">CEP para cálculo de frete</Label>
        <Input
          id="cep"
          type="text"
          placeholder="Digite seu CEP"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          className="mt-1"
        />
      </div>
      
      {/* Cupom de Desconto */}
      <div className="mb-4">
        <Label htmlFor="cupom">Cupom de Desconto</Label>
        <Input
          id="cupom"
          type="text"
          placeholder="Digite o código do cupom"
          value={cupom}
          onChange={(e) => setCupom(e.target.value)}
          className="mt-1"
        />
      </div>
      
      {/* Resumo do Pedido */}
      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <h2 className="font-semibold mb-2">Resumo do Pedido</h2>
        <div className="space-y-1">
          <p>Subtotal: R$ {subtotal.toFixed(2)}</p>
          <p>Frete: R$ {frete.toFixed(2)}</p>
          {desconto > 0 && <p>Desconto: R$ {desconto.toFixed(2)}</p>}
          <p className="font-bold">Total: R$ {total.toFixed(2)}</p>
        </div>
      </div>
      
      {/* Botão para Finalizar Pedido */}
      <Button
        className="w-full"
        onClick={() => window.open(`https://wa.me/5511999999999?text=${generateWhatsAppMessage()}`, '_blank')}
      >
        <ShoppingBag className="mr-2 h-4 w-4" /> Finalizar Pedido via WhatsApp
      </Button>
    </div>
  )
}