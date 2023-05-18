import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest): Promise<NextResponse | undefined> {
    return NextResponse.next()
}

export const config = {
    matcher: ['/checkout/address', '/checkout/summary'],
}
