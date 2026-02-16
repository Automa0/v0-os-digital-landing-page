"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Recursos", href: "#recursos" },
  { label: "Planos", href: "#planos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
]

const LOGIN_URL = "https://v0-os-digital-app.vercel.app/auth/login"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <a href="#inicio" aria-label="OS Digital - Inicio">
          <Image
            src="/images/logo.png"
            alt="OS Digital"
            width={200}
            height={80}
            className="h-16 w-auto lg:h-20"
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Menu principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href={LOGIN_URL}
            className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
          >
            Entrar
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden rounded-md p-2 text-foreground/70 hover:bg-secondary"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="border-t border-border bg-background px-4 pb-4 pt-2 lg:hidden" aria-label="Menu mobile">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/70 transition-colors hover:bg-secondary hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href={LOGIN_URL}
              className="mt-2 rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
            >
              Entrar
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
