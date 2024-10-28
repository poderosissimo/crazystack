"use client"

import * as React from "react"
import { CalendarIcon, Save } from "lucide-react"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

export default function SistemaFidelidade() {
  const [configuracoes, setConfiguracoes] = React.useState({
    // Configurações Gerais
    programaAtivo: true,
    nomePrograma: "Programa de Fidelidade",
    descricaoPrograma: "Acumule pontos e ganhe recompensas!",
    moedaVirtual: "Pontos",
    taxaConversao: 1, // 1 real = 1 ponto
    pontosFracionados: false,
    arredondamentoPontos: "cima", // "cima", "baixo", "matematico"
    
    // Acúmulo de Pontos
    pontosBasePorReal: 1,
    valorMinimoParaPontos: 10,
    categoriasProdutos: [
      { nome: "Categoria A", multiplicador: 1 },
      { nome: "Categoria B", multiplicador: 1.5 },
      { nome: "Categoria C", multiplicador: 2 },
    ],
    pontosExtras: [
      { evento: "Aniversário", pontos: 100 },
      { evento: "Cadastro", pontos: 50 },
    ],
    limitePontosdiarios: 1000,
    acumuloPontosEmPromocoes: true,
    
    // Resgate de Pontos
    pontosMinimosResgate: 100,
    incrementoResgate: 50,
    categoriasProdutosResgate: [
      { nome: "Categoria X", taxaConversao: 1 },
      { nome: "Categoria Y", taxaConversao: 0.8 },
      { nome: "Categoria Z", taxaConversao: 1.2 },
    ],
    permitirResgateEmDinheiro: false,
    taxaConversaoResgateEmDinheiro: 0.5, // 1 ponto = 0.5 reais
    limiteDiarioResgate: 500,
    
    // Expiração de Pontos
    tempoExpiracaoPontos: 12, // meses
    notificacaoExpiracaoAntecedencia: 30, // dias
    pontosExpiramEmLote: false,
    dataExpiracaoEmLote: new Date(),
    permitirExtensaoPontos: true,
    custoExtensaoPontos: 10, // % dos pontos a expirar
    
    // Níveis de Fidelidade
    niveisAtivos: true,
    niveis: [
      { nome: "Bronze", pontosNecessarios: 0, multiplicadorPontos: 1 },
      { nome: "Prata", pontosNecessarios: 1000, multiplicadorPontos: 1.2 },
      { nome: "Ouro", pontosNecessarios: 5000, multiplicadorPontos: 1.5 },
      { nome: "Platina", pontosNecessarios: 10000, multiplicadorPontos: 2 },
    ],
    periodoAvaliacaoNivel: 12, // meses
    rebaixamentoNivel: true,
    manutencaoNivelPontos: [
      { nivel: "Prata", pontos: 800 },
      { nivel: "Ouro", pontos: 4000 },
      { nivel: "Platina", pontos: 8000 },
    ],
    
    // Bônus e Promoções
    promocoesAtivas: true,
    multiplicadorPontosPromocoes: 2,
    frequenciaPromocoes: "mensal", // "semanal", "mensal", "trimestral"
    duracaoPromocoes: 7, // dias
    pontosBonus: [
      { evento: "Indicação", pontos: 200 },
      { evento: "Avaliação", pontos: 50 },
    ],
    
    // Notificações e Comunicação
    notificacoesAtivas: true,
    canaisNotificacao: ["email", "sms", "push"],
    frequenciaExtrato: "mensal", // "semanal", "mensal", "trimestral"
    notificarMudancaNivel: true,
    notificarPontosAExpirar: true,
    notificarPromocoes: true,
  })

  const handleChange = (name: string, value: any) => {
    setConfiguracoes(prev => ({ ...prev, [name]: value }))
  }

  const salvarConfiguracoes = () => {
    console.log("Configurações salvas:", configuracoes)
    toast({
      title: "Sucesso",
      description: "Configurações do programa de fidelidade salvas com sucesso!",
    })
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Configuração do Sistema de Fidelidade</CardTitle>
        <CardDescription>Defina os parâmetros do seu programa de pontos</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="geral" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7">
            <TabsTrigger value="geral">Geral</TabsTrigger>
            <TabsTrigger value="acumulo">Acúmulo</TabsTrigger>
            <TabsTrigger value="resgate">Resgate</TabsTrigger>
            <TabsTrigger value="expiracao">Expiração</TabsTrigger>
            <TabsTrigger value="niveis">Níveis</TabsTrigger>
            <TabsTrigger value="bonus">Bônus</TabsTrigger>
            <TabsTrigger value="notificacoes">Notificações</TabsTrigger>
          </TabsList>
          
          <TabsContent value="geral">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch
                  id="programaAtivo"
                  checked={configuracoes.programaAtivo}
                  onCheckedChange={(checked) => handleChange("programaAtivo", checked)}
                />
                <Label htmlFor="programaAtivo">Programa Ativo</Label>
              </div>
              <div className="space-y-2">
                <Label htmlFor="nomePrograma">Nome do Programa</Label>
                <Input
                  id="nomePrograma"
                  value={configuracoes.nomePrograma}
                  onChange={(e) => handleChange("nomePrograma", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="descricaoPrograma">Descrição do Programa</Label>
                <Textarea
                  id="descricaoPrograma"
                  value={configuracoes.descricaoPrograma}
                  onChange={(e) => handleChange("descricaoPrograma", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="moedaVirtual">Nome da Moeda Virtual</Label>
                <Input
                  id="moedaVirtual"
                  value={configuracoes.moedaVirtual}
                  onChange={(e) => handleChange("moedaVirtual", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="taxaConversao">Taxa de Conversão (1 real = X pontos)</Label>
                <Input
                  id="taxaConversao"
                  type="number"
                  value={configuracoes.taxaConversao}
                  onChange={(e) => handleChange("taxaConversao", parseFloat(e.target.value))}
                />
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="pontosFracionados"
                  checked={configuracoes.pontosFracionados}
                  onCheckedChange={(checked) => handleChange("pontosFracionados", checked)}
                />
                <Label htmlFor="pontosFracionados">Permitir Pontos Fracionados</Label>
              </div>
              <div className="space-y-2">
                <Label>Arredondamento de Pontos</Label>
                <RadioGroup
                  value={configuracoes.arredondamentoPontos}
                  onValueChange={(value) => handleChange("arredondamentoPontos", value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="cima" id="arredondamento-cima" />
                    <Label htmlFor="arredondamento-cima">Para cima</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="baixo" id="arredondamento-baixo" />
                    <Label htmlFor="arredondamento-baixo">Para baixo</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="matematico" id="arredondamento-matematico" />
                    <Label htmlFor="arredondamento-matematico">Matemático</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="acumulo">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="pontosBasePorReal">Pontos Base por Real Gasto</Label>
                <Input
                  id="pontosBasePorReal"
                  type="number"
                  value={configuracoes.pontosBasePorReal}
                  onChange={(e) => handleChange("pontosBasePorReal", parseInt(e.target.value))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="valorMinimoParaPontos">Valor Mínimo para Ganhar Pontos (R$)</Label>
                <Input
                  id="valorMinimoParaPontos"
                  type="number"
                  value={configuracoes.valorMinimoParaPontos}
                  onChange={(e) => handleChange("valorMinimoParaPontos", parseFloat(e.target.value))}
                />
              </div>
              <div className="space-y-2">
                <Label>Categorias de Produtos e Multiplicadores</Label>
                {configuracoes.categoriasProdutos.map((categoria, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Input
                      value={categoria.nome}
                      onChange={(e) => {
                        const novasCategorias = [...configuracoes.categoriasProdutos]
                        novasCategorias[index].nome = e.target.value
                        handleChange("categoriasProdutos", novasCategorias)
                      }}
                    />
                    <Input
                      type="number"
                      value={categoria.multiplicador}
                      onChange={(e) => {
                        const novasCategorias = [...configuracoes.categoriasProdutos]
                        novasCategorias[index].multiplicador = parseFloat(e.target.value)
                        handleChange("categoriasProdutos", novasCategorias)
                      }}
                    />
                  </div>
                ))}
                <Button
                  onClick={() => {
                    const novasCategorias = [...configuracoes.categoriasProdutos, { nome: "", multiplicador: 1 }]
                    handleChange("categoriasProdutos", novasCategorias)
                  }}
                >
                  Adicionar Categoria
                </Button>
              </div>
              <div className="space-y-2">
                <Label>Pontos Extras por Eventos</Label>
                {configuracoes.pontosExtras.map((evento, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Input
                      value={evento.evento}
                      onChange={(e) => {
                        const novosEventos = [...configuracoes.pontosExtras]
                        novosEventos[index].evento = e.target.value
                        handleChange("pontosExtras", novosEventos)
                      }}
                    />
                    <Input
                      type="number"
                      value={evento.pontos}
                      onChange={(e) => {
                        const novosEventos = [...configuracoes.pontosExtras]
                        novosEventos[index].pontos = parseInt(e.target.value)
                        handleChange("pontosExtras", novosEventos)
                      }}
                    />
                  </div>
                ))}
                <Button
                  onClick={() => {
                    const novosEventos = [...configuracoes.pontosExtras, { evento: "", pontos: 0 }]
                    handleChange("pontosExtras", novosEventos)
                  }}
                >
                  Adicionar Evento
                </Button>
              </div>
              <div className="space-y-2">
                <Label htmlFor="limitePontosdiarios">Limite de Pontos Diários</Label>
                <Input
                  
                  id="limitePontosdiarios"
                  type="number"
                  value={configuracoes.limitePontosdiarios}
                  onChange={(e) => handleChange("limitePontosdiarios", parseInt(e.target.value))}
                />
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="acumuloPontosEmPromocoes"
                  checked={configuracoes.acumuloPontosEmPromocoes}
                  onCheckedChange={(checked) => handleChange("acumuloPontosEmPromocoes", checked)}
                />
                <Label htmlFor="acumuloPontosEmPromocoes">Permitir Acúmulo de Pontos em Promoções</Label>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="resgate">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="pontosMinimosResgate">Pontos Mínimos para Resgate</Label>
                <Input
                  id="pontosMinimosResgate"
                  type="number"
                  value={configuracoes.pontosMinimosResgate}
                  onChange={(e) => handleChange("pontosMinimosResgate", parseInt(e.target.value))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="incrementoResgate">Incremento de Resgate</Label>
                <Input
                  id="incrementoResgate"
                  type="number"
                  value={configuracoes.incrementoResgate}
                  onChange={(e) => handleChange("incrementoResgate", parseInt(e.target.value))}
                />
              </div>
              <div className="space-y-2">
                <Label>Categorias de Produtos para Resgate</Label>
                {configuracoes.categoriasProdutosResgate.map((categoria, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Input
                      value={categoria.nome}
                      onChange={(e) => {
                        const novasCategorias = [...configuracoes.categoriasProdutosResgate]
                        novasCategorias[index].nome = e.target.value
                        handleChange("categoriasProdutosResgate", novasCategorias)
                      }}
                    />
                    <Input
                      type="number"
                      value={categoria.taxaConversao}
                      onChange={(e) => {
                        const novasCategorias = [...configuracoes.categoriasProdutosResgate]
                        novasCategorias[index].taxaConversao = parseFloat(e.target.value)
                        handleChange("categoriasProdutosResgate", novasCategorias)
                      }}
                    />
                  </div>
                ))}
                <Button
                  onClick={() => {
                    const novasCategorias = [...configuracoes.categoriasProdutosResgate, { nome: "", taxaConversao: 1 }]
                    handleChange("categoriasProdutosResgate", novasCategorias)
                  }}
                >
                  Adicionar Categoria
                </Button>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="permitirResgateEmDinheiro"
                  checked={configuracoes.permitirResgateEmDinheiro}
                  onCheckedChange={(checked) => handleChange("permitirResgateEmDinheiro", checked)}
                />
                <Label htmlFor="permitirResgateEmDinheiro">Permitir Resgate em Dinheiro</Label>
              </div>
              {configuracoes.permitirResgateEmDinheiro && (
                <div className="space-y-2">
                  <Label htmlFor="taxaConversaoResgateEmDinheiro">Taxa de Conversão para Resgate em Dinheiro</Label>
                  <Input
                    id="taxaConversaoResgateEmDinheiro"
                    type="number"
                    value={configuracoes.taxaConversaoResgateEmDinheiro}
                    onChange={(e) => handleChange("taxaConversaoResgateEmDinheiro", parseFloat(e.target.value))}
                  />
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="limiteDiarioResgate">Limite Diário de Resgate (pontos)</Label>
                <Input
                  id="limiteDiarioResgate"
                  type="number"
                  value={configuracoes.limiteDiarioResgate}
                  onChange={(e) => handleChange("limiteDiarioResgate", parseInt(e.target.value))}
                />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="expiracao">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="tempoExpiracaoPontos">Tempo de Expiração dos Pontos (meses)</Label>
                <Input
                  id="tempoExpiracaoPontos"
                  type="number"
                  value={configuracoes.tempoExpiracaoPontos}
                  onChange={(e) => handleChange("tempoExpiracaoPontos", parseInt(e.target.value))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="notificacaoExpiracaoAntecedencia">Notificação de Expiração (dias de antecedência)</Label>
                <Input
                  id="notificacaoExpiracaoAntecedencia"
                  type="number"
                  value={configuracoes.notificacaoExpiracaoAntecedencia}
                  onChange={(e) => handleChange("notificacaoExpiracaoAntecedencia", parseInt(e.target.value))}
                />
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="pontosExpiramEmLote"
                  checked={configuracoes.pontosExpiramEmLote}
                  onCheckedChange={(checked) => handleChange("pontosExpiramEmLote", checked)}
                />
                <Label htmlFor="pontosExpiramEmLote">Pontos Expiram em Lote</Label>
              </div>
              {configuracoes.pontosExpiramEmLote && (
                <div className="space-y-2">
                  <Label>Data de Expiração em Lote</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {format(configuracoes.dataExpiracaoEmLote, "PPP", { locale: ptBR })}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={configuracoes.dataExpiracaoEmLote}
                        onSelect={(date) => date && handleChange("dataExpiracaoEmLote", date)}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              )}
              <div className="flex items-center space-x-2">
                <Switch
                  id="permitirExtensaoPontos"
                  checked={configuracoes.permitirExtensaoPontos}
                  onCheckedChange={(checked) => handleChange("permitirExtensaoPontos", checked)}
                />
                <Label htmlFor="permitirExtensaoPontos">Permitir Extensão de Pontos</Label>
              </div>
              {configuracoes.permitirExtensaoPontos && (
                <div className="space-y-2">
                  <Label htmlFor="custoExtensaoPontos">Custo de Extensão de Pontos (% dos pontos a expirar)</Label>
                  <Input
                    id="custoExtensaoPontos"
                    type="number"
                    value={configuracoes.custoExtensaoPontos}
                    onChange={(e) => handleChange("custoExtensaoPontos", parseInt(e.target.value))}
                  />
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="niveis">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch
                  id="niveisAtivos"
                  checked={configuracoes.niveisAtivos}
                  onCheckedChange={(checked) => handleChange("niveisAtivos", checked)}
                />
                <Label htmlFor="niveisAtivos">Níveis de Fidelidade Ativos</Label>
              </div>
              {configuracoes.niveisAtivos && (
                <>
                  <div className="space-y-2">
                    <Label>Níveis de Fidelidade</Label>
                    {configuracoes.niveis.map((nivel, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Input
                          value={nivel.nome}
                          onChange={(e) => {
                            const novosNiveis = [...configuracoes.niveis]
                            novosNiveis[index].nome = e.target.value
                            handleChange("niveis", novosNiveis)
                          }}
                        />
                        <Input
                          type="number"
                          value={nivel.pontosNecessarios}
                          onChange={(e) => {
                            const novosNiveis = [...configuracoes.niveis]
                            novosNiveis[index].pontosNecessarios = parseInt(e.target.value)
                            handleChange("niveis", novosNiveis)
                          }}
                        />
                        <Input
                          type="number"
                          value={nivel.multiplicadorPontos}
                          onChange={(e) => {
                            const novosNiveis = [...configuracoes.niveis]
                            novosNiveis[index].multiplicadorPontos = parseFloat(e.target.value)
                            handleChange("niveis", novosNiveis)
                          }}
                        />
                      </div>
                    ))}
                    <Button
                      onClick={() => {
                        const novosNiveis = [...configuracoes.niveis, { nome: "", pontosNecessarios: 0, multiplicadorPontos: 1 }]
                        handleChange("niveis", novosNiveis)
                      }}
                    >
                      Adicionar Nível
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="periodoAvaliacaoNivel">Período de Avaliação de Nível (meses)</Label>
                    <Input
                      id="periodoAvaliacaoNivel"
                      type="number"
                      value={configuracoes.periodoAvaliacaoNivel}
                      onChange={(e) => handleChange("periodoAvaliacaoNivel", parseInt(e.target.value))}
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="rebaixamentoNivel"
                      checked={configuracoes.rebaixamentoNivel}
                      onCheckedChange={(checked) => handleChange("rebaixamentoNivel", checked)}
                    />
                    <Label htmlFor="rebaixamentoNivel">Permitir Rebaixamento de Nível</Label>
                  </div>
                  <div className="space-y-2">
                    <Label>Pontos para Manutenção de Nível</Label>
                    {configuracoes.manutencaoNivelPontos.map((manutencao, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Input
                          value={manutencao.nivel}
                          onChange={(e) => {
                            const novaManutencao = [...configuracoes.manutencaoNivelPontos]
                            novaManutencao[index].nivel = e.target.value
                            handleChange("manutencaoNivelPontos", novaManutencao)
                          }}
                        />
                        <Input
                          type="number"
                          value={manutencao.pontos}
                          onChange={(e) => {
                            const novaManutencao = [...configuracoes.manutencaoNivelPontos]
                            novaManutencao[index].pontos = parseInt(e.target.value)
                            handleChange("manutencaoNivelPontos", novaManutencao)
                          }}
                        />
                      </div>
                    ))}
                    <Button
                      onClick={() => {
                        const novaManutencao = [...configuracoes.manutencaoNivelPontos, { nivel: "", pontos: 0 }]
                        handleChange("manutencaoNivelPontos", novaManutencao)
                      }}
                    >
                      Adicionar Regra de Manutenção
                    </Button>
                  </div>
                </>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="bonus">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch
                  id="promocoesAtivas"
                  checked={configuracoes.promocoesAtivas}
                  onCheckedChange={(checked) => handleChange("promocoesAtivas", checked)}
                />
                <Label htmlFor="promocoesAtivas">Promoções Ativas</Label>
              </div>
              {configuracoes.promocoesAtivas && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="multiplicadorPontosPromocoes">Multiplicador de Pontos em Promoções</Label>
                    <Input
                      id="multiplicadorPontosPromocoes"
                      type="number"
                      value={configuracoes.multiplicadorPontosPromocoes}
                      onChange={(e) => handleChange("multiplicadorPontosPromocoes", parseFloat(e.target.value))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="frequenciaPromocoes">Frequência de Promoções</Label>
                    <Select
                      value={configuracoes.frequenciaPromocoes}
                      onValueChange={(value) => handleChange("frequenciaPromocoes", value)}
                    >
                      <SelectTrigger id="frequenciaPromocoes">
                        <SelectValue placeholder="Selecione a frequência" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="semanal">Semanal</SelectItem>
                        <SelectItem value="mensal">Mensal</SelectItem>
                        <SelectItem value="trimestral">Trimestral</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="duracaoPromocoes">Duração das Promoções (dias)</Label>
                    <Input
                      id="duracaoPromocoes"
                      type="number"
                      value={configuracoes.duracaoPromocoes}
                      onChange={(e) => handleChange("duracaoPromocoes", parseInt(e.target.value))}
                    />
                  </div>
                </>
              )}
              <div className="space-y-2">
                <Label>Pontos Bônus por Eventos</Label>
                {configuracoes.pontosBonus.map((bonus, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Input
                      value={bonus.evento}
                      onChange={(e) => {
                        const novosBonus = [...configuracoes.pontosBonus]
                        novosBonus[index].evento = e.target.value
                        handleChange("pontosBonus", novosBonus)
                      }}
                    />
                    <Input
                      type="number"
                      value={bonus.pontos}
                      onChange={(e) => {
                        const novosBonus = [...configuracoes.pontosBonus]
                        novosBonus[index].pontos = parseInt(e.target.value)
                        handleChange("pontosBonus", novosBonus)
                      }}
                    />
                  </div>
                ))}
                <Button
                  onClick={() => {
                    const novosBonus = [...configuracoes.pontosBonus, { evento: "", pontos: 0 }]
                    handleChange("pontosBonus", novosBonus)
                  }}
                >
                  Adicionar Evento Bônus
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="notificacoes">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch
                  id="notificacoesAtivas"
                  checked={configuracoes.notificacoesAtivas}
                  onCheckedChange={(checked) => handleChange("notificacoesAtivas", checked)}
                />
                <Label htmlFor="notificacoesAtivas">Notificações Ativas</Label>
              </div>
              {configuracoes.notificacoesAtivas && (
                <>
                  <div className="space-y-2">
                    <Label>Canais de Notificação</Label>
                    {["email", "sms", "push"].map((canal) => (
                      <div key={canal} className="flex items-center space-x-2">
                        <Checkbox
                          id={`canal-${canal}`}
                          checked={configuracoes.canaisNotificacao.includes(canal)}
                          onCheckedChange={(checked) => {
                            const novosCanais = checked
                              ? [...configuracoes.canaisNotificacao, canal]
                              : configuracoes.canaisNotificacao.filter((c) => c !== canal)
                            handleChange("canaisNotificacao", novosCanais)
                          }}
                        />
                        <Label htmlFor={`canal-${canal}`}>{canal.toUpperCase()}</Label>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="frequenciaExtrato">Frequência de Envio de Extrato</Label>
                    <Select
                      value={configuracoes.frequenciaExtrato}
                      onValueChange={(value) => handleChange("frequenciaExtrato", value)}
                    >
                      <SelectTrigger id="frequenciaExtrato">
                        <SelectValue placeholder="Selecione a frequência" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="semanal">Semanal</SelectItem>
                        <SelectItem value="mensal">Mensal</SelectItem>
                        <SelectItem value="trimestral">Trimestral</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="notificarMudancaNivel"
                      checked={configuracoes.notificarMudancaNivel}
                      onCheckedChange={(checked) => handleChange("notificarMudancaNivel", checked)}
                    />
                    <Label htmlFor="notificarMudancaNivel">Notificar Mudança de Nível</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="notificarPontosAExpirar"
                      checked={configuracoes.notificarPontosAExpirar}
                      onCheckedChange={(checked) => handleChange("notificarPontosAExpirar", checked)}
                    />
                    <Label htmlFor="notificarPontosAExpirar">Notificar Pontos a Expirar</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="notificarPromocoes"
                      checked={configuracoes.notificarPromocoes}
                      onCheckedChange={(checked) => handleChange("notificarPromocoes", checked)}
                    />
                    <Label htmlFor="notificarPromocoes">Notificar Promoções</Label>
                  </div>
                </>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter>
        <Button onClick={salvarConfiguracoes} className="w-full">
          <Save className="w-4 h-4 mr-2" />
          Salvar Configurações
        </Button>
      </CardFooter>
    </Card>
  )
}