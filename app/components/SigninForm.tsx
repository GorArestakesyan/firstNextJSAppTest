"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEventHandler } from "react";
import styles from "../signin/signin.module.css";

export default function SigninForm({}) {
  const router = useRouter();
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    if (res && !res.error) {
      router.push("/profile");
    }
    console.log(res.error);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.signinForm}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        className={styles.input}
        required
      ></input>
      <input
        type="password"
        name="password"
        placeholder="Password"
        className={styles.input}
        required
      ></input>
      <button type="submit" className={styles.signinBtn}>
        Sign in
      </button>
    </form>
  );
}
