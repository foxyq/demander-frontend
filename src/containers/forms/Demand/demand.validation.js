import memoize from 'lru-memoize'

import { createValidator, required } from 'utils/validation'

const validator = createValidator({
  title: required,
})

export default memoize(10)(validator)
