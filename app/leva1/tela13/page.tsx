"use client";

import { useState } from "react";
import {
  User,
  Camera,
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
  Instagram,
  Youtube,
  Twitter,
  Facebook,
  TikTok,
  Twitch,
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

export default function ConfiguracaoAvancadaInfluencer() {
  const [config, setConfig] = useState({
    // Informações Pessoais
    nome: "Ana Silva",
    email: "ana.silva@email.com",
    telefone: "(11) 98765-4321",
    bio: "Influenciadora de lifestyle e moda com 5 anos de experiência.",
    dataNascimento: "1995-05-15",
    genero: "feminino",
    idiomas: ["portugues", "ingles"],
    redesSociais: {
      instagram: "@anasilva",
      youtube: "AnaSilvaOficial",
      tiktok: "@anasilva",
      twitter: "@anasilva",
      facebook: "AnaSilvaOficial",
      twitch: "anasilva",
    },

    // Preferências de Colaboração
    nichos: ["moda", "beleza", "lifestyle"],
    tiposConteudo: ["fotos", "videos", "reels", "stories"],
    marcasPreferidas: ["Marca A", "Marca B", "Marca C"],
    valoresColaboracao: {
      post: 500,
      story: 200,
      video: 1000,
    },
    disponibilidadeViagens: true,
    raioAtuacaoPresencial: 50,
    aceitaProdutos: true,
    aceitaPermuta: true,

    // Métricas e Audiência
    seguidoresInstagram: 100000,
    inscritosYoutube: 50000,
    seguidoresTikTok: 75000,
    engagementRate: 3.5,
    faixaEtariaAudiencia: "18-34",
    generoAudiencia: {
      feminino: 65,
      masculino: 35,
    },
    localizacaoAudiencia: ["São Paulo", "Rio de Janeiro", "Belo Horizonte"],

    // Equipamentos
    possuiCameraProf: true,
    possuiIluminacao: true,
    possuiMicrofone: true,
    possuiSoftwareEdicao: true,

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
    documentosVerificacao: {
      cpf: "",
      identidade: "",
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
        Configurações Avançadas do Influenciador
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Instagram className="h-5 w-5 text-pink-600" />
                <Input
                  placeholder="Instagram"
                  value={config.redesSociais.instagram}
                  onChange={(e) =>
                    handleNestedChange(
                      "redesSociais",
                      "instagram",
                      e.target.value,
                    )
                  }
                />
              </div>
              <div className="flex items-center space-x-2">
                <Youtube className="h-5 w-5 text-red-600" />
                <Input
                  placeholder="YouTube"
                  value={config.redesSociais.youtube}
                  onChange={(e) =>
                    handleNestedChange(
                      "redesSociais",
                      "youtube",
                      e.target.value,
                    )
                  }
                />
              </div>
              <div className="flex items-center space-x-2">
                <TikTok className="h-5 w-5 text-black" />
                <Input
                  placeholder="TikTok"
                  value={config.redesSociais.tiktok}
                  onChange={(e) =>
                    handleNestedChange("redesSociais", "tiktok", e.target.value)
                  }
                />
              </div>
              <div className="flex items-center space-x-2">
                <Twitter className="h-5 w-5 text-blue-400" />
                <Input
                  placeholder="Twitter"
                  value={config.redesSociais.twitter}
                  onChange={(e) =>
                    handleNestedChange(
                      "redesSociais",
                      "twitter",
                      e.target.value,
                    )
                  }
                />
              </div>
              <div className="flex items-center space-x-2">
                <Facebook className="h-5 w-5 text-blue-600" />
                <Input
                  placeholder="Facebook"
                  value={config.redesSociais.facebook}
                  onChange={(e) =>
                    handleNestedChange(
                      "redesSociais",
                      "facebook",
                      e.target.value,
                    )
                  }
                />
              </div>
              <div className="flex items-center space-x-2">
                <Twitch className="h-5 w-5 text-purple-600" />
                <Input
                  placeholder="Twitch"
                  value={config.redesSociais.twitch}
                  onChange={(e) =>
                    handleNestedChange("redesSociais", "twitch", e.target.value)
                  }
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Preferências de Colaboração */}
      <Card className="shadow-lg">
        <CardHeader className="bg-primary/10">
          <CardTitle className="text-2xl text-primary flex items-center">
            <Briefcase className="mr-2 h-6 w-6" />
            Preferências de Colaboração
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          <div className="space-y-2">
            <Label>Nichos</Label>
            <div className="flex flex-wrap gap-2">
              {[
                "moda",
                "beleza",
                "lifestyle",
                "tecnologia",
                "games",
                "fitness",
                "culinária",
                "viagem",
              ].map((nicho) => (
                <div key={nicho} className="flex items-center space-x-2">
                  <Checkbox
                    id={`nicho-${nicho}`}
                    checked={config.nichos.includes(nicho)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        handleChange("nichos", [...config.nichos, nicho]);
                      } else {
                        handleChange(
                          "nichos",
                          config.nichos.filter((n) => n !== nicho),
                        );
                      }
                    }}
                  />
                  <Label htmlFor={`nicho-${nicho}`}>
                    {nicho.charAt(0).toUpperCase() + nicho.slice(1)}
                  </Label>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <Label>Tipos de Conteúdo</Label>
            <div className="flex flex-wrap gap-2">
              {["fotos", "videos", "reels", "stories", "lives", "posts"].map(
                (tipo) => (
                  <div key={tipo} className="flex items-center space-x-2">
                    <Checkbox
                      id={`tipo-${tipo}`}
                      checked={config.tiposConteudo.includes(tipo)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          handleChange("tiposConteudo", [
                            ...config.tiposConteudo,
                            tipo,
                          ]);
                        } else {
                          handleChange(
                            "tiposConteudo",
                            config.tiposConteudo.filter((t) => t !== tipo),
                          );
                        }
                      }}
                    />
                    <Label htmlFor={`tipo-${tipo}`}>
                      {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
                    </Label>
                  </div>
                ),
              )}
            </div>
          </div>
          <div className="space-y-2">
            <Label>Marcas Preferidas</Label>
            <div className="flex flex-wrap gap-2">
              {config.marcasPreferidas.map((marca, index) => (
                <Input
                  key={index}
                  placeholder={`Marca ${index + 1}`}
                  value={marca}
                  onChange={(e) => {
                    const newMarcas = [...config.marcasPreferidas];
                    newMarcas[index] = e.target.value;
                    handleChange("marcasPreferidas", newMarcas);
                  }}
                  className="w-full sm:w-auto"
                />
              ))}
              <Button
                variant="outline"
                onClick={() =>
                  handleChange("marcasPreferidas", [
                    ...config.marcasPreferidas,
                    "",
                  ])
                }
              >
                Adicionar Marca
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <Label>Valores de Colaboração (R$)</Label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="valorPost">Post</Label>
                <Input
                  id="valorPost"
                  type="number"
                  value={config.valoresColaboracao.post}
                  onChange={(e) =>
                    handleNestedChange(
                      "valoresColaboracao",
                      "post",
                      Number(e.target.value),
                    )
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="valorStory">Story</Label>
                <Input
                  id="valorStory"
                  type="number"
                  value={config.valoresColaboracao.story}
                  onChange={(e) =>
                    handleNestedChange(
                      "valoresColaboracao",
                      "story",
                      Number(e.target.value),
                    )
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="valorVideo">Vídeo</Label>
                <Input
                  id="valorVideo"
                  type="number"
                  value={config.valoresColaboracao.video}
                  onChange={(e) =>
                    handleNestedChange(
                      "valoresColaboracao",
                      "video",
                      Number(e.target.value),
                    )
                  }
                />
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="disponibilidadeViagens"
              checked={config.disponibilidadeViagens}
              onCheckedChange={(checked) =>
                handleChange("disponibilidadeViagens", checked)
              }
            />
            <Label htmlFor="disponibilidadeViagens">
              Disponibilidade para Viagens
            </Label>
          </div>
          <div className="space-y-2">
            <Label htmlFor="raioAtuacaoPresencial">
              Raio de Atuação Presencial (km)
            </Label>
            <Slider
              id="raioAtuacaoPresencial"
              min={0}
              max={500}
              step={10}
              value={[config.raioAtuacaoPresencial]}
              onValueChange={([value]) =>
                handleChange("raioAtuacaoPresencial", value)
              }
            />
            <div className="text-right text-sm text-muted-foreground">
              {config.raioAtuacaoPresencial} km
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="aceitaProdutos"
              checked={config.aceitaProdutos}
              onCheckedChange={(checked) =>
                handleChange("aceitaProdutos", checked)
              }
            />
            <Label htmlFor="aceitaProdutos">
              Aceita Produtos como Pagamento
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="aceitaPermuta"
              checked={config.aceitaPermuta}
              onCheckedChange={(checked) =>
                handleChange("aceitaPermuta", checked)
              }
            />
            <Label htmlFor="aceitaPermuta">Aceita Permuta</Label>
          </div>
        </CardContent>
      </Card>

      {/* Métricas e Audiência */}
      <Card className="shadow-lg">
        <CardHeader className="bg-primary/10">
          <CardTitle className="text-2xl text-primary flex items-center">
            <Star className="mr-2 h-6 w-6" />
            Métricas e Audiência
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="seguidoresInstagram">Seguidores Instagram</Label>
              <Input
                id="seguidoresInstagram"
                type="number"
                value={config.seguidoresInstagram}
                onChange={(e) =>
                  handleChange("seguidoresInstagram", Number(e.target.value))
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="inscritosYoutube">Inscritos YouTube</Label>
              <Input
                id="inscritosYoutube"
                type="number"
                value={config.inscritosYoutube}
                onChange={(e) =>
                  handleChange("inscritosYoutube", Number(e.target.value))
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="seguidoresTikTok">Seguidores TikTok</Label>
              <Input
                id="seguidoresTikTok"
                type="number"
                value={config.seguidoresTikTok}
                onChange={(e) =>
                  handleChange("seguidoresTikTok", Number(e.target.value))
                }
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="engagementRate">Taxa de Engajamento (%)</Label>
            <Input
              id="engagementRate"
              type="number"
              step="0.1"
              value={config.engagementRate}
              onChange={(e) =>
                handleChange("engagementRate", Number(e.target.value))
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="faixaEtariaAudiencia">
              Faixa Etária Principal da Audiência
            </Label>
            <Select
              value={config.faixaEtariaAudiencia}
              onValueChange={(value) =>
                handleChange("faixaEtariaAudiencia", value)
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione a faixa etária" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="13-17">13-17 anos</SelectItem>
                <SelectItem value="18-24">18-24 anos</SelectItem>
                <SelectItem value="25-34">25-34 anos</SelectItem>
                <SelectItem value="35-44">35-44 anos</SelectItem>
                <SelectItem value="45-54">45-54 anos</SelectItem>
                <SelectItem value="55+">55+ anos</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Gênero da Audiência (%)</Label>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="generoFeminino">Feminino</Label>
                <Input
                  id="generoFeminino"
                  type="number"
                  value={config.generoAudiencia.feminino}
                  onChange={(e) =>
                    handleNestedChange(
                      "generoAudiencia",
                      "feminino",
                      Number(e.target.value),
                    )
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="generoMasculino">Masculino</Label>
                <Input
                  id="generoMasculino"
                  type="number"
                  value={config.generoAudiencia.masculino}
                  onChange={(e) =>
                    handleNestedChange(
                      "generoAudiencia",
                      "masculino",
                      Number(e.target.value),
                    )
                  }
                />
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <Label>Principais Localizações da Audiência</Label>
            <div className="flex flex-wrap gap-2">
              {config.localizacaoAudiencia.map((local, index) => (
                <Input
                  key={index}
                  placeholder={`Localização ${index + 1}`}
                  value={local}
                  onChange={(e) => {
                    const newLocais = [...config.localizacaoAudiencia];
                    newLocais[index] = e.target.value;
                    handleChange("localizacaoAudiencia", newLocais);
                  }}
                  className="w-full sm:w-auto"
                />
              ))}
              <Button
                variant="outline"
                onClick={() =>
                  handleChange("localizacaoAudiencia", [
                    ...config.localizacaoAudiencia,
                    "",
                  ])
                }
              >
                Adicionar Localização
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Equipamentos */}
      <Card className="shadow-lg">
        <CardHeader className="bg-primary/10">
          <CardTitle className="text-2xl text-primary flex items-center">
            <Camera className="mr-2 h-6 w-6" />
            Equipamentos
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          <div className="flex items-center space-x-2">
            <Switch
              id="possuiCameraProf"
              checked={config.possuiCameraProf}
              onCheckedChange={(checked) =>
                handleChange("possuiCameraProf", checked)
              }
            />
            <Label htmlFor="possuiCameraProf">Possui Câmera Profissional</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="possuiIluminacao"
              checked={config.possuiIluminacao}
              onCheckedChange={(checked) =>
                handleChange("possuiIluminacao", checked)
              }
            />
            <Label htmlFor="possuiIluminacao">
              Possui Equipamento de Iluminação
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="possuiMicrofone"
              checked={config.possuiMicrofone}
              onCheckedChange={(checked) =>
                handleChange("possuiMicrofone", checked)
              }
            />
            <Label htmlFor="possuiMicrofone">
              Possui Microfone Profissional
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="possuiSoftwareEdicao"
              checked={config.possuiSoftwareEdicao}
              onCheckedChange={(checked) =>
                handleChange("possuiSoftwareEdicao", checked)
              }
            />
            <Label htmlFor="possuiSoftwareEdicao">
              Possui Software de Edição
            </Label>
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
            <Label>Documentos de Verificação</Label>
            <Input
              placeholder="CPF"
              value={config.documentosVerificacao.cpf}
              onChange={(e) =>
                handleNestedChange(
                  "documentosVerificacao",
                  "cpf",
                  e.target.value,
                )
              }
            />
            <Input
              placeholder="RG ou CNH"
              value={config.documentosVerificacao.identidade}
              onChange={(e) =>
                handleNestedChange(
                  "documentosVerificacao",
                  "identidade",
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
