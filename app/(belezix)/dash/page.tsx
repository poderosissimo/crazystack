'use client'

import { useState } from 'react'
import { Bell, ChevronDown, CreditCard, DollarSign, Home, Package, PieChart, Settings, ShoppingCart, Users } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Simulated data
const salesData = [
  { month: 'Jan', sales: 4000 },
  { month: 'Feb', sales: 3000 },
  { month: 'Mar', sales: 5000 },
  { month: 'Apr', sales: 4500 },
  { month: 'May', sales: 6000 },
  { month: 'Jun', sales: 5500 },
]

const subscriptionData = {
  active: 1200,
  paused: 300,
  cancelled: 150,
}

const topProducts = [
  { name: 'Facial Cream', quantity: 1500, revenue: 75000 },
  { name: 'Shampoo', quantity: 1200, revenue: 36000 },
  { name: 'Lipstick', quantity: 1000, revenue: 25000 },
  { name: 'Face Mask', quantity: 800, revenue: 16000 },
  { name: 'Hair Conditioner', quantity: 750, revenue: 22500 },
]

export default function Dashboard() {
  const [period, setPeriod] = useState('month')

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 p-4">
        <div className="flex items-center mb-6">
          <PieChart className="h-6 w-6 mr-2" />
          <span className="text-xl font-bold">BeautyDash</span>
        </div>
        <nav>
          {[
            { icon: Home, label: 'Dashboard' },
            { icon: Users, label: 'Clientes' },
            { icon: CreditCard, label: 'Assinaturas' },
            { icon: Package, label: 'Produtos' },
            { icon: ShoppingCart, label: 'Pedidos' },
            { icon: PieChart, label: 'Relatórios' },
            { icon: Settings, label: 'Configurações' },
          ].map(({ icon: Icon, label }) => (
            <Button key={label} variant="ghost" className="w-full justify-start mb-2">
              <Icon className="mr-2 h-4 w-4" />
              {label}
            </Button>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Bem-vindo de volta, Ana</h1>
            <p className="text-gray-500">Aqui está um resumo da sua loja</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-avatar.jpg" alt="@username" />
                    <AvatarFallback>AN</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">Ana Nunes</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      ana@belezanatural.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Perfil</DropdownMenuItem>
                <DropdownMenuItem>Configurações</DropdownMenuItem>
                <DropdownMenuItem>Sair</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Dashboard content */}
        <div className="grid gap-8">
          {/* Sales Overview */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Visão Geral de Vendas</CardTitle>
              <Select defaultValue={period} onValueChange={setPeriod}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Selecione o período" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="week">Última Semana</SelectItem>
                  <SelectItem value="month">Último Mês</SelectItem>
                  <SelectItem value="quarter">Último Trimestre</SelectItem>
                </SelectContent>
              </Select>
            </CardHeader>
            <CardContent>
              <div className="h-[200px]">
                {/* Placeholder for sales chart */}
                <div className="w-full h-full bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center">
                  Gráfico de Vendas
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Receita Total</p>
                  <p className="text-2xl font-bold">R$ 45.231,89</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Pedidos</p>
                  <p className="text-2xl font-bold">1.234</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Valor Médio</p>
                  <p className="text-2xl font-bold">R$ 36,65</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Subscription Status */}
          <Card>
            <CardHeader>
              <CardTitle>Status das Assinaturas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between mb-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Ativas</p>
                  <p className="text-2xl font-bold text-green-600">{subscriptionData.active}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Pausadas</p>
                  <p className="text-2xl font-bold text-yellow-600">{subscriptionData.paused}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Canceladas</p>
                  <p className="text-2xl font-bold text-red-600">{subscriptionData.cancelled}</p>
                </div>
              </div>
              <div className="h-[100px]">
                {/* Placeholder for subscription trend chart */}
                <div className="w-full h-full bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center">
                  Gráfico de Tendência de Assinaturas
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Customer Insights */}
          <Card>
            <CardHeader>
              <CardTitle>Insights de Clientes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Idade Média</p>
                  <p className="text-2xl font-bold">32 anos</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Localização Principal</p>
                  <p className="text-2xl font-bold">São Paulo</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Gênero Predominante</p>
                  <p className="text-2xl font-bold">Feminino</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm font-medium text-gray-500">Taxa de Retenção</p>
                <p className="text-2xl font-bold">78%</p>
              </div>
              <div className="mt-4">
                <p className="text-sm font-medium text-gray-500">Frequência de Compra</p>
                <p className="text-2xl font-bold">A cada 45 dias</p>
              </div>
            </CardContent>
          </Card>

          {/* Top Products */}
          <Card>
            <CardHeader>
              <CardTitle>Produtos Mais Vendidos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">Nome do Produto</th>
                      <th scope="col" className="px-6 py-3">Quantidade Vendida</th>
                      <th scope="col" className="px-6 py-3">Receita Gerada</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topProducts.map((product, index) => (
                      <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {product.name}
                        </th>
                        <td className="px-6 py-4">{product.quantity}</td>
                        <td className="px-6 py-4">R$ {product.revenue.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Financial Metrics */}
          <Card>
            <CardHeader>
              <CardTitle>Métricas Financeiras</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">MRR</p>
                  <p className="text-2xl font-bold">R$ 150.000</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">ARR</p>
                  <p className="text-2xl font-bold">R$ 1.800.000</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Churn</p>
                  <p className="text-2xl font-bold text-red-600">2,5%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notifications and Alerts */}
          <Card>
            <CardHeader>
              <CardTitle>Notificações e Alertas</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center text-yellow-600">
                  <CreditCard className="mr-2 h-4 w-4" />
                  <span>5 assinaturas prestes a vencer</span>
                </li>
                <li className="flex items-center text-red-600">
                  <Package className="mr-2 h-4 w-4" />
                  <span>Estoque baixo: Facial Cream (10 unidades)</span>
                </li>
                <li className="flex items-center text-blue-600">
                  <Users className="mr-2 h-4 w-4" />
                  <span>3 novos feedbacks de clientes</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Ações Rápidas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4">
                <Button>
                  <CreditCard className="mr-2 h-4 w-4" />
                  Nova Assinatura
                </Button>
                <Button variant="outline">
                  <Package className="mr-2 h-4 w-4" />
                  Adicionar Produto
                </Button>
                <Button variant="secondary">
                  <Users className="mr-2 h-4 w-4" />
                  Enviar E-mail Promocional
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center text-sm text-gray-500">
          <div  className="mb-2">
            <a href="#" className="hover:underline">Suporte</a> | 
            <a href="#" className="hover:underline"> Centro de Ajuda</a> | 
            <a href="#" className="hover:underline"> Relatórios Completos</a> | 
            <a href="#" className="hover:underline"> Feedback do Cliente</a>
          </div>
          <div>
            <a href="#" className="hover:underline">Termos de Uso</a> | 
            <a href="#" className="hover:underline"> Política de Privacidade</a>
          </div>
        </footer>
      </main>
    </div>
  )
}