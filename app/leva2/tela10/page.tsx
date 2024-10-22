import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Search, Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Menu Superior com Barra de Pesquisa */}
      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex items-center justify-between h-16">
          <nav className="flex items-center space-x-4 lg:space-x-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/catalogo" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Catálogo
            </Link>
            <Link href="/contato" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Contato
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <form className="flex items-center">
              <Input type="search" placeholder="Buscar produtos..." className="w-[150px] sm:w-[200px] lg:w-[300px]" />
              <Button type="submit" size="icon" variant="ghost">
                <Search className="h-4 w-4" />
                <span className="sr-only">Buscar</span>
              </Button>
            </form>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Banner Carrossel */}
        <div className="relative overflow-hidden rounded-lg mb-8">
          <div className="flex transition-transform duration-500 ease-in-out transform translate-x-0">
            <div className="w-full flex-shrink-0 relative">
              <Image src="/placeholder.svg" alt="Promoção" width={800} height={400} className="w-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Compre Agora
                </Button>
              </div>
            </div>
          </div>
          <Button size="icon" variant="outline" className="absolute left-2 top-1/2 -translate-y-1/2">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="outline" className="absolute right-2 top-1/2 -translate-y-1/2">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Grade de Novidades */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Novidades</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <Card key={item}>
                <CardContent className="p-4">
                  <Image src="/placeholder.svg" alt={`Produto ${item}`} width={200} height={200} className="w-full object-cover mb-2 rounded" />
                  <h3 className="font-semibold">Produto {item}</h3>
                  <p className="text-sm text-muted-foreground">R$ 99,99</p>
                  <Button variant="outline" size="sm" className="mt-2 w-full">
                    Ver Detalhes
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Cards de Produtos em Promoção */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Promoções</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <Card key={item}>
                <CardContent className="p-4 relative">
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    -20%
                  </div>
                  <Image src="/placeholder.svg?height=200&width=200" alt={`Promoção ${item}`} width={200} height={200} className="w-full object-cover mb-2 rounded" />
                  <h3 className="font-semibold">Produto em Promoção {item}</h3>
                  <p className="text-sm text-muted-foreground line-through">R$ 129,99</p>
                  <p className="text-sm font-bold text-red-500">R$ 103,99</p>
                  <Button variant="outline" size="sm" className="mt-2 w-full">
                    Encomendar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Depoimentos em Slider */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">O que nossos clientes dizem</h2>
          <div className="flex flex-nowrap overflow-x-auto space-x-4 pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="flex-shrink-0 w-[280px] sm:w-[320px]">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Image src="/placeholder.svg" alt={`Cliente ${item}`} width={50} height={50} className="rounded-full mr-4" />
                    <div>
                      <p className="font-semibold">Cliente {item}</p>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "Adorei as bijuterias! Qualidade excelente e atendimento impecável."
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Seção de Coleções com Ícones Visuais */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Nossas Coleções</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {['Festa', 'Casual', 'Minimalista', 'Verão'].map((colecao) => (
              <Link href={`/colecao/${colecao.toLowerCase()}`} key={colecao} className="text-center">
                <div className="bg-muted rounded-full p-4 mb-2 mx-auto w-20 h-20 flex items-center justify-center">
                  <Image src="/placeholder.svg?height=40&width=40" alt={colecao} width={40} height={40} />
                </div>
                <p className="text-sm font-medium">{colecao}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* Botão Flutuante de WhatsApp */}
      <Button
        size="icon"
        className="fixed bottom-4 right-4 rounded-full bg-green-500 hover:bg-green-600 text-white w-12 h-12 flex items-center justify-center"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="h-6 w-6" />
        <span className="sr-only">Contato via WhatsApp</span>
      </Button>
    </div>
  )
}