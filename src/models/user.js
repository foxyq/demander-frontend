import { get } from 'lodash'

export const schema = model => {
  const values = {}

  values.name = get(model, 'name')
  values.email = get(model, 'email')
  values.password = get(model, 'password')

  return values
}
