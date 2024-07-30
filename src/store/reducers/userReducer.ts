const initialState: User[] = []

export const userReducer = (state = initialState, action: any): User[] => {
  switch (action.type) {
    case '': {
      return state
    }
    default:
      return state
  }
}

export type User = {
  address: Address
  company: Company
  email: string
  id: number
  name: string
  phone: string
  username: string
  website: string
}

type Address = {
  city: string
  geo: Geo
  street: string
  suite: string
  zipcode: string
}

type Geo = {
  lat: string
  lng: string
}
type Company = {
  bs: string
  catchPhrase: string
  name: string
}
