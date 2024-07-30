import { useEffect, useState } from 'react'

import { Api } from './api'
import { Card } from './components/ui/card'

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
      <Card>
        This is card
        {users}
      </Card>
    </>
  )
}
