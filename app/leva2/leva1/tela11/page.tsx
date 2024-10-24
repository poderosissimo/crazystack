'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Briefcase, GraduationCap, MapPin, Music, Book, Gamepad, AlertTriangle, MessageCircle } from 'lucide-react'

// Mock data for the profile
const profile = {
  name: "Jane Doe",
  age: 28,
  jobTitle: "Software Engineer",
  education: "Stanford University",
  location: "San Francisco, CA",
  bio: "Coffee enthusiast, dog lover, and coding ninja. Looking for someone to share adventures and Netflix binges with.",
  interests: ["Music", "Reading", "Gaming"],
  photos: [
    "/placeholder.svg?height=400&width=300",
    "/placeholder.svg?height=400&width=300",
    "/placeholder.svg?height=400&width=300",
  ],
  isMatch: true, // This would be determined by your app's logic
}

export default function ProfileScreen() {
  const [currentPhoto, setCurrentPhoto] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % profile.photos.length)
  }

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + profile.photos.length) % profile.photos.length)
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{profile.name}, {profile.age}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Photo Gallery */}
        <div className="relative">
          <img
            src={profile.photos[currentPhoto]}
            alt={`${profile.name}'s photo ${currentPhoto + 1}`}
            className={`w-full h-[400px] object-cover rounded-lg cursor-pointer transition-transform duration-300 ${isZoomed ? 'scale-150' : ''}`}
            onClick={() => setIsZoomed(!isZoomed)}
          />
          <Button variant="outline" size="icon" className="absolute top-1/2 left-2 transform -translate-y-1/2" onClick={prevPhoto}>
            {'<'}
          </Button>
          <Button variant="outline" size="icon" className="absolute top-1/2 right-2 transform -translate-y-1/2" onClick={nextPhoto}>
            {'>'}
          </Button>
        </div>

        {/* User's Detailed Bio */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4" />
            <span>{profile.jobTitle}</span>
          </div>
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4" />
            <span>{profile.education}</span>
          </div>
          {profile.location && (
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{profile.location}</span>
            </div>
          )}
          <p className="text-sm text-muted-foreground">{profile.bio}</p>
        </div>

        {/* Common Interests */}
        <div>
          <h3 className="font-semibold mb-2">Interests</h3>
          <div className="flex flex-wrap gap-2">
            {profile.interests.map((interest, index) => (
              <div key={index} className="flex items-center gap-1 bg-primary/10 text-primary rounded-full px-3 py-1 text-sm">
                {interest === 'Music' && <Music className="w-4 h-4" />}
                {interest === 'Reading' && <Book className="w-4 h-4" />}
                {interest === 'Gaming' && <Gamepad className="w-4 h-4" />}
                {interest}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        {/* Send a Message Button */}
        {profile.isMatch && (
          <Button className="flex-1 mr-2" onClick={() => alert("Open chat")}>
            <MessageCircle className="w-4 h-4 mr-2" />
            Send a Message
          </Button>
        )}

        {/* Report/Block User Button */}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="flex-1 ml-2">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Report/Block
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Report or Block User</DialogTitle>
              <DialogDescription>
                Are you sure you want to report or block this user? This action cannot be undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="sm:justify-start">
              <Button variant="destructive" onClick={() => alert("User reported/blocked")}>
                Confirm
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  )
}