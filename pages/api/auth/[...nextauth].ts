import NextAuth from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../lib/prisma";

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Auth0Provider({
      //@ts-ignore
      clientId: process.env.AUTH0_ID,
      //@ts-ignore
      clientSecret: process.env.AUTH0_SECRET,
      issuer: process.env.AUTH0_ISSUER,
    }),
  ],
  // secret: process.env.SECRET,

  // session: {
  //   strategy: 'jwt'

  // },
  // jwt: {
  //   secret: process.env.SECRET,
  // },

  pages: {},

  callbacks: {
     async session({ session, token, user }) { 
      //@ts-ignore
      return session 
    
    },
    //async redirect({ url, baseUrl }) { return baseUrl },
     //async signIn({ user, account, profile, email, credentials }) { return true },
     async jwt({ token, user, isNewUser }) {
      
      if (isNewUser) {
        const accounts = await prisma.tenant.findFirst({
          where: {
            users: {
              some: {
                userId: user?.id,
              },
            },
          },
        });
        if (!accounts) {
          await prisma.tenant.create({
            //@ts-ignore
            data: {
              name: "meu tenant",
              users: {
                //@ts-ignore
                userId: user?.id,
                image: "",
                slug: " meu tenant",
                plan: "free",
              },
            },
          });
        }
      }
      return token;
    },
  },

  events: {},

  debug: false,
});
