import { isDev } from './isDev'

export const HOST_URL = isDev
  ? 'http://localhost:3020'
  : `https://${process.env.VERCEL_URL}` // can only be used on the server
