import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UPI QR Code Generator",
  description: "UPI QR Code Generator, an QR Code Generation tool to create QR code with custom amount and UPI ID. Developed by Shivanshu Karn.",
  author: "Shivanshu Karn",
  keywords: "UPI QR Code, QR Code Generator, UPI, Custom QR Code, Payment QR Code, UPI Payment, Shivanshu Karn",
  robots: "index, follow",
  charset: "UTF-8",
  ogTitle: "UPI QR Code Generator",
  ogDescription: "UPI QR Code Generator, an QR Code Generation tool to create QR code with custom amount and UPI ID. Developed by Shivanshu Karn.",
  ogUrl: "",
  ogImage: "",
  twitterCard: "summary_large_image",
  twitterTitle: "UPI QR Code Generator",
  twitterDescription: "UPI QR Code Generator, an QR Code Generation tool to create QR code with custom amount and UPI ID. Developed by Shivanshu Karn.",
  twitterImage: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}