"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, MessageCircle, Repeat2, Send, UserPlus } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

interface Tweet {
  id: string
  author: {
    name: string
    handle: string
    imageUrl: string
  }
  content: string
  timestamp: Date
  likes: number
  retweets: number
  replies: number
  image?: string
}

interface Reply {
  id: string
  author: {
    name: string
    handle: string
    imageUrl: string
  }
  content: string
  timestamp: Date
}

const mockTweet: Tweet = {
  id: "1",
  author: {
    name: "John Doe",
    handle: "johndoe",
    imageUrl: "/placeholder.svg?height=48&width=48"
  },
  content: "Just finished a great coding session! #webdev #react",
  timestamp: new Date(),
  likes: 15,
  retweets: 5,
  replies: 3,
  image: "/placeholder.svg?height=300&width=400"
}

const mockReplies: Reply[] = [
  {
    id: "r1",
    author: {
      name: "Jane Smith",
      handle: "janesmith",
      imageUrl: "/placeholder.svg?height=40&width=40"
    },
    content: "That's awesome! What were you working on?",
    timestamp: new Date(Date.now() - 1000 * 60 * 30) // 30 minutes ago
  },
  {
    id: "r2",
    author: {
      name: "Bob Johnson",
      handle: "bobjohnson",
      imageUrl: "/placeholder.svg?height=40&width=40"
    },
    content: "Nice work! Keep it up!",
    timestamp: new Date(Date.now() - 1000 * 60 * 15) // 15 minutes ago
  }
]

export default function TweetDetail() {
  const [isFollowing, setIsFollowing] = useState(false)
  const [newReply, setNewReply] = useState("")
  const [replies, setReplies] = useState(mockReplies)

  const handleFollow = () => {
    setIsFollowing(!isFollowing)
  }

  const handleReply = () => {
    if (newReply.trim()) {
      const newReplyObj: Reply = {
        id: `r${replies.length + 1}`,
        author: {
          name: "Current User",
          handle: "currentuser",
          imageUrl: "/placeholder.svg?height=40&width=40"
        },
        content: newReply,
        timestamp: new Date()
      }
      setReplies([newReplyObj, ...replies])
      setNewReply("")
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={mockTweet.author.imageUrl} alt={mockTweet.author.name} />
                <AvatarFallback>{mockTweet.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{mockTweet.author.name}</CardTitle>
                <p className="text-sm text-gray-500">@{mockTweet.author.handle}</p>
              </div>
            </div>
            <Button
              variant={isFollowing ? "secondary" : "default"}
              size="sm"
              onClick={handleFollow}
            >
              {isFollowing ? "Following" : "Follow"}
              <UserPlus size={16} className="ml-2" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-lg">{mockTweet.content}</p>
          {mockTweet.image && (
            <div className="mb-4 overflow-hidden rounded-lg">
              <Image
                src={mockTweet.image}
                alt="Tweet image"
                width={400}
                height={300}
                layout="responsive"
              />
            </div>
          )}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>{format(mockTweet.timestamp, "d 'de' MMMM 'às' HH:mm", { locale: ptBR })}</span>
            <div className="flex space-x-4">
              <span>{mockTweet.retweets} Retweets</span>
              <span>{mockTweet.likes} Likes</span>
            </div>
          </div>
          <div className="mt-4 flex justify-around border-y py-2">
            <Button variant="ghost" size="sm">
              <MessageCircle size={20} className="mr-2" />
              Reply
            </Button>
            <Button variant="ghost" size="sm">
              <Repeat2 size={20} className="mr-2" />
              Retweet
            </Button>
            <Button variant="ghost" size="sm">
              <Heart size={20} className="mr-2" />
              Like
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardContent>
          <Textarea
            placeholder="Tweet your reply"
            value={newReply}
            onChange={(e) => setNewReply(e.target.value)}
            className="mb-4 resize-none"
            rows={3}
          />
          <div className="flex justify-end">
            <Button onClick={handleReply} disabled={!newReply.trim()}>
              <Send size={16} className="mr-2" />
              Reply
            </Button>
          </div>
        </CardContent>
      </Card>

      <h2 className="mb-4 text-xl font-bold">Replies</h2>
      {replies.map((reply) => (
        <Card key={reply.id} className="mb-4">
          <CardContent className="flex items-start space-x-4 p-4">
            <Avatar>
              <AvatarImage src={reply.author.imageUrl} alt={reply.author.name} />
              <AvatarFallback>{reply.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">{reply.author.name}</p>
                  <p className="text-sm text-gray-500">@{reply.author.handle}</p>
                </div>
                <span className="text-sm text-gray-500">
                  {format(reply.timestamp, "d 'de' MMMM 'às' HH:mm", { locale: ptBR })}
                </span>
              </div>
              <p className="mt-2">{reply.content}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}