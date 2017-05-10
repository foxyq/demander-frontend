import { get } from 'lodash'

export const schema = model => {
  const values = {}

  values.company_name = get(model, 'company_name')
  values.company_nice_name = get(model, 'company_nice_name')
  values.company_id = get(model, 'company_id')
  values.company_vat_id = get(model, 'company_vat_id')
  values.category = get(model, 'category')
  values.company_about = get(model, 'company_about')
  values.company_description = get(model, 'company_description')
  values.company_opening_hours = get(model, 'company_opening_hours')
  values.contact_telephone = get(model, 'contact_telephone')
  values.contact_email = get(model, 'contact_email')
  values.contact_address = get(model, 'contact_address')
  values.contact_person = get(model, 'contact_person')
  values.company_gps_location = get(model, 'company_gps_location')
  values.logo_url = get(model, 'logo_url')
  values.web_url = get(model, 'web_url')
  values.fb_url = get(model, 'fb_url')
  values.twitter_url = get(model, 'twitter_url')
  values.linkedin_url = get(model, 'linkedin_url')

  values.slogan = get(model, 'slogan')

  return values
}
