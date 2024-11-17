"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Ship, Navigation, Package, Anchor, Timer, TrendingUp } from "lucide-react"

const shippingData = {
  carrier: {
    name: "CMA CGM",
    logo: "https://seeklogo.com/images/C/cma-cgm-logo-E2520752DE-seeklogo.com.png",
    service: "Mediterranean Express (MEX1)",
    bookingRef: "CMAU1234567",
    vessel: "CMA CGM JACQUES SAADE",
    voyage: "ME1-E-123",
    reliability: {
      score: "98%",
      trend: "↑ 2.3%",
      onTimeArrival: "96%",
      avgDelay: "0.4 days"
    }
  }
}

export function ShippingInfo() {
  return (
    <Card>
      <CardContent className="pt-6">
        {/* Header with Logo */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Ship className="h-6 w-6 text-primary" />
            <div>
              <h3 className="font-semibold text-lg">Shipping Line</h3>
              <p className="text-sm text-muted-foreground">Service Details & Reliability</p>
            </div>
          </div>
          <div className="h-12">
            <img
              src={shippingData.carrier.logo}
              alt={shippingData.carrier.name}
              className="h-full w-auto object-contain"
            />
          </div>
        </div>

        <div className="grid gap-8">
          {/* Main Info Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Navigation className="h-4 w-4" />
                Service
              </div>
              <p className="font-medium">{shippingData.carrier.service}</p>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Package className="h-4 w-4" />
                Booking Reference
              </div>
              <div className="flex items-center gap-2">
                <code className="relative rounded bg-muted px-[0.5rem] py-[0.2rem] font-mono text-sm font-semibold">
                  {shippingData.carrier.bookingRef}
                </code>
                <Badge variant="secondary" className="h-fit">Active</Badge>
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Ship className="h-4 w-4" />
                Vessel
              </div>
              <p className="font-medium">{shippingData.carrier.vessel}</p>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Anchor className="h-4 w-4" />
                Voyage
              </div>
              <p className="font-medium">{shippingData.carrier.voyage}</p>
            </div>
          </div>

          {/* Service Reliability Section */}
          <div className="grid grid-cols-4 gap-4 p-4 rounded-lg bg-muted/50">
            <div className="col-span-4 md:col-span-1 flex items-center gap-2 mb-2 md:mb-0">
              <TrendingUp className="h-4 w-4 text-primary" />
              <span className="font-medium">Service Reliability</span>
            </div>
            
            <div className="col-span-1 space-y-1 text-center">
              <div className="text-2xl font-bold text-primary">
                {shippingData.carrier.reliability.score}
              </div>
              <div className="text-xs text-muted-foreground">
                Reliability Score
              </div>
              <div className="text-xs text-green-600 font-medium">
                {shippingData.carrier.reliability.trend}
              </div>
            </div>

            <div className="col-span-1 space-y-1 text-center">
              <div className="text-2xl font-bold">
                {shippingData.carrier.reliability.onTimeArrival}
              </div>
              <div className="text-xs text-muted-foreground">
                On-Time Arrival
              </div>
            </div>

            <div className="col-span-1 space-y-1 text-center">
              <div className="text-2xl font-bold">
                {shippingData.carrier.reliability.avgDelay}
              </div>
              <div className="text-xs text-muted-foreground">
                Average Delay
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}