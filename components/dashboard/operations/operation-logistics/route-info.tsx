"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, ArrowRight } from "lucide-react"

const routeData = {
  origin: {
    port: "Izmir, Turkey",
    terminal: "Izmir Alsancak Terminal",
    code: "TRIZM-0001",
    country: "TR"
  },
  destination: {
    port: "Tanger Med, Morocco",
    terminal: "Tanger Med Terminal 1",
    code: "MATNG-0001",
    country: "MA"
  }
}

export function RouteInfo() {
  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-primary" />
          Route Information
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-[1fr,auto,1fr] items-start gap-4">
          {/* Origin */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <img
                src={`https://flagcdn.com/24x18/${routeData.origin.country.toLowerCase()}.png`}
                alt={routeData.origin.country}
                className="h-4 rounded"
              />
              <h3 className="font-medium">Origin</h3>
            </div>
            <dl className="space-y-1 text-sm">
              <div className="flex items-center gap-2">
                <dt className="text-muted-foreground">Port:</dt>
                <dd className="font-medium">{routeData.origin.port}</dd>
              </div>
              <div className="flex items-center gap-2">
                <dt className="text-muted-foreground">Terminal:</dt>
                <dd className="font-medium">{routeData.origin.terminal}</dd>
              </div>
              <div className="flex items-center gap-2">
                <dt className="text-muted-foreground">Code:</dt>
                <dd className="font-medium">{routeData.origin.code}</dd>
              </div>
            </dl>
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-center pt-6">
            <ArrowRight className="h-5 w-5 text-muted-foreground" />
          </div>

          {/* Destination */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <img
                src={`https://flagcdn.com/24x18/${routeData.destination.country.toLowerCase()}.png`}
                alt={routeData.destination.country}
                className="h-4 rounded"
              />
              <h3 className="font-medium">Destination</h3>
            </div>
            <dl className="space-y-1 text-sm">
              <div className="flex items-center gap-2">
                <dt className="text-muted-foreground">Port:</dt>
                <dd className="font-medium">{routeData.destination.port}</dd>
              </div>
              <div className="flex items-center gap-2">
                <dt className="text-muted-foreground">Terminal:</dt>
                <dd className="font-medium">{routeData.destination.terminal}</dd>
              </div>
              <div className="flex items-center gap-2">
                <dt className="text-muted-foreground">Code:</dt>
                <dd className="font-medium">{routeData.destination.code}</dd>
              </div>
            </dl>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}