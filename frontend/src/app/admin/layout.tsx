import type { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Admin dashboard",
  description: "admin dashboard",
};
export default function LojaLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="">
        <h1 className="text-center font-bold text-red-500 text-2xl">
            <Link href={'/admin'}> Admin dashboard</Link>
        </h1>
        {children}
      </div>)
  }
