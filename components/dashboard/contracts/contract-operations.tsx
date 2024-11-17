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

export function ContractOperations() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Operation ID</TableHead>
            <TableHead>Route</TableHead>
            <TableHead>Dates</TableHead>
            <TableHead>Cargo</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {operations.map((operation) => (
            <TableRow key={operation.id}>
              <TableCell>{operation.id}</TableCell>
              <TableCell>
                <div className="flex items-center gap-1 text-sm">
                  <span className="font-medium">{operation.ports.origin.name}</span>
                  <span className="text-muted-foreground">({operation.ports.origin.code})</span>
                  <span className="mx-1">→</span>
                  <span className="font-medium">{operation.ports.destination.name}</span>
                  <span className="text-muted-foreground">({operation.ports.destination.code})</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="text-sm">
                  <div>ETD: {operation.dates.etd}</div>
                  <div>ETA: {operation.dates.eta}</div>
                </div>
              </TableCell>
              <TableCell>
                <div className="text-sm">
                  <div>{operation.packages} packages</div>
                  <div className="text-muted-foreground">
                    {operation.volume} • {operation.weight}
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant={operation.status === "In Transit" ? "default" : "secondary"}>
                  {operation.status}
                </Badge>
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