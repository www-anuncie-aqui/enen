"use client"

import { ArrowLeft, TrendingUp, TrendingDown, Award, Calendar, FileText, Target } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import { useStudyData } from "@/lib/study-data-context"

export default function DesempenhoPage() {
  const { data, resetData } = useStudyData()

  const correctRate = data.questionsAnswered > 0 ? Math.round((data.correctAnswers / data.questionsAnswered) * 100) : 0

  const subjectPerformance = [
    {
      name: "Linguagens",
      correct:
        data.subjectStats.linguagens.total > 0
          ? Math.round((data.subjectStats.linguagens.correct / data.subjectStats.linguagens.total) * 100)
          : 0,
      total: data.subjectStats.linguagens.total,
      color: "bg-blue-500",
    },
    {
      name: "Matemática",
      correct:
        data.subjectStats.matematica.total > 0
          ? Math.round((data.subjectStats.matematica.correct / data.subjectStats.matematica.total) * 100)
          : 0,
      total: data.subjectStats.matematica.total,
      color: "bg-purple-500",
    },
    {
      name: "Humanas",
      correct:
        data.subjectStats.humanas.total > 0
          ? Math.round((data.subjectStats.humanas.correct / data.subjectStats.humanas.total) * 100)
          : 0,
      total: data.subjectStats.humanas.total,
      color: "bg-orange-500",
    },
    {
      name: "Natureza",
      correct:
        data.subjectStats.natureza.total > 0
          ? Math.round((data.subjectStats.natureza.correct / data.subjectStats.natureza.total) * 100)
          : 0,
      total: data.subjectStats.natureza.total,
      color: "bg-green-500",
    },
  ]

  const avgEssayScore =
    data.essayResults.length > 0
      ? Math.round(data.essayResults.reduce((sum, e) => sum + e.score, 0) / data.essayResults.length)
      : 0

  const recommendations = subjectPerformance
    .filter((s) => s.total > 0 && s.correct < 70)
    .map((s) => ({
      subject: s.name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, ""),
      topic: `Revisar ${s.name}`,
      reason: `Taxa de acerto de ${s.correct}% em ${s.total} questões`,
    }))

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
                <h1 className="text-xl font-bold">Meu Desempenho</h1>
                <p className="text-xs text-muted-foreground">Análise completa do seu progresso</p>
              </div>
            </div>
            <Button variant="outline" size="sm" onClick={resetData}>
              Zerar Dados
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2 text-balance">Seu progresso no ENEM</h2>
          <p className="text-muted-foreground">Acompanhe sua evolução e identifique pontos de melhoria</p>
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 mb-1">
                <FileText className="w-4 h-4 text-primary" />
                <CardDescription>Questões Respondidas</CardDescription>
              </div>
              <CardTitle className="text-3xl text-primary">{data.questionsAnswered}</CardTitle>
            </CardHeader>
          </Card>

          <Card className="border-chart-3/30 bg-gradient-to-br from-chart-3/5 to-transparent">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 mb-1">
                <Target className="w-4 h-4 text-chart-3" />
                <CardDescription>Taxa de Acerto</CardDescription>
              </div>
              <CardTitle className="text-3xl text-chart-3">{correctRate}%</CardTitle>
            </CardHeader>
          </Card>

          <Card className="border-accent/30 bg-gradient-to-br from-accent/5 to-transparent">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 mb-1">
                <Calendar className="w-4 h-4 text-accent" />
                <CardDescription>Horas de Estudo</CardDescription>
              </div>
              <CardTitle className="text-3xl text-accent">{data.studyHours.toFixed(1)}h</CardTitle>
            </CardHeader>
          </Card>

          <Card className="border-chart-5/30 bg-gradient-to-br from-chart-5/5 to-transparent">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 mb-1">
                <Award className="w-4 h-4 text-chart-5" />
                <CardDescription>Redações Corrigidas</CardDescription>
              </div>
              <CardTitle className="text-3xl text-chart-5">{data.essaysWritten}</CardTitle>
            </CardHeader>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {/* Performance by Subject */}
          <Card>
            <CardHeader>
              <CardTitle>Desempenho por Matéria</CardTitle>
              <CardDescription>Porcentagem de acertos em cada área</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {subjectPerformance.map((subject, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${subject.color}`} />
                      <span className="font-semibold text-sm">{subject.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold">{subject.correct}%</span>
                      {subject.total > 0 &&
                        (subject.correct >= 70 ? (
                          <TrendingUp className="w-4 h-4 text-chart-3" />
                        ) : (
                          <TrendingDown className="w-4 h-4 text-destructive" />
                        ))}
                    </div>
                  </div>
                  <Progress value={subject.correct} className="h-2" />
                  <p className="text-xs text-muted-foreground">{subject.total} questões respondidas</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Test History */}
          <Card>
            <CardHeader>
              <CardTitle>Histórico de Simulados</CardTitle>
              <CardDescription>Últimos testes realizados</CardDescription>
            </CardHeader>
            <CardContent>
              {data.testResults.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <FileText className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">Nenhum simulado realizado ainda</p>
                  <Link href="/simulados">
                    <Button size="sm" className="mt-4">
                      Fazer Simulado
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="space-y-3">
                  {data.testResults
                    .slice(-5)
                    .reverse()
                    .map((test) => (
                      <div
                        key={test.id}
                        className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex-1">
                          <p className="font-semibold text-sm mb-1 capitalize">{test.subject}</p>
                          <p className="text-xs text-muted-foreground">{test.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold">{test.percentage.toFixed(0)}%</p>
                          <p className="text-xs text-muted-foreground">
                            {test.correct}/{test.total}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Essays History */}
        {data.essayResults.length > 0 && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Histórico de Redações</CardTitle>
              <CardDescription>
                Média: {avgEssayScore} pontos | Total: {data.essayResults.length} redações
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {data.essayResults
                  .slice(-5)
                  .reverse()
                  .map((essay) => (
                    <div
                      key={essay.id}
                      className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex-1">
                        <p className="font-semibold text-sm mb-1">{essay.theme}</p>
                        <p className="text-xs text-muted-foreground">{essay.date}</p>
                      </div>
                      <Badge
                        variant="secondary"
                        className={`text-base font-bold ${
                          essay.score >= 900
                            ? "bg-chart-3 text-white"
                            : essay.score >= 800
                              ? "bg-primary text-primary-foreground"
                              : "bg-accent text-accent-foreground"
                        }`}
                      >
                        {essay.score}
                      </Badge>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Recommendations */}
        {recommendations.length > 0 && (
          <Card className="border-2 border-accent/30 bg-gradient-to-br from-accent/5 to-transparent">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-accent" />
                <CardTitle>Recomendações de Estudo</CardTitle>
              </div>
              <CardDescription>Baseado no seu desempenho, sugerimos focar nestes conteúdos</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {recommendations.map((rec, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-card border">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <Badge variant="outline" className="mb-2 capitalize">
                        {rec.subject}
                      </Badge>
                      <p className="font-semibold text-sm">{rec.topic}</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">{rec.reason}</p>
                  <Link href={`/materias/${rec.subject}`}>
                    <Button size="sm" variant="outline">
                      Estudar agora
                    </Button>
                  </Link>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {data.questionsAnswered === 0 && (
          <Card className="border-2 border-primary/30">
            <CardContent className="py-12 text-center">
              <Target className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
              <h3 className="text-xl font-bold mb-2">Comece sua jornada!</h3>
              <p className="text-muted-foreground mb-6">
                Responda alguns simulados para começar a acompanhar seu progresso
              </p>
              <Link href="/simulados">
                <Button size="lg">Fazer Primeiro Simulado</Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  )
}
