"use client"

import { useState } from "react"
import { ArrowLeft, Clock, Send, Sparkles } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import { useStudyData } from "@/lib/study-data-context"

export default function RedacaoPage() {
  const [essay, setEssay] = useState("")
  const [timeLeft, setTimeLeft] = useState(60 * 60) // 60 minutes in seconds
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [grades, setGrades] = useState({
    competencia1: 0,
    competencia2: 0,
    competencia3: 0,
    competencia4: 0,
    competencia5: 0,
    total: 0,
  })

  const { addEssayResult } = useStudyData()

  const wordCount = essay
    .trim()
    .split(/\s+/)
    .filter((w) => w.length > 0).length
  const charCount = essay.length
  const idealWordCount = 30 // lines (approximately 900-1000 words)

  const currentTheme = "Os impactos da inteligência artificial na sociedade contemporânea brasileira."

  const startTimer = () => {
    setIsTimerRunning(true)
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          setIsTimerRunning(false)
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`
  }

  const handleSubmit = () => {
    if (essay.trim().length < 100) {
      alert("Sua redação está muito curta. Escreva pelo menos 100 caracteres.")
      return
    }

    const baseScore = Math.min(180, Math.floor(wordCount / 5) + 100)
    const randomVariation = () => Math.floor(Math.random() * 40) - 20

    const calculatedGrades = {
      competencia1: Math.max(120, Math.min(200, baseScore + randomVariation())),
      competencia2: Math.max(120, Math.min(200, baseScore + randomVariation())),
      competencia3: Math.max(120, Math.min(200, baseScore + randomVariation())),
      competencia4: Math.max(120, Math.min(200, baseScore + randomVariation())),
      competencia5: Math.max(120, Math.min(200, baseScore + randomVariation())),
      total: 0,
    }

    calculatedGrades.total =
      calculatedGrades.competencia1 +
      calculatedGrades.competencia2 +
      calculatedGrades.competencia3 +
      calculatedGrades.competencia4 +
      calculatedGrades.competencia5

    setGrades(calculatedGrades)

    addEssayResult({
      id: `essay-${Date.now()}`,
      date: new Date().toLocaleDateString("pt-BR"),
      theme: currentTheme,
      score: calculatedGrades.total,
      competences: [
        calculatedGrades.competencia1,
        calculatedGrades.competencia2,
        calculatedGrades.competencia3,
        calculatedGrades.competencia4,
        calculatedGrades.competencia5,
      ],
    })

    setShowResults(true)
  }

  if (showResults) {
    return (
      <div className="min-h-screen bg-background">
        <header className="border-b bg-card sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" onClick={() => setShowResults(false)}>
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div>
                <h1 className="text-xl font-bold">Resultado da Correção</h1>
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8 max-w-4xl">
          <Card className="mb-6 border-2 border-primary">
            <CardHeader className="text-center">
              <div className="w-32 h-32 rounded-full bg-primary/10 flex flex-col items-center justify-center mx-auto mb-4">
                <span className="text-5xl font-bold text-primary">{grades.total}</span>
                <span className="text-sm text-muted-foreground">/1000</span>
              </div>
              <CardTitle className="text-2xl">Sua redação foi corrigida!</CardTitle>
              <CardDescription>Confira a nota em cada competência</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Competência 1 */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-sm">Competência 1</p>
                    <p className="text-xs text-muted-foreground">Domínio da norma padrão</p>
                  </div>
                  <Badge variant="secondary" className="text-base">
                    {grades.competencia1}/200
                  </Badge>
                </div>
                <Progress value={(grades.competencia1 / 200) * 100} className="h-2" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Boa demonstração do domínio da norma culta. Poucos desvios gramaticais.
                </p>
              </div>

              {/* Competência 2 */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-sm">Competência 2</p>
                    <p className="text-xs text-muted-foreground">Compreensão do tema</p>
                  </div>
                  <Badge variant="secondary" className="text-base">
                    {grades.competencia2}/200
                  </Badge>
                </div>
                <Progress value={(grades.competencia2 / 200) * 100} className="h-2" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Tema bem desenvolvido com argumentos pertinentes. Poderia explorar mais aspectos.
                </p>
              </div>

              {/* Competência 3 */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-sm">Competência 3</p>
                    <p className="text-xs text-muted-foreground">Organização e coesão</p>
                  </div>
                  <Badge variant="secondary" className="text-base">
                    {grades.competencia3}/200
                  </Badge>
                </div>
                <Progress value={(grades.competencia3 / 200) * 100} className="h-2" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Texto bem estruturado com boa progressão temática e uso adequado de conectivos.
                </p>
              </div>

              {/* Competência 4 */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-sm">Competência 4</p>
                    <p className="text-xs text-muted-foreground">Argumentação</p>
                  </div>
                  <Badge variant="secondary" className="text-base">
                    {grades.competencia4}/200
                  </Badge>
                </div>
                <Progress value={(grades.competencia4 / 200) * 100} className="h-2" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Argumentos consistentes apoiados em conhecimentos diversificados.
                </p>
              </div>

              {/* Competência 5 */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-sm">Competência 5</p>
                    <p className="text-xs text-muted-foreground">Proposta de intervenção</p>
                  </div>
                  <Badge variant="secondary" className="text-base">
                    {grades.competencia5}/200
                  </Badge>
                </div>
                <Progress value={(grades.competencia5 / 200) * 100} className="h-2" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Proposta clara e detalhada respeitando os direitos humanos.
                </p>
              </div>

              <div className="flex gap-2 pt-4">
                <Button
                  onClick={() => {
                    setShowResults(false)
                    setEssay("")
                    setTimeLeft(60 * 60)
                  }}
                  className="flex-1"
                >
                  Escrever Nova Redação
                </Button>
                <Link href="/desempenho" className="flex-1">
                  <Button variant="outline" className="w-full bg-transparent">
                    Ver Todas as Redações
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-1">
              <Link href="/">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </Link>
              <div>
                <h1 className="text-xl font-bold">Redação</h1>
                <p className="text-xs text-muted-foreground">Pratique e receba correção</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {isTimerRunning ? (
                <Card className="p-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="font-mono font-bold text-lg">{formatTime(timeLeft)}</span>
                  </div>
                </Card>
              ) : (
                <Button onClick={startTimer} variant="outline" size="sm">
                  <Clock className="w-4 h-4 mr-2" />
                  Iniciar Timer (60min)
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Theme */}
        <Card className="mb-6 bg-gradient-to-br from-accent/10 to-transparent border-accent/30">
          <CardHeader>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <CardTitle className="text-lg mb-2">Tema da Redação</CardTitle>
                <p className="text-foreground font-semibold leading-relaxed">{currentTheme}</p>
              </div>
            </div>
          </CardHeader>
        </Card>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Writing Area */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Escreva sua redação</CardTitle>
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <span>{wordCount} palavras</span>
                    <span>{charCount} caracteres</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Comece a escrever sua redação aqui... Lembre-se de fazer uma introdução clara, desenvolver seus argumentos no corpo do texto e apresentar uma proposta de intervenção na conclusão."
                  value={essay}
                  onChange={(e) => setEssay(e.target.value)}
                  className="min-h-[500px] text-base leading-relaxed resize-none"
                />
                <div className="flex gap-2 mt-4">
                  <Button onClick={handleSubmit} className="flex-1" disabled={essay.trim().length < 100}>
                    <Send className="w-4 h-4 mr-2" />
                    Enviar para Correção
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setEssay("")
                      setTimeLeft(60 * 60)
                      setIsTimerRunning(false)
                    }}
                  >
                    Limpar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tips Sidebar */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Estrutura da Redação</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold mb-1">Introdução (7-8 linhas)</p>
                  <p className="text-muted-foreground text-xs leading-relaxed">Apresente o tema e sua tese</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Desenvolvimento (18-20 linhas)</p>
                  <p className="text-muted-foreground text-xs leading-relaxed">2 parágrafos com argumentos</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Conclusão (5-7 linhas)</p>
                  <p className="text-muted-foreground text-xs leading-relaxed">Proposta de intervenção completa</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">5 Competências</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-xs leading-relaxed">
                <div>
                  <Badge variant="outline" className="mb-1">
                    C1
                  </Badge>
                  <p className="text-muted-foreground">Norma padrão da língua</p>
                </div>
                <div>
                  <Badge variant="outline" className="mb-1">
                    C2
                  </Badge>
                  <p className="text-muted-foreground">Compreensão do tema</p>
                </div>
                <div>
                  <Badge variant="outline" className="mb-1">
                    C3
                  </Badge>
                  <p className="text-muted-foreground">Organização e coesão</p>
                </div>
                <div>
                  <Badge variant="outline" className="mb-1">
                    C4
                  </Badge>
                  <p className="text-muted-foreground">Argumentação consistente</p>
                </div>
                <div>
                  <Badge variant="outline" className="mb-1">
                    C5
                  </Badge>
                  <p className="text-muted-foreground">Proposta de intervenção</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle className="text-base">Dica</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Use conectivos para dar fluidez ao texto: além disso, por outro lado, portanto, dessa forma, etc.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
