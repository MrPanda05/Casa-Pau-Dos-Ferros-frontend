import SimpleHeader from "@/components/common/SimpleHeader";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Perfil",
  description: "Seu perfil",
};
export default function LoginLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div>
        <SimpleHeader />
        <div>
          {children}
        </div>
      </div>)
}
