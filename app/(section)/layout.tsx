import Panel from "@/components/Panel"

export default function SectionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative">
    <Panel />
    {children}
    </div>
  )
}