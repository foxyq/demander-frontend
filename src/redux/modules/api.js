import { combineReducers } from 'redux'

import users from './api/users'
import companies from './api/companies'

export default combineReducers({
  users,
  companies,
})
