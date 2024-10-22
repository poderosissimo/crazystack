"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronRight, Code, FileCode, Globe, Rocket, Zap } from "lucide-react"
import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-gray-100">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-gray-900">
        <Link className="flex items-center justify-center" href="#">
          <Zap className="h-6 w-6 text-lime-400" />
          <span className="ml-2 text-2xl font-bold text-lime-400">CrazyStack</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-lime-300" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-lime-300" href="#content">
            Content
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-lime-300" href="#faq">
            FAQ
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-500">
                  Domine
                  <br />
                  React
                  <br />
                  &
                  <br />
                  Node.js
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Aprenda React consumindo uma API FULMINANTE feita com Node.js, MongoDB e Fastify.
                </p>
              </div>
              <div className="space-x-4">
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-lime-500 px-4 py-2 text-sm font-medium text-black shadow transition-colors hover:bg-lime-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-lime-400 disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                >
                  Comece Agora
                </Link>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md border border-lime-500 px-4 py-2 text-sm font-medium text-lime-400 shadow transition-colors hover:bg-lime-500 hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-lime-400 disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                >
                  Saiba Mais
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900" id="features">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-lime-400 mb-8">
              Porque o CrazyStack é importante
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
              <Card className="bg-black border-lime-500">
                <div className="p-6 flex flex-col items-center text-center space-y-4">
                  <Code className="h-10 w-10 text-lime-400" />
                  <h3 className="text-xl font-bold text-lime-300">Conceitos avançados</h3>
                  <p className="text-gray-400">
                    Veja Design Patterns, TDD e Clean Architecture durante todo curso.
                  </p>
                </div>
              </Card>
              <Card className="bg-black border-lime-500">
                <div className="p-6 flex flex-col items-center text-center space-y-4">
                  <FileCode className="h-10 w-10 text-lime-400" />
                  <h3 className="text-xl font-bold text-lime-300">Geração dinâmica de arquivos</h3>
                  <p className="text-gray-400">
                    Com o Plop você gera arquivos dinamicamente com base em templates.
                  </p>
                </div>
              </Card>
              <Card className="bg-black border-lime-500">
                <div className="p-6 flex flex-col items-center text-center space-y-4">
                  <Globe className="h-10 w-10 text-lime-400" />
                  <h3 className="text-xl font-bold text-lime-300">Imitações aleatórias</h3>
                  <p className="text-gray-400">
                    É o curso inteiro de imitações do Faustão, Silvio Santos, e muito MAIS!
                  </p>
                </div>
              </Card>
              <Card className="bg-black border-lime-500">
                <div className="p-6 flex flex-col items-center text-center space-y-4">
                  <Rocket className="h-10 w-10 text-lime-400" />
                  <h3 className="text-xl font-bold text-lime-300">Testes unitários e de integração</h3>
                  <p className="text-gray-400">São mais de 2 mil testes cobrindo 90% do código.</p>
                </div>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black" id="content">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-lime-400 mb-8">
              Conteúdo do Curso
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lime-300 hover:text-lime-400">Módulo 1: Fundamentos do React</AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Introdução ao React e JSX</li>
                    <li>Componentes e Props</li>
                    <li>Estado e Ciclo de Vida</li>
                    <li>Manipulação de Eventos</li>
                    <li>Renderização Condicional e Listas</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lime-300 hover:text-lime-400">Módulo 2: Node.js e Express</AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Introdução ao Node.js</li>
                    <li>Criando um servidor com Express</li>
                    <li>Roteamento e Middleware</li>
                    <li>Integração com Banco de Dados (MongoDB)</li>
                    <li>Autenticação e Autorização</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lime-300 hover:text-lime-400">Módulo 3: API Avançada com Fastify</AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Introdução ao Fastify</li>
                    <li>Plugins e Hooks</li>
                    <li>Validação de Esquemas</li>
                    <li>Testes de Integração</li>
                    <li>Otimização de Performance</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lime-300 hover:text-lime-400">Módulo 4: Projeto Final</AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Planejamento e Arquitetura</li>
                    <li>Implementação do Frontend em React</li>
                    <li>Desenvolvimento da API com Fastify</li>
                    <li>Integração Frontend-Backend</li>
                    <li>Deployment e CI/CD</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900" id="faq">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-lime-400 mb-8">
              Perguntas Frequentes
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lime-300 hover:text-lime-400">Onde está a ementa do curso?</AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  No botão do fim da página você pode ver a ementa completa do curso direto na página da HOTMART.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lime-300 hover:text-lime-400">Qual é a duração do curso?</AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  O curso tem 31 horas de vídeo gravado e editado.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lime-300 hover:text-lime-400">O curso é vitalício?</AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Sim, o acesso é vitalício e sem pegadinhas!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lime-300 hover:text-lime-400">Qual é o nível de habilidade requerido para o curso?</AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  O curso é projetado para aqueles com noções básicas de JavaScript, React e Node.js.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lime-300 hover:text-lime-400">Há alguma certificação disponível ao final do curso?</AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Sim, oferecemos uma certificação ao final do curso para aqueles que completarem todos os exercícios e desafios.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-500">
                  Pronto para turbinar seu conhecimento?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Junte-se a mais de 50 alunos que acreditaram que é possível sair do comodismo
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full bg-gradient-to-r from-lime-500 to-green-600 text-black hover:from-lime-400 hover:to-green-500">
                  Inscreva-se Agora
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <p className="text-xs text-lime-300">
                  7 dias de garantia. Peça reembolso se não gostar.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800 bg-gray-900">
        <p className="text-xs text-gray-400">© 2024 CrazyStack. Todos os direitos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-gray-400" href="#">
            Termos de Serviço
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-400" href="#">
            Privacidade
          
          </Link>
        </nav>
      </footer>
    </div>
  )
}