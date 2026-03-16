"use client"

const companies = [
  { 
    name: "TecCel", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/16018-assistencia-tecnica-celular-1080-webp-600x600.jpg-QvbpSlFggyyRdUXbcqDOPPf39SEA1y.webp" 
  },
  { 
    name: "ConsertaCel", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%20%285%29-oLNt1t659BbJ0O5phja89eqmE8daR4.jpeg" 
  },
  { 
    name: "Digital Fix", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/modern-digital-fix-logo-template-260nw-1282340674.jpg-rzExt2zWl8apaJWtmR6i2rrtGQNKlx.webp" 
  },
  { 
    name: "TechFix", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%20%284%29-inRGViahs6cf5s67wy5wtaGduxcZVp.jpeg" 
  },
  { 
    name: "MasterCell", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%20%283%29-atrZpcE2pWXAK3PqI8TUcMZjLFbClA.jpeg" 
  },
  { 
    name: "TechPro", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-hcjDf8al5NJKRJfb9SDe3cTo0qmyVk.png" 
  },
]

// Duplicate for infinite scroll
const duplicatedCompanies = [...companies, ...companies]

export function CompaniesCarousel() {
  return (
    <section className="relative bg-background py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent text-balance">
            Assistências técnicas que já utilizam o sistema
          </h3>
        </div>

        {/* Infinite scroll carousel */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />

          <div className="infinite-scroll-companies flex gap-10 px-4">
            {duplicatedCompanies.map((company, i) => (
              <div
                key={`${company.name}-${i}`}
                className="flex flex-col items-center gap-3 flex-shrink-0"
              >
                {/* Logo circle */}
                <div className="h-20 w-20 rounded-full border-2 border-border/30 bg-white overflow-hidden shadow-md hover:shadow-lg hover:scale-105 transition-all">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={company.logo} 
                    alt={`Logo ${company.name}`}
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* Company name */}
                <p className="text-sm font-medium text-foreground/80 text-center whitespace-nowrap">
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
