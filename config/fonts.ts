import { Fira_Code as FontMono, Inter as FontSans, Urbanist as FontUrban } from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const fontUrban = FontUrban({
  subsets:["latin"],
  variable: "--font-urban",
})