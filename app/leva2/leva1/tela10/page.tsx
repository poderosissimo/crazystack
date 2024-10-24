'use client'

import React, { useState } from 'react'
import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useDrag } from 'react-use-gesture'
import { Heart, X, Star, Undo, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

// Mock data for profiles
const profiles = [
  {
    id: 1,
    name: 'Sarah',
    age: 28,
    bio: 'Adventure seeker and coffee enthusiast',
    distance: 5,
    interests: ['Travel', 'Coffee', 'Hiking'],
    photos: ['/placeholder.svg?height=400&width=300', '/placeholder.svg?height=400&width=300', '/placeholder.svg?height=400&width=300']
  },
  {
    id: 2,
    name: 'Mike',
    age: 32,
    bio: 'Foodie and amateur chef',
    distance: 3,
    interests: ['Cooking', 'Restaurants', 'Wine'],
    photos: ['/placeholder.svg?height=400&width=300', '/placeholder.svg?height=400&width=300']
  },
  // Add more mock profiles here
]

const to = (i: number) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
})

const from = (_i: number) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })

const trans = (r: number, s: number) =>
  `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

export default function Component() {
  const [gone] = useState(() => new Set())
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const [isPremium] = useState(true) // Assume the user is premium for this example

  const [props, api] = useSprings(profiles.length, i => ({
    ...to(i),
    from: from(i),
  }))

  const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2
    const dir = xDir < 0 ? -1 : 1
    if (!down && trigger) gone.add(index)
    api.start(i => {
      if (index !== i) return
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0
      const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0)
      const scale = down ? 1.1 : 1
      return {
        x,
        rot,
        scale,
        delay: undefined,
        config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
      }
    })
    if (!down && gone.size === profiles.length)
      setTimeout(() => {
        gone.clear()
        api.start(i => to(i))
      }, 600)
  })

  const handleLike = () => {
    // Implement like functionality
  }

  const handleDislike = () => {
    // Implement dislike functionality
  }

  const handleSuperLike = () => {
    // Implement super like functionality
  }

  const handleUndo = () => {
    // Implement undo functionality
  }

  const nextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % profiles[0].photos.length)
  }

  const prevPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex - 1 + profiles[0].photos.length) % profiles[0].photos.length)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="relative w-full max-w-md h-[600px]">
        {props.map(({ x, y, rot, scale }, i) => (
          <animated.div className="absolute w-full h-full will-change-transform" key={i} style={{ x, y }}>
            <animated.div
              {...bind(i)}
              style={{
                transform: interpolate([rot, scale], trans),
                backgroundImage: `url(${profiles[i].photos[currentPhotoIndex]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              className="absolute w-full h-full bg-white rounded-xl shadow-md cursor-grab"
            >
              <Card className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-4 rounded-b-xl">
                <CardContent>
                  <h2 className="text-2xl font-bold">{profiles[i].name}, {profiles[i].age}</h2>
                  <p className="text-sm text-gray-600 mb-2">{profiles[i].bio}</p>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{profiles[i].distance} km away</Badge>
                    {profiles[i].interests.map((interest, index) => (
                      <Badge key={index} variant="outline">{interest}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <div className="absolute top-2 left-2 right-2 flex justify-between">
                <Button size="icon" variant="ghost" onClick={prevPhoto}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost" onClick={nextPhoto}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </animated.div>
          </animated.div>
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <Button size="icon" variant="outline" onClick={handleDislike}>
          <X className="h-6 w-6 text-red-500" />
        </Button>
        <Button size="icon" variant="outline" onClick={handleSuperLike}>
          <Star className="h-6 w-6 text-blue-500" />
        </Button>
        <Button size="icon" variant="outline" onClick={handleLike}>
          <Heart className="h-6 w-6 text-green-500" />
        </Button>
      </div>
      {isPremium && (
        <Button className="mt-4" variant="secondary" onClick={handleUndo}>
          <Undo className="h-4 w-4 mr-2" />
          Undo
        </Button>
      )}
    </div>
  )
}