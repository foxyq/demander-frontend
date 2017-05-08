import { get } from 'lodash'

export const schema = model => {
  const values = {}

  values.title = get(model, 'title')
  // POKUS
  values.goal = get(model, 'goal')
  values.input = get(model, 'input')
  values.output = get(model, 'output')
  values.timeplan = get(model, 'timeplan')
  values.budget = get(model, 'budget')
  values.description = get(model, 'description')
  values.responsible_person = get(model, 'responsible_person')
  values.company = get(model, 'company')

  return values
}
