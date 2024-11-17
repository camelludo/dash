"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign } from "lucide-react"

const financials = {
  totalValue: 850000,
  paid: 382500,
  pending: 467500,
  transactions: [
    {
      id: "TRX001",
      date: "2024-03-01",
      type: "Payment Received",
      amount: 255000,
      status: "Completed"
    },
    {
      id: "TRX002",
      date: "2024-03-15",
      type: "Payment Received",
      amount: 127500,
      status: "Completed"
    },
    {
      id: "TRX003",
      date: "2024-04-01",
      type: "Invoice Issued",
      amount: 467500,
      status: "Pending"
    }
  ]
}

export function ContractFinancials() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Financial Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <dl className="space-y-4">
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Total Contract Value</dt>
              <dd className="font-medium">${financials.totalValue.toLocaleString()}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Amount Paid</dt>
              <dd className="font-medium text-green-600">${financials.paid.toLocaleString()}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Amount Pending</dt>
              <dd className="font-medium text-yellow-600">${financials.pending.toLocaleString()}</dd>
            </div>
          </dl>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {financials.transactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="rounded-full p-2 bg-primary/10">
                    <DollarSign className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">{transaction.type}</div>
                    <div className="text-sm text-muted-foreground">{transaction.date}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={transaction.status === "Completed" ? "text-green-600" : "text-yellow-600"}>
                    ${transaction.amount.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">{transaction.status}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}