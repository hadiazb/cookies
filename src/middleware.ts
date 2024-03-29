import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest): Promise<NextResponse> {
    const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

    if (!session) {
        const requestPage = req.nextUrl.pathname
        const url = req.nextUrl.clone()
        url.pathname = `/auth/login`
        url.search = `page=${requestPage}`

        return NextResponse.redirect(url)
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/checkout/address', '/checkout/summary', '/orders/history'],
}
