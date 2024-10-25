'use client'

import Image from 'next/image'
import { Star, Play, CheckCircle, Globe, Subtitles, Trophy, InfinityIcon, Moon, Sun } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"

export default function CoursePage() {
  const [isExpanded, setIsExpanded] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <div className="bg-muted">
        <div className="max-w-6xl mx-auto p-6">
          <div className="flex justify-end mb-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
          <div className="md:w-3/5">
            <nav className="text-sm mb-4">
              <a href="#" className="hover:underline">Development</a> {'>'}
              <a href="#" className="hover:underline"> Web Development</a> {'>'}
              <a href="#" className="hover:underline"> JavaScript</a>
            </nav>
            <h1 className="text-3xl font-bold mb-2">The Complete JavaScript Course 2023: From Zero to Expert!</h1>
            <p className="text-xl mb-4">Master JavaScript with the most complete course on the market! Projects, challenges, quizzes, JavaScript ES6+, OOP, AJAX, Webpack</p>
            <div className="flex items-center mb-2">
              <span className="text-[#f69c08] font-bold mr-1">4.7</span>
              <div className="flex mr-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-[#f69c08]" fill="#f69c08" />
                ))}
              </div>
              <span className="text-muted-foreground mr-1">(139,563 ratings)</span>
              <span>461,383 students</span>
            </div>
            <p className="mb-4">Created by <a href="#" className="text-primary hover:underline">Jonas Schmedtmann</a></p>
            <div className="flex items-center text-sm mb-4">
              <span className="flex items-center mr-4"><Globe className="w-4 h-4 mr-1" /> English</span>
              <span className="flex items-center"><Subtitles className="w-4 h-4 mr-1" /> English [CC], Spanish [AUTO]</span>
            </div>
            <div className="flex items-center text-sm">
              <span className="mr-2">Last updated 6/2023</span>
              <span>68 total hours</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row">
        <div className="md:w-2/3">
          {/* What you'll learn */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">What you'll learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {['Become an advanced, confident, and modern JavaScript developer from scratch',
                  'Build 6 beautiful real-world projects for your portfolio (not boring toy apps)',
                  'Become job-ready by understanding how JavaScript really works behind the scenes',
                  'JavaScript fundamentals: variables, if/else, operators, boolean logic, functions, arrays, objects, loops, strings, etc.',
                  'Modern OOP: Classes, constructors, prototypal inheritance, encapsulation, etc.',
                  'Asynchronous JavaScript: Event loop, promises, async/await, AJAX calls and APIs'].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Course content */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">Course content</h2>
            <div className="flex justify-between text-sm mb-2">
              <span>37 sections • 358 lectures • 68h 11m total length</span>
              <button className="text-primary hover:underline" onClick={() => setIsExpanded(!isExpanded)}>
                {isExpanded ? 'Collapse all sections' : 'Expand all sections'}
              </button>
            </div>
            <Accordion type="single" collapsible className="bg-card rounded-lg">
              {['Welcome, Welcome, Welcome!', 'JavaScript Fundamentals – Part 1', 'JavaScript Fundamentals – Part 2', 'How to Navigate This Course', 'Developer Skills & Editor Setup'].map((section, index) => (
                <AccordionItem value={`item-${index}`} key={index} className="border-b border-border">
                  <AccordionTrigger className="px-4 py-4 hover:bg-muted text-left">
                    <div className="flex justify-between w-full">
                      <span>{section}</span>
                      <span className="text-sm text-muted-foreground">6 lectures • 65min</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 py-2 bg-background">
                    <ul className="space-y-2">
                      <li className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Play className="w-4 h-4 mr-2 text-muted-foreground" />
                          <span>Course Structure and Projects</span>
                        </div>
                        <span className="text-sm text-muted-foreground">12:11</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Play className="w-4 h-4 mr-2 text-muted-foreground" />
                          <span>Watch Before You Start!</span>
                        </div>
                        <span className="text-sm text-muted-foreground">03:47</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Play className="w-4 h-4 mr-2 text-muted-foreground" />
                          <span>Read Before You Start!</span>
                        </div>
                        <span className="text-sm text-muted-foreground">00:18</span>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Requirements */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">Requirements</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>No coding experience is necessary to take this course! I take you from beginner to expert!</li>
              <li>Any computer and OS will work — Windows, macOS or Linux. We will set up your text editor the course.</li>
              <li>A basic understanding of HTML and CSS is a plus, but not a must! The course includes an HTML and CSS crash course.</li>
            </ul>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">Description</h2>
            <div className={`space-y-4 ${isExpanded ? '' : 'max-h-96 overflow-hidden'}`}>
              <p>
                *** The #1 bestselling JavaScript course on Udemy! ***
              </p>
              <p>
                "Really, really well made course. Super in-depth, with great challenges and projects that will solidify your Javascript understanding. I found the lectures were paced perfectly -- Jonas doesn't skip over anything that might be useful to a JS developer"
              </p>
              <p>
                JavaScript is the most popular programming language in the world. It powers the entire modern web. It provides millions of high-paying jobs all over the world.
              </p>
              <p>
                That's why you want to learn JavaScript too. And you came to the right place!
              </p>
            </div>
            {!isExpanded && (
              <button className="text-primary mt-4 hover:underline" onClick={() => setIsExpanded(true)}>
                Show more
              </button>
            )}
          </div>

          {/* Instructor */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">Instructor</h2>
            <div className="flex items-start">
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="Jonas Schmedtmann"
                width={100}
                height={100}
                className="rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">Jonas Schmedtmann</h3>
                <p className="text-muted-foreground mb-2">Web Developer, Designer, and Teacher</p>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Star className="w-4 h-4 text-[#f69c08] mr-1" fill="#f69c08" />
                  <span>4.6 Instructor Rating</span>
                </div>
                <div className="text-sm text-muted-foreground mb-2">
                  <span className="mr-4">1,831,276 Students</span>
                  <span>7 Courses</span>
                </div>
                <p className="text-muted-foreground">
                  Hi, I'm Jonas! I have been identified as one of Udemy's Top Instructors and all my premium courses have earned the best-selling status for outstanding performance and student satisfaction.
                </p>
                <Button variant="link" className="p-0 h-auto text-primary hover:underline">Show more</Button>
              </div>
            </div>
          </div>

          {/* Student feedback */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">Student feedback</h2>
            <div className="flex items-center mb-4">
              <div className="mr-4">
                <div className="text-[#f69c08] text-6xl font-bold">4.7</div>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-[#f69c08]" fill="#f69c08" />
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">Course Rating</div>
              </div>
              <div className="flex-grow">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center mb-1">
                    <Progress value={rating === 5 ? 77 : rating === 4 ? 17 : 3} className="h-2 mr-2" />
                    <div className="w-16 text-right text-sm text-muted-foreground">{rating === 5 ? '77%' : rating === 4 ? '17%' : '3%'}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-1/3 md:ml-6">
          {/* Sticky sidebar for enrollment */}
          <div className="sticky top-6">
            <Card>
              <CardContent className="p-6">
                <div className="aspect-video mb-4">
                  <Image
                    src="/placeholder.svg?height=360&width=640"
                    alt="Course Preview"
                    width={640}
                    height={360}
                    className="object-cover rounded"
                  />
                </div>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$13.99</span>
                  <span className="text-lg text-muted-foreground line-through ml-2">$84.99</span>
                  <span className="text-sm ml-2">84% off</span>
                </div>
                <p className="text-[#eceb98] text-sm mb-4">
                  <span className="font-semibold">1 day</span> left at this price!
                </p>
                <Button className="w-full mb-4">Add to cart</Button>
                <Button variant="outline" className="w-full mb-4">Buy now</Button>
                <p className="text-center text-sm text-muted-foreground mb-4">30-Day Money-Back Guarantee</p>
                <div className="text-sm">
                  <h4 className="font-semibold mb-2">This course includes:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Play className="w-4 h-4 mr-2" />
                      <span>68 hours on-demand video</span>
                    </li>
                    <li className="flex items-center">
                      <Globe className="w-4 h-4 mr-2" />
                      
                      <span>1 article</span>
                    </li>
                    <li className="flex items-center">
                      <InfinityIcon className="w-4 h-4 mr-2" />
                      <span>Full lifetime access</span>
                    </li>
                    <li className="flex items-center">
                      <Globe className="w-4 h-4 mr-2" />
                      <span>Access on mobile and TV</span>
                    </li>
                    <li className="flex items-center">
                      <Trophy className="w-4 h-4 mr-2" />
                      <span>Certificate of completion</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-4 flex justify-between text-sm text-primary">
                  <button className="hover:underline">Share</button>
                  <button className="hover:underline">Gift this course</button>
                  <button className="hover:underline">Apply Coupon</button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}