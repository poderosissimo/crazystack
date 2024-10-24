import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Component() {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Notifications/Push Alerts Checklist - Tinder Clone</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">1. New Match Notification</h2>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="new-match-push" />
              <label htmlFor="new-match-push" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Push alert when a new match is made
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="new-match-view" />
              <label htmlFor="new-match-view" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Option to view match directly from the notification
              </label>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">2. Message Notification</h2>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="message-push" />
              <label htmlFor="message-push" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Push alert when a new message is received
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="message-quick-reply" />
              <label htmlFor="message-quick-reply" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Quick reply option from the notification (if supported)
              </label>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">3. Super Like Notification</h2>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="super-like-push" />
              <label htmlFor="super-like-push" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Notification when someone uses a super like on your profile
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="super-like-highlight" />
              <label htmlFor="super-like-highlight" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Highlight super liked profiles in the app
              </label>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">4. Boost/Rewind Alerts (For Premium Users)</h2>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="boost-alert" />
              <label htmlFor="boost-alert" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Notification when a profile boost is active or completed
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="rewind-alert" />
              <label htmlFor="rewind-alert" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Alert for rewind feature availability (for undoing last swipe)
              </label>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}