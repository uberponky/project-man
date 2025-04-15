import { File, UsersRound, LogOut } from 'lucide-react'
import Link from 'next/link'
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components'
import { Button } from '@/components/ui/button'
// import { ModeToggle } from '@/components/ModeToggle'
import NavButton from '@/components/NavButton'
// import { NavButtonMenu } from '@/components/NavButtonMenu'
import './styles.css'

export default function Header() {
  return (
    <header className="app-header">
      <div className="app-header__wrapper">
        <div className="app-header__branding">
          {/* <NavButton href="/home" label="home" icon={HomeIcon} /> */}
          <Link href="/home" className="flex justify-center items-center gap-2 ml-0" title="Home">
            <svg className="app-header__logo" id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 89.65 89.65"><g id="Layer_1-2"><rect x="28.91" y="28.91" width="31.84" height="31.84"/><path d="M44.82,0C20.07,0,0,20.07,0,44.82s20.07,44.82,44.82,44.82,44.82-20.07,44.82-44.82S69.58,0,44.82,0ZM66.89,66.89H22.75V22.75h44.14v44.14Z"/></g></svg>
            <h1 className="hidden sm:block text-xl font-bold m-0">Blank Box</h1>
          </Link>
        </div>
        <div className="app-header__nav-wrapper">
          <div className="app-header__nav">
            <NavButton href="/tickets" label="tickets" icon={File}>Tickets</NavButton>
            <NavButton href="/customers" label="Search Customers" icon={UsersRound}>Customers</NavButton>
            {/* <NavButtonMenu 
              icon={UsersRound}
              label="Customers Menu"
              choices={[
                { title: "Search Customers", href: "/customers"},
                { title: "New Customer", href: "/customers/form"},
              ]}
            /> */}
            {/* <ModeToggle /> */}
            <div className="spacer"></div>
            <Button 
              variant="ghost"
              size="icon"
              aria-label="LogOut"
              title="LogOut"
              className="rounded-full"
              asChild
            >
              <LogoutLink>
                <LogOut />
              </LogoutLink>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}