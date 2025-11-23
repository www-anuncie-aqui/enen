import { ArrowLeft, Clock, FileText, Target, BookOpen } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function SimuladosPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Link href="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-xl font-bold text-foreground">Simulados</h1>
              <p className="text-xs text-muted-foreground">Pratique no formato do ENEM</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2 text-balance">Escolha seu simulado</h2>
          <p className="text-muted-foreground">Treine com questões reais e cronômetro do ENEM</p>
        </div>

        {/* Simulado Completo */}
        <Card className="mb-6 border-2 border-primary bg-gradient-to-br from-primary/5 to-transparent relative">
          <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">Recomendado</Badge>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                <FileText className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="flex-1 pr-24">
                <CardTitle className="text-2xl mb-2">Simulado Completo</CardTitle>
                <CardDescription className="text-base mb-4">
                  Experimente a prova completa do ENEM com 180 questões
                </CardDescription>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    <span>180 questões</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>Dia 1: 5h30 | Dia 2: 5h00</span>
                  </div>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex gap-3">
              <Link href="/simulados/dia1" className="flex-1">
                <Button className="w-full" size="lg">
                  Iniciar Dia 1
                </Button>
              </Link>
              <Link href="/simulados/dia2" className="flex-1">
                <Button className="w-full bg-transparent" size="lg" variant="outline">
                  Iniciar Dia 2
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Simulados por Matéria */}
        <div>
          <h3 className="text-xl font-bold text-foreground mb-4">Simulados por Matéria</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/simulados/linguagens">
              <Card className="hover:shadow-lg transition-all cursor-pointer group border-2 hover:border-primary">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center group-hover:scale-110 transition-all">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="secondary">45 questões</Badge>
                  </div>
                  <CardTitle>Linguagens</CardTitle>
                  <CardDescription>Português, Literatura e Língua Estrangeira</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>Tempo sugerido: 1h30</span>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/simulados/matematica">
              <Card className="hover:shadow-lg transition-all cursor-pointer group border-2 hover:border-primary">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-12 h-12 rounded-xl bg-purple-500 flex items-center justify-center group-hover:scale-110 transition-all">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="secondary">45 questões</Badge>
                  </div>
                  <CardTitle>Matemática</CardTitle>
                  <CardDescription>Matemática e suas Tecnologias</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>Tempo sugerido: 1h30</span>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/simulados/humanas">
              <Card className="hover:shadow-lg transition-all cursor-pointer group border-2 hover:border-primary">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center group-hover:scale-110 transition-all">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="secondary">45 questões</Badge>
                  </div>
                  <CardTitle>Ciências Humanas</CardTitle>
                  <CardDescription>História, Geografia, Filosofia, Sociologia</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>Tempo sugerido: 1h30</span>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/simulados/natureza">
              <Card className="hover:shadow-lg transition-all cursor-pointer group border-2 hover:border-primary">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center group-hover:scale-110 transition-all">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="secondary">45 questões</Badge>
                  </div>
                  <CardTitle>Ciências da Natureza</CardTitle>
                  <CardDescription>Biologia, Física e Química</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>Tempo sugerido: 1h30</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
