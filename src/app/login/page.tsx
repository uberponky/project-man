import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components"
import { Button } from "@/components/ui/button"

import React from 'react'

export default function Login() {
  return (
    <main className="h-dvh flex flex-col items-center gap-6">
      <h1>Burblys Brews Login</h1>
      <Button asChild>
        <LoginLink>Sign in</LoginLink>
      </Button>
    </main>
  )
}


