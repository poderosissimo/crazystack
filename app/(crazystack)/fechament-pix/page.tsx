import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeft, CreditCard, Lock, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function PreCheckoutPix() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-gray-100">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-gray-900">
        <Link className="flex items-center justify-center" href="/">
          <Zap className="h-6 w-6 text-lime-400" />
          <span className="ml-2 text-2xl font-bold text-lime-400">
            CrazyStack
          </span>
        </Link>
      </header>
      <main className="flex-1 container mx-auto px-4 py-8">
        <Button asChild className="mb-6">
          <Link href="/" className="inline-flex items-center">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Voltar para a página inicial
          </Link>
        </Button>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-lime-400 text-center">
            Finalizar Compra - PIX
          </h1>
          <Card className="bg-gray-900 border-lime-500 p-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-lime-300">
                  Resumo do Pedido
                </h2>
                <div className="space-y-2 text-gray-300">
                  <p>CrazyStack - O Bootcamp do Dev Doido</p>
                  <p className="text-2xl font-bold text-lime-400">R$ 99,00</p>
                  <p className="text-sm text-gray-400">
                    <s>R$ 600,00</s> (83% de desconto)
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-lime-300">
                  Seus Dados
                </h2>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-lime-300">
                      Nome Completo
                    </Label>
                    <Input
                      id="name"
                      placeholder="Seu nome completo"
                      className="bg-black text-gray-100 border-lime-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-lime-300">
                      E-mail
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      className="bg-black text-gray-100 border-lime-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cpf" className="text-lime-300">
                      CPF
                    </Label>
                    <Input
                      id="cpf"
                      placeholder="000.000.000-00"
                      className="bg-black text-gray-100 border-lime-500"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4 text-lime-300">
                Pagamento via PIX
              </h2>
              <div className="flex items-center justify-center bg-white p-4 rounded-lg">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="QR Code PIX"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
              </div>
              <p className="text-center mt-4 text-gray-300">
                Escaneie o QR Code acima com o app do seu banco para realizar o
                pagamento via PIX.
              </p>
              <div className="mt-6 flex justify-center">
                <Button className="bg-lime-500 text-black hover:bg-lime-400">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Gerar QR Code PIX
                </Button>
              </div>
            </div>
          </Card>
          <div className="mt-6 flex items-center justify-center text-sm text-gray-400">
            <Lock className="mr-2 h-4 w-4" />
            <span>Pagamento seguro processado pela WOOVI</span>
          </div>
        </div>
      </main>
      <footer className="py-6 w-full shrink-0 px-4 md:px-6 border-t border-gray-800 bg-gray-900">
        <p className="text-xs text-center text-gray-400">
          © 2024 CrazyStack. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
