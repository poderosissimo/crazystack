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
import { Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  const [language, setLanguage] = useState("pt");

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Seção de Política de Privacidade */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 overflow-auto p-4 lg:p-8"
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <Shield className="mx-auto h-12 w-12 text-blue-500" />
            <h1 className="text-3xl font-bold mt-4">Política de Privacidade</h1>
          </div>
          <div className="space-y-6 text-gray-600">
            <p>Última atualização: {new Date().toLocaleDateString()}</p>
            <p>
              Bem-vindo à Política de Privacidade da nossa aplicação. Este
              documento explica como coletamos, usamos e protegemos suas
              informações pessoais.
            </p>
            <h2 className="text-xl font-semibold text-gray-800">
              1. Coleta de Informações
            </h2>
            <p>
              Coletamos informações que você nos fornece diretamente, como nome,
              endereço de e-mail e informações de perfil ao criar uma conta ou
              usar nossos serviços.
            </p>
            <h2 className="text-xl font-semibold text-gray-800">
              2. Uso de Informações
            </h2>
            <p>
              Utilizamos suas informações para fornecer, manter e melhorar
              nossos serviços, bem como para comunicar-nos com você sobre
              atualizações e ofertas.
            </p>
            <h2 className="text-xl font-semibold text-gray-800">
              3. Compartilhamento de Informações
            </h2>
            <p>
              Não vendemos suas informações pessoais. Compartilhamos informações
              apenas com terceiros que nos ajudam a operar, fornecer e melhorar
              nossos serviços.
            </p>
            <h2 className="text-xl font-semibold text-gray-800">
              4. Segurança
            </h2>
            <p>
              Implementamos medidas de segurança para proteger suas informações
              contra acesso não autorizado, alteração, divulgação ou destruição.
            </p>
            <h2 className="text-xl font-semibold text-gray-800">
              5. Seus Direitos
            </h2>
            <p>
              Você tem o direito de acessar, corrigir ou excluir suas
              informações pessoais. Entre em contato conosco para exercer esses
              direitos.
            </p>
            <h2 className="text-xl font-semibold text-gray-800">
              6. Alterações nesta Política
            </h2>
            <p>
              Podemos atualizar esta política periodicamente. Notificaremos você
              sobre quaisquer alterações significativas.
            </p>
            <h2 className="text-xl font-semibold text-gray-800">7. Contato</h2>
            <p>
              Se você tiver dúvidas sobre esta Política de Privacidade, entre em
              contato conosco em privacy@example.com.
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
          <h2 className="text-2xl font-bold mb-4">
            Sua Privacidade é Importante
          </h2>
          <p className="text-gray-600 mb-4">
            Estamos comprometidos em proteger suas informações pessoais e
            garantir a transparência em nossas práticas de privacidade.
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
              Termos e Condições
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
