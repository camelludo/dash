"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Eye, 
  Ship, 
  Package, 
  Calendar,
  Navigation,
  ArrowRight,
  Timer,
  CircleDollarSign
} from "lucide-react"
import Link from "next/link"

interface OperationCardProps {
  operation: {
    id: string
    type: string
    packages: {
      count: number
      type: string
    }
    status: string
    volume: string
    weight: string
    dates: {
      etd: string
      eta: string
    }
    ports: {
      origin: {
        code: string
        name: string
        country: string
      }
      destination: {
        code: string
        name: string
        country: string
      }
    }
  }
}

export function OperationCard({ operation }: OperationCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="pt-6">
        <div className="flex flex-col gap-6">
          {/* Header with Status */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-primary/10 p-2">
                <Ship className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">{operation.id}</h3>
                <p className="text-sm text-muted-foreground">
                  {operation.type}
                </p>
              </div>
            </div>
            <Badge variant={operation.status === "In Transit" ? "default" : "secondary"}>
              {operation.status}
            </Badge>
          </div>

          {/* Carrier Logo */}
          <div className="flex items-center justify-between border-b pb-4">
            <div className="h-8">
              <img
                src="https://seeklogo.com/images/C/cma-cgm-logo-E2520752DE-seeklogo.com.png"
                alt="CMA CGM"
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CircleDollarSign className="h-4 w-4" />
              <span>CIF</span>
            </div>
          </div>

          {/* Route Information */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <img
                src={`https://flagcdn.com/24x18/${operation.ports.origin.country.toLowerCase()}.png`}
                alt={operation.ports.origin.country}
                className="h-4 rounded"
              />
              <div className="flex flex-col">
                <span className="font-medium">{operation.ports.origin.name}</span>
                <span className="text-muted-foreground">{operation.ports.origin.code}</span>
              </div>
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground" />
            <div className="flex items-center gap-2">
              <div className="flex flex-col items-end">
                <span className="font-medium">{operation.ports.destination.name}</span>
                <span className="text-muted-foreground">{operation.ports.destination.code}</span>
              </div>
              <img
                src={`https://flagcdn.com/24x18/${operation.ports.destination.country.toLowerCase()}.png`}
                alt={operation.ports.destination.country}
                className="h-4 rounded"
              />
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-secondary/50">
              <Package className="h-4 w-4 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">Packages</span>
              <span className="font-medium">{operation.packages.count}</span>
            </div>
            <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-secondary/50">
              <Navigation className="h-4 w-4 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">Volume</span>
              <span className="font-medium">{operation.volume}</span>
            </div>
            <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-secondary/50">
              <Timer className="h-4 w-4 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">Weight</span>
              <span className="font-medium">{operation.weight}</span>
            </div>
          </div>

          {/* Dates */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <div>
                <span className="text-muted-foreground">ETD: </span>
                <span className="font-medium">{operation.dates.etd}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <div>
                <span className="text-muted-foreground">ETA: </span>
                <span className="font-medium">{operation.dates.eta}</span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <Link href={`/dashboard/operations/${operation.id}`}>
            <Button className="w-full" variant="outline">
              <Eye className="mr-2 h-4 w-4" />
              View Details
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}