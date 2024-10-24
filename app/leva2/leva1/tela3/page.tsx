import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Heart, MapPin, Zap, Undo2, Award, Eye, Ban } from "lucide-react"

export default function PremiumFeatures() {
  const subscriptionTiers = [
    { name: "Tinder Plus", price: "$9.99/mo", color: "bg-blue-500" },
    { name: "Tinder Gold", price: "$14.99/mo", color: "bg-yellow-500" },
    { name: "Tinder Platinum", price: "$19.99/mo", color: "bg-purple-500" },
  ]

  const features = [
    { name: "See Who Liked You", icon: <Eye className="w-6 h-6" />, description: "View profiles of people who have liked you before matching" },
    { name: "Unlimited Swipes", icon: <Heart className="w-6 h-6" />, description: "Never run out of swipes again" },
    { name: "Passport", icon: <MapPin className="w-6 h-6" />, description: "Change your location and swipe anywhere in the world" },
    { name: "Boosts & Super Likes", icon: <Zap className="w-6 h-6" />, description: "Get more visibility and express interest with Super Likes" },
    { name: "Rewind Last Swipe", icon: <Undo2 className="w-6 h-6" />, description: "Undo your last swipe if you change your mind" },
    { name: "No Ads", icon: <Ban className="w-6 h-6" />, description: "Enjoy an ad-free swiping experience" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Upgrade Your Tinder Experience</h1>
      
      <Tabs defaultValue="plus" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          {subscriptionTiers.map((tier) => (
            <TabsTrigger key={tier.name} value={tier.name.toLowerCase().split(' ')[1]}>
              <span className={`inline-block w-3 h-3 rounded-full mr-2 ${tier.color}`}></span>
              {tier.name}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {subscriptionTiers.map((tier) => (
          <TabsContent key={tier.name} value={tier.name.toLowerCase().split(' ')[1]}>
            <Card>
              <CardHeader>
                <CardTitle>{tier.name}</CardTitle>
                <CardDescription>Unlock premium features for {tier.price}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {features.map((feature) => (
                    <li key={feature.name} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-medium">{feature.name}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      <div className="mt-8 text-center">
        <Button size="lg" className="w-full sm:w-auto">
          Upgrade Now
          <Award className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div className="mt-8 text-center">
        <h2 className="text-xl font-semibold mb-4">Your Current Boosts & Super Likes</h2>
        <div className="flex justify-center space-x-4">
          <Badge variant="secondary" className="text-lg py-2 px-4">
            <Zap className="inline-block w-4 h-4 mr-2" />
            2 Boosts Remaining
          </Badge>
          <Badge variant="secondary" className="text-lg py-2 px-4">
            <Heart className="inline-block w-4 h-4 mr-2" />
            5 Super Likes Remaining
          </Badge>
        </div>
      </div>
    </div>
  )
}