"use client";

import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tooltip } from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Instagram,
  Facebook,
  MessageCircle,
  Search,
  Star,
  Heart,
  Share2,
  ArrowUp,
  Moon,
  Sun,
} from "lucide-react";

export default function ConvitesVirtuaisInfantis() {
  const [darkMode, setDarkMode] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const convites = [
    {
      nome: "Superanimados",
      preco: 85,
      visualizacoes: 120,
      avaliacao: 4.5,
      categoria: "Animação",
    },
    {
      nome: "Fundo do Mar",
      preco: 85,
      visualizacoes: 98,
      avaliacao: 4.2,
      categoria: "Natureza",
    },
    {
      nome: "Chapeuzinho Vermelho",
      preco: 85,
      visualizacoes: 156,
      avaliacao: 4.8,
      categoria: "Contos de Fada",
    },
    {
      nome: "Safari Baby",
      preco: 85,
      visualizacoes: 87,
      avaliacao: 4.0,
      categoria: "Animais",
    },
    {
      nome: "Fazendinha (menina)",
      preco: 85,
      visualizacoes: 110,
      avaliacao: 4.3,
      categoria: "Fazenda",
    },
    {
      nome: "Unicórnio Mágico",
      preco: 90,
      visualizacoes: 200,
      avaliacao: 4.9,
      categoria: "Fantasia",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`min-h-screen ${darkMode ? "bg-pink-900 text-pink-100" : "bg-pink-100 text-pink-900"}`}
    >
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 font-['Comic_Sans_MS']">
            Convites Virtuais Infantis
          </h1>
          <div className="relative w-full h-40 bg-gradient-to-r from-pink-300 to-purple-300 rounded-lg overflow-hidden mb-8">
            <img
              src="/placeholder.svg?height=160&width=1200"
              alt="Banner temático"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-3xl font-bold text-white drop-shadow-lg">
                Transforme sua festa em magia!
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <Input
              type="search"
              placeholder="Buscar convites..."
              className="w-64 bg-pink-50 border-pink-300 focus:border-pink-500"
            />
            <Button
              onClick={() => setDarkMode(!darkMode)}
              variant="outline"
              size="icon"
              className="rounded-full"
            >
              {darkMode ? (
                <Sun className="h-[1.2rem] w-[1.2rem]" />
              ) : (
                <Moon className="h-[1.2rem] w-[1.2rem]" />
              )}
            </Button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {convites.map((convite, index) => (
            <Card
              key={index}
              className={`transform transition-all duration-300 hover:scale-105 ${darkMode ? "bg-pink-800 text-pink-100" : "bg-white"}`}
            >
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>{convite.nome}</span>
                  <Tooltip content={`Categoria: ${convite.categoria}`}>
                    <span className="text-xs px-2 py-1 bg-pink-200 text-pink-800 rounded-full">
                      {convite.categoria}
                    </span>
                  </Tooltip>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src={`/placeholder.svg?height=200&width=300&text=${convite.nome}`}
                  alt={convite.nome}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="text-2xl font-semibold mb-2">R${convite.preco}</p>
                <div className="flex justify-between items-center text-sm">
                  <span>{convite.visualizacoes} visualizações</span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span>{convite.avaliacao.toFixed(1)}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Ver detalhes</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{convite.nome}</DialogTitle>
                    </DialogHeader>
                    <div className="mt-4">
                      <p>Detalhes do convite {convite.nome} aqui...</p>
                    </div>
                  </DialogContent>
                </Dialog>
                <div className="flex space-x-2">
                  <Tooltip content="Favoritar">
                    <Button size="icon" variant="ghost">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </Tooltip>
                  <Tooltip content="Compartilhar">
                    <Button size="icon" variant="ghost">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </Tooltip>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <Card
          className={`mt-12 ${darkMode ? "bg-pink-800 text-pink-100" : "bg-pink-50"}`}
        >
          <CardContent className="text-center py-6">
            <h2 className="text-2xl font-bold mb-4">
              Não encontrou o tema que deseja?
            </h2>
            <p className="mb-4">
              Entre em contato que podemos criar o tema que preferir!
            </p>
            <Button className="bg-green-500 hover:bg-green-600 text-white">
              <MessageCircle className="mr-2 h-4 w-4" /> Chamar no WhatsApp
            </Button>
          </CardContent>
        </Card>

        <footer className="mt-16 text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <Instagram className="h-6 w-6" />
            <Facebook className="h-6 w-6" />
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm4.83 15.36c-.17.63-.55 1.18-1.06 1.59-.52.4-1.15.64-1.8.66-1.31.04-2.61-.37-3.65-1.17-.96-.74-1.72-1.7-2.22-2.81-.5-1.11-.73-2.32-.69-3.54.04-.64.28-1.25.68-1.75.4-.5.95-.86 1.56-1 .23-.05.46-.07.7-.07.24.01.47.06.69.16.22.1.41.25.55.44l1.22 1.61c.22.29.33.65.31 1.01-.01.36-.15.7-.38.97-.12.14-.25.26-.39.38-.14.11-.29.23-.41.36-.12.13-.18.3-.18.47 0 .17.05.34.14.49.53.97 1.28 1.81 2.19 2.45.2.14.44.2.67.18.24-.02.46-.12.63-.29.17-.17.35-.34.52-.52.18-.18.39-.32.63-.41.24-.09.5-.11.75-.07.25.04.48.15.67.31l1.61 1.24c.2.15.36.36.46.59.1.23.14.49.11.74-.02.26-.08.51-.18.74z" />
            </svg>
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
            </svg>
          </div>
          <p className="text-sm font-bold">CONVITERIA COM AMOR</p>
          <p className="text-sm mt-2">
            Rua Edson Cunha, 135 - Criciúma/SC - atendimento com horário marcado
          </p>
          <p className="text-sm mt-2">
            conviteriacomamor@hotmail.com | (48) 9 9103-6454 | CNPJ
            30290235/0001-26 | Criciúma - SC
          </p>
        </footer>

        {showBackToTop && (
          <Button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 rounded-full bg-pink-500 hover:bg-pink-600 text-white"
            size="icon"
          >
            <ArrowUp className="h-6 w-6" />
          </Button>
        )}
      </div>
    </div>
  );
}
