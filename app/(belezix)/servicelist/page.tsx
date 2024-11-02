'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Filter, MapPin, Search, Star, Calendar, Clock, Heart, Share2, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Progress } from "@/components/ui/progress"

const services = [
  {
    id: 1,
    name: "Corte de Cabelo Moderno",
    provider: "Salão Beleza Total",
    rating: 4.8,
    reviews: 120,
    price: 50,
    image: "/placeholder.svg?height=200&width=300",
    location: "Centro, São Paulo",
    distance: "1.2 km",
    availability: ["10:00", "14:30", "16:45"],
    discount: 10,
    category: "Cabelo",
  },
  {
    id: 2,
    name: "Manicure e Pedicure",
    provider: "Nail Art Studio",
    rating: 4.6,
    reviews: 85,
    price: 40,
    image: "/placeholder.svg?height=200&width=300",
    location: "Pinheiros, São Paulo",
    distance: "0.8 km",
    availability: ["09:15", "11:30", "15:00"],
    category: "Unhas",
  },
  {
    id: 3,
    name: "Massagem Relaxante",
    provider: "Spa Serenidade",
    rating: 4.9,
    reviews: 200,
    price: 80,
    image: "/placeholder.svg?height=200&width=300",
    location: "Jardins, São Paulo",
    distance: "2.5 km",
    availability: ["13:00", "17:30"],
    category: "Massagem",
    featured: true,
  },
  {
    id: 4,
    name: "Tratamento Facial",
    provider: "Clínica Derma Beauty",
    rating: 4.7,
    reviews: 150,
    price: 120,
    image: "/placeholder.svg?height=200&width=300",
    location: "Moema, São Paulo",
    distance: "3.7 km",
    availability: ["10:30", "14:00", "16:30"],
    category: "Facial",
    discount: 15,
  },
  {
    id: 5,
    name: "Coloração de Cabelo",
    provider: "Studio Color Hair",
    rating: 4.5,
    reviews: 95,
    price: 150,
    image: "/placeholder.svg?height=200&width=300",
    location: "Vila Madalena, São Paulo",
    distance: "1.9 km",
    availability: ["09:00", "13:45", "17:15"],
    category: "Cabelo",
  },
  {
    id: 6,
    name: "Depilação a Laser",
    provider: "Centro Estético Laser Plus",
    rating: 4.8,
    reviews: 180,
    price: 200,
    image: "/placeholder.svg?height=200&width=300",
    location: "Itaim Bibi, São Paulo",
    distance: "4.2 km",
    availability: ["11:00", "15:30"],
    category: "Depilação",
    featured: true,
  },
]

export default function ServiceListing() {
  const [searchQuery, setSearchQuery] = useState("")
  const [location, setLocation] = useState("")
  const [priceRange, setPriceRange] = useState([0, 500])
  const [sortBy, setSortBy] = useState("recommended")
  const [filteredServices, setFilteredServices] = useState(services)
  const [availableNow, setAvailableNow] = useState(false)
  const [selectedCategories, setSelectedCategories] = useState([])
  const [viewMode, setViewMode] = useState("grid")
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(6)

  const categories = [
    "Cabelo",
    "Unhas",
    "Massagem",
    "Facial",
    "Depilação",
    "Maquiagem",
  ]

  useEffect(() => {
    const filtered = services.filter((service) => {
      const matchesSearch =
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.provider.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesLocation = location
        ? service.location.toLowerCase().includes(location.toLowerCase())
        : true
      const matchesPrice =
        service.price >= priceRange[0] && service.price <= priceRange[1]
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(service.category)
      const matchesAvailability = availableNow
        ? service.availability.some((time) => {
            const [hours, minutes] = time.split(':').map(Number)
            const serviceTime = new Date()
            serviceTime.setHours(hours, minutes)
            const now = new Date()
            return serviceTime > now && serviceTime.getTime() - now.getTime() <= 3600000 // Within next hour
          })
        : true
      return matchesSearch && matchesLocation && matchesPrice && matchesCategory && matchesAvailability
    })

    let sorted = [...filtered]
    switch (sortBy) {
      case "price-low-high":
        sorted.sort((a, b) => a.price - b.price)
        break
      case "price-high-low":
        sorted.sort((a, b) => b.price - a.price)
        break
      case "rating":
        sorted.sort((a, b) => b.rating - a.rating)
        break
      case "distance":
        sorted.sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance))
        break
      default:
        sorted.sort((a, b) => (b.featured ? 1 : -1))
        break
    }

    setFilteredServices(sorted)
  }, [searchQuery, location, priceRange, sortBy, selectedCategories, availableNow])

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    )
  }

  const handleBooking = (serviceId) => {
    console.log(`Booking service with ID ${serviceId}`)
  }

  const pageCount = Math.ceil(filteredServices.length / itemsPerPage)
  const currentServices = filteredServices.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <header className="bg-primary text-primary-foreground py-6 sticky top-0 z-10 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Link href="/" className="text-3xl font-bold tracking-tighter hover:text-accent transition-colors">
              avec
            </Link>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                console.log(`Searching for "${searchQuery}" in "${location}"`)
              }}
              className="flex-1 flex flex-col sm:flex-row gap-2 max-w-3xl w-full"
            >
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Buscar serviços..."
                  className="pl-10 rounded-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="relative flex-1">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Localização"
                  className="pl-10 rounded-full"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <Button type="submit" className="rounded-full">Buscar</Button>
            </form>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="w-full lg:w-64 space-y-6">
            <div className="space-y-2">
              <h2 className="text-lg font-semibold flex items-center">
                <Filter className="mr-2 h-5 w-5" />
                Filtros
              </h2>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="w-full lg:hidden">
                    <Filter className="mr-2 h-4 w-4" />
                    Filtrar
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                  <SheetHeader>
                    <SheetTitle>Filtros</SheetTitle>
                    <SheetDescription>
                      Ajuste os filtros para encontrar o serviço perfeito.
                    </SheetDescription>
                  </SheetHeader>
                  <ScrollArea className="h-[calc(100vh-8rem)] pr-4">
                    <div className="space-y-6 mt-4">
                      <div className="space-y-2">
                        <Label htmlFor="price-range">Faixa de Preço</Label>
                        <Slider
                          id="price-range"
                          min={0}
                          max={500}
                          step={10}
                          value={priceRange}
                          onValueChange={setPriceRange}
                          className="w-full"
                        />
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>R$ {priceRange[0]}</span>
                          <span>R$ {priceRange[1]}</span>
                        </div>
                      </div>
                      <Separator />
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="categories">
                          <AccordionTrigger>Categorias</AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-2">
                              {categories.map((category) => (
                                <div key={category} className="flex items-center space-x-2">
                                  <Checkbox
                                    id={category}
                                    checked={selectedCategories.includes(category)}
                                    onCheckedChange={() => handleCategoryChange(category)}
                                  />
                                  <label
                                    htmlFor={category}
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  >
                                    {category}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                      <Separator />
                      <div className="flex items-center space-x-2">
                        <Switch
                          id="available-now"
                          checked={availableNow}
                          onCheckedChange={setAvailableNow}
                        />
                        <Label htmlFor="available-now">Disponível Agora</Label>
                      </div>
                    </div>
                  </ScrollArea>
                  <SheetFooter>
                    <Button onClick={() => console.log("Filters applied")}>Aplicar Filtros</Button>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>
            <div className="hidden lg:block space-y-6">
              <div className="space-y-2">
                <Label htmlFor="price-range-desktop">Faixa de Preço</Label>
                <Slider
                  id="price-range-desktop"
                  min={0}
                  max={500}
                  step={10}
                  value={priceRange}
                  onValueChange={setPriceRange}
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>R$ {priceRange[0]}</span>
                  <span>R$ {priceRange[1]}</span>
                </div>
              </div>
              <Separator />
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="categories">
                  <AccordionTrigger>Categorias</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox
                            id={`${category}-desktop`}
                            checked={selectedCategories.includes(category)}
                            onCheckedChange={() => handleCategoryChange(category)}
                          />
                          <label
                            htmlFor={`${category}-desktop`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Separator />
              <div className="flex items-center  space-x-2">
                <Switch
                  id="available-now-desktop"
                  checked={availableNow}
                  onCheckedChange={setAvailableNow}
                />
                <Label htmlFor="available-now-desktop">Disponível Agora</Label>
              </div>
            </div>
          </aside>

          <div className="flex-1 space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <h1 className="text-3xl font-bold">Serviços Disponíveis</h1>
              <div className="flex items-center space-x-4">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Ordenar por" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recommended">Recomendados</SelectItem>
                    <SelectItem value="price-low-high">Preço: Menor para Maior</SelectItem>
                    <SelectItem value="price-high-low">Preço: Maior para Menor</SelectItem>
                    <SelectItem value="rating">Avaliação</SelectItem>
                    <SelectItem value="distance">Distância</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex items-center space-x-2 bg-secondary rounded-full p-1">
                  <Button
                    variant={viewMode === "grid" ? "secondary" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="rounded-full"
                  >
                    Grid
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "secondary" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="rounded-full"
                  >
                    Lista
                  </Button>
                </div>
              </div>
            </div>
            <div className={viewMode === "grid" ? "grid gap-6 md:grid-cols-2 lg:grid-cols-3" : "space-y-6"}>
              {currentServices.map((service) => (
                <div key={service.id} className={`bg-card rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${viewMode === "list" ? "flex" : ""}`}>
                  <div className={`relative ${viewMode === "list" ? "w-1/3" : ""}`}>
                    <Image
                      src={service.image}
                      alt={service.name}
                      width={300}
                      height={200}
                      className={`w-full ${viewMode === "list" ? "h-full" : "h-48"} object-cover`}
                    />
                    {service.discount && (
                      <Badge className="absolute top-2 left-2 bg-red-500 text-white">
                        {service.discount}% OFF
                      </Badge>
                    )}
                    {service.featured && (
                      <Badge className="absolute top-2 right-2 bg-yellow-500 text-black">
                        Destaque
                      </Badge>
                    )}
                  </div>
                  <div className={`p-4 space-y-2 ${viewMode === "list" ? "w-2/3" : ""}`}>
                    <h3 className="font-semibold text-lg">{service.name}</h3>
                    <p className="text-sm text-muted-foreground">{service.provider}</p>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="font-medium">{service.rating}</span>
                      <span className="text-sm text-muted-foreground">
                        ({service.reviews} avaliações)
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{service.location}</span>
                      <span className="text-muted-foreground">({service.distance})</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <div className="flex space-x-1">
                        {service.availability.map((time, index) => (
                          <Badge key={index} variant="outline">
                            {time}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-lg">
                        {service.discount ? (
                          <>
                            <span className="line-through text-muted-foreground mr-2">
                              R$ {service.price}
                            </span>
                            <span className="text-red-500">
                              R$ {(service.price * (1 - service.discount / 100)).toFixed(2)}
                            </span>
                          </>
                        ) : (
                          `R$ ${service.price}`
                        )}
                      </span>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button onClick={() => handleBooking(service.id)}>Agendar</Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Clique para agendar este serviço</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <Button variant="ghost" size="sm">
                        <Heart className="h-4 w-4 mr-2" />
                        Favoritar
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Share2 className="h-4 w-4 mr-2" />
                        Compartilhar
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center space-x-2 mt-8">
              <Button
                variant="outline"
                onClick={() => setCurrentPage((old) => Math.max(old - 1, 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Anterior
              </Button>
              <span className="text-sm font-medium">
                Página {currentPage} de {pageCount}
              </span>
              <Button
                variant="outline"
                onClick={() => setCurrentPage((old) => Math.min(old + 1, pageCount))}
                disabled={currentPage === pageCount}
              >
                Próxima
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-primary text-primary-foreground py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Sobre nós</h3>
              <p className="text-sm">
                Avec é a plataforma líder em agendamento de serviços de beleza e bem-estar.
                Conectamos clientes a profissionais qualificados para uma experiência única.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Links rápidos</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:underline">Início</Link></li>
                <li><Link href="#" className="hover:underline">Serviços</Link></li>
                <li><Link href="#" className="hover:underline">Profissionais</Link></li>
                <li><Link href="#" className="hover:underline">Contato</Link></li>
                <li><Link href="#" className="hover:underline">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <address className="text-sm not-italic">
                <p>123 Rua Principal</p>
                <p>Cidade, Estado 12345</p>
                <p>Email: contato@avec.app</p>
                <p>Telefone: (11) 1234-5678</p>
              </address>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center text-sm">
            <p>&copy; 2024 Avec. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}