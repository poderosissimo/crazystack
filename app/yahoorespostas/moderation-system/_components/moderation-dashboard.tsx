"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock data for demonstration
const mockReports = [
  {
    id: "1",
    contentType: "question",
    contentId: "q1",
    reason: "spam",
    reporter: "user1",
    timestamp: "2023-04-01T12:00:00Z",
  },
  {
    id: "2",
    contentType: "answer",
    contentId: "a1",
    reason: "harassment",
    reporter: "user2",
    timestamp: "2023-04-02T14:30:00Z",
  },
  {
    id: "3",
    contentType: "comment",
    contentId: "c1",
    reason: "inappropriate",
    reporter: "user3",
    timestamp: "2023-04-03T09:15:00Z",
  },
];

export function ModerationDashboard() {
  const [filter, setFilter] = useState("all");

  const filteredReports =
    filter === "all"
      ? mockReports
      : mockReports.filter((report) => report.contentType === filter);

  const handleAction = (action: string, reportId: string) => {
    // Here you would typically send a request to your API to perform the action
    console.log(`Performing action: ${action} on report: ${reportId}`);
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Moderation Dashboard</h1>
      <div className="mb-4">
        <Select onValueChange={setFilter} defaultValue={filter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by content type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="question">Questions</SelectItem>
            <SelectItem value="answer">Answers</SelectItem>
            <SelectItem value="comment">Comments</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Content Type</TableHead>
            <TableHead>Reason</TableHead>
            <TableHead>Reporter</TableHead>
            <TableHead>Timestamp</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredReports.map((report) => (
            <TableRow key={report.id}>
              <TableCell className="font-medium">
                {report.contentType}
              </TableCell>
              <TableCell>{report.reason}</TableCell>
              <TableCell>{report.reporter}</TableCell>
              <TableCell>
                {new Date(report.timestamp).toLocaleString()}
              </TableCell>
              <TableCell>
                <Button
                  size="sm"
                  className="mr-2"
                  onClick={() => handleAction("approve", report.id)}
                >
                  Approve
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => handleAction("remove", report.id)}
                >
                  Remove
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
