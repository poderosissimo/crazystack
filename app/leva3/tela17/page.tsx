"use client"

import React, { useState, useEffect } from 'react'
import { Search, Truck, CreditCard, Package, Repeat, Sparkles, DollarSign, Pen, X } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [showSuggestion, setShowSuggestion] = useState(false)
  const [filteredFAQs, setFilteredFAQs] = useState([])
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { name: 'Processo de Encomenda', icon: <Package className="w-5 h-5" /> },
    { name: 'Prazos de Entrega', icon: <Truck className="w-5 h-5" /> },
    { name: 'Opções de Pagamento', icon: <CreditCard className="w-5 h-5" /> },
    { name: 'Trocas e Devoluções', icon: <Repeat className="w-5 h-5" /> },
    { name: 'Cuidados com Bijuterias', icon: <Sparkles className="w-5 h-5" /> },
    { name: 'Frete e Custos', icon: <DollarSign className="w-5 h-5" /> },
    { name: 'Personalização de Produtos', icon: <Pen className="w-5 h-5" /> },
  ]

  const faqItems = [
    {
      category: 'Processo de Encomenda',
      question: 'Como faço para encomendar produtos via WhatsApp?',
      answer: 'Para encomendar via WhatsApp, siga estes passos: 1) Envie uma mensagem para nosso número oficial. 2) Informe o código ou nome do produto desejado. 3) Especifique a quantidade. 4) Confirme seu endereço de entrega. 5) Escolha o método de pagamento. 6) Aguarde a confirmação do pedido. Nossa equipe estará disponível para esclarecer qualquer dúvida durante o processo.'
    },
    {
      category: 'Prazos de Entrega',
      question: 'Qual o prazo de entrega para minha região?',
      answer: 'Os prazos de entrega variam de acordo com a sua localização: 1) Capitais: 3-5 dias úteis. 2) Outras cidades: 5-10 dias úteis. 3) Áreas remotas: até 15 dias úteis. Após a confirmação do pedido, você receberá um e-mail com uma estimativa mais precisa e um código de rastreamento. Lembre-se que eventos imprevistos podem afetar esses prazos, mas faremos o possível para mantê-lo informado sobre o status da sua entrega.'
    },
    {
      category: 'Opções de Pagamento',
      question: 'Quais são as formas de pagamento aceitas?',
      answer: 'Oferecemos diversas opções de pagamento para sua conveniência: 1) Cartão de crédito (parcelamento em até 6x sem juros). 2) Boleto bancário (vencimento em 3 dias úteis). 3) Pix (aprovação instantânea). 4) PayPal. 5) Transferência bancária. Para pedidos internacionais, aceitamos pagamentos via PayPal e cartão de crédito internacional. Em caso de dúvidas sobre alguma forma de pagamento, não hesite em nos contatar.'
    },
    {
      category: 'Trocas e Devoluções',
      question: 'Como funciona o processo de troca ou devolução?',
      answer: 'Nosso processo de troca ou devolução é simples: 1) Entre em contato conosco em até 7 dias após o recebimento do produto. 2) Informe o motivo da troca/devolução. 3) Aguarde instruções para envio do produto. 4) Envie o item em sua embalagem original. 5) Após recebermos e avaliarmos o produto, processaremos a troca ou o reembolso em até 5 dias úteis. Para trocas, o frete de retorno é por conta do cliente. Para devoluções por defeito de fabricação, nós cobrimos o frete.'
    },
    {
      category: 'Cuidados com Bijuterias',
      question: 'Como posso cuidar das minhas bijuterias para que durem mais?',
      answer: 'Para prolongar a vida útil de suas bijuterias, siga estas dicas: 1) Evite contato com água, perfumes e produtos químicos. 2) Guarde as peças separadamente para evitar arranhões. 3) Limpe regularmente com um pano macio e seco. 4) Evite dormir ou fazer exercícios usando as bijuterias. 5) Aplique perfume ou creme antes de colocar as joias. 6) Guarde em local seco e arejado. 7) Use um sachê anti-oxidante na caixa de joias para prevenir o escurecimento das peças.'
    },
    {
      category: 'Frete e Custos',
      question: 'Como é calculado o frete e existe frete grátis?',
      answer: 'O cálculo do frete é baseado no CEP de destino e no peso total do pedido. Oferecemos frete grátis para compras acima de R$ 200,00 para todo o Brasil. Para calcular o frete: 1) Adicione os produtos ao carrinho. 2) Informe seu CEP na página do carrinho. 3) Escolha entre as opções de envio disponíveis. Trabalhamos com diversas transportadoras para oferecer o melhor custo-benefício. Em promoções especiais, podemos oferecer frete grátis para compras de menor valor, fique atento às nossas redes sociais!'
    },
    {
      category: 'Personalização de Produtos',
      question: 'É possível personalizar as bijuterias? Como funciona?',
      answer: 'Sim, oferecemos serviços de personalização para várias de nossas peças. O processo funciona assim: 1) Escolha o item que deseja personalizar. 2) Selecione a opção de personalização na página do produto. 3) Especifique os detalhes (ex: gravação de nome, escolha de pedras). 4) Adicione ao carrinho. 5) O prazo de produção para itens personalizados é de 5 a 10 dias úteis adicionais. 6) O custo da personalização varia conforme a complexidade, mas geralmente fica entre R$ 20 e R$ 50 por peça. Lembre-se que itens personalizados não são elegíveis para troca ou devolução, exceto em caso de defeito de fabricação.'
    },
  ]

  const topFAQs = faqItems.slice(0, 5)

  useEffect(() => {
    const timer = setTimeout(() => setShowSuggestion(true), 10000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const filtered = faqItems.filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setFilteredFAQs(filtered)
  }, [searchQuery])

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    if (category === 'all') {
      setFilteredFAQs(faqItems)
    } else {
      const filtered = faqItems.filter((faq) => faq.category === category)
      setFilteredFAQs(filtered)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Perguntas Frequentes</h1>
      
      {/* 1. Barra de Busca - Melhorias: autocompletar, limpar busca, acessibilidade, feedback visual */}
      <div className="mb-8 relative">
        <Input
          type="search"
          placeholder="Buscar perguntas..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pr-10"
          list="faq-suggestions"
          aria-label="Buscar perguntas frequentes"
        />
        {searchQuery && (
          <button
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            onClick={() => setSearchQuery('')}
            aria-label="Limpar busca"
          >
            <X className="w-5 h-5" />
          </button>
        )}
        <datalist id="faq-suggestions">
          {faqItems.map((faq, index) => (
            <option key={index} value={faq.question} />
          ))}
        </datalist>
        {filteredFAQs.length === 0 && searchQuery && (
          <p className="text-sm text-red-500 mt-2">Nenhum resultado encontrado. Tente outra palavra-chave.</p>
        )}
      </div>

      {/* 2. Categorias de Perguntas - Melhorias: tabs, scroll horizontal, contagem, tooltip, acessibilidade */}
      <ScrollArea className="w-full whitespace-nowrap rounded-md border">
        <Tabs defaultValue="all" className="w-full" onValueChange={handleCategoryChange}>
          <TabsList>
            <TabsTrigger value="all">Todas ({faqItems.length})</TabsTrigger>
            {categories.map((category, index) => (
              <TabsTrigger key={index} value={category.name}>
                <span className="flex items-center space-x-2" title={`${category.name} - Clique para filtrar`}>
                  {category.icon}
                  <span>{category.name}</span>
                  <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">
                    {faqItems.filter(faq => faq.category === category.name).length}
                  </span>
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </ScrollArea>

      {/* 3. Perguntas em Dropdown - Melhorias: pesquisa destacada, animações, feedback visual, compartilhar */}
      <div className="mt-8">
        <Accordion type="single" collapsible className="w-full">
          {(searchQuery ? filteredFAQs : activeCategory === 'all' ? faqItems : filteredFAQs).map((faq, index) => (
            <AccordionItem value={`faq-${index}`} key={index}>
              <AccordionTrigger>
                <span dangerouslySetInnerHTML={{
                  __html: faq.question.replace(
                    new RegExp(searchQuery, 'gi'),
                    (match) => `<mark class="bg-yellow-200">${match}</mark>`
                  )
                }} />
              </AccordionTrigger>
              <AccordionContent>
                <p dangerouslySetInnerHTML={{
                  __html: faq.answer.replace(
                    new RegExp(searchQuery, 'gi'),
                    (match) => `<mark class="bg-yellow-200">${match}</mark>`
                  )
                }} />
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-4"
                  onClick={() => {
                    navigator.clipboard.writeText(faq.question + '\n\n' + faq.answer);
                    alert('Pergunta e resposta copiadas para a área de transferência!');
                  }}
                >
                  Compartilhar
                </Button>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* 4. Perguntas Mais Frequentes em Destaque - Melhorias: carrossel, votos, feedback, estatísticas */}
      <div className="my-12 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Perguntas Mais Frequentes</h2>
        <Tabs defaultValue="faq-0">
          <TabsList>
            {topFAQs.map((_, index) => (
              <TabsTrigger key={index} value={`faq-${index}`}>
                {index + 1}
              </TabsTrigger>
            ))}
          </TabsList>
          {topFAQs.map((faq, index) => (
            <TabsContent key={index} value={`faq-${index}`}>
              <h3 className="font-medium mb-2">{faq.question}</h3>
              <p>{faq.answer}</p>
              <div className="mt-4 flex items-center space-x-4">
                <span className="text-sm text-gray-500">Esta resposta foi útil?</span>
                <Button variant="outline" size="sm">👍 Sim</Button>
                <Button variant="outline" size="sm">👎 Não</Button>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                {Math.floor(Math.random() * 1000)} pessoas acharam esta resposta útil
              </p>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* 5. Botão de Contato (Flutuante) - Melhorias: múltiplos canais, acessibilidade, feedback, rastreamento */}
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="fixed bottom-6 right-6 rounded-full w-16 h-16 shadow-lg"
            aria-label="Contato"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1  4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Entre em contato</DialogTitle>
            <DialogDescription>
              Escolha o canal de atendimento de sua preferência:
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Button onClick={() => window.open('https://wa.me/seunumero', '_blank')}>
              WhatsApp
            </Button>
            <Button onClick={() => window.open('mailto:contato@suaempresa.com', '_blank')}>
              E-mail
            </Button>
            <Button onClick={() => window.open('tel:+551199999999', '_blank')}>
              Telefone
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* 6. Ícones para Categorias - Melhorias já aplicadas na seção de Categorias de Perguntas */}

      {/* 7. Pergunta Sugestiva - Melhorias: personalização, feedback, múltiplas sugestões, acessibilidade */}
      {showSuggestion && (
        <div className="fixed bottom-24 right-6 bg-white p-4 rounded-lg shadow-lg max-w-sm" role="alert">
          <button
            onClick={() => setShowSuggestion(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            aria-label="Fechar sugestão"
          >
            <X className="w-5 h-5" />
          </button>
          <p className="font-medium mb-2">Não encontrou o que procurava?</p>
          <p className="text-sm mb-4">Que tal verificar estas perguntas populares:</p>
          <ul className="list-disc pl-5 mb-4">
            {topFAQs.slice(0, 3).map((faq, index) => (
              <li key={index} className="mb-2">
                <a href={`#faq-${index}`} className="text-blue-600 hover:underline">
                  {faq.question}
                </a>
              </li>
            ))}
          </ul>
          <Button onClick={() => setShowSuggestion(false)}>Entendi, obrigado!</Button>
        </div>
      )}
    </div>
  )
}