"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export interface TestResult {
  id: string
  date: string
  subject: string
  correct: number
  total: number
  percentage: number
  timeSpent: number
}

export interface EssayResult {
  id: string
  date: string
  theme: string
  score: number
  competences: number[]
}

interface StudyData {
  questionsAnswered: number
  correctAnswers: number
  studyHours: number
  essaysWritten: number
  testResults: TestResult[]
  essayResults: EssayResult[]
  subjectStats: {
    linguagens: { correct: number; total: number }
    matematica: { correct: number; total: number }
    humanas: { correct: number; total: number }
    natureza: { correct: number; total: number }
  }
}

interface StudyDataContextType {
  data: StudyData
  addTestResult: (result: TestResult) => void
  addEssayResult: (result: EssayResult) => void
  resetData: () => void
}

const initialData: StudyData = {
  questionsAnswered: 0,
  correctAnswers: 0,
  studyHours: 0,
  essaysWritten: 0,
  testResults: [],
  essayResults: [],
  subjectStats: {
    linguagens: { correct: 0, total: 0 },
    matematica: { correct: 0, total: 0 },
    humanas: { correct: 0, total: 0 },
    natureza: { correct: 0, total: 0 },
  },
}

const StudyDataContext = createContext<StudyDataContextType | undefined>(undefined)

export function StudyDataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<StudyData>(initialData)

  // Load data from localStorage on mount
  useEffect(() => {
    console.log("[v0] StudyDataProvider mounted, loading from localStorage")
    const saved = localStorage.getItem("enem-study-data")
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        console.log("[v0] Loaded data from localStorage:", parsed)
        setData(parsed)
      } catch (e) {
        console.error("[v0] Failed to load study data:", e)
      }
    } else {
      console.log("[v0] No saved data found, using initial data")
    }
  }, [])

  // Save data to localStorage whenever it changes
  useEffect(() => {
    console.log("[v0] Saving data to localStorage:", data)
    localStorage.setItem("enem-study-data", JSON.stringify(data))
  }, [data])

  const addTestResult = (result: TestResult) => {
    console.log("[v0] addTestResult called with:", result)

    setData((prev) => {
      console.log("[v0] Previous data:", prev)
      const newData = { ...prev }

      // Add to test results
      newData.testResults = [...prev.testResults, result]

      // Update overall stats
      newData.questionsAnswered = prev.questionsAnswered + result.total
      newData.correctAnswers = prev.correctAnswers + result.correct

      let subjectKey = result.subject.toLowerCase()
      if (subjectKey === "matemática") subjectKey = "matematica"
      if (subjectKey === "ciências humanas") subjectKey = "humanas"
      if (subjectKey === "ciências da natureza") subjectKey = "natureza"

      if (newData.subjectStats[subjectKey as keyof typeof newData.subjectStats]) {
        const currentStats = newData.subjectStats[subjectKey as keyof typeof newData.subjectStats]
        newData.subjectStats[subjectKey as keyof typeof newData.subjectStats] = {
          correct: currentStats.correct + result.correct,
          total: currentStats.total + result.total,
        }
        console.log(
          "[v0] Updated subject stats for",
          subjectKey,
          ":",
          newData.subjectStats[subjectKey as keyof typeof newData.subjectStats],
        )
      } else {
        console.log("[v0] Subject not found in stats:", result.subject, "normalized:", subjectKey)
      }

      // Estimate study hours (rough: time spent in hours)
      newData.studyHours = prev.studyHours + Math.round((result.timeSpent / 3600) * 10) / 10

      console.log("[v0] New data after test result:", {
        questionsAnswered: newData.questionsAnswered,
        correctAnswers: newData.correctAnswers,
        studyHours: newData.studyHours,
        subjectStats: newData.subjectStats,
      })

      return newData
    })
  }

  const addEssayResult = (result: EssayResult) => {
    setData((prev) => ({
      ...prev,
      essayResults: [...prev.essayResults, result],
      essaysWritten: prev.essaysWritten + 1,
      studyHours: prev.studyHours + 1, // Add 1 hour for essay
    }))
  }

  const resetData = () => {
    setData(initialData)
    localStorage.removeItem("enem-study-data")
  }

  return (
    <StudyDataContext.Provider value={{ data, addTestResult, addEssayResult, resetData }}>
      {children}
    </StudyDataContext.Provider>
  )
}

export function useStudyData() {
  const context = useContext(StudyDataContext)
  if (!context) {
    throw new Error("useStudyData must be used within StudyDataProvider")
  }
  return context
}
