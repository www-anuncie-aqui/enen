"use client"

import { ArrowLeft, BookOpen, FileQuestion, Map, Play } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { useStudyData } from "@/lib/study-data-context"

const subjectData: Record<string, any> = {
  linguagens: {
    name: "Linguagens",
    color: "bg-blue-500",
    topics: [
      {
        title: "Interpretação de texto",
        content:
          "A interpretação de texto é fundamental no ENEM. Foque em identificar a ideia principal, argumentos secundários e intenção do autor.",
        questions: 12,
      },
      {
        title: "Funções da linguagem",
        content:
          "As seis funções: referencial, emotiva, conativa, fática, metalinguística e poética. Cada uma tem características específicas.",
        questions: 8,
      },
      {
        title: "Gêneros textuais",
        content:
          "Diferencie narrativo, descritivo, dissertativo, injuntivo e dialogal. Reconheça características de cada gênero.",
        questions: 10,
      },
      {
        title: "Semântica",
        content:
          "Estudo do significado das palavras: sinônimos, antônimos, polissemia, homonímia e conotação vs denotação.",
        questions: 7,
      },
      {
        title: "Análise de charges e tirinhas",
        content: "Interprete elementos visuais e textuais, identifique críticas sociais e recursos de humor.",
        questions: 8,
      },
    ],
  },
  matematica: {
    name: "Matemática",
    color: "bg-purple-500",
    topics: [
      {
        title: "Porcentagem",
        content: "Cálculos percentuais, aumentos e descontos sucessivos, regra de três simples e composta.",
        questions: 10,
      },
      {
        title: "Probabilidade",
        content: "Espaço amostral, eventos, probabilidade condicional e independência de eventos.",
        questions: 9,
      },
      {
        title: "Estatística",
        content: "Média, mediana, moda, desvio padrão, análise de gráficos e interpretação de dados.",
        questions: 10,
      },
      {
        title: "Funções (1º e 2º grau)",
        content: "Função afim e quadrática: gráficos, raízes, vértice, máximos e mínimos.",
        questions: 8,
      },
      {
        title: "Geometria plana",
        content: "Áreas e perímetros de figuras planas, Teorema de Tales, Teorema de Pitágoras.",
        questions: 8,
      },
    ],
  },
  humanas: {
    name: "Ciências Humanas",
    color: "bg-orange-500",
    topics: [
      {
        title: "Cidadania e democracia",
        content: "Direitos humanos, participação política, movimentos sociais e a construção da cidadania no Brasil.",
        questions: 9,
      },
      {
        title: "Globalização",
        content: "Processo de integração econômica, cultural e política mundial. Impactos positivos e negativos.",
        questions: 8,
      },
      {
        title: "Brasil colônia",
        content:
          "Período colonial brasileiro: exploração, economia açucareira, escravidão e movimentos de resistência.",
        questions: 10,
      },
      {
        title: "Ditadura militar",
        content: "Golpe de 1964, governo militar, repressão, censura, AI-5 e processo de redemocratização.",
        questions: 9,
      },
      {
        title: "Revolução Industrial",
        content: "Transformações econômicas e sociais, surgimento do capitalismo industrial, movimento operário.",
        questions: 9,
      },
    ],
  },
  natureza: {
    name: "Ciências da Natureza",
    color: "bg-green-500",
    topics: [
      {
        title: "Genética e evolução",
        content: "Leis de Mendel, hereditariedade, mutações, seleção natural e teorias evolutivas.",
        questions: 9,
      },
      {
        title: "Ecologia",
        content: "Cadeias e teias alimentares, ciclos biogeoquímicos, relações ecológicas e impactos ambientais.",
        questions: 10,
      },
      {
        title: "Eletricidade",
        content: "Corrente elétrica, resistência, Lei de Ohm, potência elétrica e circuitos.",
        questions: 8,
      },
      {
        title: "Termodinâmica",
        content: "Leis da termodinâmica, calor, temperatura, transformações gasosas e máquinas térmicas.",
        questions: 9,
      },
      {
        title: "Química orgânica",
        content: "Funções orgânicas, nomenclatura, isomeria e principais reações químicas.",
        questions: 9,
      },
    ],
  },
}

export default function SubjectDetailPage({ params }: { params: { id: string } }) {
  const { data } = useStudyData()
  const subject = subjectData[params.id]

  if (!subject) {
    return <div>Matéria não encontrada</div>
  }

  const subjectStats = data.subjectStats[params.id as keyof typeof data.subjectStats]
  const exercisesDone = subjectStats?.total || 0

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Link href="/materias">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-xl font-bold text-foreground">{subject.name}</h1>
              <p className="text-xs text-muted-foreground">Conteúdos e exercícios</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className={`w-16 h-16 rounded-xl ${subject.color} flex items-center justify-center`}>
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground text-balance">{subject.name}</h2>
              <p className="text-muted-foreground">Assuntos que mais caem no ENEM</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <FileQuestion className="w-5 h-5 text-primary" />
                <CardDescription>Questões Disponíveis</CardDescription>
              </div>
              <CardTitle className="text-2xl">
                {subject.topics.reduce((acc: number, t: any) => acc + t.questions, 0)}
              </CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <Map className="w-5 h-5 text-chart-3" />
                <CardDescription>Tópicos</CardDescription>
              </div>
              <CardTitle className="text-2xl">{subject.topics.length}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <Play className="w-5 h-5 text-accent" />
                <CardDescription>Exercícios Feitos</CardDescription>
              </div>
              <CardTitle className="text-2xl">{exercisesDone}</CardTitle>
            </CardHeader>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Conteúdos</CardTitle>
            <CardDescription>Estude cada tópico e pratique com questões</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {subject.topics.map((topic: any, idx: number) => (
                <AccordionItem key={idx} value={`item-${idx}`}>
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center justify-between w-full pr-4">
                      <span className="font-semibold text-left">{topic.title}</span>
                      <Badge variant="secondary" className="ml-2">
                        {topic.questions} questões
                      </Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 pt-2">
                      <p className="text-muted-foreground leading-relaxed">{topic.content}</p>
                      <div className="flex gap-2">
                        <Link href={`/simulados/${params.id}`}>
                          <Button size="sm" className="gap-2">
                            <Play className="w-4 h-4" />
                            Praticar agora
                          </Button>
                        </Link>
                        <Button size="sm" variant="outline" onClick={scrollToTop}>
                          Ver resumo
                        </Button>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
