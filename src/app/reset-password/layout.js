import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Reset Password | IntentWire",
  description: "Set a new password for your IntentWire account.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ResetPasswordLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}