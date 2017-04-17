import memoize from 'lru-memoize'

import { createValidator, required } from 'utils/validation'

const validator = createValidator({
  company_name: required,
})

export default memoize(10)(validator)
