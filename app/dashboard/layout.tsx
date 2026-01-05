import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"

export const metadata: Metadata = {
  title: "Dashboard | AI Studio",
  description: "Manage your property photos and AI edits",
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      {/* Main content */}
      <main className="container py-6">{children}</main>
    </div>
  )
}
