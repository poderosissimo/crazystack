"use client"

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

export default function Component() {
  const handleSubmit = (data: any) => {
    console.log('Formulário enviado:', data)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-green-100 flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-4xl shadow-2xl">
        <Header title="BaralhoAmigo" description="Encontre amigos para jogar baralho!" />
        <Tabs defaultValue="cadastro" className="w-full">
          <TabNavigation tabs={["cadastro", "sobre"]} />
          <TabsContent value="cadastro">
            <CardContent className="space-y-6 p-6">
              <RegistrationForm onSubmit={handleSubmit} />
            </CardContent>
          </TabsContent>
          <TabsContent value="sobre">
            <CardContent className="space-y-6 p-6">
              <AboutSection />
            </CardContent>
          </TabsContent>
        </Tabs>
        <CardFooter>
          <Footer />
        </CardFooter>
      </Card>
      <RecentActivities />
      <div className="mt-8">
        <BottomIcons />
      </div>
    </div>
  )
}