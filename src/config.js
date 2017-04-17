require('babel-polyfill')
const ip = require('ip')

const environment = {
  development: {
    isProduction: false,
    openBrowserAfterBuild: false,
    autoLogin: false,
    debug: true,
    tempUser: {
      accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjE0OTk4LCJoYXNoIjoiNGE0NjM2YTljMzg5OTdmOGU2YjQxOTljNjE5OWFjZDZhZGRkYWY4MzA5YzM1NGNiMTMyODhjYjU3YTZiZjU0ZSIsImlhdCI6MTQ2Mjg2NzQ4NSwiZXhwIjoxNDYyODg1NDg1fQ.MQRFIvC9Zol8NcpY0jcuUf3C-_k9B_4gu6p34K_rEhM',
      id: 6,
      email: 'dummy@dumm.com',
      firstName: 'Dummy',
      lastName: 'Dumm',
    },
  },
  production: {
    isProduction: true,
  },
}[process.env.NODE_ENV || 'development']

const config = Object.assign({}, environment, {
  apiURL: process.env.API_URL,
  host: process.env.HOST || ip.address(),
  port: process.env.PORT,
})

module.exports = config
