import { combineReducers } from 'redux'

import users from './api/users'
import companies from './api/companies'
import demands from './api/demands'
import services from './api/services'
import categories from './api/categories'

export default combineReducers({
  users,
  companies,
  demands,
  services,
  categories,
})
