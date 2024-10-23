import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, Calendar, Clock, User, Tag, Edit, Save, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { useRouter } from 'next/router'
import { Textarea } from "@/components/ui/textarea"

// Simulated database fetch function
const fetchArticle = async (slug) => {
  // In a real application, this would be an API call to your database
  const articles = {
    'construindo-apis-restful-com-nodejs-e-express': {
      title: "Construindo APIs RESTful com Node.js e Express",
      content: `
# Construindo APIs RESTful com Node.js e Express

Node.js e Express formam uma combinação poderosa para criar APIs RESTful robustas e escaláveis. Neste artigo, vamos explorar como configurar um projeto básico e implementar endpoints RESTful.

## Configuração Inicial

Primeiro, certifique-se de ter o Node.js instalado. Em seguida, crie um novo diretório para o projeto e inicialize-o:

\`\`\`bash
mkdir api-rest-nodejs
cd api-rest-nodejs
npm init -y
npm install express
\`\`\`

## Criando o Servidor

Crie um arquivo \`server.js\` e adicione o seguinte código:

\`\`\`javascript
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Bem-vindo à nossa API!' });
});

app.listen(port, () => {
  console.log(\`Servidor rodando em http://localhost:\${port}\`);
});
\`\`\`

## Implementando Endpoints CRUD

Vamos criar endpoints para um recurso "usuário":

\`\`\`javascript
let users = [
  { id: 1, name: 'João' },
  { id: 2, name: 'Maria' }
];

// Listar todos os usuários
app.get('/users', (req, res) => {
  res.json(users);
});

// Obter um usuário específico
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });
  res.json(user);
});

// Criar um novo usuário
app.post('/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Atualizar um usuário
app.put('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });
  user.name = req.body.name;
  res.json(user);
});

// Deletar um usuário
app.delete('/users/:id', (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Usuário não encontrado' });
  users.splice(index, 1);
  res.status(204).send();
});
\`\`\`

## Conclusão

Este é apenas o começo! A partir daqui, você pode adicionar validação de dados, autenticação, conexão com banco de dados e muito mais. Lembre-se de sempre seguir as melhores práticas de segurança ao desenvolver suas APIs.

Feliz codificação!
      `,
      author: "Gustavo Miranda",
      date: "2024-03-15",
      readTime: "10 min",
      image: "/placeholder.svg?height=400&width=800",
      tags: ["Node.js", "Express", "API"],
    }
  }
  return articles[slug]
}

const components = {
  h1: (props) => <h1 className="text-3xl font-bold my-4 text-lime-400" {...props} />,
  h2: (props) => <h2 className="text-2xl font-semibold my-3 text-lime-300" {...props} />,
  p: (props) => <p className="my-2 text-gray-300" {...props} />,
  ul: (props) => <ul className="list-disc list-inside my-2 text-gray-300" {...props} />,
  ol: (props) => <ol className="list-decimal list-inside my-2 text-gray-300" {...props} />,
  li: (props) => <li className="my-1" {...props} />,
  a: (props) => <a className="text-lime-400 hover:underline" {...props} />,
  code: (props) => <code className="bg-gray-800 rounded px-1 py-0.5 text-sm" {...props} />,
  pre: (props) => <pre className="bg-gray-800 rounded p-4 my-4 overflow-x-auto" {...props} />,
}

export default function ArticlePage() {
  const router = useRouter()
  const { slug } = router.query

  const [article, setArticle] = useState(null)
  const [mdxSource, setMdxSource] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const [editableContent, setEditableContent] = useState('')

  useEffect(() => {
    if (slug) {
      fetchArticle(slug).then(async (fetchedArticle) => {
        setArticle(fetchedArticle)
        const mdxSource = await serialize(fetchedArticle.content)
        setMdxSource(mdxSource)
        setEditableContent(fetchedArticle.content)
      })
    }
  }, [slug])

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSave = async () => {
    // Here you would typically send the updated content to your backend
    console.log("Saving updated content:", editableContent)
    const newMdxSource = await serialize(editableContent)
    setMdxSource(newMdxSource)
    setIsEditing(false)
  }

  if (!article) return <div>Loading...</div>

  return (
    <>
      <Head>
        <title>{article.title} | Blog Técnico CrazyStack</title>
        <meta name="description" content={`${article.title} - Aprenda sobre ${article.tags.join(', ')} no blog do CrazyStack.`} />
        <meta name="keywords" content={article.tags.join(', ')} />
      </Head>
      <div className="flex flex-col min-h-screen bg-black text-gray-100">
        <header className="px-4 lg:px-6 h-14 flex items-center bg-gray-900">
          <Link className="flex items-center justify-center" href="/">
            <Zap className="h-6 w-6 text-lime-400" />
            <span className="ml-2 text-2xl font-bold text-lime-400">CrazyStack</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4 text-lime-300" href="/">
              Home
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4 text-lime-300" href="/curso">
              Curso
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4 text-lime-300" href="/blog">
              Blog
            </Link>
          </nav>
        </header>
        <main className="flex-1 container mx-auto px-4 py-8">
          <Button asChild className="mb-6">
            <Link href="/blog" className="inline-flex items-center">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Voltar para o Blog
            </Link>
          </Button>
          <article className="max-w-3xl mx-auto">
            <Image
              src={article.image}
              alt={article.title}
              width={800}
              height={400}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <h1 className="text-4xl font-bold mb-4 text-lime-400">{article.title}</h1>
            <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-400">
              <span className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                {article.author}
              </span>
              <span className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                {article.date}
              </span>
              <span className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                {article.readTime}
              </span>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {article.tags.map((tag) => (
                <span key={tag} className="bg-gray-800 text-lime-400 px-2 py-1 rounded-full text-xs flex items-center">
                  <Tag className="mr-1 h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>
            <Card className="bg-gray-900 border-lime-500 p-6 mb-6">
              {isEditing ? (
                <Textarea
                  value={editableContent}
                  onChange={(e) => setEditableContent(e.target.value)}
                  className="w-full h-96 mb-4 bg-black text-gray-100 border-lime-500"
                />
              ) : (
                mdxSource && <MDXRemote {...mdxSource} components={components} />
              )}
            </Card>
            <div className="flex justify-end">
              {isEditing ? (
                <Button onClick={handleSave} className="bg-lime-500 text-black hover:bg-lime-400">
                  <Save className="mr-2 h-4 w-4" />
                  Salvar Alterações
                </Button>
              ) : (
                <Button onClick={handleEdit} className="bg-lime-500 text-black hover:bg-lime-400">
                  <Edit className="mr-2 h-4 w-4" />
                  Editar Artigo
                </Button>
              )}
            </div>
          </article>
        </main>
        <footer className="py-6 w-full shrink-0 px-4 md:px-6 border-t border-gray-800 bg-gray-900">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-400">© 2024 CrazyStack. Todos os direitos reservados.</p>
            <nav className="flex gap-4 mt-4 md:mt-0">
              <Link className="text-xs hover:underline underline-offset-4 text-gray-400" href="/privacy-policy">
                Política de Privacidade
              </Link>
              <Link className="text-xs hover:underline underline-offset-4 text-gray-400" href="/terms">
                Termos de Uso
              </Link>
            </nav>
          </div>
        </footer>
      </div>
    </>
  )
}