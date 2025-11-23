"use client"

import { useState, useEffect } from "react"
import { ArrowLeft } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { SimuladoTimer } from "@/components/simulado-timer"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { getQuestionsForExam, type Question } from "@/lib/questions-data"
import { useStudyData } from "@/lib/study-data-context"

export default function SimuladoTestPage({ params }: { params: { materia: string } }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [showResult, setShowResult] = useState(false)
  const [questions, setQuestions] = useState<Question[]>([])
  const [startTime] = useState(Date.now())
  const router = useRouter()
  const { addTestResult } = useStudyData()

  useEffect(() => {
    const materia = params.materia
    let day = 1
    let subject = ""

    if (materia === "dia1") {
      day = 1
      subject = "all"
    } else if (materia === "dia2") {
      day = 2
      subject = "all"
    } else if (materia === "linguagens") {
      subject = "linguagens"
    } else if (materia === "matematica") {
      subject = "matematica"
    } else if (materia === "humanas") {
      subject = "humanas"
    } else if (materia === "natureza") {
      subject = "natureza"
    }

    const loadedQuestions = getQuestionsForExam(day, subject)
    setQuestions(loadedQuestions)
  }, [params.materia])

  const handleAnswer = (questionId: number, answerIndex: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answerIndex }))
  }

  const handleFinish = () => {
    console.log("[v0] handleFinish called")
    const score = calculateScore()
    const timeSpent = Math.round((Date.now() - startTime) / 1000) // in seconds

    let subjectName = params.materia
    if (params.materia === "dia1") {
      subjectName = "linguagens" // Dia 1 conta como linguagens principalmente
    } else if (params.materia === "dia2") {
      subjectName = "matematica" // Dia 2 conta como matemática principalmente
    }

    console.log("[v0] Calculated score:", score)
    console.log("[v0] Subject name:", subjectName)
    console.log("[v0] Time spent (seconds):", timeSpent)

    const testResult = {
      id: `test-${Date.now()}`,
      date: new Date().toLocaleDateString("pt-BR"),
      subject: subjectName,
      correct: score.correct,
      total: score.total,
      percentage: score.percentage,
      timeSpent,
    }

    console.log("[v0] Calling addTestResult with:", testResult)

    addTestResult(testResult)

    console.log("[v0] addTestResult called, showing results")
    setShowResult(true)
  }

  const calculateScore = () => {
    let correct = 0
    questions.forEach((q) => {
      if (answers[q.id] === q.correct) correct++
    })
    return { correct, total: questions.length, percentage: (correct / questions.length) * 100 }
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Carregando questões...</p>
        </div>
      </div>
    )
  }

  if (showResult) {
    const score = calculateScore()
    return (
      <div className="min-h-screen bg-background">
        <header className="border-b bg-card">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-3">
              <Link href="/simulados">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </Link>
              <div>
                <h1 className="text-xl font-bold">Resultado do Simulado</h1>
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8 max-w-3xl">
          <Card className="mb-6 border-2 border-primary">
            <CardHeader className="text-center">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl font-bold text-primary">{score.percentage.toFixed(0)}%</span>
              </div>
              <CardTitle className="text-2xl">Parabéns! Simulado concluído</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-chart-3">{score.correct}</p>
                  <p className="text-sm text-muted-foreground">Acertos</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-destructive">{score.total - score.correct}</p>
                  <p className="text-sm text-muted-foreground">Erros</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-foreground">{score.total}</p>
                  <p className="text-sm text-muted-foreground">Total</p>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold mb-2">Recomendações:</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {score.percentage >= 70
                    ? "Excelente desempenho! Continue praticando para manter o nível."
                    : score.percentage >= 50
                      ? "Bom trabalho! Revise os conteúdos onde teve mais dificuldade."
                      : "Continue estudando! Foque nos assuntos que mais caem no ENEM."}
                </p>
                <div className="flex gap-2 pt-4">
                  <Button onClick={() => router.push("/desempenho")} className="flex-1">
                    Ver Análise Completa
                  </Button>
                  <Button onClick={() => window.location.reload()} variant="outline" className="flex-1">
                    Refazer Simulado
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Revisão das Questões</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {questions.map((q, idx) => {
                const userAnswer = answers[q.id]
                const isCorrect = userAnswer === q.correct
                const wasAnswered = userAnswer !== undefined

                return (
                  <div
                    key={q.id}
                    className={`p-4 rounded-lg border-2 ${
                      !wasAnswered
                        ? "border-muted bg-muted/20"
                        : isCorrect
                          ? "border-chart-3 bg-chart-3/5"
                          : "border-destructive bg-destructive/5"
                    }`}
                  >
                    <div className="flex items-start gap-3 mb-2">
                      <span className="font-bold text-sm">{idx + 1}.</span>
                      <div className="flex-1">
                        <p className="font-medium text-sm mb-1">{q.subject}</p>
                        <p className="text-sm text-muted-foreground mb-2">{q.question}</p>
                        {wasAnswered ? (
                          <div className="space-y-1 text-xs">
                            <p>
                              <span className="font-semibold">Sua resposta:</span>{" "}
                              <span className={isCorrect ? "text-chart-3" : "text-destructive"}>
                                {q.options[userAnswer]}
                              </span>
                            </p>
                            {!isCorrect && (
                              <p>
                                <span className="font-semibold">Resposta correta:</span>{" "}
                                <span className="text-chart-3">{q.options[q.correct]}</span>
                              </p>
                            )}
                          </div>
                        ) : (
                          <p className="text-xs text-muted-foreground">Não respondida</p>
                        )}
                      </div>
                      <div
                        className={`text-xl ${
                          !wasAnswered ? "text-muted-foreground" : isCorrect ? "text-chart-3" : "text-destructive"
                        }`}
                      >
                        {!wasAnswered ? "−" : isCorrect ? "✓" : "✗"}
                      </div>
                    </div>
                  </div>
                )
              })}
            </CardContent>
          </Card>
        </main>
      </div>
    )
  }

  const question = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100
  const answeredCount = Object.keys(answers).length

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Header */}
      <header className="border-b bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-1">
              <Link href="/simulados">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </Link>
              <div className="hidden sm:block">
                <p className="text-sm font-semibold">
                  Questão {currentQuestion + 1} de {questions.length}
                </p>
                <p className="text-xs text-muted-foreground">{answeredCount} respondidas</p>
              </div>
            </div>
            <SimuladoTimer initialMinutes={90} onTimeUp={handleFinish} />
          </div>
          <Progress value={progress} className="h-1 mt-4" />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Question card with navigation buttons immediately below */}
        <Card className="mb-6">
          <CardHeader>
            <div className="mb-2">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">
                {question.subject}
              </span>
            </div>
            <CardTitle className="text-xl leading-relaxed">{question.question}</CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={answers[question.id]?.toString()}
              onValueChange={(value) => handleAnswer(question.id, Number.parseInt(value))}
            >
              <div className="space-y-3">
                {question.options.map((option, idx) => (
                  <div
                    key={idx}
                    className={`flex items-start space-x-3 p-4 rounded-lg border-2 transition-all cursor-pointer hover:bg-muted/50 ${
                      answers[question.id] === idx ? "border-primary bg-primary/5" : "border-border"
                    }`}
                    onClick={() => handleAnswer(question.id, idx)}
                  >
                    <RadioGroupItem value={idx.toString()} id={`option-${idx}`} className="mt-1" />
                    <Label htmlFor={`option-${idx}`} className="flex-1 cursor-pointer leading-relaxed">
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>

            <div className="flex items-center justify-between gap-4 mt-6 pt-6 border-t">
              <Button
                variant="outline"
                onClick={() => setCurrentQuestion((prev) => Math.max(0, prev - 1))}
                disabled={currentQuestion === 0}
                className="min-w-[120px]"
              >
                ← Anterior
              </Button>

              {currentQuestion < questions.length - 1 ? (
                <Button
                  onClick={() => setCurrentQuestion((prev) => Math.min(questions.length - 1, prev + 1))}
                  className="min-w-[120px]"
                >
                  Próxima →
                </Button>
              ) : (
                <Button onClick={handleFinish} className="bg-chart-3 hover:bg-chart-3/90 min-w-[120px]">
                  Finalizar
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold">Navegação rápida</span>
                <span className="text-muted-foreground">
                  {answeredCount} / {questions.length} respondidas
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {questions.map((q, idx) => (
                  <button
                    key={q.id}
                    onClick={() => setCurrentQuestion(idx)}
                    className={`w-10 h-10 rounded-md flex items-center justify-center text-sm font-semibold transition-all ${
                      currentQuestion === idx
                        ? "bg-primary text-primary-foreground"
                        : answers[q.id] !== undefined
                          ? "bg-chart-3 text-white"
                          : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick legend */}
        <div className="flex justify-center gap-6 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-primary"></div>
            <span>Atual</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-chart-3"></div>
            <span>Respondida</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-muted"></div>
            <span>Não respondida</span>
          </div>
        </div>
      </main>
    </div>
  )
}
