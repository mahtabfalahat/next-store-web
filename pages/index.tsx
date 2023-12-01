import { Layout } from "@/components/Layout";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="text-center py-16">
        <h1 className="text-5xl font-bold text-gray-800">Welcome to Our Store</h1>
        <p className="mt-4 text-lg text-gray-600">Discover amazing products for every need.</p>
      </header>
    </div>
  )
}
