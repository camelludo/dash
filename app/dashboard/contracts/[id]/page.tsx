import { Metadata } from "next"
import { ContractHeader } from "@/components/dashboard/contracts/contract-header"
import { ContractInfo } from "@/components/dashboard/contracts/contract-info"
import { ContractMetricsGrid } from "@/components/dashboard/contracts/contract-metrics-grid"
import { ContractCalendar } from "@/components/dashboard/contracts/contract-calendar"
import { ContractItems } from "@/components/dashboard/contracts/contract-items"
import { ContractOperations } from "@/components/dashboard/contracts/contract-operations"
import { ContractFinancials } from "@/components/dashboard/contracts/contract-financials"
import { ContractDocuments } from "@/components/dashboard/contracts/contract-documents"
import { ContractQC } from "@/components/dashboard/contracts/contract-qc"
import { ContractTimeline } from "@/components/dashboard/contracts/contract-timeline"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// This generates the static paths for all contract IDs at build time
export function generateStaticParams() {
  return [
    { id: 'PRJ2024-0123' },
    { id: 'PRJ2024-0124' },
  ]
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  return {
    title: `Contract ${params.id} - Global Stone Trading Platform`,
    description: `View and manage details for contract ${params.id}`,
  }
}

export default function ContractDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col gap-8">
      <ContractHeader />
      <ContractInfo />
      <ContractMetricsGrid />
      
      <Tabs defaultValue="operations" className="w-full">
        <TabsList className="grid w-full grid-cols-6 lg:grid-cols-7">
          <TabsTrigger value="operations">Operations</TabsTrigger>
          <TabsTrigger value="items">Items</TabsTrigger>
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
          <TabsTrigger value="financials">Financials</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="qc">Quality Control</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
        </TabsList>
        
        <TabsContent value="operations" className="mt-6">
          <ContractOperations />
        </TabsContent>
        
        <TabsContent value="items" className="mt-6">
          <ContractItems />
        </TabsContent>
        
        <TabsContent value="calendar" className="mt-6">
          <ContractCalendar />
        </TabsContent>
        
        <TabsContent value="financials" className="mt-6">
          <ContractFinancials />
        </TabsContent>
        
        <TabsContent value="documents" className="mt-6">
          <ContractDocuments />
        </TabsContent>
        
        <TabsContent value="qc" className="mt-6">
          <ContractQC />
        </TabsContent>
        
        <TabsContent value="timeline" className="mt-6">
          <ContractTimeline />
        </TabsContent>
      </Tabs>
    </div>
  )
}