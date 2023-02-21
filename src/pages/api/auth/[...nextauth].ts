import NextAuth from "next-auth";
import AppleProvider from "next-auth/providers/apple";
import GoogleProvider from "next-auth/providers/google";
import { appRouter } from "@/src/server/routers/_app";
import { createContext } from "@/src/server/context";

export default NextAuth({
  secret: process.env.SECRET,
  providers: [
    // OAuth authentication providers
    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET,
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    signIn: async ({ user }) => {
      console.log(user);

      if (!!user) {
        // sucessfullz logged in with provider
        // check if user exists in db
        const ctx = await createContext();
        const caller = appRouter.createCaller(ctx);

        caller.user.login({ email: user.email ?? "", providerId: user.id });

        return true;
      }
      return false;
    },
  },
});
