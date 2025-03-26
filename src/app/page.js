import Image from "next/image"
import { Suspense } from 'react'
import styles from "./page.module.css"
import Sidebar from "@/components/sidebar/sidebar"

export default async function Home() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = await res.json()
  const slicedData = data.slice(0,5)
  
  
  return (
    <div className={styles.page}>
      <Sidebar />
      <main className={styles.main}>
        <Suspense fallback={<div>Loading...</div>}>
          <ul>
            {slicedData.map(todo => (
              <li key={todo.id}>
                {todo.title}
              </li>
            ))
            }
          </ul>
        </Suspense>
      </main>
    </div>
  );
}
