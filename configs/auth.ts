import fakeData from "@/app/utils/fakeData";
import type { AuthOptions, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
const authConfig: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    Credentials({
      credentials: {
        email: { label: "Email", type: "email", required: true },
        password: { label: "Password", type: "password", required: true },
      },
      async authorize(credentials) {
        if (!credentials?.email && !credentials?.password) return null;
        // I prepared the database in advance in this case it plays the role of a dummy backend
        const currentUser = fakeData.find(
          (user: User) => user.email === credentials.email
        );
        if (currentUser && currentUser.password === credentials.password) {
          // we don’t need to send the password to the external interface And therefore we pull the password from the user
          const { password, ...userWithoutPassword } = currentUser;
          return userWithoutPassword as User;
        }
        return null;
      },
    }),
  ],
};
export default authConfig;
