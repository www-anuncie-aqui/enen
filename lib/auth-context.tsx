"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter } from "next/navigation"

interface User {
  email: string
  name: string
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, password: string) => boolean
  register: (email: string, password: string, name: string) => boolean
  logout: () => void
  updateProfile: (name: string, email: string) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in on mount
    const storedUser = localStorage.getItem("enemapp_user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
      setIsAuthenticated(true)
    }
  }, [])

  const login = (email: string, password: string): boolean => {
    // Get stored credentials
    const storedCredentials = localStorage.getItem("enemapp_credentials")

    if (storedCredentials) {
      const credentials = JSON.parse(storedCredentials)
      if (credentials.email === email && credentials.password === password) {
        const userData = { email, name: credentials.name }
        setUser(userData)
        setIsAuthenticated(true)
        localStorage.setItem("enemapp_user", JSON.stringify(userData))
        return true
      }
    }
    return false
  }

  const register = (email: string, password: string, name: string): boolean => {
    // Check if user already exists
    const storedCredentials = localStorage.getItem("enemapp_credentials")
    if (storedCredentials) {
      const credentials = JSON.parse(storedCredentials)
      if (credentials.email === email) {
        return false // User already exists
      }
    }

    // Save credentials
    localStorage.setItem("enemapp_credentials", JSON.stringify({ email, password, name }))

    // Auto login after registration
    const userData = { email, name }
    setUser(userData)
    setIsAuthenticated(true)
    localStorage.setItem("enemapp_user", JSON.stringify(userData))
    return true
  }

  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem("enemapp_user")
    router.push("/login")
  }

  const updateProfile = (name: string, email: string) => {
    if (user) {
      const updatedUser = { ...user, name, email }
      setUser(updatedUser)
      localStorage.setItem("enemapp_user", JSON.stringify(updatedUser))

      // Update credentials
      const storedCredentials = localStorage.getItem("enemapp_credentials")
      if (storedCredentials) {
        const credentials = JSON.parse(storedCredentials)
        localStorage.setItem(
          "enemapp_credentials",
          JSON.stringify({
            ...credentials,
            name,
            email,
          }),
        )
      }
    }
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, register, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
