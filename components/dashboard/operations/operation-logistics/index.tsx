"use client"

import { ShippingInfo } from "./shipping-info"
import { EquipmentAndRouteInfo } from "./equipment-and-route-info"

export function OperationLogistics() {
  return (
    <div className="grid gap-6">
      <ShippingInfo />
      <EquipmentAndRouteInfo />
    </div>
  )
}