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
        <div className="app-body__top-bar">Tickets</div>
        <div className="app-body__data-wrapper">
          <TicketSearch />
          {results.length 
            ? <TicketTable data={results}/> 
            : <p className="mt-4">No results found</p>
          }
        </div>
      </>
    )
  }

  // Query search results
  const results = await getTicketSearchResults(searchText)

  return (
    <>
      <div className="app-body__top-bar">Tickets</div>
      <div className="app-body__data-wrapper">
        <TicketSearch />
        {results.length 
          ? <TicketTable data={results}/> 
          : <p className="mt-4">No results found</p>
        }
      </div>
    </>
  )
}