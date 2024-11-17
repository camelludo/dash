"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Boxes, ExternalLink, MapPin, ArrowRight, Container, Ship, Building2 } from "lucide-react"

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

const routeData = {
  origin: {
    port: "Izmir",
    terminal: "Izmir Alsancak Terminal",
    code: "TRIZM",
    country: "TR"
  },
  destination: {
    port: "Tanger Med",
    terminal: "Tanger Med Terminal 1",
    code: "MATNG",
    country: "MA"
  }
}

export function EquipmentAndRouteInfo() {
  return (
    <Card>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {/* Equipment Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Boxes className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Equipment</h3>
            </div>
            <div className="flex items-center gap-2 bg-primary/10 rounded-lg px-3 py-1.5">
              <Container className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">2 × 20' DC</span>
            </div>
          </div>
          <div className="grid gap-3">
            {equipment.map((container) => (
              <div
                key={container.number}
                className="flex items-center justify-between rounded-lg border p-3 hover:bg-muted/50 transition-colors"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{container.number}</span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground cursor-pointer hover:text-primary transition-colors" />
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
        </div>

        {/* Route Section */}
        <div className="border-t md:border-t-0 md:border-l border-border pt-6 md:pt-0 md:pl-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Route Information</h3>
            </div>
            <div className="flex items-center gap-2">
              <Ship className="h-4 w-4 text-muted-foreground" />
              <Badge variant="secondary">Sea Freight</Badge>
            </div>
          </div>
          
          <div className="space-y-4">
            {/* Port Route */}
            <div className="flex items-center gap-3">
              <div className="flex-1 flex items-center gap-2 bg-primary/10 rounded-lg px-3 py-2">
                <img
                  src={`https://flagcdn.com/24x18/${routeData.origin.country.toLowerCase()}.png`}
                  alt={routeData.origin.country}
                  className="h-4 rounded"
                />
                <div className="min-w-0">
                  <div className="font-medium truncate">{routeData.origin.port}</div>
                  <div className="text-sm text-muted-foreground">{routeData.origin.code}</div>
                </div>
              </div>

              <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />

              <div className="flex-1 flex items-center gap-2 bg-primary/10 rounded-lg px-3 py-2">
                <img
                  src={`https://flagcdn.com/24x18/${routeData.destination.country.toLowerCase()}.png`}
                  alt={routeData.destination.country}
                  className="h-4 rounded"
                />
                <div className="min-w-0">
                  <div className="font-medium truncate">{routeData.destination.port}</div>
                  <div className="text-sm text-muted-foreground">{routeData.destination.code}</div>
                </div>
              </div>
            </div>

            {/* Terminal Details */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2 p-3 rounded-lg bg-muted/50">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Building2 className="h-4 w-4" />
                  Origin Terminal
                </div>
                <p className="text-sm font-medium">{routeData.origin.terminal}</p>
              </div>

              <div className="space-y-2 p-3 rounded-lg bg-muted/50">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Building2 className="h-4 w-4" />
                  Destination Terminal
                </div>
                <p className="text-sm font-medium">{routeData.destination.terminal}</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}