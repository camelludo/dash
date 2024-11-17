"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileEdit, FileDown, Share2 } from "lucide-react"

const operation = {
  id: "OP2024-001",
  type: "Sea Freight",
  status: "In Transit",
  contract: "PRJ2024-0123",
  packages: "55 ISPM15 Wooden Crates"
}

const getStatusColor = (status: string) => {
  const colors = {
    "In Transit": "default",
    "Booking Phase": "secondary",
    "Production Ready": "warning",
    "Customs Clearance": "info",
    "Delivered": "success"
  } as const
  return colors[status as keyof typeof colors] || "default"
}

export function OperationHeader() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold tracking-tight">{operation.id}</h1>
          <Badge variant={getStatusColor(operation.status)}>{operation.status}</Badge>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <span>Contract: {operation.contract}</span>
          <span>•</span>
          <span>{operation.type}</span>
          <span>•</span>
          <span>{operation.packages}</span>
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
          Edit Operation
        </Button>
      </div>
    </div>
  )
}