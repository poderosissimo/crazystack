"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

export default function ServiceRequest() {
  const [date, setDate] = useState<Date>()

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Solicitar Serviço de Mudança</h2>
      <form className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="serviceType">Tipo de Serviço</Label>
          <RadioGroup defaultValue="residencial">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="residencial" id="residencial" />
              <Label htmlFor="residencial">Residencial</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="comercial" id="comercial" />
              <Label htmlFor="comercial">Comercial</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="space-y-2">
          <Label htmlFor="originAddress">Endereço de Origem</Label>
          <Input id="originAddress" placeholder="Digite o endereço de origem" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="destinationAddress">Endereço de Destino</Label>
          <Input id="destinationAddress" placeholder="Digite o endereço de destino" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="moveDate">Data da Mudança</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Selecione uma data</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="space-y-2">
          <Label htmlFor="additionalDetails">Detalhes Adicionais</Label>
          <Textarea id="additionalDetails" placeholder="Informe detalhes adicionais sobre a mudança" />
        </div>
        <Button type="submit" className="w-full">Solicitar Orçamento</Button>
      </form>
    </div>
  )
}