"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileEdit, FileDown, Share2 } from "lucide-react"

const contract = {
  id: "PRJ2024-0123",
  title: "Dubai Marina Project",
  status: "Partially Shipped",
  progress: "3/5 Operations Complete"
}

const getStatusColor = (status: string) => {
  const colors = {
    "Lead/Inquiry": "secondary",
    "Quotation Phase": "warning",
    "Contract Negotiation": "warning",
    "Confirmed/In Production": "primary",
    "Partially Shipped": "default",
    "Completed": "success",
    "Cancelled/Lost": "destructive"
  } as const
  return colors[status as keyof typeof colors] || "default"
}

export function ContractHeader() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold tracking-tight">{contract.title}</h1>
          <Badge variant={getStatusColor(contract.status)}>{contract.status}</Badge>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <span>{contract.id}</span>
          <span>•</span>
          <span>{contract.progress}</span>
        </div>
      </div>
      <div className="flex gap-2">
        <Button variant="outline" size="sm">
          <FileDown className="mr-2 h-4 w-4" />
          Export
        </Button>
        <Button variant="outline" size="sm">
          <Share2 className="mr-2 h-4 w-4" />
          Share
        </Button>
        <Button size="sm">
          <FileEdit className="mr-2 h-4 w-4" />
          Edit Contract
        </Button>
      </div>
    </div>
  )
}