"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, BookOpen, Cpu, Sparkles } from "lucide-react"
import Link from "next/link"

export default function ConfirmationOnboarding() {
  const [currentStep, setCurrentStep] = useState(1)

  const steps = [
    {
      title: "Bem-vindo ao EbookGPT",
      description: "Sua assinatura foi confirmada com sucesso! Vamos começar a criar ebooks incríveis.",
      icon: <CheckCircle className="h-12 w-12 text-green-500" />,
    },
    {
      title: "Escolha seu primeiro tópico",
      description: "Pense em um assunto para o seu primeiro ebook. Pode ser qualquer coisa que você conheça bem ou queira explorar.",
      icon: <BookOpen className="h-12 w-12 text-blue-500" />,
    },
    {
      title: "Deixe a IA trabalhar",
      description: "Nossa IA alimentada por GPT-4 irá gerar o conteúdo base do seu ebook. Você poderá revisar e editar depois.",
      icon: <Cpu className="h-12 w-12 text-purple-500" />,
    },
    {
      title: "Personalize seu ebook",
      description: "Adicione seu toque pessoal, ajuste o estilo e formate seu ebook para que fique perfeito.",
      icon: <Sparkles className="h-12 w-12 text-yellow-500" />,
    },
  ]

  const handleNextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-8">
            <h2 className="text-3xl font-bold text-center mb-6">Bem-vindo ao EbookGPT</h2>
            <Progress value={(currentStep / steps.length) * 100} className="mb-8" />
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className={`transition-opacity duration-300 ${index + 1 === currentStep ? 'opacity-100' : 'opacity-0 hidden'}`}>
                  <div className="flex flex-col items-center text-center">
                    {step.icon}
                    <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                    <p className="mt-2 text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex justify-between items-center">
              {currentStep < steps.length ? (
                <Button onClick={handleNextStep} className="w-full">
                  {currentStep === 1 ? 'Começar' : 'Próximo'}
                </Button>
              ) : (
                <Link href="/dashboard" className="w-full">
                  <Button className="w-full">Ir para o Dashboard</Button>
                </Link>
              )}
            </div>
          </div>
        </div>
        <p className="text-center text-sm text-gray-500 mt-4">
          Precisa de ajuda? <Link href="/support" className="text-blue-500 hover:underline">Entre em contato com o suporte</Link>
        </p>
      </div>
    </div>
  )
}