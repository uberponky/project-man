import Header from "@/components/Header"
import './styles.css'

export default async function RSLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="app-body">
      <Header />
      <div className="app-body__data">
        {children}
      </div>
    </div>
  )
}