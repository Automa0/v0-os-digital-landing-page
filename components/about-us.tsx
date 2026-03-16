"use client"

export function AboutUs() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden about-section">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"></div>
        <svg className="absolute w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-blue-400"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="animate-pulse"/>
        </svg>
        {/* Animated particles */}
        <div className="particle-container absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`
            }}></div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left - Image with Logo Connection */}
          <div className="flex flex-col items-center">
            {/* Logo */}
            <div className="mb-8 flex justify-center">
              <img
                src="/os-digital-logo.png"
                alt="OS Digital Plus"
                className="h-16 lg:h-20 object-contain"
              />
            </div>

            {/* Connection Line */}
            <div className="relative w-1 h-12 mb-4">
              <div className="absolute inset-0 bg-gradient-to-b from-primary via-blue-400 to-transparent rounded-full"></div>
              <div className="absolute inset-0 animate-pulse bg-gradient-to-b from-primary to-transparent rounded-full opacity-50"></div>
            </div>

            {/* Image Container with Premium Frame */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-400 rounded-3xl opacity-0 group-hover:opacity-20 blur transition duration-500"></div>
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-2 border-blue-400/50 bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/generated_image_2f3b8f47-8155-4ba8-a874-fa3da9dae741-QBvPbUhc6Kxi0hu5S8fVvukzrsxRVJ.png"
                  alt="Time OS Digital Plus"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right - Text */}
          <div className="space-y-6">
            <div>
              <span className="inline-block text-sm font-semibold uppercase tracking-wider text-blue-400 mb-3">
                Sobre o OS Digital Plus
              </span>
              <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
                Nascido da necessidade real
              </h2>
            </div>

            <div className="space-y-4 text-base text-slate-300 leading-relaxed">
              <p>
                O OS Digital Plus foi criado para resolver os problemas reais enfrentados por assistências técnicas no dia a dia.
              </p>

              <p>
                Entendemos os desafios: ordens de serviço perdidas, clientes desinformados, caixa bagunçado e falta de controle financeiro. Por isso, construímos uma solução simples, mas poderosa.
              </p>

              <p>
                Com o OS Digital Plus, você tem tudo o que precisa em um único lugar. Dashboard intuitivo, controle financeiro real-time, histórico completo de clientes e a confiança de que sua assistência está crescendo com segurança.
              </p>

              <p className="font-semibold text-blue-300 pt-2">
                Mais de 500 assistências técnicas já confiam em nós.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { label: "Anos de experiência", value: "3+" },
                { label: "Assistências ativas", value: "500+" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-blue-400">{stat.value}</div>
                  <p className="text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.1;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.3;
          }
        }

        .particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: #60a5fa;
          border-radius: 50%;
          animation: float 8s ease-in-out infinite;
          filter: blur(0.5px);
        }

        .particle-container {
          opacity: 0.6;
        }
      `}</style>
    </section>
  )
}
