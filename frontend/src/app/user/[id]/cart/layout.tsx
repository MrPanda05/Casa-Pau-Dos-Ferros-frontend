import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Seu carrinho",
  description: "Seu carrinho",
};
export default function LoginLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div>
        {children}
      </div>)
}
