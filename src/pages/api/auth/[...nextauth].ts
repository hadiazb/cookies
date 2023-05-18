import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import Credentials from 'next-auth/providers/credentials'

// db
import { checkUserEmailPassword } from 'database'

export const authOptions = {
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
                console.log({ credentials })

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
    callbacks: {
        async jwt({ token, account, user }: any) {
            console.log({ token, account, user })

            if (account) {
                token.accessToken = account.access_token
                switch (account.type) {
                    case 'oauth':
                        //
                        break
                    case 'credential':
                        token.user = user
                        break
                }
            }

            return token
        },
        async session({ session, token, user }: any) {
            console.log({ session, token, user })
            return session
        },
    },
}
export default NextAuth(authOptions)
