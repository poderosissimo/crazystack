"use client";
import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  MessageSquare,
  ThumbsUp,
  Search,
  Plus,
  Loader2,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { toast, useToast } from "@/components/ui/use-toast";
import { motion, AnimatePresence } from "framer-motion";

type Question = {
  id: string;
  title: string;
  content: string;
  votes: number;
  answers: number;
  timestamp: string;
  tags: string[];
  category: "popular" | "recent" | "unanswered";
};

type CategoryPageProps = {
  categoryName: string;
  categoryDescription: string;
  initialQuestions: Question[];
};

export default function Component({
  categoryName = "Technology",
  categoryDescription = "Explore the latest in tech innovations and get your questions answered by our community of experts.",
  initialQuestions = [
    {
      id: "1",
      title: "What's the best programming language for beginners?",
      content:
        "I'm new to programming and wondering which language I should start with. Any suggestions?",
      votes: 42,
      answers: 15,
      timestamp: "2h ago",
      tags: ["programming", "beginners"],
      category: "popular",
    },
    {
      id: "2",
      title: "How does blockchain technology work?",
      content:
        "I keep hearing about blockchain, but I'm not sure how it actually works. Can someone explain?",
      votes: 38,
      answers: 7,
      timestamp: "4h ago",
      tags: ["blockchain", "cryptocurrency"],
      category: "recent",
    },
    {
      id: "3",
      title: "What are the pros and cons of cloud computing?",
      content:
        "I'm considering moving our company's infrastructure to the cloud. What should I consider?",
      votes: 25,
      answers: 0,
      timestamp: "1d ago",
      tags: ["cloud", "computing"],
      category: "unanswered",
    },
  ],
}: CategoryPageProps) {
  const [questions, setQuestions] = useState<Question[]>(initialQuestions);
  const [activeTab, setActiveTab] = useState<
    "popular" | "recent" | "unanswered"
  >("popular");
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [askQuestionOpen, setAskQuestionOpen] = useState(false);
  const [newQuestion, setNewQuestion] = useState({
    title: "",
    content: "",
    tags: "",
  });
  const [questionProgress, setQuestionProgress] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "";
  }, [darkMode]);

  useEffect(() => {
    const progress =
      (((newQuestion.title ? 1 : 0) +
        (newQuestion.content ? 1 : 0) +
        (newQuestion.tags ? 1 : 0)) /
        3) *
      100;
    setQuestionProgress(progress);
  }, [newQuestion]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      const filteredQuestions = initialQuestions.filter(
        (q) =>
          q.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.content.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      setQuestions(filteredQuestions);
      setIsLoading(false);
    }, 1000);
  };

  const handleTabChange = (value: "popular" | "recent" | "unanswered") => {
    setActiveTab(value);
    setIsLoading(true);
    setTimeout(() => {
      const filteredQuestions = initialQuestions.filter(
        (q) => q.category === value,
      );
      setQuestions(filteredQuestions);
      setIsLoading(false);
    }, 1000);
  };

  const handleVote = (id: string, type: "up" | "down") => {
    setQuestions(
      questions.map((q) => {
        if (q.id === id) {
          return { ...q, votes: type === "up" ? q.votes + 1 : q.votes - 1 };
        }
        return q;
      }),
    );
    toast({
      title: "Vote Recorded",
      description: `You ${type === "up" ? "upvoted" : "downvoted"} the question.`,
    });
  };

  const handleAskQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    const newQuestionObj: Question = {
      id: (questions.length + 1).toString(),
      title: newQuestion.title,
      content: newQuestion.content,
      votes: 0,
      answers: 0,
      timestamp: "Just now",
      tags: newQuestion.tags.split(",").map((tag) => tag.trim()),
      category: "recent",
    };
    setQuestions([newQuestionObj, ...questions]);
    setAskQuestionOpen(false);
    setNewQuestion({ title: "", content: "", tags: "" });
    toast({
      title: "Question Posted",
      description: "Your question has been successfully posted.",
    });
  };

  return (
    <div className={`min-h-screen font-sans ${darkMode ? "dark" : ""}`}>
      <div className="bg-gradient-to-b from-background to-background-alt text-foreground transition-colors duration-300">
        <div className="container mx-auto px-4 py-8">
          <nav className="text-sm mb-8">
            <ol className="list-none p-0 inline-flex items-center space-x-2">
              <li className="flex items-center">
                <a
                  href="#"
                  className="text-primary hover:text-primary-dark transition-colors"
                >
                  Home
                </a>
                <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
              </li>
              <li>
                <span className="text-muted-foreground">{categoryName}</span>
              </li>
            </ol>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-primary text-primary-foreground p-8 rounded-lg mb-12 shadow-lg"
          >
            <h1 className="text-4xl font-bold mb-4">{categoryName}</h1>
            <p className="text-xl opacity-90">{categoryDescription}</p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8">
            <main className="flex-grow">
              <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
                <Button
                  onClick={() => setAskQuestionOpen(true)}
                  size="lg"
                  className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent-hover transition-colors"
                >
                  Ask a Question
                </Button>
                <form
                  onSubmit={handleSearch}
                  className="flex items-center w-full sm:w-auto"
                >
                  <Input
                    type="text"
                    placeholder="Search questions..."
                    className="mr-2 bg-background-alt"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Button type="submit" variant="outline">
                    Search
                  </Button>
                </form>
              </div>

              <Tabs
                defaultValue="popular"
                className="mb-8"
                onValueChange={(value) =>
                  handleTabChange(value as "popular" | "recent" | "unanswered")
                }
              >
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="popular">Popular</TabsTrigger>
                  <TabsTrigger value="recent">Recent</TabsTrigger>
                  <TabsTrigger value="unanswered">Unanswered</TabsTrigger>
                </TabsList>
              </Tabs>

              {isLoading ? (
                <div className="flex justify-center items-center h-64">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2"
                >
                  <AnimatePresence>
                    {questions.map((question) => (
                      <motion.div
                        key={question.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Card className="h-full hover:shadow-lg transition-shadow">
                          <CardHeader>
                            <CardTitle className="text-xl">
                              <a
                                href="#"
                                className="hover:text-primary transition-colors"
                              >
                                {question.title}
                              </a>
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground mb-4 line-clamp-2">
                              {question.content}
                            </p>
                            <div className="flex items-center text-sm text-muted-foreground mb-2">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleVote(question.id, "up")}
                                className="mr-2"
                              >
                                <ThumbsUp className="h-4 w-4 mr-1" />
                                <span>{question.votes}</span>
                              </Button>
                              <MessageSquare className="h-4 w-4 mr-1" />
                              <span className="mr-4">
                                {question.answers} answers
                              </span>
                              <span>{question.timestamp}</span>
                            </div>
                          </CardContent>
                          <CardFooter>
                            <div className="flex flex-wrap gap-2">
                              {question.tags.map((tag) => (
                                <Badge key={tag} variant="outline">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </CardFooter>
                        </Card>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              )}

              <div className="mt-8 flex justify-center">
                <Button
                  variant="outline"
                  onClick={() =>
                    toast({
                      title: "Loading more questions",
                      description:
                        "This feature is not implemented in this demo.",
                    })
                  }
                >
                  Load More Questions
                </Button>
              </div>
            </main>

            <aside className="w-full lg:w-1/3 xl:w-1/4">
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle>Category Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Total Questions:</span>
                      <span className="font-semibold">{questions.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Answers:</span>
                      <span className="font-semibold">
                        {questions.reduce((sum, q) => sum + q.answers, 0)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Active Users:</span>
                      <span className="font-semibold">
                        {Math.floor(Math.random() * 1000)}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 right-4 sm:hidden"
        >
          <Button
            className="rounded-full p-0 w-12 h-12 bg-primary text-primary-foreground shadow-lg hover:bg-primary-hover transition-colors"
            onClick={() => setAskQuestionOpen(true)}
          >
            <Plus className="h-6 w-6" />
          </Button>
        </motion.div>

        <div className="fixed top-4 right-4 flex items-center space-x-2">
          <span className="text-sm mr-2">{darkMode ? "Dark" : "Light"}</span>
          <Switch
            checked={darkMode}
            onCheckedChange={setDarkMode}
            className="data-[state=checked]:bg-primary"
          />
        </div>
      </div>

      <Dialog open={askQuestionOpen} onOpenChange={setAskQuestionOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Ask a Question</DialogTitle>
            <DialogDescription>
              Post your question to the {categoryName} category.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleAskQuestion}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">
                  Title
                </Label>
                <Input
                  id="title"
                  value={newQuestion.title}
                  onChange={(e) =>
                    setNewQuestion({ ...newQuestion, title: e.target.value })
                  }
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="content" className="text-right">
                  Content
                </Label>
                <Textarea
                  id="content"
                  value={newQuestion.content}
                  onChange={(e) =>
                    setNewQuestion({ ...newQuestion, content: e.target.value })
                  }
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="tags" className="text-right">
                  Tags
                </Label>
                <Input
                  id="tags"
                  value={newQuestion.tags}
                  onChange={(e) =>
                    setNewQuestion({ ...newQuestion, tags: e.target.value })
                  }
                  placeholder="Separate tags with commas"
                  className="col-span-3"
                />
              </div>
              <Progress value={questionProgress} className="w-full" />
            </div>
            <DialogFooter>
              <Button type="submit" disabled={questionProgress < 100}>
                Post Question
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
