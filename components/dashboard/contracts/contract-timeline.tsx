import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  FileCheck, FileText, Ship, DollarSign, 
  PackageCheck, AlertCircle, CheckCircle2
} from "lucide-react"

const timeline = [
  {
    date: "2024-03-15",
    title: "Contract Signed",
    description: "Contract documentation completed and signed by all parties",
    icon: FileCheck,
    status: "completed"
  },
  {
    date: "2024-03-16",
    title: "Payment Received",
    description: "Initial payment of €25,119.37 received",
    icon: DollarSign,
    status: "completed"
  },
  {
    date: "2024-03-18",
    title: "Production Started",
    description: "Material production initiated at factory",
    icon: PackageCheck,
    status: "completed"
  },
  {
    date: "2024-03-20",
    title: "Quality Control Alert",
    description: "Material quality inspection pending",
    icon: AlertCircle,
    status: "alert",
    alert: true
  },
  {
    date: "2024-04-01",
    title: "First Shipment",
    description: "Preparing documentation for first shipment",
    icon: Ship,
    status: "pending"
  },
  {
    date: "2024-04-15",
    title: "Final Documentation",
    description: "Preparing final contract documentation",
    icon: FileText,
    status: "pending"
  }
]

const getStatusColor = (status: string, alert: boolean = false) => {
  if (alert) return "destructive"
  const colors = {
    "completed": "success",
    "pending": "secondary",
    "alert": "destructive"
  } as const
  return colors[status as keyof typeof colors] || "default"
}

export function ContractTimeline() {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 top-6 bottom-6 w-px bg-border" />

          {/* Timeline Events */}
          <div className="space-y-8">
            {timeline.map((event, index) => (
              <div key={index} className="relative flex gap-4">
                <div className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0",
                  event.alert ? "bg-destructive/10" : "bg-primary/10"
                )}>
                  <event.icon className={cn(
                    "w-6 h-6",
                    event.alert ? "text-destructive" : "text-primary"
                  )} />
                </div>
                <div className="flex-1 pt-1.5 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{event.title}</h3>
                    <Badge variant={getStatusColor(event.status, event.alert)}>
                      {event.status === "completed" && <CheckCircle2 className="w-3 h-3 mr-1" />}
                      {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {event.description}
                  </p>
                  <div className="text-sm text-muted-foreground">
                    {event.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}