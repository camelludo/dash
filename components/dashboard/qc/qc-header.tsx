"use client"

import { Button } from "@/components/ui/button"
import { PlusCircle, FileDown, Camera } from "lucide-react"

export function QCHeader() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Quality Control</h1>
        <p className="text-muted-foreground">
          Monitor product quality and inspection reports
        </p>
      </div>
      <div className="flex gap-2">
        <Button variant="outline" size="sm">
          <FileDown className="mr-2 h-4 w-4" />
          Export Reports
        </Button>
        <Button variant="outline" size="sm">
          <Camera className="mr-2 h-4 w-4" />
          Upload Photos
        </Button>
        <Button size="sm">
          <PlusCircle className="mr-2 h-4 w-4" />
          New Inspection
        </Button>
      </div>
    </div>
  )
}