import { get } from 'lodash'

export const schema = model => {
  const values = {}

  values.title = get(model, 'title')

  return values
}
