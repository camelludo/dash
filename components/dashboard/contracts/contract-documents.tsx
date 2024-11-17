"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Eye } from "lucide-react"

const documents = [
  {
    id: "DOC2024-001",
    title: "Commercial Invoice",
    type: "Invoice",
    date: "2024-03-15",
    status: "Verified",
    size: "256 KB"
  },
  {
    id: "DOC2024-002",
    title: "Packing List",
    type: "Shipping",
    date: "2024-03-15",
    status: "Verified",
    size: "128 KB"
  },
  {
    id: "DOC2024-003",
    title: "Quality Certificate",
    type: "Certificate",
    date: "2024-03-14",
    status: "Pending Review",
    size: "512 KB"
  }
]

export function ContractDocuments() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-4">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="flex items-center justify-between p-4 border rounded-lg"
            >
              <div className="flex items-center gap-4">
                <div>
                  <div className="font-medium">{doc.title}</div>
                  <div className="text-sm text-muted-foreground">
                    {doc.id} • {doc.date}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Badge variant={doc.status === "Verified" ? "success" : "warning"}>
                  {doc.status}
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