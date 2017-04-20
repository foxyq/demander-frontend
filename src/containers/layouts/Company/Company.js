import React, { Component, PropTypes } from 'react'
// import cx from 'classnames'

import { HeaderWebsite } from 'components/layout/headers'
import { FooterWebsite } from 'components/layout/footers'

// import style from 'assets/css/base/vertical-rhythm.styl'
// import cigan from 'assets/css/cigan.styl'

export default class CompanyLayout extends Component {
  static propTypes = {
    children: PropTypes.object,
  }

  state = {
    transform: 0,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  changeTransform = value => {
    this.setState({
      transform: value,
    })
  }

  handleScroll = event => {
    const scrollTop = event.srcElement.body.scrollTop
    const itemTranslate = Math.min(1000, scrollTop / 3)

    this.changeTransform(itemTranslate)
  }

  render() {
    return (
      <div className="profile-page">
        <HeaderWebsite />

        <div className="wrapper">
          {this.props.children}
        </div>

        <FooterWebsite />

      </div>
    )
  }
}
