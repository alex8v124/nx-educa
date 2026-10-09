"use client"

import { Menu, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="border-b">
        <div className="container relative flex h-24 items-center justify-between px-4 mx-auto">
          <div className="flex items-center md:absolute md:left-1/2 md:-translate-x-1/2">
            <Link className="flex items-center" href="/">
              <div className="relative h-16 w-16 bg-white rounded-full overflow-hidden shadow-sm">
                <img alt="Winnetka Logo" className="object-contain w-full h-full p-1" src="https://sistema-web-winnetka.vercel.app/images/logo.png" />
              </div>
            </Link>
            <div className="hidden md:block pl-4">
              <h1 className="font-headline text-2xl font-bold text-foreground overflow-hidden whitespace-nowrap border-r-4 border-r-transparent animate-typing">
                Centro Educativo Particular Winnetka
              </h1>
            </div>
          </div>
          <div className="flex items-center w-full justify-between md:w-auto">
            <div className="md:hidden">
              <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground h-10 w-10">
                <Menu className="h-6 w-6" />
              </button>
            </div>
            <div className="hidden md:flex w-24"></div>
          </div>
        </div>
      </div>
      <nav className="hidden md:flex h-16 items-center border-b">
        <div className="container flex items-center justify-center relative px-4 mx-auto">
          <ul className="flex h-full items-center space-x-8 text-base font-medium">
            <li className="flex h-full items-center">
              <Link className="transition-colors hover:text-primary h-full flex items-center border-b-2 border-transparent hover:border-primary" href="/">Inicio</Link>
            </li>
            <li className="flex h-full items-center">
              <Link className="transition-colors hover:text-primary h-full flex items-center border-b-2 border-transparent hover:border-primary" href="/pre-registration">Preinscripción</Link>
            </li>
            <li className="flex h-full items-center">
              <Link className="transition-colors hover:text-primary h-full flex items-center border-b-2 border-transparent hover:border-primary" href="/parent/login">Portal Apoderados</Link>
            </li>
            <li className="flex h-full items-center">
              <Link className="transition-colors hover:text-primary h-full flex items-center border-b-2 border-transparent hover:border-primary" href="/teacher/login">Portal Profesores</Link>
            </li>
            <li className="flex h-full items-center">
              <Link className="transition-colors hover:text-primary h-full flex items-center border-b-2 border-transparent hover:border-primary" href="/admin/login">Admin</Link>
            </li>
          </ul>
          <div className="absolute right-4">
            {mounted && (
              <button 
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground h-10 w-10"
              >
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </button>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}
