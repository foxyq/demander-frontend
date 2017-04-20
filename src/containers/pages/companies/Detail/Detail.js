import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { getCompany } from 'redux/modules/api/companies'

// company: params.id !== '' && api.companies.getCompany.data,
@connect(
  ({ api }) => ({
    company: api.companies.getCompany.data,
  }),
  { getCompany },
)
export default class Detail extends Component {
  static propTypes = {
    getCompany: PropTypes.func.isRequired,
    // isLoading: PropTypes.bool,
    company: PropTypes.object,
  }
  state = {
    transform: 0,
  }
  componentDidMount() {
    const companyId = this.props.params.id

    this.props.getCompany(companyId)
  }

  render() {
    const { company } = this.props

    return (
      <div>

        <div
          className="header header-filter"
          style={{
            transform: 'translate3d(0px,' + this.state.transform + 'px, 0px)',
            // backgroundImage: 'url("http://demos.creative-tim.com/material-kit/assets/img/examples/city.jpg")',
            backgroundImage: 'url(https://www.wired.com/wp-content/uploads/2016/11/GoogleMap-1.jpg)',
          }}
        />

        <div className="main main-raised">
          <div className="profile-content">
            <div className="container">

              <div className="row">
                <div className="profile">
                  <div className="avatar img-rounded">
                    <img
                      // src="http://logok.org/wp-content/uploads/2014/08/Vodafone_logo-old.png"
                      src={company.logo_url}
                      alt="Circle Image"
                      className="img-rounded img-responsive img-raised"
                    />
                  </div>
                  <div className="name">
                    <h3 className="title">{company.company_name}</h3>
                    <h6>{company.company_about}</h6>
                  </div>
                </div>
              </div>

              <div className="description text-center">
                <p>
                  {company.company_description}
                </p>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <p className="description">
                    You can contact us with anything related to our Products. We'll get in touch with you as soon as possible.
                    {/* <br><br> */}
                  </p>
                  <form
                    role="form"
                    id="contact-form"
                    method="post"
                    _lpchecked="1"
                  >
                    <div className="form-group label-floating is-empty">
                      <label className="control-label">Your name</label>
                      <input type="text" name="name" className="form-control" />
                      <span className="material-input" />
                    </div>
                    <div className="form-group label-floating is-empty">
                      <label className="control-label">Email address</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                      />
                      <span className="material-input" />
                    </div>
                    <div className="form-group label-floating is-empty">
                      <label className="control-label">Phone</label>
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                      />
                      <span className="material-input" />
                    </div>
                    <div className="form-group label-floating is-empty">
                      <label className="control-label">Your message</label>
                      <textarea
                        name="message"
                        className="form-control"
                        id="message"
                        rows="6"
                      />
                      <span className="material-input" />
                    </div>
                    <div className="submit text-center">
                      <input
                        type="submit"
                        className="btn btn-primary btn-raised btn-round"
                        value="Contact Us"
                      />
                    </div>
                  </form>
                </div>
                <div className="col-md-4 col-md-offset-2">
                  <div className="info info-horizontal">
                    <div className="icon icon-primary">
                      <i className="material-icons">pin_drop</i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Find us at the office</h4>
                      <p>
                        {' '}Bld Mihail Kogalniceanu, nr. 8,
                        7652 Bucharest,
                        Romania
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon icon-primary">
                      <i className="material-icons">phone</i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Give us a ring</h4>
                      <p>
                        {' '}Michael Jordan
                        +40 762 321 762
                        Mon - Fri, 8:00-22:00
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon icon-primary">
                      <i className="material-icons">business_center</i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Legal Information</h4>
                      <p>
                        {' '}Creative Tim Ltd.
                        VAT · EN2341241
                        IBAN · EN8732ENGB2300099123
                        Bank · Great Britain Bank
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            {/* container */}

          </div>
        </div>
        {/* /main-raised */}

      </div>
    )
  }
}
