import { ContractOverview } from "@/components/dashboard/contract-overview"
import { ContractMetrics } from "@/components/dashboard/contract-metrics"
import { ContractsHeader } from "@/components/dashboard/contracts/contracts-header"
import { ContractsTable } from "@/components/dashboard/contracts/contracts-table"

export const metadata = {
  title: "Contracts - Global Stone Trading Platform",
  description: "Manage your stone trading contracts",
}

export default function ContractsPage() {
  return (
    <div className="flex flex-col gap-8">
      <ContractsHeader />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ContractMetrics />
      </div>
      <div className="grid gap-6">
        <ContractsTable />
      </div>
    </div>
  )
}