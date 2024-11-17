"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"

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
    },
    carrier: "CMA CGM",
    vessel: "CMA CGM JACQUES SAADE",
    voyage: "ME1-E-123"
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
    },
    carrier: "MSC",
    vessel: "MSC GULSUN",
    voyage: "AE1-W-456"
  }
]

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

export function OperationsTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Operation Details</TableHead>
            <TableHead>Route</TableHead>
            <TableHead>Carrier Info</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Cargo</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {operations.map((operation) => (
            <TableRow key={operation.id}>
              <TableCell>
                <div>
                  <div className="font-medium">{operation.id}</div>
                  <div className="text-sm text-muted-foreground">
                    Contract: {operation.contractId}
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-1 text-sm">
                  <span className="font-medium">{operation.ports.origin.name}</span>
                  <span className="text-muted-foreground">({operation.ports.origin.code})</span>
                  <span className="mx-1">→</span>
                  <span className="font-medium">{operation.ports.destination.name}</span>
                  <span className="text-muted-foreground">({operation.ports.destination.code})</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  ETD: {operation.dates.etd} • ETA: {operation.dates.eta}
                </div>
              </TableCell>
              <TableCell>
                <div className="text-sm">
                  <div>{operation.carrier}</div>
                  <div className="text-muted-foreground">
                    {operation.vessel} • {operation.voyage}
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant={getStatusColor(operation.status)}>
                  {operation.status}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="text-sm">
                  <div>{operation.packages} packages</div>
                  <div className="text-muted-foreground">
                    {operation.volume} • {operation.weight}
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="icon">
                  <Eye className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}