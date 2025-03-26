import { getOpenTickets } from "@/lib/queries/getOpenTickets"
import { getTicketSearchResults } from "@/lib/queries/getTicketSearchResults"
import TicketSearch from "@/app/(rs)/tickets/TicketSearch"
import TicketTable from "@/app/(rs)/tickets/TicketTable";

export const metadata = {
  title: "Tickets"
};

export default async function Tickets({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>
}) {
  const { searchText } = await searchParams

  // Query default results
  if (!searchText) {
    const results = await getOpenTickets()

    return (
      <>
        <TicketSearch />
        {results.length 
          ? <TicketTable data={results}/> 
          : <p className="mt-4">No results found</p>
        }
      </>
    )
  }

  // Query search results
  const results = await getTicketSearchResults(searchText)

  return (
    <>
      <TicketSearch />
      {results.length 
        ? <TicketTable data={results}/> 
        : <p className="mt-4">No results found</p>
      }
    </>
  )
}