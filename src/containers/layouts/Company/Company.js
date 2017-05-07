import React, { Component, PropTypes } from 'react'

import * as Header from 'components/layout/headers'
import { FooterWebsite } from 'components/layout/footers'

export default class CompanyLayout extends Component {
  static propTypes = {
    children: PropTypes.object,
  }

  render() {
    return (
      <div>
        <div id="top" className="profile-page">
          <Header.HeaderWebsite logo={<Header.Logo />} />

          <div className="wrapper">
            {this.props.children}
          </div>

          <FooterWebsite />

        </div>

      </div>
    )
  }
}
