import SigninForm from "../components/SigninForm";
import GoogleButton from "../components/googleButton/googleButton";
import styles from "./signin.module.css";
function SignIn() {
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.pageTitle}>Sign In</h1>
      <GoogleButton />
      <h3 className={styles.pageTitle}>or</h3>
      <div>
        <SigninForm />
      </div>
    </div>
  );
}

export default SignIn;
