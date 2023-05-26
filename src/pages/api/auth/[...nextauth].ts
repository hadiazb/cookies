/* eslint-disable @typescript-eslint/no-explicit-any */
import NextAuth, { AuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import Credentials from 'next-auth/providers/credentials'

// db
import { checkUserEmailPassword, oAUthToDbUser } from 'database'

export const authOptions: AuthOptions = {
    providers: [
        Credentials({
            name: 'Custom Login',
            credentials: {
                email: {
                    label: 'Correo',
                    type: 'email',
                    placeholder: 'correo@google.com',
                },
                password: {
                    label: 'Contraseña',
                    type: 'password',
                    placeholder: 'Contraseña',
                },
            },
            async authorize(credentials): Promise<any> {
                if (!credentials) {
                    return null
                }

                return await checkUserEmailPassword(credentials.email, credentials.password)
            },
        }),

        GithubProvider({
            clientId: process.env.GITHUB_ID || '',
            clientSecret: process.env.GITHUB_SECRET || '',
        }),
    ],

    pages: {
        signIn: '/auth/login',
        newUser: '/auth/register',
    },

    session: {
        maxAge: 2592000,
        strategy: 'jwt',
        updateAge: 86400,
    },

    callbacks: {
        async jwt({ token, account, user }) {
            if (account) {
                token.accessToken = account.access_token
                switch (account.type) {
                    case 'oauth':
                        token.user = await oAUthToDbUser(user.email || '', user.name || '')
                        break
                    case 'credentials':
                        token.user = user
                        break
                }
            }

            return token
        },
        async session({ session, token }: any) {
            session.accessToken = token.accessToken
            session.user = token.user
            return session
        },
    },
}
export default NextAuth(authOptions)
