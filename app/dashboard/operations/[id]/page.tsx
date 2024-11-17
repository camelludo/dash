import { Metadata } from "next"
import { OperationDetailsClient } from "./client"

export const metadata: Metadata = {
  title: "Operation Details - Global Stone Trading Platform",
  description: "View and manage operation details",
}

// This generates the static paths for all operation IDs at build time
export function generateStaticParams() {
  return [
    { id: 'OP2024-001' },
    { id: 'OP2024-002' },
  ]
}

export default function OperationDetailsPage({ params }: { params: { id: string } }) {
  return <OperationDetailsClient params={params} />
}