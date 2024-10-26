"use client";
import { useState } from "react";
import {
  Bell,
  ChevronDown,
  ChevronUp,
  CreditCard,
  Eye,
  Facebook,
  Google,
  Lock,
  LogOut,
  Mail,
  Phone,
  Trash2,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SettingsScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);

  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold">Settings</h1>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="account">
          <AccordionTrigger>
            <div className="flex items-center">
              <User className="mr-2" />
              Account Settings
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
              </div>
              <div>
                <Label htmlFor="password">Change Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="New password"
                />
              </div>
              <div className="space-y-2">
                <Label>Linked Accounts</Label>
                <div className="flex space-x-2">
                  <Button variant="outline" size="icon">
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Google className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="privacy">
          <AccordionTrigger>
            <div className="flex items-center">
              <Lock className="mr-2" />
              Privacy Settings
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="block">Block Users</Label>
                <Button variant="outline">Manage</Button>
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="visibility">Profile Visibility</Label>
                <Switch
                  id="visibility"
                  checked={isVisible}
                  onCheckedChange={setIsVisible}
                />
              </div>
              <div>
                <Label>Data Sharing Permissions</Label>
                <Button variant="outline" className="mt-2">
                  Manage Permissions
                </Button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="notifications">
          <AccordionTrigger>
            <div className="flex items-center">
              <Bell className="mr-2" />
              Notifications
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="push">Push Notifications</Label>
                <Switch
                  id="push"
                  checked={pushNotifications}
                  onCheckedChange={setPushNotifications}
                />
              </div>
              <div>
                <Label>Notification Preferences</Label>
                <div className="mt-2 space-y-2">
                  {["Matches", "Messages", "Likes"].map((pref) => (
                    <div
                      key={pref}
                      className="flex items-center justify-between"
                    >
                      <span>{pref}</span>
                      <Switch />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="subscription">
          <AccordionTrigger>
            <div className="flex items-center">
              <CreditCard className="mr-2" />
              Subscription Management
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardHeader>
                <CardTitle>Current Plan: Premium</CardTitle>
                <CardDescription>
                  Valid until: December 31, 2023
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline">Upgrade Plan</Button>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Manage Payment Methods</Button>
              </CardFooter>
            </Card>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="space-y-4 pt-6">
        <Button variant="outline" className="w-full">
          <LogOut className="mr-2 h-4 w-4" /> Log Out
        </Button>
        <Button variant="outline" className="w-full text-destructive">
          <Trash2 className="mr-2 h-4 w-4" /> Delete Account
        </Button>
      </div>
    </div>
  );
}
