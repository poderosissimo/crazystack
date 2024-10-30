'use client'

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useRouter } from "next/navigation"

interface AppointmentConfirmationProps {
  date?: string
  startTime?: string
  endTime?: string
  serviceName?: string
  price?: number
  onClose?: () => void
}

export default function Component({
  date = "Sábado, 30 de dezembro de 2023",
  startTime = "15:40",
  endTime = "16:20",
  serviceName = "Teste",
  price = 30.00,
  onClose = () => {}
}: AppointmentConfirmationProps) {
  const router = useRouter()

  const handleOk = () => {
    onClose()
    router.push('/appointments') // Navigate to appointments list or home
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-600 to-green-800 p-4 flex flex-col items-center">
      {/* Success Icon and Text */}
      <div className="text-center text-white mb-8 mt-16 flex flex-col items-center">
        <div className="border-4 border-white rounded-full p-4 mb-4">
          <Check className="w-12 h-12" />
        </div>
        <h1 className="text-2xl font-semibold">Agendamento realizado</h1>
      </div>

      {/* Appointment Details Card */}
      <Card className="w-full max-w-md bg-gray-900/90 text-white p-6 rounded-xl">
        <div className="space-y-8">
          {/* Date */}
          <div className="text-center">
            <h2 className="text-xl">{date}</h2>
          </div>

          {/* Time */}
          <div className="flex items-center justify-center gap-4">
            <span className="text-3xl font-light">{startTime}</span>
            <div className="border-t border-gray-500 w-16"></div>
            <span className="text-3xl font-light">{endTime}</span>
          </div>

          {/* Service and Price */}
          <div className="text-center space-y-2">
            <h3 className="text-3xl text-orange-300">{serviceName}</h3>
            <p className="text-gray-400 text-xl">
              Corte - R$ {price.toFixed(2).replace('.', ',')}
            </p>
          </div>

          {/* OK Button */}
          <Button 
            onClick={handleOk}
            className="w-full py-6 text-lg bg-orange-300 hover:bg-orange-400 text-gray-900 rounded-xl"
          >
            OK
          </Button>
        </div>
      </Card>
    </div>
  )
}