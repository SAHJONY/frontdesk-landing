// app/layout.tsx
import React from 'react';
import './globals.css';
 
export const metadata = {
  title: 'FrontDesk Agents',
  description: 'AI Receptionist & Voice Agents - Professional 24/7 bilingual front desk service',
};
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}

