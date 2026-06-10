import {
  AirVent,
  Cpu,
  Gamepad2,
  Laptop,
  Printer,
  Smartphone,
  Tv,
  Watch,
  Wrench,
} from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const segments = [
  { icon: Smartphone, label: "Celulares" },
  { icon: Cpu, label: "Eletrônicos" },
  { icon: Laptop, label: "Informática" },
  { icon: Tv, label: "Eletrodomésticos" },
  { icon: Gamepad2, label: "Games" },
  { icon: Watch, label: "Relojoaria" },
  { icon: AirVent, label: "Climatização" },
  { icon: Printer, label: "Impressoras" },
  { icon: Wrench, label: "Autorizadas" },
]

export function LogosMarquee() {
  return (
    <section className="border-y border-white/[0.04] bg-[#05060B] py-12">
      <ScrollReveal>
        <p className="px-4 text-center text-sm text-slate-400">
          Junte-se a <span className="font-bold text-white">+2.000 assistências e lojas</span>{" "}
          que já crescem com o OS Digital+
        </p>
      </ScrollReveal>

      <div
        className="mt-8 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent 0%, black 12%, black 88%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0%, black 12%, black 88%, transparent 100%)",
        }}
      >
        <div className="infinite-scroll flex w-max items-center gap-12 pr-12">
          {[...segments, ...segments].map((segment, i) => (
            <span
              key={`${segment.label}-${i}`}
              className="flex items-center gap-2.5 text-slate-500 transition-colors hover:text-slate-300"
            >
              <segment.icon className="h-5 w-5" />
              <span className="whitespace-nowrap font-heading text-lg font-bold">
                {segment.label}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
