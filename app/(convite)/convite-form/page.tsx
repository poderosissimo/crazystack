"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, Check, X, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export default function DigitalInvitationOrder() {
  const [date, setDate] = useState<Date>();
  const [confirmationPhrase, setConfirmationPhrase] = useState("option1");
  const [showConfirmationDate, setShowConfirmationDate] = useState(true);

  return (
    <div className="min-h-screen bg-pink-50 bg-opacity-50 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iI2ZmZjFmMiI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZjMGNiIiBzdHJva2Utd2lkdGg9IjIiPjwvY2lyY2xlPgo8cGF0aCBkPSJNMzAgMTBjNS41IDAgMTAgNC41IDEwIDEwcy00LjUgMTAtMTAgMTAtMTAtNC41LTEwLTEwIDQuNS0xMCAxMC0xMHoiIGZpbGw9IiNmZmMwY2IiIG9wYWNpdHk9IjAuMyI+PC9wYXRoPgo8L3N2Zz4=')]">
      {/* Header */}
      <header className="bg-gradient-to-r from-pink-400 to-pink-300 text-white p-4 md:p-8 animate-fade-in-down">
        <div className="max-w-4xl mx-auto">
          <img
            src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGluayUyMGZsb3dlcnN8ZW58MHx8MHx8fDA%3D"
            alt="Tema Flores Rosa"
            className="w-full h-48 object-cover rounded-lg mb-4 shadow-lg"
          />
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            Convite Digital Superanimado - Flores Rosa
          </h1>
          <div className="bg-pink-500 text-white inline-block px-6 py-3 rounded-full font-bold text-2xl shadow-lg transform -rotate-2">
            A partir de R$85
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto p-4 md:p-8 bg-white shadow-lg rounded-lg mt-[-2rem] relative z-10">
        {/* Product Description */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-pink-600 mb-4">
            Descrição do Produto
          </h3>
          <p className="text-lg mb-4 leading-relaxed">
            Um convite lindo e superanimado no tema Flores Rosa. Formato final:
            Vídeo MP4. Compartilhe pelo WhatsApp, Instagram, Facebook, e-mail.
            Inclui música.
          </p>
          <div className="flex space-x-4 mb-4">
            <Mail size={24} />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-2xl font-bold text-pink-600 mb-4">
                Alterações Inclusas:
              </h3>
              <ul className="list-none">
                {[
                  "Nome",
                  "Idade",
                  "Data",
                  "Horário",
                  "Local",
                  "Frase de confirmação",
                  "Foto",
                ].map((item) => (
                  <li key={item} className="flex items-center mb-1">
                    <Check
                      size={16}
                      className="text-green-500 mr-2 flex-shrink-0"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-2xl font-bold text-pink-600 mb-4">
                Alterações Não Inclusas:
              </h3>
              <ul className="list-none">
                {[
                  { name: "Remover créditos", price: 15 },
                  { name: "Alterar música", price: 10 },
                  { name: "Taxa de urgência", price: 25 },
                ].map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center justify-between mb-1"
                  >
                    <X size={16} className="text-red-500 mr-2 flex-shrink-0" />
                    <span>{item.name}</span>
                    <span className="font-bold">+R${item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <div className="w-16 h-1 bg-pink-300 my-8 mx-auto rounded-full"></div>

        {/* Order Form */}
        <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="childName">
                Nome da Criança <span className="text-red-500">*</span>
              </Label>
              <Input
                id="childName"
                placeholder="Ex: Lucca, Sofia"
                className="transition duration-200 ease-in-out focus:ring-2 focus:ring-pink-300 hover:border-pink-300"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="childAge">
                Idade <span className="text-red-500">*</span>
              </Label>
              <Input
                id="childAge"
                placeholder="Ex: 1 ano, 2 anos"
                className="transition duration-200 ease-in-out focus:ring-2 focus:ring-pink-300 hover:border-pink-300"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>
                Data do Evento <span className="text-red-500">*</span>
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal hover:bg-pink-50",
                      !date && "text-muted-foreground",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? (
                      format(date, "PPP")
                    ) : (
                      <span>Selecione uma data</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 rounded-lg shadow-lg">
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
              <Label htmlFor="eventTime">
                Horário <span className="text-red-500">*</span>
              </Label>
              <Input
                id="eventTime"
                type="time"
                className="transition duration-200 ease-in-out focus:ring-2 focus:ring-pink-300 hover:border-pink-300"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="eventLocation">
              Local do Evento e Endereço <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="eventLocation"
              placeholder="Ex: Rua Fulano de Tal, Salão de Festas X"
              className="transition duration-200 ease-in-out focus:ring-2 focus:ring-pink-300 hover:border-pink-300"
            />
          </div>

          <div className="space-y-2">
            <Label>
              Frase de Confirmação <span className="text-red-500">*</span>
            </Label>
            <RadioGroup
              value={confirmationPhrase}
              onValueChange={(value) => {
                setConfirmationPhrase(value);
                setShowConfirmationDate(value === "option1");
              }}
            >
              {[
                "Confirme sua presença até XX/XX/XX pelo telefone: xxxxxxx.",
                "Sua presença já está confirmada, caso não possa comparecer, informe até XX/XX/XX pelo telefone: xxxxxxx.",
              ].map((phrase, index) => (
                <div
                  key={index}
                  className="p-3 border rounded-lg hover:bg-pink-50 transition duration-200 ease-in-out"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={`option${index + 1}`}
                      id={`option${index + 1}`}
                    />
                    <Label
                      htmlFor={`option${index + 1}`}
                      className="hover:bg-pink-50 rounded-md p-2 transition duration-200 ease-in-out"
                    >
                      {phrase}
                    </Label>
                  </div>
                </div>
              ))}
            </RadioGroup>
          </div>

          {showConfirmationDate && (
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="confirmationDate">Data de Confirmação</Label>
                <Input
                  id="confirmationDate"
                  type="date"
                  className="transition duration-200 ease-in-out focus:ring-2 focus:ring-pink-300 hover:border-pink-300"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmationPhone">
                  Telefone de Confirmação
                </Label>
                <Input
                  id="confirmationPhone"
                  type="tel"
                  placeholder="(XX) XXXXX-XXXX"
                  className="transition duration-200 ease-in-out focus:ring-2 focus:ring-pink-300 hover:border-pink-300"
                />
              </div>
            </div>
          )}

          <div className="space-y-2 border-t pt-8 mt-8">
            <h3 className="text-2xl font-bold text-pink-600 mb-4">
              Alterações Adicionais (Pagas)
            </h3>
            <div className="flex items-center space-x-2">
              <Checkbox id="removeCredits" className="rounded-full" />
              <Label htmlFor="removeCredits">
                Remover Créditos ao Final (+R$15)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="changeMusic" className="rounded-full" />
              <Label htmlFor="changeMusic">Trocar a Música (+R$10)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="urgencyFee" className="rounded-full" />
              <Label htmlFor="urgencyFee">Taxa de Urgência (+R$25)</Label>
            </div>
            <div className="p-2 bg-pink-50 rounded-md text-sm">
              <p className="text-sm text-muted-foreground">
                O prazo de envio normal é de 4 dias úteis.
              </p>
            </div>
          </div>
          <div className="w-16 h-1 bg-pink-300 my-8 mx-auto rounded-full"></div>

          <div className="space-y-4 border-t pt-8 mt-8">
            <h3 className="text-2xl font-bold text-pink-600 mb-4">
              Dados do Solicitante <span className="text-red-500">*</span>
            </h3>
            <div className="space-y-2">
              <Label htmlFor="requesterName">
                Nome do Solicitante <span className="text-red-500">*</span>
              </Label>
              <Input
                id="requesterName"
                placeholder="Nome completo"
                className="transition duration-200 ease-in-out focus:ring-2 focus:ring-pink-300 hover:border-pink-300"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="requesterPhone">
                Telefone <span className="text-red-500">*</span>
              </Label>
              <Input
                id="requesterPhone"
                type="tel"
                placeholder="(XX) XXXXX-XXXX"
                className="transition duration-200 ease-in-out focus:ring-2 focus:ring-pink-300 hover:border-pink-300"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="requesterEmail">
                E-mail <span className="text-red-500">*</span>
              </Label>
              <Input
                id="requesterEmail"
                type="email"
                placeholder="seu@email.com"
                className="transition duration-200 ease-in-out focus:ring-2 focus:ring-pink-300 hover:border-pink-300"
              />
            </div>
          </div>

          <div className="space-y-2 border-t pt-8 mt-8">
            <Label htmlFor="photoUpload">
              Upload de Foto <span className="text-red-500">*</span>
            </Label>
            <div className="flex items-center space-x-2">
              <Button asChild variant="outline">
                <label htmlFor="photoUpload" className="cursor-pointer">
                  Escolher arquivo
                  <input
                    id="photoUpload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                  />
                </label>
              </Button>
              <span className="text-sm text-muted-foreground">
                Nenhum arquivo selecionado
              </span>
            </div>
            <div className="p-2 bg-pink-50 rounded-md text-sm">
              <p className="text-sm text-muted-foreground">
                Formato permitido: JPG, PNG. Tamanho máximo: 5MB
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white text-lg py-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 transition-all duration-300 ease-in-out transform hover:translate-y-[-2px]"
          >
            Enviar Pedido
          </Button>
        </form>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-pink-600 to-pink-800 text-white p-4 md:p-8 mt-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold mb-2">Contato</h3>
              <p>Endereço: Rua das Flores, 123</p>
              <p>Telefone: (11) 1234-5678</p>
              <p>E-mail: contato@convitefloral.com</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
