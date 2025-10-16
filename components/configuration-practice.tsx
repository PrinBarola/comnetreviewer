import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { configurationExercises } from "@/lib/configuration-exercises"
import { Terminal } from "lucide-react"

interface ConfigurationPracticeProps {
  module: number
}

export default function ConfigurationPractice({ module }: ConfigurationPracticeProps) {
  const exercises = configurationExercises[module] || []

  if (exercises.length === 0) {
    return (
      <Card className="p-8 text-center bg-white/80 backdrop-blur">
        <p className="text-gray-600">Configuration exercises not available for this module.</p>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      {exercises.map((exercise, idx) => (
        <Card key={idx} className="p-6 bg-white/80 backdrop-blur">
          <div className="flex items-start gap-3 mb-4">
            <Terminal className="h-6 w-6 text-indigo-600 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{exercise.title}</h3>
              <p className="text-gray-600 mb-3">{exercise.scenario}</p>
              <Badge variant="secondary">{exercise.difficulty}</Badge>
            </div>
          </div>

          <Tabs defaultValue="requirements" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="requirements">Requirements</TabsTrigger>
              <TabsTrigger value="steps">Steps</TabsTrigger>
              <TabsTrigger value="solution">Solution</TabsTrigger>
            </TabsList>

            <TabsContent value="requirements" className="space-y-3">
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {exercise.requirements.map((req, ridx) => (
                  <li key={ridx}>{req}</li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="steps" className="space-y-3">
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                {exercise.steps.map((step, sidx) => (
                  <li key={sidx} className="mb-2">
                    {step}
                  </li>
                ))}
              </ol>
            </TabsContent>

            <TabsContent value="solution" className="space-y-3">
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <pre>{exercise.solution}</pre>
              </div>
              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Verification:</strong> {exercise.verification}
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      ))}
    </div>
  )
}
