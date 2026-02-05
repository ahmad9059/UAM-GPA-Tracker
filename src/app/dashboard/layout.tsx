export const dynamic = "force-dynamic";

import DashboardLayoutWrapper from "@/components/dashboard/dashboard-layout-wrapper";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayoutWrapper>{children}</DashboardLayoutWrapper>;
}
