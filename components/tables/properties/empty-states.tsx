"use client"

import { Button } from "@/components/ui/button"
import { IconBuilding, IconSearch } from "@tabler/icons-react"

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="rounded-full bg-muted p-4 mb-4">
        <IconBuilding className="h-8 w-8 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-semibold mb-2">No properties yet</h3>
      <p className="text-muted-foreground text-center max-w-sm mb-6">
        Get started by uploading your first real estate photo for AI enhancement.
      </p>
      <Button>
        Upload your first photo
      </Button>
    </div>
  )
}

export function NoResults() {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="rounded-full bg-muted p-4 mb-4">
        <IconSearch className="h-8 w-8 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-semibold mb-2">No results found</h3>
      <p className="text-muted-foreground text-center max-w-sm">
        Try adjusting your search or filters to find what you&apos;re looking for.
      </p>
    </div>
  )
}
