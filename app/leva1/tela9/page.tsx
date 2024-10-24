import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Bell,
  Home,
  Settings,
  CreditCard,
  Smartphone,
  Map,
} from "lucide-react";

export default function PainelControle() {
  const [primaryColor, setPrimaryColor] = useState("#007bff");
  const [secondaryColor, setSecondaryColor] = useState("#6c757d");
  const [basePrice, setBasePrice] = useState(5);
  const [comissionRate, setComissionRate] = useState(20);

  const handleSave = () => {
    // Implementar lógica de salvamento aqui
    console.log("Configurações salvas");
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Barra lateral */}
      <aside className="w-64 bg-white dark:bg-gray-800 p-4">
        <div className="flex items-center mb-6">
          <Smartphone className="h-6 w-6 mr-2 text-primary" />
          <span className="text-lg font-bold">MobiSaaS Admin</span>
        </div>
        <nav className="space-y-2">
          <Button variant="ghost" className="w-full justify-start">
            <Home className="mr-2 h-4 w-4" />
            Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Settings className="mr-2 h-4 w-4" />
            Configurações
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <CreditCard className="mr-2 h-4 w-4" />
            Faturamento
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Bell className="mr-2 h-4 w-4" />
            Notificações
          </Button>
        </nav>
      </aside>

      {/* Conteúdo principal */}
      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">Painel de Controle</h1>

        <Tabs defaultValue="geral" className="space-y-4">
          <TabsList>
            <TabsTrigger value="geral">Geral</TabsTrigger>
            <TabsTrigger value="precos">Preços</TabsTrigger>
            <TabsTrigger value="app">Aplicativo</TabsTrigger>
            <TabsTrigger value="integracoes">Integrações</TabsTrigger>
          </TabsList>

          <TabsContent value="geral">
            <Card>
              <CardHeader>
                <CardTitle>Configurações Gerais</CardTitle>
                <CardDescription>
                  Configure as informações básicas do seu serviço
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Nome da Empresa</Label>
                  <Input
                    id="company-name"
                    placeholder="Sua Empresa de Mobilidade"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="primary-color">Cor Primária</Label>
                  <div className="flex items-center space-x-2">
                    <Input
                      id="primary-color"
                      type="color"
                      value={primaryColor}
                      onChange={(e) => setPrimaryColor(e.target.value)}
                      className="w-12 h-12 p-1"
                    />
                    <Input
                      value={primaryColor}
                      onChange={(e) => setPrimaryColor(e.target.value)}
                      className="flex-1"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="secondary-color">Cor Secundária</Label>
                  <div className="flex items-center space-x-2">
                    <Input
                      id="secondary-color"
                      type="color"
                      value={secondaryColor}
                      onChange={(e) => setSecondaryColor(e.target.value)}
                      className="w-12 h-12 p-1"
                    />
                    <Input
                      value={secondaryColor}
                      onChange={(e) => setSecondaryColor(e.target.value)}
                      className="flex-1"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="precos">
            <Card>
              <CardHeader>
                <CardTitle>Configurações de Preços</CardTitle>
                <CardDescription>
                  Defina os preços e comissões do seu serviço
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="base-price">Preço Base por KM (R$)</Label>
                  <div className="flex items-center space-x-2">
                    <Slider
                      id="base-price"
                      min={1}
                      max={10}
                      step={0.1}
                      value={[basePrice]}
                      onValueChange={(value) => setBasePrice(value[0])}
                      className="flex-1"
                    />
                    <span className="w-12 text-center">
                      {basePrice.toFixed(2)}
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="comission-rate">Taxa de Comissão (%)</Label>
                  <div className="flex items-center space-x-2">
                    <Slider
                      id="comission-rate"
                      min={0}
                      max={50}
                      step={1}
                      value={[comissionRate]}
                      onValueChange={(value) => setComissionRate(value[0])}
                      className="flex-1"
                    />
                    <span className="w-12 text-center">{comissionRate}%</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="dynamic-pricing" />
                  <Label htmlFor="dynamic-pricing">
                    Habilitar preços dinâmicos
                  </Label>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="app">
            <Card>
              <CardHeader>
                <CardTitle>Personalização do Aplicativo</CardTitle>
                <CardDescription>
                  Configure a aparência e funcionalidades do seu aplicativo
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="app-name">Nome do Aplicativo</Label>
                  <Input id="app-name" placeholder="MeuApp de Mobilidade" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="app-icon">Ícone do Aplicativo</Label>
                  <Input id="app-icon" type="file" accept="image/*" />
                </div>
                <div className="space-y-2">
                  <Label>Funcionalidades</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Switch id="feature-chat" />
                      <Label htmlFor="feature-chat">
                        Chat entre passageiro e motorista
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="feature-rating" />
                      <Label htmlFor="feature-rating">
                        Sistema de avaliação
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="feature-scheduled-rides" />
                      <Label htmlFor="feature-scheduled-rides">
                        Agendamento de corridas
                      </Label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="integracoes">
            <Card>
              <CardHeader>
                <CardTitle>Integrações</CardTitle>
                <CardDescription>
                  Configure integrações com serviços externos
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="payment-gateway">Gateway de Pagamento</Label>
                  <Select>
                    <SelectTrigger id="payment-gateway">
                      <SelectValue placeholder="Selecione um gateway" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="stripe">Stripe</SelectItem>
                      <SelectItem value="paypal">PayPal</SelectItem>
                      <SelectItem value="mercadopago">MercadoPago</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="maps-provider">Provedor de Mapas</Label>
                  <Select>
                    <SelectTrigger id="maps-provider">
                      <SelectValue placeholder="Selecione um provedor" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="google">Google Maps</SelectItem>
                      <SelectItem value="mapbox">Mapbox</SelectItem>
                      <SelectItem value="here">HERE Maps</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="api-key">Chave de API</Label>
                  <Input
                    id="api-key"
                    type="password"
                    placeholder="Insira sua chave de API"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-6">
          <Button onClick={handleSave}>Salvar Alterações</Button>
        </div>
      </main>
    </div>
  );
}
