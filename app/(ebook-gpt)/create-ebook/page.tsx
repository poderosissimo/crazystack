"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { BookOpen, ArrowLeft, Wand2 } from "lucide-react";
import Link from "next/link";

export default function CreateEbook() {
  const [generating, setGenerating] = useState(false);
  const [contentLength, setContentLength] = useState(50);

  const handleGenerate = () => {
    setGenerating(true);
    // Simular geração de conteúdo
    setTimeout(() => {
      setGenerating(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <Link
            href="/dashboard"
            className="flex items-center space-x-2 text-primary-foreground"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Voltar ao Dashboard</span>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Criar Novo Ebook</h1>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Detalhes do Ebook</CardTitle>
            <CardDescription>
              Preencha as informações para gerar seu ebook com IA
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Título do Ebook</Label>
              <Input id="title" placeholder="Digite o título do seu ebook" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">
                Descrição ou Tópicos Principais
              </Label>
              <Textarea
                id="description"
                placeholder="Descreva brevemente o conteúdo do seu ebook ou liste os principais tópicos"
              />
            </div>

            <div className="space-y-2">
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
            </div>

            <div className="space-y-2">
              <Label htmlFor="target-audience">Público-alvo</Label>
              <Input
                id="target-audience"
                placeholder="Ex: Iniciantes em programação, Empreendedores"
              />
            </div>

            <div className="space-y-2">
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
            </div>

            <div className="flex items-center space-x-2">
              <Switch id="include-images" />
              <Label htmlFor="include-images">
                Incluir sugestões de imagens
              </Label>
            </div>
          </CardContent>
          <CardFooter>
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
          </CardFooter>
        </Card>
      </main>

      <footer className="bg-secondary mt-12 py-6">
        <div className="container mx-auto px-4 text-center text-secondary-foreground">
          <p>&copy; 2024 EbookGPT. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
