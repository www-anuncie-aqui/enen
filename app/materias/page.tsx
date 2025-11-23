"use client"

import { BookOpen, FileText, Lightbulb, Brain, ArrowLeft } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useStudyData } from "@/lib/study-data-context"

const subjects = [
  {
    id: "linguagens",
    name: "Linguagens",
    icon: BookOpen,
    color: "bg-blue-500",
    description: "Português, Literatura, Língua Estrangeira",
    topics: [
      "Interpretação de texto",
      "Funções da linguagem",
      "Gêneros textuais",
      "Semântica",
      "Análise de charges e tirinhas",
    ],
    questions: 45,
  },
  {
    id: "matematica",
    name: "Matemática",
    icon: Brain,
    color: "bg-purple-500",
    description: "Matemática e suas Tecnologias",
    topics: ["Porcentagem", "Probabilidade", "Estatística", "Funções (1º e 2º grau)", "Geometria plana"],
    questions: 45,
  },
  {
    id: "humanas",
    name: "Ciências Humanas",
    icon: Lightbulb,
    color: "bg-orange-500",
    description: "História, Geografia, Filosofia, Sociologia",
    topics: ["Cidadania e democracia", "Globalização", "Brasil colônia", "Ditadura militar", "Revolução Industrial"],
    questions: 45,
  },
  {
    id: "natureza",
    name: "Ciências da Natureza",
    icon: FileText,
    color: "bg-green-500",
    description: "Biologia, Física, Química",
    topics: ["Genética e evolução", "Ecologia", "Eletricidade", "Termodinâmica", "Química orgânica"],
    questions: 45,
  },
]

export default function MateriasPage() {
  const { data } = useStudyData()

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href="/">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </Link>
              <div>
                <h1 className="text-xl font-bold text-foreground">Matérias</h1>
                <p className="text-xs text-muted-foreground">Conteúdos organizados por disciplina</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2 text-balance">Escolha uma área de conhecimento</h2>
          <p className="text-muted-foreground">Estude os conteúdos que mais caem no ENEM</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {subjects.map((subject) => {
            const Icon = subject.icon
            const subjectStats = data.subjectStats[subject.id as keyof typeof data.subjectStats]
            const progress = subjectStats.total > 0 ? Math.round((subjectStats.correct / subjectStats.total) * 100) : 0

            return (
              <Link key={subject.id} href={`/materias/${subject.id}`}>
                <Card className="hover:shadow-lg transition-all cursor-pointer group border-2 hover:border-primary">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-14 h-14 rounded-xl ${subject.color} flex items-center justify-center group-hover:scale-110 transition-all`}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <Badge variant="secondary">{subject.questions} questões</Badge>
                    </div>
                    <CardTitle className="text-xl mb-2">{subject.name}</CardTitle>
                    <CardDescription className="text-sm mb-4">{subject.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-2">Assuntos que mais caem:</p>
                        <div className="flex flex-wrap gap-2">
                          {subject.topics.slice(0, 3).map((topic, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                          {subject.topics.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{subject.topics.length - 3} mais
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="pt-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Seu progresso</span>
                          <span className="font-semibold text-primary">{progress}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div className={`h-full ${subject.color} transition-all`} style={{ width: `${progress}%` }} />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </main>
    </div>
  )
}
