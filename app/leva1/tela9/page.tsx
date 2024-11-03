"use client"

import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Trash2, Edit, PlusCircle, ArrowUpCircle, ArrowDownCircle, Calendar, DollarSign, Clock, Tag, AlertCircle } from 'lucide-react'
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { format, isAfter, isBefore } from 'date-fns'
import { motion, AnimatePresence } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const batchSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  price: z.number().min(0, "Preço deve ser maior ou igual a zero"),
  startDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Data de início inválida",
  }),
  endDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Data de fim inválida",
  }),
  quantity: z.number().int().min(1, "Quantidade deve ser pelo menos 1"),
  isEarlyBird: z.boolean(),
  discountPercentage: z.number().min(0).max(100),
}).refine((data) => {
  const start = new Date(data.startDate);
  const end = new Date(data.endDate);
  return isBefore(start, end);
}, {
  message: "A data de início deve ser anterior à data de fim",
  path: ["endDate"],
});

type BatchFormData = z.infer<typeof batchSchema>

type Batch = BatchFormData & { id: number }

export default function EnhancedTicketBatchConfiguration() {
  const [batches, setBatches] = useState<Batch[]>([])
  const [editingBatch, setEditingBatch] = useState<Batch | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [alert, setAlert] = useState<{ type: 'success' | 'error', message: string } | null>(null)
  const [activeTab, setActiveTab] = useState("list")

  const { register, handleSubmit, reset, watch, setValue, formState: { errors } } = useForm<BatchFormData>({
    resolver: zodResolver(batchSchema),
    defaultValues: {
      isEarlyBird: false,
      discountPercentage: 0,
      quantity: 100,
    }
  })

  const isEarlyBird = watch('isEarlyBird')

  const onSubmit: SubmitHandler<BatchFormData> = (data) => {
    if (editingBatch) {
      setBatches(currentBatches => 
        currentBatches.map(batch => 
          batch.id === editingBatch.id ? { ...batch, ...data } : batch
        )
      )
      setAlert({ type: 'success', message: 'Lote atualizado com sucesso!' })
    } else {
      const newBatch = { ...data, id: Date.now() }
      setBatches(currentBatches => [...currentBatches, newBatch])
      setAlert({ type: 'success', message: 'Novo lote adicionado com sucesso!' })
    }
    setIsDialogOpen(false)
    setEditingBatch(null)
    reset()
  }

  const handleEdit = (batch: Batch) => {
    setEditingBatch(batch)
    reset(batch)
    setIsDialogOpen(true)
  }

  const handleDelete = (id: number) => {
    setBatches(currentBatches => currentBatches.filter(batch => batch.id !== id))
    setAlert({ type: 'success', message: 'Lote removido com sucesso!' })
  }

  const moveBatch = (id: number, direction: 'up' | 'down') => {
    setBatches(currentBatches => {
      const index = currentBatches.findIndex(batch => batch.id === id)
      if (
        (direction === 'up' && index === 0) || 
        (direction === 'down' && index === currentBatches.length - 1)
      ) {
        return currentBatches
      }
      const newBatches = [...currentBatches]
      const swapIndex = direction === 'up' ? index - 1 : index + 1;
      [newBatches[index], newBatches[swapIndex]] = [newBatches[swapIndex], newBatches[index]];
      return newBatches
    })
  }

  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => setAlert(null), 5000)
      return () => clearTimeout(timer)
    }
  }, [alert])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-blue-600 text-white p-4 sm:p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Configuração de Lotes de Ingressos
        </motion.h1>

        <AnimatePresence>
          {alert && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Alert className={`mb-4 ${alert.type === 'success' ? 'bg-green-500' : 'bg-red-500'} rounded-lg shadow-lg`}>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle className="text-lg font-semibold">{alert.type === 'success' ? 'Sucesso!' : 'Erro!'}</AlertTitle>
                <AlertDescription className="text-sm">{alert.message}</AlertDescription>
              </Alert>
            </motion.div>
          )}
        </AnimatePresence>

        <Card className="bg-white/10 backdrop-blur-md mb-6 rounded-xl shadow-xl overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-purple-800 to-pink-700">
            <CardTitle className="text-2xl sm:text-3xl md:text-4xl">Gerenciamento de Lotes</CardTitle>
            <CardDescription className="text-white/70">Visualize e gerencie os lotes de ingressos para o seu evento.</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full bg-white/5 p-1 rounded-t-none">
                <TabsTrigger value="list" className="w-1/2">Lista de Lotes</TabsTrigger>
                <TabsTrigger value="timeline" className="w-1/2">Linha do Tempo</TabsTrigger>
              </TabsList>
              <TabsContent value="list" className="p-4">
                <ScrollArea className="h-[400px] rounded-md border border-white/10 p-4">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-white">Nome</TableHead>
                        <TableHead className="text-white">Preço</TableHead>
                        <TableHead className="text-white hidden sm:table-cell">Início</TableHead>
                        <TableHead className="text-white hidden sm:table-cell">Fim</TableHead>
                        <TableHead className="text-white">Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {batches.map((batch, index) => (
                        <TableRow key={batch.id} className="hover:bg-white/5 transition-colors">
                          <TableCell className="font-medium">{batch.name}</TableCell>
                          <TableCell>
                            <span className="inline-flex items-center bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                              <DollarSign className="h-3 w-3 mr-1" />
                              {batch.price.toFixed(2)}
                            </span>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">{format(new Date(batch.startDate), 'dd/MM/yyyy')}</TableCell>
                          <TableCell className="hidden sm:table-cell">{format(new Date(batch.endDate), 'dd/MM/yyyy')}</TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Popover>
                                <PopoverTrigger asChild>
                                  <Button size="sm" variant="outline" className="bg-blue-500 hover:bg-blue-600">
                                    <Edit className="h-4 w-4" />
                                  </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-80">
                                  <div className="grid gap-4">
                                    <div className="space-y-2">
                                      <h4 className="font-medium leading-none">Detalhes do Lote</h4>
                                      <p className="text-sm text-muted-foreground">
                                        {batch.name} - R$ {batch.price}
                                      </p>
                                    </div>
                                    <div className="grid gap-2">
                                      <div className="grid grid-cols-3 items-center gap-4">
                                        <Label htmlFor="quantity">Quantidade</Label>
                                        <Input
                                          id="quantity"
                                          defaultValue={batch.quantity}
                                          className="col-span-2 h-8"
                                        />
                                      </div>
                                      <div className="grid grid-cols-3 items-center gap-4">
                                        <Label htmlFor="earlyBird">Early Bird</Label>
                                        <Switch
                                          id="earlyBird"
                                          checked={batch.isEarlyBird}
                                          className="col-span-2"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </PopoverContent>
                              </Popover>
                              <Button size="sm" variant="outline" className="bg-red-500 hover:bg-red-600" onClick={() => handleDelete(batch.id)}>
                                <Trash2 className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline" className="bg-yellow-500 hover:bg-yellow-600" onClick={() => moveBatch(batch.id, 'up')} disabled={index === 0}>
                                <ArrowUpCircle className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline" className="bg-yellow-500 hover:bg-yellow-600" onClick={() => moveBatch(batch.id, 'down')} disabled={index === batches.length - 1}>
                                <ArrowDownCircle className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </ScrollArea>
              </TabsContent>
              <TabsContent value="timeline" className="p-4">
                <div className="space-y-4">
                  {batches.map((batch, index) => (
                    <div key={batch.id} className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-24 text-sm font-medium">{format(new Date(batch.startDate), 'dd/MM/yyyy')}</div>
                      <div className="flex-grow">
                        <Progress value={(index + 1) * (100 / batches.length)} className="h-2" />
                      </div>
                      <div className="flex-shrink-0 w-24 text-sm font-medium text-right">{format(new Date(batch.endDate), 'dd/MM/yyyy')}</div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="bg-gradient-to-r from-purple-800 to-pink-700 p-4">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="w-full bg-white text-purple-600 hover:bg-purple-100" onClick={() => {
                  setEditingBatch(null)
                  reset({ name: '', price: 0, startDate: '', endDate: '', quantity: 100, isEarlyBird: false, discountPercentage: 0 })
                }}>
                  <PlusCircle className="mr-2 h-4 w-4" /> Adicionar Novo Lote
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-gradient-to-br from-purple-700 to-pink-600 text-white rounded-lg">
                <DialogHeader>
                  <DialogTitle className="text-2xl">{editingBatch ? 'Editar Lote' : 'Adicionar Novo Lote'}</DialogTitle>
                  <DialogDescription className="text-white/70">
                    Preencha os detalhes do lote abaixo. Clique em salvar quando terminar.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-lg">Nome do  Lote</Label>
                    <Input id="name" {...register('name')} className="bg-white/20 text-white border-white/20 rounded-lg" placeholder="Ex: Lote Promocional" />
                    {errors.name && <p className="text-red-300 text-sm">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="price" className="text-lg">Preço</Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
                      <Input id="price" type="number" step="0.01" {...register('price', { valueAsNumber: true })} className="bg-white/20 text-white border-white/20 rounded-lg pl-10" placeholder="0.00" />
                    </div>
                    {errors.price && <p className="text-red-300 text-sm">{errors.price.message}</p>}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="startDate" className="text-lg">Data de Início</Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
                        <Input id="startDate" type="date" {...register('startDate')} className="bg-white/20 text-white border-white/20 rounded-lg pl-10" />
                      </div>
                      {errors.startDate && <p className="text-red-300 text-sm">{errors.startDate.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="endDate" className="text-lg">Data de Fim</Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
                        <Input id="endDate" type="date" {...register('endDate')} className="bg-white/20 text-white border-white/20 rounded-lg pl-10" />
                      </div>
                      {errors.endDate && <p className="text-red-300 text-sm">{errors.endDate.message}</p>}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="quantity" className="text-lg">Quantidade de Ingressos</Label>
                    <div className="relative">
                      <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
                      <Input id="quantity" type="number" {...register('quantity', { valueAsNumber: true })} className="bg-white/20 text-white border-white/20 rounded-lg pl-10" placeholder="100" />
                    </div>
                    {errors.quantity && <p className="text-red-300 text-sm">{errors.quantity.message}</p>}
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="isEarlyBird" {...register('isEarlyBird')} />
                    <Label htmlFor="isEarlyBird" className="text-lg">Lote Early Bird</Label>
                  </div>
                  {isEarlyBird && (
                    <div className="space-y-2">
                      <Label htmlFor="discountPercentage" className="text-lg">Porcentagem de Desconto</Label>
                      <div className="flex items-center space-x-4">
                        <Slider
                          id="discountPercentage"
                          min={0}
                          max={100}
                          step={1}
                          {...register('discountPercentage', { valueAsNumber: true })}
                          onValueChange={(value) => setValue('discountPercentage', value[0])}
                          className="flex-grow"
                        />
                        <span className="text-lg font-bold">{watch('discountPercentage')}%</span>
                      </div>
                    </div>
                  )}
                  <Button type="submit" className="w-full bg-white text-purple-600 hover:bg-purple-100 rounded-lg">Salvar</Button>
                </form>
              </DialogContent>
            </Dialog>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}