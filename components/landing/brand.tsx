import { Zap } from "lucide-react"

export function Brand({ size = "md" }: { size?: "sm" | "md" }) {
  const iconBox = size === "sm" ? "h-5 w-5 rounded" : "h-8 w-8 rounded-lg"
  const iconSize = size === "sm" ? "h-3 w-3" : "h-[18px] w-[18px]"
  const text = size === "sm" ? "text-sm" : "text-lg"

  return (
    <span className="inline-flex items-center gap-2">
      <span
        className={`flex ${iconBox} items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-400 shadow-md shadow-blue-500/40`}
      >
        <Zap className={`${iconSize} text-white`} fill="currentColor" />
      </span>
      <span className={`font-heading ${text} font-extrabold tracking-tight text-white`}>
        OS{" "}
        <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          Digital
        </span>
        <span className="text-blue-400">+</span>
      </span>
    </span>
  )
}
