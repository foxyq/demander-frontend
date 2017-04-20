import { get } from 'lodash'

export const schema = model => {
  const values = {}

  values.company_name = get(model, 'company_name')
  values.company_id = get(model, 'company_id')
  values.company_vat_id = get(model, 'company_vat_id')
  values.company_about = get(model, 'company_about')
  values.company_description = get(model, 'company_description')
  values.company_opening_hours = get(model, 'company_opening_hours')
  values.contact_telephone = get(model, 'contact_telephone')
  values.contact_email = get(model, 'contact_email')
  values.contact_adress = get(model, 'contact_adress')
  values.contact_person = get(model, 'contact_person')
  values.categorization = get(model, 'categorization')
  values.slogan = get(model, 'slogan')

  return values
}
