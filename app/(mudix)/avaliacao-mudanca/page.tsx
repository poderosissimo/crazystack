"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";

export default function CompletionAndRating() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Conclusão e Avaliação</h2>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Avalie o Serviço</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center space-x-2 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-8 w-8 cursor-pointer ${
                  star <= rating
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }`}
                onClick={() => setRating(star)}
              />
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mb-4">
            {rating > 0
              ? `Você avaliou o serviço com ${rating} estrelas`
              : "Clique para avaliar"}
          </p>
        </CardContent>
      </Card>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Deixe seu Feedback</CardTitle>
        </CardHeader>
        <CardContent>
          <Label htmlFor="feedback">Comentários</Label>
          <Textarea
            id="feedback"
            placeholder="Conte-nos sobre sua experiência..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="mt-2"
          />
        </CardContent>
      </Card>
      <Button className="w-full">Enviar Avaliação</Button>
    </div>
  );
}
