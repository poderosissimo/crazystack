import React from 'react'
import { FormField, SelectField, CheckboxField, RadioGroupField, SwitchField, AvatarGroup, BadgeWithIcon, IconGroup } from './molecules'
import { Button, Label,Avatar } from './atoms'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Users, MapPin, Heart, Clock, CalendarIcon, Coffee, Book, Music, Film, Gamepad } from 'lucide-react'
import { UseFormReturn } from "react-hook-form"

export const Header = ({ title, description }: { title: string; description: string }) => (
  <CardHeader className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-t-lg p-8">
    <CardTitle className="text-4xl md:text-5xl font-bold text-center mb-2">{title}</CardTitle>
    <CardDescription className="text-center text-xl md:text-2xl text-white/90">{description}</CardDescription>
  </CardHeader>
)

export const TabNavigation = ({ tabs }: { tabs: string[] }) => (
  <TabsList className="grid w-full" style={{ gridTemplateColumns: `repeat(${tabs.length}, 1fr)` }}>
    {tabs.map((tab) => (
      <TabsTrigger key={tab} value={tab} className="text-lg py-3 px-6 transition-all duration-200 hover:bg-primary-100 dark:hover:bg-primary-800">
        {tab}
      </TabsTrigger>
    ))}
  </TabsList>
)

export const PersonalInfoForm = ({ form }: { form: UseFormReturn<any> }) => (
  <div className="space-y-4">
    <FormField
      label="Nome"
      id="name"
      {...form.register("name")}
      error={form.formState.errors.name?.message as string}
    />
    <FormField
      label="Idade"
      id="age"
      type="number"
      {...form.register("age", { valueAsNumber: true })}
      error={form.formState.errors.age?.message as string}
    />
  </div>
)

export const GamePreferencesForm = ({ form }: { form: UseFormReturn<any> }) => (
  <SelectField 
    label="Jogo de baralho favorito"
    options={[
      { value: "buraco", label: "Buraco" },
      { value: "truco", label: "Truco" },
      { value: "canastra", label: "Canastra" },
      { value: "poker", label: "Poker" },
    ]}
    {...form.register("favoriteGame")}
    error={form.formState.errors.favoriteGame?.message as string}
  />
)

export const AvailabilityForm = ({ form }: { form: UseFormReturn<any> }) => (
  <div className="space-y-4">
    <Label className="text-lg">Disponibilidade</Label>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"].map((day) => (
        <CheckboxField
          key={day}
          id={day.toLowerCase()}
          label={day}
          {...form.register("availability")}
        />
      ))}
    </div>
  </div>
)

export const ExperienceLevelForm = ({ form }: { form: UseFormReturn<any> }) => (
  <RadioGroupField 
    label="Nível de experiência"
    options={[
      { value: "iniciante", label: "Iniciante" },
      { value: "intermediario", label: "Intermediário" },
      { value: "avancado", label: "Avançado" },
    ]}
    {...form.register("experienceLevel")}
    error={form.formState.errors.experienceLevel?.message as string}
  />
)

export const PreferencesForm = ({ form }: { form: UseFormReturn<any> }) => (
  <div className="space-y-6">
    <div className="space-y-2">
      <Label className="text-lg">Distância máxima (km)</Label>
      <Slider
        defaultValue={[form.getValues("maxDistance")]}
        max={100}
        step={1}
        className="w-full"
        onValueChange={(value) => form.setValue("maxDistance", value[0])}
      />
    </div>
    <SwitchField
      id="notifications"
      label="Receber notificações"
      {...form.register("notifications")}
    />
  </div>
)

export const BirthdayForm = ({ form }: { form: UseFormReturn<any> }) => {
  return (
    <div className="space-y-2">
      <Label className="text-lg">Data de nascimento</Label>
      <Calendar
        mode="single"
        selected={form.getValues("birthday")}
        onSelect={(date) => form.setValue("birthday", date)}
        className="rounded-md border p-2 w-full max-w-sm mx-auto bg-white dark:bg-gray-800"
      />
    </div>
  )
}

export const RegistrationForm = ({ form, onSubmit }: { form: UseFormReturn<any>, onSubmit: (data: any) => void }) => (
  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
    <PersonalInfoForm form={form} />
    <GamePreferencesForm form={form} />
    <AvailabilityForm form={form} />
    <ExperienceLevelForm form={form} />
    <PreferencesForm form={form} />
    <BirthdayForm form={form} />
    <Button type="submit" className="w-full text-xl py-6 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
      Cadastrar
    </Button>
  </form>
)

export const AboutContent = () => (
  <div className="space-y-4">
    <h3 className="text-3xl font-bold text-primary-700 dark:text-primary-300">Sobre o BaralhoAmigo</h3>
    <p className="text-lg text-gray-700 dark:text-gray-300">Conectamos amantes de jogos de baralho para partidas inesquecíveis!</p>
  </div>
)

export const FAQAccordion = () => (
  <Accordion type="single" collapsible className="w-full">
    <AccordionItem value="item-1">
      <AccordionTrigger className="text-lg font-semibold">Como funciona?</AccordionTrigger>
      <AccordionContent className="text-gray-700 dark:text-gray-300">
        Cadastre-se, escolha seus jogos favoritos e encontre parceiros de jogo na sua região!
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger className="text-lg font-semibold">É seguro?</AccordionTrigger>
      <AccordionContent className="text-gray-700 dark:text-gray-300">
        Sim! Todos os usuários passam por uma verificação de segurança.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
)

export const Statistics = () => (
  <div className="space-y-6">
    <div className="flex flex-wrap justify-center gap-4">
      <BadgeWithIcon icon={Users} text="1000+ Usuários" />
      <BadgeWithIcon icon={MapPin} text="50+ Cidades" />
    </div>
    <div className="space-y-2">
      <Progress value={80} className="w-full h-2 bg-gray-200 dark:bg-gray-700" />
      <p className="text-center text-sm text-gray-600 dark:text-gray-400">80% dos usuários encontram parceiros de jogo em 1 semana!</p>
    </div>
  </div>
)

export const AboutSection = () => (
  <div className="space-y-8">
    <AboutContent />
    <FAQAccordion />
    <Statistics />
  </div>
)

export const ActivityItem = ({ index }: { index: number }) => (
  <div className="mb-4 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200">
    <div className="flex items-center space-x-3">
      <Avatar src={`/placeholder.svg?height=40&width=40&text=${index+1}`} fallback={`U${index+1}`} className="w-10 h-10" />
      <div>
        <span className="font-medium text-primary-700 dark:text-primary-300">Usuário {index+1}</span>
        <p className="text-sm text-gray-600 dark:text-gray-400">encontrou um parceiro para jogar!</p>
      </div>
    </div>
  </div>
)

export const RecentActivities = () => (
  <Card className="w-full max-w-md mx-auto">
    <CardHeader>
      <CardTitle className="text-2xl font-bold text-primary-700 dark:text-primary-300">Atividades recentes</CardTitle>
    </CardHeader>
    <CardContent>
      <ScrollArea className="h-[400px] w-full pr-4">
        {[...Array(10)].map((_, i) => (
          <ActivityItem key={i} index={i} />
        ))}
      </ScrollArea>
    </CardContent>
  </Card>
)

export const Footer = () => (
  <div className="flex flex-col items-center space-y-6 bg-gray-100 dark:bg-gray-800 rounded-b-lg p-8">
    <AvatarGroup users={[
      { src: "/placeholder.svg?height=48&width=48", fallback: "CN" },
      { src: "/placeholder.svg?height=48&width=48", fallback: "MK" },
      { src: "/placeholder.svg?height=48&width=48", fallback: "JD" },
    ]} />
    <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">Junte-se a milhares de jogadores!</p>
    <IconGroup icons={[Heart, Clock, CalendarIcon]} />
  </div>
)

export const BottomIcons = () => (
  <div className="bg-white dark:bg-gray-800 rounded-full shadow-lg p-4">
    <IconGroup icons={[Coffee, Book, Music, Film, Gamepad]} />
  </div>
)