import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { studyContent } from "@/lib/study-content"

interface StudyGuideProps {
  module: number
}

export default function StudyGuide({ module }: StudyGuideProps) {
  const content = studyContent[module]

  if (!content) {
    return (
      <Card className="p-8 text-center bg-white/80 backdrop-blur">
        <p className="text-gray-600">Study content not available for this module.</p>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <Card className="p-6 bg-white/80 backdrop-blur">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{content.title}</h2>
        <p className="text-gray-600 mb-4">{content.description}</p>
        <div className="flex flex-wrap gap-2">
          {content.keyTopics.map((topic, idx) => (
            <Badge key={idx} variant="secondary">
              {topic}
            </Badge>
          ))}
        </div>
      </Card>

      <Card className="p-6 bg-white/80 backdrop-blur">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Key Concepts</h3>
        <Accordion type="single" collapsible className="w-full">
          {content.concepts.map((concept, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger className="text-left font-semibold">{concept.title}</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3 text-gray-700">
                  <p>{concept.description}</p>
                  {concept.points && (
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      {concept.points.map((point, pidx) => (
                        <li key={pidx}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Card>

      {content.commands && content.commands.length > 0 && (
        <Card className="p-6 bg-white/80 backdrop-blur">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Important Commands</h3>
          <div className="space-y-3">
            {content.commands.map((cmd, idx) => (
              <div key={idx} className="border-l-4 border-indigo-500 pl-4 py-2">
                <code className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">{cmd.command}</code>
                <p className="text-sm text-gray-600 mt-1">{cmd.description}</p>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  )
}
