import UserDashboardClient from '@/Componenets/UserDashboard/UserDashboardClient';

export const metadata = {
  title: "User Dashboard | IntentWire",
  description: "Manage your company claims, reviews, and listings in your personalized dashboard.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function UserDashboardLayout({ children }) {
  return <UserDashboardClient>{children}</UserDashboardClient>;
}