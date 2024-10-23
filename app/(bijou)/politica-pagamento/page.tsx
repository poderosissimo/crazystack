"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  CreditCard,
  Truck,
  DollarSign,
  Package,
  RefreshCcw,
  ShieldCheck,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Tooltip } from "@/components/ui/tooltip";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function PoliticaPagamentoEnvio() {
  const [expanded, setExpanded] = useState({
    pagamento: false,
    envio: false,
    producao: false,
    troca: false,
    garantia: false,
  });

  const [cep, setCep] = useState("");

  const toggleExpand = (section: keyof typeof expanded) => {
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Política de Pagamento e Envio
      </h1>

      {/* Seção de Formas de Pagamento */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold flex items-center">
            <CreditCard className="mr-2" /> Formas de Pagamento
          </h2>
          <Button variant="ghost" onClick={() => toggleExpand("pagamento")}>
            {expanded.pagamento ? <ChevronUp /> : <ChevronDown />}
          </Button>
        </div>
        <div className="flex space-x-4 mb-4">
          <img
            src="/placeholder.svg?height=30&width=50"
            alt="Visa"
            className="h-8"
          />
          <img
            src="/placeholder.svg?height=30&width=50"
            alt="Mastercard"
            className="h-8"
          />
          <img
            src="/placeholder.svg?height=30&width=50"
            alt="Pix"
            className="h-8"
          />
          <img
            src="/placeholder.svg?height=30&width=50"
            alt="Boleto"
            className="h-8"
          />
        </div>
        {expanded.pagamento && (
          <Accordion type="single" collapsible>
            <AccordionItem value="cartao">
              <AccordionTrigger>Cartão de Crédito</AccordionTrigger>
              <AccordionContent>
                Aceitamos Visa, Mastercard, American Express. Parcelamento em
                até 12x sem juros.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="pix">
              <AccordionTrigger>Pix</AccordionTrigger>
              <AccordionContent>
                Pagamento instantâneo com desconto de 5%.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="boleto">
              <AccordionTrigger>Boleto</AccordionTrigger>
              <AccordionContent>
                Vencimento em 3 dias úteis. Pedido processado após confirmação
                do pagamento.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
      </section>

      {/* Tabela de Prazos de Envio */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold flex items-center">
            <Truck className="mr-2" /> Prazos de Envio
          </h2>
          <Button variant="ghost" onClick={() => toggleExpand("envio")}>
            {expanded.envio ? <ChevronUp /> : <ChevronDown />}
          </Button>
        </div>
        {expanded.envio && (
          <div>
            <Select>
              <option value="">Selecione o estado</option>
              <option value="SP">São Paulo</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="MG">Minas Gerais</option>
            </Select>
            <table className="w-full mt-4">
              <thead>
                <tr>
                  <th>Método</th>
                  <th>Prazo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sedex</td>
                  <td>2-3 dias úteis</td>
                </tr>
                <tr>
                  <td>PAC</td>
                  <td>5-8 dias úteis</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* Seção de Opções de Frete */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Package className="mr-2" /> Opções de Frete
        </h2>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="sedex" />
            <Label htmlFor="sedex">Sedex</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="pac" />
            <Label htmlFor="pac">PAC</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="local" />
            <Label htmlFor="local">Entrega Local</Label>
          </div>
        </div>
        <div className="mt-4">
          <Label htmlFor="cep">Calcular Frete:</Label>
          <div className="flex mt-1">
            <Input
              type="text"
              id="cep"
              placeholder="Digite seu CEP"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              className="mr-2"
            />
            <Button>Calcular</Button>
          </div>
        </div>
      </section>

      {/* Informações de Custos Adicionais */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <DollarSign className="mr-2" /> Custos Adicionais
          <Tooltip>
            <HelpCircle className="ml-2 h-5 w-5 text-gray-400" />
            Podem incluir taxas de importação ou custos extras de transporte.
          </Tooltip>
        </h2>
        <p>
          As taxas adicionais variam de acordo com o destino e o valor da
          compra. Consulte mais detalhes na finalização do pedido.
        </p>
      </section>

      {/* Seção de Prazos de Produção */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold flex items-center">
            <RefreshCcw className="mr-2" /> Prazos de Produção (Sob Encomenda)
          </h2>
          <Button variant="ghost" onClick={() => toggleExpand("producao")}>
            {expanded.producao ? <ChevronUp /> : <ChevronDown />}
          </Button>
        </div>
        {expanded.producao && (
          <div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: "45%" }}
              ></div>
            </div>
            <p>
              Tempo estimado de produção: 5-7 dias úteis para itens
              personalizados.
            </p>
          </div>
        )}
      </section>

      {/* Política de Troca/Devolução */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold flex items-center">
            <RefreshCcw className="mr-2" /> Política de Troca/Devolução
          </h2>
          <Button variant="ghost" onClick={() => toggleExpand("troca")}>
            {expanded.troca ? <ChevronUp /> : <ChevronDown />}
          </Button>
        </div>
        {expanded.troca && (
          <div>
            <ul className="list-disc pl-5 mb-4">
              <li>7 dias para devolução após o recebimento</li>
              <li>30 dias para troca em caso de defeito</li>
              <li>Produto deve estar em perfeitas condições</li>
            </ul>
            <Button>Iniciar Processo de Troca/Devolução</Button>
          </div>
        )}
      </section>

      {/* Garantia dos Produtos */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold flex items-center">
            <ShieldCheck className="mr-2" /> Garantia dos Produtos
          </h2>
          <Button variant="ghost" onClick={() => toggleExpand("garantia")}>
            {expanded.garantia ? <ChevronUp /> : <ChevronDown />}
          </Button>
        </div>
        {expanded.garantia && (
          <div>
            <Accordion type="single" collapsible>
              <AccordionItem value="garantia-padrao">
                <AccordionTrigger>Qual é a garantia padrão?</AccordionTrigger>
                <AccordionContent>
                  Todos os produtos têm garantia de 90 dias conforme o Código de
                  Defesa do Consumidor.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="garantia-estendida">
                <AccordionTrigger>
                  Como funciona a garantia estendida?
                </AccordionTrigger>
                <AccordionContent>
                  A garantia estendida pode ser adquirida separadamente e
                  prolonga a proteção por até 2 anos adicionais.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Button className="mt-4">Solicitar Garantia</Button>
          </div>
        )}
      </section>
    </div>
  );
}
