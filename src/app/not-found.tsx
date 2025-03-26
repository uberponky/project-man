import Link from 'next/link'

export const metadata = {
  title: "Page Not Found",
}
 
export default function NotFound() {
  return (
    <div className="px-2 w-full h-dvh flex flex-col justify-center text-center">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}