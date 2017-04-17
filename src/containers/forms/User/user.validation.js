import memoize from 'lru-memoize'

import { createValidator, required, email, minLength } from 'utils/validation'

const validator = createValidator({
  name: required,
  email: [required, email],
  password: [required, minLength(6)]
})

export default memoize(10)(validator)
