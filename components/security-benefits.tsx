"use client"

import { Shield, Lock, Key } from "lucide-react"

export function SecurityBenefits() {
  return (
    <section className="relative bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        {/* Desktop layout - row */}
        <div className="hidden sm:flex flex-row items-center justify-center gap-6 sm:gap-10">
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
          <div className="w-px h-12 bg-blue-200" />

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
          <div className="w-px h-12 bg-blue-200" />

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

        {/* Mobile layout - 2x2 grid */}
        <div className="sm:hidden grid grid-cols-2 gap-4">
          {/* Item 1 */}
          <div className="flex flex-col items-center text-center p-3 rounded-lg bg-blue-50/40">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 border-2 border-blue-400 mb-2">
              <Shield className="h-4 w-4 text-blue-600" />
            </div>
            <p className="font-bold text-slate-900 text-xs">Dados protegidos</p>
            <p className="text-[10px] text-slate-600 leading-tight mt-0.5">Criptografia</p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center text-center p-3 rounded-lg bg-blue-50/40">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 border-2 border-blue-400 mb-2">
              <Lock className="h-4 w-4 text-blue-600" />
            </div>
            <p className="font-bold text-slate-900 text-xs">Sistema confiável</p>
            <p className="text-[10px] text-slate-600 leading-tight mt-0.5">Infraestrutura segura</p>
          </div>

          {/* Item 3 - centered in new row */}
          <div className="flex flex-col items-center text-center p-3 rounded-lg bg-blue-50/40 col-span-2">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 border-2 border-blue-400 mb-2">
              <Key className="h-4 w-4 text-blue-600" />
            </div>
            <p className="font-bold text-slate-900 text-xs">Acesso protegido</p>
            <p className="text-[10px] text-slate-600 leading-tight mt-0.5">Login seguro e autenticação</p>
          </div>
        </div>
      </div>
    </section>
  )
}
