"use client";

import { useState, useEffect } from "react";
import {
  Search,
  Filter,
  Star,
  Users,
  DollarSign,
  ChevronDown,
  ChevronUp,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function InfluencerDiscovery() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [followerRange, setFollowerRange] = useState([0, 1000000]);
  const [rateRange, setRateRange] = useState([0, 1500]);
  const [showVerifiedOnly, setShowVerifiedOnly] = useState(false);
  const [sortBy, setSortBy] = useState("relevance");
  const [viewMode, setViewMode] = useState("grid");
  const [expandedCard, setExpandedCard] = useState(null);

  const influencers = [
    {
      id: 1,
      name: "Emma Johnson",
      category: "Lifestyle",
      followers: 250000,
      avgRate: 500,
      rating: 4.8,
      image: "/placeholder.svg?height=100&width=100&text=EJ",
      verified: true,
      engagement: "3.2%",
      platforms: ["instagram", "youtube"],
    },
    {
      id: 2,
      name: "Alex Chen",
      category: "Tech",
      followers: 500000,
      avgRate: 800,
      rating: 4.9,
      image: "/placeholder.svg?height=100&width=100&text=AC",
      verified: true,
      engagement: "4.5%",
      platforms: ["twitter", "youtube"],
    },
    {
      id: 3,
      name: "Sophia Rodriguez",
      category: "Fashion",
      followers: 1000000,
      avgRate: 1200,
      rating: 4.7,
      image: "/placeholder.svg?height=100&width=100&text=SR",
      verified: false,
      engagement: "2.8%",
      platforms: ["instagram", "twitter"],
    },
    {
      id: 4,
      name: "Marcus Lee",
      category: "Fitness",
      followers: 750000,
      avgRate: 600,
      rating: 4.6,
      image: "/placeholder.svg?height=100&width=100&text=ML",
      verified: true,
      engagement: "5.1%",
      platforms: ["instagram", "youtube", "twitter"],
    },
  ];

  const filteredInfluencers = influencers.filter(
    (influencer) =>
      influencer.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "" || influencer.category === selectedCategory) &&
      influencer.followers >= followerRange[0] &&
      influencer.followers <= followerRange[1] &&
      influencer.avgRate >= rateRange[0] &&
      influencer.avgRate <= rateRange[1] &&
      (!showVerifiedOnly || influencer.verified),
  );

  const sortedInfluencers = [...filteredInfluencers].sort((a, b) => {
    if (sortBy === "followers") return b.followers - a.followers;
    if (sortBy === "rate") return b.avgRate - a.avgRate;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0; // Default to no sorting (relevance)
  });

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setExpandedCard(null);
      }
    };
    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  const InfluencerCard = ({ influencer, expanded, onExpand }) => (
    <Card
      className={`transition-all duration-300 ${expanded ? "col-span-2" : ""}`}
    >
      <CardContent className="p-4">
        <div className="flex items-start">
          <Avatar className="w-16 h-16 mr-4">
            <AvatarImage src={influencer.image} alt={influencer.name} />
            <AvatarFallback>
              {influencer.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex-grow">
            <div className="flex items-center">
              <h2 className="text-lg font-semibold">{influencer.name}</h2>
              {influencer.verified && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <svg
                        className="w-5 h-5 ml-2 text-blue-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Verified Influencer</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>
            <p className="text-sm text-gray-500">{influencer.category}</p>
            <div className="flex items-center mt-2">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="ml-1 text-sm">{influencer.rating}</span>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onExpand(influencer.id)}
          >
            {expanded ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </Button>
        </div>
        <div className="flex justify-between mt-4">
          <div className="flex items-center">
            <Users className="w-4 h-4 text-gray-400 mr-1" />
            <span className="text-sm">
              {influencer.followers.toLocaleString()} followers
            </span>
          </div>
          <div className="flex items-center">
            <DollarSign className="w-4 h-4 text-gray-400 mr-1" />
            <span className="text-sm">Avg. ${influencer.avgRate}</span>
          </div>
        </div>
        {expanded && (
          <div className="mt-4 pt-4 border-t">
            <p className="text-sm mb-2">
              <strong>Engagement Rate:</strong> {influencer.engagement}
            </p>
            <div className="flex space-x-2 mb-4">
              {influencer.platforms.includes("instagram") && (
                <Instagram className="w-5 h-5 text-pink-500" />
              )}
              {influencer.platforms.includes("twitter") && (
                <Twitter className="w-5 h-5 text-blue-400" />
              )}
              {influencer.platforms.includes("youtube") && (
                <Youtube className="w-5 h-5 text-red-500" />
              )}
            </div>
            <Button className="w-full">Contact for Collaboration</Button>
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Discover Influencers</h1>
      <Tabs defaultValue="search" className="mb-6">
        <TabsList>
          <TabsTrigger value="search">Search</TabsTrigger>
          <TabsTrigger value="trending">Trending</TabsTrigger>
          <TabsTrigger value="recommended">Recommended</TabsTrigger>
        </TabsList>
        <TabsContent value="search">
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="relative flex-grow">
              <Input
                type="text"
                placeholder="Search influencers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Lifestyle">Lifestyle</SelectItem>
                <SelectItem value="Tech">Tech</SelectItem>
                <SelectItem value="Fashion">Fashion</SelectItem>
                <SelectItem value="Fitness">Fitness</SelectItem>
              </SelectContent>
            </Select>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    onClick={() =>
                      document.getElementById("filtersDialog").showModal()
                    }
                  >
                    <Filter className="mr-2" size={20} />
                    Filters
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Click to open advanced filters</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </TabsContent>
        <TabsContent value="trending">
          <p>Trending influencers content here</p>
        </TabsContent>
        <TabsContent value="recommended">
          <p>Recommended influencers based on your preferences</p>
        </TabsContent>
      </Tabs>

      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <label htmlFor="viewMode" className="text-sm font-medium">
            View:
          </label>
          <Select value={viewMode} onValueChange={setViewMode}>
            <SelectTrigger id="viewMode" className="w-[100px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="grid">Grid</SelectItem>
              <SelectItem value="list">List</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center space-x-2">
          <label htmlFor="sortBy" className="text-sm font-medium">
            Sort by:
          </label>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger id="sortBy" className="w-[150px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevance">Relevance</SelectItem>
              <SelectItem value="followers">Followers</SelectItem>
              <SelectItem value="rate">Average Rate</SelectItem>
              <SelectItem value="rating">Rating</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div
        className={`grid gap-4 ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}
      >
        {sortedInfluencers.map((influencer) => (
          <InfluencerCard
            key={influencer.id}
            influencer={influencer}
            expanded={expandedCard === influencer.id}
            onExpand={(id) => setExpandedCard(expandedCard === id ? null : id)}
          />
        ))}
      </div>

      <dialog
        id="filtersDialog"
        className="p-6 rounded-lg shadow-xl backdrop:bg-black backdrop:opacity-50"
      >
        <h2 className="text-xl font-bold mb-4">Advanced Filters</h2>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Follower Range</label>
            <Slider
              min={0}
              max={1000000}
              step={10000}
              value={followerRange}
              onValueChange={setFollowerRange}
              className="mt-2"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>{followerRange[0].toLocaleString()}</span>
              <span>{followerRange[1].toLocaleString()}</span>
            </div>
          </div>
          <div>
            <label className="text-sm font-medium">
              Average Rate Range ($)
            </label>
            <Slider
              min={0}
              max={1500}
              step={50}
              value={rateRange}
              onValueChange={setRateRange}
              className="mt-2"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>${rateRange[0]}</span>
              <span>${rateRange[1]}</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="verified-only"
              checked={showVerifiedOnly}
              onCheckedChange={setShowVerifiedOnly}
            />
            <label htmlFor="verified-only" className="text-sm font-medium">
              Show verified influencers only
            </label>
          </div>
        </div>
        <div className="flex justify-end mt-6 space-x-2">
          <Button
            variant="outline"
            onClick={() => document.getElementById("filtersDialog").close()}
          >
            Cancel
          </Button>
          <Button
            onClick={() => document.getElementById("filtersDialog").close()}
          >
            Apply Filters
          </Button>
        </div>
      </dialog>
    </div>
  );
}
