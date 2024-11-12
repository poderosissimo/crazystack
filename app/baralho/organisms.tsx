import React from 'react'
import { FormField, SelectField, CheckboxField, RadioGroupField, SwitchField, AvatarGroup, BadgeWithIcon, IconGroup } from './molecules'
import { Button, Label, Avatar } from './atoms'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Users, MapPin, Heart, Clock, CalendarIcon, Coffee, Book, Music, Film, Gamepad } from 'lucide-react'

export const Header = ({ title, description }: { title: string; description: string }) => (
  <CardHeader className="bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-t-lg">
    <CardTitle className="text-4xl font-bold text-center">{title}</CardTitle>
    <CardDescription className="text-center text-xl">{description}</CardDescription>
  </CardHeader>
)

export const TabNavigation = ({ tabs }: { tabs: string[] }) => (
  <TabsList className="grid w-full" style={{ gridTemplateColumns: `repeat(${tabs.length}, 1fr)` }}>
    {tabs.map((tab) => (
      <TabsTrigger key={tab} value={tab}>{tab}</TabsTrigger>
    ))}
  </TabsList>
)

export const PersonalInfoForm = () => (
  <>
    <FormField label="Nome" id="name" placeholder="Seu nome" required />
    <FormField label="Idade" id="age" type="number" placeholder="Sua idade" required />
  </>
)

export const GamePreferencesForm = () => (
  <SelectField 
    label="Jogo de baralho favorito"
    options={[
      { value: "buraco", label: "Buraco" },
      { value: "truco", label: "Truco" },
      { value: "canastra", label: "Canastra" },
      { value: "poker", label: "Poker" },
    ]}
  />
)

export const AvailabilityForm = () => (
  <div className="space-y-2">
    <Label className="text-lg">Disponibilidade</Label>
    <div className="flex flex-wrap gap-4">
      {["Segunda", "Terça", "Quarta", "Quinta", "Sexta"].map((day) => (
        <CheckboxField key={day} id={day.toLowerCase()} label={day} />
      ))}
    </div>
  </div>
)

export const ExperienceLevelForm = () => (
  <RadioGroupField 
    label="Nível de experiência"
    options={[
      { value: "iniciante", label: "Iniciante" },
      { value: "intermediario", label: "Intermediário" },
      { value: "avancado", label: "Avançado" },
    ]}
  />
)

export const PreferencesForm = () => (
  <>
    <div className="space-y-2">
      <Label className="text-lg">Distância máxima (km)</Label>
      <Slider defaultValue={[50]} max={100} step={1} />
    </div>
    <SwitchField id="notifications" label="Receber notificações" />
  </>
)

export const BirthdayForm = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  return (
    <div className="space-y-2">
      <Label className="text-lg">Data de nascimento</Label>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    </div>
  )
}

export const RegistrationForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => (
  <form onSubmit={(e) => { e.preventDefault(); onSubmit(e.currentTarget) }} className="space-y-6">
    <PersonalInfoForm />
    <GamePreferencesForm />
    <AvailabilityForm />
    <ExperienceLevelForm />
    <PreferencesForm />
    <BirthdayForm />
    <Button type="submit" className="w-full text-xl py-6">Cadastrar</Button>
  </form>
)

export const AboutContent = () => (
  <>
    <h3 className="text-2xl font-bold">Sobre o BaralhoAmigo</h3>
    <p className="text-lg">Conectamos amantes de jogos de baralho para partidas inesquecíveis!</p>
  </>
)

export const FAQAccordion = () => (
  <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger>Como funciona?</AccordionTrigger>
      <AccordionContent>
        Cadastre-se, escolha seus jogos favoritos e encontre parceiros de jogo na sua região!
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>É seguro?</AccordionTrigger>
      <AccordionContent>
        Sim! Todos os usuários passam por uma verificação de segurança.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
)

export const Statistics = () => (
  <>
    <div className="flex justify-center space-x-4">
      <BadgeWithIcon icon={Users} text="1000+ Usuários" />
      <BadgeWithIcon icon={MapPin} text="50+ Cidades" />
    </div>
    <Progress value={80} className="w-full" />
    <p className="text-center text-sm">80% dos usuários encontram parceiros de jogo em 1 semana!</p>
  </>
)

export const AboutSection = () => (
  <div className="space-y-6">
    <AboutContent />
    <FAQAccordion />
    <Statistics />
  </div>
)

export const ActivityItem = ({ index }: { index: number }) => (
  <div className="mb-4">
    <div className="flex items-center space-x-2">
      <Avatar src={`/placeholder.svg?height=32&width=32&text=${index+1}`} fallback={`U${index+1}`} />
      <span className="font-medium">Usuário {index+1}</span>
      <span className="text-sm text-gray-500">encontrou um parceiro para jogar!</span>
    </div>
    <Separator className="my-2" />
  </div>
)

export const RecentActivities = () => (
  <ScrollArea className="h-72 w-full rounded-md border p-4">
    <h4 className="text-xl font-bold mb-4">Atividades recentes</h4>
    {[...Array(10)].map((_, i) => (
      <ActivityItem key={i} index={i} />
    ))}
  </ScrollArea>
)

export const Footer = () => (
  <div className="flex flex-col items-center space-y-4 bg-gray-100 rounded-b-lg p-6">
    <AvatarGroup users={[
      { src: "/placeholder.svg?height=40&width=40", fallback: "CN" },
      { src: "/placeholder.svg?height=40&width=40", fallback: "MK" },
      { src: "/placeholder.svg?height=40&width=40", fallback: "JD" },
    ]} />
    <p className="text-sm text-gray-500">Junte-se a milhares de jogadores!</p>
    <IconGroup icons={[Heart, Clock, CalendarIcon]} />
  </div>
)

export const BottomIcons = () => (
  <IconGroup icons={[Coffee, Book, Music, Film, Gamepad]} />
)