"use client";

import { useState, useEffect, useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  User,
  Send,
  Settings,
  Search,
  HelpCircle,
  CreditCard,
  Package,
} from "lucide-react";

type Message = {
  id: number;
  sender: "user" | "bot";
  content: string;
  timestamp: Date;
};

export default function Component() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "bot",
      content:
        "Welcome to our SaaS Marketplace support! How can I assist you today?",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      const newMessage: Message = {
        id: messages.length + 1,
        sender: "user",
        content: inputMessage,
        timestamp: new Date(),
      };
      setMessages([...messages, newMessage]);
      setInputMessage("");
      setIsTyping(true);

      // Simulate bot response
      setTimeout(() => {
        const botResponse = generateBotResponse(inputMessage);
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            id: prevMessages.length + 1,
            sender: "bot",
            content: botResponse,
            timestamp: new Date(),
          },
        ]);
        setIsTyping(false);
      }, 1500);
    }
  };

  const generateBotResponse = (userMessage: string): string => {
    const lowerCaseMessage = userMessage.toLowerCase();
    if (
      lowerCaseMessage.includes("api") ||
      lowerCaseMessage.includes("integration")
    ) {
      return "For API integration support, please check our documentation at docs.example.com or contact our developer support team at dev-support@example.com.";
    } else if (
      lowerCaseMessage.includes("billing") ||
      lowerCaseMessage.includes("payment")
    ) {
      return "For billing inquiries, please visit our billing portal at billing.example.com or contact our finance team at finance@example.com.";
    } else if (
      lowerCaseMessage.includes("product") ||
      lowerCaseMessage.includes("recommendation")
    ) {
      return "I'd be happy to help you find the right product! Can you tell me more about your specific needs or the problem you're trying to solve?";
    } else {
      return "Thank you for your message. Our support team will get back to you shortly with more information.";
    }
  };

  return (
    <div className="flex h-[600px] max-w-4xl mx-auto border rounded-lg overflow-hidden shadow-lg">
      <div className="w-1/3 bg-muted p-4 border-r">
        <div className="flex items-center space-x-4 mb-6">
          <Avatar>
            <AvatarImage src="/placeholder-avatar.jpg" alt="John Doe" />
            <AvatarFallback>
              <User />
            </AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-lg font-semibold">John Doe</h2>
            <p className="text-sm text-muted-foreground">Premium Plan</p>
          </div>
        </div>
        <Separator className="my-4" />
        <Tabs defaultValue="conversations">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="conversations">Conversations</TabsTrigger>
            <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
          </TabsList>
          <TabsContent value="conversations" className="mt-4">
            <div className="mb-4">
              <Input placeholder="Search conversations..." />
            </div>
            <ScrollArea className="h-[400px]">
              <div className="space-y-4">
                <Card>
                  <CardHeader className="p-4">
                    <CardTitle className="text-sm flex justify-between items-center">
                      API Integration Support
                      <Badge variant="secondary">Open</Badge>
                    </CardTitle>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader className="p-4">
                    <CardTitle className="text-sm flex justify-between items-center">
                      Billing Inquiry
                      <Badge variant="outline">Closed</Badge>
                    </CardTitle>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader className="p-4">
                    <CardTitle className="text-sm flex justify-between items-center">
                      Product Recommendation
                      <Badge>New</Badge>
                    </CardTitle>
                  </CardHeader>
                </Card>
              </div>
            </ScrollArea>
          </TabsContent>
          <TabsContent value="marketplace" className="mt-4">
            <ScrollArea className="h-[400px]">
              <div className="space-y-4">
                <Card>
                  <CardHeader className="p-4">
                    <CardTitle className="text-sm">Featured Products</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-4">
                      <li>Analytics Dashboard Pro</li>
                      <li>Customer Support Bot</li>
                      <li>Secure Payment Gateway</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="p-4">
                    <CardTitle className="text-sm">
                      Your Subscriptions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-4">
                      <li>CRM Enterprise (Active)</li>
                      <li>Email Marketing Suite (Trial)</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="bg-muted p-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold">SaaS Marketplace Support</h2>
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon" aria-label="Search">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Help">
              <HelpCircle className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Settings">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[70%] rounded-lg p-3 ${
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  <p>{message.content}</p>
                  <p className="text-xs mt-1 opacity-50">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-muted rounded-lg p-3">
                  <p className="text-sm">Support is typing...</p>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>
        <div className="p-4 border-t">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex space-x-2"
          >
            <Input
              placeholder="Type your message..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              aria-label="Chat message"
            />
            <Button type="submit" aria-label="Send message">
              <Send className="h-4 w-4 mr-2" />
              Send
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
