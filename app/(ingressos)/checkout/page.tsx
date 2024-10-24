'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { CreditCard, Calendar, Lock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"

// Esquema de validação
const formSchema = z.object({
  cardNumber: z.string().regex(/^\d{16}$/, { message: "Número do cartão deve ter 16 dígitos" }),
  cardName: z.string().min(3, { message: "Nome deve ter pelo menos 3 caracteres" }),
  expirationMonth: z.string().min(1, { message: "Selecione o mês de expiração" }),
  expirationYear: z.string().min(1, { message: "Selecione o ano de expiração" }),
  cvv: z.string().regex(/^\d{3,4}$/, { message: "CVV deve ter 3 ou 4 dígitos" }),
  address: z.string().min(5, { message: "Endereço deve ter pelo menos 5 caracteres" }),
  city: z.string().min(2, { message: "Cidade deve ter pelo menos 2 caracteres" }),
  state: z.string().min(2, { message: "Estado deve ter pelo menos 2 caracteres" }),
  zipCode: z.string().regex(/^\d{5}(-\d{3})?$/, { message: "CEP inválido" }),
})

// Tipo para os dados do formulário
type FormData = z.infer<typeof formSchema>

// Dados mockados do carrinho
const cartItems = [
  { id: '1', name: 'Show do Metallica', quantity: 2, price: 100 },
  { id: '2', name: 'Festival de Jazz', quantity: 1, price: 200 },
]

export default function TelaPagamento() {
  const [isProcessing, setIsProcessing] = useState(false)

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cardNumber: '',
      cardName: '',
      expirationMonth: '',
      expirationYear: '',
      cvv: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
    },
  })

  const onSubmit = async (data: FormData) => {
    setIsProcessing(true)
    // Simula o processamento do pagamento
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsProcessing(false)
    toast({
      title: "Pagamento processado com sucesso!",
      description: "Seus ingressos foram confirmados.",
    })
    console.log(data)
  }

  const totalAmount = cartItems.reduce((total, item) => total + item.quantity * item.price, 0)

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Finalizar Compra</h1>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Resumo do Pedido</CardTitle>
          </CardHeader>
          <CardContent>
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between mb-2">
                <span>{item.name} x{item.quantity}</span>
                <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <Separator className="my-4" />
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>R$ {totalAmount.toFixed(2)}</span>
            </div>
          </CardContent>
        </Card>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Informações de Pagamento</CardTitle>
                <CardDescription>Insira os detalhes do seu cartão de crédito</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="cardNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Número do Cartão</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input {...field} placeholder="1234 5678 9012 3456" />
                          <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="cardName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome no Cartão</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Nome completo" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="expirationMonth"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mês</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Mês" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                              <SelectItem key={month} value={month.toString().padStart(2, '0')}>
                                {month.toString().padStart(2, '0')}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="expirationYear"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ano</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Ano" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i).map((year) => (
                              <SelectItem key={year} value={year.toString()}>
                                {year}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="cvv"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>CVV</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input {...field} placeholder="123" maxLength={4} />
                            <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Endereço de Cobrança</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Endereço</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Rua, número, complemento" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cidade</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Cidade" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Estado</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Estado" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="zipCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>CEP</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="00000-000" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full" disabled={isProcessing}>
                  {isProcessing ? "Processando..." : `Pagar R$ ${totalAmount.toFixed(2)}`}
                </Button>
              </CardFooter>
            </Card>
          </form>
        </Form>
      </div>
    </div>
  )
}