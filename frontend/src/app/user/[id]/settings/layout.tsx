import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Suas configuracoes",
  description: "Suas configuracoes",
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
