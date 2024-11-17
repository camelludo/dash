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
import { Download, Eye } from "lucide-react"

const documents = [
  {
    id: "DOC2024-001",
    title: "Commercial Invoice",
    type: "Invoice",
    contractId: "PRJ2024-0123",
    operationId: "OP2024-001",
    date: "2024-03-15",
    status: "Verified",
    size: "256 KB"
  },
  {
    id: "DOC2024-002",
    title: "Packing List",
    type: "Shipping",
    contractId: "PRJ2024-0123",
    operationId: "OP2024-001",
    date: "2024-03-15",
    status: "Verified",
    size: "128 KB"
  },
  {
    id: "DOC2024-003",
    title: "Quality Certificate",
    type: "Certificate",
    contractId: "PRJ2024-0123",
    operationId: "OP2024-001",
    date: "2024-03-14",
    status: "Pending Review",
    size: "512 KB"
  },
  {
    id: "DOC2024-004",
    title: "Bill of Lading",
    type: "Shipping",
    contractId: "PRJ2024-0123",
    operationId: "OP2024-001",
    date: "2024-03-16",
    status: "Draft",
    size: "384 KB"
  }
]

const getStatusColor = (status: string) => {
  const colors = {
    "Verified": "success",
    "Pending Review": "warning",
    "Draft": "secondary"
  } as const
  return colors[status as keyof typeof colors] || "default"
}

const getTypeColor = (type: string) => {
  const colors = {
    "Invoice": "default",
    "Shipping": "primary",
    "Certificate": "secondary"
  } as const
  return colors[type as keyof typeof colors] || "default"
}

export function DocumentsTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Document Details</TableHead>
            <TableHead>Related To</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Size</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {documents.map((doc) => (
            <TableRow key={doc.id}>
              <TableCell>
                <div>
                  <div className="font-medium">{doc.title}</div>
                  <div className="text-sm text-muted-foreground">
                    {doc.id}
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="text-sm">
                  <div>Contract: {doc.contractId}</div>
                  <div className="text-muted-foreground">
                    Operation: {doc.operationId}
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant={getTypeColor(doc.type)}>
                  {doc.type}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge variant={getStatusColor(doc.status)}>
                  {doc.status}
                </Badge>
              </TableCell>
              <TableCell>{doc.date}</TableCell>
              <TableCell>{doc.size}</TableCell>
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