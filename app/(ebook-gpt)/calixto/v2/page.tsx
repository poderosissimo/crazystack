import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookOpen, ChevronUp, Moon, Sun } from "lucide-react";

export default function LandingPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.pageYOffset;
      setScrollProgress((currentScroll / totalScroll) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`flex flex-col min-h-screen ${darkMode ? "dark" : ""}`}>
      <style jsx global>{`
        :root {
          --color-primary: ${darkMode ? "#fbbf24" : "#f59e0b"};
          --color-secondary: ${darkMode ? "#60a5fa" : "#3b82f6"};
          --color-accent: ${darkMode ? "#f472b6" : "#ec4899"};
          --color-background: ${darkMode ? "#1f2937" : "#f9fafb"};
          --color-text: ${darkMode ? "#f9fafb" : "#1f2937"};
        }
      `}</style>
      <div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
        style={{ width: `${scrollProgress}%` }}
      />
      <header className="sticky top-0 px-4 lg:px-6 h-16 flex items-center justify-between bg-background/80 backdrop-blur-sm z-40">
        <Link className="flex items-center justify-center" href="#">
          <BookOpen className="h-6 w-6 mr-2 text-primary" />
          <span className="font-bold text-lg">Editora Canina</span>
        </Link>
        <nav className="hidden md:flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:text-primary transition-colors"
            href="#about"
          >
            Sobre o Livro
          </Link>
          <Link
            className="text-sm font-medium hover:text-primary transition-colors"
            href="#character"
          >
            Personagem
          </Link>
          <Link
            className="text-sm font-medium hover:text-primary transition-colors"
            href="#author"
          >
            Autor
          </Link>
          <Link
            className="text-sm font-medium hover:text-primary transition-colors"
            href="#buy"
          >
            Comprar
          </Link>
        </nav>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setDarkMode(!darkMode)}
          className="ml-auto md:ml-0"
        >
          {darkMode ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-primary via-secondary to-accent text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none animate-fade-in-up">
                  Calixto Salsicha: O Golpe do Terreno Fantasma
                </h1>
                <p className="mx-auto max-w-[700px] text-zinc-200 md:text-xl animate-fade-in-up animation-delay-200">
                  Uma aventura canina cheia de reviravoltas, golpes engenhosos e
                  personagens inesquecíveis
                </p>
              </div>
              <div className="space-x-4 animate-fade-in-up animation-delay-400">
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-primary shadow transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-300 disabled:pointer-events-none disabled:opacity-50"
                  href="#buy"
                >
                  Compre Agora
                </Link>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md border border-zinc-200 bg-white/10 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-300 disabled:pointer-events-none disabled:opacity-50"
                  href="#about"
                >
                  Saiba Mais
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 bg-background"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
                  Sobre o Livro
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Conheça Calixto Salsicha, um Basset Hound trambiqueiro e
                  astuto, que transformou sua vida em um ciclo interminável de
                  golpes, mentiras e fugas. Agora, ele está de volta com seu
                  maior e mais audacioso golpe: vender terrenos inexistentes
                  para os moradores do bairro onde cresceu.
                </p>
              </div>
            </div>
            <Tabs defaultValue="features" className="mt-12">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="features">Características</TabsTrigger>
                <TabsTrigger value="plot">Enredo</TabsTrigger>
                <TabsTrigger value="themes">Temas</TabsTrigger>
              </TabsList>
              <TabsContent value="features" className="mt-6">
                <Card>
                  <CardContent className="flex flex-col items-center space-y-4 p-6">
                    <h3 className="text-xl font-bold">
                      Personagens Cativantes
                    </h3>
                    <p className="text-sm text-muted-foreground text-center">
                      Conheça uma turma peculiar de cães, cada um com sua
                      própria agenda e personalidade única.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="plot" className="mt-6">
                <Card>
                  <CardContent className="flex flex-col items-center space-y-4 p-6">
                    <h3 className="text-xl font-bold">Trama Envolvente</h3>
                    <p className="text-sm text-muted-foreground text-center">
                      Uma história cheia de reviravoltas, perseguições e
                      esquemas audaciosos que vai te prender do início ao fim.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="themes" className="mt-6">
                <Card>
                  <CardContent className="flex flex-col items-center space-y-4 p-6">
                    <h3 className="text-xl font-bold">Humor e Reflexão</h3>
                    <p className="text-sm text-muted-foreground text-center">
                      Uma narrativa que mistura humor com reflexões sobre
                      escolhas, consequências e redenção.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        <section
          id="character"
          className="w-full py-12 md:py-24 lg:py-32 bg-secondary/10"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-secondary">
                  Conheça Calixto Salsicha
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Um Basset Hound com carisma de sobra e uma mente afiada para
                  golpes. Calixto é o anti-herói que você não conseguirá deixar
                  de amar, mesmo sabendo que não deveria.
                </p>
              </div>
            </div>
            <div className="mt-12 space-y-8">
              <div className="flex items-center">
                <div className="w-1/2 pr-4">
                  <h3 className="text-xl font-bold mb-2">
                    Nascimento no Frigorífico Bordon
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Calixto nasce em um ambiente inóspito, aprendendo desde cedo
                    a sobreviver por meio da astúcia.
                  </p>
                </div>
                <div className="w-1/2 border-l-2 border-secondary pl-4">
                  <Badge variant="secondary">Início da Jornada</Badge>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-1/2 pr-4 text-right">
                  <Badge variant="secondary">Aprendizado</Badge>
                </div>
                <div className="w-1/2 border-l-2 border-secondary pl-4">
                  <h3 className="text-xl font-bold mb-2">Mestres da Trapaça</h3>
                  <p className="text-sm text-muted-foreground">
                    Calixto encontra mentores no submundo canino, aperfeiçoando
                    suas habilidades de manipulação.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-1/2 pr-4">
                  <h3 className="text-xl font-bold mb-2">O Grande Golpe</h3>
                  <p className="text-sm text-muted-foreground">
                    Agora, Calixto retorna ao seu bairro de origem para executar
                    seu plano mais audacioso até então.
                  </p>
                </div>
                <div className="w-1/2 border-l-2 border-secondary pl-4">
                  <Badge variant="secondary">Clímax</Badge>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32 bg-background"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-primary">
              O que estão dizendo
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    "Uma leitura viciante! Não consegui largar o livro até
                    terminar. Calixto é um personagem inesquecível."
                  </p>
                  <p className="font-semibold">- Revista LiteráriaCão</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    "Uma mistura perfeita de humor e suspense. A trama é
                    envolvente e os personagens são cativantes."
                  </p>
                  <p className="font-semibold">- Blog Leitores de Patas</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    "Calixto Salsicha é o anti-herói que não sabíamos que
                    precisávamos. Uma história imperdível!"
                  </p>
                  <p className="font-semibold">- Jornal O Latido Literário</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section
          id="faq"
          className="w-full py-12 md:py-24 lg:py-32 bg-accent/10"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-accent">
              Perguntas Frequentes
            </h2>
            <Accordion
              type="single"
              collapsible
              className="w-full max-w-3xl mx-auto"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  O livro é adequado para crianças?
                </AccordionTrigger>
                <AccordionContent>
                  O livro é recomendado para leitores adultos devido aos temas
                  mais complexos e situações de humor adulto.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Haverá uma sequência?</AccordionTrigger>
                <AccordionContent>
                  O autor está considerando uma sequência, mas nada foi
                  confirmado oficialmente ainda.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  O livro está disponível em formato digital?
                </AccordionTrigger>
                <AccordionContent>
                  Sim, o livro está disponível tanto em formato físico quanto em
                  e-book para sua conveniência.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
        <section
          id="buy"
          className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Adquira Já o Seu Exemplar
                </h2>
                <p className="max-w-[600px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Não perca a chance de embarcar nessa aventura canina cheia de
                  reviravoltas!
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col space-y-4">
                  <Button
                    type="submit"
                    className="bg-background text-primary hover:bg-background/90"
                  >
                    Comprar por R$ 49,90
                  </Button>
                </form>
                <p className="text-xs text-primary-foreground/60">
                  *Entrega grátis para todo o Brasil. Disponível em formato
                  físico e e-book.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="author"
          className="w-full py-12 md:py-24 lg:py-32 bg-background"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
                  Sobre o Autor
                </h2>
                <div className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  <p className="mb-4">
                    João da Silva é um escritor premiado, conhecido por suas
                    histórias envolventes e personagens memoráveis. Com "Calixto
                    Salsicha: O Golpe do Terreno Fantasma", ele traz sua
                    primeira incursão no mundo da literatura canina, mesclando
                    sua experiência em narrativas de suspense com um toque de
                    humor único.
                  </p>
                  <blockquote className="border-l-4 border-primary pl-4 italic">
                    "Escrever sobre Calixto foi como dar voz a todas as
                    travessuras que já imaginei, mas nunca ousei realizar. É uma
                    celebração da astúcia, com um toque de redenção."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          © 2024 Editora Canina. Todos os direitos reservados.
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
      <Button
        className="fixed bottom-4 right-4 rounded-full p-2 bg-primary text-primary-foreground shadow-lg"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ChevronUp className="h-4 w-4" />
      </Button>
    </div>
  );
}

function Link({ href, children, ...props }) {
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
}
