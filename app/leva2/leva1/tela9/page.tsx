'use client'

import { useState } from 'react'
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function EmailNotificationsSettings() {
  const [settings, setSettings] = useState({
    newAnswers: true,
    newComments: true,
    votes: false,
    newFollowers: true,
    systemUpdates: true,
    digestFrequency: 'daily'
  })

  const handleToggle = (setting: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [setting]: !prev[setting] }))
  }

  const handleDigestChange = (value: string) => {
    setSettings(prev => ({ ...prev, digestFrequency: value }))
  }

  const saveSettings = () => {
    // Here you would typically send the settings to your backend
    console.log('Saving settings:', settings)
    // Show a success message to the user
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Email Notification Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="new-answers">New answers to your questions</Label>
            <Switch
              id="new-answers"
              checked={settings.newAnswers}
              onCheckedChange={() => handleToggle('newAnswers')}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="new-comments">New comments or replies</Label>
            <Switch
              id="new-comments"
              checked={settings.newComments}
              onCheckedChange={() => handleToggle('newComments')}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="votes">Votes on your content</Label>
            <Switch
              id="votes"
              checked={settings.votes}
              onCheckedChange={() => handleToggle('votes')}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="new-followers">New followers</Label>
            <Switch
              id="new-followers"
              checked={settings.newFollowers}
              onCheckedChange={() => handleToggle('newFollowers')}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="system-updates">System updates or announcements</Label>
            <Switch
              id="system-updates"
              checked={settings.systemUpdates}
              onCheckedChange={() => handleToggle('systemUpdates')}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Email Digest Frequency</Label>
          <RadioGroup
            value={settings.digestFrequency}
            onValueChange={handleDigestChange}
            className="flex flex-col space-y-1"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="daily" id="daily" />
              <Label htmlFor="daily">Daily</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="weekly" id="weekly" />
              <Label htmlFor="weekly">Weekly</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="never" id="never" />
              <Label htmlFor="never">Never (receive individual emails)</Label>
            </div>
          </RadioGroup>
        </div>

        <Button onClick={saveSettings} className="w-full">Save Settings</Button>

        <p className="text-sm text-muted-foreground">
          You can unsubscribe from all email notifications by clicking the unsubscribe link in any email we send you.
        </p>
      </CardContent>
    </Card>
  )
}