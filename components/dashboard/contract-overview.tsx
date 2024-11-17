"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Eye, Building2, CalendarDays, AlertCircle, Ship } from "lucide-react"
import Link from "next/link"

const contracts = [
  {
    id: "PRJ2024-0123",
    title: "Dubai Marina Project",
    startDate: "15.10.2024",
    status: "On Hold",
    alert: "Material quality inspection pending",
    operations: {
      total: 5,
      completed: 3,
      inProgress: 1
    },
    metrics: {
      volume: "1,250 m²",
      weight: "98.5 tons",
      packages: "56 crates",
      value: "83,731.24 €",
      completion: 60
    }
  },
  {
    id: "PRJ2024-0124",
    title: "London Residential Complex",
    startDate: "20.10.2024",
    status: "In Production",
    operations: {
      total: 4,
      completed: 1,
      inProgress: 2
    },
    metrics: {
      volume: "850 m²",
      weight: "67.2 tons",
      packages: "42 crates",
      value: "62,450.00 €",
      completion: 25
    }
  }
]

const getStatusColor = (status: string) => {
  const colors = {
    "Lead/Inquiry": "secondary",
    "Quotation Phase": "warning",
    "Contract Negotiation": "warning",
    "Confirmed/In Production": "primary",
    "On Hold": "destructive",
    "Partially Shipped": "default",
    "Completed": "success",
    "Cancelled/Lost": "destructive"
  } as const
  return colors[status as keyof typeof colors] || "default"
}

export function ContractOverview() {
  return (
    <div className="space-y-6">
      {contracts.map((contract) => (
        <Card key={contract.id} className="relative">
          <CardContent className="pt-6">
            <div className="space-y-4">
              {/* Contract Header */}
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold">{contract.title}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <code className="relative rounded bg-muted px-[0.5rem] py-[0.2rem] font-mono text-sm">
                      {contract.id}
                    </code>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Badge variant={getStatusColor(contract.status)}>
                    {contract.status}
                  </Badge>
                  <Link href={`/dashboard/contracts/${contract.id}`}>
                    <Button variant="ghost" size="icon">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Alert Message if exists */}
              {contract.alert && (
                <div className="flex items-center gap-2 text-sm text-destructive bg-destructive/10 rounded-md p-2">
                  <AlertCircle className="h-4 w-4" />
                  <span>{contract.alert}</span>
                </div>
              )}

              {/* Contract Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-2 p-3 rounded-lg bg-primary/10">
                  <div className="text-xs text-primary">Total Volume</div>
                  <div className="text-lg font-semibold">{contract.metrics.volume}</div>
                </div>
                <div className="space-y-2 p-3 rounded-lg bg-primary/10">
                  <div className="text-xs text-primary">Total Weight</div>
                  <div className="text-lg font-semibold">{contract.metrics.weight}</div>
                </div>
                <div className="space-y-2 p-3 rounded-lg bg-primary/10">
                  <div className="text-xs text-primary">Packages</div>
                  <div className="text-lg font-semibold">{contract.metrics.packages}</div>
                </div>
                <div className="space-y-2 p-3 rounded-lg bg-primary/10">
                  <div className="text-xs text-primary">Contract Value</div>
                  <div className="text-lg font-semibold">{contract.metrics.value}</div>
                </div>
              </div>

              {/* Operations and Timeline */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <Ship className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Operations:</span>
                  <span className="font-medium">{contract.operations.completed}</span>
                  <span className="text-muted-foreground">completed,</span>
                  <span className="font-medium">{contract.operations.inProgress}</span>
                  <span className="text-muted-foreground">in progress</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarDays className="h-4 w-4" />
                  Started {contract.startDate}
                </div>
              </div>
              <Progress value={contract.metrics.completion} className="h-2" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}