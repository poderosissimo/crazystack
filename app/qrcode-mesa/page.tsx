'use client'

import { useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function QRCodeGenerator({ restaurantId }: { restaurantId: string }) {
  const [tableCount, setTableCount] = useState(1)
  const [generatedCodes, setGeneratedCodes] = useState<string[]>([])

  const generateQRCodes = () => {
    const codes = Array.from({ length: tableCount }, (_, i) => {
      const tableId = i + 1
      return `https://yourdomain.com/${restaurantId}/${tableId}`
    })
    setGeneratedCodes(codes)
  }

  const printQRCodes = () => {
    const printWindow = window.open('', '_blank')
    if (printWindow) {
      printWindow.document.write('<html><head><title>QR Codes</title></head><body>')
      generatedCodes.forEach((url, index) => {
        printWindow.document.write(`
          <div style="page-break-after: always; text-align: center; margin-bottom: 20px;">
            <h2>Table ${index + 1}</h2>
            ${QRCodeSVG({ value: url, size: 256 })}
            <p>${url}</p>
          </div>
        `)
      })
      printWindow.document.write('</body></html>')
      printWindow.document.close()
      printWindow.print()
    }
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>QR Code Generator</CardTitle>
        <CardDescription>Generate QR codes for your restaurant tables</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="tableCount">Number of Tables</Label>
            <Input
              id="tableCount"
              type="number"
              min="1"
              value={tableCount}
              onChange={(e) => setTableCount(parseInt(e.target.value) || 1)}
            />
          </div>
          <Button onClick={generateQRCodes} className="w-full">Generate QR Codes</Button>
        </div>
      </CardContent>
      {generatedCodes.length > 0 && (
        <CardFooter className="flex-col items-start space-y-4">
          <h3 className="text-lg font-semibold">Generated QR Codes</h3>
          <div className="grid grid-cols-2 gap-4">
            {generatedCodes.map((url, index) => (
              <div key={index} className="text-center">
                <QRCodeSVG value={url} size={128} />
                <p className="mt-2 text-sm">Table {index + 1}</p>
              </div>
            ))}
          </div>
          <Button onClick={printQRCodes} className="w-full">Print QR Codes</Button>
        </CardFooter>
      )}
    </Card>
  )
}