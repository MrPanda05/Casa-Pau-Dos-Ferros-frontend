import Header from "@/components/common/Header";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Loja | Casa Pau dos ferros",
  description: "Loja cheia de produtos esperando por você!",
};
export default function LojaLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div>
        <Header />
        {children}
      </div>)
  }
