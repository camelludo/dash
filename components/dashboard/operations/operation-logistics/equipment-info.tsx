"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Boxes, ExternalLink } from "lucide-react"

const equipment = [
  {
    number: "CMAU1234567",
    type: "20' DC",
    status: "In Transit",
    seal: "SL123456"
  },
  {
    number: "CMAU7654321",
    type: "20' DC",
    status: "In Transit",
    seal: "SL123457"
  }
]

export function EquipmentInfo() {
  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <Boxes className="h-5 w-5 text-primary" />
          Equipment
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3">
          {equipment.map((container) => (
            <div
              key={container.number}
              className="flex items-center justify-between rounded-lg border p-3"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{container.number}</span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground cursor-pointer" />
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span>{container.type}</span>
                  <span>•</span>
                  <span>Seal: {container.seal}</span>
                </div>
              </div>
              <Badge variant="secondary">{container.status}</Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}