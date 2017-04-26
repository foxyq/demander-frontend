import React, { Component, PropTypes } from 'react'
// import cx from 'classnames'

// import { HeaderWebsite } from 'components/layout/headers'
import * as Header from 'components/layout/headers'
import { FooterWebsite } from 'components/layout/footers'

// import style from 'assets/css/base/vertical-rhythm.styl'
// import cigan from 'assets/css/cigan.styl'

export default class CompanyLayout extends Component {
  static propTypes = {
    children: PropTypes.object,
  }

  render() {
    return (
      <div className="profile-page">
        <Header.HeaderWebsite logo={<Header.Logo />} />

        <div className="wrapper">
          {this.props.children}
        </div>

        <FooterWebsite />

      </div>
    )
  }
}
