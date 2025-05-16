import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Header from "@/components/dashboard/header/header";
import Sidebar from "@/components/dashboard/sidebar/sidebar";

export default async function adminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Bolck non-admin users  from accessing the admin dashboard
  const user = await currentUser();
  if (!user || user?.privateMetadata.role !== "ADMIN") redirect("/");

  return (
    <div className="w-full h-full">
      {/* Sidebar */}
      <Sidebar isAdmin />
      <div className="ml-[300px]">
        {/* Header */}
        <Header />
        <div className="w-full mt-[75px] p-4">{children}</div>
      </div>
    </div>
  );
}
