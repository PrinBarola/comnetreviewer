"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { quizQuestions } from "@/lib/quiz-questions"
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react"

interface QuizSectionProps {
  module: number
  onUpdateScore: (correct: number, total: number) => void
}

export default function QuizSection({ module, onUpdateScore }: QuizSectionProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | string[]>("")
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState({ correct: 0, total: 0 })

  const questions = quizQuestions[module] || []

  if (questions.length === 0) {
    return (
      <Card className="p-8 text-center bg-white/80 backdrop-blur">
        <p className="text-gray-600">Quiz questions not available for this module.</p>
      </Card>
    )
  }

  const question = questions[currentQuestion]

  const handleSubmit = () => {
    const isCorrect =
      question.type === "enumeration"
        ? Array.isArray(selectedAnswer) &&
          selectedAnswer.length === question.correctAnswer.length &&
          selectedAnswer.every((ans) => question.correctAnswer.includes(ans))
        : selectedAnswer === question.correctAnswer

    const newScore = {
      correct: score.correct + (isCorrect ? 1 : 0),
      total: score.total + 1,
    }
    setScore(newScore)
    onUpdateScore(newScore.correct, newScore.total)
    setShowResult(true)
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(question.type === "enumeration" ? [] : "")
      setShowResult(false)
    }
  }

  const isCorrect =
    question.type === "enumeration"
      ? Array.isArray(selectedAnswer) &&
        selectedAnswer.length === question.correctAnswer.length &&
        selectedAnswer.every((ans) => question.correctAnswer.includes(ans))
      : selectedAnswer === question.correctAnswer

  return (
    <Card className="p-6 bg-white/80 backdrop-blur">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <Badge className="text-sm">{question.type.toUpperCase()}</Badge>
          <span className="text-sm text-gray-600">
            Question {currentQuestion + 1} of {questions.length}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`,
            }}
          />
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">{question.question}</h3>

        {question.type === "multiple-choice" && (
          <RadioGroup value={selectedAnswer as string} onValueChange={setSelectedAnswer} disabled={showResult}>
            {question.options?.map((option, idx) => (
              <div key={idx} className="flex items-center space-x-2 mb-3">
                <RadioGroupItem value={option} id={`option-${idx}`} />
                <Label htmlFor={`option-${idx}`} className="cursor-pointer text-base">
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        )}

        {question.type === "enumeration" && (
          <div className="space-y-3">
            <p className="text-sm text-gray-600 mb-3">
              Select all that apply ({question.correctAnswer.length} answers)
            </p>
            {question.options?.map((option, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <Checkbox
                  id={`enum-${idx}`}
                  checked={(selectedAnswer as string[]).includes(option)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedAnswer([...(selectedAnswer as string[]), option])
                    } else {
                      setSelectedAnswer((selectedAnswer as string[]).filter((a) => a !== option))
                    }
                  }}
                  disabled={showResult}
                />
                <Label htmlFor={`enum-${idx}`} className="cursor-pointer text-base">
                  {option}
                </Label>
              </div>
            ))}
          </div>
        )}

        {question.type === "true-false" && (
          <RadioGroup value={selectedAnswer as string} onValueChange={setSelectedAnswer} disabled={showResult}>
            <div className="flex items-center space-x-2 mb-3">
              <RadioGroupItem value="true" id="true" />
              <Label htmlFor="true" className="cursor-pointer text-base">
                True
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="false" id="false" />
              <Label htmlFor="false" className="cursor-pointer text-base">
                False
              </Label>
            </div>
          </RadioGroup>
        )}

        {question.type === "essay" && (
          <div>
            <Textarea
              placeholder="Type your answer here..."
              value={selectedAnswer as string}
              onChange={(e) => setSelectedAnswer(e.target.value)}
              disabled={showResult}
              className="min-h-[150px]"
            />
            <p className="text-sm text-gray-500 mt-2">Key points to include: {question.keyPoints?.join(", ")}</p>
          </div>
        )}
      </div>

      {showResult && (
        <Card className={`p-4 mb-6 ${isCorrect ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}>
          <div className="flex items-start gap-3">
            {isCorrect ? (
              <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
            ) : (
              <XCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
            )}
            <div className="flex-1">
              <p className="font-semibold mb-2">{isCorrect ? "Correct!" : "Incorrect"}</p>
              <p className="text-sm text-gray-700">{question.explanation}</p>
              {!isCorrect && question.type !== "essay" && (
                <p className="text-sm text-gray-700 mt-2">
                  <strong>Correct answer:</strong>{" "}
                  {Array.isArray(question.correctAnswer) ? question.correctAnswer.join(", ") : question.correctAnswer}
                </p>
              )}
            </div>
          </div>
        </Card>
      )}

      <div className="flex gap-3">
        {!showResult ? (
          <Button
            onClick={handleSubmit}
            disabled={!selectedAnswer || (Array.isArray(selectedAnswer) && selectedAnswer.length === 0)}
            className="flex-1"
          >
            Submit Answer
          </Button>
        ) : (
          <Button onClick={handleNext} disabled={currentQuestion === questions.length - 1} className="flex-1">
            Next Question
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </Card>
  )
}

function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 ${className}`}
    >
      {children}
    </span>
  )
}
