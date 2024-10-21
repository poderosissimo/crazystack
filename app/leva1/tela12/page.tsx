"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, MessageCircle } from "lucide-react"

export default function MovingDay() {
  const [currentLocation, setCurrentLocation] = useState({ lat: -23.550520, lng: -46.633308 })
  const [estimatedArrival, setEstimatedArrival] = useState("14:30")

  useEffect(() => {
    const interval = setInterval(() => {
      // Simular movimento do caminhão
      setCurrentLocation(prev => ({
        lat: prev.lat + 0.001,
        lng: prev.lng + 0.001
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Dia da Mudança</h2>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Localização do Caminhão</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-video bg-muted rounded-md flex items-center justify-center mb-4">
            <MapPin className="h-12 w-12 text-primary" />
          </div>
          <p className="text-sm text-muted-foreground mb-2">
            Latitude: {currentLocation.lat.toFixed(6)}
          </p>
          <p className="text-sm text-muted-foreground">
            Longitude: {currentLocation.lng.toFixed(6)}
          </p>
        </CardContent>
      </Card>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Informações da Entrega</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="font-semibold mb-2">Tempo estimado de chegada: {estimatedArrival}</p>
          <p className="text-sm text-muted-foreground">A equipe está a caminho do seu novo endereço.</p>
        </CardContent>
      </Card>
      <div className="space-y-4">
        <Button className="w-full" variant="outline">
          <Phone className="mr-2 h-4 w-4" /> Ligar para Equipe
        </Button>
        <Button className="w-full">
          <MessageCircle className="mr-2 h-4 w-4" /> Enviar Mensagem
        </Button>
      </div>
    </div>
  )
}