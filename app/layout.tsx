// app/layout.tsx
import React from 'react';
import './globals.css';
// If these exist in your repo structure, keep them. If not, you can add later.
// Remove these two imports if your components live elsewhere.
import { SiteHeader } from './(marketing)/components/SiteHeader';
import { SiteFooter } from './(marketing)/components/SiteFooter';
 
export const metadata = {
  title: 'FrontDesk Agents',
  description: 'AI Receptionist & Voice Agents',
};
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-dvh bg-background text-foreground antialiased">
        {/* Header */}
        {typeof SiteHeader !== 'undefined' ? <SiteHeader /> : null}
        {/* Main */}
        <main className="min-h-[70dvh]">{children}</main>
        {/* Footer */}
        {typeof SiteFooter !== 'undefined' ? <SiteFooter /> : null}
      </body>
    </html>
  );
}
