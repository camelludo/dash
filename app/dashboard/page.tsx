import { Metadata } from 'next'
import { ContractOverview } from '@/components/dashboard/contract-overview'
import { DashboardHeader } from '@/components/dashboard/dashboard-header'
import { RecentOperations } from '@/components/dashboard/recent-operations'
import { ContractMetrics } from '@/components/dashboard/contract-metrics'

export const metadata: Metadata = {
  title: 'Dashboard - Global Stone Trading Platform',
  description: 'Client dashboard for managing natural stone trading operations',
}

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <DashboardHeader />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ContractMetrics />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <ContractOverview />
        <RecentOperations />
      </div>
    </div>
  )
}