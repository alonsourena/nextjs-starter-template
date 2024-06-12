import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "@/styles/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: {
        default: "My App",
        template: "%s | My App",
    },
    description: "Nextjs starter template",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <head />
            <body className={`min-h-screen font-sans antialiased${inter.className}`}>{children}</body>
        </html>
    )
}
