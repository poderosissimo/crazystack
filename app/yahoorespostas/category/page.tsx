"use client";
import { useState } from "react";
import { ChevronRight, MessageSquare, ThumbsUp, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

type Question = {
  id: string;
  title: string;
  votes: number;
  answers: number;
  timestamp: string;
  tags: string[];
};

type CategoryPageProps = {
  categoryName: string;
  categoryDescription: string;
  questions: Question[];
};

export default function Component({
  categoryName = "Technology",
  categoryDescription = "Explore the latest in tech innovations and get your questions answered by our community of experts.",
  questions = [
    {
      id: "1",
      title: "What's the best programming language for beginners?",
      votes: 42,
      answers: 15,
      timestamp: "2h ago",
      tags: ["programming", "beginners"],
    },
    {
      id: "2",
      title: "How does blockchain technology work?",
      votes: 38,
      answers: 7,
      timestamp: "4h ago",
      tags: ["blockchain", "cryptocurrency"],
    },
    {
      id: "3",
      title: "What are the pros and cons of cloud computing?",
      votes: 25,
      answers: 9,
      timestamp: "1d ago",
      tags: ["cloud", "computing"],
    },
  ],
}: CategoryPageProps) {
  const [filter, setFilter] = useState("popular");

  const handleAskQuestion = () => {
    console.log("Ask a question in category:", categoryName);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="text-sm mb-4">
        <ol className="list-none p-0 inline-flex">
          <li className="flex items-center">
            <a href="#" className="text-blue-500">
              Home
            </a>
            <ChevronRight className="h-4 w-4 mx-2" />
          </li>
          <li className="flex items-center">
            <span className="text-gray-500">{categoryName}</span>
          </li>
        </ol>
      </nav>

      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{categoryName}</h1>
        <p className="text-gray-600">{categoryDescription}</p>
      </header>

      <div className="flex justify-between items-center mb-6">
        <Button onClick={handleAskQuestion} size="lg">
          Ask a Question
        </Button>
        <div className="flex items-center">
          <Filter className="mr-2 h-4 w-4" />
          <Select defaultValue={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter questions" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="recent">Most Recent</SelectItem>
              <SelectItem value="unanswered">Unanswered</SelectItem>
              <SelectItem value="most-answers">Most Answers</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-4">
        {questions.map((question) => (
          <div key={question.id} className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">
              <a href="#" className="hover:text-blue-600 transition-colors">
                {question.title}
              </a>
            </h2>
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <ThumbsUp className="h-4 w-4 mr-1" />
              <span className="mr-4">{question.votes} votes</span>
              <MessageSquare className="h-4 w-4 mr-1" />
              <span className="mr-4">{question.answers} answers</span>
              <span>{question.timestamp}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {question.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Button variant="outline">Load More Questions</Button>
      </div>
    </div>
  );
}
