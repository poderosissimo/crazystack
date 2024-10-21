"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarIcon, Upload, CheckCircle, Clock, Star } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function Component() {
  const [activeTab, setActiveTab] = useState("solicitar");
  const [orcamentos, setOrcamentos] = useState([
    {
      id: 1,
      empresa: "Mudanças Rápidas",
      preco: 1500,
      tempoResposta: "2 horas",
      descricao: "Serviço completo de mudança",
      status: "Pendente",
    },
    {
      id: 2,
      empresa: "TransLar",
      preco: 1300,
      tempoResposta: "4 horas",
      descricao: "Mudança com embalagem incluída",
      status: "Aceito",
    },
    {
      id: 3,
      empresa: "MudaFácil",
      preco: 1700,
      tempoResposta: "1 hora",
      descricao: "Serviço premium de mudança",
      status: "Concluído",
    },
  ]);
  const [showContract, setShowContract] = useState(false);
  const [selectedOrcamento, setSelectedOrcamento] = useState(null);
  const [showEvaluation, setShowEvaluation] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveTab("visualizar");
  };

  const handleAcceptQuote = (orcamento) => {
    setSelectedOrcamento(orcamento);
    setShowContract(true);
  };

  const handleSignContract = () => {
    setOrcamentos(
      orcamentos.map((o) =>
        o.id === selectedOrcamento.id ? { ...o, status: "Aceito" } : o,
      ),
    );
    setShowContract(false);
  };

  const handleEvaluate = (orcamento) => {
    setSelectedOrcamento(orcamento);
    setShowEvaluation(true);
  };

  const handleSubmitEvaluation = (e: React.FormEvent) => {
    e.preventDefault();
    setOrcamentos(
      orcamentos.map((o) =>
        o.id === selectedOrcamento.id ? { ...o, status: "Avaliado" } : o,
      ),
    );
    setShowEvaluation(false);
  };

  return (
    <Tabs
      value={activeTab}
      onValueChange={setActiveTab}
      className="w-full max-w-4xl mx-auto"
    >
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="solicitar">Solicitar Orçamento</TabsTrigger>
        <TabsTrigger value="visualizar">Visualizar Orçamentos</TabsTrigger>
      </TabsList>
      <TabsContent value="solicitar">
        <Card>
          <CardHeader>
            <CardTitle>Solicitar Orçamento de Mudança</CardTitle>
            <CardDescription>
              Preencha os detalhes da sua mudança para receber orçamentos
              personalizados.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="data-mudanca">Data Prevista da Mudança</Label>
                  <div className="relative">
                    <Input id="data-mudanca" type="date" required />
                    <CalendarIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tipo-imovel">Tipo de Imóvel</Label>
                  <Select required>
                    <SelectTrigger id="tipo-imovel">
                      <SelectValue placeholder="Selecione o tipo de imóvel" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apartamento">Apartamento</SelectItem>
                      <SelectItem value="casa">Casa</SelectItem>
                      <SelectItem value="escritorio">Escritório</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="endereco-origem">Endereço de Origem</Label>
                <Input
                  id="endereco-origem"
                  placeholder="Digite o endereço completo de origem"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="endereco-destino">Endereço de Destino</Label>
                <Input
                  id="endereco-destino"
                  placeholder="Digite o endereço completo de destino"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="num-comodos">Número de Cômodos</Label>
                <Input id="num-comodos" type="number" min="1" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="itens-especiais">
                  Itens Especiais (opcional)
                </Label>
                <Textarea
                  id="itens-especiais"
                  placeholder="Descreva móveis pesados, itens frágeis, etc."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="necessidades-adicionais">
                  Necessidades Adicionais (opcional)
                </Label>
                <Textarea
                  id="necessidades-adicionais"
                  placeholder="Embalagem, desmontagem de móveis, etc."
                />
              </div>
              <div className="space-y-2">
                <Label>Anexar Fotos (opcional)</Label>
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-10 h-10 mb-3 text-gray-400" />
                      <p className="mb-2 text-sm text-gray-500">
                        <span className="font-semibold">
                          Clique para fazer upload
                        </span>{" "}
                        ou arraste e solte
                      </p>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      className="hidden"
                      multiple
                    />
                  </label>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button type="submit" onClick={handleSubmit}>
              Solicitar Orçamentos
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="visualizar">
        <Card>
          <CardHeader>
            <CardTitle>Orçamentos Recebidos</CardTitle>
            <CardDescription>
              Compare os orçamentos das empresas de mudança.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {orcamentos.map((orcamento) => (
                <Card key={orcamento.id}>
                  <CardHeader>
                    <CardTitle>{orcamento.empresa}</CardTitle>
                    <CardDescription>
                      Tempo de resposta: {orcamento.tempoResposta}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">
                      R$ {orcamento.preco.toFixed(2)}
                    </p>
                    <p className="text-gray-600">{orcamento.descricao}</p>
                    <div className="mt-4">
                      <p className="font-semibold">
                        Status: {orcamento.status}
                      </p>
                      <Progress
                        value={
                          orcamento.status === "Pendente"
                            ? 25
                            : orcamento.status === "Aceito"
                              ? 50
                              : orcamento.status === "Concluído"
                                ? 75
                                : orcamento.status === "Avaliado"
                                  ? 100
                                  : 0
                        }
                        className="mt-2"
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    {orcamento.status === "Pendente" && (
                      <Button onClick={() => handleAcceptQuote(orcamento)}>
                        Aceitar Orçamento
                      </Button>
                    )}
                    {orcamento.status === "Concluído" && (
                      <Button onClick={() => handleEvaluate(orcamento)}>
                        Avaliar Serviço
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <Dialog open={showContract} onOpenChange={setShowContract}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Contrato Digital</DialogTitle>
            <DialogDescription>
              Revise e assine o contrato para a mudança com{" "}
              {selectedOrcamento?.empresa}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <h3 className="font-semibold">Termos do Contrato:</h3>
            <ul className="list-disc list-inside mt-2">
              <li>Serviço de mudança residencial</li>
              <li>Data: [Data da Mudança]</li>
              <li>Valor: R$ {selectedOrcamento?.preco.toFixed(2)}</li>
              <li>Inclui: {selectedOrcamento?.descricao}</li>
            </ul>
          </div>
          <DialogFooter>
            <Button onClick={handleSignContract}>Assinar e Aceitar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={showEvaluation} onOpenChange={setShowEvaluation}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Avalie o Serviço</DialogTitle>
            <DialogDescription>
              Compartilhe sua experiência com {selectedOrcamento?.empresa}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmitEvaluation}>
            <div className="space-y-4">
              <div>
                <Label>Pontualidade</Label>
                <RadioGroup defaultValue="4" className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <RadioGroupItem
                      key={value}
                      value={value.toString()}
                      id={`pontualidade-${value}`}
                      className="sr-only peer"
                    />
                  ))}
                  {[1, 2, 3, 4, 5].map((value) => (
                    <Label
                      key={value}
                      htmlFor={`pontualidade-${value}`}
                      className="flex items-center justify-center w-8 h-8 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-full peer-checked:bg-blue-600 peer-checked:text-white hover:bg-gray-50 cursor-pointer"
                    >
                      <Star
                        className={`w-4 h-4 ${value <= 4 ? "fill-current" : ""}`}
                      />
                    </Label>
                  ))}
                </RadioGroup>
              </div>
              <div>
                <Label>Qualidade do Serviço</Label>
                <RadioGroup defaultValue="4" className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <RadioGroupItem
                      key={value}
                      value={value.toString()}
                      id={`qualidade-${value}`}
                      className="sr-only peer"
                    />
                  ))}
                  {[1, 2, 3, 4, 5].map((value) => (
                    <Label
                      key={value}
                      htmlFor={`qualidade-${value}`}
                      className="flex items-center justify-center w-8 h-8 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-full peer-checked:bg-blue-600 peer-checked:text-white hover:bg-gray-50 cursor-pointer"
                    >
                      <Star
                        className={`w-4 h-4 ${value <= 4 ? "fill-current" : ""}`}
                      />
                    </Label>
                  ))}
                </RadioGroup>
              </div>
              <div className="space-y-2">
                <Label htmlFor="comentario">Comentário</Label>
                <Textarea
                  id="comentario"
                  placeholder="Compartilhe sua experiência..."
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Enviar Avaliação</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </Tabs>
  );
}
