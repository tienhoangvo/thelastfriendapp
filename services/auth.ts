import { SignJWT, jwtVerify } from 'jose'

export const ACCESS_TOKEN = 'accessToken'

export const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET!

export const signToken = (sub: string) =>
  new SignJWT({})
    .setSubject(sub)
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('2h')
    .sign(new TextEncoder().encode(ACCESS_TOKEN_SECRET))

export const verifyToken = async (token: string) =>
  jwtVerify(token, new TextEncoder().encode(ACCESS_TOKEN_SECRET))
