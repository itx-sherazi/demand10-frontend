import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Verify Email | IntentWire",
  description: "Verify your email address for your IntentWire account.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function VerifyEmailLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}