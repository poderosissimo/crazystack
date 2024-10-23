"use client";

import { useState } from "react";
import {
  User,
  Truck,
  MapPin,
  Clock,
  DollarSign,
  Bell,
  Shield,
  Save,
  Briefcase,
  Clipboard,
  Star,
  Settings,
  FileText,
  Camera,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";

export default function ConfiguracaoAvancadaPrestador() {
  const [config, setConfig] = useState({
    // Informações Pessoais (existentes e novas)
    nome: "João Silva",
    email: "joao.silva@email.com",
    telefone: "(11) 98765-4321",
    bio: "Especialista em mudanças residenciais e comerciais com 10 anos de experiência.",
    dataNascimento: "1980-01-01",
    genero: "masculino",
    idiomas: ["portugues", "ingles"],
    redesSociais: {
      facebook: "",
      instagram: "",
      linkedin: "",
    },

    // Preferências de Serviço (existentes e novas)
    raioAtuacao: 50,
    horariosDisponiveis: ["manha", "tarde"],
    precoMinimo: 200,
    tiposMudanca: ["residencial", "comercial"],
    tamanhoMaximoCarga: 50, // em m³
    pessoasEquipe: 3,
    servicosAdicionais: ["embalagem", "desmontagem", "montagem"],
    diasTrabalho: ["segunda", "terca", "quarta", "quinta", "sexta"],
    tempoMinimoAntecedencia: 2, // em dias
    aceitaPagamentoCartao: true,
    aceitaPagamentoDinheiro: true,
    aceitaPagamentoPix: true,
    possuiSeguro: true,

    // Veículo
    tipoVeiculo: "caminhao",
    placaVeiculo: "ABC1234",
    anoVeiculo: 2020,
    capacidadeVeiculo: 30, // em m³
    possuiRampa: true,
    possuiCarrinho: true,
    possuiCordas: true,
    possuiCobertores: true,

    // Avaliações e Qualidade
    notaMinimaAceitavel: 4,
    respostaAutomaticaAvaliacao: true,
    tempoMaximoResposta: 24, // em horas

    // Notificações (existentes e novas)
    notificacoesApp: true,
    notificacoesEmail: false,
    notificacoesSMS: false,
    frequenciaResumoSemanal: "segunda",
    notificacaoNovaOportunidade: true,

    // Segurança (existentes e novas)
    verificacaoDuasEtapas: true,
    backupAutomaticoDados: true,
    compartilharLocalizacaoTempoReal: true,

    // Preferências de Plataforma
    idiomaPlataforma: "portugues",
    temaEscuro: false,
    exibirPerfilPublicamente: true,
    permitirContatoDireto: true,

    // Financeiro
    dadosBancarios: {
      banco: "",
      agencia: "",
      conta: "",
    },
    emitirNotaFiscal: true,
    percentualImpostos: 15,

    // Documentação
    cnh: {
      numero: "",
      validade: "",
    },
    seguroVeiculo: {
      numero: "",
      validade: "",
    },
    certificacoes: [""],
  });

  const handleChange = (field: string, value: any) => {
    setConfig((prev) => ({ ...prev, [field]: value }));
  };

  const handleNestedChange = (parent: string, field: string, value: any) => {
    setConfig((prev: any) => ({
      ...prev,
      [parent]: {
        ...prev[parent],
        [field]: value,
      },
    }));
  };

  const handleSave = () => {
    console.log("Configurações salvas:", config);
    // Aqui você implementaria a lógica para salvar as configurações no backend
  };

  return (
    <div className="container mx-auto p-4 space-y-6 bg-background min-h-screen">
      <h1 className="text-3xl font-bold text-primary text-center mb-6">
        Configurações Avançadas do Prestador
      </h1>

      {/* Informações Pessoais */}
      <Card className="shadow-lg">
        <CardHeader className="bg-primary/10">
          <CardTitle className="text-2xl text-primary flex items-center">
            <User className="mr-2 h-6 w-6" />
            Informações Pessoais
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          <div className="flex items-center space-x-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src="/placeholder.svg" alt={config.nome} />
              <AvatarFallback>
                {config.nome
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <Button variant="outline">Alterar Foto</Button>
          </div>
          <div className="space-y-2">
            <Label htmlFor="nome">Nome Completo</Label>
            <Input
              id="nome"
              value={config.nome}
              onChange={(e) => handleChange("nome", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              value={config.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="telefone">Telefone</Label>
            <Input
              id="telefone"
              value={config.telefone}
              onChange={(e) => handleChange("telefone", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bio">Biografia</Label>
            <Textarea
              id="bio"
              value={config.bio}
              onChange={(e) => handleChange("bio", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="dataNascimento">Data de Nascimento</Label>
            <Input
              id="dataNascimento"
              type="date"
              value={config.dataNascimento}
              onChange={(e) => handleChange("dataNascimento", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="genero">Gênero</Label>
            <Select
              value={config.genero}
              onValueChange={(value) => handleChange("genero", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione o gênero" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="masculino">Masculino</SelectItem>
                <SelectItem value="feminino">Feminino</SelectItem>
                <SelectItem value="outro">Outro</SelectItem>
                <SelectItem value="prefiro-nao-dizer">
                  Prefiro não dizer
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Idiomas</Label>
            <div className="flex flex-wrap gap-2">
              {["portugues", "ingles", "espanhol", "frances", "alemao"].map(
                (idioma) => (
                  <div key={idioma} className="flex items-center space-x-2">
                    <Checkbox
                      id={`idioma-${idioma}`}
                      checked={config.idiomas.includes(idioma)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          handleChange("idiomas", [...config.idiomas, idioma]);
                        } else {
                          handleChange(
                            "idiomas",
                            config.idiomas.filter((i) => i !== idioma),
                          );
                        }
                      }}
                    />
                    <Label htmlFor={`idioma-${idioma}`}>
                      {idioma.charAt(0).toUpperCase() + idioma.slice(1)}
                    </Label>
                  </div>
                ),
              )}
            </div>
          </div>
          <div className="space-y-2">
            <Label>Redes Sociais</Label>
            <Input
              placeholder="Facebook"
              value={config.redesSociais.facebook}
              onChange={(e) =>
                handleNestedChange("redesSociais", "facebook", e.target.value)
              }
            />
            <Input
              placeholder="Instagram"
              value={config.redesSociais.instagram}
              onChange={(e) =>
                handleNestedChange("redesSociais", "instagram", e.target.value)
              }
            />
            <Input
              placeholder="LinkedIn"
              value={config.redesSociais.linkedin}
              onChange={(e) =>
                handleNestedChange("redesSociais", "linkedin", e.target.value)
              }
            />
          </div>
        </CardContent>
      </Card>

      {/* Preferências de Serviço */}
      <Card className="shadow-lg">
        <CardHeader className="bg-primary/10">
          <CardTitle className="text-2xl text-primary flex items-center">
            <Truck className="mr-2 h-6 w-6" />
            Preferências de Serviço
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="raioAtuacao">Raio de Atuação (km)</Label>
            <Slider
              id="raioAtuacao"
              min={1}
              max={200}
              step={1}
              value={[config.raioAtuacao]}
              onValueChange={([value]) => handleChange("raioAtuacao", value)}
            />
            <div className="text-right text-sm text-muted-foreground">
              {config.raioAtuacao} km
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="horariosDisponiveis">Horários Disponíveis</Label>
            <Select
              value={config.horariosDisponiveis.join(",")}
              onValueChange={(value) =>
                handleChange("horariosDisponiveis", value.split(","))
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione os horários" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="manha,tarde,noite">
                  Manhã, Tarde e Noite
                </SelectItem>
                <SelectItem value="manha,tarde">Manhã e Tarde</SelectItem>
                <SelectItem value="tarde,noite">Tarde e Noite</SelectItem>
                <SelectItem value="manha">Apenas Manhã</SelectItem>
                <SelectItem value="tarde">Apenas Tarde</SelectItem>
                <SelectItem value="noite">Apenas Noite</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="precoMinimo">Preço Mínimo (R$)</Label>
            <Input
              id="precoMinimo"
              type="number"
              value={config.precoMinimo}
              onChange={(e) =>
                handleChange("precoMinimo", Number(e.target.value))
              }
            />
          </div>
          <div className="space-y-2">
            <Label>Tipos de Mudança</Label>
            <div className="flex flex-wrap gap-2">
              {[
                "residencial",
                "comercial",
                "internacional",
                "longa-distancia",
              ].map((tipo) => (
                <div key={tipo} className="flex items-center space-x-2">
                  <Checkbox
                    id={`tipo-${tipo}`}
                    checked={config.tiposMudanca.includes(tipo)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        handleChange("tiposMudanca", [
                          ...config.tiposMudanca,
                          tipo,
                        ]);
                      } else {
                        handleChange(
                          "tiposMudanca",
                          config.tiposMudanca.filter((t) => t !== tipo),
                        );
                      }
                    }}
                  />
                  <Label htmlFor={`tipo-${tipo}`}>
                    {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
                  </Label>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="tamanhoMaximoCarga">
              Tamanho Máximo de Carga (m³)
            </Label>
            <Slider
              id="tamanhoMaximoCarga"
              min={1}
              max={100}
              step={1}
              value={[config.tamanhoMaximoCarga]}
              onValueChange={([value]) =>
                handleChange("tamanhoMaximoCarga", value)
              }
            />
            <div className="text-right text-sm text-muted-foreground">
              {config.tamanhoMaximoCarga} m³
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="pessoasEquipe">Número de Pessoas na Equipe</Label>
            <Input
              id="pessoasEquipe"
              type="number"
              value={config.pessoasEquipe}
              onChange={(e) =>
                handleChange("pessoasEquipe", Number(e.target.value))
              }
            />
          </div>
          <div className="space-y-2">
            <Label>Serviços Adicionais</Label>
            <div className="flex flex-wrap gap-2">
              {[
                "embalagem",
                "desmontagem",
                "montagem",
                "limpeza",
                "armazenamento",
              ].map((servico) => (
                <div key={servico} className="flex items-center space-x-2">
                  <Checkbox
                    id={`servico-${servico}`}
                    checked={config.servicosAdicionais.includes(servico)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        handleChange("servicosAdicionais", [
                          ...config.servicosAdicionais,
                          servico,
                        ]);
                      } else {
                        handleChange(
                          "servicosAdicionais",
                          config.servicosAdicionais.filter(
                            (s) => s !== servico,
                          ),
                        );
                      }
                    }}
                  />
                  <Label htmlFor={`servico-${servico}`}>
                    {servico.charAt(0).toUpperCase() + servico.slice(1)}
                  </Label>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <Label>Dias de Trabalho</Label>
            <div className="flex flex-wrap gap-2">
              {[
                "segunda",
                "terca",
                "quarta",
                "quinta",
                "sexta",
                "sabado",
                "domingo",
              ].map((dia) => (
                <div key={dia} className="flex items-center space-x-2">
                  <Checkbox
                    id={`dia-${dia}`}
                    checked={config.diasTrabalho.includes(dia)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        handleChange("diasTrabalho", [
                          ...config.diasTrabalho,
                          dia,
                        ]);
                      } else {
                        handleChange(
                          "diasTrabalho",
                          config.diasTrabalho.filter((d) => d !== dia),
                        );
                      }
                    }}
                  />
                  <Label htmlFor={`dia-${dia}`}>
                    {dia.charAt(0).toUpperCase() + dia.slice(1)}
                  </Label>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="tempoMinimoAntecedencia">
              Tempo Mínimo de Antecedência (dias)
            </Label>
            <Input
              id="tempoMinimoAntecedencia"
              type="number"
              value={config.tempoMinimoAntecedencia}
              onChange={(e) =>
                handleChange("tempoMinimoAntecedencia", Number(e.target.value))
              }
            />
          </div>
          <div className="space-y-2">
            <Label>Formas de Pagamento Aceitas</Label>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <Switch
                  id="aceitaPagamentoCartao"
                  checked={config.aceitaPagamentoCartao}
                  onCheckedChange={(checked) =>
                    handleChange("aceitaPagamentoCartao", checked)
                  }
                />
                <Label htmlFor="aceitaPagamentoCartao">Cartão</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="aceitaPagamentoDinheiro"
                  checked={config.aceitaPagamentoDinheiro}
                  onCheckedChange={(checked) =>
                    handleChange("aceitaPagamentoDinheiro", checked)
                  }
                />
                <Label htmlFor="aceitaPagamentoDinheiro">Dinheiro</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="aceitaPagamentoPix"
                  checked={config.aceitaPagamentoPix}
                  onCheckedChange={(checked) =>
                    handleChange("aceitaPagamentoPix", checked)
                  }
                />
                <Label htmlFor="aceitaPagamentoPix">PIX</Label>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="possuiSeguro"
              checked={config.possuiSeguro}
              onCheckedChange={(checked) =>
                handleChange("possuiSeguro", checked)
              }
            />
            <Label htmlFor="possuiSeguro">Possui seguro para mudanças</Label>
          </div>
        </CardContent>
      </Card>

      {/* Veículo */}
      <Card className="shadow-lg">
        <CardHeader className="bg-primary/10">
          <CardTitle className="text-2xl text-primary flex items-center">
            <Truck className="mr-2 h-6 w-6" />
            Informações do Veículo
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="tipoVeiculo">Tipo de Veículo</Label>
            <Select
              value={config.tipoVeiculo}
              onValueChange={(value) => handleChange("tipoVeiculo", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione o tipo de veículo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="caminhao">Caminhão</SelectItem>
                <SelectItem value="van">Van</SelectItem>
                <SelectItem value="pickup">Pickup</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="placaVeiculo">Placa do Veículo</Label>
            <Input
              id="placaVeiculo"
              value={config.placaVeiculo}
              onChange={(e) => handleChange("placaVeiculo", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="anoVeiculo">Ano do Veículo</Label>
            <Input
              id="anoVeiculo"
              type="number"
              value={config.anoVeiculo}
              onChange={(e) =>
                handleChange("anoVeiculo", Number(e.target.value))
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="capacidadeVeiculo">
              Capacidade do Veículo (m³)
            </Label>
            <Input
              id="capacidadeVeiculo"
              type="number"
              value={config.capacidadeVeiculo}
              onChange={(e) =>
                handleChange("capacidadeVeiculo", Number(e.target.value))
              }
            />
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="possuiRampa"
              checked={config.possuiRampa}
              onCheckedChange={(checked) =>
                handleChange("possuiRampa", checked)
              }
            />
            <Label htmlFor="possuiRampa">Possui rampa</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="possuiCarrinho"
              checked={config.possuiCarrinho}
              onCheckedChange={(checked) =>
                handleChange("possuiCarrinho", checked)
              }
            />
            <Label htmlFor="possuiCarrinho">Possui carrinho</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="possuiCordas"
              checked={config.possuiCordas}
              onCheckedChange={(checked) =>
                handleChange("possuiCordas", checked)
              }
            />
            <Label htmlFor="possuiCordas">Possui cordas</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="possuiCobertores"
              checked={config.possuiCobertores}
              onCheckedChange={(checked) =>
                handleChange("possuiCobertores", checked)
              }
            />
            <Label htmlFor="possuiCobertores">Possui cobertores</Label>
          </div>
        </CardContent>
      </Card>

      {/* Avaliações e Qualidade */}
      <Card className="shadow-lg">
        <CardHeader className="bg-primary/10">
          <CardTitle className="text-2xl text-primary flex items-center">
            <Star className="mr-2 h-6 w-6" />
            Avaliações e Qualidade
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="notaMinimaAceitavel">Nota Mínima Aceitável</Label>
            <Select
              value={config.notaMinimaAceitavel.toString()}
              onValueChange={(value) =>
                handleChange("notaMinimaAceitavel", Number(value))
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione a nota mínima" />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5].map((nota) => (
                  <SelectItem key={nota} value={nota.toString()}>
                    {nota}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="respostaAutomaticaAvaliacao"
              checked={config.respostaAutomaticaAvaliacao}
              onCheckedChange={(checked) =>
                handleChange("respostaAutomaticaAvaliacao", checked)
              }
            />
            <Label htmlFor="respostaAutomaticaAvaliacao">
              Resposta automática para avaliações
            </Label>
          </div>
          <div className="space-y-2">
            <Label htmlFor="tempoMaximoResposta">
              Tempo Máximo de Resposta (horas)
            </Label>
            <Input
              id="tempoMaximoResposta"
              type="number"
              value={config.tempoMaximoResposta}
              onChange={(e) =>
                handleChange("tempoMaximoResposta", Number(e.target.value))
              }
            />
          </div>
        </CardContent>
      </Card>

      {/* Notificações */}
      <Card className="shadow-lg">
        <CardHeader className="bg-primary/10">
          <CardTitle className="text-2xl text-primary flex items-center">
            <Bell className="mr-2 h-6 w-6" />
            Notificações
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          <div className="flex items-center space-x-2">
            <Switch
              id="notificacoesApp"
              checked={config.notificacoesApp}
              onCheckedChange={(checked) =>
                handleChange("notificacoesApp", checked)
              }
            />
            <Label htmlFor="notificacoesApp">Notificações no App</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="notificacoesEmail"
              checked={config.notificacoesEmail}
              onCheckedChange={(checked) =>
                handleChange("notificacoesEmail", checked)
              }
            />
            <Label htmlFor="notificacoesEmail">Notificações por E-mail</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="notificacoesSMS"
              checked={config.notificacoesSMS}
              onCheckedChange={(checked) =>
                handleChange("notificacoesSMS", checked)
              }
            />
            <Label htmlFor="notificacoesSMS">Notificações por SMS</Label>
          </div>
          <div className="space-y-2">
            <Label htmlFor="frequenciaResumoSemanal">
              Frequência do Resumo Semanal
            </Label>
            <Select
              value={config.frequenciaResumoSemanal}
              onValueChange={(value) =>
                handleChange("frequenciaResumoSemanal", value)
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione o dia" />
              </SelectTrigger>
              <SelectContent>
                {[
                  "domingo",
                  "segunda",
                  "terca",
                  "quarta",
                  "quinta",
                  "sexta",
                  "sabado",
                ].map((dia) => (
                  <SelectItem key={dia} value={dia}>
                    {dia.charAt(0).toUpperCase() + dia.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="notificacaoNovaOportunidade"
              checked={config.notificacaoNovaOportunidade}
              onCheckedChange={(checked) =>
                handleChange("notificacaoNovaOportunidade", checked)
              }
            />
            <Label htmlFor="notificacaoNovaOportunidade">
              Notificar sobre novas oportunidades
            </Label>
          </div>
        </CardContent>
      </Card>

      {/* Segurança */}
      <Card className="shadow-lg">
        <CardHeader className="bg-primary/10">
          <CardTitle className="text-2xl text-primary flex items-center">
            <Shield className="mr-2 h-6 w-6" />
            Segurança
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          <div className="flex items-center space-x-2">
            <Switch
              id="verificacaoDuasEtapas"
              checked={config.verificacaoDuasEtapas}
              onCheckedChange={(checked) =>
                handleChange("verificacaoDuasEtapas", checked)
              }
            />
            <Label htmlFor="verificacaoDuasEtapas">
              Verificação em Duas Etapas
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="backupAutomaticoDados"
              checked={config.backupAutomaticoDados}
              onCheckedChange={(checked) =>
                handleChange("backupAutomaticoDados", checked)
              }
            />
            <Label htmlFor="backupAutomaticoDados">
              Backup Automático de Dados
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="compartilharLocalizacaoTempoReal"
              checked={config.compartilharLocalizacaoTempoReal}
              onCheckedChange={(checked) =>
                handleChange("compartilharLocalizacaoTempoReal", checked)
              }
            />
            <Label htmlFor="compartilharLocalizacaoTempoReal">
              Compartilhar Localização em Tempo Real
            </Label>
          </div>
          <Button variant="outline">Alterar Senha</Button>
        </CardContent>
      </Card>

      {/* Preferências de Plataforma */}
      <Card className="shadow-lg">
        <CardHeader className="bg-primary/10">
          <CardTitle className="text-2xl text-primary flex items-center">
            <Settings className="mr-2 h-6 w-6" />
            Preferências de Plataforma
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="idiomaPlataforma">Idioma da Plataforma</Label>
            <Select
              value={config.idiomaPlataforma}
              onValueChange={(value) => handleChange("idiomaPlataforma", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione o idioma" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="portugues">Português</SelectItem>
                <SelectItem value="ingles">Ingl ês</SelectItem>
                <SelectItem value="espanhol">Espanhol</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="temaEscuro"
              checked={config.temaEscuro}
              onCheckedChange={(checked) => handleChange("temaEscuro", checked)}
            />
            <Label htmlFor="temaEscuro">Tema Escuro</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="exibirPerfilPublicamente"
              checked={config.exibirPerfilPublicamente}
              onCheckedChange={(checked) =>
                handleChange("exibirPerfilPublicamente", checked)
              }
            />
            <Label htmlFor="exibirPerfilPublicamente">
              Exibir Perfil Publicamente
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="permitirContatoDireto"
              checked={config.permitirContatoDireto}
              onCheckedChange={(checked) =>
                handleChange("permitirContatoDireto", checked)
              }
            />
            <Label htmlFor="permitirContatoDireto">
              Permitir Contato Direto
            </Label>
          </div>
        </CardContent>
      </Card>

      {/* Financeiro */}
      <Card className="shadow-lg">
        <CardHeader className="bg-primary/10">
          <CardTitle className="text-2xl text-primary flex items-center">
            <DollarSign className="mr-2 h-6 w-6" />
            Financeiro
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          <div className="space-y-2">
            <Label>Dados Bancários</Label>
            <Input
              placeholder="Banco"
              value={config.dadosBancarios.banco}
              onChange={(e) =>
                handleNestedChange("dadosBancarios", "banco", e.target.value)
              }
            />
            <Input
              placeholder="Agência"
              value={config.dadosBancarios.agencia}
              onChange={(e) =>
                handleNestedChange("dadosBancarios", "agencia", e.target.value)
              }
            />
            <Input
              placeholder="Conta"
              value={config.dadosBancarios.conta}
              onChange={(e) =>
                handleNestedChange("dadosBancarios", "conta", e.target.value)
              }
            />
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="emitirNotaFiscal"
              checked={config.emitirNotaFiscal}
              onCheckedChange={(checked) =>
                handleChange("emitirNotaFiscal", checked)
              }
            />
            <Label htmlFor="emitirNotaFiscal">Emitir Nota Fiscal</Label>
          </div>
          <div className="space-y-2">
            <Label htmlFor="percentualImpostos">
              Percentual de Impostos (%)
            </Label>
            <Input
              id="percentualImpostos"
              type="number"
              value={config.percentualImpostos}
              onChange={(e) =>
                handleChange("percentualImpostos", Number(e.target.value))
              }
            />
          </div>
        </CardContent>
      </Card>

      {/* Documentação */}
      <Card className="shadow-lg">
        <CardHeader className="bg-primary/10">
          <CardTitle className="text-2xl text-primary flex items-center">
            <FileText className="mr-2 h-6 w-6" />
            Documentação
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          <div className="space-y-2">
            <Label>CNH</Label>
            <Input
              placeholder="Número da CNH"
              value={config.cnh.numero}
              onChange={(e) =>
                handleNestedChange("cnh", "numero", e.target.value)
              }
            />
            <Input
              type="date"
              placeholder="Validade da CNH"
              value={config.cnh.validade}
              onChange={(e) =>
                handleNestedChange("cnh", "validade", e.target.value)
              }
            />
          </div>
          <div className="space-y-2">
            <Label>Seguro do Veículo</Label>
            <Input
              placeholder="Número da Apólice"
              value={config.seguroVeiculo.numero}
              onChange={(e) =>
                handleNestedChange("seguroVeiculo", "numero", e.target.value)
              }
            />
            <Input
              type="date"
              placeholder="Validade do Seguro"
              value={config.seguroVeiculo.validade}
              onChange={(e) =>
                handleNestedChange("seguroVeiculo", "validade", e.target.value)
              }
            />
          </div>
          <div className="space-y-2">
            <Label>Certificações</Label>
            {config.certificacoes.map((cert, index) => (
              <Input
                key={index}
                placeholder={`Certificação ${index + 1}`}
                value={cert}
                onChange={(e) => {
                  const newCerts = [...config.certificacoes];
                  newCerts[index] = e.target.value;
                  handleChange("certificacoes", newCerts);
                }}
              />
            ))}
            <Button
              variant="outline"
              onClick={() =>
                handleChange("certificacoes", [...config.certificacoes, ""])
              }
            >
              Adicionar Certificação
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button onClick={handleSave} className="px-8">
          <Save className="mr-2 h-4 w-4" />
          Salvar Configurações
        </Button>
      </div>
    </div>
  );
}
