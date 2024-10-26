"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowUpIcon,
  ArrowDownIcon,
  MessageSquareIcon,
  ClockIcon,
  PlusCircleIcon,
  SearchIcon,
  TrendingUpIcon,
  GridIcon,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const [featuredQuestions] = useState([
    {
      id: 1,
      title: "What's the best way to learn React?",
      votes: 42,
      answers: 7,
      timestamp: "2h ago",
      tags: ["react", "javascript"],
    },
    {
      id: 2,
      title: "How do I create a responsive layout?",
      votes: 38,
      answers: 5,
      timestamp: "4h ago",
      tags: ["css", "html"],
    },
    {
      id: 3,
      title: "What are the benefits of TypeScript?",
      votes: 31,
      answers: 6,
      timestamp: "6h ago",
      tags: ["typescript", "javascript"],
    },
  ]);

  const [trendingTopics] = useState([
    { id: 1, name: "Technology", icon: "💻" },
    { id: 2, name: "Science", icon: "🔬" },
    { id: 3, name: "Health", icon: "🏥" },
    { id: 4, name: "Entertainment", icon: "🎭" },
  ]);

  const [categories] = useState([
    { id: 1, name: "Programming", icon: "👨‍💻" },
    { id: 2, name: "Design", icon: "🎨" },
    { id: 3, name: "Business", icon: "💼" },
    { id: 4, name: "Lifestyle", icon: "🌿" },
    { id: 5, name: "Education", icon: "📚" },
    { id: 6, name: "Sports", icon: "⚽" },
  ]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 bg-background border-b border-border">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-3xl font-bold text-primary mb-4 sm:mb-0">
            Q&A Platform
          </h1>
          <div className="flex items-center space-x-4 w-full sm:w-auto">
            <div className="relative flex-grow sm:flex-grow-0">
              <Input
                type="search"
                placeholder="Search questions..."
                className="pl-10 pr-4 py-2 w-full"
              />
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              <PlusCircleIcon className="w-4 h-4 mr-2" />
              Ask
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <section className="lg:col-span-2">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Featured Questions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-6">
                  {featuredQuestions.map((question) => (
                    <li
                      key={question.id}
                      className="border-b border-border pb-6 last:border-b-0"
                    >
                      <Link
                        href={`/question/${question.id}`}
                        className="block hover:bg-accent hover:text-accent-foreground p-4 rounded-lg transition-colors"
                      >
                        <h3 className="text-xl font-semibold mb-3">
                          {question.title}
                        </h3>
                        <div className="flex flex-wrap items-center text-sm text-muted-foreground">
                          <span className="flex items-center mr-6 mb-2">
                            <ArrowUpIcon className="w-4 h-4 mr-1 text-green-500" />
                            <ArrowDownIcon className="w-4 h-4 mr-1 text-red-500" />
                            {question.votes}
                          </span>
                          <span className="flex items-center mr-6 mb-2">
                            <MessageSquareIcon className="w-4 h-4 mr-1" />
                            {question.answers} answers
                          </span>
                          <span className="flex items-center mb-2">
                            <ClockIcon className="w-4 h-4 mr-1" />
                            {question.timestamp}
                          </span>
                        </div>
                        <div className="mt-3">
                          {question.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-block bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm font-medium mr-2 mb-2"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>

          <aside className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-bold">
                  <TrendingUpIcon className="w-5 h-5 mr-2" />
                  Trending Topics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-2 gap-4">
                  {trendingTopics.map((topic) => (
                    <li key={topic.id}>
                      <Link
                        href={`/topic/${topic.id}`}
                        className="flex items-center p-3 bg-accent hover:bg-accent/80 text-accent-foreground rounded-md transition-colors"
                      >
                        <span className="text-2xl mr-3">{topic.icon}</span>
                        <span className="text-sm font-medium">
                          {topic.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-bold">
                  <GridIcon className="w-5 h-5 mr-2" />
                  Categories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="all">
                  <TabsList className="grid w-full grid-cols-2 mb-4">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="popular">Popular</TabsTrigger>
                  </TabsList>
                  <TabsContent value="all">
                    <ul className="grid grid-cols-2 gap-4">
                      {categories.map((category) => (
                        <li key={category.id}>
                          <Link
                            href={`/category/${category.id}`}
                            className="flex flex-col items-center p-4 bg-accent hover:bg-accent/80 text-accent-foreground rounded-md transition-colors"
                          >
                            <span className="text-3xl mb-2">
                              {category.icon}
                            </span>
                            <span className="text-sm font-medium text-center">
                              {category.name}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                  <TabsContent value="popular">
                    <ul className="grid grid-cols-2 gap-4">
                      {categories.slice(0, 4).map((category) => (
                        <li key={category.id}>
                          <Link
                            href={`/category/${category.id}`}
                            className="flex flex-col items-center p-4 bg-accent hover:bg-accent/80 text-accent-foreground rounded-md transition-colors"
                          >
                            <span className="text-3xl mb-2">
                              {category.icon}
                            </span>
                            <span className="text-sm font-medium text-center">
                              {category.name}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>
    </div>
  );
}
