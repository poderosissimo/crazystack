"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ThumbsUp,
  MessageCircle,
  Flag,
  AlertTriangle,
  Check,
  X,
} from "lucide-react";

export default function ModerationSystemDemo() {
  const [activeTab, setActiveTab] = useState("question");

  return (
    <div className="container mx-auto p-4 bg-background text-foreground">
      <h1 className="text-4xl font-bold mb-8 text-center text-primary">
        Q&A Platform - Moderation System
      </h1>

      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full mb-8"
      >
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-3">
          <TabsTrigger value="question">Question</TabsTrigger>
          <TabsTrigger value="answer">Answer</TabsTrigger>
          <TabsTrigger value="dashboard" className="hidden lg:block">
            Dashboard
          </TabsTrigger>
        </TabsList>
        <TabsContent value="question">
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>How do I bake a cake?</span>
                <ReportButton contentType="question" contentId="q1" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center mb-4">
                <Avatar className="h-10 w-10 mr-2">
                  <AvatarImage src="/avatars/01.png" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">John Doe</p>
                  <p className="text-sm text-muted-foreground">
                    Posted 2 hours ago
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                I've never baked before and want to try making a simple cake.
                Any tips?
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <ThumbsUp className="h-4 w-4 mr-2" />
                    <span>10</span>
                  </Button>
                  <Button variant="outline" size="sm">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    <span>5</span>
                  </Button>
                </div>
                <FlaggedContentIndicator flagCount={2} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="answer">
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>Answer to: How do I bake a cake?</span>
                <ReportButton contentType="answer" contentId="a1" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center mb-4">
                <Avatar className="h-10 w-10 mr-2">
                  <AvatarImage src="/avatars/02.png" alt="User" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">Jane Smith</p>
                  <p className="text-sm text-muted-foreground">
                    Answered 1 hour ago
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Start with a basic recipe, make sure to measure ingredients
                accurately, and don't overmix the batter. Preheat the oven and
                use the right pan size. Here are some key steps:
              </p>
              <ol className="list-decimal list-inside mb-4 space-y-2">
                <li>Gather all ingredients before starting</li>
                <li>Cream butter and sugar until light and fluffy</li>
                <li>Add eggs one at a time, mixing well after each addition</li>
                <li>Alternate adding dry ingredients and milk</li>
                <li>
                  Pour batter into a greased pan and bake at the correct
                  temperature
                </li>
              </ol>
              <p className="text-muted-foreground mb-4">
                Remember, practice makes perfect. Good luck with your first
                cake!
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <ThumbsUp className="h-4 w-4 mr-2" />
                    <span>15</span>
                  </Button>
                  <Button variant="outline" size="sm">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    <span>3</span>
                  </Button>
                </div>
                <Badge variant="secondary">Top Answer</Badge>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="dashboard">
          <ModerationDashboard />
        </TabsContent>
      </Tabs>

      <div className="lg:hidden">
        <Button
          className="w-full mb-4"
          onClick={() => setActiveTab("dashboard")}
        >
          Open Moderation Dashboard
        </Button>
      </div>
    </div>
  );
}

function ReportButton({
  contentType,
  contentId,
}: {
  contentType: "question" | "answer" | "comment";
  contentId: string;
}) {
  return (
    <Button variant="outline" size="sm">
      <Flag className="h-4 w-4 mr-2" />
      Report
    </Button>
  );
}

function FlaggedContentIndicator({ flagCount }: { flagCount: number }) {
  return (
    <Badge variant="destructive" className="ml-2">
      <AlertTriangle className="h-4 w-4 mr-1" />
      Flagged ({flagCount})
    </Badge>
  );
}

function ModerationDashboard() {
  const mockReports = [
    {
      id: "1",
      contentType: "question",
      contentId: "q1",
      reason: "spam",
      reporter: "user1",
      timestamp: "2023-04-01T12:00:00Z",
    },
    {
      id: "2",
      contentType: "answer",
      contentId: "a1",
      reason: "harassment",
      reporter: "user2",
      timestamp: "2023-04-02T14:30:00Z",
    },
    {
      id: "3",
      contentType: "comment",
      contentId: "c1",
      reason: "inappropriate",
      reporter: "user3",
      timestamp: "2023-04-03T09:15:00Z",
    },
  ];

  return (
    <div className="space-y-4">
      {mockReports.map((report) => (
        <Card key={report.id}>
          <CardContent className="pt-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold">
                  {report.contentType.charAt(0).toUpperCase() +
                    report.contentType.slice(1)}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Reported by {report.reporter}
                </p>
              </div>
              <Badge>{report.reason}</Badge>
            </div>
            <p className="text-sm mb-4">
              Reported on: {new Date(report.timestamp).toLocaleString()}
            </p>
            <Separator className="my-4" />
            <div className="flex justify-end space-x-2">
              <Button size="sm" variant="outline">
                <Check className="h-4 w-4 mr-2" />
                Approve
              </Button>
              <Button size="sm" variant="destructive">
                <X className="h-4 w-4 mr-2" />
                Remove
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
