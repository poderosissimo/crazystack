"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowUpIcon,
  ArrowDownIcon,
  MessageSquareIcon,
  ClockIcon,
  PlusCircleIcon,
  SearchIcon,
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
    <div className="container mx-auto px-4 py-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Q&A Platform</h1>
        <div className="flex items-center space-x-4">
          <Button variant="outline">
            <SearchIcon className="w-4 h-4 mr-2" />
            Search
          </Button>
          <Button>
            <PlusCircleIcon className="w-4 h-4 mr-2" />
            Ask a Question
          </Button>
        </div>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <section className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Featured Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {featuredQuestions.map((question) => (
                  <li
                    key={question.id}
                    className="border-b pb-4 last:border-b-0"
                  >
                    <Link
                      href={`/question/${question.id}`}
                      className="block hover:bg-muted p-2 rounded-md transition-colors"
                    >
                      <h3 className="text-lg font-semibold mb-2">
                        {question.title}
                      </h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <span className="flex items-center mr-4">
                          <ArrowUpIcon className="w-4 h-4 mr-1" />
                          <ArrowDownIcon className="w-4 h-4 mr-1" />
                          {question.votes}
                        </span>
                        <span className="flex items-center mr-4">
                          <MessageSquareIcon className="w-4 h-4 mr-1" />
                          {question.answers}
                        </span>
                        <span className="flex items-center">
                          <ClockIcon className="w-4 h-4 mr-1" />
                          {question.timestamp}
                        </span>
                      </div>
                      <div className="mt-2">
                        {question.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-block bg-secondary text-secondary-foreground rounded-full px-2 py-1 text-xs mr-2"
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

        <aside>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Trending Topics</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-2 gap-4">
                {trendingTopics.map((topic) => (
                  <li key={topic.id}>
                    <Link
                      href={`/topic/${topic.id}`}
                      className="flex items-center p-2 bg-muted hover:bg-muted/80 rounded-md transition-colors"
                    >
                      <span className="text-2xl mr-2">{topic.icon}</span>
                      <span className="text-sm font-medium">{topic.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-2 gap-4">
                {categories.map((category) => (
                  <li key={category.id}>
                    <Link
                      href={`/category/${category.id}`}
                      className="flex items-center p-2 bg-muted hover:bg-muted/80 rounded-md transition-colors"
                    >
                      <span className="text-2xl mr-2">{category.icon}</span>
                      <span className="text-sm font-medium">
                        {category.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </aside>
      </main>
    </div>
  );
}
