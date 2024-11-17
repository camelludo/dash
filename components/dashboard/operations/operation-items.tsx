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
    status: "Shipped"
  },
  {
    packType: "Wooden Crate",
    packId: "PCK002",
    sku: "BM-P60X60",
    description: "Beige Marble Polished 60x60x2cm",
    quantity: 150,
    unit: "m²",
    weight: 2100,
    status: "In Production"
  },
  {
    packType: "Wooden Crate",
    packId: "PCK003",
    sku: "BM-P30X60",
    description: "Beige Marble Polished 30x60x2cm",
    quantity: 100,
    unit: "m²",
    weight: 1400,
    status: "In Production"
  }
]

export function OperationItems() {
  return <ItemsTable items={items} />
}