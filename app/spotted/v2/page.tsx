import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bell, BookOpen, Calendar, Home, MessageCircle, Search, User, Zap, Sparkles, Music, Video, Globe, Book, Coffee, Palette, Headphones, Camera, Smile, Sun, Moon, Menu } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useTheme } from "next-themes"

export default function PaginaInicialMobile() {
  const [novoPost, setNovoPost] = useState('')
  const [moodSlider, setMoodSlider] = useState(50)
  const [isAnonimo, setIsAnonimo] = useState(false)
  const [postType, setPostType] = useState('texto')
  const [isExpanded, setIsExpanded] = useState(false)
  const [currentSong, setCurrentSong] = useState('')
  const [isPlaying, setIsPlaying] = useState(false)
  const [studyTimer, setStudyTimer] = useState(0)
  const [isStudying, setIsStudying] = useState(false)
  const [caffeineLevel, setCaffeineLevel] = useState(0)
  const [weatherMood, setWeatherMood] = useState('ensolarado')
  const [creativeMode, setCreativeMode] = useState(false)
  const [virtualPet, setVirtualPet] = useState({ name: 'Uni', happiness: 50 })
  const [challengeOfTheDay, setChallengeOfTheDay] = useState('')
  const [badgeCount, setBadgeCount] = useState(0)
  const [collaborativeNotes, setCollaborativeNotes] = useState([])
  const [mentorMatch, setMentorMatch] = useState(null)
  const [skillTree, setSkillTree] = useState([])
  const [campusHotspots, setCampusHotspots] = useState([])
  const [studyStreaks, setStudyStreaks] = useState(0)
  const [timelineView, setTimelineView] = useState('feed')
  const [aiAssistant, setAiAssistant] = useState({ active: false, lastQuery: '' })
  const [groupProjects, setGroupProjects] = useState([])
  const [resourceSharing, setResourceSharing] = useState([])
  const [academicCalendar, setAcademicCalendar] = useState([])
  const [wellnessTracker, setWellnessTracker] = useState({ sleep: 0, exercise: 0, stress: 0 })
  const [careerPathway, setCareerPathway] = useState('')
  const [globalExchanges, setGlobalExchanges] = useState([])
  const [sustainabilityScore, setSustainabilityScore] = useState(0)
  const [learningStyle, setLearningStyle] = useState('')
  const { setTheme, theme } = useTheme()

  useEffect(() => {
    const interval = setInterval(() => {
      if (isStudying) {
        setStudyTimer(prev => prev + 1)
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [isStudying])

  const handlePostar = () => {
    console.log('Novo post:', { conteudo: novoPost, tipo: postType, anonimo: isAnonimo, humor: moodSlider })
    setNovoPost('')
    setBadgeCount(prev => prev + 1)
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const MobileMenu = () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col space-y-4">
          <Button variant="ghost" className="justify-start">
            <Home className="mr-2 h-4 w-4" />
            Início
          </Button>
          <Button variant="ghost" className="justify-start">
            <User className="mr-2 h-4 w-4" />
            Perfil
          </Button>
          <Button variant="ghost" className="justify-start">
            <MessageCircle className="mr-2 h-4 w-4" />
            Mensagens
          </Button>
          <Button variant="ghost" className="justify-start">
            <Bell className="mr-2 h-4 w-4" />
            Notificações
          </Button>
          <Button variant="ghost" className="justify-start">
            <Calendar className="mr-2 h-4 w-4" />
            Eventos
          </Button>
          <Button variant="ghost" className="justify-start">
            <Book className="mr-2 h-4 w-4" />
            Biblioteca Virtual
          </Button>
          <Button variant="ghost" className="justify-start">
            <Globe className="mr-2 h-4 w-4" />
            Intercâmbios
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  )

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-900 dark:to-blue-900 transition-all duration-500">
      {/* Header móvel */}
      <header className="sticky top-0 z-50 w-full bg-white dark:bg-gray-800 shadow-md p-2 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <MobileMenu />
          <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">UniSocial</span>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" onClick={toggleTheme}>
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@user" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="flex-1 p-4 overflow-y-auto">
        <ScrollArea className="h-[calc(100vh-4rem)]">
          <div className="space-y-4 pb-16">
            {/* Campo de busca */}
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Pesquisar na UniSocial" 
                className="pl-8 rounded-full bg-white dark:bg-gray-700 shadow-inner transition-all duration-300 focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Criar novo post */}
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-yellow-500" />
                  <span>Criar Post</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="texto" onValueChange={setPostType}>
                  <TabsList className="grid w-full grid-cols-2 mb-4">
                    <TabsTrigger value="texto">Texto</TabsTrigger>
                    <TabsTrigger value="midia">Mídia</TabsTrigger>
                  </TabsList>
                  <TabsContent value="texto">
                    <Textarea
                      placeholder="O que está acontecendo no campus?"
                      value={novoPost}
                      onChange={(e) => setNovoPost(e.target.value)}
                      className="min-h-[100px] transition-all duration-300 focus:ring-2 focus:ring-blue-400"
                    />
                  </TabsContent>
                  <TabsContent value="midia">
                    <Input type="file" accept="image/*,video/*,audio/*" className="mb-2" />
                  </TabsContent>
                </Tabs>
                <div className="flex items-center space-x-4 mt-4">
                  <span>Humor:</span>
                  <Slider
                    value={[moodSlider]}
                    onValueChange={([value]) => setMoodSlider(value)}
                    max={100}
                    step={1}
                    className="w-1/2"
                  />
                  <Smile className={`h-6 w-6 ${moodSlider > 50 ? 'text-green-500' : 'text-red-500'}`} />
                </div>
                <div className="flex items-center space-x-2 mt-4">
                  <span>Anônimo:</span>
                  <Switch
                    checked={isAnonimo}
                    onCheckedChange={setIsAnonimo}
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <Button variant="outline" onClick={() => setIsExpanded(!isExpanded)}>
                  {isExpanded ? 'Menos' : 'Mais'}
                </Button>
                <Button onClick={handlePostar} className="bg-gradient-to-r from-blue-500 to-purple-500 text-white transition-all duration-300 hover:from-blue-600 hover:to-purple-600">
                  Postar
                </Button>
              </CardFooter>
              {isExpanded && (
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="block mb-2">Música atual:</label>
                      <Input
                        value={currentSong}
                        onChange={(e) => setCurrentSong(e.target.value)}
                        placeholder="O que você está ouvindo?"
                      />
                    </div>
                    <div>
                      <label className="block mb-2">Nível de cafeína:</label>
                      <Slider
                        value={[caffeineLevel]}
                        onValueChange={([value]) => setCaffeineLevel(value)}
                        max={100}
                        step={1}
                      />
                    </div>
                    <div>
                      <label className="block mb-2">Clima emocional:</label>
                      <select
                        value={weatherMood}
                        onChange={(e) => setWeatherMood(e.target.value)}
                        className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600"
                      >
                        <option value="ensolarado">Ensolarado</option>
                        <option value="nublado">Nublado</option>
                        <option value="chuvoso">Chuvoso</option>
                        <option value="tempestuoso">Tempestuoso</option>
                      </select>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>

            {/* Feed de posts */}
            <AnimatePresence>
              {['feed', 'timeline'].includes(timelineView) && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
                    <CardHeader>
                      <div className="flex items-center space-x-2">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@mariasantos" />
                          <AvatarFallback>MS</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-sm">Maria Santos</CardTitle>
                          <CardDescription>Há 2 horas • Humor: Radiante ☀️</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">Acabei de terminar meu projeto de TCC! 🎉 Alguém mais está na mesma fase?</p>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Music className="h-4 w-4" />
                        <span>Ouvindo: "We Are The Champions" - Queen</span>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                        <Zap className="h-4 w-4" />
                        <span>42</span>
                      </Button>
                      <Button variant="ghost" size="sm">
                        Comentar
                      </Button>
                      
                      <Button variant="ghost" size="sm">
                        Compartilhar
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Seção de desafio do dia */}
            <Card className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Sparkles className="h-5 w-5" />
                  <span>Desafio do Dia</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Faça uma pergunta a um professor que você nunca conversou antes!</p>
              </CardContent>
            </Card>

            {/* Timer de estudo */}
            <Card className="bg-gradient-to-r from-green-400 to-blue-500 text-white">
              <CardHeader>
                <CardTitle className="text-lg">Timer de Estudo</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-4xl font-bold">{Math.floor(studyTimer / 60)}:{(studyTimer % 60).toString().padStart(2, '0')}</p>
              </CardContent>
              <CardFooter className="justify-center">
                <Button variant="secondary" onClick={() => setIsStudying(!isStudying)}>
                  {isStudying ? 'Pausar' : 'Iniciar'}
                </Button>
              </CardFooter>
            </Card>

            {/* Seção de estudo colaborativo */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Notas Colaborativas</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5">
                  <li>Resumo de Cálculo III - por @joaosilva</li>
                  <li>Mapas mentais de História da Arte - por @anamaria</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Adicionar Nota</Button>
              </CardFooter>
            </Card>

            {/* Pet Virtual */}
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Smile className="h-5 w-5 text-yellow-500" />
                  <span>Seu Pet Virtual: {virtualPet.name}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-2">Nível de felicidade: {virtualPet.happiness}%</p>
                <Button variant="outline" size="sm" onClick={() => setVirtualPet(prev => ({ ...prev, happiness: Math.min(100, prev.happiness + 10) }))}>
                  Alimentar
                </Button>
              </CardContent>
            </Card>

            {/* Rastreador de Bem-Estar */}
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Bem-Estar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Sono</label>
                    <Slider
                      value={[wellnessTracker.sleep]}
                      onValueChange={([value]) => setWellnessTracker(prev => ({ ...prev, sleep: value }))}
                      max={10}
                      step={1}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Exercício</label>
                    <Slider
                      value={[wellnessTracker.exercise]}
                      onValueChange={([value]) => setWellnessTracker(prev => ({ ...prev, exercise: value }))}
                      max={10}
                      step={1}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Estresse</label>
                    <Slider
                      value={[wellnessTracker.stress]}
                      onValueChange={([value]) => setWellnessTracker(prev => ({ ...prev, stress: value }))}
                      max={10}
                      step={1}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </ScrollArea>
      </main>

      {/* Barra de navegação inferior */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg">
        <div className="flex justify-around items-center h-16">
          <Button variant="ghost" size="icon">
            <Home className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <MessageCircle className="h-5 w-5" />
          </Button>
        </div>
      </nav>
    </div>
  )
}