"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const contractInfo = {
  client: {
    name: "Dubai Properties LLC",
    contact: "Ahmed Al Mansouri",
    email: "ahmed@dubaiproperties.ae"
  },
  details: {
    startDate: "15.10.2024",
    incoterms: "CIF Dubai Port",
    paymentTerms: "LC at Sight",
    currency: "USD",
    origin: "Turkey",
    destination: "United Arab Emirates"
  }
}

export function ContractInfo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contract Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="font-semibold mb-4">Client Details</h3>
            <dl className="space-y-2">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Company</dt>
                <dd className="font-medium">{contractInfo.client.name}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Contact Person</dt>
                <dd className="font-medium">{contractInfo.client.contact}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Email</dt>
                <dd className="font-medium">{contractInfo.client.email}</dd>
              </div>
            </dl>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contract Details</h3>
            <dl className="space-y-2">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Start Date</dt>
                <dd className="font-medium">{contractInfo.details.startDate}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Incoterms</dt>
                <dd className="font-medium">{contractInfo.details.incoterms}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Payment Terms</dt>
                <dd className="font-medium">{contractInfo.details.paymentTerms}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Currency</dt>
                <dd className="font-medium">{contractInfo.details.currency}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Origin</dt>
                <dd className="font-medium">{contractInfo.details.origin}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Destination</dt>
                <dd className="font-medium">{contractInfo.details.destination}</dd>
              </div>
            </dl>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}