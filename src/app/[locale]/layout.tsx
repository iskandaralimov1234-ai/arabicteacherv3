import type { Metadata } from "next";
import { Outfit, Noto_Naskh_Arabic } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
    display: "swap",
});

const notofont = Noto_Naskh_Arabic({
    subsets: ["arabic"],
    variable: "--font-noto",
    display: "swap",
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "MadinahQuest - Learn Arabic",
    description: "Gamified Madina Arabic Curriculum Platform",
};

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const messages = await getMessages({ locale });

    return (
        <html lang={locale} suppressHydrationWarning>
            <body className={`${outfit.variable} ${notofont.variable} antialiased`} suppressHydrationWarning>
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
