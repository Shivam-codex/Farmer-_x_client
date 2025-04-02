"use client"

import { QRCodeSVG } from "qrcode.react"
import { X } from "lucide-react"

interface QRModalProps {
  isOpen: boolean
  onClose: () => void
  paymentUrl: string
}

export function QRModal({ isOpen, onClose, paymentUrl }: QRModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Scan to Pay</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-white p-4 rounded-lg">
            <QRCodeSVG
              value={paymentUrl}
              size={200}
              level="H"
              includeMargin={true}
            />
          </div>
          <p className="mt-4 text-center text-gray-600">
            Scan this QR code with your payment app to complete the transaction
          </p>
        </div>
      </div>
    </div>
  )
} 