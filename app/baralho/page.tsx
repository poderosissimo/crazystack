'use client'

import React from 'react'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { 
  Header, 
  TabNavigation, 
  RegistrationForm, 
  AboutSection, 
  RecentActivities, 
  Footer, 
  BottomIcons 
} from './organisms'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

const formSchema = z.object({
  name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
  age: z.number().min(18, { message: "Você deve ter pelo menos 18 anos" }),
  favoriteGame: z.string(),
  availability: z.array(z.string()),
  experienceLevel: z.enum(["iniciante", "intermediario", "avancado"]),
  maxDistance: z.number().min(1).max(100),
  notifications: z.boolean(),
  birthday: z.date()
})

export default function Component() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      age: 18,
      favoriteGame: "",
      availability: [],
      experienceLevel: "iniciante",
      maxDistance: 50,
      notifications: false,
      birthday: new Date(),
    },
  })

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log('Formulário enviado:', data)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-100 to-secondary-100 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center p-4 md:p-8">
      <Card className="w-full max-w-4xl shadow-2xl overflow-hidden">
        <Header title="BaralhoAmigo" description="Encontre amigos para jogar baralho!" />
        <Tabs defaultValue="cadastro" className="w-full">
          <TabNavigation tabs={["Cadastro", "Sobre"]} />
          <div className="p-6 md:p-8">
            <TabsContent value="Cadastro">
              <CardContent className="space-y-6 p-0">
                <RegistrationForm form={form} onSubmit={onSubmit} />
              </CardContent>
            </TabsContent>
            <TabsContent value="Sobre">
              <CardContent className="space-y-6 p-0">
                <AboutSection />
              </CardContent>
            </TabsContent>
          </div>
        </Tabs>
        <CardFooter className="p-0">
          <Footer />
        </CardFooter>
      </Card>
      <div className="mt-12 w-full max-w-4xl">
        <RecentActivities />
      </div>
      <div className="mt-12 mb-8">
        <BottomIcons />
      </div>
    </div>
  )
}