"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle,
  ChevronRight,
  MapPin,
  Smartphone,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MapPin className="h-6 w-6" />
          <span className="sr-only">MobiSaaS</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#features"
          >
            Recursos
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#how-it-works"
          >
            Como Funciona
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#pricing"
          >
            Preços
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#contact"
          >
            Contato
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Seu Próprio Serviço de Mobilidade Urbana
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Transforme sua ideia em realidade com nossa solução SaaS white
                  label. Lance seu próprio serviço de transporte sob demanda em
                  questão de dias.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Comece Agora</Button>
                <Button variant="outline">Saiba Mais</Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Recursos Principais
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <Smartphone className="w-8 h-8 mb-2" />
                  <CardTitle>Aplicativo Personalizado</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Aplicativos móveis personalizados para iOS e Android com sua
                    marca.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="w-8 h-8 mb-2" />
                  <CardTitle>Gerenciamento de Motoristas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Ferramentas completas para gerenciar sua frota de motoristas
                    parceiros.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <MapPin className="w-8 h-8 mb-2" />
                  <CardTitle>Rastreamento em Tempo Real</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Acompanhamento em tempo real de veículos e otimização de
                    rotas.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Como Funciona
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Personalize</h3>
                <p>
                  Adapte a plataforma com suas cores, logotipo e recursos
                  desejados.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Integre</h3>
                <p>
                  Conecte-se com serviços de pagamento e mapeamento de sua
                  escolha.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Lance</h3>
                <p>
                  Publique seus aplicativos e comece a operar seu serviço de
                  mobilidade.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="pricing"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Planos e Preços
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Básico</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">R$999/mês</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4" /> Até 100
                      motoristas
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4" /> Suporte por email
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4" /> Atualizações
                      mensais
                    </li>
                  </ul>
                  <Button className="w-full mt-6">Escolher Plano</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Profissional</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">R$2499/mês</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4" /> Até 500
                      motoristas
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4" /> Suporte
                      prioritário
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4" /> Atualizações
                      semanais
                    </li>
                  </ul>
                  <Button className="w-full mt-6">Escolher Plano</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Empresarial</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">Personalizado</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4" /> Motoristas
                      ilimitados
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4" /> Suporte 24/7
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4" /> Personalizações
                      avançadas
                    </li>
                  </ul>
                  <Button className="w-full mt-6">Contate-nos</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Entre em Contato
            </h2>
            <div className="mx-auto max-w-lg">
              <form className="space-y-4">
                <Input placeholder="Seu Nome" />
                <Input type="email" placeholder="Seu Email" />
                <Input placeholder="Sua Empresa" />
                <textarea
                  className="w-full h-32 px-3 py-2 text-base text-gray-700 placeholder-gray-400 border rounded-lg focus:shadow-outline"
                  placeholder="Sua Mensagem"
                />
                <Button className="w-full">Enviar Mensagem</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 MobiSaaS. Todos os direitos reservados.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Termos de Serviço
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacidade
          </Link>
        </nav>
      </footer>
    </div>
  );
}
