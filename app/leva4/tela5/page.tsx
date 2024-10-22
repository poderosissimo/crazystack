import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronRight, Code, FileCode, Globe, Rocket, Zap, Lock, Star, PlayCircle, CreditCard, LayoutDashboard, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-gray-100">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-gray-900">
        <Link className="flex items-center justify-center" href="#">
          <Zap className="h-6 w-6 text-lime-400" />
          <span className="ml-2 text-2xl font-bold text-lime-400">CrazyStack</span>
        </Link>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-500">
                  CrazyStack
                  <br />
                  O Bootcamp do Dev Doido
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Domine React & Node.js: Aprenda React consumindo uma API FULMINANTE feita com Node.js, MongoDB e Fastify.
                </p>
              </div>
              <div className="space-x-4">
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-lime-500 px-4 py-2 text-sm font-medium text-black shadow transition-colors hover:bg-lime-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-lime-400 disabled:pointer-events-none disabled:opacity-50"
                  href="#pre-registration"
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900" id="promotional-price">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-lime-400">
                Preço Promocional
              </h2>
              <div className="space-y-2">
                <p className="text-4xl font-bold text-lime-300">R$ 99,00</p>
                <p className="text-xl text-gray-400 line-through">R$ 600,00</p>
              </div>
              <p className="max-w-[600px] text-gray-400">
                Aproveite esta oferta por tempo limitado e comece sua jornada para se tornar um desenvolvedor full-stack!
              </p>
              <Button className="bg-lime-500 text-black hover:bg-lime-400">
                Garanta Sua Vaga
              </Button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black" id="github-projects">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-lime-400 mb-8 text-center">
              Projetos no GitHub
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="bg-gray-900 border-lime-500">
                <div className="p-6 flex flex-col items-center text-center space-y-4">
                  <Github className="h-12 w-12 text-lime-400" />
                  <h3 className="text-xl font-bold text-lime-300">API FULMINANTE</h3>
                  <p className="text-gray-400">
                    Explore o código-fonte da nossa API robusta construída com Node.js, Fastify e MongoDB.
                  </p>
                  <Link
                    href="https://github.com/example/api-fulminante"
                    className="text-lime-400 hover:underline flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver no GitHub
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </Card>
              <Card className="bg-gray-900 border-lime-500">
                <div className="p-6 flex flex-col items-center text-center space-y-4">
                  <Github className="h-12 w-12 text-lime-400" />
                  <h3 className="text-xl font-bold text-lime-300">Frontend React</h3>
                  <p className="text-gray-400">
                    Veja o código do nosso frontend React, incluindo componentes reutilizáveis e integração com a API.
                  </p>
                  <Link
                    href="https://github.com/example/frontend-react"
                    className="text-lime-400 hover:underline flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver no GitHub
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </Card>
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black" id="free-lessons">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-lime-400 mb-8">
              Aulas Gratuitas no YouTube
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-gray-900 border-lime-500">
                <div className="p-6 flex flex-col items-center text-center space-y-4">
                  <PlayCircle className="h-12 w-12 text-lime-400" />
                  <h3 className="text-xl font-bold text-lime-300">Introdução ao React</h3>
                  <p className="text-gray-400">Aprenda os conceitos básicos do React em 30 minutos.</p>
                  <Link
                    href="https://www.youtube.com/watch?v=example1"
                    className="text-lime-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Assistir agora
                  </Link>
                </div>
              </Card>
              <Card className="bg-gray-900 border-lime-500">
                <div className="p-6 flex flex-col items-center text-center space-y-4">
                  <PlayCircle className="h-12 w-12 text-lime-400" />
                  <h3 className="text-xl font-bold text-lime-300">Node.js para Iniciantes</h3>
                  <p className="text-gray-400">Descubra o poder do Node.js nesta aula introdutória.</p>
                  <Link
                    href="https://www.youtube.com/watch?v=example2"
                    className="text-lime-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Assistir agora
                  </Link>
                </div>
              </Card>
              <Card className="bg-gray-900 border-lime-500">
                <div className="p-6 flex flex-col items-center text-center space-y-4">
                  <PlayCircle className="h-12 w-12 text-lime-400" />
                  <h3 className="text-xl font-bold text-lime-300">MongoDB em 20 Minutos</h3>
                  <p className="text-gray-400">Uma rápida introdução ao MongoDB e suas funcionalidades.</p>
                  <Link
                    href="https://www.youtube.com/watch?v=example3"
                    className="text-lime-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Assistir agora
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900" id="highlighted-lessons">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-lime-400 mb-8">
              Aulas em Destaque
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="bg-black border-lime-500">
                <div className="p-6 flex flex-col items-center text-center space-y-4">
                  <CreditCard className="h-12 w-12 text-lime-400" />
                  <h3 className="text-xl font-bold text-lime-300">Assinatura PIX Mensal</h3>
                  <p className="text-gray-400">
                    Aprenda a implementar um sistema de assinatura mensal usando PIX como método de pagamento.
                  </p>
                  <Button className="bg-lime-500 text-black hover:bg-lime-400">
                    Saiba mais
                  </Button>
                </div>
              </Card>
              <Card className="bg-black border-lime-500">
                <div className="p-6 flex flex-col items-center text-center space-y-4">
                  <LayoutDashboard className="h-12 w-12 text-lime-400" />
                  <h3 className="text-xl font-bold text-lime-300">Landing Page SaaS</h3>
                  <p className="text-gray-400">
                    Crie uma landing page profissional para seu SaaS usando Next.js e técnicas avançadas de design.
                  </p>
                  <Button className="bg-lime-500 text-black hover:bg-lime-400">
                    Saiba mais
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
        <section  className="w-full py-12 md:py-24 lg:py-32 bg-black" id="content">
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900" id="creator">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-lime-400 mb-8">
              Conheça o Criador do Curso
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/3">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Gustavo Miranda"
                  width={300}
                  height={300}
                  className="rounded-full border-4 border-lime-500"
                />
              </div>
              <div className="w-full md:w-2/3 space-y-4">
                <h3 className="text-2xl font-bold text-lime-300">Gustavo Miranda</h3>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="text-gray-400">4 Anos Hotmarter</span>
                </div>
                <p className="text-gray-400">
                  Com mais de 6 anos de experiência na área de TI, Gustavo é um desenvolvedor apaixonado por criar e compartilhar conteúdo. Especializado em Javascript, React, React Native e NodeJs, ele traz sua experiência prática para o CrazyStack.
                </p>
                <p className="text-gray-400">
                  Criador do aplicativo de agendamentos Belezix, Gustavo compartilha todas as lições aprendidas durante o desenvolvimento deste projeto real no curso CrazyStack.
                </p>
                <p className="text-gray-400">
                  Atualmente, Gustavo trabalha com React.js e React Native, além de ser o mantenedor do canal DevDoido no Youtube, onde continua a compartilhar seu conhecimento com a comunidade de desenvolvedores.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black" id="faq">
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900" id="pre-registration">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-500">
                  Sua carreira está prestes a ir para o próximo nível
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Preencha o formulário para continuar
                </p>
              </div>
              <Card className="w-full max-w-md bg-black border-lime-500">
                <form className="p-6 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-lime-300">Seu nome completo</Label>
                    <Input id="name" placeholder="Digite seu nome completo" className="bg-gray-900 text-gray-100 border-lime-500" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="whatsapp" className="text-lime-300">Seu número de WhatsApp</Label>
                    <Input id="whatsapp" placeholder="Digite seu número de WhatsApp" className="bg-gray-900 text-gray-100 border-lime-500" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-lime-300">Digite seu e-mail</Label>
                    <Input id="email" type="email" placeholder="Digite seu e-mail" className="bg-gray-900 text-gray-100 border-lime-500" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" className="border-lime-500 text-lime-500" />
                    <Label htmlFor="terms" className="text-sm text-gray-400">
                      Autorizo o envio de comunicações por e-mail ou qualquer outro meio e concordo com os Termos e Políticas de privacidade.
                    </Label>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-lime-500 to-green-600 text-black hover:from-lime-400 hover:to-green-500">
                    Continuar
                  </Button>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                    <Lock className="w-4 h-4" />
                    <span>Suas informações estão seguras</span>
                  </div>
                </form>
              </Card>
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