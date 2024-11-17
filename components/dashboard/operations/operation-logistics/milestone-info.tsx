"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Ship, Anchor, Package, Timer } from "lucide-react"

const milestoneData = {
  dates: {
    etd: "2024-03-15",
    eta: "2024-04-02",
    transitTime: "18 days"
  },
  milestones: {
    vesselDeparture: "2024-03-15 16:00",
    vesselArrival: "2024-04-02 08:00",
    finalDelivery: "2024-04-05 14:00"
  }
}

export function MilestoneInfo() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-primary" />
          Key Dates & Milestones
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Summary Grid */}
          <div className="grid grid-cols-3 gap-4 p-3 rounded-lg bg-muted/50">
            <div className="flex items-center gap-2">
              <Ship className="h-4 w-4 text-muted-foreground" />
              <div>
                <div className="text-xs text-muted-foreground">ETD</div>
                <div className="font-medium text-sm">{milestoneData.dates.etd}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Anchor className="h-4 w-4 text-muted-foreground" />
              <div>
                <div className="text-xs text-muted-foreground">ETA</div>
                <div className="font-medium text-sm">{milestoneData.dates.eta}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Timer className="h-4 w-4 text-muted-foreground" />
              <div>
                <div className="text-xs text-muted-foreground">Transit</div>
                <div className="font-medium text-sm">{milestoneData.dates.transitTime}</div>
              </div>
            </div>
          </div>

          {/* Detailed Timeline */}
          <dl className="grid gap-2">
            <div className="grid grid-cols-[auto,1fr,auto] items-center gap-3 p-2 rounded-lg hover:bg-muted/50">
              <Ship className="h-4 w-4 text-muted-foreground" />
              <dt className="text-sm text-muted-foreground">Vessel Departure</dt>
              <dd className="text-sm font-medium">{milestoneData.milestones.vesselDeparture}</dd>
            </div>
            <div className="grid grid-cols-[auto,1fr,auto] items-center gap-3 p-2 rounded-lg hover:bg-muted/50">
              <Anchor className="h-4 w-4 text-muted-foreground" />
              <dt className="text-sm text-muted-foreground">Vessel Arrival</dt>
              <dd className="text-sm font-medium">{milestoneData.milestones.vesselArrival}</dd>
            </div>
            <div className="grid grid-cols-[auto,1fr,auto] items-center gap-3 p-2 rounded-lg hover:bg-muted/50">
              <Package className="h-4 w-4 text-muted-foreground" />
              <dt className="text-sm text-muted-foreground">Final Delivery</dt>
              <dd className="text-sm font-medium">{milestoneData.milestones.finalDelivery}</dd>
            </div>
          </dl>
        </div>
      </CardContent>
    </Card>
  )
}