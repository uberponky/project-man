import Form from "next/form"
import { Input } from "@/components/ui/input"
import SearchButton from "@/components/SearchButton"

type Props = {
  searchType: string
}

export default function SearchForm({ searchType }: Props) {
  return (
    <Form
      action={`/${searchType}`}
      className="flex gap-2 items-center"
      >
      <Input 
        name="searchText"
        type="text"
        placeholder={`Search ${searchType}`}
        className="w-full"
      />
      <SearchButton />
    </Form>
  )
}