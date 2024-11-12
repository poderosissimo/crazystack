'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Heart, Edit, Search, ChevronDown, Filter } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"

export default function InvitationListing() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [showFilters, setShowFilters] = useState(false)

  const invitations = [
    {
      id: 1,
      title: "Fundo do Mar",
      price: "R$85",
      image: "/placeholder.svg?height=400&width=300",
      description: "Tema aquático com peixinhos e corais coloridos",
      category: "aquatico"
    },
    {
      id: 2,
      title: "Chapeuzinho Vermelho",
      price: "R$85",
      image: "/placeholder.svg?height=400&width=300",
      description: "Uma aventura encantada na floresta",
      category: "contos"
    },
    {
      id: 3,
      title: "Safari Baby",
      price: "R$85",
      image: "/placeholder.svg?height=400&width=300",
      description: "Animais fofos em uma aventura safari",
      category: "animais"
    },
    {
      id: 4,
      title: "Fazendinha (menina)",
      price: "R$85",
      image: "/placeholder.svg?height=400&width=300",
      description: "Tema rural com celeiro rosa e moinho",
      category: "fazenda"
    }
  ]

  const filteredInvitations = invitations.filter(invitation => 
    invitation.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === "all" || invitation.category === selectedCategory)
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center mb-12">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="relative w-24 h-24">
              <Image
                src="/placeholder.svg?height=96&width=96"
                alt="Com Amor Logo"
                width={96}
                height={96}
                className="rounded-full"
              />
              <Heart className="absolute -bottom-2 -right-2 w-8 h-8 text-pink-500" />
            </div>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 text-center">
            CONVITES <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">DIGITAIS</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 text-center max-w-2xl">
            Transforme a celebração do seu filho em uma experiência encantadora
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0 md:space-x-4">
          <div className="relative w-full md:w-1/2">
            <Input
              type="text"
              placeholder="Buscar convites..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-full border-pink-200 focus:border-pink-500 focus:ring focus:ring-pink-200 focus:ring-opacity-50 w-full"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
          <div className="flex items-center space-x-4 w-full md:w-auto">
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
              className="rounded-full border-pink-200 focus:border-pink-500 focus:ring focus:ring-pink-200 focus:ring-opacity-50"
            >
              <option value="all">Todas Categorias</option>
              <option value="aquatico">Aquático</option>
              <option value="contos">Contos de Fadas</option>
              <option value="animais">Animais</option>
              <option value="fazenda">Fazenda</option>
            </Select>
            <Button
              onClick={() => setShowFilters(!showFilters)}
              className="rounded-full bg-pink-100 text-pink-500 hover:bg-pink-200"
            >
              <Filter className="w-5 h-5 mr-2" />
              Filtros
            </Button>
          </div>
        </div>

        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-8 p-4 bg-pink-50 rounded-lg"
          >
            {/* Add more filter options here */}
            <p className="text-gray-600">Filtros adicionais em desenvolvimento...</p>
          </motion.div>
        )}

        <AnimatePresence>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filteredInvitations.map((invitation, index) => (
              <motion.div
                key={invitation.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setHoveredCard(invitation.id)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <Card className="group relative overflow-hidden rounded-2xl border-2 border-pink-100 hover:border-pink-300 transition-all duration-300 h-full flex flex-col">
                  <CardContent className="p-0 flex-grow">
                    <div className="relative aspect-[3/4]">
                      <Image
                        src={invitation.image}
                        alt={invitation.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                        <p className="text-white text-center px-4">{invitation.description}</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col items-center p-4 bg-white">
                    <h3 className="text-lg font-semibold mb-1">{invitation.title}</h3>
                    <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-4">{invitation.price}</p>
                    <Link href={`/convite/${invitation.id}`} className="w-full">
                      <Button size="lg" className="rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-2 px-4 w-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                        <Edit className="w-4 h-4 mr-2" />
                        Personalizar
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredInvitations.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-2xl text-gray-600">Nenhum convite encontrado.</p>
          </motion.div>
        )}

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-pink-100 to-purple-100 border-none overflow-hidden">
            <CardContent className="p-8 relative">
              <div className="absolute top-0 right-0 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <h2 className="text-2xl font-bold mb-4 relative z-10">
                NÃO ENCONTROU O TEMA QUE DESEJA?
              </h2>
              <p className="text-lg mb-6 relative z-10">
                ENTRE EM CONTATO QUE PODEMOS PERSONALIZAR PARA VOCÊ
              </p>
              <Button size="lg" className="rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-3 px-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg relative z-10">
                Solicitar Tema Personalizado
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </main>

      <footer className="py-8 text-center text-gray-600 bg-gradient-to-t from-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <p className="mb-4">© 2024 Com Amor. Todos os direitos reservados.</p>
          <div className="flex justify-center space-x-4">
            <Link href="/termos" className="hover:text-pink-500 transition-colors">Termos de Uso</Link>
            <Link href="/privacidade" className="hover:text-pink-500 transition-colors">Política de Privacidade</Link>
            <Link href="/contato" className="hover:text-pink-500 transition-colors">Contato</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}