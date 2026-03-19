import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import bcrypt from "bcryptjs"
import { adminDb } from "./firebase-admin"

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

import { DefaultSession } from "next-auth"

export const { handlers, auth, signIn, signOut } = NextAuth({
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    trustHost: true,
    pages: {
        signIn: "/login",
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "mock-client-id",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "mock-client-secret",
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null
                }

                const usersRef = adminDb.collection("users");
                const snapshot = await usersRef.where("email", "==", credentials.email).get();

                if (snapshot.empty) {
                    return null
                }

                const userDoc = snapshot.docs[0];
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const user = { id: userDoc.id, ...userDoc.data() } as any;

                if (!user || !user.passwordHash) {
                    return null
                }

                const isPasswordValid = await bcrypt.compare(
                    credentials.password as string,
                    user.passwordHash
                )

                if (!isPasswordValid) {
                    return null
                }

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
            if (user) {
                token.role = user.role
                token.id = user.id
            }
            return token
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.role = token.role as string
                session.user.id = token.id as string
            }
            return session
        }
    }
})
