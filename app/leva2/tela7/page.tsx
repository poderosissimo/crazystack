"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ArrowLeft, Check } from "lucide-react"

interface ConfirmationScreenProps {
  orderData: {
    childName: string;
    childAge: string;
    eventDate: string;
    eventTime: string;
    eventLocation: string;
    confirmationPhrase: string;
    confirmationDate?: string;
    confirmationPhone?: string;
    removeCredits: boolean;
    changeMusic: boolean;
    urgencyFee: boolean;
    requesterName: string;
    requesterPhone: string;
    requesterEmail: string;
    photoFileName?: string;
  };
  onEdit: () => void;
  onSubmit: () => void;
}

export default function ConfirmationScreen({ orderData, onEdit, onSubmit }: ConfirmationScreenProps) {
  return (
    <div className="min-h-screen bg-pink-50 bg-opacity-50 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iI2ZmZjFmMiI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZjMGNiIiBzdHJva2Utd2lkdGg9IjIiPjwvY2lyY2xlPgo8cGF0aCBkPSJNMzAgMTBjNS41IDAgMTAgNC41IDEwIDEwcy00LjUgMTAtMTAgMTAtMTAtNC41LTEwLTEwIDQuNS0xMCAxMC0xMHoiIGZpbGw9IiNmZmMwY2IiIG9wYWNpdHk9IjAuMyI+PC9wYXRoPgo8L3N2Zz4=')] p-4 flex items-center justify-center">
      <Card className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-pink-400 to-pink-300 text-white">
          <CardTitle className="text-2xl md:text-3xl font-bold">Confirme seus dados</CardTitle>
          <CardDescription className="text-pink-100">
            Por favor, verifique se todas as informações estão corretas antes de enviar o pedido.
          </CardDescription>
        </CardHeader>
        <ScrollArea className="h-[60vh]">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ConfirmationSection title="Detalhes do Evento">
                <ConfirmationItem label="Nome da Criança" value={orderData.childName} />
                <ConfirmationItem label="Idade" value={orderData.childAge} />
                <ConfirmationItem label="Data do Evento" value={orderData.eventDate} />
                <ConfirmationItem label="Horário" value={orderData.eventTime} />
                <ConfirmationItem label="Local" value={orderData.eventLocation} />
              </ConfirmationSection>
              
              <ConfirmationSection title="Confirmação">
                <ConfirmationItem label="Frase de Confirmação" value={orderData.confirmationPhrase} />
                {orderData.confirmationDate && (
                  <ConfirmationItem label="Data de Confirmação" value={orderData.confirmationDate} />
                )}
                {orderData.confirmationPhone && (
                  <ConfirmationItem label="Telefone de Confirmação" value={orderData.confirmationPhone} />
                )}
              </ConfirmationSection>
              
              <ConfirmationSection title="Alterações Adicionais">
                <ConfirmationItem 
                  label="Remover Créditos" 
                  value={orderData.removeCredits ? "Sim (+R$15)" : "Não"} 
                />
                <ConfirmationItem 
                  label="Trocar Música" 
                  value={orderData.changeMusic ? "Sim (+R$10)" : "Não"} 
                />
                <ConfirmationItem 
                  label="Taxa de Urgência" 
                  value={orderData.urgencyFee ? "Sim (+R$25)" : "Não"} 
                />
              </ConfirmationSection>
              
              <ConfirmationSection title="Dados do Solicitante">
                <ConfirmationItem label="Nome" value={orderData.requesterName} />
                <ConfirmationItem label="Telefone" value={orderData.requesterPhone} />
                <ConfirmationItem label="E-mail" value={orderData.requesterEmail} />
              </ConfirmationSection>
              
              {orderData.photoFileName && (
                <ConfirmationSection title="Foto">
                  <ConfirmationItem label="Arquivo" value={orderData.photoFileName} />
                </ConfirmationSection>
              )}
            </div>
          </CardContent>
        </ScrollArea>
        <CardFooter className="flex justify-between p-6 bg-pink-50">
          <Button 
            variant="outline" 
            onClick={onEdit}
            className="flex items-center space-x-2 hover:bg-pink-100"
          >
            <ArrowLeft size={16} />
            <span>Editar Informações</span>
          </Button>
          <Button 
            onClick={onSubmit}
            className="bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white flex items-center space-x-2"
          >
            <span>Confirmar e Enviar</span>
            <Check size={16} />
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

function ConfirmationSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-pink-600 mb-2">{title}</h3>
      <div className="space-y-2">{children}</div>
    </div>
  )
}

function ConfirmationItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-sm text-gray-500">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  )
}