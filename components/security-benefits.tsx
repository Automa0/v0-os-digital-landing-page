"use client"

import { Shield, Lock, Key } from "lucide-react"

export function SecurityBenefits() {
  return (
    <section className="relative bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
          {/* Item 1 */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 flex-1">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 border-2 border-blue-400">
              <Shield className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="font-bold text-slate-900 text-sm">Dados protegidos</p>
              <p className="text-xs text-slate-600 leading-tight">Criptografia com os mais altos padrões</p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-12 bg-blue-200" />

          {/* Item 2 */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 flex-1">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 border-2 border-blue-400">
              <Lock className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="font-bold text-slate-900 text-sm">Sistema confiável</p>
              <p className="text-xs text-slate-600 leading-tight">Infraestrutura segura e redundante</p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-12 bg-blue-200" />

          {/* Item 3 */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 flex-1">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 border-2 border-blue-400">
              <Key className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="font-bold text-slate-900 text-sm">Acesso protegido</p>
              <p className="text-xs text-slate-600 leading-tight">Login seguro e autenticação robusta</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
