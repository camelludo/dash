"use client"

import { ItemsTable } from "@/components/shared/items-table"

const items = [
  {
    packType: "Wooden Crate",
    packId: "PCK001",
    sku: "BM-P60X60",
    description: "Beige Marble Polished 60x60x2cm",
    quantity: 200,
    unit: "m²",
    weight: 2800,
    status: "Partially Shipped",
    shipmentDetails: {
      shipped: 120,
      inTransit: 40,
      remaining: 40
    }
  },
  {
    packType: "Wooden Crate",
    packId: "PCK002",
    sku: "BM-P60X60",
    description: "Beige Marble Polished 60x60x2cm",
    quantity: 150,
    unit: "m²",
    weight: 2100,
    status: "In Production",
    shipmentDetails: {
      shipped: 0,
      inTransit: 0,
      remaining: 150
    }
  },
  {
    packType: "Wooden Crate",
    packId: "PCK003",
    sku: "BM-P30X60",
    description: "Beige Marble Polished 30x60x2cm",
    quantity: 100,
    unit: "m²",
    weight: 1400,
    status: "Shipped",
    shipmentDetails: {
      shipped: 100,
      inTransit: 0,
      remaining: 0
    }
  }
]

export function ContractItems() {
  return <ItemsTable items={items} />
}