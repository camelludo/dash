"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const metrics = [
  {
    title: "Total Volume",
    value: "1,250 m²",
    progress: 60,
    trend: "450 m² shipped"
  },
  {
    title: "Total Weight",
    value: "98.5 tons",
    progress: 60,
    trend: "35.4 tons shipped"
  },
  {
    title: "Total Value",
    value: "$850,000",
    progress: 45,
    trend: "$382,500 invoiced"
  },
  {
    title: "Operations",
    value: "3/5",
    progress: 60,
    trend: "2 in progress"
  }
]

export function ContractMetricsGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <Card key={metric.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {metric.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
            <Progress value={metric.progress} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">
              {metric.trend}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}