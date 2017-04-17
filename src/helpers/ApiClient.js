import superagent from 'superagent'
import config from '../config'

const methods = ['get', 'post', 'put', 'patch', 'del']

function formatUrl(path, isExternal, { userType, removeUserType }) {
  if (path && path.indexOf('api/') === 0) {
    let apiPath = config.apiURL + '/' + path.slice(4)
    let prefix = '?'

    if (userType && !removeUserType) {
      if (apiPath.includes('?')) {
        prefix = '&'
      }
      apiPath = `${apiPath}${prefix}userType=${userType}`
    }

    !__SERVER__ && console.debug('Calling server...', apiPath.split('?')[0])
    return apiPath
  }

  if (isExternal) {
    return path
  }

  let adjustedPath = path[0] !== '/' ? '/' + path : path

  switch (adjustedPath) {
    case '/save-user':
      adjustedPath = '/save-user'
      break
    case '/logout' :
      adjustedPath = '/logout'
      break
    case '/loadAuth':
      adjustedPath = '/loadAuth'
      break
    case '/authenticate':
      adjustedPath = '/authenticate'
      break
    default:
      adjustedPath = config.apiURL + adjustedPath
      break
  }

  if (__SERVER__) {
    // Prepend host and port of the API server to the path.
    return 'http://' + config.host + ':' + config.port + adjustedPath
  }

  if (!__SERVER__) {
    console.debug('Calling server...', adjustedPath.split('?')[0])
  }
  return adjustedPath
}

class _ApiClient {
  constructor(req) {
    methods.forEach(method =>
      this[method] = (path, {
        params,
        data,
        external,
        formData = false,
        textResponse,
        removeUserType = false,
      } = {}) => new Promise((resolve, reject) => {
        const request = superagent[method](formatUrl(path, (external || textResponse), { userType: this.userType, removeUserType }))

        if (params) {
          request.query(params)
        }

        if (__SERVER__ && req.get('cookie')) {
          request.set('cookie', req.get('cookie'))
        }

        if (data && !formData) {
          request.send(data)
        }

        request.end((err, res = {}) => {
          let responseObject = {}

          if (method === 'get') {
            if (!textResponse) {
              responseObject = res.body
            } else {
              responseObject = res.text
            }
          } else {
            responseObject = res.text ? JSON.parse(res.text) : {}
          }

          err ? reject({
            body: responseObject || {},
            headers: res.headers
          } || err) : resolve({ body: responseObject || {}, headers: res.headers })
        })
      }))
  }
}

const ApiClient = _ApiClient

export default ApiClient
