import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, BookOpen, ThumbsUp, Zap } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <BookOpen className="h-6 w-6 mr-2" />
          <span className="font-bold">Editora Canina</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            Sobre o Livro
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#author">
            Autor
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#buy">
            Comprar
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Calixto Salsicha: O Golpe do Terreno Fantasma
                </h1>
                <p className="mx-auto max-w-[700px] text-zinc-200 md:text-xl">
                  Uma aventura canina cheia de reviravoltas, golpes engenhosos e personagens inesquecíveis
                </p>
              </div>
              <div className="space-x-4">
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-black shadow transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-300 disabled:pointer-events-none disabled:opacity-50"
                  href="#buy"
                >
                  Compre Agora
                </Link>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md border border-zinc-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50"
                  href="#about"
                >
                  Saiba Mais
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-zinc-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Sobre o Livro</h2>
                <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Conheça Calixto Salsicha, um Basset Hound trambiqueiro e astuto, que transformou sua vida em um ciclo
                  interminável de golpes, mentiras e fugas. Agora, ele está de volta com seu maior e mais audacioso golpe:
                  vender terrenos inexistentes para os moradores do bairro onde cresceu.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <ThumbsUp className="h-12 w-12 text-zinc-900" />
                  <h3 className="text-xl font-bold">Personagens Cativantes</h3>
                  <p className="text-sm text-zinc-500 text-center">
                    Conheça uma turma peculiar de cães, cada um com sua própria agenda e personalidade única.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <Zap className="h-12 w-12 text-zinc-900" />
                  <h3 className="text-xl font-bold">Trama Envolvente</h3>
                  <p className="text-sm text-zinc-500 text-center">
                    Uma história cheia de reviravoltas, perseguições e esquemas audaciosos que vai te prender do início ao fim.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <Star className="h-12 w-12 text-zinc-900" />
                  <h3 className="text-xl font-bold">Humor e Reflexão</h3>
                  <p className="text-sm text-zinc-500 text-center">
                    Uma narrativa que mistura humor com reflexões sobre escolhas, consequências e redenção.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="character" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Conheça Calixto Salsicha</h2>
                <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Um Basset Hound com carisma de sobra e uma mente afiada para golpes. Calixto é o anti-herói que você não
                  conseguirá deixar de amar, mesmo sabendo que não deveria.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-4 pt-12">
              <Card>
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex-1 space-y-1">
                    <h3 className="font-bold">Astúcia Inigualável</h3>
                    <p className="text-sm text-zinc-500">
                      Calixto tem um talento natural para elaborar esquemas complexos e convencer até o mais cético dos cães.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex-1 space-y-1">
                    <h3 className="font-bold">Passado Misterioso</h3>
                    <p className="text-sm text-zinc-500">
                      Nascido no Frigorífico Bordon, o passado de Calixto é tão intrigante quanto seus golpes atuais.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex-1 space-y-1">
                    <h3 className="font-bold">Carisma Irresistível</h3>
                    <p className="text-sm text-zinc-500">
                      Mesmo em apuros, Calixto sempre tem um truque na manga e um sorriso no rosto.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-zinc-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">O que estão dizendo</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6 text-center">
                  <Star className="h-6 w-6 text-yellow-500" />
                  <p className="text-sm text-zinc-500">
                    "Uma leitura viciante! Não consegui largar o livro até terminar. Calixto é um personagem inesquecível."
                  </p>
                  <p className="font-semibold">- Revista LiteráriaCão</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6 text-center">
                  <Star className="h-6 w-6 text-yellow-500" />
                  <p className="text-sm text-zinc-500">
                    "Uma mistura perfeita de humor e suspense. A trama é envolvente e os personagens são cativantes."
                  </p>
                  <p className="font-semibold">- Blog Leitores de Patas</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6 text-center">
                  <Star className="h-6 w-6 text-yellow-500" />
                  <p className="text-sm text-zinc-500">
                    "Calixto Salsicha é o anti-herói que não sabíamos que precisávamos. Uma história imperdível!"
                  </p>
                  <p className="font-semibold">- Jornal O Latido Literário</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="buy" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Adquira Já o Seu Exemplar</h2>
                <p className="max-w-[600px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Não perca a chance de embarcar nessa aventura canina cheia de reviravoltas!
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col space-y-4">
                  <Button type="submit" className="bg-black text-white hover:bg-zinc-800">
                    Comprar por R$ 49,90
                  </Button>
                </form>
                <p className="text-xs text-zinc-500">
                  *Entrega grátis para todo o Brasil. Disponível em formato físico e e-book.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="author" className="w-full py-12 md:py-24 lg:py-32 bg-zinc-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Sobre o Autor</h2>
                <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  João da Silva é um escritor premiado, conhecido por suas histórias envolventes e personagens memoráveis. Com
                  "Calixto Salsicha: O Golpe do Terreno Fantasma", ele traz sua primeira incursão no mundo da literatura canina,
                  mesclando sua experiência em narrativas de suspense com um toque de humor único.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-zinc-500">© 2024 Editora Canina. Todos os direitos reservados.</p>
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
  )
}

function Link({ href, children, ...props }) {
  return (
    <a href={href} {...props}>
      {children}
    </a>
  )
}