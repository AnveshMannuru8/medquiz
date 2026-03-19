import { PrismaAdapter } from "@auth/prisma-adapter"
import bcrypt from "bcryptjs"
import NextAuth, { type DefaultSession } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"

import { prisma } from "@/lib/prisma"

declare module "next-auth" {
    interface User {
        role?: string
    }
    interface Session {
        user: {
            id: string
            role?: string
        } & DefaultSession["user"]
    }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    trustHost: true,
    pages: {
        signIn: "/login",
    },
    providers: [
        ...(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET
            ? [
                  GoogleProvider({
                      clientId: process.env.GOOGLE_CLIENT_ID,
                      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                  }),
              ]
            : []),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                const email = typeof credentials?.email === "string" ? credentials.email : ""
                const password = typeof credentials?.password === "string" ? credentials.password : ""

                if (!email || !password) {
                    return null
                }

                const user = await prisma.user.findUnique({
                    where: { email: email.trim().toLowerCase() },
                    select: { id: true, email: true, name: true, role: true, passwordHash: true },
                })

                if (!user?.passwordHash) return null

                const isPasswordValid = await bcrypt.compare(password, user.passwordHash)
                if (!isPasswordValid) return null

                return {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    role: user.role,
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            const t = token as typeof token & { id?: string; role?: string }
            if (user) {
                t.role = user.role
                t.id = user.id
            }
            return t
        },
        async session({ session, token }) {
            if (session.user) {
                const t = token as typeof token & { id?: string; role?: string }
                session.user.role = t.role
                session.user.id = t.id || session.user.id
            }
            return session
        }
    }
})
