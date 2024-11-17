"use client"

import { ShippingInfo } from "./operation-logistics/shipping-info"
import { EquipmentAndRouteInfo } from "./operation-logistics/equipment-and-route-info"

export function OperationLogistics() {
  return (
    <div className="grid gap-6">
      <ShippingInfo />
      <EquipmentAndRouteInfo />
    </div>
  )
}