"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"

export default function QuoteAndReservation() {
  const [selectedPlan, setSelectedPlan] = useState("basic")

  const plans = {
    basic: { price: 1500, description: "Serviço básico de mudança" },
    standard: { price: 2500, description: "Serviço padrão com embalagem" },
    premium: { price: 3500, description: "Serviço premium com embalagem e montagem" },
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Orçamento e Reserva</h2>
      <Card>
        <CardHeader>
          <CardTitle>Selecione seu Plano</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan}>
            {Object.entries(plans).map(([key, plan]) => (
              <div key={key} className="flex items-center justify-between space-x-2 mb-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value={key} id={key} />
                  <Label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</Label>
                </div>
                <span className="font-semibold">R$ {plan.price}</span>
              </div>
            ))}
          </RadioGroup>
          <Separator className="my-4" />
          <div className="space-y-2">
            <p className="font-semibold">Detalhes do Plano:</p>
            <p>{plans[selectedPlan as keyof typeof plans].description}</p>
          </div>
          <Separator className="my-4" />
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold">Total:</span>
            <span className="text-lg font-bold">R$ {plans[selectedPlan as keyof typeof plans].price}</span>
          </div>
        </CardContent>
      </Card>
      <Button className="w-full mt-6">Confirmar Reserva</Button>
    </div>
  )
}