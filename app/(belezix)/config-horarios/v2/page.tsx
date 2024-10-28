"use client"

import * as React from "react"
import { addDays, format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { Calendar as CalendarIcon, Clock, Save, Trash2 } from "lucide-react"

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

export default function ConfiguracaoAvancada() {
  // Estado para as configurações básicas
  const [configuracoes, setConfiguracoes] = React.useState({
    // 1. Duração padrão de agendamento (em minutos)
    duracaoPadraoAgendamento: 30,
    // 2. Intervalo entre agendamentos (em minutos)
    intervaloEntreAgendamentos: 5,
    // 3. Tempo mínimo para agendamento antecipado (em horas)
    tempoMinimoAgendamentoAntecipado: 24,
    // 4. Tempo máximo para agendamento futuro (em dias)
    tempoMaximoAgendamentoFuturo: 30,
    // 5. Permitir agendamentos simultâneos
    permitirAgendamentosSimultaneos: false,
    // 6. Número máximo de agendamentos simultâneos
    maxAgendamentosSimultaneos: 1,
    // 7. Política de cancelamento (em horas antes do agendamento)
    politicaCancelamento: 24,
    // 8. Taxa de cancelamento tardio (em percentual)
    taxaCancelamentoTardio: 50,
    // 9. Permitir reagendamento
    permitirReagendamento: true,
    // 10. Tempo limite para reagendamento (em horas antes do agendamento)
    tempoLimiteReagendamento: 48,
    // 11. Modo de confirmação de agendamento
    modoConfirmacaoAgendamento: "automatico",
    // 12. Tempo de antecedência para lembrete (em horas)
    tempoAntecedenciaLembrete: 24,
    // 13. Método de lembrete preferido
    metodoLembrete: "email",
    // 14. Permitir avaliações de clientes
    permitirAvaliacoes: true,
    // 15. Tempo após serviço para solicitar avaliação (em horas)
    tempoSolicitacaoAvaliacao: 24,
    // 16. Desconto para primeira visita (em percentual)
    descontoPrimeiraVisita: 10,
    // 17. Programa de fidelidade ativo
    programaFidelidadeAtivo: false,
    // 18. Pontos por visita no programa de fidelidade
    pontosPorVisita: 10,
    // 19. Pontos necessários para resgate no programa de fidelidade
    pontosParaResgate: 100,
    // 20. Valor do desconto no resgate de pontos (em percentual)
    valorDescontoResgatePontos: 15,
    // 21. Permitir agendamento online
    permitirAgendamentoOnline: true,
    // 22. Requer depósito para reserva
    requerDepositoReserva: false,
    // 23. Valor do depósito para reserva (em percentual do serviço)
    valorDepositoReserva: 20,
    // 24. Oferecer serviços complementares
    oferecerServicosComplementares: true,
    // 25. Limite de remarcações por agendamento
    limiteRemarcacoes: 2,
    // 26. Tempo mínimo entre remarcações (em horas)
    tempoMinimoEntreRemarcacoes: 48,
    // 27. Permitir lista de espera
    permitirListaEspera: true,
    // 28. Capacidade máxima da lista de espera
    capacidadeMaximaListaEspera: 5,
    // 29. Notificar sobre vagas da lista de espera
    notificarVagasListaEspera: true,
    // 30. Tempo limite para aceitar vaga da lista de espera (em horas)
    tempoLimiteAceitarVagaListaEspera: 2,
  })

  const handleChange = (name: string, value: any) => {
    setConfiguracoes(prev => ({ ...prev, [name]: value }))
  }

  const salvarConfiguracoes = () => {
    // Aqui você implementaria a lógica para salvar as configurações
    console.log("Configurações salvas:", configuracoes)
    toast({
      title: "Sucesso",
      description: "Configurações salvas com sucesso!",
    })
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Configuração Avançada do Estabelecimento</CardTitle>
        <CardDescription>Defina as parametrizações detalhadas do seu negócio</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="agendamentos" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="agendamentos">Agendamentos</TabsTrigger>
            <TabsTrigger value="politicas">Políticas</TabsTrigger>
            <TabsTrigger value="fidelidade">Fidelidade e Promoções</TabsTrigger>
          </TabsList>
          <TabsContent value="agendamentos">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="duracaoPadraoAgendamento">Duração padrão de agendamento (minutos)</Label>
                <Input
                  id="duracaoPadraoAgendamento"
                  type="number"
                  value={configuracoes.duracaoPadraoAgendamento}
                  onChange={(e) => handleChange("duracaoPadraoAgendamento", parseInt(e.target.value))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="intervaloEntreAgendamentos">Intervalo entre agendamentos (minutos)</Label>
                <Input
                  id="intervaloEntreAgendamentos"
                  type="number"
                  value={configuracoes.intervaloEntreAgendamentos}
                  onChange={(e) => handleChange("intervaloEntreAgendamentos", parseInt(e.target.value))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tempoMinimoAgendamentoAntecipado">Tempo mínimo para agendamento antecipado (horas)</Label>
                <Input
                  id="tempoMinimoAgendamentoAntecipado"
                  type="number"
                  value={configuracoes.tempoMinimoAgendamentoAntecipado}
                  onChange={(e) => handleChange("tempoMinimoAgendamentoAntecipado", parseInt(e.target.value))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tempoMaximoAgendamentoFuturo">Tempo máximo para agendamento futuro (dias)</Label>
                <Input
                  id="tempoMaximoAgendamentoFuturo"
                  type="number"
                  value={configuracoes.tempoMaximoAgendamentoFuturo}
                  onChange={(e) => handleChange("tempoMaximoAgendamentoFuturo", parseInt(e.target.value))}
                />
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="permitirAgendamentosSimultaneos"
                  checked={configuracoes.permitirAgendamentosSimultaneos}
                  onCheckedChange={(checked) => handleChange("permitirAgendamentosSimultaneos", checked)}
                />
                <Label htmlFor="permitirAgendamentosSimultaneos">Permitir agendamentos simultâneos</Label>
              </div>
              {configuracoes.permitirAgendamentosSimultaneos && (
                <div className="space-y-2">
                  <Label htmlFor="maxAgendamentosSimultaneos">Número máximo de agendamentos simultâneos</Label>
                  <Input
                    id="maxAgendamentosSimultaneos"
                    type="number"
                    value={configuracoes.maxAgendamentosSimultaneos}
                    onChange={(e) => handleChange("maxAgendamentosSimultaneos", parseInt(e.target.value))}
                  />
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="modoConfirmacaoAgendamento">Modo de confirmação de agendamento</Label>
                <Select
                  value={configuracoes.modoConfirmacaoAgendamento}
                  onValueChange={(value) => handleChange("modoConfirmacaoAgendamento", value)}
                >
                  <SelectTrigger id="modoConfirmacaoAgendamento">
                    <SelectValue placeholder="Selecione o modo de confirmação" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="automatico">Automático</SelectItem>
                    <SelectItem value="manual">Manual</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="tempoAntecedenciaLembrete">Tempo de antecedência para lembrete (horas)</Label>
                <Input
                  id="tempoAntecedenciaLembrete"
                  type="number"
                  value={configuracoes.tempoAntecedenciaLembrete}
                  onChange={(e) => handleChange("tempoAntecedenciaLembrete", parseInt(e.target.value))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="metodoLembrete">Método de lembrete preferido</Label>
                <Select
                  value={configuracoes.metodoLembrete}
                  onValueChange={(value) => handleChange("metodoLembrete", value)}
                >
                  <SelectTrigger id="metodoLembrete">
                    <SelectValue placeholder="Selecione o método de lembrete" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="email">E-mail</SelectItem>
                    <SelectItem value="sms">SMS</SelectItem>
                    <SelectItem value="whatsapp">WhatsApp</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="politicas">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="politicaCancelamento">Política de cancelamento (horas antes do agendamento)</Label>
                <Input
                  id="politicaCancelamento"
                  type="number"
                  value={configuracoes.politicaCancelamento}
                  onChange={(e) => handleChange("politicaCancelamento", parseInt(e.target.value))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="taxaCancelamentoTardio">Taxa de cancelamento tardio (%)</Label>
                <Input
                  id="taxaCancelamentoTardio"
                  type="number"
                  value={configuracoes.taxaCancelamentoTardio}
                  onChange={(e) => handleChange("taxaCancelamentoTardio", parseInt(e.target.value))}
                />
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="permitirReagendamento"
                  checked={configuracoes.permitirReagendamento}
                  onCheckedChange={(checked) => handleChange("permitirReagendamento", checked)}
                />
                <Label htmlFor="permitirReagendamento">Permitir reagendamento</Label>
              </div>
              {configuracoes.permitirReagendamento && (
                <div className="space-y-2">
                  <Label htmlFor="tempoLimiteReagendamento">Tempo limite para reagendamento (horas antes do agendamento)</Label>
                  <Input
                    id="tempoLimiteReagendamento"
                    type="number"
                    value={configuracoes.tempoLimiteReagendamento}
                    onChange={(e) => handleChange("tempoLimiteReagendamento", parseInt(e.target.value))}
                  />
                </div>
              )}
              <div className="flex items-center space-x-2">
                <Switch
                  id="permitirAvaliacoes"
                  checked={configuracoes.permitirAvaliacoes}
                  onCheckedChange={(checked) => handleChange("permitirAvaliacoes", checked)}
                />
                <Label htmlFor="permitirAvaliacoes">Permitir avaliações de clientes</Label>
              </div>
              {configuracoes.permitirAvaliacoes && (
                <div className="space-y-2">
                  <Label htmlFor="tempoSolicitacaoAvaliacao">Tempo após serviço para solicitar avaliação (horas)</Label>
                  <Input
                    id="tempoSolicitacaoAvaliacao"
                    type="number"
                    value={configuracoes.tempoSolicitacaoAvaliacao}
                    onChange={(e) => handleChange("tempoSolicitacaoAvaliacao", parseInt(e.target.value))}
                  />
                </div>
              )}
              <div className="flex items-center space-x-2">
                <Switch
                  id="permitirAgendamentoOnline"
                  
                  checked={configuracoes.permitirAgendamentoOnline}
                  onCheckedChange={(checked) => handleChange("permitirAgendamentoOnline", checked)}
                />
                <Label htmlFor="permitirAgendamentoOnline">Permitir agendamento online</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="requerDepositoReserva"
                  checked={configuracoes.requerDepositoReserva}
                  onCheckedChange={(checked) => handleChange("requerDepositoReserva", checked)}
                />
                <Label htmlFor="requerDepositoReserva">Requer depósito para reserva</Label>
              </div>
              {configuracoes.requerDepositoReserva && (
                <div className="space-y-2">
                  <Label htmlFor="valorDepositoReserva">Valor do depósito para reserva (% do serviço)</Label>
                  <Input
                    id="valorDepositoReserva"
                    type="number"
                    value={configuracoes.valorDepositoReserva}
                    onChange={(e) => handleChange("valorDepositoReserva", parseInt(e.target.value))}
                  />
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="limiteRemarcacoes">Limite de remarcações por agendamento</Label>
                <Input
                  id="limiteRemarcacoes"
                  type="number"
                  value={configuracoes.limiteRemarcacoes}
                  onChange={(e) => handleChange("limiteRemarcacoes", parseInt(e.target.value))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tempoMinimoEntreRemarcacoes">Tempo mínimo entre remarcações (horas)</Label>
                <Input
                  id="tempoMinimoEntreRemarcacoes"
                  type="number"
                  value={configuracoes.tempoMinimoEntreRemarcacoes}
                  onChange={(e) => handleChange("tempoMinimoEntreRemarcacoes", parseInt(e.target.value))}
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="fidelidade">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="descontoPrimeiraVisita">Desconto para primeira visita (%)</Label>
                <Input
                  id="descontoPrimeiraVisita"
                  type="number"
                  value={configuracoes.descontoPrimeiraVisita}
                  onChange={(e) => handleChange("descontoPrimeiraVisita", parseInt(e.target.value))}
                />
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="programaFidelidadeAtivo"
                  checked={configuracoes.programaFidelidadeAtivo}
                  onCheckedChange={(checked) => handleChange("programaFidelidadeAtivo", checked)}
                />
                <Label htmlFor="programaFidelidadeAtivo">Programa de fidelidade ativo</Label>
              </div>
              {configuracoes.programaFidelidadeAtivo && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="pontosPorVisita">Pontos por visita no programa de fidelidade</Label>
                    <Input
                      id="pontosPorVisita"
                      type="number"
                      value={configuracoes.pontosPorVisita}
                      onChange={(e) => handleChange("pontosPorVisita", parseInt(e.target.value))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pontosParaResgate">Pontos necessários para resgate</Label>
                    <Input
                      id="pontosParaResgate"
                      type="number"
                      value={configuracoes.pontosParaResgate}
                      onChange={(e) => handleChange("pontosParaResgate", parseInt(e.target.value))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="valorDescontoResgatePontos">Valor do desconto no resgate de pontos (%)</Label>
                    <Input
                      id="valorDescontoResgatePontos"
                      type="number"
                      value={configuracoes.valorDescontoResgatePontos}
                      onChange={(e) => handleChange("valorDescontoResgatePontos", parseInt(e.target.value))}
                    />
                  </div>
                </>
              )}
              <div className="flex items-center space-x-2">
                <Switch
                  id="oferecerServicosComplementares"
                  checked={configuracoes.oferecerServicosComplementares}
                  onCheckedChange={(checked) => handleChange("oferecerServicosComplementares", checked)}
                />
                <Label htmlFor="oferecerServicosComplementares">Oferecer serviços complementares</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="permitirListaEspera"
                  checked={configuracoes.permitirListaEspera}
                  onCheckedChange={(checked) => handleChange("permitirListaEspera", checked)}
                />
                <Label htmlFor="permitirListaEspera">Permitir lista de espera</Label>
              </div>
              {configuracoes.permitirListaEspera && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="capacidadeMaximaListaEspera">Capacidade máxima da lista de espera</Label>
                    <Input
                      id="capacidadeMaximaListaEspera"
                      type="number"
                      value={configuracoes.capacidadeMaximaListaEspera}
                      onChange={(e) => handleChange("capacidadeMaximaListaEspera", parseInt(e.target.value))}
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="notificarVagasListaEspera"
                      checked={configuracoes.notificarVagasListaEspera}
                      onCheckedChange={(checked) => handleChange("notificarVagasListaEspera", checked)}
                    />
                    <Label htmlFor="notificarVagasListaEspera">Notificar sobre vagas da lista de espera</Label>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tempoLimiteAceitarVagaListaEspera">Tempo limite para aceitar vaga da lista de espera (horas)</Label>
                    <Input
                      id="tempoLimiteAceitarVagaListaEspera"
                      type="number"
                      value={configuracoes.tempoLimiteAceitarVagaListaEspera}
                      onChange={(e) => handleChange("tempoLimiteAceitarVagaListaEspera", parseInt(e.target.value))}
                    />
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