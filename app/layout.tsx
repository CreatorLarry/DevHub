import type {Metadata} from "next";
import {Schibsted_Grotesk, Martian_Mono} from "next/font/google";
import "./globals.css";

import Antigravity from '@/components/Antigravity';
import Navbar from "@/components/Navbar";

const schibstedGrotesk = Schibsted_Grotesk({
    variable: "--font-schibsted-grotesk",
    subsets: ["latin"],
});

const martianMono = Martian_Mono({
    variable: "--font-martian-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "DevHub",
    description: "The Home for Every DEVELOPER Event You Can't Afford to Miss.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${schibstedGrotesk.variable} ${martianMono.variable} min-h-screen antialiased`}
        >

        <Navbar/>

        <div className="absolute inset-0 top-0 z-[-1] min-h-screen">
            <Antigravity
                count={300}
                magnetRadius={6}
                ringRadius={7}
                waveSpeed={0.4}
                waveAmplitude={1}
                particleSize={1.5}
                lerpSpeed={0.08}
                color={'#00ffff'}
                autoAnimate={true}
                particleVariance={1}
            />
        </div>

        <main>
            {children}
        </main>


        </body>
        </html>
    );
}
