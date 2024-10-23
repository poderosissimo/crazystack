"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function PasswordResetConfirmation() {
  const [isResending, setIsResending] = useState(false);
  const [resendSuccess, setResendSuccess] = useState(false);

  const handleResendEmail = async () => {
    setIsResending(true);
    // Simular o reenvio do email
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsResending(false);
    setResendSuccess(true);
    // Reset the success message after 5 seconds
    setTimeout(() => setResendSuccess(false), 5000);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Seção de confirmação */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 flex items-center justify-center p-4 lg:p-8"
      >
        <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
          <div className="text-center mb-6">
            <Mail className="mx-auto h-12 w-12 text-blue-500" />
            <h2 className="text-2xl font-bold mt-4">Verifique seu e-mail</h2>
          </div>
          <p className="text-center text-gray-600 mb-6">
            Enviamos um link de recuperação de senha para o seu endereço de
            e-mail. Por favor, verifique sua caixa de entrada e siga as
            instruções para redefinir sua senha.
          </p>
          <div className="space-y-4">
            <Button
              onClick={handleResendEmail}
              className="w-full"
              disabled={isResending}
            >
              {isResending ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                "Reenviar e-mail"
              )}
            </Button>
            {resendSuccess && (
              <p className="text-green-600 text-sm text-center">
                E-mail reenviado com sucesso!
              </p>
            )}
            <Button
              variant="outline"
              className="w-full"
              onClick={() => (window.location.href = "/login")}
            >
              Voltar para o login
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
              Não recebeu o e-mail?{" "}
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
          <h1 className="text-4xl font-bold mb-4">Quase lá!</h1>
          <p className="text-xl mb-8 text-center">
            Siga as instruções no e-mail para recuperar o acesso à sua conta
          </p>
          <blockquote className="text-2xl italic">
            "A paciência é a chave para o sucesso."
          </blockquote>
          <p className="mt-2">- Bill Gates</p>
        </div>
      </motion.div>
    </div>
  );
}
