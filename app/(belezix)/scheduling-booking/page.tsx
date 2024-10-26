"use client";

import React from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { CalendarIcon, Clock, HelpCircle, MapPin, User } from "lucide-react";

export default function BookingScreen() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [bookingConfirmed, setBookingConfirmed] = React.useState(false);

  const handleConfirmBooking = () => {
    // Here you would typically handle the booking confirmation
    // For this example, we'll just set a state to show the confirmation screen
    setBookingConfirmed(true);
  };

  if (bookingConfirmed) {
    return (
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center text-2xl">
            Booking Confirmed!
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center">
            Your appointment has been successfully booked.
          </p>
          <div className="flex justify-center space-x-4">
            <Button>Add to Calendar</Button>
            <Button variant="outline">Modify Booking</Button>
          </div>
        </CardContent>
        <CardFooter className="justify-center">
          <Button variant="link">Return to Home</Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-primary rounded-full" />{" "}
          {/* Placeholder for logo */}
          <CardTitle>Schedule an Appointment</CardTitle>
        </div>
        <div className="flex items-center space-x-4">
          <User className="text-muted-foreground" />
          <HelpCircle className="text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="event" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="event">Event Info</TabsTrigger>
            <TabsTrigger value="datetime">Date & Time</TabsTrigger>
            <TabsTrigger value="details">Your Details</TabsTrigger>
          </TabsList>
          <TabsContent value="event">
            <div className="space-y-4 mt-4">
              <h2 className="text-xl font-semibold">Strategy Meeting</h2>
              <p className="text-muted-foreground">
                Discuss quarterly goals and align on key initiatives.
              </p>
              <div className="flex items-center space-x-2">
                <MapPin className="text-muted-foreground" size={16} />
                <span>Online via Zoom</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="text-muted-foreground" size={16} />
                <span>60 minutes</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="text-muted-foreground" size={16} />
                <span>John Doe (Organizer)</span>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="datetime">
            <div className="flex space-x-4 mt-4">
              <div className="flex-1">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </div>
              <div className="flex-1 space-y-4">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="9:00">9:00 AM</SelectItem>
                    <SelectItem value="10:00">10:00 AM</SelectItem>
                    <SelectItem value="11:00">11:00 AM</SelectItem>
                    {/* Add more time slots as needed */}
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pst">Pacific Time (PT)</SelectItem>
                    <SelectItem value="est">Eastern Time (ET)</SelectItem>
                    <SelectItem value="gmt">
                      Greenwich Mean Time (GMT)
                    </SelectItem>
                    {/* Add more timezones as needed */}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="details">
            <div className="space-y-4 mt-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="name">Name</Label>
                <Input type="text" id="name" placeholder="Your full name" />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Your email address"
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="phone">Phone (optional)</Label>
                <Input type="tel" id="phone" placeholder="Your phone number" />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea
                  id="notes"
                  placeholder="Any additional information or requests"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to the terms and conditions
                </label>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button onClick={handleConfirmBooking}>Confirm Booking</Button>
      </CardFooter>
      <div className="text-center text-sm text-muted-foreground mt-4">
        <a href="#" className="underline">
          Contact Support
        </a>{" "}
        |
        <a href="#" className="underline ml-2">
          Privacy Policy
        </a>{" "}
        |
        <a href="#" className="underline ml-2">
          Terms of Service
        </a>
      </div>
    </Card>
  );
}
