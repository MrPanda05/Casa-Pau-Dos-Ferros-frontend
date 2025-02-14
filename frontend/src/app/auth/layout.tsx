import SimpleHeader from "@/components/common/SimpleHeader";

export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div>
        <SimpleHeader />
        <div className="h-svh overflow-scroll">
          {children}
        </div>
      </div>)
  }
