"use client"

import { useState } from "react"
import {
  User,
  Building,
  Globe,
  Sliders,
  DollarSign,
  Bell,
  Shield,
  Save,
  Briefcase,
  Clipboard,
  Star,
  Settings,
  FileText,
  Palette,
  Code,
  Users,
  BarChart,
  HelpCircle,
  Mail,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"

export default function ConfiguracaoAvancadaSaaSWhiteLabel() {
  const [config, setConfig] = useState({
    // Informações da Empresa
    nomeEmpresa: "TechSolutions Inc.",
    email: "contato@techsolutions.com",
    telefone: "(11) 98765-4321",
    site: "https://www.techsolutions.com",
    descricao: "Fornecedor líder de soluções SaaS white-label para empresas de todos os tamanhos.",
    dataFundacao: "2010-01-01",
    tamanhoEmpresa: "50-100",
    setorAtuacao: "tecnologia",

    // Configurações do Produto
    nomeProduto: "TechSaaS",
    versaoAtual: "2.5.0",
    tiposSolucao: ["crm", "erp", "ecommerce"],
    recursosDisponiveis: ["gestaoClientes", "faturamento", "relatorios", "integracao"],
    limitesPlanos: {
      basico: {
        usuarios: 10,
        armazenamento: 5, // GB
        chamadosAPI: 1000, // por dia
      },
      pro: {
        usuarios: 50,
        armazenamento: 50, // GB
        chamadosAPI: 10000, // por dia
      },
      enterprise: {
        usuarios: "Ilimitado",
        armazenamento: 500, // GB
        chamadosAPI: 100000, // por dia
      },
    },
    integracoesTerceiros: ["zapier", "slack", "google"],

    // Personalização White-Label
    permitirPersonalizacaoLogo: true,
    permitirPersonalizacaoCores: true,
    permitirPersonalizacaoDominio: true,
    permitirPersonalizacaoEmails: true,

    // Preços e Faturamento
    modeloPreco: "assinatura",
    moeda: "BRL",
    precosPadrao: {
      basico: 99.90,
      pro: 299.90,
      enterprise: 999.90,
    },
    frequenciaCobranca: ["mensal", "anual"],
    metodoPagamentoPadrao: "cartao",
    ofereceTesteGratis: true,
    duracaoTesteGratis: 14, // dias

    // Suporte e Atendimento
    canalSuporte: ["email", "chat", "telefone"],
    horasSuporteBasico: "8x5",
    horasSuportePro: "24x5",
    horasSuporteEnterprise: "24x7",
    tempoRespostaSLA: {
      basico: 24, // horas
      pro: 8, // horas
      enterprise: 2, // horas
    },
    ofereceSuportePersonalizado: true,

    // Segurança e Conformidade
    certificacoesSeg: ["iso27001", "gdpr", "hipaa"],
    autenticacaoDoisFatores: true,
    criptografiaEmRepouso: true,
    criptografiaEmTransito: true,
    politicaRetencaoDados: 365, // dias

    // Atualizações e Manutenção
    frequenciaAtualizacoes: "mensal",
    janelaManutencao: "domingo, 02:00-06:00",
    versaoMinima: "2.0.0",
    politicaDeprecacao: 180, // dias

    // Métricas e Analytics
    metricas: ["mrrChurn", "ltv", "cac"],
    dashboardPersonalizavel: true,
    exportacaoRelatorios: ["csv", "pdf", "api"],

    // Onboarding e Treinamento
    ofereceTreinamentoInicial: true,
    materiaisTreinamento: ["videos", "documentacao", "webinars"],
    tempoMedioImplementacao: 30, // dias

    // Termos e Condições
    termoServicoURL: "https://www.techsolutions.com/termos",
    politicaPrivacidadeURL: "https://www.techsolutions.com/privacidade",
    contratoSLAURL: "https://www.techsolutions.com/sla",

    // Notificações
    notificacoesEmail: true,
    notificacoesSMS: false,
    notificacoesPlataforma: true,
    tiposNotificacao: ["atualizacoes", "manutencao", "seguranca", "faturamento"],

    // Preferências de Plataforma
    idiomasPlatforma: ["portugues", "ingles", "espanhol"],
    temaEscuro: false,
    fusoHorarioPadrao: "America/Sao_Paulo",
  })

  const handleChange = (field: string, value: any) => {
    setConfig((prev) => ({ ...prev, [field]: value }))
  }

  const handleNestedChange = (parent: string, field: string, value: any) => {
    setConfig((prev: any) => ({
      ...prev,
      [parent]: {
        ...prev[parent],
        [field]: value,
      },
    }))
  }

  const handleSave = () => {
    console.log("Configurações salvas:", config)
    // Aqui você implementaria a lógica para salvar as configurações no backend
  }

  return (
    <div className="container mx-auto p-4 space-y-6 bg-background min-h-screen">
      <h1 className="text-3xl font-bold text-primary text-center mb-6">
        Configurações Avançadas do SaaS White-Label
      </h1>

      {/* Informações da Empresa */}
      <Card className="shadow-lg">
        <CardHeader className="bg-primary/10">
          <CardTitle className="text-2xl text-primary flex items-center">
            <Building className="mr-2 h-6 w-6" />
            Informações da Empresa
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          <div className="flex items-center space-x-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src="/placeholder.svg" alt={config.nomeEmpresa} />
              <AvatarFallback>{config.nomeEmpresa.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
            </Avatar>
            <Button variant="outline">Alterar Logo</Button>
          </div>
          <div className="space-y-2">
            <Label htmlFor="nomeEmpresa">Nome da Empresa</Label>
            <Input
              id="nomeEmpresa"
              value={config.nomeEmpresa}
              onChange={(e) => handleChange("nomeEmpresa", e.target.value)}
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
            <Label htmlFor="site">Site</Label>
            <Input
              id="site"
              value={config.site}
              onChange={(e) => handleChange("site", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="descricao">Descrição</Label>
            <Textarea
              id="descricao"
              value={config.descricao}
              onChange={(e) => handleChange("descricao", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="dataFundacao">Data de Fundação</Label>
            <Input
              id="dataFundacao"
              type="date"
              value={config.dataFundacao}
              onChange={(e) => handleChange("dataFundacao", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="tamanhoEmpresa">Tamanho da Empresa</Label>
            <Select
              value={config.tamanhoEmpresa}
              onValueChange={(value) => handleChange("tamanhoEmpresa", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione o tamanho da empresa" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-10">1-10 funcionários</SelectItem>
                <SelectItem value="11-50">11-50 funcionários</SelectItem>
                <SelectItem value="50-100">50-100 funcionários</SelectItem>
                <SelectItem value="101-500">101-500 funcionários</SelectItem>
                <SelectItem value="500+">Mais de 500 funcionários</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="setorAtuacao">Setor de Atuação</Label>
            <Input
              id="setorAtuacao"
              value={config.setorAtuacao}
              onChange={(e) => handleChange("setorAtuacao", e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Configurações do Produto */}
      <Card className="shadow-lg">
        <CardHeader className="bg-primary/10">
          <CardTitle className="text-2xl text-primary flex items-center">
            <Sliders className="mr-2 h-6 w-6" />
            Configurações do Produto
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="nomeProduto">Nome do Produto</Label>
            <Input
              id="nomeProduto"
              value={config.nomeProduto}
              onChange={(e) => handleChange("nomeProduto", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="versaoAtual">Versão Atual</Label>
            <Input
              id="versaoAtual"
              value={config.versaoAtual}
              onChange={(e) => handleChange("versaoAtual", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Tipos de Solução</Label>
            <div className="flex flex-wrap gap-2">
              {["crm", "erp", "ecommerce", "helpdesk", "marketing"].map((tipo) => (
                <div key={tipo} className="flex items-center space-x-2">
                  <Checkbox
                    id={`tipo-${tipo}`}
                    checked={config.tiposSolucao.includes(tipo)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        handleChange("tiposSolucao", [...config.tiposSolucao, tipo])
                      } else {
                        handleChange("tiposSolucao", config.tiposSolucao.filter((t) => t !== tipo))
                      }
                    }}
                  />
                  <Label htmlFor={`tipo-${tipo}`}>
                    {tipo.toUpperCase()}
                  </Label>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <Label>Recursos Disponíveis</Label>
            <div className="flex flex-wrap gap-2">
              {["gestaoClientes", "faturamento", "relatorios", "integracao", "automacao"].map((recurso) => (
                <div key={recurso} className="flex items-center space-x-2">
                  <Checkbox
                    id={`recurso-${recurso}`}
                    checked={config.recursosDisponiveis.includes(recurso)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        handleChange("recursosDisponiveis", [...config.recursosDisponiveis, recurso])
                      } else {
                        handleChange("recursosDisponiveis", config.recursosDisponiveis.filter((r) => r !== recurso))
                      }
                    }}
                  />
                  <Label htmlFor={`recurso-${recurso}`}>
                    {recurso.charAt(0).toUpperCase() + recurso.slice(1)}
                  </Label>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <Label>Limites dos Planos</Label>
            {Object.entries(config.limitesPlanos).map(([plano, limites]) => (
              <div key={plano} className="space-y-2">
                <h3 className="font-semibold">{plano.charAt(0).toUpperCase() + plano.slice(1)}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {Object.entries(limites).map(([limite, valor]) => (
                    <div key={limite}   className="space-y-1">
                      <Label htmlFor={`${plano}-${limite}`}>{limite.charAt(0).toUpperCase() + limite.slice(1)}</Label>
                      <Input
                        id={`${plano}-${limite}`}
                        value={valor}
                        onChange={(e) => handleNestedChange("limitesPlanos", plano, {
                          ...config.limitesPlanos[plano],
                          [limite]: e.target.value
                        })}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <Label>Integrações com Terceiros</Label>
            <div className="flex flex-wrap gap-2">
              {["zapier", "slack", "google", "salesforce", "hubspot"].map((integracao) => (
                <div key={integracao} className="flex items-center space-x-2">
                  <Checkbox
                    id={`integracao-${integracao}`}
                    checked={config.integracoesTerceiros.includes(integracao)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        handleChange("integracoesTerceiros", [...config.integracoesTerceiros, integracao])
                      } else {
                        handleChange("integracoesTerceiros", config.integracoesTerceiros.filter((i) => i !== integracao))
                      }
                    }}
                  />
                  <Label htmlFor={`integracao-${integracao}`}>
                    {integracao.charAt(0).toUpperCase() + integracao.slice(1)}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Personalização White-Label */}
      <Card className="shadow-lg">
        <CardHeader className="bg-primary/10">
          <CardTitle className="text-2xl text-primary flex items-center">
            <Palette className="mr-2 h-6 w-6" />
            Personalização White-Label
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          <div className="flex items-center space-x-2">
            <Switch
              id="permitirPersonalizacaoLogo"
              checked={config.permitirPersonalizacaoLogo}
              onCheckedChange={(checked) => handleChange("permitirPersonalizacaoLogo", checked)}
            />
            <Label htmlFor="permitirPersonalizacaoLogo">Permitir Personalização de Logo</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="permitirPersonalizacaoCores"
              checked={config.permitirPersonalizacaoCores}
              onCheckedChange={(checked) => handleChange("permitirPersonalizacaoCores", checked)}
            />
            <Label htmlFor="permitirPersonalizacaoCores">Permitir Personalização de Cores</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="permitirPersonalizacaoDominio"
              checked={config.permitirPersonalizacaoDominio}
              onCheckedChange={(checked) => handleChange("permitirPersonalizacaoDominio", checked)}
            />
            <Label htmlFor="permitirPersonalizacaoDominio">Permitir Personalização de Domínio</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="permitirPersonalizacaoEmails"
              checked={config.permitirPersonalizacaoEmails}
              onCheckedChange={(checked) => handleChange("permitirPersonalizacaoEmails", checked)}
            />
            <Label htmlFor="permitirPersonalizacaoEmails">Permitir Personalização de E-mails</Label>
          </div>
        </CardContent>
      </Card>

      {/* Preços e Faturamento */}
      <Card className="shadow-lg">
        <CardHeader className="bg-primary/10">
          <CardTitle className="text-2xl text-primary flex items-center">
            <DollarSign className="mr-2 h-6 w-6" />
            Preços e Faturamento
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="modeloPreco">Modelo de Preço</Label>
            <Select
              value={config.modeloPreco}
              onValueChange={(value) => handleChange("modeloPreco", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione o modelo de preço" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="assinatura">Assinatura</SelectItem>
                <SelectItem value="payAsYouGo">Pay as You Go</SelectItem>
                <SelectItem value="hibrido">Híbrido</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="moeda">Moeda</Label>
            <Select
              value={config.moeda}
              onValueChange={(value) => handleChange("moeda", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione a moeda" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="BRL">Real (BRL)</SelectItem>
                <SelectItem value="USD">Dólar (USD)</SelectItem>
                <SelectItem value="EUR">Euro (EUR)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Preços Padrão</Label>
            {Object.entries(config.precosPadrao).map(([plano, preco]) => (
              <div key={plano} className="flex items-center space-x-2">
                <Label htmlFor={`preco-${plano}`}>{plano.charAt(0).toUpperCase() + plano.slice(1)}</Label>
                <Input
                  id={`preco-${plano}`}
                  type="number"
                  value={preco}
                  onChange={(e) => handleNestedChange("precosPadrao", plano, Number(e.target.value))}
                />
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <Label>Frequência de Cobrança</Label>
            <div className="flex flex-wrap gap-2">
              {["mensal", "trimestral", "semestral", "anual"].map((freq) => (
                <div key={freq} className="flex items-center space-x-2">
                  <Checkbox
                    id={`freq-${freq}`}
                    checked={config.frequenciaCobranca.includes(freq)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        handleChange("frequenciaCobranca", [...config.frequenciaCobranca, freq])
                      } else {
                        handleChange("frequenciaCobranca", config.frequenciaCobranca.filter((f) => f !== freq))
                      }
                    }}
                  />
                  <Label htmlFor={`freq-${freq}`}>
                    {freq.charAt(0).toUpperCase() + freq.slice(1)}
                  </Label>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="metodoPagamentoPadrao">Método de Pagamento Padrão</Label>
            <Select
              value={config.metodoPagamentoPadrao}
              onValueChange={(value) => handleChange("metodoPagamentoPadrao", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione o método de pagamento padrão" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cartao">Cartão de Crédito</SelectItem>
                <SelectItem value="boleto">Boleto</SelectItem>
                <SelectItem value="pix">PIX</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="ofereceTesteGratis"
              checked={config.ofereceTesteGratis}
              onCheckedChange={(checked) => handleChange("ofereceTesteGratis", checked)}
            />
            <Label htmlFor="ofereceTesteGratis">Oferece Teste Grátis</Label>
          </div>
          {config.ofereceTesteGratis && (
            <div className="space-y-2">
              <Label htmlFor="duracaoTesteGratis">Duração do Teste Grátis (dias)</Label>
              <Input
                id="duracaoTesteGratis"
                type="number"
                value={config.duracaoTesteGratis}
                onChange={(e) => handleChange("duracaoTesteGratis", Number(e.target.value))}
              />
            </div>
          )}
        </CardContent>
      </Card>

      {/* Suporte e Atendimento */}
      <Card className="shadow-lg">
        <CardHeader className="bg-primary/10">
          <CardTitle className="text-2xl text-primary flex items-center">
            <HelpCircle className="mr-2 h-6 w-6" />
            Suporte e Atendimento
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          <div className="space-y-2">
            <Label>Canais de Suporte</Label>
            <div className="flex flex-wrap gap-2">
              {["email", "chat", "telefone", "ticketing"].map((canal) => (
                <div key={canal} className="flex items-center space-x-2">
                  <Checkbox
                    id={`canal-${canal}`}
                    checked={config.canalSuporte.includes(canal)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        handleChange("canalSuporte", [...config.canalSuporte, canal])
                      } else {
                        handleChange("canalSuporte", config.canalSuporte.filter((c) => c !== canal))
                      }
                    }}
                  />
                  <Label htmlFor={`canal-${canal}`}>
                    {canal.charAt(0).toUpperCase() + canal.slice(1)}
                  </Label>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="horasSuporteBasico">Horas de Suporte - Plano Básico</Label>
            <Input
              id="horasSuporteBasico"
              value={config.horasSuporteBasico}
              onChange={(e) => handleChange("horasSuporteBasico", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="horasSuportePro">Horas de Suporte - Plano Pro</Label>
            <Input
              id="horasSuportePro"
              value={config.horasSuportePro}
              onChange={(e) => handleChange("horasSuportePro", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="horasSuporteEnterprise">Horas de Suporte - Plano Enterprise</Label>
            <Input
              id="horasSuporteEnterprise"
              value={config.horasSuporteEnterprise}
              onChange={(e) => handleChange("horasSuporteEnterprise", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Tempo de Resposta SLA (horas)</Label>
            {Object.entries(config.tempoRespostaSLA).map(([plano, tempo]) => (
              <div key={plano} className="flex items-center space-x-2">
                <Label htmlFor={`sla-${plano}`}>{plano.charAt(0).toUpperCase() + plano.slice(1)}</Label>
                <Input
                  id={`sla-${plano}`}
                  type="number"
                  value={tempo}
                  onChange={(e) => handleNestedChange("tempoRespostaSLA", plano, Number(e.target.value))}
                />
              </div>
            ))}
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="ofereceSuportePersonalizado"
              checked={config.ofereceSuportePersonalizado}
              onCheckedChange={(checked) => handleChange("ofereceSuportePersonalizado", checked)}
            />
            <Label htmlFor="ofereceSuportePersonalizado">Oferece Suporte Personalizado</Label>
          </div>
        </CardContent>
      </Card>

      {/* Segurança e Conformidade */}
      <Card className="shadow-lg">
        <CardHeader className="bg-primary/10">
          <CardTitle className="text-2xl text-primary flex items-center">
            <Shield className="mr-2 h-6 w-6" />
            Segurança e Conformidade
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          <div className="space-y-2">
            <Label>Certificações de Segurança</Label>
            <div className="flex flex-wrap gap-2">
              {["iso27001", "gdpr", "hipaa", "pci-dss", "soc2"].map((cert) => (
                <div key={cert} className="flex items-center space-x-2">
                  <Checkbox
                    id={`cert-${cert}`}
                    checked={config.certificacoesSeg.includes(cert)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        handleChange("certificacoesSeg", [...config.certificacoesSeg, cert])
                      } else {
                        handleChange("certificacoesSeg", config.certificacoesSeg.filter((c) => c !== cert))
                      }
                    }}
                  />
                  <Label htmlFor={`cert-${cert}`}>
                    {cert.toUpperCase()}
                  </Label>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="autenticacaoDoisFatores"
              checked={config.autenticacaoDoisFatores}
              onCheckedChange={(checked) => handleChange("autenticacaoDoisFatores", checked)}
            />
            <Label htmlFor="autenticacaoDoisFatores">Autenticação de Dois Fatores</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="criptografiaEmRepouso"
              checked={config.criptografiaEmRepouso}
              onCheckedChange={(checked) => handleChange("criptografiaEmRepouso", checked)}
            />
            <Label htmlFor="criptografiaEmRepouso">Criptografia em Repouso</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="criptografiaEmTransito"
              checked={config.c riptografiaEmTransito}
              onCheckedChange={(checked) => handleChange("criptografiaEmTransito", checked)}
            />
            <Label htmlFor="criptografiaEmTransito">Criptografia em Trânsito</Label>
          </div>
          <div className="space-y-2">
            <Label htmlFor="politicaRetencaoDados">Política de Retenção de Dados (dias)</Label>
            <Input
              id="politicaRetencaoDados"
              type="number"
              value={config.politicaRetencaoDados}
              onChange={(e) => handleChange("politicaRetencaoDados", Number(e.target.value))}
            />
          </div>
        </CardContent>
      </Card>

      {/* Atualizações e Manutenção */}
      <Card className="shadow-lg">
        <CardHeader className="bg-primary/10">
          <CardTitle className="text-2xl text-primary flex items-center">
            <Settings className="mr-2 h-6 w-6" />
            Atualizações e Manutenção
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="frequenciaAtualizacoes">Frequência de Atualizações</Label>
            <Select
              value={config.frequenciaAtualizacoes}
              onValueChange={(value) => handleChange("frequenciaAtualizacoes", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione a frequência de atualizações" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="semanal">Semanal</SelectItem>
                <SelectItem value="quinzenal">Quinzenal</SelectItem>
                <SelectItem value="mensal">Mensal</SelectItem>
                <SelectItem value="trimestral">Trimestral</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="janelaManutencao">Janela de Manutenção</Label>
            <Input
              id="janelaManutencao"
              value={config.janelaManutencao}
              onChange={(e) => handleChange("janelaManutencao", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="versaoMinima">Versão Mínima Suportada</Label>
            <Input
              id="versaoMinima"
              value={config.versaoMinima}
              onChange={(e) => handleChange("versaoMinima", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="politicaDeprecacao">Política de Depreciação (dias)</Label>
            <Input
              id="politicaDeprecacao"
              type="number"
              value={config.politicaDeprecacao}
              onChange={(e) => handleChange("politicaDeprecacao", Number(e.target.value))}
            />
          </div>
        </CardContent>
      </Card>

      {/* Métricas e Analytics */}
      <Card className="shadow-lg">
        <CardHeader className="bg-primary/10">
          <CardTitle className="text-2xl text-primary flex items-center">
            <BarChart className="mr-2 h-6 w-6" />
            Métricas e Analytics
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          <div className="space-y-2">
            <Label>Métricas Disponíveis</Label>
            <div className="flex flex-wrap gap-2">
              {["mrrChurn", "ltv", "cac", "arpu", "nps"].map((metrica) => (
                <div key={metrica} className="flex items-center space-x-2">
                  <Checkbox
                    id={`metrica-${metrica}`}
                    checked={config.metricas.includes(metrica)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        handleChange("metricas", [...config.metricas, metrica])
                      } else {
                        handleChange("metricas", config.metricas.filter((m) => m !== metrica))
                      }
                    }}
                  />
                  <Label htmlFor={`metrica-${metrica}`}>
                    {metrica.toUpperCase()}
                  </Label>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="dashboardPersonalizavel"
              checked={config.dashboardPersonalizavel}
              onCheckedChange={(checked) => handleChange("dashboardPersonalizavel", checked)}
            />
            <Label htmlFor="dashboardPersonalizavel">Dashboard Personalizável</Label>
          </div>
          <div className="space-y-2">
            <Label>Exportação de Relatórios</Label>
            <div className="flex flex-wrap gap-2">
              {["csv", "pdf", "api", "excel"].map((formato) => (
                <div key={formato} className="flex items-center space-x-2">
                  <Checkbox
                    id={`formato-${formato}`}
                    checked={config.exportacaoRelatorios.includes(formato)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        handleChange("exportacaoRelatorios", [...config.exportacaoRelatorios, formato])
                      } else {
                        handleChange("exportacaoRelatorios", config.exportacaoRelatorios.filter((f) => f !== formato))
                      }
                    }}
                  />
                  <Label htmlFor={`formato-${formato}`}>
                    {formato.toUpperCase()}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Onboarding e Treinamento */}
      <Card className="shadow-lg">
        <CardHeader className="bg-primary/10">
          <CardTitle className="text-2xl text-primary flex items-center">
            <Users className="mr-2 h-6 w-6" />
            Onboarding e Treinamento
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          <div className="flex items-center space-x-2">
            <Switch
              id="ofereceTreinamentoInicial"
              checked={config.ofereceTreinamentoInicial}
              onCheckedChange={(checked) => handleChange("ofereceTreinamentoInicial", checked)}
            />
            <Label htmlFor="ofereceTreinamentoInicial">Oferece Treinamento Inicial</Label>
          </div>
          <div className="space-y-2">
            <Label>Materiais de Treinamento</Label>
            <div className="flex flex-wrap gap-2">
              {["videos", "documentacao", "webinars", "tutoriais", "faq"].map((material) => (
                <div key={material} className="flex items-center space-x-2">
                  <Checkbox
                    id={`material-${material}`}
                    checked={config.materiaisTreinamento.includes(material)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        handleChange("materiaisTreinamento", [...config.materiaisTreinamento, material])
                      } else {
                        handleChange("materiaisTreinamento", config.materiaisTreinamento.filter((m) => m !== material))
                      }
                    }}
                  />
                  <Label htmlFor={`material-${material}`}>
                    {material.charAt(0).toUpperCase() + material.slice(1)}
                  </Label>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="tempoMedioImplementacao">Tempo Médio de Implementação (dias)</Label>
            <Input
              id="tempoMedioImplementacao"
              type="number"
              value={config.tempoMedioImplementacao}
              onChange={(e) => handleChange("tempoMedioImplementacao", Number(e.target.value))}
            />
          </div>
        </CardContent>
      </Card>

      {/* Termos e Condições */}
      <Card className="shadow-lg">
        <CardHeader className="bg-primary/10">
          <CardTitle className="text-2xl text-primary flex items-center">
            <FileText className="mr-2 h-6 w-6" />
            Termos e Condições
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="termoServicoURL">URL dos Termos de Serviço</Label>
            <Input
              id="termoServicoURL"
              value={config.termoServicoURL}
              onChange={(e) => handleChange("termoServicoURL", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="politicaPrivacidadeURL">URL da Política de Privacidade</Label>
            <Input
              id="politicaPrivacidadeURL"
              value={config.politicaPrivacidadeURL}
              onChange={(e) => handleChange("politicaPrivacidadeURL", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contratoSLAURL">URL do Contrato SLA</Label>
            <Input
              id="contratoSLAURL"
              value={config.contratoSLAURL}
              onChange={(e) => handleChange("contratoSLAURL", e.target.value)}
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
              id="notificacoesEmail"
              checked={config.notificacoesEmail}
              onCheckedChange={(checked) => handleChange("notificacoesEmail", checked)}
            />
            <Label htmlFor="notificacoesEmail">Notificações por E-mail</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="notificacoesSMS"
              checked={config.notificacoesSMS}
              onCheckedChange={(checked) => handleChange("notificacoesSMS", checked)}
            />
            <Label htmlFor="notificacoesSMS">Notificações por SMS</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="notificacoesPlataforma"
              checked={config.notificacoesPlataforma}
              onCheckedChange={(checked) => handleChange("notificacoesPlataforma", checked)}
            />
            <Label htmlFor="notificacoesPlataforma">Notificações na Plataforma</Label>
          </div>
          <div className="space-y-2">
            <Label>Tipos de Notificação</Label>
            <div className="flex flex-wrap gap-2">
              {["atualizacoes", "manutencao", "seguranca", "faturamento", "suporte"].map((tipo) => (
                <div key={tipo} className="flex items-center space-x-2">
                  <Checkbox
                    id={`notificacao-${tipo}`}
                    checked={config.tiposNotificacao.includes(tipo)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        handleChange("tiposNotificacao", [...config.tiposNotificacao, tipo])
                      } else {
                        handleChange("tiposNotificacao", config.tiposNotificacao.filter((t) => t !== tipo))
                      }
                    }}
                  />
                  <Label htmlFor={`notificacao-${tipo}`}>
                    {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Preferências de Plataforma */}
      <Card className="shadow-lg">
        <CardHeader className="bg-primary/10">
          <CardTitle className="text-2xl text-primary flex items-center">
            <Globe className="mr-2 h-6 w-6" />
            Preferências de Plataforma
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          <div className="space-y-2">
            <Label>Idiomas da Plataforma</Label>
            <div className="flex flex-wrap gap-2">
              {["portugues", "ingles", "espanhol", "frances", "alemao"].map((idioma) => (
                <div key={idioma} className="flex items-center space-x-2">
                  <Checkbox
                    id={`idioma-${idioma}`}
                    checked={config.idiomasPlatforma.includes(idioma)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        handleChange("idiomasPlatforma", [...config.idiomasPlatforma, idioma])
                      } else {
                        handleChange("idiomasPlatforma", config.idiomasPlatforma.filter((i) => i !== idioma))
                      }
                    }}
                  />
                  <Label htmlFor={`idioma-${idioma}`}>
                    {idioma.charAt(0).toUpperCase() + idioma.slice(1)}
                  </Label>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="temaEscuro"
              checked={config.temaEscuro}
              onCheckedChange={(checked) => handleChange("temaEscuro", checked)}
            />
            <Label htmlFor="temaEscuro">Tema Escuro</Label>
          </div>
          <div className="space-y-2">
            <Label htmlFor="fusoHorarioPadrao">Fuso Horário Padrão</Label>
            <Select
              value={config.fusoHorarioPadrao}
              onValueChange={(value) => handleChange("fusoHorarioPadrao", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione o fuso horário padrão" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="America/Sao_Paulo">América/São Paulo</SelectItem>
                <SelectItem value="America/New_York">América/Nova York</SelectItem>
                <SelectItem value="Europe/London">Europa/Londres</SelectItem>
                <SelectItem value="Asia/Tokyo">Ásia/Tóquio</SelectItem>
              </SelectContent>
            </Select>
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
  )
}