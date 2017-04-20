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
                  <div className="profile">

                    <div className="name">
                      <h3 className="title">Nadpis</h3>
                      <h6>podnadpis</h6>
                    </div>
                  </div>
                </div>

                <div className="row">
                  {this.props.children}
                </div>

                <div className="row">
                  <div className="col-md-6 col-md-offset-3">
                    <div className="profile-tabs">
                      <div className="nav-align-center">
                        <ul className="nav nav-pills" role="tablist">
                          <li className="">
                            <a
                              href="#studio"
                              role="tab"
                              data-toggle="tab"
                              aria-expanded="false"
                            >
                              <i className="material-icons">camera</i>
                              Studio
                            </a>
                          </li>
                          <li className="active">
                            <a
                              href="#work"
                              role="tab"
                              data-toggle="tab"
                              aria-expanded="true"
                            >
                              <i className="material-icons">palette</i>
                              Work
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="#shows"
                              role="tab"
                              data-toggle="tab"
                              aria-expanded="false"
                            >
                              <i className="material-icons">favorite</i>
                              Favorite
                            </a>
                          </li>
                        </ul>

                        <div className="tab-content gallery">
                          <div className="tab-pane" id="studio">
                            <div className="row">
                              <div className="col-md-6">
                                sdasd
                              </div>
                              <div className="col-md-6">
                                wwwww
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane text-center active"
                            id="work"
                          >
                            <div className="row">
                              <div className="col-md-6">
                                asdsadasd
                              </div>
                              <div className="col-md-6">
                                sdasdsa
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane text-center" id="shows">
                            <div className="row">
                              <div className="col-md-6">
                                weqweqw
                              </div>
                              <div className="col-md-6">
                                qerewrwe
                              </div>
                            </div>
                          </div>

                        </div>
                        {/* tab content gallery */}

                      </div>
                    </div>

                  </div>
                </div>
                {/* row with tabs */}

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
