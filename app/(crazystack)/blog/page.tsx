import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChevronLeft, ChevronRight, Search, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const blogPosts = [
  {
    id: 1,
    title: "Construindo APIs RESTful com Node.js e Express",
    excerpt:
      "Aprenda a criar APIs robustas e escaláveis usando Node.js e o framework Express. Este guia cobre desde a configuração inicial até boas práticas de design de API.",
    author: "Gustavo Miranda",
    date: "2024-03-15",
    readTime: "10 min",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Node.js", "Express", "API"],
  },
  {
    id: 2,
    title: "React Hooks: Transformando Componentes de Classe em Funcionais",
    excerpt:
      "Descubra como os React Hooks podem simplificar seu código e melhorar a reutilização de lógica. Veremos exemplos práticos de refatoração de componentes.",
    author: "Ana Rodrigues",
    date: "2024-03-10",
    readTime: "8 min",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["React", "Hooks", "JavaScript"],
  },
  {
    id: 3,
    title: "Otimizando Consultas MongoDB para Alta Performance",
    excerpt:
      "Aprenda técnicas avançadas para melhorar o desempenho de suas consultas MongoDB. Desde indexação até agregações eficientes, este artigo cobre tudo.",
    author: "Carlos Silva",
    date: "2024-03-05",
    readTime: "12 min",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["MongoDB", "Database", "Performance"],
  },
  {
    id: 4,
    title: "Implementando Autenticação JWT em Aplicações Node.js",
    excerpt:
      "Segurança é crucial em aplicações web modernas. Descubra como implementar autenticação JWT (JSON Web Tokens) em suas aplicações Node.js de forma eficaz e segura.",
    author: "Fernanda Costa",
    date: "2024-02-28",
    readTime: "15 min",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Security", "JWT", "Node.js"],
  },
  {
    id: 5,
    title: "Criando Componentes Reutilizáveis com Styled Components",
    excerpt:
      "Styled Components oferecem uma maneira poderosa de criar estilos em React. Aprenda a criar componentes altamente reutilizáveis e estilizados com esta biblioteca.",
    author: "Lucas Mendes",
    date: "2024-02-20",
    readTime: "9 min",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["React", "CSS", "Styled Components"],
  },
  {
    id: 6,
    title: "Testes de Integração com Jest e Supertest para APIs Node.js",
    excerpt:
      "Testes são essenciais para manter a qualidade do código. Descubra como configurar e escrever testes de integração eficazes para suas APIs Node.js usando Jest e Supertest.",
    author: "Ricardo Almeida",
    date: "2024-02-15",
    readTime: "11 min",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Testing", "Jest", "Node.js"],
  },
];

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>
          Blog Técnico CrazyStack - Dicas e Tutoriais de Desenvolvimento Web
        </title>
        <meta
          name="description"
          content="Explore artigos técnicos sobre Node.js, React, MongoDB e mais. Aprimore suas habilidades em desenvolvimento web com o blog do CrazyStack."
        />
        <meta
          name="keywords"
          content="Node.js, React, MongoDB, API, JavaScript, Desenvolvimento Web"
        />
      </Head>
      <div className="flex flex-col min-h-screen bg-black text-gray-100">
        <header className="px-4 lg:px-6 h-14 flex items-center bg-gray-900">
          <Link className="flex items-center justify-center" href="/">
            <Zap className="h-6 w-6 text-lime-400" />
            <span className="ml-2 text-2xl font-bold text-lime-400">
              CrazyStack
            </span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-sm font-medium hover:underline underline-offset-4 text-lime-300"
              href="/"
            >
              Home
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4 text-lime-300"
              href="/curso"
            >
              Curso
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4 text-lime-300"
              href="/blog"
            >
              Blog
            </Link>
          </nav>
        </header>
        <main className="flex-1 container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6 text-lime-400">
            Blog Técnico CrazyStack
          </h1>
          <div className="mb-8">
            <form className="flex gap-2">
              <Input
                type="search"
                placeholder="Buscar artigos..."
                className="max-w-sm bg-gray-900 border-lime-500 text-gray-100"
              />
              <Button
                type="submit"
                className="bg-lime-500 text-black hover:bg-lime-400"
              >
                <Search className="h-4 w-4" />
                <span className="sr-only">Buscar</span>
              </Button>
            </form>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.id} className="bg-gray-900 border-lime-500">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2 text-lime-300">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-800 text-lime-400 px-2 py-1 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button
                    asChild
                    className="w-full mt-4 bg-lime-500 text-black hover:bg-lime-400"
                  >
                    <Link href={`/blog/${post.id}`}>Ler mais</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Button variant="outline" className="mr-2">
              <ChevronLeft className="h-4 w-4 mr-2" />
              Anterior
            </Button>
            <Button variant="outline">
              Próxima
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </main>
        <footer className="py-6 w-full shrink-0 px-4 md:px-6 border-t border-gray-800 bg-gray-900">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-400">
              © 2024 CrazyStack. Todos os direitos reservados.
            </p>
            <nav className="flex gap-4 mt-4 md:mt-0">
              <Link
                className="text-xs hover:underline underline-offset-4 text-gray-400"
                href="/privacy-policy"
              >
                Política de Privacidade
              </Link>
              <Link
                className="text-xs hover:underline underline-offset-4 text-gray-400"
                href="/terms"
              >
                Termos de Uso
              </Link>
            </nav>
          </div>
        </footer>
      </div>
    </>
  );
}
