'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import { BookOpen, ArrowLeft, Wand2 } from 'lucide-react'
import Link from 'next/link'

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

const slideIn = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
}

export default function CreateEbook() {
  const [generating, setGenerating] = useState(false)
  const [contentLength, setContentLength] = useState(50)

  const handleGenerate = () => {
    setGenerating(true)
    // Simulate content generation
    setTimeout(() => {
      setGenerating(false)
    }, 3000)
  }

  return (
    <motion.div
      className="min-h-screen bg-background"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <header className="bg-primary text-primary-foreground shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <motion.div variants={slideIn}>
            <Link
              href="/dashboard"
              className="flex items-center space-x-2 text-primary-foreground"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Voltar ao Dashboard</span>
            </Link>
          </motion.div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <motion.h1 className="text-3xl font-bold mb-8" variants={slideIn}>
          Criar Novo Ebook
        </motion.h1>

        <motion.div variants={fadeIn}>
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Detalhes do Ebook</CardTitle>
              <CardDescription>
                Preencha as informações para gerar seu ebook com IA
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <motion.div className="space-y-2" variants={slideIn}>
                <Label htmlFor="title">Título do Ebook</Label>
                <Input id="title" placeholder="Digite o título do seu ebook" />
              </motion.div>

              <motion.div className="space-y-2" variants={slideIn}>
                <Label htmlFor="description">
                  Descrição ou Tópicos Principais
                </Label>
                <Textarea
                  id="description"
                  placeholder="Descreva brevemente o conteúdo do seu ebook ou liste os principais tópicos"
                />
              </motion.div>

              <motion.div className="space-y-2" variants={slideIn}>
                <Label htmlFor="genre">Gênero</Label>
                <Select>
                  <SelectTrigger id="genre">
                    <SelectValue placeholder="Selecione o gênero" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="non-fiction">Não-ficção</SelectItem>
                    <SelectItem value="fiction">Ficção</SelectItem>
                    <SelectItem value="business">Negócios</SelectItem>
                    <SelectItem value="self-help">Autoajuda</SelectItem>
                    <SelectItem value="technical">Técnico</SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>

              <motion.div className="space-y-2" variants={slideIn}>
                <Label htmlFor="target-audience">Público-alvo</Label>
                <Input
                  id="target-audience"
                  placeholder="Ex: Iniciantes em programação, Empreendedores"
                />
              </motion.div>

              <motion.div className="space-y-2" variants={slideIn}>
                <Label htmlFor="language">Idioma</Label>
                <Select>
                  <SelectTrigger id="language">
                    <SelectValue placeholder="Selecione o idioma" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pt-BR">Português (Brasil)</SelectItem>
                    <SelectItem value="en-US">English (US)</SelectItem>
                    <SelectItem value="es-ES">Español</SelectItem>
                    <SelectItem value="fr-FR">Français</SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>

              <motion.div className="space-y-2" variants={slideIn}>
                <Label htmlFor="writing-style">Estilo de Escrita</Label>
                <Select>
                  <SelectTrigger id="writing-style">
                    <SelectValue placeholder="Selecione o estilo de escrita" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="formal">Formal</SelectItem>
                    <SelectItem value="casual">Casual</SelectItem>
                    <SelectItem value="academic">Acadêmico</SelectItem>
                    <SelectItem value="storytelling">Narrativo</SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>

              <motion.div className="space-y-2" variants={slideIn}>
                <Label htmlFor="chapter-structure">Estrutura de Capítulos</Label>
                <Select>
                  <SelectTrigger id="chapter-structure">
                    <SelectValue placeholder="Selecione a estrutura de capítulos" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Padrão (Introdução, Desenvolvimento, Conclusão)</SelectItem>
                    <SelectItem value="problem-solution">Problema-Solução</SelectItem>
                    <SelectItem value="chronological">Cronológico</SelectItem>
                    <SelectItem value="topical">Por Tópicos</SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>

              <motion.div className="space-y-2" variants={slideIn}>
                <Label>Tamanho do Conteúdo</Label>
                <div className="flex items-center space-x-4">
                  <Slider
                    min={10}
                    max={100}
                    step={10}
                    value={[contentLength]}
                    onValueChange={(value) => setContentLength(value[0])}
                    className="flex-grow"
                  />
                  <span className="w-12 text-right">{contentLength}%</span>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-2"
                variants={slideIn}
              >
                <Switch id="include-images" />
                <Label htmlFor="include-images">
                  Incluir sugestões de imagens
                </Label>
              </motion.div>

              <motion.div className="space-y-2" variants={slideIn}>
                <Label htmlFor="custom-instructions">Instruções Adicionais</Label>
                <Textarea
                  id="custom-instructions"
                  placeholder="Adicione quaisquer instruções específicas ou detalhes adicionais para a geração do seu ebook"
                />
              </motion.div>
            </CardContent>
            <CardFooter>
              <AnimatePresence mode="wait">
                <motion.div
                  key={generating ? 'generating' : 'idle'}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-full"
                >
                  <Button
                    onClick={handleGenerate}
                    disabled={generating}
                    className="w-full"
                  >
                    {generating ? (
                      <>
                        <Wand2 className="mr-2 h-4 w-4 animate-spin" />
                        Gerando Ebook...
                      </>
                    ) : (
                      <>
                        <BookOpen className="mr-2 h-4 w-4" />
                        Gerar Ebook
                      </>
                    )}
                  </Button>
                </motion.div>
              </AnimatePresence>
            </CardFooter>
          </Card>
        </motion.div>
      </main>

      <motion.footer
        className="bg-secondary mt-12 py-6"
        variants={fadeIn}
      >
        <div className="container mx-auto px-4 text-center text-secondary-foreground">
          <p>&copy; 2024 EbookGPT. Todos os direitos reservados.</p>
        </div>
      </motion.footer>
    </motion.div>
  )
}