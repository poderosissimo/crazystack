'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"
import {
  ChevronDown,
  ChevronRight,
  Download,
  FastForward,
  List,
  Maximize,
  Pause,
  Play,
  Rewind,
  Volume2,
  Menu,
  X,
} from 'lucide-react'

export default function CoursePlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(100)
  const [progress, setProgress] = useState(0)
  const [currentNote, setCurrentNote] = useState('')
  const [notes, setNotes] = useState<string[]>([])
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const togglePlay = () => setIsPlaying(!isPlaying)
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  const handleVolumeChange = (newVolume: number[]) => {
    setVolume(newVolume[0])
  }

  const handleProgressChange = (newProgress: number[]) => {
    setProgress(newProgress[0])
  }

  const handleNoteSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (currentNote.trim()) {
      setNotes([...notes, currentNote])
      setCurrentNote('')
    }
  }

  return (
    <div className="flex flex-col h-screen bg-white text-gray-800">
      {/* Header with menu button for mobile */}
      <header className="bg-gray-100 p-4 flex items-center justify-between md:hidden">
        <Button variant="ghost" size="icon" onClick={toggleSidebar}>
          <Menu className="h-6 w-6" />
        </Button>
        <h1 className="text-lg font-bold">Course Title</h1>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Side Navigation - hidden on mobile, shown with overlay when menu is clicked */}
        <div className={`fixed inset-0 z-50 bg-white md:relative md:bg-transparent md:z-auto transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:w-80 md:border-r md:border-gray-200`}>
          <div className="flex justify-between items-center p-4 border-b border-gray-200 md:hidden">
            <h2 className="text-xl font-bold">Course Content</h2>
            <Button variant="ghost" size="icon" onClick={toggleSidebar}>
              <X className="h-6 w-6" />
            </Button>
          </div>
          <ScrollArea className="h-[calc(100vh-5rem)] md:h-[calc(100vh-8rem)]">
            <div className="p-4 space-y-4">
              {[1, 2, 3, 4, 5].map((section) => (
                <div key={section}>
                  <button className="flex items-center justify-between w-full text-left p-2 hover:bg-gray-200 rounded">
                    <span className="font-medium">Section {section}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <div className="ml-4 mt-2 space-y-2">
                    {[1, 2, 3].map((lesson) => (
                      <button key={lesson} className="flex items-center w-full text-left p-2 hover:bg-gray-200 rounded">
                        <Play className="h-4 w-4 mr-2" />
                        <span className="text-sm">Lesson {lesson}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          <div className="p-4 border-t border-gray-200">
            <Progress value={33} className="mb-2" />
            <p className="text-sm text-gray-600">33% complete</p>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Video Player */}
          <div className="relative bg-black aspect-video">
            <video className="w-full h-full">
              <source src="/placeholder-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <div className="flex items-center justify-between text-white">
                <Button variant="ghost" size="icon" onClick={togglePlay}>
                  {isPlaying ? <Pause className="h-8 w-8 md:h-6 md:w-6" /> : <Play className="h-8 w-8 md:h-6 md:w-6" />}
                </Button>
                <div className="flex items-center space-x-4">
                  <div className="hidden md:flex items-center space-x-2">
                    <Volume2 className="h-5 w-5" />
                    <Slider
                      className="w-24"
                      value={[volume]}
                      max={100}
                      step={1}
                      onValueChange={handleVolumeChange}
                    />
                  </div>
                  <Button variant="ghost" size="icon">
                    <Maximize className="h-6 w-6" />
                  </Button>
                </div>
              </div>
              <Slider
                className="mt-2"
                value={[progress]}
                max={100}
                step={1}
                onValueChange={handleProgressChange}
              />
            </div>
          </div>

          {/* Lesson Title and Navigation */}
          <div className="bg-gray-100 p-4 flex flex-col md:flex-row items-start md:items-center justify-between border-b border-gray-200">
            <h2 className="text-xl font-bold mb-2 md:mb-0">1. Introduction to the Course</h2>
            <div className="flex items-center space-x-2 w-full md:w-auto">
              <Button variant="outline" size="sm" className="flex-1 md:flex-none">
                <ChevronRight className="h-4 w-4 mr-2" />
                Next Lesson
              </Button>
            </div>
          </div>

          {/* Tabs for Notes, Discussion, Resources, and Quizzes */}
          <Tabs defaultValue="overview" className="flex-1 overflow-hidden">
            <TabsList className="bg-gray-100 border-b border-gray-200 px-4 overflow-x-auto flex whitespace-nowrap">
              <TabsTrigger value="overview" className="data-[state=active]:bg-white">Overview</TabsTrigger>
              <TabsTrigger value="notes" className="data-[state=active]:bg-white">Notes</TabsTrigger>
              <TabsTrigger value="discussion" className="data-[state=active]:bg-white">Q&A</TabsTrigger>
              <TabsTrigger value="resources" className="data-[state=active]:bg-white">Resources</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="p-4 overflow-auto">
              <h3 className="text-lg font-semibold mb-2">About this lesson</h3>
              <p>This lesson introduces the key concepts of the course and outlines what you'll learn in the upcoming sections.</p>
            </TabsContent>

            <TabsContent value="notes" className="flex flex-col h-full">
              <ScrollArea className="flex-1 p-4">
                {notes.map((note, index) => (
                  <div key={index} className="mb-2 p-2 bg-gray-100 rounded">
                    {note}
                  </div>
                ))}
              </ScrollArea>
              <form onSubmit={handleNoteSubmit} className="p-4 border-t border-gray-200">
                <Textarea
                  placeholder="Type your notes here..."
                  value={currentNote}
                  onChange={(e) => setCurrentNote(e.target.value)}
                  className="mb-2"
                />
                <Button type="submit">Save Note</Button>
              </form>
            </TabsContent>

            <TabsContent value="discussion" className="h-full overflow-y-auto p-4">
              <h3 className="text-lg font-semibold mb-4">Questions and Answers</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((comment) => (
                  <div key={comment} className="bg-gray-100 p-3 rounded">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-medium">Student {comment}</span>
                      <span className="text-sm text-gray-500">2 days ago</span>
                    </div>
                    <p className="text-sm">This is a sample question about the lesson content.</p>
                    <div className="mt-2 text-sm text-gray-500">
                      <button className="mr-2 hover:text-gray-700">Reply</button>
                      <button className="hover:text-gray-700">Upvote (5)</button>
                    </div>
                  </div>
                ))}
              </div>
              <form className="mt-4">
                <Textarea placeholder="Ask a question..." className="mb-2" />
                <Button>Post Question</Button>
              </form>
            </TabsContent>

            <TabsContent value="resources" className="h-full overflow-y-auto p-4">
              <h3 className="text-lg font-semibold mb-4">Lesson Resources</h3>
              <ul className="space-y-2">
                {['Lesson Slides', 'Exercise Files', 'Additional Reading'].map((resource) => (
                  <li key={resource} className="flex items-center justify-between bg-gray-100 p-2 rounded">
                    <span>{resource}</span>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </li>
                ))}
              </ul>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}