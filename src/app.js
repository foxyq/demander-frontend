import React, { Component, PropTypes } from 'react'
import { asyncConnect } from 'redux-connect'
import { isLoaded as isAuthLoaded, load as loadAuth } from 'redux/modules/auth'
import { IntlProvider } from 'react-intl'
// import cs from 'react-intl/dist/locale-data/cs'
// import cs from 'react-intl/lib/locale-data/cs-CZ'

// addLocaleData(cs)

@asyncConnect([
  {
    promise: ({ store: { dispatch, getState } }) => {
      const promises = []

      if (!isAuthLoaded(getState())) {
        promises.push(dispatch(loadAuth()))
      }

      return Promise.all(promises)
    },
  },
])
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  }

  static contextTypes = {
    store: PropTypes.object.isRequired,
  }

  render() {
    const { children } = this.props
    // const { messages } = this.getIntl()

    return (
      <IntlProvider key="intl" locale="en">
        <div>
          {/* <div className="row"> */}
          {/* <div className="container"> */}
          {process.env.NODE_ENV === 'production'
            ? { children }
            : <div>{children}</div>}
          {/* {children} */}
          {/* </div> */}
          {/* </div> */}
        </div>
      </IntlProvider>
    )
  }
}
