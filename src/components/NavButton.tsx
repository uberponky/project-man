import { LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type Props = {
  icon: LucideIcon,
  label: string,
  href?: string,
  children?: React.ReactNode
}

export default function NavButton({icon: Icon, label, href, children}: Props) {
  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={label}
      title={label}
      className="app-header__nav-button"
      asChild
    >
      {href ? (
        <Link href={href}>
          <Icon />
          {children ? <div className="app-header__nav-button-text">{children}</div> : null}
        </Link>
      ) : (
        <Icon />
      )}
    </Button>
  )
}