"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, Download } from "lucide-react"

const qcReports = [
  {
    id: "QC2024-001",
    type: "Pre-Production Sample",
    date: "2024-03-10",
    status: "Approved",
    inspector: "John Smith",
    photos: 12,
    documents: 3
  },
  {
    id: "QC2024-002",
    type: "Production Inspection",
    date: "2024-03-12",
    status: "Approved",
    inspector: "John Smith",
    photos: 24,
    documents: 2
  },
  {
    id: "QC2024-003",
    type: "Loading Supervision",
    date: "2024-03-14",
    status: "In Progress",
    inspector: "Sarah Johnson",
    photos: 8,
    documents: 1
  }
]

export function ContractQC() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-4">
          {qcReports.map((report) => (
            <div
              key={report.id}
              className="flex items-center justify-between p-4 border rounded-lg"
            >
              <div className="flex items-center gap-4">
                <div>
                  <div className="font-medium">{report.type}</div>
                  <div className="text-sm text-muted-foreground">
                    {report.id} • {report.date}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Inspector: {report.inspector}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-sm text-right">
                  <div>{report.photos} photos</div>
                  <div className="text-muted-foreground">
                    {report.documents} documents
                  </div>
                </div>
                <Badge
                  variant={
                    report.status === "Approved"
                      ? "success"
                      : report.status === "In Progress"
                      ? "warning"
                      : "secondary"
                  }
                >
                  {report.status}
                </Badge>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}