'use client'

import { useState, useEffect, useRef } from "react"
import { Send, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Typewriter } from "@/components/ui/typewriter"

const botResponses = [
  "Hello! How can I assist you today?",
  "That's an interesting question. Let me think about it.",
  "I'm here to help. What else would you like to know?",
  "Feel free to ask me anything!",
]

export default function EnhancedChatInterface() {
  const [messages, setMessages] = useState([
    { text: "Hey there!", sender: "bot", timestamp: new Date(), typing: false },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  const sendMessage = (text: string, sender: "user" | "bot") => {
    setMessages((prevMessages) => [...prevMessages, { text, sender, timestamp: new Date(), typing: sender === "bot" }])
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputMessage.trim()) {
      sendMessage(inputMessage, "user")
      setInputMessage("")
      setIsTyping(true)
      
      setTimeout(() => {
        const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)]
        sendMessage(randomResponse, "bot")
        setIsTyping(false)
      }, 1500)
    }
  }

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  return (
    <div className="max-w-2xl mx-auto h-[600px] flex flex-col rounded-lg bg-background shadow-lg overflow-hidden">
      <div className="bg-primary p-4 text-primary-foreground flex items-center space-x-4">
        <Avatar>
          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Bot Avatar" />
          <AvatarFallback>AI</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-lg font-semibold">AI Assistant</h2>
          <p className="text-sm opacity-75">Always here to help</p>
        </div>
      </div>
      <ScrollArea className="flex-grow p-4 space-y-4" ref={scrollAreaRef}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                message.sender === "user"
                  ? "bg-secondary text-secondary-foreground"
                  : "bg-primary text-primary-foreground"
              }`}
            >
              {message.sender === "bot" && message.typing ? (
                <Typewriter texts={[message.text]} delay={0.5} />
              ) : (
                <p className="mb-1">{message.text}</p>
              )}
              <p className="text-xs opacity-50">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-primary text-primary-foreground max-w-[80%] px-4 py-2 rounded-2xl">
              <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-current animate-bounce" />
                <div className="w-2 h-2 rounded-full bg-current animate-bounce delay-100" />
                <div className="w-2 h-2 rounded-full bg-current animate-bounce delay-200" />
              </div>
            </div>
          </div>
        )}
      </ScrollArea>
      <form onSubmit={handleSubmit} className="p-4 bg-secondary">
        <div className="flex space-x-2">
          <Input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-grow bg-background text-foreground"
            maxLength={500}
          />
          <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
            <Send size={18} />
            <span className="sr-only">Send message</span>
          </Button>
        </div>
        <div className="text-xs text-secondary-foreground mt-2 text-right">
          {inputMessage.length}/500
        </div>
      </form>
    </div>
  )
}