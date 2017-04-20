import React, { Component, PropTypes } from 'react'
// import cx from 'classnames'

import { HeaderWebsite } from 'components/layout/headers'
import { FooterWebsite } from 'components/layout/footers'

// import style from 'assets/css/base/vertical-rhythm.styl'
// import cigan from 'assets/css/cigan.styl'

export default class StandardLayout extends Component {
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
          <div
            className="header header-filter"
            style={{
              backgroundImage: 'url("http://demos.creative-tim.com/material-kit/assets/img/examples/city.jpg")',
            }}
          />

          <div className="main main-raised">
            <div className="profile-content">
              <div className="container">

                <div className="row">
                  {this.props.children}
                </div>

              </div>
              {/* container */}

            </div>
          </div>
          {/* /main-raised */}

        </div>
        {/* /wrapper */}
        <FooterWebsite />

      </div>
    )
  }
}
