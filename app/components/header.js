import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import styles from "./header.module.css";
function Header() {
  const session = useSession();
  console.log(session);
  return (
    <header className={styles.headerContainer}>
      <Link href={"/"}>NextJS</Link>
      <nav className={styles.navbar}>
        <Link href={"/"} className={styles.link}>
          Home
        </Link>
        <Link href={"/about"} className={styles.link}>
          About
        </Link>
        {session?.data && (
          <Link href={"/profile"} className={styles.link}>
            Profile
          </Link>
        )}
        {session?.data ? (
          <Link
            href={"/"}
            onClick={() => signOut({ callbackUrl: "/" })}
            className={styles.link}
          >
            Sign Out
          </Link>
        ) : (
          <Link href={"/api/auth/signin"} className={styles.link}>
            Sign In
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
