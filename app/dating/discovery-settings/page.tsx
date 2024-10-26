'use client'

import { useState } from 'react'
import { Slider } from "@/components/ui/slider"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

export default function DiscoverySettings() {
  const [ageRange, setAgeRange] = useState([18, 35])
  const [distance, setDistance] = useState(10)
  const [genderPreference, setGenderPreference] = useState("both")
  const [showMe, setShowMe] = useState("everyone")
  const [maxDistance, setMaxDistance] = useState("10")
  const [globalDiscovery, setGlobalDiscovery] = useState(false)

  return (
    <div className="max-w-md mx-auto p-6 space-y-8">
      <h1 className="text-2xl font-bold mb-6">Discovery Settings</h1>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Age Range</h2>
        <Slider
          min={18}
          max={100}
          step={1}
          value={ageRange}
          onValueChange={setAgeRange}
          className="w-full"
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>{ageRange[0]} years</span>
          <span>{ageRange[1]} years</span>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Distance</h2>
        <Slider
          min={1}
          max={100}
          step={1}
          value={[distance]}
          onValueChange={(value) => setDistance(value[0])}
          disabled={globalDiscovery}
          className="w-full"
        />
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">{distance} km</span>
          <div className="flex items-center space-x-2">
            <Switch
              id="global-discovery"
              checked={globalDiscovery}
              onCheckedChange={setGlobalDiscovery}
            />
            <Label htmlFor="global-discovery">Global</Label>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Gender Preference</h2>
        <RadioGroup value={genderPreference} onValueChange={setGenderPreference}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="men" id="men" />
            <Label htmlFor="men">Men</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="women" id="women" />
            <Label htmlFor="women">Women</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="both" id="both" />
            <Label htmlFor="both">Both</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Show Me</h2>
        <Select value={showMe} onValueChange={setShowMe}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select who to show" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="men">Men</SelectItem>
            <SelectItem value="women">Women</SelectItem>
            <SelectItem value="everyone">Everyone</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Maximum Distance</h2>
        <Select value={maxDistance} onValueChange={setMaxDistance} disabled={globalDiscovery}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select maximum distance" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="5">5 km</SelectItem>
            <SelectItem value="10">10 km</SelectItem>
            <SelectItem value="25">25 km</SelectItem>
            <SelectItem value="50">50 km</SelectItem>
            <SelectItem value="100">100 km</SelectItem>
            <SelectItem value="unlimited">No limit</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}