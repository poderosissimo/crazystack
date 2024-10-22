import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { BookOpen, Search, User } from "lucide-react"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <BookOpen className="h-6 w-6" />
          <span className="ml-2 text-lg font-bold">EduTech</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Cursos
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Preços
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Sobre
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contato
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Aprenda no seu ritmo
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Descubra uma nova forma de aprender com nossa plataforma de cursos online. Estude quando e onde quiser.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Procurar cursos" type="search" />
                  <Button type="submit">
                    <Search className="h-4 w-4" />
                    <span className="sr-only">Procurar</span>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Cursos em Destaque</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Introdução à Programação",
                  description: "Aprenda os fundamentos da programação com Python",
                  image: "/placeholder.svg?height=100&width=100",
                },
                {
                  title: "Marketing Digital",
                  description: "Domine as estratégias de marketing online",
                  image: "/placeholder.svg?height=100&width=100",
                },
                {
                  title: "Design UX/UI",
                  description: "Crie interfaces incríveis e experiências de usuário",
                  image: "/placeholder.svg?height=100&width=100",
                },
              ].map((course) => (
                <Card key={course.title}>
                  <CardHeader>
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img
                      alt={course.title}
                      className="aspect-video object-cover rounded-lg"
                      height="200"
                      src={course.image}
                      width="300"
                    />
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Inscrever-se</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 EduTech. Todos os direitos reservados.</p>
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