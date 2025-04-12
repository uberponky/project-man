import Link from "next/link"

export default function Home() {
  return (
    <div className="bg-home-color bg-home-img bg-cover bg-center">
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        <div className="flex flex-col gap-1 p-12 rounded-xl bg-black/20 w-4/5 sm:max-w-96 mx-auto text-white sm:2xl">
          <h1 className="text-2xl font-bold">Blank Box<br></br>Project Management</h1>
          <address>Jumbly Bumbly Test</address>
          <p>Jumbling and bumbling along Test</p>
          <Link href="https://blankbox.business" className="hover:underline">Blank Box Website</Link>
        </div>
      </main>
    </div>
  );
}
