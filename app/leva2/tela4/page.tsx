"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Share2,
  MessageSquare,
  ThumbsUp,
  Bookmark,
} from "lucide-react";

export default function ArtigoPage() {
  const [comentario, setComentario] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <a href="/" className="flex items-center space-x-2">
            <ArrowLeft className="h-6 w-6" />
            <span className="font-bold">Voltar para o Blog</span>
          </a>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <article className="prose dark:prose-invert lg:prose-xl mx-auto">
          <h1 className="mb-4">
            Dominando Generics em TypeScript: Um Guia Completo
          </h1>

          <div className="flex items-center space-x-4 mb-6">
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" alt="@johndoe" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-sm text-muted-foreground">
                12 de Outubro, 2023 • 15 min de leitura
              </p>
            </div>
          </div>

          <img
            src="/placeholder.svg?height=400&width=800"
            alt="TypeScript Generics"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />

          <div className="flex space-x-2 mb-6">
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="secondary">Programação</Badge>
            <Badge variant="secondary">Avançado</Badge>
          </div>

          <p>
            Generics são uma das características mais poderosas do TypeScript,
            permitindo que você escreva código flexível e reutilizável. Neste
            artigo, vamos explorar em profundidade como usar generics
            efetivamente em suas aplicações TypeScript.
          </p>

          <h2>O que são Generics?</h2>

          <p>
            Generics permitem que você crie componentes que podem trabalhar com
            uma variedade de tipos, em vez de um único tipo. Isso adiciona um
            nível extra de abstração e reutilização às suas estruturas de dados
            e funções.
          </p>

          <pre>
            <code className="language-typescript">
              {`function identity<T>(arg: T): T { return arg;}let output = identity<string>("myString");console.log(output);  // "myString"`}
            </code>
          </pre>

          <p>
            Neste exemplo, <code>T</code> é um tipo genérico que pode ser
            substituído por qualquer tipo quando a função é chamada.
          </p>

          <h2>Usando Generics com Interfaces</h2>

          <p>
            Generics também podem ser usados com interfaces para criar
            estruturas de dados flexíveis:
          </p>

          <pre>
            <code className="language-typescript">{`interface GenericIdentityFn<T> { (arg: T): T; } function identity<T>(arg: T): T { return arg; } let myIdentity: GenericIdentityFn<number> = identity;`}</code>
          </pre>

          <p>
            Este é apenas o começo do que você pode fazer com generics em
            TypeScript. Continue lendo para aprender sobre restrições de tipo,
            generics em classes, e muito mais!
          </p>
        </article>

        <Separator className="my-8" />

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Comentários</h2>
          <Card>
            <CardHeader>
              <CardTitle>Deixe seu comentário</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={(e) => e.preventDefault()}>
                <Input
                  placeholder="Escreva seu comentário aqui..."
                  value={comentario}
                  onChange={(e) => setComentario(e.target.value)}
                  className="mb-4"
                />
                <Button type="submit">Enviar Comentário</Button>
              </form>
            </CardContent>
          </Card>
          <div className="mt-6 space-y-4">
            {[1, 2].map((comment) => (
              <Card key={comment}>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" alt="@user" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle>Usuário Exemplo</CardTitle>
                      <CardDescription>Há 2 horas</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>
                    Ótimo artigo! Aprendi muito sobre generics em TypeScript.
                    Mal posso esperar para aplicar esse conhecimento em meus
                    projetos.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm">
                    <ThumbsUp className="h-4 w-4 mr-2" />
                    Curtir
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Responder
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Artigos Relacionados</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((post) => (
              <Card key={post} className="flex flex-col h-full">
                <CardHeader>
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Post thumbnail"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <CardTitle className="mt-4 truncate">
                    Explorando Tipos Avançados em TypeScript
                  </CardTitle>
                  <CardDescription className="truncate">
                    15 de Outubro, 2023
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="line-clamp-3">
                    Descubra como utilizar tipos avançados em TypeScript para
                    criar código mais robusto e seguro. Este artigo aborda
                    conceitos como tipos condicionais, mapeados e utilitários.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Ler Artigo</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-background border-t mt-12 py-6 text-center">
        <p className="text-sm text-muted-foreground">
          &copy; 2023 Blog do DevDoido. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
