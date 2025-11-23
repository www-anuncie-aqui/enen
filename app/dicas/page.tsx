import { ArrowLeft, Brain, Clock, Zap, BookOpen, Award, Target, Lightbulb } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

const tips = [
  {
    category: "Técnicas de Memorização",
    icon: Brain,
    color: "bg-purple-500",
    items: [
      {
        title: "Método de Repetição Espaçada",
        content:
          "Revise o conteúdo em intervalos crescentes: depois de 1 dia, 3 dias, 7 dias e 15 dias. Isso fortalece a memória de longo prazo e reduz o esquecimento.",
      },
      {
        title: "Técnica Feynman",
        content:
          "Explique o conteúdo como se estivesse ensinando a alguém. Se você conseguir explicar de forma simples, significa que realmente entendeu o assunto.",
      },
      {
        title: "Mapas Mentais",
        content:
          "Crie diagramas visuais conectando ideias principais a conceitos secundários. Use cores e símbolos para facilitar a memorização.",
      },
      {
        title: "Palácio da Memória",
        content:
          "Associe informações a lugares físicos que você conhece bem. Mentalmente, percorra esses lugares para lembrar o conteúdo.",
      },
    ],
  },
  {
    category: "Estudar em Pouco Tempo",
    icon: Clock,
    color: "bg-orange-500",
    items: [
      {
        title: "Técnica Pomodoro",
        content:
          "Estude em blocos de 25 minutos com 5 minutos de pausa. Após 4 blocos, faça uma pausa maior de 15-30 minutos. Isso mantém o foco e evita fadiga mental.",
      },
      {
        title: "Priorize pelo Impacto",
        content:
          "Foque nos assuntos que mais caem no ENEM. Use a regra 80/20: 20% dos conteúdos representam 80% das questões.",
      },
      {
        title: "Estudo Ativo",
        content:
          "Faça questões em vez de apenas ler. Resolver exercícios é 3x mais eficiente que leitura passiva para fixação do conteúdo.",
      },
      {
        title: "Resumos Inteligentes",
        content:
          "Crie resumos de uma página por assunto. Use bullet points, palavras-chave e esquemas visuais em vez de textos longos.",
      },
    ],
  },
  {
    category: "Como Usar a TRI",
    icon: Zap,
    color: "bg-blue-500",
    items: [
      {
        title: "O que é TRI",
        content:
          "A Teoria de Resposta ao Item (TRI) não conta apenas acertos, mas considera a dificuldade das questões. Questões difíceis valem mais pontos.",
      },
      {
        title: 'Evite "Chutes Aleatórios"',
        content:
          "Na TRI, padrões inconsistentes são penalizados. Se for chutar, use lógica e elimine alternativas claramente erradas primeiro.",
      },
      {
        title: "Não Deixe em Branco",
        content:
          "É melhor chutar com estratégia do que deixar em branco. Tente eliminar pelo menos 2 alternativas antes de escolher.",
      },
      {
        title: "Consistência é Chave",
        content:
          "Mantenha um padrão de acertos. É melhor acertar questões fáceis e médias consistentemente do que acertar difíceis aleatoriamente.",
      },
    ],
  },
  {
    category: "Como Não Zerar a Redação",
    icon: BookOpen,
    color: "bg-green-500",
    items: [
      {
        title: "Respeite os Direitos Humanos",
        content:
          "NUNCA defenda práticas que violem direitos humanos como tortura, discriminação ou censura. Isso resulta em nota zero automática.",
      },
      {
        title: "Fuja do Tema",
        content:
          "Leia o tema com atenção e garanta que sua redação aborda especificamente o que foi pedido. Tangenciar o tema pode zerar.",
      },
      {
        title: "Tenha uma Proposta de Intervenção Completa",
        content:
          'Sua proposta deve ter: ação, agente, modo/meio, efeito e detalhamento. Exemplo: "O governo (agente) deve investir (ação) em campanhas educativas (modo) nas escolas (detalhamento) para conscientizar jovens (efeito)."',
      },
      {
        title: "Mínimo de 7 Linhas",
        content:
          "Redações com menos de 7 linhas são desclassificadas. Escreva entre 25-30 linhas para garantir desenvolvimento adequado.",
      },
      {
        title: "Não Copie os Textos Motivadores",
        content:
          "Use os textos de apoio apenas como referência. Copiar trechos inteiros pode resultar em anulação da redação.",
      },
    ],
  },
  {
    category: "Assuntos que Mais Caem",
    icon: Target,
    color: "bg-red-500",
    items: [
      {
        title: "Estatísticas dos Últimos Anos",
        content:
          "Interpretação de texto (todas as provas), porcentagem e probabilidade (matemática), cidadania e democracia (humanas), ecologia e genética (natureza) aparecem em mais de 60% das edições.",
      },
      {
        title: "Temas de Redação Recorrentes",
        content:
          "Desigualdade social, meio ambiente, tecnologia e sociedade, educação, saúde pública e direitos humanos são os temas mais frequentes.",
      },
      {
        title: "Conectivos e Coesão",
        content:
          "Dominar conectivos é essencial. Use: além disso, portanto, entretanto, dessa forma, por outro lado, consequentemente, por isso, assim, logo.",
      },
      {
        title: "Atualidades",
        content:
          "Acompanhe notícias sobre política brasileira, questões ambientais, avanços científicos e debates sociais. O ENEM sempre cobra temas contemporâneos.",
      },
    ],
  },
]

const quickTips = [
  { icon: Award, text: "Resolva pelo menos 20 questões por dia", color: "text-chart-1" },
  { icon: Brain, text: "Revise conteúdos já estudados semanalmente", color: "text-chart-2" },
  { icon: Clock, text: "Durma 7-8 horas por noite", color: "text-chart-3" },
  { icon: Lightbulb, text: "Faça simulados completos mensalmente", color: "text-chart-4" },
  { icon: Target, text: "Mantenha uma rotina de estudos consistente", color: "text-chart-5" },
]

export default function DicasPage() {
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
              <h1 className="text-xl font-bold">Dicas ENEM</h1>
              <p className="text-xs text-muted-foreground">Estratégias e técnicas de estudo</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2 text-balance">Dicas para seu sucesso no ENEM</h2>
          <p className="text-muted-foreground">Técnicas comprovadas para melhorar seu desempenho</p>
        </div>

        {/* Quick Tips */}
        <Card className="mb-8 border-2 border-accent/30 bg-gradient-to-br from-accent/5 to-transparent">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-accent" />
              Dicas Rápidas
            </CardTitle>
            <CardDescription>Práticas essenciais para sua rotina de estudos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {quickTips.map((tip, idx) => {
                const Icon = tip.icon
                return (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                    <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${tip.color}`} />
                    <p className="text-sm leading-relaxed">{tip.text}</p>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Detailed Tips */}
        <div className="space-y-6">
          {tips.map((section, idx) => {
            const Icon = section.icon
            return (
              <Card key={idx}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-12 h-12 rounded-xl ${section.color} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle>{section.category}</CardTitle>
                      <CardDescription>{section.items.length} dicas essenciais</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {section.items.map((item, itemIdx) => (
                      <AccordionItem key={itemIdx} value={`item-${itemIdx}`}>
                        <AccordionTrigger className="hover:no-underline">
                          <span className="font-semibold text-left">{item.title}</span>
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA */}
        <Card className="mt-8 border-2 border-primary bg-gradient-to-br from-primary/5 to-transparent">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl mb-2">Pronto para começar?</CardTitle>
            <CardDescription className="text-base">
              Use essas dicas na prática e veja seus resultados melhorarem
            </CardDescription>
          </CardHeader>
          <CardContent className="grid sm:grid-cols-2 gap-3 max-w-md mx-auto">
            <Link href="/simulados" className="w-full">
              <Button size="lg" className="w-full">
                Fazer um Simulado
              </Button>
            </Link>
            <Link href="/materias" className="w-full">
              <Button size="lg" variant="outline" className="w-full bg-transparent">
                Estudar Conteúdos
              </Button>
            </Link>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
