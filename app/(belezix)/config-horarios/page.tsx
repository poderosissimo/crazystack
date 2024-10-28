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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { toast } from "@/components/ui/use-toast"

type HorarioTrabalho = {
  inicio: string
  fim: string
}

type HorarioAlternativo = HorarioTrabalho & {
  ativo: boolean
  dias: string[]
}

type Feriado = {
  data: Date
  descricao: string
}

type Falta = {
  data: Date
  motivo: string
}

export default function ConfiguracaoHorariosAvancada() {
  const [horarioPadrao, setHorarioPadrao] = React.useState<HorarioTrabalho>({ inicio: "09:00", fim: "18:00" })
  const [horariosAlternativos, setHorariosAlternativos] = React.useState<HorarioAlternativo[]>([
    { ativo: false, inicio: "08:00", fim: "17:00", dias: [] },
    { ativo: false, inicio: "10:00", fim: "19:00", dias: [] },
    { ativo: false, inicio: "12:00", fim: "21:00", dias: [] },
  ])
  const [horarioAlmoco, setHorarioAlmoco] = React.useState<HorarioTrabalho>({ inicio: "12:00", fim: "13:00" })
  const [almocoBloqueado, setAlmocoBloqueado] = React.useState(true)

  const diasSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"]
  const [diasTrabalho, setDiasTrabalho] = React.useState<string[]>(["Segunda", "Terça", "Quarta", "Quinta", "Sexta"])

  const [feriados, setFeriados] = React.useState<Feriado[]>([])
  const [faltas, setFaltas] = React.useState<Falta[]>([])

  const [novoFeriado, setNovoFeriado] = React.useState<Feriado>({ data: new Date(), descricao: "" })
  const [novaFalta, setNovaFalta] = React.useState<Falta>({ data: new Date(), motivo: "" })

  const verificarConflitos = (): boolean => {
    const horarios = [
      { ...horarioPadrao, dias: diasTrabalho },
      ...horariosAlternativos.filter(h => h.ativo)
    ]
    for (let i = 0; i < horarios.length; i++) {
      for (let j = i + 1; j < horarios.length; j++) {
        const diasConflitantes = horarios[i].dias.filter(dia => horarios[j].dias.includes(dia))
        if (diasConflitantes.length > 0 &&
            ((horarios[i].inicio < horarios[j].fim && horarios[i].fim > horarios[j].inicio) ||
             (horarios[j].inicio < horarios[i].fim && horarios[j].fim > horarios[i].inicio))) {
          return true
        }
      }
    }
    return false
  }

  const salvarConfiguracoes = () => {
    if (verificarConflitos()) {
      toast({
        title: "Erro",
        description: "Há conflitos entre os horários configurados. Por favor, ajuste-os antes de salvar.",
        variant: "destructive",
      })
      return
    }
    
    // Aqui você implementaria a lógica para salvar as configurações
    toast({
      title: "Sucesso",
      description: "Configurações de horário salvas com sucesso!",
    })
  }

  const adicionarFeriado = () => {
    if (novoFeriado.descricao.trim() === "") {
      toast({
        title: "Erro",
        description: "Por favor, forneça uma descrição para o feriado.",
        variant: "destructive",
      })
      return
    }
    setFeriados([...feriados, novoFeriado])
    setNovoFeriado({ data: new Date(), descricao: "" })
  }

  const adicionarFalta = () => {
    if (novaFalta.motivo.trim() === "") {
      toast({
        title: "Erro",
        description: "Por favor, forneça um motivo para a falta.",
        variant: "destructive",
      })
      return
    }
    setFaltas([...faltas, novaFalta])
    setNovaFalta({ data: new Date(), motivo: "" })
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Configuração Avançada de Horários de Trabalho</CardTitle>
        <CardDescription>Defina os horários de funcionamento, feriados e faltas do estabelecimento</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Horário Padrão</h3>
          <div className="flex space-x-4">
            <div className="flex-1 space-y-2">
              <Label htmlFor="horario-padrao-inicio">Início</Label>
              <Input
                id="horario-padrao-inicio"
                type="time"
                value={horarioPadrao.inicio}
                onChange={(e) => setHorarioPadrao({ ...horarioPadrao, inicio: e.target.value })}
              />
            </div>
            <div className="flex-1 space-y-2">
              <Label htmlFor="horario-padrao-fim">Fim</Label>
              <Input
                id="horario-padrao-fim"
                type="time"
                value={horarioPadrao.fim}
                onChange={(e) => setHorarioPadrao({ ...horarioPadrao, fim: e.target.value })}
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Horários Alternativos</h3>
          {horariosAlternativos.map((horario, index) => (
            <div key={index} className="space-y-4 border-t pt-4">
              <div className="flex items-center space-x-4">
                <Switch
                  checked={horario.ativo}
                  onCheckedChange={(checked) => {
                    const novosHorarios = [...horariosAlternativos]
                    novosHorarios[index].ativo = checked
                    setHorariosAlternativos(novosHorarios)
                  }}
                />
                <div className="flex-1 space-y-2">
                  <Label htmlFor={`horario-alt-${index}-inicio`}>Início</Label>
                  <Input
                    id={`horario-alt-${index}-inicio`}
                    type="time"
                    value={horario.inicio}
                    onChange={(e) => {
                      const novosHorarios = [...horariosAlternativos]
                      novosHorarios[index].inicio = e.target.value
                      setHorariosAlternativos(novosHorarios)
                    }}
                    disabled={!horario.ativo}
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <Label htmlFor={`horario-alt-${index}-fim`}>Fim</Label>
                  <Input
                    id={`horario-alt-${index}-fim`}
                    type="time"
                    value={horario.fim}
                    onChange={(e) => {
                      const novosHorarios = [...horariosAlternativos]
                      novosHorarios[index].fim = e.target.value
                      setHorariosAlternativos(novosHorarios)
                    }}
                    disabled={!horario.ativo}
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                {diasSemana.map((dia) => (
                  <div key={dia} className="flex items-center space-x-2">
                    <Checkbox
                      id={`dia-alt-${index}-${dia}`}
                      checked={horario.dias.includes(dia)}
                      onCheckedChange={(checked) => {
                        const novosHorarios = [...horariosAlternativos]
                        if (checked) {
                          novosHorarios[index].dias = [...novosHorarios[index].dias, dia]
                        } else {
                          novosHorarios[index].dias = novosHorarios[index].dias.filter((d) => d !== dia)
                        }
                        setHorariosAlternativos(novosHorarios)
                      }}
                      disabled={!horario.ativo}
                    />
                    <Label htmlFor={`dia-alt-${index}-${dia}`}>{dia}</Label>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <h3 className="text-lg font-medium">Horário de Almoço</h3>
            <Switch
              checked={almocoBloqueado}
              onCheckedChange={setAlmocoBloqueado}
              aria-label="Bloquear horário de almoço"
            />
          </div>
          <div className="flex space-x-4">
            <div className="flex-1 space-y-2">
              <Label htmlFor="almoco-inicio">Início</Label>
              <Input
                id="almoco-inicio"
                type="time"
                value={horarioAlmoco.inicio}
                onChange={(e) => setHorarioAlmoco({ ...horarioAlmoco, inicio: e.target.value })}
                disabled={!almocoBloqueado}
              />
            </div>
            <div className="flex-1 space-y-2">
              <Label htmlFor="almoco-fim">Fim</Label>
              <Input
                id="almoco-fim"
                type="time"
                value={horarioAlmoco.fim}
                onChange={(e) => setHorarioAlmoco({ ...horarioAlmoco, fim: e.target.value })}
                disabled={!almocoBloqueado}
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Dias de Trabalho Padrão</h3>
          <div className="flex flex-wrap gap-4">
            {diasSemana.map((dia) => (
              <div key={dia} className="flex items-center space-x-2">
                <Checkbox
                  id={`dia-${dia}`}
                  checked={diasTrabalho.includes(dia)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setDiasTrabalho([...diasTrabalho, dia])
                    } else {
                      setDiasTrabalho(diasTrabalho.filter((d) => d !== dia))
                    }
                  }}
                />
                <Label htmlFor={`dia-${dia}`}>{dia}</Label>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Feriados</h3>
          <div className="flex space-x-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {format(novoFeriado.data, "dd/MM/yyyy")}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={novoFeriado.data}
                  onSelect={(date) => date && setNovoFeriado({ ...novoFeriado, data: date })}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <Input
              placeholder="Descrição do feriado"
              value={novoFeriado.descricao}
              onChange={(e) => setNovoFeriado({ ...novoFeriado, descricao: e.target.value })}
            />
            <Button onClick={adicionarFeriado}>Adicionar Feriado</Button>
          </div>
          <div className="space-y-2">
            {feriados.map((feriado, index) => (
              <div key={index} className="flex items-center justify-between">
                <span>{format(feriado.data, "dd/MM/yyyy")} - {feriado.descricao}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setFeriados(feriados.filter((_, i) => i !== index))}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Faltas</h3>
          <div className="flex space-x-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {format(novaFalta.data, "dd/MM/yyyy")}
                </Button>
              </PopoverTrigger>
              
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={novaFalta.data}
                  onSelect={(date) => date && setNovaFalta({ ...novaFalta, data: date })}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <Input
              placeholder="Motivo da falta"
              value={novaFalta.motivo}
              onChange={(e) => setNovaFalta({ ...novaFalta, motivo: e.target.value })}
            />
            <Button onClick={adicionarFalta}>Adicionar Falta</Button>
          </div>
          <div className="space-y-2">
            {faltas.map((falta, index) => (
              <div key={index} className="flex items-center justify-between">
                <span>{format(falta.data, "dd/MM/yyyy")} - {falta.motivo}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setFaltas(faltas.filter((_, i) => i !== index))}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
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