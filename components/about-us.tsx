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
        {/* Animated particles with fixed positions */}
        <div className="particle-container absolute inset-0" aria-hidden="true">
          {[
            { left: "10%", top: "15%" },
            { left: "25%", top: "70%" },
            { left: "45%", top: "25%" },
            { left: "60%", top: "80%" },
            { left: "75%", top: "40%" },
            { left: "85%", top: "65%" },
            { left: "15%", top: "50%" },
            { left: "90%", top: "20%" },
          ].map((pos, i) => (
            <div 
              key={i} 
              className="particle" 
              style={{
                left: pos.left,
                top: pos.top,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left - Logo + Connection + Image */}
          <div className="flex flex-col items-center">

            {/* Logo circle */}
            <div className="logo-ring relative flex items-center justify-center mb-0">
              {/* Spinning ring */}
              <div className="logo-spin-ring absolute inset-0 rounded-full"></div>
              {/* Static glow ring */}
              <div className="absolute inset-0 rounded-full border-[3px] border-blue-400/30"></div>
              {/* Logo */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2014%20de%20fev.%20de%202026%2C%2000_36_35-TYb6rpYewylqoSwpkdaZFkJdpqBLBW.png"
                alt="OS Digital Plus"
                className="relative z-10 h-20 lg:h-24 object-contain"
              />
            </div>

            {/* Connector line — shares the same blue border color as the frame and ring */}
            <div className="connector-line relative flex flex-col items-center">
              <div className="w-[3px] h-10 bg-gradient-to-b from-blue-400 to-blue-400/20 rounded-full"></div>
              {/* Small dot at the joint */}
              <div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_2px_rgba(96,165,250,0.7)]"></div>
              <div className="w-[3px] h-6 bg-gradient-to-b from-blue-400/60 to-blue-400 rounded-full"></div>
            </div>

            {/* Image frame — border thickness matches ring border */}
            <div className="relative group">
              {/* Outer glow on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-400 rounded-3xl opacity-0 group-hover:opacity-25 blur-md transition duration-500"></div>
              {/* Frame — border-[3px] to match ring */}
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-[3px] border-blue-400 bg-slate-900">
                {/* Top corner accents */}
                <div className="absolute top-0 left-0 w-5 h-5 border-t-[3px] border-l-[3px] border-cyan-300 rounded-tl-3xl z-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-5 h-5 border-t-[3px] border-r-[3px] border-cyan-300 rounded-tr-3xl z-10 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-5 h-5 border-b-[3px] border-l-[3px] border-cyan-300 rounded-bl-3xl z-10 pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 w-5 h-5 border-b-[3px] border-r-[3px] border-cyan-300 rounded-br-3xl z-10 pointer-events-none"></div>

                {/* Shine on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-500 z-10"></div>

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

        /* Logo ring sizing */
        .logo-ring {
          width: 140px;
          height: 140px;
        }

        @media (min-width: 1024px) {
          .logo-ring {
            width: 160px;
            height: 160px;
          }
        }

        /* Spinning gradient ring */
        .logo-spin-ring {
          border: 3px solid transparent;
          background: conic-gradient(
            from 0deg,
            #60a5fa 0deg,
            #3b82f6 90deg,
            transparent 120deg,
            transparent 240deg,
            #60a5fa 360deg
          ) border-box;
          -webkit-mask:
            linear-gradient(#fff 0 0) padding-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: destination-out;
          mask-composite: exclude;
          animation: spin-ring 3s linear infinite;
        }

        @keyframes spin-ring {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
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
