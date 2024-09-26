import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

// Removed geistSans and geistMono font declarations

export const metadata: Metadata = {
  title: 'Fal.ai Example',
  description: 'Fal.ai Example',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white antialiased dark:bg-zinc-900">
        <ThemeProvider defaultTheme="system">{children}</ThemeProvider>
      </body>
    </html>
  );
}
