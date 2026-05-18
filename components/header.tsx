"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X, Users } from "lucide-react"

const navLinks = [
  { label: "Recursos", href: "#funcionalidades" },
  { label: "Planos", href: "#planos" },
]

const LOGIN_URL = "https://app.osdigitalplus.com.br"
const SIGNUP_URL = "https://app.osdigitalplus.com.br/register?utm_source=landing&utm_medium=header&utm_campaign=cta"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      {/* Social proof top bar */}
      <div className="bg-primary px-4 py-2 text-center text-xs font-medium text-primary-foreground">
        <span className="inline-flex items-center gap-2">
          <Users className="h-3.5 w-3.5" />
          +2.000 assistências e lojas usam o OS Digital+ para organizar e crescer
        </span>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-sm shadow-sm border-b border-border"
            : "bg-background/80 backdrop-blur-sm border-b border-border/50"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 lg:px-8">
          <a href="#inicio" aria-label="OSDigitalPlus - Início">
            <Image
              src="/images/logo.png"
              alt="OSDigitalPlus"
              width={200}
              height={72}
              className="h-16 w-auto lg:h-20"
              priority
            />
          </a>

          {/* Desktop nav — minimal */}
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Menu principal">
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
              className="text-sm font-medium text-foreground/60 transition-colors hover:text-primary"
            >
              Entrar
            </a>
            <a
              href={SIGNUP_URL}
              className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Testar grátis
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden rounded-md p-2 text-foreground/70 hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="border-t border-border bg-background px-4 pb-4 pt-2 lg:hidden" aria-label="Menu mobile">
            <div className="flex flex-col gap-2">
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
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/60 transition-colors hover:bg-secondary hover:text-primary"
              >
                Entrar
              </a>
              <a
                href={SIGNUP_URL}
                className="mt-1 rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
              >
                Testar grátis
              </a>
            </div>
          </nav>
        )}
      </header>
    </>
  )
}
