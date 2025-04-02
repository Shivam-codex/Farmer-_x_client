"use client"

import { createContext, useContext, useState, ReactNode } from "react"

interface User {
  id: string
  name: string
  email: string
  phone: string
  address: string
  avatar: string
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  updateProfile: (userData: Partial<User>) => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>({
    id: "1",
    name: "Shivam Shinde",
    email: "shindeshivam7661@gmail.com",
    phone: "+91 9011967964",
    address: "123 Main Street, Mumbai, Maharashtra",
    avatar: "https://media.licdn.com/dms/image/v2/D4D03AQFtwz6CsT8CjA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730888163344?e=1749081600&v=beta&t=YE4D0vvSdZwyhaB8Y5ZUUHuYKi2_S8hjyoktWfLrrAc"
  })

  const login = async (email: string, password: string) => {
    // In a real application, this would make an API call to authenticate
    // For now, we'll just simulate a successful login
    if (email === "shivam@example.com" && password === "password") {
      setUser({
        id: "1",
        name: "Shivam Shinde",
        email: "shivam@example.com",
        phone: "+91 9876543210",
        address: "123 Main Street, Mumbai, Maharashtra",
        avatar: "/placeholder-avatar.jpg"
      })
    } else {
      throw new Error("Invalid credentials")
    }
  }

  const logout = () => {
    setUser(null)
  }

  const updateProfile = (userData: Partial<User>) => {
    if (user) {
      setUser({ ...user, ...userData })
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
        updateProfile
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
} 