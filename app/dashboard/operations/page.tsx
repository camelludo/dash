import { Metadata } from "next"
import { OperationCard } from "@/components/dashboard/operations/operation-card"

export const metadata: Metadata = {
  title: "Operations - Global Stone Trading Platform",
  description: "Track and manage your global shipping operations",
}

const operations = [
  {
    id: "OP2024-001",
    type: "Sea Freight",
    packages: {
      count: 55,
      type: "ISPM15 Wooden Crates"
    },
    status: "In Transit",
    volume: "520 m²",
    weight: "41.2 tons",
    dates: {
      etd: "2024-03-15",
      eta: "2024-04-02"
    },
    ports: {
      origin: {
        code: "TRIZM",
        name: "Izmir",
        country: "TR"
      },
      destination: {
        code: "MATNG",
        name: "Tanger Med",
        country: "MA"
      }
    }
  },
  {
    id: "OP2024-002",
    type: "Sea Freight",
    packages: {
      count: 42,
      type: "ISPM15 Wooden Crates"
    },
    status: "Booking Phase",
    volume: "380 m²",
    weight: "29.8 tons",
    dates: {
      etd: "2024-03-20",
      eta: "2024-04-08"
    },
    ports: {
      origin: {
        code: "TRIZM",
        name: "Izmir",
        country: "TR"
      },
      destination: {
        code: "GBFXT",
        name: "Felixstowe",
        country: "GB"
      }
    }
  }
]

export default function OperationsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Operations</h1>
        <p className="text-muted-foreground">
          Track and manage your global shipping operations
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {operations.map((operation) => (
          <OperationCard key={operation.id} operation={operation} />
        ))}
      </div>
    </div>
  )
}