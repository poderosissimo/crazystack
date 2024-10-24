import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { UserPlus, UserMinus, Settings } from 'lucide-react'

// Mock data
const userData = {
  username: "TechGuru42",
  reputation: 1500,
  badges: ["Gold", "Silver", "Bronze"],
  followers: 250,
  following: 100,
  questions: [
    { id: 1, title: "How does quantum computing work?", votes: 15, answers: 3, date: "2023-10-15" },
    { id: 2, title: "What's the difference between AI and machine learning?", votes: 20, answers: 5, date: "2023-10-10" },
  ],
  answers: [
    { id: 1, question: "What is the best programming language for beginners?", votes: 30, date: "2023-10-20" },
    { id: 2, question: "How do I optimize my website for SEO?", votes: 25, date: "2023-10-18" },
  ],
  reputationBreakdown: [
    { name: 'Questions', value: 300 },
    { name: 'Answers', value: 800 },
    { name: 'Votes', value: 400 },
  ],
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

export default function UserProfile({ isOwnProfile = false }) {
  const [isFollowing, setIsFollowing] = useState(false)

  return (
    <div className="container mx-auto p-4 space-y-6">
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Avatar className="w-24 h-24">
              <AvatarImage src="/placeholder.svg" alt={userData.username} />
              <AvatarFallback>{userData.username.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="flex-grow space-y-2 text-center md:text-left">
              <h1 className="text-3xl font-bold">{userData.username}</h1>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {userData.badges.map((badge, index) => (
                  <Badge key={index} variant="secondary">{badge}</Badge>
                ))}
              </div>
              <p className="text-muted-foreground">
                Followers: {userData.followers} · Following: {userData.following}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-2xl font-semibold text-center">
                {userData.reputation}
                <span className="text-sm text-muted-foreground block">Reputation</span>
              </div>
              {isOwnProfile ? (
                <Button variant="outline">
                  <Settings className="mr-2 h-4 w-4" />
                  Edit Profile
                </Button>
              ) : (
                <Button
                  variant={isFollowing ? "secondary" : "default"}
                  onClick={() => setIsFollowing(!isFollowing)}
                >
                  {isFollowing ? (
                    <>
                      <UserMinus className="mr-2 h-4 w-4" />
                      Unfollow
                    </>
                  ) : (
                    <>
                      <UserPlus className="mr-2 h-4 w-4" />
                      Follow
                    </>
                  )}
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="questions" className="space-y-4">
        <TabsList>
          <TabsTrigger value="questions">Questions</TabsTrigger>
          <TabsTrigger value="answers">Answers</TabsTrigger>
          <TabsTrigger value="reputation">Reputation</TabsTrigger>
        </TabsList>
        <TabsContent value="questions" className="space-y-4">
          {userData.questions.map((question) => (
            <Card key={question.id}>
              <CardHeader>
                <CardTitle>{question.title}</CardTitle>
                <CardDescription>
                  Asked on {question.date} · {question.votes} votes · {question.answers} answers
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </TabsContent>
        <TabsContent value="answers" className="space-y-4">
          {userData.answers.map((answer) => (
            <Card key={answer.id}>
              <CardHeader>
                <CardTitle>{answer.question}</CardTitle>
                <CardDescription>
                  Answered on {answer.date} · {answer.votes} votes
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </TabsContent>
        <TabsContent value="reputation" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Reputation Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  Questions: {
                    label: "Questions",
                    color: "hsl(var(--chart-1))",
                  },
                  Answers: {
                    label: "Answers",
                    color: "hsl(var(--chart-2))",
                  },
                  Votes: {
                    label: "Votes",
                    color: "hsl(var(--chart-3))",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={userData.reputationBreakdown}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {userData.reputationBreakdown.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
              <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                {userData.reputationBreakdown.map((item, index) => (
                  <div key={index} className="space-y-1">
                    <div className="text-2xl font-semibold">{item.value}</div>
                    <div className="text-sm text-muted-foreground">{item.name}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}