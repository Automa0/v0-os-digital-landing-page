"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, Menu, X } from "lucide-react"

const LOGIN_URL = "https://app.osdigitalplus.com.br"
const SIGNUP_URL = "https://app.osdigitalplus.com.br/auth/login?modo=cadastro"

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Recursos", href: "#funcionalidades" },
  { label: "Planos", href: "#planos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
]

export function LandingNav() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4">
      <header className="mx-auto max-w-[1400px] rounded-2xl border border-white/[0.06] bg-[#0B0D14]/85 shadow-xl shadow-black/40 backdrop-blur-md">
        <div className="flex items-center justify-between px-4 py-2.5 sm:px-5">
          <a href="#inicio" aria-label="OS Digital+ — Início">
            <Image
              src="/images/logo-transparent.png"
              alt="OS Digital+"
              width={160}
              height={46}
              className="h-9 w-auto"
              priority
            />
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Menu principal">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={LOGIN_URL}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              Entrar
            </a>
            <a
              href={SIGNUP_URL}
              className="group inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition-all hover:from-blue-500 hover:to-blue-400"
            >
              Cadastre-se
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-slate-300 hover:bg-white/5 hover:text-white lg:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <nav
            className="border-t border-white/[0.06] px-4 pb-4 pt-2 lg:hidden"
            aria-label="Menu mobile"
          >
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={LOGIN_URL}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
              >
                Entrar
              </a>
              <a
                href={SIGNUP_URL}
                className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/30"
              >
                Cadastre-se
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </nav>
        )}
      </header>
    </div>
  )
}
