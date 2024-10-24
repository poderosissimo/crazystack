import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Home, Phone, Mail, MessageCircle, MapPin, DollarSign } from 'lucide-react'

export default function LandingPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Formulário enviado:', { name, email, message })
  }

  const properties = [
    { id: 1, title: "Casa em São Sebastião Praia de Juquehy", price: "R$5,000,000.00", originalPrice: "R$6,000,000.00", image: "/placeholder.svg?height=200&width=300", description: "💎 A Cara da Riqueza Acabou de Chegar em Juquehy 💎\n🌴 Localização: Juquehy, litoral Norte..." },
    { id: 2, title: "Casa 2/4 em Itanhaém frente ao mar", price: "R$1,000,000.00", originalPrice: "R$1,100,000.00", image: "/placeholder.svg?height=200&width=300", description: "🏠 Casa à Venda em Itanhaém, SP 🏠\n🌊 Localização: No centro de frente ao mar..." },
    { id: 3, title: "Terreno 900m2 em São Paulo", price: "R$3,500,000.00", originalPrice: "R$4,000,000.00", image: "/placeholder.svg?height=200&width=300", description: "🌟 Terreno à Venda em São Paulo 🌟\n📍 Localização: Av. Dom Pedro com Almirante Pestana..." },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Banco de Trocas Imóveis</h1>
          <nav className="hidden md:flex space-x-4">
            <a href="#sobre" className="hover:underline">Sobre</a>
            <a href="#imoveis" className="hover:underline">Imóveis</a>
            <a href="#contato" className="hover:underline">Contato</a>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Negociar um imóvel ficou fácil</h2>
            <p className="text-xl mb-8">Quer vender ou comprar um imóvel? Cadastre seu imóvel do Litoral Paulista.</p>
            <Button size="lg" onClick={() => window.location.href = 'https://wa.me/5511991843119'}>
              <MessageCircle className="mr-2 h-4 w-4" /> Fale com Gilson no WhatsApp
            </Button>
          </div>
        </section>

        <section id="sobre" className="py-16 bg-background">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Por que escolher o Banco de Trocas Imóveis?</h2>
            <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
              Escolha o caminho mais seguro e eficiente com o Banco de Trocas Imóveis, referência no mercado desde 1992. 
              Afinal negociar seu imóvel não precisa ser complicado. Nós simplificamos o processo, garantindo segurança 
              e satisfação onde ambas as partes saem ganhando.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Repeat className="mr-2 h-6 w-6" /> Trocas Simplificadas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Sistema de trocas com volta ou recebimento de valores
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="mr-2 h-6 w-6" /> Ampla Cobertura
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Atuação em São Paulo Capital, Litoral Sul e Norte, e Interior Paulista
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <DollarSign className="mr-2 h-6 w-6" /> Negociações Ágeis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Compra e venda sem burocracia, com as melhores opções do mercado
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="imoveis" className="py-16 bg-muted">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Imóveis em Destaque</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {properties.map((property) => (
                <Card key={property.id}>
                  <CardHeader>
                    <CardTitle>{property.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img src={property.image} alt={property.title} className="w-full h-48 object-cover mb-4 rounded" />
                    <p className="text-sm mb-2">{property.description}</p>
                    <p className="text-lg font-bold">{property.price}</p>
                    <p className="text-sm line-through text-muted-foreground">{property.originalPrice}</p>
                    <Button className="mt-4 w-full" variant="outline">Tenho Interesse</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Conheça Gilson Gonçalves de Aguiar</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <img src="/placeholder.svg?height=200&width=200" alt="Gilson Aguiar" className="rounded-full w-48 h-48 object-cover" />
              <div className="max-w-md text-left">
                <p className="mb-4">
                  Meu nome é Gilson Gonçalves de Aguiar, CRECI 36.924-F, e atuo no ramo imobiliário desde 1981. 
                  Meu objetivo é criar soluções para a realização de seu negócio imobiliário.
                </p>
                <p>
                  Tenho amplo conhecimento em imóveis em São Paulo Capital, Litoral Sul e Norte do Estado de São Paulo, 
                  e Interior Paulista. Utilizo o sistema de trocas com volta ou recebimento de valores facilitando e 
                  muito a transação imobiliária.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="py-16 bg-background">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Entre em Contato</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Informações de Contato</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Phone className="mr-2 h-5 w-5" />
                    <span>(11) 99184-3119</span>
                  </li>
                  <li className="flex items-center">
                    <Mail className="mr-2 h-5 w-5" />
                    <span>gilson.aguiar@email.com</span>
                  </li>
                  <li className="flex items-center">
                    <Home className="mr-2 h-5 w-5" />
                    <span>São Paulo, SP</span>
                  </li>
                </ul>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Seu Nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <Input
                  type="email"
                  placeholder="Seu E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Textarea
                  placeholder="Sua Mensagem"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
                <Button type="submit" className="w-full">Enviar Mensagem</Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Banco de Trocas Imóveis - Gilson Gonçalves de Aguiar. Todos os direitos reservados.</p>
          <p className="mt-2">CRECI 36.924-F</p>
        </div>
      </footer>
    </div>
  )
}