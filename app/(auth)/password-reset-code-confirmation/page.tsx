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
import { Loader2, LockKeyhole } from "lucide-react";
import { motion } from "framer-motion";

export default function PasswordResetCodeConfirmation() {
  const [code, setCode] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [isResending, setIsResending] = useState(false);
  const [resendSuccess, setResendSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    // Simular verificação do código
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    if (code === "123456") {
      // Redirecionar para a página de definição de nova senha
      console.log("Código válido, redirecionando...");
    } else {
      setError("Código inválido. Por favor, tente novamente.");
    }
  };

  const handleResendCode = async () => {
    setIsResending(true);
    // Simular o reenvio do código
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsResending(false);
    setResendSuccess(true);
    // Reset the success message after 5 seconds
    setTimeout(() => setResendSuccess(false), 5000);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Seção de confirmação do código */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 flex items-center justify-center p-4 lg:p-8"
      >
        <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
          <div className="text-center mb-6">
            <LockKeyhole className="mx-auto h-12 w-12 text-blue-500" />
            <h2 className="text-2xl font-bold mt-4">Confirme o Código</h2>
          </div>
          <p className="text-center text-gray-600 mb-6">
            Digite o código de 6 dígitos que enviamos para o seu e-mail para
            redefinir sua senha.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="code">Código de Confirmação</Label>
              <Input
                id="code"
                type="text"
                placeholder="000000"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                maxLength={6}
                required
                className="text-center text-2xl tracking-widest"
              />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                "Verificar Código"
              )}
            </Button>
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}
          </form>
          <div className="mt-4 space-y-4">
            <Button
              variant="outline"
              onClick={handleResendCode}
              className="w-full"
              disabled={isResending}
            >
              {isResending ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                "Reenviar Código"
              )}
            </Button>
            {resendSuccess && (
              <p className="text-green-600 text-sm text-center">
                Novo código enviado com sucesso!
              </p>
            )}
            <Button
              variant="link"
              className="w-full"
              onClick={() => (window.location.href = "/forgot-password")}
            >
              Voltar para recuperação de senha
            </Button>
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
              Não recebeu o código?{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Verifique sua pasta de spam
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
          <h1 className="text-4xl font-bold mb-4">Estamos quase lá!</h1>
          <p className="text-xl mb-8 text-center">
            Digite o código de verificação para redefinir sua senha e recuperar
            o acesso à sua conta
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
