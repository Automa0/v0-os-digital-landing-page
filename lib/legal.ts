import fs from "fs"
import path from "path"

const slugMap: Record<string, string> = {
  "politica-privacidade": "01-politica-privacidade.md",
  "termos-de-uso": "02-termos-de-uso.md",
  "politica-cookies": "03-politica-cookies.md",
  "acordo-dpa": "04-dpa-acordo-operador.md",
  "politica-reembolso": "05-politica-reembolso.md",
  "politica-cancelamento": "06-politica-cancelamento.md",
  "politica-seguranca": "07-politica-seguranca.md",
  "uso-aceitavel": "08-politica-uso-aceitavel.md",
}

const titleMap: Record<string, string> = {
  "politica-privacidade": "Política de Privacidade",
  "termos-de-uso": "Termos de Uso",
  "politica-cookies": "Política de Cookies",
  "acordo-dpa": "Acordo de Processamento de Dados (DPA)",
  "politica-reembolso": "Política de Reembolso",
  "politica-cancelamento": "Política de Cancelamento",
  "politica-seguranca": "Política de Segurança",
  "uso-aceitavel": "Política de Uso Aceitável",
}

export function getLegalSlugs(): string[] {
  return Object.keys(slugMap)
}

export function getLegalTitle(slug: string): string {
  return titleMap[slug] ?? "Documento Legal"
}

export function getLegalMeta(slug: string): { title: string; content: string; dataVigencia: string } | null {
  const filename = slugMap[slug]
  if (!filename) return null

  const filePath = path.join(process.cwd(), "docs", "legal", filename)

  try {
    const raw = fs.readFileSync(filePath, "utf-8")
    const contentWithoutFrontmatter = raw.replace(/^---[\s\S]*?---\n*/, "").trim()

    const frontmatterMatch = raw.match(/^---([\s\S]*?)---/)
    let dataVigencia = "18/05/2026"
    if (frontmatterMatch) {
      const dateMatch = frontmatterMatch[1].match(/dataDeVigencia:\s*"?([^"\n]+)"?/)
      if (dateMatch) {
        dataVigencia = dateMatch[1].trim()
      }
    }

    return {
      title: getLegalTitle(slug),
      content: contentWithoutFrontmatter,
      dataVigencia,
    }
  } catch {
    return null
  }
}
