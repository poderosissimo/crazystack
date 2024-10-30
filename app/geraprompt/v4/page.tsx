"use client"


const screenTypes = [
  { value: "landing", label: "Landing Page" },
  { value: "dashboard", label: "Dashboard" },
  { value: "settings", label: "Configurações" },
  { value: "profile", label: "Perfil de Usuário" },
  { value: "pricing", label: "Planos e Preços" },
  { value: "login", label: "Login" },
  { value: "signup", label: "Cadastro" },
  { value: "product", label: "Página de Produto" },
  { value: "blog", label: "Blog" },
  { value: "analytics", label: "Analytics" },
  { value: "support", label: "Suporte" },
  { value: "onboarding", label: "Onboarding" },
  { value: "faq", label: "Perguntas Frequentes" },
  { value: "testimonials", label: "Depoimentos" },
  { value: "case_studies", label: "Estudos de Caso" },
  { value: "privacy_policy", label: "Política de Privacidade" },
  { value: "terms_conditions", label: "Termos e Condições" },
  { value: "team", label: "Equipe" },
  { value: "careers", label: "Carreiras" },
  { value: "events", label: "Eventos" },
  { value: "news", label: "Notícias" },
  { value: "partners", label: "Parceiros" },
  { value: "success_stories", label: "Histórias de Sucesso" },
  { value: "community", label: "Comunidade" },
  { value: "features", label: "Funcionalidades" },
  { value: "roadmap", label: "Roadmap" },
  { value: "api_docs", label: "Documentação API" },
  { value: "integrations", label: "Integrações" },
  { value: "user_management", label: "Gerenciamento de Usuários" },
  { value: "billing", label: "Faturamento" },
  { value: "notifications", label: "Notificações" },
  { value: "activity_log", label: "Log de Atividades" },
  { value: "project_overview", label: "Visão Geral do Projeto" },
  { value: "user_feedback", label: "Feedback do Usuário" },
  { value: "release_notes", label: "Notas de Versão" },
  { value: "changelog", label: "Histórico de Mudanças" },
  { value: "security", label: "Segurança" },
  { value: "admin_panel", label: "Painel de Admin" },
  { value: "content_management", label: "Gerenciamento de Conteúdo" },
  { value: "knowledge_base", label: "Base de Conhecimento" },
  { value: "upgrade_plan", label: "Atualizar Plano" },
  { value: "file_manager", label: "Gerenciador de Arquivos" },
  { value: "search", label: "Busca" },
  { value: "inbox", label: "Caixa de Entrada" },
  { value: "calendar", label: "Calendário" },
  { value: "tasks", label: "Tarefas" },
  { value: "reports", label: "Relatórios" },
  { value: "leaderboard", label: "Ranking" },
  { value: "surveys", label: "Pesquisas" },
  { value: "referrals", label: "Indicações" },
  { value: "rewards", label: "Recompensas" },
  { value: "wish_list", label: "Lista de Desejos" },
  { value: "order_history", label: "Histórico de Pedidos" },
  { value: "learning", label: "Aprendizagem" },
  { value: "events_calendar", label: "Calendário de Eventos" },
  { value: "feedback", label: "Feedback" },
  { value: "tasks_overview", label: "Visão Geral das Tarefas" },
  { value: "user_dashboard", label: "Painel do Usuário" },
  { value: "progress_tracking", label: "Rastreamento de Progresso" },
  { value: "milestones", label: "Marcos" },
  { value: "recruitment", label: "Recrutamento" },
  { value: "user_groups", label: "Grupos de Usuários" },
  { value: "global_settings", label: "Configurações Globais" },
  { value: "access_control", label: "Controle de Acesso" },
  { value: "workflow_automation", label: "Automação de Fluxo de Trabalho" },
  { value: "personalization", label: "Personalização" },
  { value: "survey_builder", label: "Construtor de Pesquisas" },
  { value: "social_feed", label: "Feed Social" },
  { value: "media_gallery", label: "Galeria de Mídia" },
];

const saasTypes = [
  { value: "crm", label: "CRM" },
  { value: "project_management", label: "Gerenciamento de Projetos" },
  { value: "marketing_automation", label: "Automação de Marketing" },
  { value: "ecommerce", label: "E-commerce" },
  { value: "accounting", label: "Contabilidade" },
  { value: "hr_management", label: "Gestão de RH" },
  { value: "customer_support", label: "Suporte ao Cliente" },
  { value: "analytics", label: "Analytics" },
  { value: "collaboration", label: "Colaboração" },
  { value: "education", label: "Educação" },
  { value: "real_estate", label: "Imobiliário" },
  { value: "event_management", label: "Gerenciamento de Eventos" },
  { value: "sales_automation", label: "Automação de Vendas" },
  { value: "content_management", label: "Gerenciamento de Conteúdo" },
  { value: "property_management", label: "Gerenciamento de Propriedades" },
  { value: "inventory_management", label: "Gerenciamento de Inventário" },
  { value: "fleet_management", label: "Gerenciamento de Frotas" },
  { value: "compliance_management", label: "Gerenciamento de Conformidade" },
  { value: "e-learning", label: "E-learning" },
  { value: "survey_software", label: "Software de Pesquisas" },
  { value: "mind_mapping", label: "Mapeamento Mental" },
  { value: "performance_management", label: "Gerenciamento de Desempenho" },
  { value: "workflow_management", label: "Gerenciamento de Fluxo de Trabalho" },
  { value: "visitor_management", label: "Gerenciamento de Visitantes" },
  { value: "data_security", label: "Segurança de Dados" },
  { value: "lead_generation", label: "Geração de Leads" },
  { value: "data_analysis", label: "Análise de Dados" },
  { value: "cybersecurity", label: "Cibersegurança" },
  { value: "productivity_tools", label: "Ferramentas de Produtividade" },
  { value: "video_conferencing", label: "Videoconferência" },
  { value: "email_marketing", label: "Email Marketing" },
  { value: "social_media_management", label: "Gerenciamento de Mídias Sociais" },
  { value: "erp", label: "ERP" },
  { value: "cloud_storage", label: "Armazenamento em Nuvem" },
  { value: "risk_management", label: "Gerenciamento de Riscos" },
  { value: "seo_optimization", label: "Otimização SEO" },
  { value: "lead_nurturing", label: "Nutrição de Leads" },
  { value: "mobile_app_builder", label: "Construtor de Apps Mobile" },
  { value: "chatbot", label: "Chatbot" },
  { value: "project_collaboration", label: "Colaboração de Projetos" },
  { value: "blockchain_management", label: "Gerenciamento de Blockchain" },
  { value: "customer_journey_mapping", label: "Mapeamento da Jornada do Cliente" },
  { value: "budget_management", label: "Gerenciamento de Orçamentos" },
  { value: "expense_tracking", label: "Rastreamento de Despesas" },
  { value: "staff_scheduling", label: "Agendamento de Equipes" },
  { value: "recruitment_software", label: "Software de Recrutamento" },
  { value: "employee_onboarding", label: "Onboarding de Funcionários" },
  { value: "remote_work_management", label: "Gerenciamento de Trabalho Remoto" },
  { value: "knowledge_management", label: "Gerenciamento de Conhecimento" },
  { value: "business_intelligence", label: "Inteligência de Negócios" },
  { value: "resource_planning", label: "Planejamento de Recursos" },
  { value: "machine_learning_platform", label: "Plataforma de Machine Learning" },
  { value: "content_curation", label: "Curadoria de Conteúdo" },
  { value: "survey_management", label: "Gerenciamento de Pesquisas" },
  { value: "mobile_marketing", label: "Marketing Mobile" },
  { value: "engagement_platform", label: "Plataforma de Engajamento" },
  { value: "client_portal", label: "Portal do Cliente" },
  { value: "project_financing", label: "Financiamento de Projetos" },
  { value: "insurance_management", label: "Gerenciamento de Seguros" },
  { value: "volunteer_management", label: "Gerenciamento de Voluntários" },
  { value: "AI_assistance", label: "Assistência com IA" },
  { value: "environmental_monitoring", label: "Monitoramento Ambiental" },
  { value: "hospitality_management", label: "Gestão Hoteleira" },
];


const operationAreas = [
  { value: "finance", label: "Finanças" },
  { value: "healthcare", label: "Saúde" },
  { value: "technology", label: "Tecnologia" },
  { value: "education", label: "Educação" },
  { value: "retail", label: "Varejo" },
  { value: "manufacturing", label: "Manufatura" },
  { value: "real_estate", label: "Imobiliário" },
  { value: "hospitality", label: "Hotelaria" },
  { value: "logistics", label: "Logística" },
  { value: "agriculture", label: "Agricultura" },
  { value: "automotive", label: "Automotivo" },
  { value: "construction", label: "Construção Civil" },
  { value: "pharmaceuticals", label: "Farmacêutico" },
  { value: "energy", label: "Energia" },
  { value: "telecommunications", label: "Telecomunicações" },
  { value: "transportation", label: "Transporte" },
  { value: "media", label: "Mídia" },
  { value: "entertainment", label: "Entretenimento" },
  { value: "insurance", label: "Seguros" },
  { value: "public_sector", label: "Setor Público" },
  { value: "non_profit", label: "Organizações sem Fins Lucrativos" },
  { value: "legal", label: "Jurídico" },
  { value: "fashion", label: "Moda" },
  { value: "food_beverages", label: "Alimentos e Bebidas" },
  { value: "environment", label: "Meio Ambiente" },
  { value: "mining", label: "Mineração" },
  { value: "aerospace", label: "Aeroespacial" },
  { value: "aviation", label: "Aviação" },
  { value: "consulting", label: "Consultoria" },
  { value: "fitness", label: "Fitness" },
  { value: "gaming", label: "Jogos" },
  { value: "home_services", label: "Serviços Domésticos" },
  { value: "event_management", label: "Gerenciamento de Eventos" },
  { value: "cybersecurity", label: "Cibersegurança" },
  { value: "recruitment", label: "Recrutamento" },
  { value: "freight_forwarding", label: "Despacho de Cargas" },
  { value: "waste_management", label: "Gestão de Resíduos" },
  { value: "art_culture", label: "Arte e Cultura" },
  { value: "non_durable_goods", label: "Bens Não Duráveis" },
  { value: "durable_goods", label: "Bens Duráveis" },
  { value: "marine", label: "Marítimo" },
  { value: "cosmetics", label: "Cosméticos" },
  { value: "chemical", label: "Químico" },
  { value: "biotechnology", label: "Biotecnologia" },
  { value: "fisheries", label: "Pesca" },
  { value: "forestry", label: "Silvicultura" },
  { value: "printing", label: "Impressão" },
  { value: "travel_tourism", label: "Viagens e Turismo" },
  { value: "social_services", label: "Serviços Sociais" },
  { value: "sports", label: "Esportes" },
  { value: "architecture", label: "Arquitetura" },
  { value: "clean_tech", label: "Tecnologia Limpa" },
  { value: "environmental_services", label: "Serviços Ambientais" },
  { value: "luxury_goods", label: "Bens de Luxo" },
  { value: "pet_care", label: "Cuidados com Animais" },
  { value: "packaging", label: "Embalagens" },
  { value: "water_management", label: "Gestão da Água" },
  { value: "e_commerce", label: "E-commerce" },
  { value: "wellness", label: "Bem-estar" },
  { value: "iot", label: "Internet das Coisas" },
  { value: "digital_media", label: "Mídia Digital" },
  { value: "hr", label: "Recursos Humanos" },
  { value: "alternative_energy", label: "Energia Alternativa" },
  { value: "research", label: "Pesquisa" },
  { value: "recycling", label: "Reciclagem" },
  { value: "supply_chain", label: "Cadeia de Suprimentos" },
  { value: "humanitarian_services", label: "Serviços Humanitários" },
  { value: "urban_planning", label: "Planejamento Urbano" },
  { value: "public_health", label: "Saúde Pública" },
  { value: "family_services", label: "Serviços para Famílias" },
  { value: "market_research", label: "Pesquisa de Mercado" },
  { value: "meteorology", label: "Meteorologia" },
];

const suggestions = {
  landing: {
    title: "Bem-vindo ao FuturoSaaS",
    description: "Transforme sua ideia em realidade com nossa plataforma SaaS intuitiva e poderosa.",
    primaryAction: "Comece Gratuitamente",
    secondaryAction: "Saiba Mais",
  },
  dashboard: {
    title: "Painel de Controle",
    description: "Visualize e gerencie todos os aspectos do seu negócio em um só lugar.",
    primaryAction: "Adicionar Novo Projeto",
    secondaryAction: "Ver Relatórios",
  },
  settings: {
    title: "Configurações da Conta",
    description: "Personalize sua experiência e gerencie suas preferências.",
    primaryAction: "Salvar Alterações",
    secondaryAction: "Redefinir Padrões",
  },
  profile: {
    title: "Seu Perfil",
    description: "Gerencie suas informações pessoais e preferências de conta.",
    primaryAction: "Atualizar Perfil",
    secondaryAction: "Alterar Senha",
  },
  pricing: {
    title: "Escolha seu Plano",
    description: "Encontre o plano perfeito para suas necessidades e orçamento.",
    primaryAction: "Assinar Agora",
    secondaryAction: "Comparar Planos",
  },
  login: {
    title: "Bem-vindo de Volta",
    description: "Acesse sua conta para continuar sua jornada.",
    primaryAction: "Entrar",
    secondaryAction: "Esqueceu a Senha?",
  },
  signup: {
    title: "Crie sua Conta",
    description: "Junte-se a nós e comece a transformar suas ideias em realidade.",
    primaryAction: "Cadastrar",
    secondaryAction: "Já tem uma conta?",
  },
  product: {
    title: "Nosso Produto Revolucionário",
    description: "Descubra como nosso produto pode impulsionar seu negócio.",
    primaryAction: "Comprar Agora",
    secondaryAction: "Agendar Demo",
  },
  blog: {
    title: "Blog FuturoSaaS",
    description: "Fique por dentro das últimas tendências e dicas do mundo SaaS.",
    primaryAction: "Ler Mais",
    secondaryAction: "Inscrever-se",
  },
  analytics: {
    title: "Análise de Desempenho",
    description: "Obtenha insights valiosos sobre o desempenho do seu negócio.",
    primaryAction: "Gerar Relatório",
    secondaryAction: "Configurar Alertas",
  },
  support: {
    title: "Central de Suporte",
    description: "Encontre ajuda e suporte para todas as suas dúvidas.",
    primaryAction: "Abrir Ticket",
    secondaryAction: "Ver FAQs",
  },
  onboarding: {
    title: "Bem-vindo ao FuturoSaaS",
    description: "Vamos configurar sua conta em poucos passos simples.",
    primaryAction: "Começar",
    secondaryAction: "Pular Tutorial",
  },
  invoices: {
    title: "Faturas",
    description: "Gerencie e acompanhe suas faturas e histórico de pagamentos.",
    primaryAction: "Ver Faturas",
    secondaryAction: "Baixar PDF",
  },
  notifications: {
    title: "Notificações",
    description: "Confira suas notificações recentes e personalize suas preferências.",
    primaryAction: "Personalizar Notificações",
    secondaryAction: "Limpar Tudo",
  },
  user_management: {
    title: "Gerenciamento de Usuários",
    description: "Adicione, edite e gerencie as permissões dos usuários.",
    primaryAction: "Adicionar Usuário",
    secondaryAction: "Definir Permissões",
  },
  integrations: {
    title: "Integrações",
    description: "Conecte nossa plataforma com as ferramentas que você já usa.",
    primaryAction: "Adicionar Integração",
    secondaryAction: "Explorar Opções",
  },
  tasks: {
    title: "Tarefas",
    description: "Gerencie suas tarefas diárias e mantenha o foco no que é importante.",
    primaryAction: "Criar Nova Tarefa",
    secondaryAction: "Ver Todas",
  },
  reports: {
    title: "Relatórios",
    description: "Acompanhe o desempenho do seu negócio com relatórios detalhados.",
    primaryAction: "Gerar Relatório",
    secondaryAction: "Ver Histórico",
  },
  calendar: {
    title: "Calendário",
    description: "Agende e organize eventos importantes no seu calendário.",
    primaryAction: "Adicionar Evento",
    secondaryAction: "Sincronizar Calendários",
  },
  feedback: {
    title: "Feedback",
    description: "Dê sua opinião para ajudar a melhorar nossos serviços.",
    primaryAction: "Enviar Feedback",
    secondaryAction: "Ver Feedbacks",
  },
  faq: {
    title: "Perguntas Frequentes",
    description: "Respostas para as dúvidas mais comuns dos nossos usuários.",
    primaryAction: "Ver FAQs",
    secondaryAction: "Procurar Pergunta",
  },
  knowledge_base: {
    title: "Base de Conhecimento",
    description: "Encontre artigos e guias sobre o uso da plataforma.",
    primaryAction: "Acessar Base",
    secondaryAction: "Procurar Artigo",
  },
  compliance: {
    title: "Conformidade",
    description: "Mantenha-se atualizado com os regulamentos e políticas de conformidade.",
    primaryAction: "Ver Políticas",
    secondaryAction: "Relatar Conformidade",
  },
  security: {
    title: "Segurança",
    description: "Veja nossas práticas de segurança e configure suas preferências.",
    primaryAction: "Configurações de Segurança",
    secondaryAction: "Relatar Problema",
  },
  subscription: {
    title: "Assinatura",
    description: "Gerencie sua assinatura e altere seu plano atual.",
    primaryAction: "Alterar Plano",
    secondaryAction: "Cancelar Assinatura",
  },
  performance: {
    title: "Desempenho",
    description: "Monitore o desempenho de sua conta em tempo real.",
    primaryAction: "Ver Dados",
    secondaryAction: "Configurar Alertas",
  },
  inventory: {
    title: "Inventário",
    description: "Controle o estoque e gerencie os produtos disponíveis.",
    primaryAction: "Adicionar Produto",
    secondaryAction: "Ver Estoque",
  },
  messaging: {
    title: "Mensagens",
    description: "Comunique-se com outros membros da sua equipe.",
    primaryAction: "Nova Mensagem",
    secondaryAction: "Configurações de Chat",
  },
  project_overview: {
    title: "Visão Geral do Projeto",
    description: "Obtenha uma visão geral do progresso do seu projeto.",
    primaryAction: "Ver Detalhes",
    secondaryAction: "Editar Projeto",
  },
  project_timeline: {
    title: "Linha do Tempo do Projeto",
    description: "Visualize a linha do tempo completa do projeto.",
    primaryAction: "Adicionar Evento",
    secondaryAction: "Ver Histórico",
  },
  billing: {
    title: "Cobrança",
    description: "Gerencie métodos de pagamento e histórico de cobranças.",
    primaryAction: "Adicionar Método de Pagamento",
    secondaryAction: "Ver Histórico de Cobranças",
  },
  sales_dashboard: {
    title: "Painel de Vendas",
    description: "Acompanhe as métricas de vendas e descubra novas oportunidades.",
    primaryAction: "Criar Relatório de Vendas",
    secondaryAction: "Ver Vendas Recentes",
  },
  marketing_analytics: {
    title: "Análise de Marketing",
    description: "Avalie o impacto das suas campanhas de marketing.",
    primaryAction: "Gerar Relatório",
    secondaryAction: "Configurar Campanha",
  },
  file_management: {
    title: "Gerenciamento de Arquivos",
    description: "Organize e compartilhe arquivos com sua equipe.",
    primaryAction: "Upload de Arquivo",
    secondaryAction: "Ver Pastas",
  },
  community: {
    title: "Comunidade",
    description: "Participe da nossa comunidade e conecte-se com outros usuários.",
    primaryAction: "Entrar na Comunidade",
    secondaryAction: "Ver Tópicos",
  },
  marketplace: {
    title: "Marketplace",
    description: "Explore integrações e ferramentas de parceiros.",
    primaryAction: "Explorar Agora",
    secondaryAction: "Pesquisar Ferramentas",
  },
  announcements: {
    title: "Anúncios",
    description: "Fique por dentro das últimas novidades da nossa plataforma.",
    primaryAction: "Ver Anúncios",
    secondaryAction: "Assinar Notificações",
  },
  survey: {
    title: "Pesquisa",
    description: "Participe de pesquisas para nos ajudar a melhorar.",
    primaryAction: "Responder Pesquisa",
    secondaryAction: "Ver Resultados",
  },
  user_activity: {
    title: "Atividade do Usuário",
    description: "Acompanhe a atividade recente dos usuários.",
    primaryAction: "Ver Atividades",
    secondaryAction: "Configurar Filtros",
  },
  task_board: {
    title: "Quadro de Tarefas",
    description: "Organize as tarefas em quadros e acompanhe o progresso.",
    primaryAction: "Nova Tarefa",
    secondaryAction: "Ver Quadro",
  },
  goal_tracking: {
    title: "Rastreamento de Metas",
    description: "Defina e monitore suas metas empresariais.",
    primaryAction: "Definir Nova Meta",
    secondaryAction: "Ver Progresso",
  },
};

import { useState, useEffect } from 'react'
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
  const [saasType, setSaasType] = useState("crm")
  const [operationArea, setOperationArea] = useState("finance")
  const [prompt, setPrompt] = useState("")
  const [generating, setGenerating] = useState(false)
  const [screenParams, setScreenParams] = useState({
    name: "",
    description: "",
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
  })
  const [advancedParams, setAdvancedParams] = useState({
    includeAccessibility: true,
    darkModeSupport: false,
    useGridLayout: false,
    includeFormValidation: false,
    useCustomComponents: false,
    optimizeForPerformance: false,
    responsiveDesign: true,
    animatedTransitions: false,
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

    const screenTypeLabel = screenTypes.find(type => type.value === screenType)?.label
    const saasTypeLabel = saasTypes.find(type => type.value === saasType)?.label
    const operationAreaLabel = operationAreas.find(area => area.value === operationArea)?.label

    const prompt = `
Crie uma tela de ${screenTypeLabel} para um aplicativo SaaS do tipo ${saasTypeLabel} na área de ${operationAreaLabel} com as seguintes especificações:

Nome da Tela: ${screenParams.name}
Descrição: ${screenParams.description}
Esquema de Cores: ${screenParams.colorScheme}

Elementos de UI a serem incluídos:
${selectedElements}

Recursos avançados a serem implementados:
${advancedFeatures}

Por favor, gere um código React completo para esta tela, utilizando Tailwind CSS para estilização. 
O código deve ser responsivo, acessível e otimizado para performance. 
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

  useEffect(() => {
    if (screenType && suggestions[screenType]) {
      setScreenParams(prev => ({
        ...prev,
        name: suggestions[screenType].title,
        description: suggestions[screenType].description,
      }))
    }
  }, [screenType])

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
                    {screenTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="saasType">Tipo de SaaS</Label>
                <Select value={saasType} onValueChange={setSaasType}>
                  <SelectTrigger id="saasType">
                    <SelectValue placeholder="Selecione o tipo de SaaS" />
                  </SelectTrigger>
                  <SelectContent>
                    {saasTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="operationArea">Área de Atuação</Label>
                <Select value={operationArea} onValueChange={setOperationArea}>
                  <SelectTrigger id="operationArea">
                    <SelectValue placeholder="Selecione a área de atuação" />
                  </SelectTrigger>
                  <SelectContent>
                    {operationAreas.map((area) => (
                      <SelectItem key={area.value} value={area.value}>{area.label}</SelectItem>
                    ))}
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


