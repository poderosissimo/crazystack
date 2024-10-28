import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Phone, Mail, MapPin, Star, ShoppingCart, CreditCard, MessageSquare, TrendingUp, Plus, Send, Download } from 'lucide-react'

// Mock data
const customer = {
  name: "Maria Silva",
  email: "maria.silva@email.com",
  phone: "+55 11 98765-4321",
  address: "Rua das Flores, 123 - São Paulo, SP",
  tags: ["VIP", "Recorrente"],
  avatar: "/placeholder.svg?height=100&width=100",
  clv: 2500,
  engagementLevel: "Ouro"
}

export default function CustomerProfile() {
  const [activeTab, setActiveTab] = useState("info")

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-3/4">
          <Card className="mb-6">
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src={customer.avatar} alt={customer.name} />
                <AvatarFallback>{customer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-2xl">{customer.name}</CardTitle>
                <CardDescription className="flex gap-2 mt-2">
                  {customer.tags.map(tag => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>{customer.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{customer.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{customer.address}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="info">Informações</TabsTrigger>
              <TabsTrigger value="purchases">Compras</TabsTrigger>
              <TabsTrigger value="subscription">Assinatura</TabsTrigger>
              <TabsTrigger value="feedback">Feedback</TabsTrigger>
            </TabsList>
            <TabsContent value="info">
              <Card>
                <CardHeader>
                  <CardTitle>Informações do Cliente</CardTitle>
                </CardHeader>
                <CardContent>
                  <form>
                    <div className="grid w-full items-center gap-4">
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Nome</Label>
                        <Input id="name" value={customer.name} />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" value={customer.email} />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="phone">Telefone</Label>
                        <Input id="phone" value={customer.phone} />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="address">Endereço</Label>
                        <Input id="address" value={customer.address} />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="communication">Preferência de Comunicação</Label>
                        <Select>
                          <SelectTrigger id="communication">
                            <SelectValue placeholder="Selecione" />
                          </SelectTrigger>
                          <SelectContent position="popper">
                            <SelectItem value="email">Email</SelectItem>
                            <SelectItem value="sms">SMS</SelectItem>
                            <SelectItem value="whatsapp">WhatsApp</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="purchases">
              <Card>
                <CardHeader>
                  <CardTitle>Histórico de Compras</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Aqui você pode adicionar uma tabela ou lista de compras */}
                  <p>Histórico de compras do cliente será exibido aqui.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="subscription">
              <Card>
                <CardHeader>
                  <CardTitle>Informações de Assinatura</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Aqui você pode adicionar detalhes da assinatura */}
                  <p>Detalhes da assinatura do cliente serão exibidos aqui.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="feedback">
              <Card>
                <CardHeader>
                  <CardTitle>Feedback e Comentários</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Aqui você pode adicionar uma lista de feedbacks */}
                  <p>Feedbacks e comentários do cliente serão exibidos aqui.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="lg:w-1/4">
          <Card>
            <CardHeader>
              <CardTitle>Ações Rápidas</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <Button className="w-full">
                <Plus className="mr-2 h-4 w-4" /> Novo Pedido
              </Button>
              <Button variant="outline" className="w-full">
                <Send className="mr-2 h-4 w-4" /> Enviar Promoção
              </Button>
              <Button variant="outline" className="w-full">
                <Download className="mr-2 h-4 w-4" /> Exportar Perfil
              </Button>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Insights de Valor</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label>Valor de Vida do Cliente (CLV)</Label>
                  <div className="text-2xl font-bold">R$ {customer.clv.toFixed(2)}</div>
                </div>
                <Separator />
                <div>
                  <Label>Nível de Engajamento</Label>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 mr-2" />
                    <span className="text-lg font-semibold">{customer.engagementLevel}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}