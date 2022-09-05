import NextAuth from "next-auth"
import Auth0Provider from "next-auth/providers/auth0"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from '../../../lib/prisma'



export default NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
    Auth0Provider({
      //@ts-ignore
      clientId: process.env.AUTH0_ID,
      //@ts-ignore
      clientSecret: process.env.AUTH0_SECRET,
      issuer: process.env.AUTH0_ISSUER
    }),
  ],
  // secret: process.env.SECRET,

  // session: {
  //   strategy: 'jwt'

  // },
  // jwt: {
  //   secret: process.env.SECRET,
  // },

  pages: {
  },

  callbacks: {
  },
  events: {},

  debug: false,
})