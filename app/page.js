'use client'
import { useState } from 'react';

function QRCodeGenerator() {
  const [amount, setAmount] = useState('');
  const [qrCodeData, setQrCodeData] = useState(null);
  const [UpiId, setUpiId] = useState('')
  const [payerName, setPayerName] = useState('')

  const generateQRCode = () => {
    const upiUrl = `upi://pay?pa=${encodeURIComponent(UpiId)}&pn=${encodeURIComponent(payerName)}&am=${encodeURIComponent(amount)}&cu=INR`;
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=225x225&data=${encodeURIComponent(upiUrl)}`;
    setQrCodeData(qrCodeUrl);
  };

  const resetForm = () => {
    setAmount('');
    setQrCodeData(null);
    setUpiId('')
    setPayerName('')
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 px-4">
      {!qrCodeData ? (
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4 text-center">Generate UPI QR Code</h1>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="name"
              id="name"
              value={payerName}
              onChange={(e) => setPayerName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="upiId" className="block text-gray-700 text-sm font-bold mb-2">
              UPI ID / VPA
            </label>
            <input
              type="text"
              id="upiId"
              value={UpiId}
              onChange={(e) => setUpiId(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="amount" className="block text-gray-700 text-sm font-bold mb-2">
              Amount (INR)
            </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <button
            onClick={generateQRCode}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Generate QR Code
          </button>
        </div>
      ) : (
        <div className="text-center bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
          <h1 className="text-2xl font-bold mb-4">{payerName}</h1>
          <p className="text-3xl font-bold text-gray-900 mb-4">₹{amount}</p>
          <img src={qrCodeData} alt="Generated QR Code" className="mx-auto mb-4" />
          <p className="text-gray-700 mb-4">{UpiId}</p>
          <div className="text-gray-700 text-sm mb-4">
            Scan and pay with any BHIM UPI app
            <div className="flex justify-center mt-4 space-x-4">
              <img src="/logos/BHIM.svg" alt="BHIM" className="h-6" />
              <img src="/logos/UPI.svg" alt="UPI" className="h-6" />
            </div>
            <div className="flex justify-center mt-2 space-x-4">
              <img src="/logos/gpay.svg" alt="GPay" className="h-4" />
              <img src="/logos/phonepe.svg" alt="PhonePe" className="h-4" />
              <img src="/logos/paytm.svg" alt="Paytm" className="h-4" />
              <img src="/logos/amazonpay.svg" alt="Amazon Pay" className="h-4" />
            </div>
          </div>
          <button
            onClick={resetForm}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Create New QR Code
          </button>
        </div>
      )}
    </div>
  );
}

export default QRCodeGenerator;