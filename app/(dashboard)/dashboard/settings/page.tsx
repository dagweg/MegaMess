import { redirect } from "next/navigation"

import { getCurrentUser } from "@/lib/session"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { UserNameForm } from "@/components/forms/user-name-form"
import { getUserById } from "@/lib/user"

export const metadata = {
  title: "Settings",
  description: "Manage account and website settings.",
}

export default async function SettingsPage() {
  const user = await getCurrentUser()
  
  if (!user) {
    redirect("/login")
  }
  const currentUser = await getUserById(user?.id)
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Settings"
        text="Manage account and website settings."
      />
      <div className="grid gap-10">
        <UserNameForm user={{ id: user.id, name: user?.name || ""  , firstName: currentUser?.firstName || "" , lastName: currentUser?.lastName || ''}} />
      </div>
    </DashboardShell>
  )
}
