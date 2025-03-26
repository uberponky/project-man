import { getCustomer } from "@/lib/queries/getCustomer"
import { getTicket } from "@/lib/queries/getTicket"
import { BackButton } from "@/components/BackButton"
import TicketForm from "./TicketForm"

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { Users, init as kindeInit } from "@kinde/management-api-js"

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>
}) {
  const { customerId, ticketId } = await searchParams
  if (!customerId && !ticketId) return {
    title: "Missing Ticket ID or Customer ID"
  } 

  if (customerId) return {
    title: `New Ticket for Customer #${customerId}`
  }

  return {
    title: `Edit Ticket #${ticketId}`
  }
}

export default async function TicketFormPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>
}) {
  try {
    const { customerId, ticketId } = await searchParams

    if (!customerId && !ticketId) {
      return (
        <>
          <h2 className="text-2xl mb-2">Ticket ID or customer ID required to load ticket form</h2>
          <BackButton title="Go Back" variant="default"/>
        </>
      )
    }

    const { getPermission, getUser } = getKindeServerSession()
    const [managerPermission, user] = await Promise.all([
      getPermission("manager"),
      getUser()
    ])
    const isManager = managerPermission?.isGranted

    // New ticket form
    if(customerId) {
      const customer = await getCustomer(parseInt(customerId))

      if (!customer) {
        return (
          <>
            <h2 className="text-2xl mb-2">Customer ID #{customerId} not found</h2>
            <BackButton title="Go Back" variant="default"/>
          </>
        )
      }
      
      if (!customer.active) {
        return (
          <>
            <h2 className="text-2xl mb-2">Customer ID #{customerId} is not active</h2>
            <BackButton title="Go Back" variant="default"/>
          </>
        )
      }
      
      // Return ticket form
      if (isManager) {
        kindeInit() // Initialises the Kinde Management API
        const { users } = await Users.getUsers()
        const techs = users ? users.map(user => ({ id: user.email?.toLowerCase()!, description: user.email?.toLowerCase()!})) : [] // eslint-disable-line
        return <TicketForm customer={customer} techs={techs} isManager={isManager}/>
      } else { 
        return <TicketForm customer={customer}/>
      }
    }

    // Edit ticket form
    if (ticketId) {
      const ticket = await getTicket(parseInt(ticketId))

      if (!ticket) {
        return (
          <>
            <h2 className="text-2xl mb-2">Ticket ID #{ticketId} not found</h2>
            <BackButton title="Go Back" variant="default"/>
          </>
        )
      }

      const customer = await getCustomer(ticket.customerId)

      // Return ticket form
      if (isManager) {
        kindeInit() // Initialises the Kinde Management API
        const { users } = await Users.getUsers()
        const techs = users ? users.filter((user): user is { email: string } => typeof user.email === "string").map(user => ({ id: user.email?.toLowerCase(), description: user.email?.toLowerCase()})) : []
        return <TicketForm customer={customer} ticket={ticket} techs={techs} isManager={isManager}/>
      } else {
        // Check if tech is logged in
        const isEditable = user.email?.toLowerCase() === ticket.tech?.toLowerCase()
        return <TicketForm customer={customer} ticket={ticket} isEditable={isEditable}/>
      }
    }
  } catch (error) {
    if (error instanceof Error) {
      throw error
    }
  }
}