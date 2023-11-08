import Link from "next/link";
import styles from "./header.module.css";
function Header() {
  return (
    <header className={styles.headerContainer}>
      <span>NextJS</span>
      <nav className={styles.navbar}>
        <Link href={"/"} className={styles.link}>
          Home
        </Link>
        <Link href={"/about"} className={styles.link}>
          About
        </Link>
      </nav>
    </header>
  );
}

export default Header;
