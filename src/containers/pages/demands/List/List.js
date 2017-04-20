import React, { Component, PropTypes } from 'react'
// import { Link } from 'react-router'
import { connect } from 'react-redux'
import {
  getDemands,
  deleteDemand,
} from 'redux/modules/api/demands' /* , deleteDemand*/

@connect(
  ({ api }) => ({
    demands: api.demands.getDemands.data,
    isLoading: api.demands.getDemands.isLoading,
  }),
  { getDemands, deleteDemand },
)
export default class List extends Component {
  static propTypes = {
    getDemands: PropTypes.func.isRequired,
    deleteDemand: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    demands: PropTypes.array,
  }

  componentDidMount() {
    this.props.getDemands()
  }

  handleDeleteDemand = demandId => {
    const confirmed = confirm('Are you sure?')

    if (confirmed) {
      this.props.deleteDemand(demandId).then(() => {
        this.props.getDemands()
      })
    }
  }

  render() {
    // const { demands, isLoading } = this.props

    return (
      <div>
        {/* <div>
          {isLoading && <h1>loader gif</h1>}
          {demands &&
            demands.length > 0 &&
            demands.map(demand => (
              <div key={demand._id}>
                {`id: ${demand._id}, name: ${demand.title}`}

                <Link to={`/demands/${demand._id}`}>Edit</Link>

                <button type="button">
                  {/* // onClick={() => this.handleDeleteDemand(demand._id)} */}
        {/* Delete
                </button>
              </div>
            ))}
          <Link to={'/demands/new'}>Create demand</Link>
        </div>  */}
        <div className="row">
          <div className="profile">

            <div className="name">
              <br /><br />
              <h3 className="title">Seznam poptávek</h3>
              <h6>Aktální poptávky v systému Demander</h6>
            </div>
          </div>
        </div>

        {/* row with tabs */}
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
                      <i className="material-icons">flip_to_back</i>
                      Textil
                    </a>
                  </li>
                  <li className="active">
                    <a
                      href="#work"
                      role="tab"
                      data-toggle="tab"
                      aria-expanded="true"
                    >
                      <i className="material-icons">build</i>
                      Služby
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="#shows"
                      role="tab"
                      data-toggle="tab"
                      aria-expanded="false"
                    >
                      <i className="material-icons">attach_money</i>
                      Finance
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="#shows"
                      role="tab"
                      data-toggle="tab"
                      aria-expanded="false"
                    >
                      <i className="material-icons">computer</i>
                      IT
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <br /><br />

        {/* CARDS BEGIN*/}
        <div id="cards" className="cd-section">
          {/* <div className="section-gray"> */}

          <div>
            {/* <!--     *********    BLOG CARDS     *********      --> */}

            <div className="cards">

              <div className="container">
                {/* <div className="title">
                  {/* <h2>Poptávky</h2> */}
                {/* <br /><br /><br /><br />
                  <h3>Nejnovější poptávky</h3>
                </div> */}
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

          </div>
          {/* <!--     *********    END BLOG CARDS      *********      --> */}

          <div id="cards" className="cd-section">
            <div>
              {/* <!--     *********    BLOG CARDS     *********      --> */}

              <div className="cards">

                <div className="container">
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

              </div>

            </div>

            {/* <!--     *********    END BLOG CARDS      *********      --> */}

            <div id="cards" className="cd-section">
              {/* <div className="section-gray"> */}

              <div>
                {/* <!--     *********    BLOG CARDS     *********      --> */}

                <div className="cards">

                  <div className="container">

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
                            <h6 className="category text-success">
                              Stavebnictví
                            </h6>
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

              </div>
              {/* <!--     *********    END BLOG CARDS      *********      --> */}

              <div id="cards" className="cd-section">
                <div>
                  {/* <!--     *********    BLOG CARDS     *********      --> */}

                  <div className="cards">

                    <div className="container">
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

                  </div>

                </div>

                {/* <!--     *********    END BLOG CARDS      *********      --> */}
                <br /><br /><br />

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
