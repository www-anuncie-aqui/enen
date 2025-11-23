"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import { useStudyData } from "@/lib/study-data-context"
import { useAuth } from "@/lib/auth-context"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Dashboard() {
  const { data } = useStudyData()
  const { user, isAuthenticated } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login")
    }
  }, [isAuthenticated, router])

  if (!isAuthenticated) {
    return null
  }

  const correctRate = data.questionsAnswered > 0 ? Math.round((data.correctAnswers / data.questionsAnswered) * 100) : 0

  // Calculate weekly progress (using study hours as metric)
  const weeklyGoal = 20
  const weeklyProgress = Math.min((data.studyHours / weeklyGoal) * 100, 100)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="AprovaENEM Logo" className="w-10 h-10 object-contain" />
              <div>
                <h1 className="text-xl font-bold text-foreground">AprovaENEM</h1>
                <p className="text-xs text-muted-foreground">Sua aprovação começa aqui</p>
              </div>
            </div>
            <Link href="/perfil">
              <Button variant="outline" size="sm">
                Meu Perfil
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2 text-balance">Olá, {user?.name || "Estudante"}!</h2>
          <p className="text-muted-foreground">Continue sua jornada rumo à aprovação no ENEM</p>
        </div>

        {/* Weekly Progress */}
        <Card className="mb-8 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="text-xl">📈</span>
              Progresso Semanal
            </CardTitle>
            <CardDescription>Você estudou {data.studyHours.toFixed(1)}h esta semana</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Meta: {weeklyGoal}h</span>
                <span className="font-semibold text-primary">{weeklyProgress.toFixed(0)}%</span>
              </div>
              <Progress value={weeklyProgress} className="h-3" />
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <Card className="hover:shadow-lg transition-all cursor-pointer group border-2 hover:border-primary">
            <CardHeader>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary group-hover:scale-110 transition-all text-2xl">
                📝
              </div>
              <CardTitle className="text-lg">Simulados</CardTitle>
              <CardDescription>Pratique com questões reais do ENEM</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/simulados">
                <Button className="w-full" size="lg">
                  Praticar Agora
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all cursor-pointer group border-2 hover:border-accent">
            <CardHeader>
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-3 group-hover:bg-accent group-hover:scale-110 transition-all text-2xl">
                ✍️
              </div>
              <CardTitle className="text-lg">Redação</CardTitle>
              <CardDescription>Escreva e receba correção automática</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/redacao">
                <Button className="w-full bg-transparent" size="lg" variant="outline">
                  Escrever Redação
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all cursor-pointer group border-2 hover:border-chart-3">
            <CardHeader>
              <div className="w-12 h-12 rounded-xl bg-chart-3/10 flex items-center justify-center mb-3 group-hover:bg-chart-3 group-hover:scale-110 transition-all text-2xl">
                📖
              </div>
              <CardTitle className="text-lg">Matérias</CardTitle>
              <CardDescription>Conteúdos organizados por disciplina</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/materias">
                <Button className="w-full bg-transparent" size="lg" variant="outline">
                  Ver Matérias
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all cursor-pointer group border-2 hover:border-chart-4">
            <CardHeader>
              <div className="w-12 h-12 rounded-xl bg-chart-4/10 flex items-center justify-center mb-3 group-hover:bg-chart-4 group-hover:scale-110 transition-all text-2xl">
                💡
              </div>
              <CardTitle className="text-lg">Dicas ENEM</CardTitle>
              <CardDescription>Estratégias e técnicas de estudo</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/dicas">
                <Button className="w-full bg-transparent" size="lg" variant="outline">
                  Ver Dicas
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all cursor-pointer group border-2 hover:border-chart-5">
            <CardHeader>
              <div className="w-12 h-12 rounded-xl bg-chart-5/10 flex items-center justify-center mb-3 group-hover:bg-chart-5 group-hover:scale-110 transition-all text-2xl">
                📊
              </div>
              <CardTitle className="text-lg">Meu Desempenho</CardTitle>
              <CardDescription>Análise completa do seu progresso</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/desempenho">
                <Button className="w-full bg-transparent" size="lg" variant="outline">
                  Ver Análise
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Study Stats - Now showing real data from context */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Questões Respondidas</CardDescription>
              <CardTitle className="text-3xl text-primary">{data.questionsAnswered}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Taxa de Acerto</CardDescription>
              <CardTitle className="text-3xl text-chart-3">{correctRate}%</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Redações Corrigidas</CardDescription>
              <CardTitle className="text-3xl text-accent">{data.essaysWritten}</CardTitle>
            </CardHeader>
          </Card>
        </div>
      </main>
    </div>
  )
}
