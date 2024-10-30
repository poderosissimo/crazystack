'use client'

import * as React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Switch } from '@/components/ui/switch'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

const formSchema = z.object({
  isSubscriber: z.boolean().default(false),
  subscriptionValue: z.string().default('0,00'),
  address: z.string().min(1, 'Endereço é obrigatório'),
  number: z.string().min(1, 'Número é obrigatório'),
  complement: z.string().optional(),
  neighborhood: z.string().min(1, 'Bairro é obrigatório'),
  city: z.string().min(1, 'Cidade é obrigatória'),
  state: z.string().min(1, 'Estado é obrigatório'),
})

export default function Component() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      isSubscriber: false,
      subscriptionValue: '0,00',
      address: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
    },
  })

  function formatCurrency(value: string) {
    // Remove non-numeric characters
    const numbers = value.replace(/\D/g, '')
    
    // Convert to number and divide by 100 to get decimal places
    const amount = Number(numbers) / 100
    
    // Format as Brazilian currency
    return amount.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).replace('R$', '').trim()
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Here you would typically send the data to your backend
      console.log(values)
      // Show success message
      alert('Dados salvos com sucesso!')
    } catch (error) {
      console.error(error)
      alert('Erro ao salvar os dados')
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 p-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-md mx-auto">
          <FormField
            control={form.control}
            name="isSubscriber"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">Cliente assinante?</FormLabel>
                  <div className="text-sm text-gray-400">
                    Este cliente é um assinante recorrente do seu estabelecimento?
                  </div>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <div>
            <Label className="text-gray-400">VALOR DA ASSINATURA</Label>
            <FormField
              control={form.control}
              name="subscriptionValue"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <span className="absolute left-3 top-2 text-gray-400">R$</span>
                      <Input
                        {...field}
                        className="pl-10 bg-gray-800 border-gray-700"
                        onChange={(e) => {
                          field.onChange(formatCurrency(e.target.value))
                        }}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div>
            <Label className="text-gray-400">ENDEREÇO</Label>
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Ex: Rua Padre Manuel..."
                      className="bg-gray-800 border-gray-700"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-gray-400">NÚMERO</Label>
              <FormField
                control={form.control}
                name="number"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="bg-gray-800 border-gray-700"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div>
              <Label className="text-gray-400">COMPLEMENTO</Label>
              <FormField
                control={form.control}
                name="complement"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="bg-gray-800 border-gray-700"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div>
            <Label className="text-gray-400">BAIRRO</Label>
            <FormField
              control={form.control}
              name="neighborhood"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="bg-gray-800 border-gray-700"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div>
            <Label className="text-gray-400">CIDADE</Label>
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="bg-gray-800 border-gray-700"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div>
            <Label className="text-gray-400">ESTADO</Label>
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="bg-gray-800 border-gray-700"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-orange-500 hover:bg-orange-600 text-white"
          >
            SALVAR
          </Button>
        </form>
      </Form>
    </div>
  )
}