import { DataTable } from "@/components/tables/properties/data-table"

export default function DashboardPage() {
  return (
    <div className="space-y-6 px-4 md:px-6 lg:px-8">
      {/* Page header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Properties</h1>
          <p className="text-muted-foreground">
            View and manage all your property listings and AI edits.
          </p>
        </div>
      </div>

      {/* Data table */}
      <DataTable />
    </div>
  )
}
