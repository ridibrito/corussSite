import NextAuth from "next-auth"
import Auth0Provider from "next-auth/providers/auth0"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from '../../../lib/prisma'


interface Props {
    clientId: String
    clientSecret: String
}

export default NextAuth({
    adapter: PrismaAdapter(prisma),
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_ID,
      clientSecret: process.env.AUTH0_SECRET,
      domain: process.env.AUTH0_DOMAIN,
    }),
  ],
//   secret: process.env.SECRET,

//   session: {
//     strategy: 'jwt'

//   },
//   jwt: {
//     secret: process.env.SECRET,
//   },

  pages: {
  },

  callbacks: {
  },
  events: {},

  debug: false,
})