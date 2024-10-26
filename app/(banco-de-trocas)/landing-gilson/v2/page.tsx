"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Home,
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  DollarSign,
  Menu,
  X,
} from "lucide-react";

export default function LandingPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulário enviado:", { name, email, message });
  };

  const properties = [
    {
      id: 1,
      title: "Casa em São Sebastião Praia de Juquehy",
      price: "R$5,000,000.00",
      originalPrice: "R$6,000,000.00",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "💎 A Cara da Riqueza Acabou de Chegar em Juquehy 💎\n🌴 Localização: Juquehy, litoral Norte...",
    },
    {
      id: 2,
      title: "Casa 2/4 em Itanhaém frente ao mar",
      price: "R$1,000,000.00",
      originalPrice: "R$1,100,000.00",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "🏠 Casa à Venda em Itanhaém, SP 🏠\n🌊 Localização: No centro de frente ao mar...",
    },
    {
      id: 3,
      title: "Terreno 900m2 em São Paulo",
      price: "R$3,500,000.00",
      originalPrice: "R$4,000,000.00",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "🌟 Terreno à Venda em São Paulo 🌟\n📍 Localização: Av. Dom Pedro com Almirante Pestana...",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Maria Silva",
      text: "Gilson foi incrível em nos ajudar a encontrar nossa casa dos sonhos. Seu conhecimento do mercado é incomparável!",
    },
    {
      id: 2,
      name: "João Santos",
      text: "O sistema de trocas do Banco de Trocas Imóveis tornou a venda da minha antiga casa e a compra da nova incrivelmente fácil.",
    },
    {
      id: 3,
      name: "Ana Oliveira",
      text: "A dedicação e profissionalismo de Gilson fizeram toda a diferença em nossa jornada imobiliária. Altamente recomendado!",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <header
        className={`py-4 sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">
            Banco de Trocas Imóveis
          </h1>
          <nav className="hidden md:flex space-x-6">
            <a
              href="#sobre"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Sobre
            </a>
            <a
              href="#imoveis"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Imóveis
            </a>
            <a
              href="#depoimentos"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Depoimentos
            </a>
            <a
              href="#contato"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Contato
            </a>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col space-y-4">
                <a href="#sobre" className="text-lg font-medium">
                  Sobre
                </a>
                <a href="#imoveis" className="text-lg font-medium">
                  Imóveis
                </a>
                <a href="#depoimentos" className="text-lg font-medium">
                  Depoimentos
                </a>
                <a href="#contato" className="text-lg font-medium">
                  Contato
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-grow">
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/placeholder.svg?height=1080&width=1920"
              alt="Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          <div className="container mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white animate-fade-in-up">
              Negociar um imóvel ficou fácil
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in-up animation-delay-200">
              Quer vender ou comprar um imóvel? Cadastre seu imóvel do Litoral
              Paulista.
            </p>
            <Button
              size="lg"
              onClick={() =>
                (window.location.href = "https://wa.me/5511991843119")
              }
              className="animate-fade-in-up animation-delay-400 bg-primary hover:bg-primary/90 text-white"
            >
              <MessageCircle className="mr-2 h-5 w-5" /> Fale com Gilson no
              WhatsApp
            </Button>
          </div>
        </section>

        <section id="sobre" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary">
              Por que escolher o Banco de Trocas Imóveis?
            </h2>
            <p className="text-lg md:text-xl mb-12 text-center max-w-3xl mx-auto text-gray-600">
              Escolha o caminho mais seguro e eficiente com o Banco de Trocas
              Imóveis, referência no mercado desde 1992. Afinal negociar seu
              imóvel não precisa ser complicado. Nós simplificamos o processo,
              garantindo segurança e satisfação onde ambas as partes saem
              ganhando.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <MapPin className="mr-2 h-6 w-6" /> Trocas Simplificadas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Sistema de trocas com volta ou recebimento de valores
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <Home className="mr-2 h-6 w-6" /> Ampla Cobertura
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Atuação em São Paulo Capital, Litoral Sul e Norte, e Interior
                  Paulista
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <DollarSign className="mr-2 h-6 w-6" /> Negociações Ágeis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Compra e venda sem burocracia, com as melhores opções do
                  mercado
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="imoveis" className="py-16 md:py-24 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">
              Imóveis em Destaque
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {properties.map((property) => (
                <Card
                  key={property.id}
                  className="overflow-hidden transition-all duration-300 hover:shadow-xl"
                >
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-primary">
                      {property.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-4 text-gray-600">
                      {property.description}
                    </p>
                    <p className="text-xl font-bold text-primary">
                      {property.price}
                    </p>
                    <p className="text-sm line-through text-gray-400">
                      {property.originalPrice}
                    </p>
                    <Button className="mt-4 w-full bg-primary hover:bg-primary/90 text-white">
                      Tenho Interesse
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-primary text-white">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Conheça Gilson Gonçalves de Aguiar
                </h2>
                <p className="mb-4 text-lg">
                  Meu nome é Gilson Gonçalves de Aguiar, CRECI 36.924-F, e atuo
                  no ramo imobiliário desde 1981. Meu objetivo é criar soluções
                  para a realização de seu negócio imobiliário.
                </p>
                <p className="text-lg">
                  Tenho amplo conhecimento em imóveis em São Paulo Capital,
                  Litoral Sul e Norte do Estado de São Paulo, e Interior
                  Paulista. Utilizo o sistema de trocas com volta ou recebimento
                  de valores facilitando e muito a transação imobiliária.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Gilson Aguiar"
                  className="rounded-full w-64 h-64 object-cover border-4 border-white shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="depoimentos" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">
              O que nossos clientes dizem
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="bg-gray-100">
                  <CardContent className="pt-6">
                    <p className="mb-4 text-gray-600 italic">
                      "{testimonial.text}"
                    </p>
                    <p className="font-semibold text-primary">
                      {testimonial.name}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="py-16 md:py-24 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">
              Entre em Contato
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-primary">
                  Informações de Contato
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-600">
                    <Phone className="mr-4 h-6 w-6 text-primary" />
                    <span>(11) 99184-3119</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Mail className="mr-4 h-6 w-6 text-primary" />
                    <span>gilson.aguiar@email.com</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <MapPin className="mr-4 h-6 w-6 text-primary" />
                    <span>São Paulo, SP</span>
                  </li>
                </ul>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  type="text"
                  placeholder="Seu Nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-white"
                />
                <Input
                  type="email"
                  placeholder="Seu E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white"
                />
                <Textarea
                  placeholder="Sua Mensagem"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="bg-white"
                />
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Banco de Trocas Imóveis
            </h3>
            <p className="text-gray-400">
              Simplificando negociações imobiliárias desde 1992.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#sobre"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#imoveis"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Imóveis
                </a>
              </li>
              <li>
                <a
                  href="#depoimentos"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Depoimentos
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contato</h3>
            <p className="text-gray-400">(11) 99184-3119</p>
            <p className="text-gray-400">gilson.aguiar@email.com</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>
            &copy; 2024 Banco de Trocas Imóveis - Gilson Gonçalves de Aguiar.
            Todos os direitos reservados.
          </p>
          <p className="mt-2">CRECI 36.924-F</p>
        </div>
      </footer>

      <div className="fixed bottom-4 right-4 z-50">
        <Button
          size="lg"
          className="rounded-full shadow-lg bg-primary hover:bg-primary/90 text-white"
          onClick={() => (window.location.href = "https://wa.me/5511991843119")}
        >
          <MessageCircle className="mr-2 h-5 w-5" /> Fale Conosco
        </Button>
      </div>
    </div>
  );
}
