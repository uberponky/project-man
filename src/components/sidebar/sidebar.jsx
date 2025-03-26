import Logo from "@/public/bb_logo.svg"
import styles from "./page.module.css"

export default function sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar__header}>
        <Logo className={styles.sidebar__logo}/>
      </div>
      <ul className={styles.sidebar__nav}>
        <li>Status</li>
        <li>Clients</li>
      </ul>
      
    </aside>
  )
}
