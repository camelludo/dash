import { Metadata } from "next"
import { DocumentsTable } from "@/components/dashboard/documents/documents-table"
import { DocumentsHeader } from "@/components/dashboard/documents/documents-header"

export const metadata: Metadata = {
  title: "Documents - Global Stone Trading Platform",
  description: "Manage your stone trading documents and certificates",
}

export default function DocumentsPage() {
  return (
    <div className="flex flex-col gap-8">
      <DocumentsHeader />
      <DocumentsTable />
    </div>
  )
}