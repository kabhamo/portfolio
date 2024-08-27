import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/app/components/Header/Header'
import PageTransition from './components/PageTransition/PageTransition'
import StairTransition from './components/StairTransition/StairTransition'

const JetBrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
    variable: '--font-jetbrainsMono',
})

export const metadata: Metadata = {
    title: 'Mohamed Kabha',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={JetBrainsMono.variable}>
                <Header />
                <StairTransition />
                <PageTransition>
                    {children}
                </PageTransition>
            </body>
        </html>
    )
}
