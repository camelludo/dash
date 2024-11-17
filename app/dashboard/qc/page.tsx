import { Metadata } from "next"
import { QCHeader } from "@/components/dashboard/qc/qc-header"
import { QCTable } from "@/components/dashboard/qc/qc-table"

export const metadata: Metadata = {
  title: "Quality Control - Global Stone Trading Platform",
  description: "Monitor and manage quality control for your stone products",
}

export default function QCPage() {
  return (
    <div className="flex flex-col gap-8">
      <QCHeader />
      <QCTable />
    </div>
  )
}