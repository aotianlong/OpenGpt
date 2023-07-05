import { RATE_LIMIT_COUNT } from '@/utils/constants'
import { validateLicenseKey } from '@/utils/lemon'
import { GenerateApiInput } from '@/utils/types'
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'
import { isDev } from './utils/isDev'

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.fixedWindow(RATE_LIMIT_COUNT, '1 d'),
  analytics: true, // <- Enable analytics
})

export const config = {
  matcher: '/api/generate',
}

export default async function middleware(
  request: NextRequest,
  event: NextFetchEvent
): Promise<Response | undefined> {
  return NextResponse.next()
}

function runOutOfRatelimit(errorCode: number) {
  return new NextResponse(JSON.stringify({ success: false, message: '' }), {
    status: errorCode,
    headers: { 'content-type': 'application/json' },
  })
}
