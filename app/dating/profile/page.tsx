"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, X } from "lucide-react";

export default function ProfileEdit() {
  const [photos, setPhotos] = useState<string[]>([
    "/placeholder.svg?height=200&width=200",
    "/placeholder.svg?height=200&width=200",
  ]);
  const [bio, setBio] = useState("");
  const [job, setJob] = useState("");
  const [education, setEducation] = useState("");
  const [gender, setGender] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [distance, setDistance] = useState(50);
  const [visibilityAge, setVisibilityAge] = useState(true);
  const [visibilityGender, setVisibilityGender] = useState(true);
  const [instagramLinked, setInstagramLinked] = useState(false);
  const [spotifyLinked, setSpotifyLinked] = useState(false);

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setPhotos([...photos, e.target.result as string]);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePhotoDelete = (index: number) => {
    setPhotos(photos.filter((_, i) => i !== index));
  };

  const handleInterestChange = (interest: string) => {
    if (interests.includes(interest)) {
      setInterests(interests.filter((i) => i !== interest));
    } else {
      setInterests([...interests, interest]);
    }
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold">Edit Profile</h1>

      <Card>
        <CardHeader>
          <CardTitle>Profile Pictures</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            {photos.map((photo, index) => (
              <div key={index} className="relative">
                <img
                  src={photo}
                  alt={`Profile ${index + 1}`}
                  className="w-full h-auto rounded-lg"
                />
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2"
                  onClick={() => handlePhotoDelete(index)}
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Delete photo</span>
                </Button>
              </div>
            ))}
            <div className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-4">
              <label htmlFor="photo-upload" className="cursor-pointer">
                <Upload className="h-8 w-8 text-gray-400" />
                <span className="sr-only">Upload photo</span>
              </label>
              <input
                id="photo-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handlePhotoUpload}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Bio</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            placeholder="Write something about yourself..."
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            maxLength={500}
          />
          <p className="text-sm text-gray-500 mt-2">
            {bio.length}/500 characters
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="job">Job Title</Label>
            <Input
              id="job"
              value={job}
              onChange={(e) => setJob(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="education">Education</Label>
            <Input
              id="education"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
            />
          </div>
          <div>
            <Label>Gender</Label>
            <RadioGroup value={gender} onValueChange={setGender}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="male" id="male" />
                <Label htmlFor="male">Male</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="female" id="female" />
                <Label htmlFor="female">Female</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="other" id="other" />
                <Label htmlFor="other">Other</Label>
              </div>
            </RadioGroup>
          </div>
          <div>
            <Label>Interests</Label>
            <div className="flex flex-wrap gap-2 mt-2">
              {["Music", "Sports", "Travel", "Food", "Art", "Gaming"].map(
                (interest) => (
                  <Button
                    key={interest}
                    variant={
                      interests.includes(interest) ? "default" : "outline"
                    }
                    onClick={() => handleInterestChange(interest)}
                  >
                    {interest}
                  </Button>
                ),
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Distance & Visibility Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Distance (km)</Label>
            <Slider
              value={[distance]}
              onValueChange={(value) => setDistance(value[0])}
              max={100}
              step={1}
            />
            <p className="text-sm text-gray-500 mt-2">
              Show profiles within {distance} km
            </p>
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="visibility-age">Show Age</Label>
            <Switch
              id="visibility-age"
              checked={visibilityAge}
              onCheckedChange={setVisibilityAge}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="visibility-gender">Show Gender</Label>
            <Switch
              id="visibility-gender"
              checked={visibilityGender}
              onCheckedChange={setVisibilityGender}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Link Social Media</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Label htmlFor="link-instagram">Link Instagram</Label>
            </div>
            <Switch
              id="link-instagram"
              checked={instagramLinked}
              onCheckedChange={setInstagramLinked}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Label htmlFor="link-spotify">Link Spotify</Label>
            </div>
            <Switch
              id="link-spotify"
              checked={spotifyLinked}
              onCheckedChange={setSpotifyLinked}
            />
          </div>
        </CardContent>
      </Card>

      <Button className="w-full">Save Changes</Button>
    </div>
  );
}
