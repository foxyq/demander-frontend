import React, { Component, PropTypes } from 'react'
import { get } from 'lodash'
import { connect } from 'react-redux'
import 'antd/dist/antd.less'

import { getUsers } from 'redux/modules/api/users'

@connect(
  ({ api, auth }) => ({
    users: get(api, 'users.getUsers.data'),
    token: get(auth, 'user.token'),
  }),
  {
    getUsers,
  },
)
export default class Home extends Component {
  static propTypes = {
    users: PropTypes.array,
  }

  render() {
    return (
      <div>

        <div className="section section-basic">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <h4 className="description text-center">
                  Material Kit PRO is a Bootstrap UI Kit with a fresh, new design inspired by Google's Material Design. You asked for it, so we built it. It's a great pleasure to introduce to you the material concepts in an easy to use and beautiful set of components.
                </h4>
              </div>
            </div>

            <div className="features-1">
              <div className="row">
                <div className="col-md-4">
                  <div className="info">
                    <div className="icon icon-rose">
                      <i className="material-icons">apps</i>
                    </div>
                    <h4 className="info-title">Huge Number of Components</h4>
                    <p>
                      Every element that you need in a product comes built in as a component. All components fit perfectly with each other and can take variations in colour.
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="info">
                    <div className="icon icon-info">
                      <i className="material-icons">view_day</i>
                    </div>
                    <h4 className="info-title">Multi-Purpose Sections</h4>
                    <p>
                      Putting together a page has never been easier than matching together sections. From team presentation to pricing options, you can easily customise and built your pages.
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="info">
                    <div className="icon icon-success">
                      <i className="material-icons">view_carousel</i>
                    </div>
                    <h4 className="info-title">Example Pages</h4>
                    <p>
                      If you want to get inspiration or just show something directly to your clients, you can jump start your development with our pre-built example pages.
                    </p>
                  </div>
                </div>

              </div>
            </div>
            {/* /features */}
          </div>
        </div>

        <div className="section-components">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <h3 className="title">Basic Components</h3>
                <h6 className="description">
                  The core elements of your website
                </h6>
                <h5 className="description">
                  We re-styled every Bootstrap element to make it resemble Material Design and also fit with each other. All the Bootstrap components that you need in a development have been re-design with the new look. Besides the numerous basic elements, we have also created additional classes. All these items will help you take your project to the next level.

                </h5>
              </div>
              <div className="col-md-6 col-md-offset-1">
                <div className="image-container">
                  <img
                    src={require('assets/img/presentation/components.jpg')}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section section-cards section-dark">
          <div className="container">
            <div className="row">

              <div className="col-md-7">
                <div className="image-container">
                  <img
                    className="img"
                    src={require('assets/img/presentation/cards-test.png')}
                  />
                </div>
              </div>

              <div className="col-md-4 col-md-offset-1">
                <div className="section-description">
                  <h3 className="title">Unconventional Cards</h3>
                  <h6 className="description">One Card for Every Problem</h6>
                  <h5 className="description">
                    We love cards and everybody on the web seems to. We have gone above and beyond with options for you to organise your information. From cards designed for blog posts, to product cards or user profiles, you will have many options to choose from. All the cards follow the material principles and have a design that stands out.
                    {' '}
                  </h5>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    )
  }
}
