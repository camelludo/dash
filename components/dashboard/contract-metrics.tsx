"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollText, Ship, DollarSign } from "lucide-react"

const metrics = [
  {
    title: "Active Contracts",
    value: "12",
    description: "↗ 2 new this month",
    icon: ScrollText
  },
  {
    title: "Ongoing Operations",
    value: "8",
    description: "↗ 3 in transit",
    icon: Ship
  },
  {
    title: "Total Value",
    value: "$2.4M",
    description: "↗ $420K this month",
    icon: DollarSign
  }
]

export function ContractMetrics() {
  return (
    <>
      {metrics.map((metric) => (
        <Card key={metric.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {metric.title}
            </CardTitle>
            <metric.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
            <p className="text-xs text-muted-foreground">
              {metric.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </>
  )
}