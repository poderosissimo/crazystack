"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Info, Trophy } from "lucide-react"

export default function Component() {
  const [activeTab, setActiveTab] = useState("global")

  const pointsBreakdown = [
    { action: "Asking a question", points: 5 },
    { action: "Answering a question", points: 10 },
    { action: "Upvotes on a question/answer", points: 2 },
    { action: "Best Answer selection", points: 15 },
  ]

  const badges = [
    { name: "Curious Mind", description: "Asked 10 questions", icon: "🤔" },
    { name: "Helpful Hand", description: "Answered 50 questions", icon: "🤝" },
    { name: "Expert", description: "Received 100 upvotes", icon: "🏅" },
    { name: "Top Contributor", description: "Best answer 20 times", icon: "🏆" },
  ]

  const leaderboardData = {
    global: [
      { rank: 1, username: "superuser123", points: 15000, avatar: "/placeholder.svg?height=32&width=32" },
      { rank: 2, username: "questionmaster", points: 12500, avatar: "/placeholder.svg?height=32&width=32" },
      { rank: 3, username: "helpfulhero", points: 10000, avatar: "/placeholder.svg?height=32&width=32" },
    ],
    tech: [
      { rank: 1, username: "techguru", points: 8000, avatar: "/placeholder.svg?height=32&width=32" },
      { rank: 2, username: "codewhiz", points: 7500, avatar: "/placeholder.svg?height=32&width=32" },
      { rank: 3, username: "debugmaster", points: 7000, avatar: "/placeholder.svg?height=32&width=32" },
    ],
  }

  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold text-center mb-6">Reputation System</h1>

      {/* Points Display */}
      <Card>
        <CardHeader>
          <CardTitle>Your Reputation</CardTitle>
          <CardDescription>See how you're doing in the community</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold mb-4">1,250 points</div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center text-sm text-muted-foreground cursor-help">
                  <Info className="mr-1 h-4 w-4" />
                  How points are earned
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <ul className="list-disc pl-4">
                  {pointsBreakdown.map((item, index) => (
                    <li key={index}>
                      {item.action}: +{item.points} points
                    </li>
                  ))}
                </ul>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardContent>
      </Card>

      {/* Badges/Tiers */}
      <Card>
        <CardHeader>
          <CardTitle>Badges & Achievements</CardTitle>
          <CardDescription>Showcase your expertise and contributions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {badges.map((badge, index) => (
              <TooltipProvider key={index}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex flex-col items-center p-2 border rounded-lg">
                      <div className="text-3xl mb-2">{badge.icon}</div>
                      <div className="font-semibold text-center">{badge.name}</div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{badge.description}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
          <div className="mt-4">
            <div className="text-sm font-semibold mb-1">Progress to next badge</div>
            <Progress value={75} className="w-full" />
          </div>
        </CardContent>
      </Card>

      {/* Leaderboard */}
      <Card>
        <CardHeader>
          <CardTitle>Leaderboard</CardTitle>
          <CardDescription>See how you stack up against other users</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-4">
              <TabsTrigger value="global">Global</TabsTrigger>
              <TabsTrigger value="tech">Tech</TabsTrigger>
            </TabsList>
            {["global", "tech"].map((category) => (
              <TabsContent key={category} value={category}>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-16">Rank</TableHead>
                      <TableHead>User</TableHead>
                      <TableHead className="text-right">Points</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {leaderboardData[category].map((user, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">
                          {user.rank === 1 && <Trophy className="inline-block mr-1 h-4 w-4 text-yellow-500" />}
                          {user.rank}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <Avatar className="h-8 w-8 mr-2">
                              <AvatarImage src={user.avatar} alt={user.username} />
                              <AvatarFallback>{user.username.slice(0, 2).toUpperCase()}</AvatarFallback>
                            </Avatar>
                            {user.username}
                          </div>
                        </TableCell>
                        <TableCell className="text-right">{user.points.toLocaleString()}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}