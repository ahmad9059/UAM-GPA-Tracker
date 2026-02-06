import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import DashboardLayoutClient from "./dashboard-layout-client";

export default async function DashboardLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieHeader = cookies().toString();
  const session = await auth.api.getSession(
    cookieHeader ? { headers: { cookie: cookieHeader } } : undefined
  );

  if (!session) {
    redirect("/login");
  }

  // Strip non-serializable fields (Dates, symbols) before sending to client.
  const clientSession = {
    user: {
      name: session.user.name ?? null,
      email: session.user.email ?? null,
      image: session.user.image ?? null,
    },
  };

  return (
    <DashboardLayoutClient session={clientSession}>
      {children}
    </DashboardLayoutClient>
  );
}
