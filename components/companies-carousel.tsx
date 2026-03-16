"use client"

const companies = [
  { name: "TechFix Assistência" },
  { name: "ConsertaCel" },
  { name: "InfoRepair" },
  { name: "MasterPhone" },
  { name: "DigitalFix" },
  { name: "TechPro" },
  { name: "CelularMaster" },
  { name: "Assistência++" },
]

// Duplicate for infinite scroll
const duplicatedCompanies = [...companies, ...companies]

export function CompaniesCarousel() {
  return (
    <section className="relative bg-background py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-sm font-medium text-muted-foreground">
            Assistências técnicas que já utilizam o sistema
          </p>
        </div>

        {/* Infinite scroll carousel */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />

          <div className="infinite-scroll-companies flex gap-8 px-4">
            {duplicatedCompanies.map((company, i) => (
              <div
                key={`${company.name}-${i}`}
                className="flex-shrink-0 py-4 px-6 rounded-lg border border-border/50 bg-card/50 hover:bg-card transition-colors"
              >
                <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes infinite-scroll-companies {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 16px));
          }
        }

        .infinite-scroll-companies {
          animation: infinite-scroll-companies 30s linear infinite;
        }

        .infinite-scroll-companies:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
