import { useEffect, useState } from 'react'

import { Api } from './api'
import { SignIn } from './components/ui/signIn'

export function App() {
  const [users, setUsers] = useState<any>(null)

  useEffect(() => {
    Api.getUsers().then(res => {
      setUsers(res.data)
      console.log(res.data)
    })
  }, [])

  return (
    <>
      <SignIn />
    </>
  )
}
