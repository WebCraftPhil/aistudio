"use client"

import { Button } from "@/components/ui/button"
import { IconLogout } from "@tabler/icons-react"

export function SignOutButton() {
  const handleSignOut = async () => {
    // TODO: Implement with better-auth signOut
    console.log("Sign out clicked")
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleSignOut}
      className="gap-2 text-muted-foreground hover:text-foreground"
    >
      <IconLogout className="size-4" />
      <span className="hidden sm:inline">Sign out</span>
    </Button>
  )
}
