"use client"

const companies = [
  { name: "TechFix Assistência", initials: "TF" },
  { name: "ConsertaCel", initials: "CC" },
  { name: "InfoRepair", initials: "IR" },
  { name: "MasterPhone", initials: "MP" },
  { name: "DigitalFix", initials: "DF" },
  { name: "TechPro", initials: "TP" },
  { name: "CelularMaster", initials: "CM" },
  { name: "Assistência++", initials: "A+" },
]

// Duplicate for infinite scroll
const duplicatedCompanies = [...companies, ...companies]

export function CompaniesCarousel() {
  return (
    <section className="relative bg-background py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-12">
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
                className="flex flex-col items-center gap-3 flex-shrink-0"
              >
                {/* Logo circle */}
                <div className="h-16 w-16 rounded-full border border-border/50 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center hover:from-primary/20 hover:to-accent/20 transition-all">
                  <span className="text-sm font-bold text-primary">{company.initials}</span>
                </div>
                {/* Company name */}
                <p className="text-xs font-medium text-muted-foreground text-center whitespace-nowrap">
                  {company.name}
                </p>
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
            transform: translateX(calc(-50% - 32px));
          }
        }

        .infinite-scroll-companies {
          animation: infinite-scroll-companies 40s linear infinite;
        }

        .infinite-scroll-companies:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
