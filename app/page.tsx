"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Brain, CheckCircle2, Network } from "lucide-react"
import ModuleSelector from "@/components/module-selector"
import QuizSection from "@/components/quiz-section"
import StudyGuide from "@/components/study-guide"
import ConfigurationPractice from "@/components/configuration-practice"

export default function Home() {
  const [selectedModule, setSelectedModule] = useState<number | null>(null)
  const [score, setScore] = useState({ correct: 0, total: 0 })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Network className="h-12 w-12 text-indigo-600" />
            <h1 className="text-4xl font-bold text-gray-900">COMNET Exam Reviewer</h1>
          </div>
          <p className="text-lg text-gray-600 mb-2">Enterprise Networking, Security, and Automation (100 Points)</p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary" className="text-sm">
              Modules 1-8
            </Badge>
            <Badge variant="secondary" className="text-sm">
              Multiple Choice
            </Badge>
            <Badge variant="secondary" className="text-sm">
              Enumerations
            </Badge>
            <Badge variant="secondary" className="text-sm">
              Essay
            </Badge>
            <Badge variant="secondary" className="text-sm">
              Modified T/F
            </Badge>
            <Badge variant="secondary" className="text-sm">
              Configuration
            </Badge>
          </div>
        </div>

        {/* Score Display */}
        {score.total > 0 && (
          <Card className="mb-6 p-4 bg-white/80 backdrop-blur">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span className="font-semibold">Your Progress:</span>
              </div>
              <div className="text-lg font-bold text-indigo-600">
                {score.correct} / {score.total} ({Math.round((score.correct / score.total) * 100)}%)
              </div>
            </div>
          </Card>
        )}

        {/* Main Content */}
        {!selectedModule ? (
          <ModuleSelector onSelectModule={setSelectedModule} />
        ) : (
          <div className="space-y-6">
            <Card className="p-4 bg-white/80 backdrop-blur">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Module {selectedModule}</h2>
                <Button variant="outline" onClick={() => setSelectedModule(null)}>
                  Change Module
                </Button>
              </div>
            </Card>

            <Tabs defaultValue="study" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-white/80 backdrop-blur">
                <TabsTrigger value="study" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Study Guide
                </TabsTrigger>
                <TabsTrigger value="quiz" className="flex items-center gap-2">
                  <Brain className="h-4 w-4" />
                  Practice Quiz
                </TabsTrigger>
                <TabsTrigger value="config" className="flex items-center gap-2">
                  <Network className="h-4 w-4" />
                  Configuration
                </TabsTrigger>
              </TabsList>

              <TabsContent value="study">
                <StudyGuide module={selectedModule} />
              </TabsContent>

              <TabsContent value="quiz">
                <QuizSection module={selectedModule} onUpdateScore={(correct, total) => setScore({ correct, total })} />
              </TabsContent>

              <TabsContent value="config">
                <ConfigurationPractice module={selectedModule} />
              </TabsContent>
            </Tabs>
          </div>
        )}
      </div>
    </div>
  )
}
