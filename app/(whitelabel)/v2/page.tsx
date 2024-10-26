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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import {
  User,
  Send,
  Menu,
  X,
  Sun,
  Moon,
  Paperclip,
  Smile,
  ChevronDown,
  Search,
  Bell,
} from "lucide-react";

type Message = {
  id: number;
  sender: "user" | "bot";
  content: string;
  timestamp: Date;
};

type Theme = "light" | "dark";

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
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [theme, setTheme] = useState<Theme>("light");
  const [isLoading, setIsLoading] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

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
    <div
      className={`flex h-screen max-w-6xl mx-auto overflow-hidden shadow-lg ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
    >
      {/* Sidebar */}
      <div
        className={`w-80 bg-gray-100 dark:bg-gray-800 transition-all duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:static absolute inset-y-0 left-0 z-30`}
      >
        <div className="flex flex-col h-full p-4">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/placeholder-avatar.jpg" alt="John Doe" />
                <AvatarFallback>
                  <User />
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-lg font-semibold">John Doe</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Premium Plan
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          <Tabs defaultValue="conversations" className="flex-grow">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="conversations">Chats</TabsTrigger>
              <TabsTrigger value="marketplace">Market</TabsTrigger>
            </TabsList>
            <TabsContent
              value="conversations"
              className="flex-grow overflow-hidden"
            >
              <Input placeholder="Search conversations..." className="mb-4" />
              <ScrollArea className="h-[calc(100vh-250px)]">
                {isLoading ? (
                  <div className="space-y-4">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="flex items-center space-x-4">
                        <Skeleton className="h-12 w-12 rounded-full" />
                        <div className="space-y-2">
                          <Skeleton className="h-4 w-[200px]" />
                          <Skeleton className="h-4 w-[160px]" />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {["API Support", "Billing Inquiry", "Product Help"].map(
                      (title, index) => (
                        <Card
                          key={index}
                          className="cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        >
                          <CardHeader className="p-4">
                            <CardTitle className="text-sm flex justify-between items-center">
                              <span>{title}</span>
                              <Badge
                                variant={
                                  index === 0
                                    ? "default"
                                    : index === 1
                                      ? "secondary"
                                      : "outline"
                                }
                              >
                                {index === 0
                                  ? "Active"
                                  : index === 1
                                    ? "Pending"
                                    : "Closed"}
                              </Badge>
                            </CardTitle>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              Last message: 2h ago
                            </p>
                          </CardHeader>
                        </Card>
                      ),
                    )}
                  </div>
                )}
              </ScrollArea>
            </TabsContent>
            <TabsContent
              value="marketplace"
              className="flex-grow overflow-hidden"
            >
              <ScrollArea className="h-[calc(100vh-250px)]">
                {isLoading ? (
                  <div className="grid grid-cols-2 gap-4">
                    {[...Array(6)].map((_, i) => (
                      <Card key={i}>
                        <CardHeader className="p-4">
                          <Skeleton className="h-4 w-[140px] mb-2" />
                          <Skeleton className="h-4 w-[100px]" />
                        </CardHeader>
                        <CardContent>
                          <Skeleton className="h-20 w-full rounded-md" />
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      "Analytics Pro",
                      "CRM Suite",
                      "Email Marketing",
                      "Payment Gateway",
                      "Customer Support",
                      "Project Management",
                    ].map((product, index) => (
                      <Card
                        key={index}
                        className="cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      >
                        <CardHeader className="p-4">
                          <CardTitle className="text-sm">{product}</CardTitle>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            From $19/mo
                          </p>
                        </CardHeader>
                        <CardContent>
                          <div className="h-20 bg-gray-300 dark:bg-gray-600 rounded-md flex items-center justify-center text-2xl font-bold text-gray-600 dark:text-gray-300">
                            {product
                              .split(" ")
                              .map((word) => word[0])
                              .join("")}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 p-4 flex justify-between items-center border-b dark:border-gray-700">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden"
            >
              <Menu className="h-6 w-6" />
            </Button>
            <h2 className="text-lg font-semibold">SaaS Marketplace Support</h2>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" aria-label="Search">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Notifications">
              <Bell className="h-5 w-5" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-avatar.jpg" alt="John Doe" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Dark mode</span>
                  <Switch
                    checked={theme === "dark"}
                    onCheckedChange={(checked) =>
                      setTheme(checked ? "dark" : "light")
                    }
                    className="ml-auto"
                  />
                </DropdownMenuItem>
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Chat Area */}
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
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 dark:bg-gray-700"
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
                <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-3">
                  <p className="text-sm">Support is typing...</p>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>

        {/* Message Input */}
        <div className="p-4 border-t dark:border-gray-700">
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
              className="flex-grow"
              aria-label="Chat message"
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label="Attach file"
            >
              <Paperclip className="h-5 w-5" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label="Insert emoji"
            >
              <Smile className="h-5 w-5" />
            </Button>
            <Button type="submit" aria-label="Send message">
              <Send className="h-5 w-5 mr-2" />
              Send
            </Button>
          </form>
        </div>
      </div>

      {/* Floating Action Button (Mobile) */}
      <Button
        className="fixed right-4 bottom-4 rounded-full p-4 shadow-lg lg:hidden"
        size="icon"
        aria-label="New conversation"
      >
        <ChevronDown className="h-6 w-6" />
      </Button>

      {/* Progress Indicator */}
      <Progress value={33} className="w-full h-1 fixed bottom-0 left-0" />
    </div>
  );
}
