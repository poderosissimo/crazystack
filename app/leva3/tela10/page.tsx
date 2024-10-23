"use client"

import { useState } from 'react'
import { Search, X, ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"

// Dados simulados de franquias com 15 parâmetros
const franquias = [
  { 
    id: 1, 
    nome: "Burger King", 
    categoria: "Alimentação", 
    investimentoMinimo: 1500000,
    investimentoMaximo: 2500000,
    faturamentoMedioMensal: 250000,
    lucroMedioMensal: 50000,
    tempoRetorno: 36,
    taxaFranchising: 45000,
    royalties: 5,
    taxaMarketing: 3,
    numeroUnidades: 1200,
    tempoMercado: 65,
    areaMinimaM2: 120,
    funcionariosNecessarios: 20,
    propriaOuTerceirizada: "Própria"
  },
  { 
    id: 2, 
    nome: "O Boticário", 
    categoria: "Cosméticos", 
    investimentoMinimo: 250000,
    investimentoMaximo: 350000,
    faturamentoMedioMensal: 80000,
    lucroMedioMensal: 15000,
    tempoRetorno: 24,
    taxaFranchising: 30000,
    royalties: 3,
    taxaMarketing: 2,
    numeroUnidades: 3700,
    tempoMercado: 45,
    areaMinimaM2: 30,
    funcionariosNecessarios: 3,
    propriaOuTerceirizada: "Própria"
  },
  { 
    id: 3, 
    nome: "CVC", 
    categoria: "Turismo", 
    investimentoMinimo: 100000,
    investimentoMaximo: 150000,
    faturamentoMedioMensal: 50000,
    lucroMedioMensal: 8000,
    tempoRetorno: 18,
    taxaFranchising: 20000,
    royalties: 2,
    taxaMarketing: 1,
    numeroUnidades: 1400,
    tempoMercado: 50,
    areaMinimaM2: 40,
    funcionariosNecessarios: 4,
    propriaOuTerceirizada: "Terceirizada"
  },
  { 
    id: 4, 
    nome: "Cacau Show", 
    categoria: "Alimentação", 
    investimentoMinimo: 120000,
    investimentoMaximo: 180000,
    faturamentoMedioMensal: 40000,
    lucroMedioMensal: 7000,
    tempoRetorno: 20,
    taxaFranchising: 15000,
    royalties: 4,
    taxaMarketing: 2,
    numeroUnidades: 2500,
    tempoMercado: 30,
    areaMinimaM2: 20,
    funcionariosNecessarios: 2,
    propriaOuTerceirizada: "Própria"
  },
  { 
    id: 5, 
    nome: "Kumon", 
    categoria: "Educação", 
    investimentoMinimo: 50000,
    investimentoMaximo: 80000,
    faturamentoMedioMensal: 20000,
    lucroMedioMensal: 5000,
    tempoRetorno: 12,
    taxaFranchising: 10000,
    royalties: 3,
    taxaMarketing: 1,
    numeroUnidades: 1500,
    tempoMercado: 60,
    areaMinimaM2: 60,
    funcionariosNecessarios: 2,
    propriaOuTerceirizada: "Própria"
  },
]

export default function BuscaComparacaoFranquiasDetalhada() {
  const [busca, setBusca] = useState("")
  const [categoria, setCategoria] = useState("")
  const [investimentoMax, setInvestimentoMax] = useState(2500000)
  const [tempoRetornoMax, setTempoRetornoMax] = useState(36)
  const [propriaOuTerceirizada, setPropriaOuTerceirizada] = useState<string[]>([])
  const [franquiasSelecionadas, setFranquiasSelecionadas] = useState<number[]>([])
  const [expandedCards, setExpandedCards] = useState<number[]>([])

  const franquiasFiltradas = franquias.filter(franquia => 
    franquia.nome.toLowerCase().includes(busca.toLowerCase()) &&
    (categoria === "" || franquia.categoria === categoria) &&
    franquia.investimentoMinimo <= investimentoMax &&
    franquia.tempoRetorno <= tempoRetornoMax &&
    (propriaOuTerceirizada.length === 0 || propriaOuTerceirizada.includes(franquia.propriaOuTerceirizada))
  )

  const toggleSelecao = (id: number) => {
    if (franquiasSelecionadas.includes(id)) {
      setFranquiasSelecionadas(franquiasSelecionadas.filter(f => f !== id))
    } else if (franquiasSelecionadas.length < 2) {
      setFranquiasSelecionadas([...franquiasSelecionadas, id])
    }
  }

  const toggleExpanded = (id: number) => {
    if (expandedCards.includes(id)) {
      setExpandedCards(expandedCards.filter(cardId => cardId !== id))
    } else {
      setExpandedCards([...expandedCards, id])
    }
  }

  const togglePropriaOuTerceirizada = (value: string) => {
    setPropriaOuTerceirizada(prev => 
      prev.includes(value)
        ? prev.filter(item => item !== value)
        : [...prev, value]
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Busca e Comparação de Franquias</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
        <Input
          placeholder="Buscar franquias..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
        <Select value={categoria} onValueChange={setCategoria}>
          <SelectTrigger>
            <SelectValue placeholder="Categoria" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">Todas</SelectItem>
            <SelectItem value="Alimentação">Alimentação</SelectItem>
            <SelectItem value="Cosméticos">Cosméticos</SelectItem>
            <SelectItem value="Turismo">Turismo</SelectItem>
            <SelectItem value="Educação">Educação</SelectItem>
          </SelectContent>
        </Select>
        <div>
          <label className="block text-sm font-medium mb-2">Investimento Máximo: R$ {investimentoMax.toLocaleString()}</label>
          <Slider
            min={0}
            max={2500000}
            step={50000}
            value={[investimentoMax]}
            onValueChange={([value]) => setInvestimentoMax(value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Tempo de Retorno Máximo: {tempoRetornoMax} meses</label>
          <Slider
            min={0}
            max={60}
            step={1}
            value={[tempoRetornoMax]}
            onValueChange={([value]) => setTempoRetornoMax(value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Tipo de Operação:</label>
          <div className="flex gap-4">
            <div className="flex items-center">
              <Checkbox 
                id="propria" 
                checked={propriaOuTerceirizada.includes('Própria')}
                onCheckedChange={() => togglePropriaOuTerceirizada('Própria')}
              />
              <label htmlFor="propria" className="ml-2">Própria</label>
            </div>
            <div className="flex items-center">
              <Checkbox 
                id="terceirizada" 
                checked={propriaOuTerceirizada.includes('Terceirizada')}
                onCheckedChange={() => togglePropriaOuTerceirizada('Terceirizada')}
              />
              <label htmlFor="terceirizada" className="ml-2">Terceirizada</label>
            </div>
          </div>
        </div>
        <Button className="h-10">
          <Search className="mr-2 h-4 w-4" /> Buscar
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {franquiasFiltradas.map(franquia => (
          <Card key={franquia.id} className={franquiasSelecionadas.includes(franquia.id) ? "border-primary" : ""}>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                {franquia.nome}
                <Button variant="ghost" size="icon" onClick={() => toggleExpanded(franquia.id)}>
                  {expandedCards.includes(franquia.id) ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Categoria: {franquia.categoria}</p>
              <p>Investimento: R$ {franquia.investimentoMinimo.toLocaleString()} - R$ {franquia.investimentoMaximo.toLocaleString()}</p>
              <p>Faturamento Médio Mensal: R$ {franquia.faturamentoMedioMensal.toLocaleString()}</p>
              <p>Tempo de Retorno: {franquia.tempoRetorno} meses</p>
              {expandedCards.includes(franquia.id) && (
                <>
                  <p>Lucro Médio Mensal: R$ {franquia.lucroMedioMensal.toLocaleString()}</p>
                  <p>Taxa de Franchising: R$ {franquia.taxaFranchising.toLocaleString()}</p>
                  <p>Royalties: {franquia.royalties}%</p>
                  <p>Taxa de Marketing: {franquia.taxaMarketing}%</p>
                  <p>Número de Unidades: {franquia.numeroUnidades}</p>
                  <p>Tempo no Mercado: {franquia.tempoMercado} anos</p>
                  <p>Área Mínima: {franquia.areaMinimaM2} m²</p>
                  <p>Funcionários Necessários: {franquia.funcionariosNecessarios}</p>
                  <p>Operação: {franquia.propriaOuTerceirizada}</p>
                </>
              )}
            </CardContent>
            <CardFooter>
              <Button 
                variant={franquiasSelecionadas.includes(franquia.id) ? "secondary" : "default"}
                onClick={() => toggleSelecao(franquia.id)}
                className="w-full"
              >
                {franquiasSelecionadas.includes(franquia.id) ? "Remover da Comparação" : "Adicionar à Comparação"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {franquiasSelecionadas.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Comparação de Franquias</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {franquiasSelecionadas.map(id => {
              const franquia = franquias.find(f => f.id === id)!
              return (
                <Card key={franquia.id}>
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      {franquia.nome}
                      <Button variant="ghost" size="icon" onClick={() => toggleSelecao(franquia.id)}>
                        <X className="h-4 w-4" />
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Categoria: {franquia.categoria}</p>
                    <p>Investimento: R$ {franquia.investimentoMinimo.toLocaleString()} - R$ {franquia.investimentoMaximo.toLocaleString()}</p>
                    <p>Faturamento Médio Mensal: R$ {franquia.faturamentoMedioMensal.toLocaleString()}</p>
                    <p>Lucro Médio Mensal: R$ {franquia.lucroMedioMensal.toLocaleString()}</p>
                    <p>Tempo de Retorno: {franquia.tempoRetorno} meses</p>
                    <p>Taxa de Franchising: R$ {franquia.taxaFranchising.toLocaleString()}</p>
                    <p>Royalties: {franquia.royalties}%</p>
                    <p>Taxa de Marketing: {franquia.taxaMarketing}%</p>
                    <p>Número de Unidades: {franquia.numeroUnidades}</p>
                    <p>Tempo no Mercado: {franquia.tempoMercado} anos</p>
                    <p>Área Mínima: {franquia.areaMinimaM2} m²</p>
                    <p>Funcionários Necessários: {franquia.funcionariosNecessarios}</p>
                    <p>Operação: {franquia.propriaOuTerceirizada}</p>
                    <p>ROI Estimado: {((franquia.lucroMedioMensal * 12 / franquia.investimentoMinimo) * 100).toFixed(2)}% ao ano</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}