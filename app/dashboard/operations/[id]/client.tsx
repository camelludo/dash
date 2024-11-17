"use client"

import { OperationHeader } from "@/components/dashboard/operations/operation-header"
import { OperationTimeline } from "@/components/dashboard/operations/operation-timeline"
import { OperationLogistics } from "@/components/dashboard/operations/operation-logistics"
import { OperationItems } from "@/components/dashboard/operations/operation-items"
import { OperationDocuments } from "@/components/dashboard/operations/operation-documents"
import { OperationQC } from "@/components/dashboard/operations/operation-qc"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function OperationDetailsClient({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col gap-8">
      <OperationHeader />
      <OperationTimeline />
      
      <Tabs defaultValue="logistics" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="logistics">Logistics</TabsTrigger>
          <TabsTrigger value="items">Items</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="qc">Quality Control</TabsTrigger>
        </TabsList>
        
        <TabsContent value="logistics" className="mt-6">
          <OperationLogistics />
        </TabsContent>
        
        <TabsContent value="items" className="mt-6">
          <OperationItems />
        </TabsContent>
        
        <TabsContent value="documents" className="mt-6">
          <OperationDocuments />
        </TabsContent>
        
        <TabsContent value="qc" className="mt-6">
          <OperationQC />
        </TabsContent>
      </Tabs>
    </div>
  )
}