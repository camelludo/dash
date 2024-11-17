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
import { Progress } from "@/components/ui/progress"
import { Eye } from "lucide-react"

const contracts = [
  {
    id: "PRJ2024-0123",
    title: "Dubai Marina Project",
    startDate: "15.10.2024",
    status: "Partially Shipped",
    progress: 60,
    value: "$850,000",
    operations: "3/5",
    client: "Dubai Properties LLC"
  },
  {
    id: "PRJ2024-0124",
    title: "London Residential Complex",
    startDate: "20.10.2024",
    status: "In Production",
    progress: 25,
    value: "$620,000",
    operations: "1/4",
    client: "UK Development Ltd"
  },
  {
    id: "PRJ2024-0125",
    title: "Qatar Hotel Project",
    startDate: "01.11.2024",
    status: "Contract Negotiation",
    progress: 0,
    value: "$1,200,000",
    operations: "0/6",
    client: "Qatar Hospitality Group"
  }
]

const getStatusColor = (status: string) => {
  const colors = {
    "Partially Shipped": "default",
    "In Production": "secondary",
    "Contract Negotiation": "warning"
  } as const
  return colors[status as keyof typeof colors] || "default"
}

export function ContractsTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Contract</TableHead>
            <TableHead>Client</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Progress</TableHead>
            <TableHead>Operations</TableHead>
            <TableHead>Value</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contracts.map((contract) => (
            <TableRow key={contract.id}>
              <TableCell>
                <div>
                  <div className="font-medium">{contract.title}</div>
                  <div className="text-sm text-muted-foreground">
                    {contract.id} • Started {contract.startDate}
                  </div>
                </div>
              </TableCell>
              <TableCell>{contract.client}</TableCell>
              <TableCell>
                <Badge variant={getStatusColor(contract.status)}>
                  {contract.status}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="w-40">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-muted-foreground">
                      {contract.progress}%
                    </span>
                  </div>
                  <Progress value={contract.progress} />
                </div>
              </TableCell>
              <TableCell>{contract.operations}</TableCell>
              <TableCell>{contract.value}</TableCell>
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