import { Button } from "@/components/ui/button"
import { ChevronLeft, Zap } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-gray-100">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-gray-900">
        <Link className="flex items-center justify-center" href="/">
          <Zap className="h-6 w-6 text-lime-400" />
          <span className="ml-2 text-2xl font-bold text-lime-400">CrazyStack</span>
        </Link>
      </header>
      <main className="flex-1 container mx-auto px-4 py-8">
        <Button asChild className="mb-6">
          <Link href="/" className="inline-flex items-center">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Voltar para a página inicial
          </Link>
        </Button>
        <h1 className="text-3xl font-bold mb-6 text-lime-400">Política de Privacidade</h1>
        <div className="space-y-6 text-gray-300">
          <p>
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
          <p>
            A CrazyStack ("nós", "nossos" ou "nossa") está comprometida em proteger a privacidade dos usuários do nosso site e curso online. Esta Política de Privacidade descreve como coletamos, usamos e compartilhamos suas informações pessoais.
          </p>
          <h2 className="text-2xl font-semibold text-lime-300">1. Informações que Coletamos</h2>
          <p>
            Coletamos informações que você nos fornece diretamente, incluindo:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Nome completo</li>
            <li>Endereço de e-mail</li>
            <li>Número de telefone (WhatsApp)</li>
            <li>Informações de pagamento (processadas por terceiros)</li>
          </ul>
          <h2 className="text-2xl font-semibold text-lime-300">2. Como Usamos Suas Informações</h2>
          <p>
            Utilizamos suas informações para:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Fornecer e melhorar nossos serviços</li>
            <li>Processar pagamentos</li>
            <li>Enviar atualizações sobre o curso e materiais relacionados</li>
            <li>Responder a suas perguntas e fornecer suporte</li>
          </ul>
          <h2 className="text-2xl font-semibold text-lime-300">3. Compartilhamento de Informações</h2>
          <p>
            Não vendemos suas informações pessoais. Podemos compartilhar suas informações com provedores de serviços terceirizados que nos ajudam a operar nosso negócio e fornecer nossos serviços.
          </p>
          <h2 className="text-2xl font-semibold text-lime-300">4. Segurança</h2>
          <p>
            Implementamos medidas de segurança para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição.
          </p>
          <h2 className="text-2xl font-semibold text-lime-300">5. Seus Direitos</h2>
          <p>
            Você tem o direito de acessar, corrigir ou excluir suas informações pessoais. Entre em contato conosco para exercer esses direitos.
          </p>
          <h2 className="text-2xl font-semibold text-lime-300">6. Alterações nesta Política</h2>
          <p>
            Podemos atualizar esta política periodicamente. Recomendamos que você revise esta página regularmente para se manter informado sobre nossas práticas de privacidade.
          </p>
          <h2 className="text-2xl font-semibold text-lime-300">7. Contato</h2>
          <p>
            Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco em: privacy@crazystack.com.br
          </p>
        </div>
      </main>
      <footer className="py-6 w-full shrink-0 px-4 md:px-6 border-t border-gray-800 bg-gray-900">
        <p className="text-xs text-center text-gray-400">© 2024 CrazyStack. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}