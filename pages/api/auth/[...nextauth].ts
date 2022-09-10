import NextAuth from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../lib/prisma";
import { NextAuthOptions } from "next-auth";
import Tenant from "../tenants";

export const authOptions: NextAuthOptions = {
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

  session: {
    strategy: 'jwt'

  },
  // jwt: {
  //   secret: process.env.SECRET,
  // },

  pages: {},

  callbacks: {
     async session({ session, token, user }) {
      //@ts-ignore
      session.user.id = token.sub
      console.log(session)
      return session

     },
    // async redirect({ url, baseUrl }) {  return baseUrl    },
    //async signIn({ user, account, profile, email, credentials }) { return true },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (isNewUser) {
        const accounts = await prisma.tenant.findFirst({
          where: {
            users:{
              some:{
                //@ts-ignore
                userId: user.id,
              }
            }
            
           
          },
        });
        if (!accounts) {
        const tenant = await prisma.tenant.create({
            data: {
              name: "meu tenant",            
              image: "",
              slug: " meutenant",
              plan: "free",
            },
          });
          const userOnTenant = await prisma.userOnTenants.create({
            data: {
              //@ts-ignore
              userId: user.id,
              tenantId: tenant.id,
              role: 'owner'
            }
          })
        }
      }
      return token;
    }
  },

  events: {},

  debug: true,
};
export default NextAuth(authOptions);
