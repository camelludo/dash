"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Ship, Calendar } from "lucide-react"

const operations = [
  {
    id: "OP2024-001",
    contractId: "PRJ2024-0123",
    type: "FCL",
    packages: 24,
    status: "In Transit",
    volume: "520 m²",
    weight: "41.2 tons",
    dates: {
      etd: "2024-03-15",
      eta: "2024-04-02"
    },
    ports: {
      origin: {
        code: "TRIZM",
        name: "Izmir",
        country: "TR"
      },
      destination: {
        code: "MATNG",
        name: "Tanger Med",
        country: "MA"
      }
    }
  },
  {
    id: "OP2024-002",
    contractId: "PRJ2024-0124",
    type: "FCL",
    packages: 18,
    status: "Booking Phase",
    volume: "380 m²",
    weight: "29.8 tons",
    dates: {
      etd: "2024-03-20",
      eta: "2024-04-08"
    },
    ports: {
      origin: {
        code: "TRIZM",
        name: "Izmir",
        country: "TR"
      },
      destination: {
        code: "GBFXT",
        name: "Felixstowe",
        country: "GB"
      }
    }
  }
]

export function RecentOperations() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Operations</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {operations.map((operation) => (
            <div key={operation.id} className="flex items-start space-x-4">
              <div className="rounded-lg bg-primary/10 p-2">
                <Ship className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">
                    {operation.id} • {operation.type}
                  </p>
                  <Badge variant={operation.status === "In Transit" ? "default" : "secondary"}>
                    {operation.status}
                  </Badge>
                </div>
                <div className="text-sm text-muted-foreground">
                  {operation.packages} packages • {operation.volume} • {operation.weight}
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <span className="font-medium">{operation.ports.origin.name}</span>
                    <span className="text-muted-foreground">({operation.ports.origin.code})</span>
                  </div>
                  <span>→</span>
                  <div className="flex items-center gap-1">
                    <span className="font-medium">{operation.ports.destination.name}</span>
                    <span className="text-muted-foreground">({operation.ports.destination.code})</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>ETD: {operation.dates.etd}</span>
                  <span>•</span>
                  <span>ETA: {operation.dates.eta}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}