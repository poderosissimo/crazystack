import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChevronDown, Code, Copy, Eye, Layout, Wand2 } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

export default function SaasUIGenerator() {
  const [screenType, setScreenType] = useState("landing")
  const [prompt, setPrompt] = useState("")
  const [generating, setGenerating] = useState(false)
  const [screenParams, setScreenParams] = useState({
    name: "",
    description: "",
    primaryAction: "",
    secondaryAction: "",
    colorScheme: "light",
  })
  const [uiElements, setUiElements] = useState({
    header: false,
    footer: false,
    sidebar: false,
    navigationMenu: false,
    searchBar: false,
    loginForm: false,
    signupForm: false,
    dataTable: false,
    chart: false,
    modal: false,
    tooltip: false,
    accordion: false,
    tabs: false,
    carousel: false,
    pagination: false,
    breadcrumbs: false,
    notificationSystem: false,
    userProfile: false,
    settingsPanel: false,
    fileUploader: false,
  })
  const [advancedParams, setAdvancedParams] = useState({
    useCustomFonts: false,
    useSvgIcons: false,
    includeAccessibility: true,
    darkModeSupport: false,
    useGridLayout: false,
    includeFormValidation: false,
    useCustomComponents: false,
    optimizeForPerformance: false,
    responsiveDesign: true,
    animatedTransitions: false,
    internationalização: false,
    errorHandling: false,
    loadingStates: false,
  })

  const handleScreenParamChange = (param, value) => {
    setScreenParams(prev => ({ ...prev, [param]: value }))
  }

  const handleUiElementChange = (element, checked) => {
    setUiElements(prev => ({ ...prev, [element]: checked }))
  }

  const handleAdvancedParamChange = (param, value) => {
    setAdvancedParams(prev => ({ ...prev, [param]: value }))
  }

  const generatePrompt = () => {
    const selectedElements = Object.entries(uiElements)
      .filter(([_, value]) => value)
      .map(([key, _]) => key)
      .join(", ")

    const advancedFeatures = Object.entries(advancedParams)
      .filter(([_, value]) => value)
      .map(([key, _]) => key)
      .join(", ")

    const prompt = `
Crie uma tela de ${screenType} para um aplicativo SaaS com as seguintes especificações:

Nome da tela: ${screenParams.name}
Descrição: ${screenParams.description}

Ação primária: ${screenParams.primaryAction}
Ação secundária: ${screenParams.secondaryAction}

Esquema de cores: ${screenParams.colorScheme}

Elementos de UI a serem incluídos:
${selectedElements}

Recursos avançados a serem implementados:
${advancedFeatures}

Por favor, gere um código React completo para esta tela, utilizando Tailwind CSS para estilização. 
O código deve ser responsivo, acessível e otimizado para performance. 
Inclua comentários explicativos para as principais seções e funcionalidades.

Estruture o código da seguinte forma:
1. Imports necessários
2. Definição do componente principal
3. Estados e hooks relevantes
4. Funções auxiliares (se necessário)
5. JSX para a estrutura da tela
6. Estilos Tailwind CSS inline

Certifique-se de que o código esteja pronto para ser copiado e colado em um projeto React + Tailwind CSS.
    `
    setPrompt(prompt.trim())
  }

  const handleGenerate = () => {
    setGenerating(true)
    generatePrompt()
    setTimeout(() => {
      setGenerating(false)
    }, 2000)
  }

  const copyPrompt = () => {
    navigator.clipboard.writeText(prompt)
    toast({
      title: "Prompt copiado!",
      description: "O prompt foi copiado para a área de transferência.",
    })
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">SaaS UI Generator</h1>
      
      <Tabs defaultValue="design" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="design">
            <Layout className="w-4 h-4 mr-2" />
            Design
          </TabsTrigger>
          <TabsTrigger value="preview">
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </TabsTrigger>
          <TabsTrigger value="code">
            <Code className="w-4 h-4 mr-2" />
            Code
          </TabsTrigger>
        </TabsList>
        <TabsContent value="design">
          <Card>
            <CardHeader>
              <CardTitle>Design da Tela SaaS</CardTitle>
              <CardDescription>Configure os parâmetros para gerar o prompt da sua tela</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="screenType">Tipo de Tela</Label>
                <Select value={screenType} onValueChange={setScreenType}>
                  <SelectTrigger id="screenType">
                    <SelectValue placeholder="Selecione o tipo de tela" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="landing">Landing Page</SelectItem>
                    <SelectItem value="dashboard">Dashboard</SelectItem>
                    <SelectItem value="settings">Configurações</SelectItem>
                    <SelectItem value="profile">Perfil de Usuário</SelectItem>
                    <SelectItem value="pricing">Planos e Preços</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="name">Nome da Tela</Label>
                <Input 
                  id="name" 
                  value={screenParams.name}
                  onChange={(e) => handleScreenParamChange('name', e.target.value)}
                  placeholder="Ex: Dashboard Principal"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Descrição da Tela</Label>
                <Textarea 
                  id="description"
                  value={screenParams.description}
                  onChange={(e) => handleScreenParamChange('description', e.target.value)}
                  placeholder="Descreva o propósito e os principais elementos da tela"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="primaryAction">Ação Primária</Label>
                <Input 
                  id="primaryAction"
                  value={screenParams.primaryAction}
                  onChange={(e) => handleScreenParamChange('primaryAction', e.target.value)}
                  placeholder="Ex: Criar Novo Projeto"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="secondaryAction">Ação Secundária</Label>
                <Input 
                  id="secondaryAction"
                  value={screenParams.secondaryAction}
                  onChange={(e) => handleScreenParamChange('secondaryAction', e.target.value)}
                  placeholder="Ex: Ver Tutoriais"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="colorScheme">Esquema de Cores</Label>
                <Select 
                  value={screenParams.colorScheme}
                  onValueChange={(value) => handleScreenParamChange('colorScheme', value)}
                >
                  <SelectTrigger id="colorScheme">
                    <SelectValue placeholder="Selecione o esquema de cores" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Claro</SelectItem>
                    <SelectItem value="dark">Escuro</SelectItem>
                    <SelectItem value="colorful">Colorido</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Elementos de UI</Label>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(uiElements).map(([key, value]) => (
                    <div key={key} className="flex items-center space-x-2">
                      <Checkbox
                        id={key}
                        checked={value}
                        onCheckedChange={(checked) => handleUiElementChange(key, checked)}
                      />
                      <Label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="advanced-params">
                  <AccordionTrigger>
                    <div className="flex items-center">
                      <ChevronDown className="mr-2 h-4 w-4" />
                      Parâmetros Avançados
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 mt-4">
                      {Object.entries(advancedParams).map(([key, value]) => (
                        <div key={key} className="flex items-center space-x-2">
                          <Switch
                            id={key}
                            checked={value}
                            onCheckedChange={(checked) => handleAdvancedParamChange(key, checked)}
                          />
                          <Label htmlFor={key}>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</Label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
            <CardFooter>
              <Button onClick={handleGenerate} disabled={generating} className="w-full">
                {generating ? (
                  <>
                    <Wand2 className="mr-2 h-4 w-4 animate-spin" />
                    Gerando Prompt...
                  </>
                ) : (
                  <>
                    <Wand2 className="mr-2 h-4 w-4" />
                    Gerar Prompt
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="preview">
          <Card>
            <CardHeader>
              <CardTitle>Preview da Tela</CardTitle>
              <CardDescription>Visualização da tela gerada (em desenvolvimento)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted h-96 flex items-center justify-center">
                <p className="text-muted-foreground">Preview em desenvolvimento</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="code">
          <Card>
            <CardHeader>
              <CardTitle>Código Gerado</CardTitle>
              <CardDescription>Prompt para gerar o código da tela</CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded-md overflow-auto max-h-96">
                <code>{prompt || "Clique em 'Gerar Prompt' para ver o código aqui"}</code>
              </pre>
            </CardContent>
            <CardFooter>
              <Button onClick={copyPrompt} className="w-full" disabled={!prompt}>
                <Copy className="mr-2 h-4 w-4" />
                Copiar Prompt
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}