import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Scale, Shield, Briefcase, Check, Star } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Scale className="h-6 w-6 mr-2" />
          <span className="font-bold">JurisLex</span>
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
            href="#pricing"
          >
            Preços
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#testimonials"
          >
            Depoimentos
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
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Simplifique sua prática jurídica
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Gerencie casos, clientes e documentos com facilidade. Aumente
                  sua produtividade e foque no que realmente importa.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Comece agora</Button>
                <Button variant="outline">Agende uma demo</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Recursos principais
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center">
                <Shield className="h-12 w-12" />
                <h3 className="text-xl font-bold">Segurança de dados</h3>
                <p className="text-muted-foreground">
                  Proteja as informações sensíveis dos seus clientes com nossa
                  plataforma altamente segura.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Briefcase className="h-12 w-12" />
                <h3 className="text-xl font-bold">Gestão de casos</h3>
                <p className="text-muted-foreground">
                  Organize e acompanhe todos os seus casos em um único lugar,
                  aumentando sua eficiência.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Scale className="h-12 w-12" />
                <h3 className="text-xl font-bold">Faturamento simplificado</h3>
                <p className="text-muted-foreground">
                  Automatize seu processo de faturamento e receba pagamentos
                  mais rapidamente.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="pricing"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Planos e preços
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {["Básico", "Profissional", "Empresarial"].map((plan, index) => (
                <div
                  key={plan}
                  className="flex flex-col p-6 bg-white rounded-lg shadow-lg"
                >
                  <h3 className="text-2xl font-bold text-center mb-4">
                    {plan}
                  </h3>
                  <p className="text-4xl font-bold text-center mb-6">
                    R$ {(index + 1) * 99},<span className="text-xl">/mês</span>
                  </p>
                  <ul className="space-y-2 mb-6">
                    {[...Array(3 + index)].map((_, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="h-5 w-5 mr-2 text-green-500" />
                        <span>Recurso {i + 1}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-auto">Escolher plano</Button>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              O que nossos clientes dizem
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex flex-col p-6 bg-muted rounded-lg">
                  <Star className="h-6 w-6 text-yellow-400 mb-4" />
                  <p className="text-muted-foreground mb-4">
                    "JurisLex revolucionou minha prática jurídica. Agora posso
                    gerenciar meus casos com muito mais eficiência."
                  </p>
                  <p className="font-bold">Dr. João Silva</p>
                  <p className="text-sm text-muted-foreground">
                    Advogado,{" "}
                    {["São Paulo", "Rio de Janeiro", "Belo Horizonte"][i]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          id="cta"
          className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Pronto para transformar sua prática jurídica?
              </h2>
              <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl">
                Junte-se a milhares de advogados que já estão usando o JurisLex
                para simplificar seu trabalho.
              </p>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="flex-1"
                    placeholder="Seu e-mail"
                    type="email"
                  />
                  <Button type="submit" variant="secondary">
                    Comece agora
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer
        id="contact"
        className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t"
      >
        <p className="text-xs text-muted-foreground">
          © 2024 JurisLex. Todos os direitos reservados.
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
