"use client";
import { useState } from "react";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Minus,
  Plus,
  ShoppingCart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function DetalheProduto() {
  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const produto = {
    nome: "Colar de Pérolas Elegance",
    descricao:
      "Colar de pérolas cultivadas de água doce, com fecho de prata 925. Comprimento ajustável de 40-45cm. Ideal para ocasiões especiais ou para adicionar um toque de elegância ao seu dia a dia.",
    preco: 299.99,
    parcelas: 3,
    imagens: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    cores: ["Branco", "Creme", "Rosa claro"],
    estoque: 5,
    avaliacoes: [
      {
        nome: "Maria S.",
        comentario: "Lindo colar, superou minhas expectativas!",
        estrelas: 5,
      },
      {
        nome: "João P.",
        comentario: "Presente perfeito para minha esposa. Qualidade excelente.",
        estrelas: 5,
      },
      {
        nome: "Ana R.",
        comentario: "Bonito, mas achei um pouco caro.",
        estrelas: 4,
      },
    ],
    produtosRelacionados: [
      {
        nome: "Brincos de Pérola",
        preco: 149.99,
        imagem: "/placeholder.svg?height=100&width=100",
      },
      {
        nome: "Pulseira de Pérolas",
        preco: 199.99,
        imagem: "/placeholder.svg?height=100&width=100",
      },
      {
        nome: "Anel de Pérola",
        preco: 99.99,
        imagem: "/placeholder.svg?height=100&width=100",
      },
    ],
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % produto.imagens.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + produto.imagens.length) % produto.imagens.length,
    );
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Olá! Gostaria de encomendar o produto "${produto.nome}" (${quantity} unidade(s)).`,
    );
    window.open(`https://wa.me/5511999999999?text=${message}`, "_blank");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Galeria de Imagens */}
        <div className="relative">
          <img
            src={produto.imagens[currentImage]}
            alt={`${produto.nome} - Imagem ${currentImage + 1}`}
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <div className="flex justify-center mt-4 space-x-2">
            {produto.imagens.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-3 h-3 rounded-full ${index === currentImage ? "bg-primary" : "bg-gray-300"}`}
              />
            ))}
          </div>
        </div>

        {/* Detalhes do Produto */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{produto.nome}</h1>
          <p className="text-gray-600 mb-4">{produto.descricao}</p>

          <div className="flex items-center mb-4">
            <span className="text-2xl font-bold mr-2">
              R$ {produto.preco.toFixed(2)}
            </span>
            <span className="text-sm text-gray-500">
              ou {produto.parcelas}x de R${" "}
              {(produto.preco / produto.parcelas).toFixed(2)} sem juros
            </span>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">Cores disponíveis:</h3>
            <div className="flex space-x-2">
              {produto.cores.map((cor) => (
                <button
                  key={cor}
                  className="px-3 py-1 border rounded-full hover:bg-gray-100"
                >
                  {cor}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center mb-4">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-2 border rounded-l-md"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="px-4 py-2 border-t border-b">{quantity}</span>
            <button
              onClick={() =>
                setQuantity(Math.min(produto.estoque, quantity + 1))
              }
              className="p-2 border rounded-r-md"
            >
              <Plus className="h-4 w-4" />
            </button>
            <span className="ml-4 text-sm text-gray-500">
              {produto.estoque} unidades em estoque
            </span>
          </div>

          <Button onClick={handleWhatsApp} className="w-full mb-4">
            <ShoppingCart className="mr-2 h-4 w-4" /> Encomendar via WhatsApp
          </Button>

          {/* Avaliações de Clientes */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">
              Avaliações dos Clientes
            </h3>
            {produto.avaliacoes.map((avaliacao, index) => (
              <Card key={index} className="p-4 mb-2">
                <div className="flex items-center mb-2">
                  <span className="font-semibold mr-2">{avaliacao.nome}</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < avaliacao.estrelas ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-600">{avaliacao.comentario}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Produtos Relacionados */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Produtos Relacionados</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {produto.produtosRelacionados.map((item, index) => (
            <Card key={index} className="p-4">
              <img
                src={item.imagem}
                alt={item.nome}
                className="w-full h-auto mb-2 rounded"
              />
              <h3 className="font-semibold">{item.nome}</h3>
              <p className="text-sm text-gray-600">
                R$ {item.preco.toFixed(2)}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
