"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { AlertCircle, X } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function AskQuestionPage() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState("");
  const [agreeToGuidelines, setAgreeToGuidelines] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !category || !agreeToGuidelines) {
      setError(
        "Please fill in all required fields and agree to the guidelines.",
      );
      return;
    }
    console.log({ title, details, category, tags });
    alert("Your question has been posted!");
  };

  const addTag = () => {
    if (currentTag && !tags.includes(currentTag)) {
      setTags([...tags, currentTag]);
      setCurrentTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-lg">
        <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
          <CardTitle className="text-2xl font-bold">Ask a Question</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="title" className="text-lg font-semibold">
                Question Title
              </Label>
              <Input
                id="title"
                placeholder="What's your question?"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                maxLength={100}
                className="mt-1 text-lg"
              />
              <div className="flex justify-between items-center mt-2">
                <p className="text-sm text-muted-foreground">
                  {title.length}/100 characters
                </p>
                <Progress
                  value={(title.length / 100) * 100}
                  className="w-1/2"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="details" className="text-lg font-semibold">
                Details
              </Label>
              <Textarea
                id="details"
                placeholder="Provide more details about your question…"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                rows={5}
                className="mt-1 text-lg"
              />
              <p className="text-sm text-muted-foreground mt-2">
                {details.split(" ").filter(Boolean).length} words
              </p>
            </div>

            <div>
              <Label htmlFor="category" className="text-lg font-semibold">
                Category
              </Label>
              <Select onValueChange={setCategory}>
                <SelectTrigger className="mt-1 text-lg">
                  <SelectValue placeholder="Choose a Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="science">Science</SelectItem>
                  <SelectItem value="health">Health</SelectItem>
                  <SelectItem value="entertainment">Entertainment</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="tags" className="text-lg font-semibold">
                Tags
              </Label>
              <div className="flex gap-2 mt-1">
                <Input
                  id="tags"
                  placeholder="Add keywords related to your question…"
                  value={currentTag}
                  onChange={(e) => setCurrentTag(e.target.value)}
                  onKeyPress={(e) =>
                    e.key === "Enter" && (e.preventDefault(), addTag())
                  }
                  className="text-lg"
                />
                <Button type="button" onClick={addTag} variant="outline">
                  Add
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm flex items-center"
                  >
                    {tag}
                    <button
                      onClick={() => removeTag(tag)}
                      className="ml-2 focus:outline-none"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-2 bg-muted p-4 rounded-lg">
              <Checkbox
                id="guidelines"
                checked={agreeToGuidelines}
                onCheckedChange={(checked) =>
                  setAgreeToGuidelines(checked as boolean)
                }
              />
              <Label htmlFor="guidelines" className="text-sm">
                I agree to the community guidelines and terms of service
              </Label>
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Button
              type="submit"
              className="w-full text-lg"
              disabled={!agreeToGuidelines}
            >
              Post Question
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
