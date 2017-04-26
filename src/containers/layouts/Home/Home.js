import React, { Component, PropTypes } from 'react'
import cx from 'classnames'

import * as Header from 'components/layout/headers'
import { FooterWebsite } from 'components/layout/footers'

import style from 'assets/css/base/vertical-rhythm.styl'
import cigan from 'assets/css/cigan.styl'

export default class HomeLayout extends Component {
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
      <div className="index-page">
        <Header.HeaderWebsite logo={<Header.Logo />} />

        <div className="wrapper">
          <div
            className="header header-filter"
            style={{
              transform: 'translate3d(0px,' + this.state.transform + 'px, 0px)',
              backgroundImage: 'url("http://demander.cz/images/live/cover_pic.png")',
            }}
          >
            {/* <video
              className="video-container video-container-overlay"
              preload="auto"
              autoPlay="true"
              loop="true"
              muted="true"
              data-reactid=".0.1.0.0"
            >
              <source
                type="video/mp4"
                data-reactid=".0.1.0.0.0"
                src="http://demander.cz/video/business1.mp4"
              />
            </video> */}
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2">
                  <div className="brand">
                    <div>
                      <img
                        src="http://demander.cz/images/logo1_white2.svg"
                        height="210"
                      />
                    </div>
                    {/* <h3>
                      Staňte se součástí revoluce získávání nových klientů a dodavatelů
                    </h3> */}

                    <div className={style.baseMarginTop}>
                      <button
                        className={cx('btn', cigan.brandbutton)}
                        href="/services/new"
                      >
                        Přidat poptávku<div className="ripple-container" />
                      </button>
                      <button
                        className={cx('btn btn-primary', cigan.brandbutton)}
                      >
                        Najít službu
                        <div className="ripple-container" />
                      </button>
                    </div>

                  </div>
                  {/* /brand */}

                </div>
              </div>
            </div>
            {/* /container */}

          </div>
          {/* /header filter */}

          <div className="main main-raised">
            {this.props.children}
          </div>
          {/* /main-raised */}

          <FooterWebsite />

        </div>
        {/* /wrapper */}

      </div>
    )
  }
}
