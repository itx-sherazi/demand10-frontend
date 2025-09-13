import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Forgot Password | IntentWire",
  description: "Reset your password for your IntentWire account.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ForgotPasswordLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}