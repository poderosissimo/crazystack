import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { ArrowBigUp, ArrowBigDown, Share2, Bookmark, MessageSquare, Flag } from 'lucide-react'

export default function QuestionDetailsPage() {
  const [isFollowing, setIsFollowing] = useState(false)
  const [questionVotes, setQuestionVotes] = useState(0)
  const [answerVotes, setAnswerVotes] = useState([5, 2, 0])

  const handleQuestionVote = (value: number) => {
    setQuestionVotes(prev => prev + value)
  }

  const handleAnswerVote = (index: number, value: number) => {
    setAnswerVotes(prev => prev.map((votes, i) => i === index ? votes + value : votes))
  }

  const handleFollow = () => {
    setIsFollowing(prev => !prev)
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <main>
        <h1 className="text-3xl font-bold mb-4">How do I create a React component?</h1>
        
        <div className="flex items-center mb-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@johndoe" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="ml-3">
            <p className="font-semibold">John Doe</p>
            <p className="text-sm text-muted-foreground">Reputation: 1234</p>
          </div>
          <p className="ml-auto text-sm text-muted-foreground">Asked 2 hours ago</p>
        </div>

        <p className="mb-4">
          I'm new to React and I'm trying to understand how to create a basic component. Can someone explain the process step by step?
        </p>

        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center">
            <Button variant="ghost" size="sm" onClick={() => handleQuestionVote(1)}><ArrowBigUp className="h-6 w-6" /></Button>
            <span className="mx-2">{questionVotes}</span>
            <Button variant="ghost" size="sm" onClick={() => handleQuestionVote(-1)}><ArrowBigDown className="h-6 w-6" /></Button>
          </div>
          <Button variant={isFollowing ? "secondary" : "outline"} onClick={handleFollow}>
            {isFollowing ? "Following" : "Follow"}
          </Button>
          <Button variant="outline" size="icon">
            <Share2 className="h-4 w-4" />
            <span className="sr-only">Share</span>
          </Button>
          <Button variant="outline" size="icon">
            <Bookmark className="h-4 w-4" />
            <span className="sr-only">Bookmark</span>
          </Button>
          <Button variant="ghost" size="sm">
            <Flag className="h-4 w-4 mr-2" />
            Report
          </Button>
        </div>

        <Separator className="my-6" />

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Answers</h2>

          {answerVotes.map((votes, index) => (
            <div key={index} className={`mb-6 p-4 rounded-lg ${index === 0 ? 'bg-green-50 border border-green-200' : 'bg-gray-50'}`}>
              {index === 0 && <div className="text-green-600 font-semibold mb-2">Best Answer</div>}
              <div className="flex items-start mb-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={`/placeholder.svg?height=32&width=32&text=${index + 1}`} alt={`@user${index + 1}`} />
                  <AvatarFallback>U{index + 1}</AvatarFallback>
                </Avatar>
                <div className="ml-3">
                  <p className="font-semibold">User {index + 1}</p>
                  <p className="text-sm text-muted-foreground">Answered 1 hour ago</p>
                </div>
              </div>
              <p className="mb-4">This is an example answer to the question. It provides a brief explanation and some code snippets if necessary.</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <Button variant="ghost" size="sm" onClick={() => handleAnswerVote(index, 1)}><ArrowBigUp className="h-6 w-6" /></Button>
                  <span className="mx-2">{votes}</span>
                  <Button variant="ghost" size="sm" onClick={() => handleAnswerVote(index, -1)}><ArrowBigDown className="h-6 w-6" /></Button>
                </div>
                <Button variant="ghost" size="sm">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Reply
                </Button>
              </div>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Your Answer</h2>
          <Textarea placeholder="Type your answer here..." className="min-h-[150px] mb-4" />
          <Button>Submit Answer</Button>
        </section>
      </main>
    </div>
  )
}