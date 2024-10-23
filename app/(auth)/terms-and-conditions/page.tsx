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
import { FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function TermsAndConditions() {
  const [language, setLanguage] = useState("pt");

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Seção de Termos e Condições */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 overflow-auto p-4 lg:p-8"
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <FileText className="mx-auto h-12 w-12 text-blue-500" />
            <h1 className="text-3xl font-bold mt-4">Termos e Condições</h1>
          </div>
          <div className="space-y-6 text-gray-600">
            <p>Última atualização: {new Date().toLocaleDateString()}</p>
            <p>
              Bem-vindo aos Termos e Condições da nossa aplicação. Ao usar
              nossos serviços, você concorda com estes termos. Por favor,
              leia-os cuidadosamente.
            </p>
            <h2 className="text-xl font-semibold text-gray-800">
              1. Aceitação dos Termos
            </h2>
            <p>
              Ao acessar ou usar nossa aplicação, você concorda em ficar
              vinculado a estes Termos e Condições.
            </p>
            <h2 className="text-xl font-semibold text-gray-800">
              2. Uso do Serviço
            </h2>
            <p>
              Você concorda em usar nosso serviço apenas para fins legais e de
              acordo com estes termos.
            </p>
            <h2 className="text-xl font-semibold text-gray-800">
              3. Contas de Usuário
            </h2>
            <p>
              Você é responsável por manter a confidencialidade de sua conta e
              senha.
            </p>
            <h2 className="text-xl font-semibold text-gray-800">
              4. Conteúdo do Usuário
            </h2>
            <p>
              Você mantém todos os direitos sobre o conteúdo que envia, publica
              ou exibe em nossa aplicação.
            </p>
            <h2 className="text-xl font-semibold text-gray-800">
              5. Propriedade Intelectual
            </h2>
            <p>
              Nossa aplicação e seu conteúdo original são protegidos por
              direitos autorais e outras leis de propriedade intelectual.
            </p>
            <h2 className="text-xl font-semibold text-gray-800">
              6. Limitação de Responsabilidade
            </h2>
            <p>
              Não seremos responsáveis por quaisquer danos indiretos,
              incidentais, especiais, consequenciais ou punitivos.
            </p>
            <h2 className="text-xl font-semibold text-gray-800">
              7. Modificações
            </h2>
            <p>
              Reservamo-nos o direito de modificar ou substituir estes termos a
              qualquer momento.
            </p>
            <h2 className="text-xl font-semibold text-gray-800">8. Contato</h2>
            <p>
              Se você tiver dúvidas sobre estes Termos e Condições, entre em
              contato conosco em terms@example.com.
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <Button onClick={() => window.history.back()}>Voltar</Button>
          </div>
        </div>
      </motion.div>

      {/* Seção lateral */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="hidden lg:flex flex-col justify-between w-1/3 bg-gray-100 p-8"
      >
        <div>
          <h2 className="text-2xl font-bold mb-4">Nosso Compromisso</h2>
          <p className="text-gray-600 mb-4">
            Estamos comprometidos em fornecer um serviço de qualidade e
            transparente. Estes termos ajudam a estabelecer as regras para o uso
            de nossa aplicação.
          </p>
        </div>
        <div>
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Selecione o idioma" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pt">Português</SelectItem>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Español</SelectItem>
            </SelectContent>
          </Select>
          <div className="mt-4 text-center text-sm text-gray-500">
            <a href="#" className="hover:underline">
              Política de Privacidade
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
