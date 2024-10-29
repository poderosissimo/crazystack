'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Heart, Send, MapPin, Star, Book, School, Plus, Image as ImageIcon } from "lucide-react"
import Image from "next/image"

type Coordinates = {
  latitude: number
  longitude: number
}

type Evaluation = {
  id: number
  type: 'subject' | 'professor'
  name: string
  rating: number
  comment: string
}

type Spot = {
  id: number
  location: string
  description: string
  likes: number
  coordinates: Coordinates
  course: string
  university: string
  image?: string
}

type Suggestion = {
  id: number
  type: 'course' | 'university'
  name: string
  status: 'pending' | 'approved' | 'rejected'
}

function calculateDistance(coord1: Coordinates, coord2: Coordinates): number {
  const R = 6371 // Radius of the Earth in km
  const dLat = (coord2.latitude - coord1.latitude) * (Math.PI / 180)
  const dLon = (coord2.longitude - coord1.longitude) * (Math.PI / 180)
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(coord1.latitude * (Math.PI / 180)) * Math.cos(coord2.latitude * (Math.PI / 180)) * 
    Math.sin(dLon / 2) * Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

type AutocompleteProps = {
  options: string[]
  placeholder: string
  onSelect: (value: string) => void
}

function Autocomplete({ options, placeholder, onSelect }: AutocompleteProps) {
  const [inputValue, setInputValue] = useState('')
  const [filteredOptions, setFilteredOptions] = useState<string[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const filtered = options.filter(option =>
      option.toLowerCase().includes(inputValue.toLowerCase())
    )
    setFilteredOptions(filtered)
  }, [inputValue, options])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    setIsOpen(true)
  }

  const handleSelectOption = (option: string) => {
    setInputValue(option)
    onSelect(option)
    setIsOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="relative" ref={inputRef}>
      <Input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        onFocus={() => setIsOpen(true)}
      />
      {isOpen && filteredOptions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 mt-1 max-h-60 overflow-auto rounded-md shadow-lg">
          {filteredOptions.map((option, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelectOption(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function SpottedFeed() {
  const [spots, setSpots] = useState<Spot[]>([
    { id: 1, location: "Biblioteca Central", description: "Vi uma garota de cabelo ruivo lendo 'O Nome do Vento'. Você parecia tão concentrada e bonita!", likes: 5, coordinates: { latitude: -23.5505, longitude: -46.6333 }, course: "Engenharia de Computação", university: "Universidade de São Paulo", image: "/placeholder.svg?height=300&width=400" },
    { id: 2, location: "Cantina", description: "Rapaz de moletom azul pedindo um café. Seu sorriso iluminou meu dia!", likes: 3, coordinates: { latitude: -23.5545, longitude: -46.6353 }, course: "Medicina", university: "Universidade Federal do Rio de Janeiro", image: "/placeholder.svg?height=300&width=400" },
  ])
  const [newSpot, setNewSpot] = useState({ location: '', description: '', coordinates: { latitude: 0, longitude: 0 }, course: '', university: '', image: '' })
  const [userLocation, setUserLocation] = useState<Coordinates | null>(null)
  const [distanceFilter, setDistanceFilter] = useState<number | null>(null)
  const [courseFilter, setCourseFilter] = useState<string | null>(null)
  const [universityFilter, setUniversityFilter] = useState<string | null>(null)
  const [evaluations, setEvaluations] = useState<Evaluation[]>([
    { id: 1, type: 'subject', name: 'Cálculo I', rating: 4, comment: 'Ótima matéria, professor explica muito bem!' },
    { id: 2, type: 'professor', name: 'Dra. Silva', rating: 5, comment: 'Excelente professora, muito dedicada aos alunos.' },
  ])
  const [newEvaluation, setNewEvaluation] = useState<Omit<Evaluation, 'id'>>({ type: 'subject', name: '', rating: 0, comment: '' })
  const [suggestions, setSuggestions] = useState<Suggestion[]>([])
  const [newSuggestion, setNewSuggestion] = useState<Omit<Suggestion, 'id' | 'status'>>({ type: 'course', name: '' })

  const [courses, setCourses] = useState<string[]>([
    "Engenharia de Computação",
    "Medicina",
    "Direito",
    "Administração",
    "Psicologia"
  ])

  const [universities, setUniversities] = useState<string[]>([
    "Universidade de São Paulo",
    "Universidade Federal do Rio de Janeiro",
    "Universidade Estadual de Campinas",
    "Universidade Federal de Minas Gerais",
    "Pontifícia Universidade Católica de São Paulo"
  ])

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })
      }, (error) => {
        console.error("Erro ao obter localização:", error)
      })
    } else {
      console.log("Geolocalização não disponível")
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newSpot.location && newSpot.description && userLocation && newSpot.course && newSpot.university) {
      setSpots([...spots, { ...newSpot, id: spots.length + 1, likes: 0, coordinates: userLocation }])
      setNewSpot({ location: '', description: '', coordinates: { latitude: 0, longitude: 0 }, course: '', university: '', image: '' })
    }
  }

  const handleLike = (id: number) => {
    setSpots(spots.map(spot => 
      spot.id === id ? { ...spot, likes: spot.likes + 1 } : spot
    ))
  }

  const handleEvaluationSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newEvaluation.name && newEvaluation.rating && newEvaluation.comment) {
      setEvaluations([...evaluations, { ...newEvaluation, id: evaluations.length + 1 }])
      setNewEvaluation({ type: 'subject', name: '', rating: 0, comment: '' })
    }
  }

  const handleSuggestionSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newSuggestion.name) {
      setSuggestions([...suggestions, { ...newSuggestion, id: suggestions.length + 1, status: 'pending' }])
      setNewSuggestion({ type: 'course', name: '' })
      alert('Sua sugestão foi enviada para aprovação do administrador. Obrigado!')
    }
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setNewSpot({ ...newSpot, image: reader.result as string })
      }
      reader.readAsDataURL(file)
    }
  }

  const filteredSpots = spots.filter(spot => {
    const distanceOk = !userLocation || !distanceFilter || calculateDistance(userLocation, spot.coordinates) <= distanceFilter
    const courseOk = !courseFilter || spot.course === courseFilter
    const universityOk = !universityFilter || spot.university === universityFilter
    return distanceOk && courseOk && universityOk
  })

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center text-primary">Spotted UFXX</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>Novo Spotted</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Onde você viu?"
                value={newSpot.location}
                onChange={(e) => setNewSpot({...newSpot, location: e.target.value})}
              />
              <Textarea
                placeholder="Descreva a pessoa e o que aconteceu..."
                value={newSpot.description}
                onChange={(e) => setNewSpot({...newSpot, description: e.target.value})}
              />
              <div className="grid grid-cols-2 gap-4">
                <Autocomplete
                  options={courses}
                  placeholder="Selecione o curso"
                  onSelect={(value) => setNewSpot({...newSpot, course: value})}
                />
                <Autocomplete
                  options={universities}
                  placeholder="Selecione a universidade"
                  onSelect={(value) => setNewSpot({...newSpot, university: value})}
                />
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <Label htmlFor="image-upload" className="cursor-pointer">
                  <div className="flex items-center space-x-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 rounded-md">
                    <ImageIcon className="h-4 w-4" />
                    <span>Adicionar Foto</span>
                  </div>
                </Label>
                {newSpot.image && <span className="text-sm text-gray-500">Imagem selecionada</span>}
              </div>
              <Button type="submit" className="w-full">
                <Send className="mr-2 h-4 w-4" /> Enviar Spotted
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="flex flex-wrap justify-between items-center gap-4">
          <h2 className="text-xl font-semibold">Spotteds Recentes</h2>
          <Select onValueChange={(value) => setDistanceFilter(Number(value))}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filtrar por distância" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Até 1 km</SelectItem>
              <SelectItem value="5">Até 5 km</SelectItem>
              <SelectItem value="10">Até 10 km</SelectItem>
              <SelectItem value="50">Até 50 km</SelectItem>
            </SelectContent>
          </Select>
          <Select onValueChange={(value) => setCourseFilter(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filtrar por curso" />
            </SelectTrigger>
            <SelectContent>
              {courses.map((course) => (
                <SelectItem key={course} value={course}>{course}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select onValueChange={(value) => setUniversityFilter(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filtrar por universidade" />
            </SelectTrigger>
            <SelectContent>
              {universities.map((university) => (
                <SelectItem key={university} value={university}>{university}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          
          {filteredSpots.map((spot) => (
            <Card key={spot.id}>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">{spot.location}</CardTitle>
              </CardHeader>
              <CardContent>
                {spot.image && (
                  <div className="mb-4">
                    <Image
                      src={spot.image}
                      alt="Imagem do spotted"
                      width={400}
                      height={300}
                      className="rounded-md object-cover w-full"
                    />
                  </div>
                )}
                <p>{spot.description}</p>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <Book className="inline mr-1 h-4 w-4" />
                  <span className="mr-2">{spot.course}</span>
                  <School className="inline mr-1 h-4 w-4" />
                  <span>{spot.university}</span>
                </div>
                {userLocation && (
                  <p className="text-sm text-gray-500 mt-2">
                    <MapPin className="inline mr-1 h-4 w-4" />
                    {calculateDistance(userLocation, spot.coordinates).toFixed(1)} km de distância
                  </p>
                )}
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Avatar className="h-6 w-6">
                    <AvatarFallback>A</AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-gray-500">Anônimo</span>
                </div>
                <Button variant="ghost" onClick={() => handleLike(spot.id)}>
                  <Heart className="mr-2 h-4 w-4" /> {spot.likes}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Avaliações de Matérias e Professores</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {evaluations.map((evaluation) => (
                <div key={evaluation.id} className="border-b pb-2">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold">{evaluation.name}</h3>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < evaluation.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{evaluation.comment}</p>
                  <span className="text-xs text-gray-400">{evaluation.type === 'subject' ? 'Matéria' : 'Professor(a)'}</span>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Dialog>
              <DialogTrigger asChild>
                <Button>Adicionar Avaliação</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Nova Avaliação</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleEvaluationSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="eval-type">Tipo</Label>
                    <Select onValueChange={(value) => setNewEvaluation({...newEvaluation, type: value as 'subject' | 'professor'})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="subject">Matéria</SelectItem>
                        <SelectItem value="professor">Professor(a)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="eval-name">Nome</Label>
                    <Input
                      id="eval-name"
                      value={newEvaluation.name}
                      onChange={(e) => setNewEvaluation({...newEvaluation, name: e.target.value})}
                      placeholder={newEvaluation.type === 'subject' ? 'Nome da matéria' : 'Nome do(a) professor(a)'}
                    />
                  </div>
                  <div>
                    <Label htmlFor="eval-rating">Avaliação</Label>
                    <Select onValueChange={(value) => setNewEvaluation({...newEvaluation, rating: Number(value)})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a avaliação" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5].map((rating) => (
                          <SelectItem key={rating} value={rating.toString()}>{rating} estrela{rating !== 1 ? 's' : ''}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="eval-comment">Comentário</Label>
                    <Textarea
                      id="eval-comment"
                      value={newEvaluation.comment}
                      onChange={(e) => setNewEvaluation({...newEvaluation, comment: e.target.value})}
                      placeholder="Deixe seu comentário..."
                    />
                  </div>
                  <Button type="submit">Enviar Avaliação</Button>
                </form>
              </DialogContent>
            </Dialog>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sugerir Novo Curso ou Universidade</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSuggestionSubmit} className="space-y-4">
              <div>
                <Label htmlFor="suggestion-type">Tipo</Label>
                <Select onValueChange={(value) => setNewSuggestion({...newSuggestion, type: value as 'course' | 'university'})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="course">Curso</SelectItem>
                    <SelectItem value="university">Universidade</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="suggestion-name">Nome</Label>
                <Input
                  id="suggestion-name"
                  value={newSuggestion.name}
                  onChange={(e) => setNewSuggestion({...newSuggestion, name: e.target.value})}
                  placeholder={newSuggestion.type === 'course' ? 'Nome do curso' : 'Nome da universidade'}
                />
              </div>
              <Button type="submit">
                <Plus className="mr-2 h-4 w-4" /> Enviar Sugestão
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}