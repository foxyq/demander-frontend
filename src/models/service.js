import { get } from 'lodash'

export const schema = model => {
  const values = {}

  values.title = get(model, 'title')
  values.category = get(model, 'category')
  values.location = get(model, 'location')
  values.description = get(model, 'description')
  values.company = get(model, 'company')

  return values
}
