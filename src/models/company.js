import { get } from 'lodash'

export const schema = model => {
  const values = {}

  values.company_name = get(model, 'company_name')

  return values
}
