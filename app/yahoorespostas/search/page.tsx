"use client";

import { useState } from "react";
import { Search, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export default function SearchResults() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const mockResults = [
    {
      id: 1,
      title: "How do I bake a perfect chocolate cake?",
      votes: 15,
      answers: 3,
      category: "Cooking",
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      title: "What's the best way to learn a new language?",
      votes: 32,
      answers: 7,
      category: "Education",
      timestamp: "1 day ago",
    },
    {
      id: 3,
      title: "How can I improve my garden soil?",
      votes: 8,
      answers: 2,
      category: "Gardening",
      timestamp: "3 days ago",
    },
  ];

  const handleFilterChange = (filter: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter],
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="sticky top-0 bg-white shadow-md z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="relative flex-grow">
              <Input
                type="search"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <X className="h-4 w-4 text-gray-500" />
                </button>
              )}
            </div>
            <Button type="submit">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          <aside className="w-full md:w-64 space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-2">Sort by</h2>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select sort option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="date">Date</SelectItem>
                  <SelectItem value="popularity">Popularity</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Filters</h2>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <Checkbox
                    id="unanswered"
                    onCheckedChange={() => handleFilterChange("unanswered")}
                  />
                  <span>Unanswered</span>
                </label>
                <label className="flex items-center space-x-2">
                  <Checkbox
                    id="popular"
                    onCheckedChange={() => handleFilterChange("popular")}
                  />
                  <span>Popular</span>
                </label>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Categories</h2>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <Checkbox
                    id="cooking"
                    onCheckedChange={() => handleFilterChange("cooking")}
                  />
                  <span>Cooking</span>
                </label>
                <label className="flex items-center space-x-2">
                  <Checkbox
                    id="education"
                    onCheckedChange={() => handleFilterChange("education")}
                  />
                  <span>Education</span>
                </label>
                <label className="flex items-center space-x-2">
                  <Checkbox
                    id="gardening"
                    onCheckedChange={() => handleFilterChange("gardening")}
                  />
                  <span>Gardening</span>
                </label>
              </div>
            </div>
          </aside>

          <div className="flex-grow">
            <h1 className="text-2xl font-bold mb-6">Search Results</h1>
            {mockResults.length > 0 ? (
              <ul className="space-y-6">
                {mockResults.map((result) => (
                  <li
                    key={result.id}
                    className="bg-white rounded-lg shadow-md p-6"
                  >
                    <h2 className="text-xl font-semibold mb-2">
                      <a href="#" className="text-blue-600 hover:underline">
                        {result.title}
                      </a>
                    </h2>
                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <span>{result.votes} votes</span>
                      <span>{result.answers} answers</span>
                      <span className="bg-gray-200 px-2 py-1 rounded">
                        {result.category}
                      </span>
                      <span>{result.timestamp}</span>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center text-gray-500">
                No results found. Try refining your search.
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
