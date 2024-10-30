"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, Repeat2, Image as ImageIcon, Send } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
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
  image?: string
}

interface TweetItemProps {
  tweet: Tweet
}

const TweetItem = ({ tweet }: TweetItemProps) => {
  return (
    <Card className="min-w-full max-w-full rounded-2xl">
      <CardContent className="px-1 py-0 pt-1">
        <div className="relative h-[159px] w-full">
          <div className="absolute left-2 top-2 z-50">
            <Badge variant="secondary" className="left-3 top-3 flex items-center gap-1 opacity-90">
              <span className="text-xs">{tweet.retweets}</span>
            </Badge>
          </div>

          <Image
            src={tweet.image || tweet.author.imageUrl}
            alt={tweet.image ? "Tweet image" : tweet.author.name}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-2xl"
          />
        </div>

        <div className="px-2 pb-3">
          <h2 className="mt-2 overflow-hidden text-ellipsis text-nowrap font-bold">
            {tweet.author.name}
          </h2>

          <p className="overflow-hidden text-ellipsis text-nowrap text-sm text-gray-400">
            @{tweet.author.handle}
          </p>

          <p className="mt-2 text-sm">{tweet.content}</p>

          <div className="mt-3 flex justify-end space-x-4">
            <Button variant="ghost" size="sm" className="p-0">
              <Repeat2 size={16} />
            </Button>
            <Button variant="ghost" size="sm" className="p-0">
              <Heart size={16} />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

const mockTweets: Tweet[] = [
  {
    id: "1",
    author: {
      name: "John Doe",
      handle: "johndoe",
      imageUrl: "/placeholder.svg?height=159&width=167"
    },
    content: "Just finished a great coding session! #webdev #react",
    timestamp: new Date(),
    likes: 15,
    retweets: 5,
  },
  {
    id: "2",
    author: {
      name: "Jane Smith",
      handle: "janesmith",
      imageUrl: "/placeholder.svg?height=159&width=167"
    },
    content: "Excited to announce my new project! Stay tuned for more details. 🚀",
    timestamp: new Date(),
    likes: 32,
    retweets: 12,
  },
  {
    id: "3",
    author: {
      name: "Tech News",
      handle: "technews",
      imageUrl: "/placeholder.svg?height=159&width=167"
    },
    content: "Breaking: New AI breakthrough in natural language processing! #AI #NLP",
    timestamp: new Date(),
    likes: 128,
    retweets: 76,
  }
]

export default function TweetList() {
  const [newTweet, setNewTweet] = useState("")
  const [selectedImage, setSelectedImage] = useState<File | null>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedImage(file)
    }
  }

  const handleSubmit = () => {
    // Here you would typically send the tweet to your backend
    console.log("New tweet:", newTweet)
    if (selectedImage) {
      console.log("Image uploaded:", selectedImage.name)
    }
    // Reset the form
    setNewTweet("")
    setSelectedImage(null)
  }

  return (
    <div>
      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Latest Tweets</h2>

        <p className="text-sm capitalize">
          {format(new Date(), "EEEE',' dd 'de' MMMM", { locale: ptBR })}
        </p>
      </div>

      <div className="mt-6 px-5">
        <Card className="rounded-2xl">
          <CardContent className="p-4">
            <Textarea
              placeholder="What's happening?"
              value={newTweet}
              onChange={(e) => setNewTweet(e.target.value)}
              className="mb-4 resize-none"
              rows={3}
            />
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <input
                  type="file"
                  id="image-upload"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
                <label htmlFor="image-upload" className="cursor-pointer">
                  <ImageIcon size={24} className="text-gray-500 hover:text-gray-700" />
                </label>
                {selectedImage && (
                  <span className="ml-2 text-sm text-gray-500">{selectedImage.name}</span>
                )}
              </div>
              <Button onClick={handleSubmit} disabled={!newTweet && !selectedImage}>
                <Send size={16} className="mr-2" />
                Tweet
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        <h2 className="mb-3 px-5 text-xs font-bold uppercase text-gray-400">
          Trending
        </h2>

        <div className="flex gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
          {mockTweets.map((tweet) => (
            <div key={tweet.id} className="min-w-[167px] max-w-[167px]">
              <TweetItem tweet={tweet} />
            </div>
          ))}
        </div>
      </div>

      <div className="mb-[4.5rem] mt-6">
        <h2 className="mb-3 px-5 text-xs font-bold uppercase text-gray-400">
          For You
        </h2>

        <div className="flex gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
          {mockTweets.map((tweet) => (
            <div key={tweet.id} className="min-w-[167px] max-w-[167px]">
              <TweetItem tweet={tweet} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}