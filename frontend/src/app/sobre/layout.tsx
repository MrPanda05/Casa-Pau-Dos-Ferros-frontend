import Header from "@/components/common/Header";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Sobre | Casas Pau dos Ferros",
  description: "Gonheça a nossa história e saiba mais sobre a Casa Pau dos Ferros",
};
export default function SobreLayout({
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
