"use client";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  UserPlus,
  UserMinus,
  Settings,
  Star,
  MessageCircle,
  ThumbsUp,
} from "lucide-react";

// Mock data (unchanged)
const userData = {
  username: "TechGuru42",
  reputation: 1500,
  badges: ["Gold", "Silver", "Bronze"],
  followers: 250,
  following: 100,
  questions: [
    {
      id: 1,
      title: "How does quantum computing work?",
      votes: 15,
      answers: 3,
      date: "2023-10-15",
    },
    {
      id: 2,
      title: "What's the difference between AI and machine learning?",
      votes: 20,
      answers: 5,
      date: "2023-10-10",
    },
  ],
  answers: [
    {
      id: 1,
      question: "What is the best programming language for beginners?",
      votes: 30,
      date: "2023-10-20",
    },
    {
      id: 2,
      question: "How do I optimize my website for SEO?",
      votes: 25,
      date: "2023-10-18",
    },
  ],
  reputationBreakdown: [
    { name: "Questions", value: 300 },
    { name: "Answers", value: 800 },
    { name: "Votes", value: 400 },
  ],
};

const COLORS = [
  "hsl(var(--primary))",
  "hsl(var(--secondary))",
  "hsl(var(--accent))",
  "hsl(var(--muted))",
];

export default function UserProfile({ isOwnProfile = false }) {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div className="container mx-auto p-4 space-y-6 bg-background text-foreground">
      <Card className="overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-primary to-secondary"></div>
        <CardContent className="p-6 -mt-16">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Avatar className="w-32 h-32 border-4 border-background">
              <AvatarImage src="/placeholder.svg" alt={userData.username} />
              <AvatarFallback className="text-2xl">
                {userData.username.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex-grow space-y-2 text-center md:text-left">
              <h1 className="text-3xl font-bold">{userData.username}</h1>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {userData.badges.map((badge, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-3 py-1 rounded-full"
                  >
                    <Star className="w-4 h-4 mr-1 inline" />
                    {badge}
                  </Badge>
                ))}
              </div>
              <p className="text-muted-foreground">
                <span className="font-semibold">{userData.followers}</span>{" "}
                Followers ·
                <span className="font-semibold">{userData.following}</span>{" "}
                Following
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-3xl font-bold text-center text-primary">
                {userData.reputation}
                <span className="text-sm text-muted-foreground block">
                  Reputation
                </span>
              </div>
              {isOwnProfile ? (
                <Button variant="outline" className="w-full">
                  <Settings className="mr-2 h-4 w-4" />
                  Edit Profile
                </Button>
              ) : (
                <Button
                  variant={isFollowing ? "secondary" : "default"}
                  onClick={() => setIsFollowing(!isFollowing)}
                  className="w-full"
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
        <TabsList className="w-full justify-start overflow-x-auto">
          <TabsTrigger value="questions" className="flex-1">
            Questions
          </TabsTrigger>
          <TabsTrigger value="answers" className="flex-1">
            Answers
          </TabsTrigger>
          <TabsTrigger value="reputation" className="flex-1">
            Reputation
          </TabsTrigger>
        </TabsList>
        <TabsContent value="questions" className="space-y-4">
          {userData.questions.map((question) => (
            <Card
              key={question.id}
              className="hover:shadow-md transition-shadow"
            >
              <CardHeader>
                <CardTitle className="text-lg font-semibold hover:text-primary cursor-pointer">
                  {question.title}
                </CardTitle>
                <CardDescription className="flex justify-between items-center">
                  <span>Asked on {question.date}</span>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center">
                      <ThumbsUp className="w-4 h-4 mr-1" />
                      {question.votes}
                    </span>
                    <span className="flex items-center">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      {question.answers}
                    </span>
                  </div>
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </TabsContent>
        <TabsContent value="answers" className="space-y-4">
          {userData.answers.map((answer) => (
            <Card key={answer.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg font-semibold hover:text-primary cursor-pointer">
                  {answer.question}
                </CardTitle>
                <CardDescription className="flex justify-between items-center">
                  <span>Answered on {answer.date}</span>
                  <span className="flex items-center">
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    {answer.votes}
                  </span>
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
              <div className="flex flex-col md:flex-row items-center gap-8">
                <ChartContainer
                  config={{
                    Questions: {
                      label: "Questions",
                      color: "hsl(var(--primary))",
                    },
                    Answers: {
                      label: "Answers",
                      color: "hsl(var(--secondary))",
                    },
                    Votes: {
                      label: "Votes",
                      color: "hsl(var(--accent))",
                    },
                  }}
                  className="h-[200px] w-full md:w-1/2"
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
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <ChartTooltip content={<ChartTooltipContent />} />
                    </PieChart>
                  </ResponsiveContainer>
                </ChartContainer>
                <div className="w-full md:w-1/2 space-y-4">
                  {userData.reputationBreakdown.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-semibold">{item.name}</span>
                        <span>{item.value} points</span>
                      </div>
                      <Progress
                        value={(item.value / userData.reputation) * 100}
                        className="h-2"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
