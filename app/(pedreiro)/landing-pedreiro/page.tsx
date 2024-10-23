import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Hammer, CheckCircle, Calendar, ClipboardList } from "lucide-react"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <Hammer className="h-6 w-6 text-primary" />
          <span className="ml-2 text-2xl font-bold text-primary">PedreirosPro</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Funcionalidades
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Preços
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contato
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Gerencie seus projetos de construção com facilidade
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    PedreirosPro é a ferramenta perfeita para pedreiros e construtores gerenciarem projetos, clientes e
                    orçamentos em um só lugar.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button>Comece Gratuitamente</Button>
                  <Button variant="outline">Agende uma Demo</Button>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Cadastre-se agora</h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    Experimente o PedreirosPro gratuitamente por 14 dias. Sem compromisso.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input id="name" placeholder="Seu nome completo" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Seu melhor email" required type="email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Senha</Label>
                    <Input id="password" required type="password" />
                  </div>
                  <Button className="w-full" type="submit">
                    Criar Conta
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Por que escolher o PedreirosPro?
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4">
                <CheckCircle className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Gestão Simplificada</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Gerencie todos os seus projetos, clientes e orçamentos em uma única plataforma intuitiva.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Calendar className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Agendamento Fácil</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Agende visitas e trabalhos com facilidade, evitando conflitos de horários.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <ClipboardList className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Orçamentos Profissionais</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Crie orçamentos detalhados e profissionais em minutos, impressionando seus clientes.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 PedreirosPro. Todos os direitos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Termos de Serviço
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacidade
          </a>
        </nav>
      </footer>
    </div>
  )
}