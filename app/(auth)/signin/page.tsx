"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Eye, EyeOff, Facebook, Github, Loader2, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export default function AdvancedLoginSplitScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    // Simular uma chamada de API
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    setError("Credenciais inválidas. Por favor, tente novamente.");
  };

  const passwordStrength = (password: string) => {
    if (password.length > 10) return "Forte";
    if (password.length > 6) return "Média";
    return "Fraca";
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Seção de login */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 flex items-center justify-center p-4 lg:p-8"
      >
        <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
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
            <div>
              <Label htmlFor="password">Senha</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {password && (
                <p className="text-sm mt-1">
                  Força da senha:{" "}
                  <span className="font-medium">
                    {passwordStrength(password)}
                  </span>
                </p>
              )}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked === true)}
                />
                <label htmlFor="remember" className="text-sm">
                  Lembrar-me
                </label>
              </div>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Esqueceu a senha?
              </a>
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                "Entrar"
              )}
            </Button>
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </form>
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
              Não tem uma conta?{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Registre-se
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
            Bem-vindo à Nossa Plataforma
          </h1>
          <p className="text-xl mb-8 text-center">
            Transforme suas ideias em realidade
          </p>
          <blockquote className="text-2xl italic">
            "A inovação distingue um líder de um seguidor."
          </blockquote>
          <p className="mt-2">- Steve Jobs</p>
        </div>
      </motion.div>
    </div>
  );
}
