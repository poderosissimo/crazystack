"use client";

import { useState } from "react";
import {
  User,
  Scissors,
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

export default function ConfiguracaoAvancadaProfissionalBeleza() {
  const [config, setConfig] = useState({
    // Informações Pessoais
    nome: "Maria Silva",
    email: "maria.silva@email.com",
    telefone: "(11) 98765-4321",
    bio: "Cabeleireira e maquiadora profissional com 10 anos de experiência.",
    dataNascimento: "1985-05-15",
    genero: "feminino",
    idiomas: ["portugues", "ingles"],
    redesSociais: {
      instagram: "",
      facebook: "",
      tiktok: "",
    },

    // Preferências de Serviço
    tipoEstabelecimento: "salao",
    especialidades: ["corte", "coloracao", "penteados"],
    atendeDomicilio: true,
    raioAtuacao: 10,
    horariosDisponiveis: ["manha", "tarde"],
    precoMinimo: 50,
    duracaoMediaAtendimento: 60,
    aceitaCartao: true,
    aceitaDinheiro: true,
    aceitaPix: true,

    // Equipamentos e Produtos
    possuiCadeiraPortatil: false,
    possuiKitMaquiagem: true,
    marcasProdutos: ["Loreal", "Kerastase", "MAC"],

    // Avaliações e Qualidade
    notaMinimaAceitavel: 4,
    respostaAutomaticaAvaliacao: true,
    tempoMaximoResposta: 24,

    // Notificações
    notificacoesApp: true,
    notificacoesEmail: false,
    notificacoesSMS: false,
    frequenciaResumoSemanal: "segunda",
    notificacaoNovaOportunidade: true,

    // Segurança
    verificacaoDuasEtapas: true,
    backupAutomaticoDados: true,
    compartilharLocalizacaoTempoReal: false,

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
    registroProfissional: {
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
        Configurações Avançadas do Profissional de Beleza
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
              placeholder="Instagram"
              value={config.redesSociais.instagram}
              onChange={(e) =>
                handleNestedChange("redesSociais", "instagram", e.target.value)
              }
            />
            <Input
              placeholder="Facebook"
              value={config.redesSociais.facebook}
              onChange={(e) =>
                handleNestedChange("redesSociais", "facebook", e.target.value)
              }
            />
            <Input
              placeholder="TikTok"
              value={config.redesSociais.tiktok}
              onChange={(e) =>
                handleNestedChange("redesSociais", "tiktok", e.target.value)
              }
            />
          </div>
        </CardContent>
      </Card>

      {/* Preferências de Serviço */}
      <Card className="shadow-lg">
        <CardHeader className="bg-primary/10">
          <CardTitle className="text-2xl text-primary flex items-center">
            <Scissors className="mr-2 h-6 w-6" />
            Preferências de Serviço
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="tipoEstabelecimento">Tipo de Estabelecimento</Label>
            <Select
              value={config.tipoEstabelecimento}
              onValueChange={(value) =>
                handleChange("tipoEstabelecimento", value)
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione o tipo de estabelecimento" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="salao">Salão de Beleza</SelectItem>
                <SelectItem value="barbearia">Barbearia</SelectItem>
                <SelectItem value="autonomo">Autônomo</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Especialidades</Label>
            <div className="flex flex-wrap gap-2">
              {[
                "corte",
                "coloracao",
                "penteados",
                "manicure",
                "pedicure",
                "maquiagem",
                "barba",
              ].map((esp) => (
                <div key={esp} className="flex items-center space-x-2">
                  <Checkbox
                    id={`esp-${esp}`}
                    checked={config.especialidades.includes(esp)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        handleChange("especialidades", [
                          ...config.especialidades,
                          esp,
                        ]);
                      } else {
                        handleChange(
                          "especialidades",
                          config.especialidades.filter((e) => e !== esp),
                        );
                      }
                    }}
                  />
                  <Label htmlFor={`esp-${esp}`}>
                    {esp.charAt(0).toUpperCase() + esp.slice(1)}
                  </Label>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="atendeDomicilio"
              checked={config.atendeDomicilio}
              onCheckedChange={(checked) =>
                handleChange("atendeDomicilio", checked)
              }
            />
            <Label htmlFor="atendeDomicilio">Atende a domicílio</Label>
          </div>
          <div className="space-y-2">
            <Label htmlFor="raioAtuacao">Raio de Atuação (km)</Label>
            <Slider
              id="raioAtuacao"
              min={1}
              max={50}
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
            <Label htmlFor="duracaoMediaAtendimento">
              Duração Média do Atendimento (minutos)
            </Label>
            <Input
              id="duracaoMediaAtendimento"
              type="number"
              value={config.duracaoMediaAtendimento}
              onChange={(e) =>
                handleChange("duracaoMediaAtendimento", Number(e.target.value))
              }
            />
          </div>
          <div className="space-y-2">
            <Label>Formas de Pagamento Aceitas</Label>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <Switch
                  id="aceitaCartao"
                  checked={config.aceitaCartao}
                  onCheckedChange={(checked) =>
                    handleChange("aceitaCartao", checked)
                  }
                />
                <Label htmlFor="aceitaCartao">Cartão</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="aceitaDinheiro"
                  checked={config.aceitaDinheiro}
                  onCheckedChange={(checked) =>
                    handleChange("aceitaDinheiro", checked)
                  }
                />
                <Label htmlFor="aceitaDinheiro">Dinheiro</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="aceitaPix"
                  checked={config.aceitaPix}
                  onCheckedChange={(checked) =>
                    handleChange("aceitaPix", checked)
                  }
                />
                <Label htmlFor="aceitaPix">PIX</Label>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Equipamentos e Produtos */}
      <Card className="shadow-lg">
        <CardHeader className="bg-primary/10">
          <CardTitle className="text-2xl text-primary flex items-center">
            <Briefcase className="mr-2 h-6 w-6" />
            Equipamentos e Produtos
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          <div className="flex items-center space-x-2">
            <Switch
              id="possuiCadeiraPortatil"
              checked={config.possuiCadeiraPortatil}
              onCheckedChange={(checked) =>
                handleChange("possuiCadeiraPortatil", checked)
              }
            />
            <Label htmlFor="possuiCadeiraPortatil">
              Possui cadeira portátil
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="possuiKitMaquiagem"
              checked={config.possuiKitMaquiagem}
              onCheckedChange={(checked) =>
                handleChange("possuiKitMaquiagem", checked)
              }
            />
            <Label htmlFor="possuiKitMaquiagem">Possui kit de maquiagem</Label>
          </div>
          <div className="space-y-2">
            <Label>Marcas de Produtos Utilizadas</Label>
            <div className="flex flex-wrap gap-2">
              {["Loreal", "Kerastase", "MAC", "Wella", "Schwarzkopf"].map(
                (marca) => (
                  <div key={marca} className="flex items-center space-x-2">
                    <Checkbox
                      id={`marca-${marca}`}
                      checked={config.marcasProdutos.includes(marca)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          handleChange("marcasProdutos", [
                            ...config.marcasProdutos,
                            marca,
                          ]);
                        } else {
                          handleChange(
                            "marcasProdutos",
                            config.marcasProdutos.filter((m) => m !== marca),
                          );
                        }
                      }}
                    />
                    <Label htmlFor={`marca-${marca}`}>{marca}</Label>
                  </div>
                ),
              )}
            </div>
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
                <SelectItem value="ingles">Inglês</SelectItem>
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
            <Label>Registro Profissional</Label>
            <Input
              placeholder="Número do Registro"
              value={config.registroProfissional.numero}
              onChange={(e) =>
                handleNestedChange(
                  "registroProfissional",
                  "numero",
                  e.target.value,
                )
              }
            />
            <Input
              type="date"
              placeholder="Validade do Registro"
              value={config.registroProfissional.validade}
              onChange={(e) =>
                handleNestedChange(
                  "registroProfissional",
                  "validade",
                  e.target.value,
                )
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
