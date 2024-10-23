"use client"

import { useState, useEffect } from 'react'
import { Calendar as CalendarIcon, MapPin, Package, Truck, Clock, AlertCircle, Plus, Minus, Tool, Trash } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

type Item = {
  id: string
  name: string
  quantity: number
  pricePerUnit: number
  canBeDisassembled: boolean
  isDisassembly: boolean
}

const initialItems: Item[] = [
  { id: '1', name: 'Geladeira', quantity: 0, pricePerUnit: 50, canBeDisassembled: false, isDisassembly: false },
  { id: '2', name: 'Fogão', quantity: 0, pricePerUnit: 30, canBeDisassembled: false, isDisassembly: false },
  { id: '3', name: 'Sofá', quantity: 0, pricePerUnit: 40, canBeDisassembled: true, isDisassembly: false },
  { id: '4', name: 'Cama', quantity: 0, pricePerUnit: 35, canBeDisassembled: true, isDisassembly: false },
  { id: '5', name: 'Mesa', quantity: 0, pricePerUnit: 25, canBeDisassembled: true, isDisassembly: false },
  { id: '6', name: 'Cadeira', quantity: 0, pricePerUnit: 10, canBeDisassembled: false, isDisassembly: false },
  { id: '7', name: 'Guarda-roupa', quantity: 0, pricePerUnit: 45, canBeDisassembled: true, isDisassembly: false },
  { id: '8', name: 'Máquina de lavar', quantity: 0, pricePerUnit: 40, canBeDisassembled: false, isDisassembly: false },
]

export default function Component() {
  const [date, setDate] = useState<Date>()
  const [isInsuranceAdded, setIsInsuranceAdded] = useState(false)
  const [items, setItems] = useState<Item[]>(initialItems)
  const [customItem, setCustomItem] = useState({ name: '', quantity: 0, pricePerUnit: 0, canBeDisassembled: false, isDisassembly: false })
  const [origin, setOrigin] = useState('')
  const [destination, setDestination] = useState('')
  const [distance, setDistance] = useState(0)
  const [hasElevator, setHasElevator] = useState(false)
  const [isWeekend, setIsWeekend] = useState(false)
  const [isRushHour, setIsRushHour] = useState(false)
  const [fragileItemsCount, setFragileItemsCount] = useState(0)

  const basePrice = 100 // Preço base do serviço
  const insurancePrice = 50 // Preço do seguro adicional
  const disassemblyPrice = 20 // Preço por item para montagem/desmontagem
  const pricePerKm = 2 // Preço por km de distância
  const elevatorFee = 50 // Taxa para mudanças com elevador
  const weekendFee = 100 // Taxa adicional para mudanças no fim de semana
  const rushHourFee = 75 // Taxa adicional para mudanças em horário de pico
  const fragileItemsFee = 30 // Taxa adicional por item frágil

  useEffect(() => {
    // Simula o cálculo de distância (normalmente seria feito com uma API de mapas)
    if (origin && destination) {
      const simulatedDistance = Math.floor(Math.random() * 50) + 1 // 1 a 50 km
      setDistance(simulatedDistance)
    }
  }, [origin, destination])

  const calculateTotal = () => {
    const itemsTotal = items.reduce((acc, item) => {
      let itemCost = item.quantity * item.pricePerUnit
      if (item.isDisassembly) {
        itemCost += item.quantity * disassemblyPrice
      }
      return acc + itemCost
    }, 0)
    const distanceTotal = distance * pricePerKm
    const additionalFees = 
      (hasElevator ? elevatorFee : 0) +
      (isWeekend ? weekendFee : 0) +
      (isRushHour ? rushHourFee : 0) +
      (fragileItemsCount * fragileItemsFee)
    return basePrice + itemsTotal + distanceTotal + additionalFees + (isInsuranceAdded ? insurancePrice : 0)
  }

  const handleQuantityChange = (id: string, change: number) => {
    setItems(prevItems => prevItems.map(item => 
      item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item
    ))
  }

  const handleDisassemblyChange = (id: string) => {
    setItems(prevItems => prevItems.map(item => 
      item.id === id ? { ...item, isDisassembly: !item.isDisassembly } : item
    ))
  }

  const handleAddCustomItem = () => {
    if (customItem.name && customItem.quantity > 0 && customItem.pricePerUnit > 0) {
      setItems(prevItems => [...prevItems, { ...customItem, id: Date.now().toString() }])
      setCustomItem({ name: '', quantity: 0, pricePerUnit: 0, canBeDisassembled: false, isDisassembly: false })
    } else {
      alert("Por favor, preencha todos os campos do item personalizado.")
    }
  }

  const handleRemoveItem = (id: string) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  const sortItemsByQuantity = () => {
    setItems(prevItems => [...prevItems].sort((a, b) => b.quantity - a.quantity))
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    console.log("Formulário enviado", { items, total: calculateTotal(), distance })
  }

  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Detalhes da Mudança e Confirmação</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 mb-6 sm:grid-cols-1 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Truck className="mr-2 h-5 w-5" />
                Serviço Selecionado
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Transportes Silva</span>
                  <span className="text-lg font-bold text-primary">Preço Base: R$ {basePrice.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                Endereços
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div>
                  <Label htmlFor="origem">Endereço de Origem</Label>
                  <Input 
                    id="origem" 
                    placeholder="Digite o endereço de origem" 
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="destino">Endereço de Destino</Label>
                  <Input 
                    id="destino" 
                    placeholder="Digite o endereço de destino" 
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
                {distance > 0 && (
                  <div className="text-sm text-muted-foreground">
                    Distância estimada: {distance} km (R$ {(distance * pricePerKm).toFixed(2)})
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CalendarIcon className="mr-2 h-5 w-5" />
                Data e Hora
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP", { locale: ptBR }) : <span>Selecione uma data</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <div>
                  <Label htmlFor="hora">Horário Preferencial</Label>
                  <RadioGroup defaultValue="manha" className="flex space-x-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="manha" id="manha" />
                      <Label htmlFor="manha">Manhã</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="tarde" id="tarde" />
                      <Label htmlFor="tarde">Tarde</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Package className="mr-2 h-5 w-5" />
                Lista de Itens
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {items.map(item => (
                  <div key={item.id} className={`flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0 sm:space-x-2 border-b pb-2 mb-2 ${item.quantity === 0 ? 'opacity-50' : ''}`}>
                    <span className="w-full sm:w-1/4">{item.name}</span>
                    <div className="flex items-center space-x-2">
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => handleQuantityChange(item.id, -1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => handleQuantityChange(item.id, 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    {item.canBeDisassembled && (
                      <div className="flex items-center space-x-2 mt-2 sm:mt-0">
                        <Checkbox
                          id={`disassembly-${item.id}`}
                          checked={item.isDisassembly}
                          onCheckedChange={() => handleDisassemblyChange(item.id)}
                        />
                        <Label htmlFor={`disassembly-${item.id}`}>
                          <Tool className="h-4 w-4 inline mr-1" />
                          Montar/Desmontar
                        </Label>
                      </div>
                    )}
                    <span className="w-full sm:w-1/4 text-right mt-2 sm:mt-0">
                      R$ {((item.quantity * item.pricePerUnit) + (item.isDisassembly ? item.quantity * disassemblyPrice : 0)).toFixed(2)}
                    </span>
                    {!initialItems.some(initialItem => initialItem.id === item.id) && (
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
                <Button type="button" onClick={sortItemsByQuantity} className="mt-4">
                  Ordenar por Quantidade
                </Button>
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
                  <div className="w-full sm:w-auto">
                    <Label htmlFor="custom-item-name" className="sr-only">Nome do item</Label>
                    <Input
                      id="custom-item-name"
                      placeholder="Nome do item"
                      value={customItem.name}
                      onChange={(e) => setCustomItem({...customItem, name: e.target.value})}
                    />
                  </div>
                  <div className="w-full sm:w-20">
                    <Label htmlFor="custom-item-quantity" className="sr-only">Quantidade</Label>
                    <Input
                      id="custom-item-quantity"
                      type="number"
                      placeholder="Qtd"
                      value={customItem.quantity || ''}
                      onChange={(e) => setCustomItem({...customItem, quantity: parseInt(e.target.value) || 0})}
                      min="0"
                    />
                  </div>
                  <div className="w-full sm:w-24">
                    <Label htmlFor="custom-item-price" className="sr-only">Preço</Label>
                    <Input
                      id="custom-item-price"
                      type="number"
                      placeholder="Preço"
                      value={customItem.pricePerUnit || ''}
                      onChange={(e) => setCustomItem({...customItem, pricePerUnit: parseFloat(e.target.value) || 0})}
                      min="0"
                      step="0.01"
                    />
                  </div>
                  <Button type="button" onClick={handleAddCustomItem}>Adicionar</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertCircle className="mr-2 h-5 w-5" />
                Instruções Especiais e Seguro
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="instrucoes">Instruções Especiais</Label>
                  <Textarea id="instrucoes" placeholder="Alguma instrução especial para a equipe de mudança?" />
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="seguro-adicional"
                    checked={isInsuranceAdded}
                    onCheckedChange={setIsInsuranceAdded}
                  />
                  <Label htmlFor="seguro-adicional">Adicionar seguro extra (R$ {insurancePrice.toFixed(2)})</Label>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertCircle className="mr-2 h-5 w-5" />
                Parâmetros Adicionais
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Switch
                    id="elevador"
                    checked={hasElevator}
                    onCheckedChange={setHasElevator}
                  />
                  <Label htmlFor="elevador">Mudança com elevador (+ R$ {elevatorFee.toFixed(2)})</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="fim-de-semana"
                    checked={isWeekend}
                    onCheckedChange={setIsWeekend}
                  />
                  <Label htmlFor="fim-de-semana">Mudança no fim de semana (+ R$ {weekendFee.toFixed(2)})</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="horario-pico"
                    checked={isRushHour}
                    onCheckedChange={setIsRushHour}
                  />
                  <Label htmlFor="horario-pico">Mudança em horário de pico (+ R$ {rushHourFee.toFixed(2)})</Label>
                </div>
                <div>
                  <Label htmlFor="itens-frageis">Quantidade de itens frágeis (+ R$ {fragileItemsFee.toFixed(2)} por item)</Label>
                  <Input
                    id="itens-frageis"
                    type="number"
                    value={fragileItemsCount}
                    onChange={(e) => setFragileItemsCount(parseInt(e.target.value) || 0)}
                    min="0"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertCircle className="mr-2 h-5 w-5" />
              Resumo do Pedido
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Preço Base do Serviço</span>
                <span>R$ {basePrice.toFixed(2)}</span>
              </div>
              {items.filter(item =>   item.quantity > 0).map(item => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>
                    {item.name} (x{item.quantity})
                    {item.isDisassembly && " + Montagem/Desmontagem"}
                  </span>
                  <span>
                    R$ {((item.quantity * item.pricePerUnit) + (item.isDisassembly ? item.quantity * disassemblyPrice : 0)).toFixed(2)}
                  </span>
                </div>
              ))}
              {distance > 0 && (
                <div className="flex justify-between">
                  <span>Distância ({distance} km)</span>
                  <span>R$ {(distance * pricePerKm).toFixed(2)}</span>
                </div>
              )}
              {isInsuranceAdded && (
                <div className="flex justify-between">
                  <span>Seguro Adicional</span>
                  <span>R$ {insurancePrice.toFixed(2)}</span>
                </div>
              )}
              {hasElevator && (
                <div className="flex justify-between">
                  <span>Taxa de Elevador</span>
                  <span>R$ {elevatorFee.toFixed(2)}</span>
                </div>
              )}
              {isWeekend && (
                <div className="flex justify-between">
                  <span>Taxa de Fim de Semana</span>
                  <span>R$ {weekendFee.toFixed(2)}</span>
                </div>
              )}
              {isRushHour && (
                <div className="flex justify-between">
                  <span>Taxa de Horário de Pico</span>
                  <span>R$ {rushHourFee.toFixed(2)}</span>
                </div>
              )}
              {fragileItemsCount > 0 && (
                <div className="flex justify-between">
                  <span>Taxa de Itens Frágeis ({fragileItemsCount} itens)</span>
                  <span>R$ {(fragileItemsCount * fragileItemsFee).toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between font-bold pt-2 border-t">
                <span>Total</span>
                <span>R$ {calculateTotal().toFixed(2)}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-between items-center">
          <Button type="button" variant="outline">Voltar</Button>
          <Button type="submit">Confirmar e Pagar</Button>
        </div>
      </form>
    </div>
  )
}