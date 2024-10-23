"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Facebook, Github, Loader2, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export default function ForgotPasswordSplitScreen() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess(false);
    // Simular uma chamada de API
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    if (email === "user@example.com") {
      setSuccess(true);
    } else {
      setError(
        "E-mail não encontrado. Por favor, verifique e tente novamente.",
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Seção de recuperação de senha */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 flex items-center justify-center p-4 lg:p-8"
      >
        <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Recuperar Senha
          </h2>
          {!success ? (
            <form onSubmit={handleResetPassword} className="space-y-4">
              <div>
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  "Enviar link de recuperação"
                )}
              </Button>
              {error && <p className="text-red-500 text-sm">{error}</p>}
            </form>
          ) : (
            <div className="text-center">
              <p className="text-green-600 mb-4">
                Um link de recuperação foi enviado para o seu e-mail. Por favor,
                verifique sua caixa de entrada.
              </p>
              <Button onClick={() => setSuccess(false)} className="w-full">
                Voltar
              </Button>
            </div>
          )}
          <div className="mt-6">
            <p className="text-center text-sm text-gray-600 mb-4">
              Ou entre com
            </p>
            <div className="flex justify-center space-x-4">
              <Button variant="outline" size="icon">
                <Facebook size={20} />
              </Button>
              <Button variant="outline" size="icon">
                <Twitter size={20} />
              </Button>
              <Button variant="outline" size="icon">
                <Github size={20} />
              </Button>
            </div>
          </div>
          <div className="mt-6">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione o idioma" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pt">Português</SelectItem>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Español</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="mt-6 text-center text-sm text-gray-600">
            <p>
              Lembrou sua senha?{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Voltar para o login
              </a>
            </p>
          </div>
          <div className="mt-4 text-center text-xs text-gray-500">
            <a href="#" className="hover:underline">
              Termos e Condições
            </a>
            {" • "}
            <a href="#" className="hover:underline">
              Política de Privacidade
            </a>
          </div>
        </div>
      </motion.div>

      {/* Seção lateral com imagem e slogan */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="hidden lg:flex flex-1 relative overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/50 to-purple-600/50" />
        <div className="relative z-10 flex flex-col justify-center items-center text-white p-8">
          <h1 className="text-4xl font-bold mb-4">
            Recupere o Acesso à Sua Conta
          </h1>
          <p className="text-xl mb-8 text-center">
            Estamos aqui para ajudar você a voltar à nossa plataforma
          </p>
          <blockquote className="text-2xl italic">
            "A segurança é um processo, não um produto."
          </blockquote>
          <p className="mt-2">- Bruce Schneier</p>
        </div>
      </motion.div>
    </div>
  );
}
