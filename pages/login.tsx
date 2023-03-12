import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactEventHandler } from 'react'
import { userSchema } from '../models/schemas'

const LoginPage = () => {
  const router = useRouter()
  const formSubmitHandler: ReactEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    const parsedData = userSchema
      .pick({ username: true, password: true })
      .safeParse(Object.fromEntries(formData))

    if (parsedData.success === false) {
      return
    }

    const loginPayload = parsedData.data

    const data = await fetch('/api/auth/login', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginPayload),
      method: 'POST',
    }).then((res) => res.json())

    router.push('/')
  }
  return (
    <div>
      <Link href="/">Home</Link>
      <h1>Login</h1>
      <form onSubmit={formSubmitHandler}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            autoComplete="username"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="password"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default LoginPage
