import React, { Component, PropTypes } from 'react'

import * as Header from 'components/layout/headers'
import { FooterWebsite } from 'components/layout/footers'

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
        <Header.HeaderWebsite logo={<Header.Logo />} />

        <div className="wrapper">
          <div
            className="header header-filter"
            style={{
              transform: 'translate3d(0px,' + this.state.transform + 'px, 0px)',
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
