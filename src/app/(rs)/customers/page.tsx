import type { Metadata } from "next"
import SearchForm from "@/components/SearchForm"
import { getCustomerSearchResults } from "@/lib/queries/getCustomerSearchResults"
import CustomerTable from "@/app/(rs)/customers/CustomerTable"

export const metadata: Metadata = {
  title: "Customer Search"
};

export default async function Customers({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>
}) {
  const { searchText } = await searchParams

  // Search form
  if (!searchText) return (
    <>
      <div className="app-body__top-bar">Customers</div>
      <div className="app-body__data-wrapper">
        <SearchForm searchType="customers" />
      </div>
    </>
  )

  // Query database
  const results = await getCustomerSearchResults(searchText)

  return (
    <>
      <div className="app-body__top-bar">Customers</div>
      <div className="app-body__data-wrapper">
        <SearchForm searchType="customers" />
        { results.length
          ? <CustomerTable data={results} />
          : <p className="mt-4">No results found</p>
        }
      </div>
    </>
  )

  // Return results
  return (null)
}