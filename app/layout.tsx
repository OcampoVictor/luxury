import type {Metadata} from 'next';
import { Outfit, JetBrains_Mono, Inter } from 'next/font/google';
import './globals.css'; // Global styles

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Sofía & Mateo - Invitación de Boda',
  description: 'Te invitamos a nuestra boda',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es" className={`${outfit.variable} ${jetbrainsMono.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="bg-[#111111] text-[#d4d4d8] font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
