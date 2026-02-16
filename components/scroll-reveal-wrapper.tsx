"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import type { ReactNode } from "react"

interface ScrollRevealWrapperProps {
  children: ReactNode
  delay?: number
}

export function ScrollRevealWrapper({ children, delay = 0 }: ScrollRevealWrapperProps) {
  return <ScrollReveal delay={delay}>{children}</ScrollReveal>
}
