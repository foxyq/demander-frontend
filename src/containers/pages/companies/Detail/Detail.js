import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { getCompany } from 'redux/modules/api/companies'

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
    window.addEventListener('scroll', this.handleScroll)
    const companyId = this.props.params.id

    this.props.getCompany(companyId)
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

              <div className="row">
                <div className="col-md-6">
                  <h5>{company.company_description}</h5>
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

        <div id="cards" className="cd-section">
          {/* <div className="section-gray"> */}

          <div>
            {/* <!--     *********    BLOG CARDS     *********      --> */}

            <div className="cards">

              <div className="container">
                <div className="title">
                  {/* <h2>Poptávky</h2> */}
                  <br /><br /><br /><br />
                  <h3>Nejnovější poptávky</h3>
                </div>
                <div className="row">

                  <div className="col-md-4">

                    <div className="card card-blog">

                      <div className="card-content">
                        <h6 className="category text-success">Textil</h6>
                        <br />
                        <h4 className="card-title">
                          <a href="#pablo">
                            Dodávka textilních látek
                          </a>
                        </h4>
                        <br />
                        <p className="card-description">
                          Máme zájem o dodávku textilních látek pro zajímavý projekt v kultuře.Uvedené druhy látek jsou závazné, šíři, délku a barvu lze upravit, dle zboží, které bude mít dodavatel na skladě. Preferujeme kvalitu a vstřícnou cenu.
                        </p>
                        <br />
                        <div className="footer">
                          <div className="author">
                            <a href="#pablo">
                              <img
                                src="http://demander.cz/images/live/logo-csob.png"
                                alt="..."
                                className="avatar img-raised"
                              />
                              <span>CSOB</span>
                            </a>
                          </div>
                          <div className="stats">
                            <i className="material-icons">schedule</i>
                            {' '}
                            před 4 dny
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div className="col-md-4">

                    <div className="card card-blog">

                      <div className="card-content">
                        <h6 className="category text-success">Stavebnictví</h6>
                        <br />
                        <h4 className="card-title">
                          <a href="#pablo">
                            Mám zájem o tenkovrstvou omítku Baumit
                          </a>
                        </h4><br />
                        <p className="card-description">
                          Tenkovrstvou omítku Baumit Finetop, Baumit silikontop, Baumit Uniprimer. Preferuji cenu.
                        </p><br />
                        <div className="footer">
                          <div className="author">
                            <a href="#pablo">
                              <img
                                src="http://demander.cz/images/live/logo-kb.png"
                                alt="..."
                                className="avatar img-raised"
                              />
                              <span>Komerční Banka</span>
                            </a>
                          </div>
                          <div className="stats">
                            <i className="material-icons">schedule</i>
                            {' '}
                            před 3 dny
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div className="col-md-4">

                    <div className="card card-blog">
                      <div className="card-content">
                        <h6 className="category text-success">Tisk</h6>
                        <br />
                        <h4 className="card-title">
                          <a href="#pablo">
                            Grafický návrh, sazbu a tisk publikace
                          </a>
                        </h4><br />
                        <p className="card-description">
                          Jedná se o formát A5 v lepené vazbě, celkově 200 stránek s cca 100 barev. obrázky, 5O černobílých. Celkové množství 500 kusů.
                        </p><br />
                        <div className="footer">
                          <div className="author">
                            <a href="#pablo">
                              <img
                                src="http://demander.cz/images/live/logo-vodafone.png"
                                alt="..."
                                className="avatar img-raised"
                              />
                              <span>Vodafone</span>
                            </a>
                          </div>
                          <div className="stats">
                            <i className="material-icons">schedule</i>
                            {' '}
                            před 1 hodinou
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>

              </div>

            </div>
            <br /><br /><br />

          </div>
          {/* <!--     *********    END BLOG CARDS      *********      --> */}

          <div id="cards" className="cd-section section-gray">
            <div>
              {/* <!--     *********    BLOG CARDS     *********      --> */}

              <div className="cards">

                <div className="container">
                  <div className="title">
                    {/* <h2>Poptávky</h2> */}
                    <br /><br /><br /><br />
                    <h3>Nejnovější nabídky</h3>
                  </div>
                  <div className="row">

                    <div className="col-md-4">

                      <div className="card card-blog">

                        <div className="card-content">
                          <h6 className="category text-success">Grafika</h6>
                          <br />

                          <h4 className="card-title">
                            <a href="#pablo">
                              Grafické služby
                            </a>
                          </h4><br />
                          <p className="card-description">
                            Nabízím grafické služby - návrhy a tvorba firemních log, identity nebo jiné grafické práce.
                          </p><br />
                          <div className="footer">
                            <div className="author">
                              <a href="#pablo">
                                <img
                                  src="http://demos.creative-tim.com/material-kit-pro/assets/img/faces/marc.jpg"
                                  alt="..."
                                  className="avatar img-raised"
                                />
                                <span>LH Design</span>
                              </a>
                            </div>
                            <div className="stats">
                              <i className="material-icons">schedule</i>
                              {' '}
                              před 2 dny
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>

                    <div className="col-md-4">

                      <div className="card card-blog">

                        <div className="card-content">
                          <h6 className="category text-success">Údržba</h6>
                          <br />

                          <h4 className="card-title">
                            <a href="#pablo">
                              Sanita a instalatéřské práce
                            </a>
                          </h4><br />
                          <p className="card-description">
                            Nabízím instalatéřské práce všeho druhu pro firmy, domácnosti nebo nárazově na stavby, rekonstrukce apod. Cena individuální.
                          </p><br />
                          <div className="footer">
                            <div className="author">
                              <a href="#pablo">
                                <img
                                  src="http://demos.creative-tim.com/material-kit-pro/assets/img/faces/card-profile1-square.jpg"
                                  alt="..."
                                  className="avatar img-raised"
                                />
                                <span>Jaromír Havíř</span>
                              </a>
                            </div>
                            <div className="stats">
                              <i className="material-icons">schedule</i>
                              {' '}
                              před 3 dny
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>

                    <div className="col-md-4">

                      <div className="card card-blog">
                        <div className="card-content">
                          <h6 className="category text-success">Finance</h6>
                          <br />

                          <h4 className="card-title">
                            <a href="#pablo">
                              Vedení účetníctví{' '}
                            </a>
                          </h4><br />
                          <p className="card-description">
                            Nabízím správu účetnictví pro malé a střední podniky s orientací na výrobní a služby poskytující společnosti.
                            {' '}
                          </p><br />
                          <div className="footer">
                            <div className="author">
                              <a href="#pablo">
                                <img
                                  src="http://demos.creative-tim.com/material-kit-pro/assets/img/faces/card-profile4-square.jpg"
                                  alt="..."
                                  className="avatar img-raised"
                                />
                                <span>Lucie Novodvorská</span>
                              </a>
                            </div>
                            <div className="stats">
                              <i className="material-icons">schedule</i>
                              {' '}
                              před týdnem
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

              </div><br /><br /><br /><br />

            </div>

            {/* <!--     *********    END BLOG CARDS      *********      --> */}

          </div>
        </div>

      </div>
    )
  }
}
