import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactEventHandler } from 'react'
import Button from '../components/Button'
import Form from '../components/Form'
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
    <div className="mx-auto w-full md:w-1/3 lg:w-1/5 mt-4">
      <Link href="/">Home</Link>
      <h1 className="text-xl font-bold text-center my-3">Login</h1>
      <Form onSubmit={formSubmitHandler}>
        <Form.Field>
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Input
            type="text"
            name="username"
            id="username"
            autoComplete="username"
            required
          />
        </Form.Field>
        <Form.Field>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Input
            type="password"
            name="password"
            id="password"
            autoComplete="password"
            required
          />
        </Form.Field>
        <Button
          color="primary"
          type="submit"
        >
          Submit
        </Button>
        <Button
          color="secondary"
          type="submit"
        >
          Submit
        </Button>
        <Button
          color="tertiary"
          type="submit"
          disabled
        >
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default LoginPage
