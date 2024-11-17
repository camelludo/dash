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
import { Eye, Download } from "lucide-react"

const qcReports = [
  {
    id: "QC2024-001",
    type: "Pre-Production Sample",
    contractId: "PRJ2024-0123",
    operationId: "OP2024-001",
    material: "Beige Marble",
    date: "2024-03-10",
    status: "Approved",
    inspector: "John Smith",
    photos: 12,
    documents: 3
  },
  {
    id: "QC2024-002",
    type: "Production Inspection",
    contractId: "PRJ2024-0123",
    operationId: "OP2024-001",
    material: "Beige Marble",
    date: "2024-03-12",
    status: "Approved",
    inspector: "John Smith",
    photos: 24,
    documents: 2
  },
  {
    id: "QC2024-003",
    type: "Loading Supervision",
    contractId: "PRJ2024-0123",
    operationId: "OP2024-001",
    material: "Beige Marble",
    date: "2024-03-14",
    status: "In Progress",
    inspector: "Sarah Johnson",
    photos: 8,
    documents: 1
  },
  {
    id: "QC2024-004",
    type: "Pre-Production Sample",
    contractId: "PRJ2024-0124",
    operationId: "OP2024-002",
    material: "Grey Travertine",
    date: "2024-03-15",
    status: "Pending Review",
    inspector: "Mike Wilson",
    photos: 15,
    documents: 2
  }
]

const getStatusColor = (status: string) => {
  const colors = {
    "Approved": "success",
    "In Progress": "warning",
    "Pending Review": "secondary",
    "Rejected": "destructive"
  } as const
  return colors[status as keyof typeof colors] || "default"
}

const getTypeColor = (type: string) => {
  const colors = {
    "Pre-Production Sample": "default",
    "Production Inspection": "primary",
    "Loading Supervision": "secondary"
  } as const
  return colors[type as keyof typeof colors] || "default"
}

export function QCTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Inspection Details</TableHead>
            <TableHead>Material</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Inspector</TableHead>
            <TableHead>Attachments</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {qcReports.map((report) => (
            <TableRow key={report.id}>
              <TableCell>
                <div>
                  <div className="font-medium">{report.id}</div>
                  <div className="text-sm text-muted-foreground">
                    {report.date}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Contract: {report.contractId}
                  </div>
                </div>
              </TableCell>
              <TableCell>{report.material}</TableCell>
              <TableCell>
                <Badge variant={getTypeColor(report.type)}>
                  {report.type}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge variant={getStatusColor(report.status)}>
                  {report.status}
                </Badge>
              </TableCell>
              <TableCell>{report.inspector}</TableCell>
              <TableCell>
                <div className="text-sm">
                  <div>{report.photos} photos</div>
                  <div className="text-muted-foreground">
                    {report.documents} documents
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}