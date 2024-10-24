import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Smile, Image as ImageIcon, Mic, Send, ArrowLeft } from 'lucide-react'

// Mock data for matches
const matches = [
  { id: 1, name: "Alice", picture: "/placeholder.svg?height=40&width=40", unreadCount: 3, online: true },
  { id: 2, name: "Bob", picture: "/placeholder.svg?height=40&width=40", unreadCount: 0, online: false },
  { id: 3, name: "Charlie", picture: "/placeholder.svg?height=40&width=40", unreadCount: 1, online: true },
  { id: 4, name: "Diana", picture: "/placeholder.svg?height=40&width=40", unreadCount: 2, online: true },
  { id: 5, name: "Ethan", picture: "/placeholder.svg?height=40&width=40", unreadCount: 0, online: false },
]

export default function Component() {
  const [selectedMatch, setSelectedMatch] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [message, setMessage] = useState("")

  const filteredMatches = matches.filter(match => 
    match.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="flex flex-col md:flex-row h-screen bg-background">
      {/* Matches List */}
      <div className={`w-full md:w-1/3 border-r ${selectedMatch ? 'hidden md:block' : 'block'}`}>
        <div className="p-4">
          <Input
            placeholder="Search matches"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mb-4"
          />
          <ScrollArea className="h-[calc(100vh-8rem)]">
            {filteredMatches.map(match => (
              <div
                key={match.id}
                className="flex items-center p-2 hover:bg-muted cursor-pointer"
                onClick={() => setSelectedMatch(match)}
              >
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src={match.picture} alt={match.name} />
                  <AvatarFallback>{match.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-grow">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{match.name}</span>
                    {match.unreadCount > 0 && (
                      <Badge variant="destructive" className="rounded-full px-2">
                        {match.unreadCount}
                      </Badge>
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {match.online ? 'Online' : 'Offline'}
                  </div>
                </div>
                {match.online && (
                  <div className="w-3 h-3 bg-green-500 rounded-full ml-2"></div>
                )}
              </div>
            ))}
          </ScrollArea>
        </div>
      </div>

      {/* Chat Screen */}
      <div className={`flex-grow flex flex-col ${selectedMatch ? 'block' : 'hidden md:block'}`}>
        {selectedMatch ? (
          <>
            <div className="p-4 border-b flex items-center">
              <Button 
                variant="ghost" 
                size="icon" 
                className="mr-2 md:hidden" 
                onClick={() => setSelectedMatch(null)}
              >
                <ArrowLeft className="h-6 w-6" />
              </Button>
              <Avatar className="h-10 w-10 mr-4">
                <AvatarImage src={selectedMatch.picture} alt={selectedMatch.name} />
                <AvatarFallback>{selectedMatch.name[0]}</AvatarFallback>
              </Avatar>
              <h2 className="text-xl font-semibold">{selectedMatch.name}</h2>
            </div>
            <ScrollArea className="flex-grow p-4">
              {/* Chat messages would go here */}
              <div className="space-y-4">
                <div className="bg-muted p-3 rounded-lg max-w-[70%]">
                  Hi there! How are you?
                </div>
                <div className="bg-primary text-primary-foreground p-3 rounded-lg max-w-[70%] ml-auto">
                  I'm doing great, thanks for asking! How about you?
                </div>
                {/* Add more mock messages as needed */}
              </div>
            </ScrollArea>
            <div className="p-4 border-t">
              <div className="flex items-center">
                <Button variant="ghost" size="icon">
                  <Smile className="h-6 w-6" />
                </Button>
                <Button variant="ghost" size="icon">
                  <ImageIcon className="h-6 w-6" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Mic className="h-6 w-6" />
                </Button>
                <Input
                  placeholder="Type a message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="flex-grow mx-2"
                />
                <Button>
                  <Send className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Send</span>
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-full text-muted-foreground">
            Select a match to start chatting
          </div>
        )}
      </div>
    </div>
  )
}