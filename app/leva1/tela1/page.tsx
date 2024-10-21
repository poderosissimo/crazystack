"use client"

import { useState } from 'react'
import { Star, MapPin, DollarSign, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Tipo para representar um serviço de mudança
type MovingService = {
  id: string
  name: string
  type: string
  rating: number
  price: number
  location: string
  image: string
}

// Dados mockados para exemplo
const mockServices: MovingService[] = [
  { id: '1', name: 'Mudanças Rápidas', type: 'Residencial', rating: 4.5, price: 500, location: 'São Paulo', image: '/placeholder.svg?height=100&width=100' },
  { id: '2', name: 'Transporte Seguro', type: 'Comercial', rating: 4.2, price: 800, location: 'Rio de Janeiro', image: '/placeholder.svg?height=100&width=100' },
  { id: '3', name: 'Mudanças Express', type: 'Residencial', rating: 4.8, price: 600, location: 'Belo Horizonte', image: '/placeholder.svg?height=100&width=100' },
  { id: '4', name: 'Transporte Empresarial', type: 'Comercial', rating: 4.0, price: 1000, location: 'São Paulo', image: '/placeholder.svg?height=100&width=100' },
]

export default function Component() {
  const [filteredServices, setFilteredServices] = useState<MovingService[]>(mockServices)
  const [locationFilter, setLocationFilter] = useState('')
  const [typeFilter, setTypeFilter] = useState('')

  const handleFilter = () => {
  const filtered = mockServices.filter(service => 
    (locationFilter === '' || service.location.toLowerCase().includes(locationFilter.toLowerCase())) &&
    (typeFilter === 'all' || service.type === typeFilter) // Updated from '' to 'all'
  )
  setFilteredServices(filtered)
}


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Serviços de Mudança</h1>
      
      <div className="flex flex-wrap gap-4 mb-6">
        <Input
          placeholder="Filtrar por localização"
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          className="max-w-xs"
        />
        <Select value={typeFilter} onValueChange={setTypeFilter}>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Tipo de serviço" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="all">Todos</SelectItem> {/* Changed from empty string to "all" */}
    <SelectItem value="Residencial">Residencial</SelectItem>
    <SelectItem value="Comercial">Comercial</SelectItem>
  </SelectContent>
</Select>

        <Button onClick={handleFilter}>Filtrar</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map(service => (
          <Card key={service.id}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{service.name}</span>
                <img src={service.image} alt={service.name} className="w-16 h-16 rounded-full" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="flex items-center mb-2"><MapPin className="mr-2" size={16} /> {service.location}</p>
              <p className="flex items-center mb-2"><Star className="mr-2" size={16} fill="gold" /> {service.rating.toFixed(1)}</p>
              <p className="flex items-center mb-2"><DollarSign className="mr-2" size={16} /> A partir de R$ {service.price}</p>
              <p>Tipo: {service.type}</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Ver detalhes <ArrowRight className="ml-2" size={16} />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}