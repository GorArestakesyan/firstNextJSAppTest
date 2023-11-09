"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import styles from "../header/header.module.css";

function GoogleButton() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/profile";
  return (
    <button
      onClick={() => signIn("google", { callbackUrl })}
      className={styles.googleButton}
    >
      Sign in with Google
    </button>
  );
}

export default GoogleButton;
