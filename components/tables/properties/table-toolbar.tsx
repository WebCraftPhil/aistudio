"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  ALL_STATUSES,
  ALL_TAGS,
  type PropertyStatus,
  type PropertyTag,
} from "@/lib/mock/properties"
import { usePropertyFilters } from "@/hooks/use-property-filters"
import { IconSearch, IconX, IconFilter } from "@tabler/icons-react"

const statusLabels: Record<PropertyStatus, string> = {
  active: "Active",
  pending: "Pending",
  completed: "Completed",
  archived: "Archived",
}

const tagLabels: Record<PropertyTag, string> = {
  residential: "Residential",
  commercial: "Commercial",
  luxury: "Luxury",
  staging: "Staging",
  exterior: "Exterior",
  interior: "Interior",
  renovation: "Renovation",
}

export function TableToolbar() {
  const {
    filters,
    hasActiveFilters,
    setSearch,
    setStatus,
    toggleTag,
    clearFilter,
    clearAll,
  } = usePropertyFilters()

  return (
    <div className="space-y-4">
      {/* Filters row */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        {/* Search input */}
        <div className="relative w-full sm:w-[320px]">
          <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          <Input
            placeholder="Search properties..."
            value={filters.q || ""}
            onChange={(e) => setSearch(e.target.value || null)}
            className="pl-9"
          />
        </div>

        {/* Status filter */}
        <Select
          value={filters.status || "all"}
          onValueChange={(value) => setStatus(value === "all" ? null : (value as PropertyStatus))}
        >
          <SelectTrigger className="w-full sm:w-[160px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All statuses</SelectItem>
            {ALL_STATUSES.map((status) => (
              <SelectItem key={status} value={status}>
                {statusLabels[status]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Tags filter */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full sm:w-auto gap-2">
              <IconFilter className="h-4 w-4" />
              Tags
              {filters.tags && filters.tags.length > 0 && (
                <Badge variant="secondary" className="ml-1 h-5 px-1.5">
                  {filters.tags.length}
                </Badge>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-[200px]">
            <DropdownMenuLabel>Filter by tags</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {ALL_TAGS.map((tag) => (
              <DropdownMenuCheckboxItem
                key={tag}
                checked={filters.tags?.includes(tag) || false}
                onCheckedChange={() => toggleTag(tag)}
              >
                {tagLabels[tag]}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Clear all button */}
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAll}
            className="text-muted-foreground hover:text-foreground"
          >
            Clear all
          </Button>
        )}
      </div>

      {/* Active filters pills */}
      {hasActiveFilters && (
        <div className="flex flex-wrap items-center gap-2">
          {filters.q && (
            <Badge variant="secondary" className="gap-1 pr-1">
              Search: {filters.q}
              <button
                onClick={() => clearFilter("q")}
                className="ml-1 rounded-full p-0.5 hover:bg-muted-foreground/20"
              >
                <IconX className="h-3 w-3" />
              </button>
            </Badge>
          )}

          {filters.status && (
            <Badge variant="secondary" className="gap-1 pr-1">
              Status: {statusLabels[filters.status]}
              <button
                onClick={() => clearFilter("status")}
                className="ml-1 rounded-full p-0.5 hover:bg-muted-foreground/20"
              >
                <IconX className="h-3 w-3" />
              </button>
            </Badge>
          )}

          {filters.tags?.map((tag) => (
            <Badge key={tag} variant="secondary" className="gap-1 pr-1">
              {tagLabels[tag]}
              <button
                onClick={() => toggleTag(tag)}
                className="ml-1 rounded-full p-0.5 hover:bg-muted-foreground/20"
              >
                <IconX className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>
      )}
    </div>
  )
}
