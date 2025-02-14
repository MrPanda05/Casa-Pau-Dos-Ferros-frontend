import type { Metadata } from "next";


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
      <div>
        {children}
      </div>)
  }
