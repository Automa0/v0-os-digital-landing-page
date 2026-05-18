import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { getLegalSlugs, getLegalTitle, getLegalMeta } from "@/lib/legal"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

export function generateStaticParams() {
  return getLegalSlugs().map((slug) => ({ slug }))
}

const allSlugs = getLegalSlugs()

const navItems = [
  { slug: "termos-de-uso", label: "Termos de Uso" },
  { slug: "politica-privacidade", label: "Política de Privacidade" },
  { slug: "politica-reembolso", label: "Política de Reembolso" },
  { slug: "politica-cancelamento", label: "Política de Cancelamento" },
  { slug: "politica-seguranca", label: "Política de Segurança" },
  { slug: "politica-cookies", label: "Política de Cookies" },
  { slug: "acordo-dpa", label: "Acordo de Dados (DPA)" },
  { slug: "uso-aceitavel", label: "Uso Aceitável" },
]

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const data = getLegalMeta(slug)

  if (!data) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="OSDigitalPlus"
                width={200}
                height={72}
                className="h-14 w-auto"
              />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-primary transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Voltar para o site
            </Link>
          </div>
        </div>
      </header>

      <div className="flex-1 flex">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-10 lg:py-12 w-full">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

            {/* Sidebar */}
            <aside className="lg:w-56 flex-shrink-0">
              <div className="bg-white rounded-xl border border-slate-200 p-1 lg:sticky lg:top-24">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-3 py-2">Documentos Legais</p>
                <nav className="space-y-0.5">
                  {navItems.map((item) => {
                    const isActive = item.slug === slug
                    return (
                      <Link
                        key={item.slug}
                        href={`/legal/${item.slug}`}
                        className={`block px-3 py-2 text-sm rounded-lg transition-all ${
                          isActive
                            ? "bg-primary text-white font-semibold shadow-sm"
                            : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                        }`}
                      >
                        {item.label}
                      </Link>
                    )
                  })}
                </nav>
              </div>
            </aside>

            {/* Content */}
            <main className="flex-1 min-w-0">
              {/* Document header */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 lg:p-8 mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-200" />
                  <span className="text-xs font-medium text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-200">
                    Última atualização: {data.dataVigencia}
                  </span>
                </div>
                <h1 className="font-heading text-2xl lg:text-3xl font-bold text-slate-900">
                  {data.title}
                </h1>
              </div>

              {/* Document body */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 lg:p-8">
                <article className="prose prose-slate max-w-none
                  prose-headings:font-heading prose-headings:font-bold prose-headings:text-slate-900
                  prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-3 prose-h2:pb-2 prose-h2:border-b prose-h2:border-slate-200
                  prose-h3:text-lg
                  prose-p:text-slate-700 prose-p:leading-8 prose-p:mb-6 prose-p:text-base
                  prose-li:text-slate-700 prose-li:leading-7 prose-li:mb-2
                  prose-table:text-sm
                  prose-th:bg-slate-50 prose-th:text-left prose-th:font-semibold prose-th:px-4 prose-th:py-3
                  prose-td:px-4 prose-td:py-3
                  prose-strong:text-slate-900 prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                  prose-blockquote:border-l-primary prose-blockquote:italic prose-blockquote:text-slate-600
                  prose-code:text-primary prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
                  prose-pre:bg-slate-900 prose-pre:text-slate-100">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {data.content}
                  </ReactMarkdown>
                </article>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="OSDigitalPlus"
                width={180}
                height={64}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sm text-slate-500 text-center">
              © {new Date().getFullYear()} OSDigitalPlus. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-slate-400">Dados protegidos</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}