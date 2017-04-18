import { combineReducers } from 'redux'

import users from './api/users'
import companies from './api/companies'
import demands from './api/demands'
import services from './api/services'

export default combineReducers({
  users,
  companies,
  demands,
  services,
})
