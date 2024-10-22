"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, Send, Zap } from "lucide-react"
import Link from "next/link"

export default function PurchaseConfirmation() {
  const sendWhatsAppMessage = () => {
    const message = encodeURIComponent("Olá! Acabei de fazer a compra do curso CrazyStack. Aqui está o meu comprovante de pagamento.")
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank')
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-gray-100">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-gray-900">
        <Link className="flex items-center justify-center" href="/">
          <Zap className="h-6 w-6 text-lime-400" />
          <span className="ml-2 text-2xl font-bold text-lime-400">CrazyStack</span>
        </Link>
      </header>
      <main className="flex-1 container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto bg-gray-900 border-lime-500 p-8">
          <div className="text-center space-y-4">
            <CheckCircle className="w-16 h-16 text-lime-400 mx-auto" />
            <h1 className="text-3xl font-bold text-lime-400">Compra Confirmada!</h1>
            <p className="text-xl text-gray-300">Obrigado por se juntar ao CrazyStack!</p>
          </div>
          <div className="mt-8 space-y-6">
            <div className="bg-black rounded-lg p-4">
              <h2 className="text-lg font-semibold text-lime-300 mb-2">Detalhes da Compra:</h2>
              <ul className="space-y-2 text-gray-300">
                <li><strong>Curso:</strong> CrazyStack - O Bootcamp do Dev Doido</li>
                <li><strong>Valor:</strong> R$ 99,00</li>
                <li><strong>Método de Pagamento:</strong> PIX</li>
                <li><strong>Data:</strong> {new Date().toLocaleDateString('pt-BR')}</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-lime-300">Próximos Passos:</h2>
              <ol className="list-decimal list-inside space-y-2 text-gray-300">
                <li>Envie o comprovante de pagamento pelo WhatsApp</li>
                <li>Aguarde a confirmação e as instruções de acesso ao curso (enviaremos em breve)</li>
                <li>Após receber o acesso, configure sua conta na plataforma de ensino</li>
                <li>Comece sua jornada para se tornar um dev fulminante!</li>
              </ol>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-lime-500 text-black hover:bg-lime-400" onClick={sendWhatsAppMessage}>
                <Send className="mr-2 h-4 w-4" />
                Enviar Comprovante por WhatsApp
              </Button>
            </div>
            <p className="text-center text-sm text-gray-400 mt-4">
              Após enviar o comprovante, responderemos em breve com as instruções de acesso ao curso.
            </p>
          </div>
        </Card>
      </main>
      <footer className="py-6 w-full shrink-0 px-4 md:px-6 border-t border-gray-800 bg-gray-900">
        <p className="text-xs text-center text-gray-400">© 2024 CrazyStack. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}