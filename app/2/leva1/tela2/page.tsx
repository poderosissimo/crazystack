"use client";

import { useState } from "react";
import { Star, MessageCircle, Instagram, Twitter, ChevronRight, Users, DollarSign, Briefcase } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Component() {
  const [activeTab, setActiveTab] = useState("ABOUT");
  const tabs = ["ABOUT", "SERVICES", "REVIEWS", "POSTS"];

  return (
    <Card className="max-w-md mx-auto overflow-hidden">
      <div className="relative">
        <img
          src="/placeholder.svg?height=200&width=400"
          alt="Influencer cover"
          className="w-full h-48 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h1 className="text-white text-2xl font-bold">Emma Johnson</h1>
          <p className="text-white text-sm">Lifestyle & Fashion Influencer</p>
        </div>
        <Button variant="ghost" size="icon" className="absolute top-4 right-4 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </Button>
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-green-500 text-sm font-semibold">AVAILABLE</span>
            <span className="text-gray-500 text-sm">• FOR COLLABORATIONS</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <span className="text-lg font-bold mr-1">4.8</span>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-between mb-4">
          <Button variant="outline" size="sm" className="text-purple-600">
            <MessageCircle className="w-4 h-4 mr-1" />
            Message
          </Button>
          <Button variant="outline" size="sm" className="text-blue-600">
            <Instagram className="w-4 h-4 mr-1" />
            Instagram
          </Button>
          <Button variant="outline" size="sm" className="text-sky-600">
            <Twitter className="w-4 h-4 mr-1" />
            Twitter
          </Button>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Key Metrics</h2>
          <div className="flex justify-between">
            <div className="flex flex-col items-center">
              <Users className="w-6 h-6 text-purple-600" />
              <span className="text-sm font-semibold mt-1">250K</span>
              <span className="text-xs text-gray-500">Followers</span>
            </div>
            <div className="flex flex-col items-center">
              <DollarSign className="w-6 h-6 text-green-600" />
              <span className="text-sm font-semibold mt-1">$500</span>
              <span className="text-xs text-gray-500">Avg. Rate</span>
            </div>
            <div className="flex flex-col items-center">
              <Briefcase className="w-6 h-6 text-blue-600" />
              <span className="text-sm font-semibold mt-1">50+</span>
              <span className="text-xs text-gray-500">Campaigns</span>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex border-b">
            {tabs.map((tab) => (
              <Button
                key={tab}
                variant="ghost"
                className={`px-4 py-2 ${activeTab === tab ? "border-b-2 border-purple-600 text-purple-600" : "text-gray-500"}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </Button>
            ))}
          </div>
          <div className="mt-4">
            {activeTab === "ABOUT" && (
              <div>
                <h3 className="font-semibold mb-2">About</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Lifestyle and fashion influencer with a passion for sustainable living. I create content that inspires and empowers my audience to live their best lives while being mindful of their impact on the world.
                </p>
                <h3 className="font-semibold mb-2">Niche</h3>
                <div className="flex flex-wrap gap-2">
                  {["Fashion", "Lifestyle", "Sustainability", "Travel"].map((niche) => (
                    <span key={niche} className="bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-xs">
                      {niche}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {activeTab === "SERVICES" && (
              <div>
                <h3 className="font-semibold mb-2">Collaboration Options</h3>
                <div className="space-y-4">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h4 className="font-semibold">Sponsored Post</h4>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-green-600 font-semibold">$1000</span>
                      <Button size="sm">BOOK NOW</Button>
                    </div>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h4 className="font-semibold">Brand Ambassador</h4>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-green-600 font-semibold">$5000/month</span>
                      <Button size="sm">INQUIRE</Button>
                    </div>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h4 className="font-semibold">Product Review</h4>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-green-600 font-semibold">$750</span>
                      <Button size="sm">BOOK NOW</Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "REVIEWS" && (
              <div>
                <h3 className="font-semibold mb-2">5 reviews</h3>
                <div className="space-y-4">
                  {[
                    { name: "Brand X", rating: 5, date: "2023-05-15", comment: "Emma was fantastic to work with. Her content exceeded our expectations!" },
                    { name: "Company Y", rating: 4, date: "2023-04-22", comment: "Great collaboration. Emma's audience engagement was impressive." },
                  ].map((review, index) => (
                    <div key={index} className="border-b pb-4">
                      <div className="flex items-center mb-2">
                        <Avatar className="w-10 h-10 mr-2">
                          <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${review.name.charAt(0)}`} alt={review.name} />
                          <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">{review.name}</h4>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                              />
                            ))}
                            <span className="text-gray-500 text-sm ml-2">{review.date}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === "POSTS" && (
              <div className="grid grid-cols-2 gap-4">
                {[
                  { image: "Fashion", caption: "Summer fashion haul" },
                  { image: "Lifestyle", caption: "My morning routine" },
                  { image: "Travel", caption: "Exploring hidden gems" },
                  { image: "Food", caption: "Healthy meal prep ideas" },
                ].map((post, index) => (
                  <div key={index}>
                    <img
                      src={`/placeholder.svg?height=150&width=150&text=${post.image}`}
                      alt={post.caption}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                    <p className="text-xs text-gray-500 mt-1">{post.caption}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </CardContent>
      <Button className="w-full">COLLABORATE</Button>
    </Card>
  );
}