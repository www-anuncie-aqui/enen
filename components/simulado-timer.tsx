"use client"

import { useEffect, useState } from "react"
import { Clock } from "lucide-react"
import { Card } from "@/components/ui/card"

interface SimuladoTimerProps {
  initialMinutes: number
  onTimeUp?: () => void
}

export function SimuladoTimer({ initialMinutes, onTimeUp }: SimuladoTimerProps) {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60)
  const [isRunning, setIsRunning] = useState(true)

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsRunning(false)
          onTimeUp?.()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [isRunning, timeLeft, onTimeUp])

  const hours = Math.floor(timeLeft / 3600)
  const minutes = Math.floor((timeLeft % 3600) / 60)
  const seconds = timeLeft % 60

  const formatTime = (num: number) => String(num).padStart(2, "0")

  const isLowTime = timeLeft < 600 // Less than 10 minutes

  return (
    <Card className={`p-4 ${isLowTime ? "bg-destructive/10 border-destructive" : ""}`}>
      <div className="flex items-center justify-center gap-3">
        <Clock className={`w-5 h-5 ${isLowTime ? "text-destructive" : "text-primary"}`} />
        <div className={`text-2xl font-mono font-bold ${isLowTime ? "text-destructive" : "text-foreground"}`}>
          {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
        </div>
      </div>
    </Card>
  )
}
