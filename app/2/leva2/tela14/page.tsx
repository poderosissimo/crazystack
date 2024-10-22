"use client"

import React, { useState, useEffect } from 'react'
import { Trash2, Plus, Minus, ShoppingBag, Heart, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { motion, AnimatePresence } from 'framer-motion'

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
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  
  // Estado para armazenar o CEP e cupom de desconto
  const [cep, setCep] = useState("")
  const [cupom, setCupom] = useState("")
  
  // Estado para armazenar itens salvos para depois
  const [savedItems, setSavedItems] = useState<CartItem[]>([])

  // Efeito para carregar dados do localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cartItems')
    if (savedCart) {
      setCartItems(JSON.parse(savedCart))
    }
    const savedForLater = localStorage.getItem('savedItems')
    if (savedForLater) {
      setSavedItems(JSON.parse(savedForLater))
    }
  }, [])

  // Efeito para salvar dados no localStorage
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
    localStorage.setItem('savedItems', JSON.stringify(savedItems))
  }, [cartItems, savedItems])

  // Cálculos do carrinho
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const frete = calcularFrete(cep, subtotal)
  const desconto = cupom === "DESCONTO10" ? subtotal * 0.1 : 0
  const total = subtotal + frete - desconto

  // Função para calcular frete (simulação mais realista)
  function calcularFrete(cep: string, subtotal: number): number {
    if (!cep) return 0
    const baseFrete = 10
    const adicionalPorItem = 2
    const descontoPorValor = subtotal > 100 ? 5 : 0
    return baseFrete + (cartItems.length * adicionalPorItem) - descontoPorValor
  }

  // Função para atualizar a quantidade de um item
  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
    ))
    toast.success('Quantidade atualizada!')
  }

  // Função para remover um item do carrinho
  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id))
    toast.info('Item removido do carrinho')
  }

  // Função para salvar um item para comprar depois
  const saveForLater = (item: CartItem) => {
    setSavedItems([...savedItems, item])
    setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id))
    toast.info('Item salvo para comprar depois')
  }

  // Função para mover um item salvo de volta para o carrinho
  const moveToCart = (item: CartItem) => {
    setCartItems([...cartItems, item])
    setSavedItems(savedItems.filter(savedItem => savedItem.id !== item.id))
    toast.success('Item movido para o carrinho')
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

  // Componente de recomendação de produto
  const ProductRecommendation = () => (
    <div className="mt-6 p-4 bg-gray-100 rounded-lg">
      <h3 className="font-semibold mb-2">Recomendação para você</h3>
      <div className="flex items-center space-x-4">
        <img src="/placeholder.svg?height=80&width=80" alt="Produto recomendado" className="w-20 h-20 object-cover rounded" />
        <div>
          <p className="font-medium">Produto Recomendado</p>
          <p className="text-sm text-gray-600">R$ 79,90</p>
          <Button size="sm" variant="outline" className="mt-2">
            Adicionar ao Carrinho
          </Button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Carrinho de Compras</h1>
      
      {/* Lista de Itens */}
      <div className="space-y-4 mb-6">
        <AnimatePresence>
          {cartItems.map(item => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex items-center space-x-4 border-b pb-4"
            >
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
              <div className="flex-grow">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">R$ {item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity - 1)} aria-label="Diminuir quantidade">
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center">{item.quantity}</span>
                <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity + 1)} aria-label="Aumentar quantidade">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)} aria-label="Remover item">
                <Trash2 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => saveForLater(item)} aria-label="Salvar para depois">
                <Heart className="h-4 w-4" />
              </Button>
            </motion.div>
          ))}
        </AnimatePresence>
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
          aria-describedby="cep-info"
        />
        <p id="cep-info" className="text-sm text-gray-500 mt-1">Digite o CEP para calcular o frete</p>
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
          aria-describedby="cupom-info"
        />
        <p id="cupom-info" className="text-sm text-gray-500 mt-1">Digite DESCONTO10 para 10% de desconto</p>
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
        className="w-full mb-4"
        onClick={() => window.open(`https://wa.me/5511999999999?text=${generateWhatsAppMessage()}`, '_blank')}
      >
        <ShoppingBag className="mr-2 h-4 w-4" /> Finalizar Pedido via WhatsApp
      </Button>

      {/* Itens Salvos para Depois */}
      {savedItems.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Salvos para Depois</h2>
          <div className="space-y-4">
            {savedItems.map(item => (
              <div key={item.id} className="flex items-center space-x-4 border-b pb-4">
                <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                <div className="flex-grow">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">R$ {item.price.toFixed(2)}</p>
                </div>
                <Button variant="outline" size="sm" onClick={() => moveToCart(item)}>
                  Mover para o Carrinho <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recomendação de Produto */}
      <ProductRecommendation />

      {/* Toast Container para notificações */}
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  )
}