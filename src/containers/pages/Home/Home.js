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
                  Demander.cz představuje moderní platformu zaměřenou na získávání nových zakázek, nabídku vlastních služeb a prezentaci firmy. Jedná se o B2B poptávkový systém, kde se setkávají zájmy a potřeby předních společností napříč všemi segmenty trhu.
                  {' '}
                </h4>
              </div>
            </div>

            <div className="features-1">
              <div className="row">
                <div className="col-md-4">
                  <div className="info">
                    <div className="icon icon-rose">
                      <i className="material-icons">business</i>
                    </div>
                    <h4 className="info-title">Zaregistrujte profil firmy</h4>
                    <p>
                      Vstoupit na trh Demander můžete díky založení profilu vaší společnosti. Vyplňte základní identifikační údaje a můžete začít.
                      {' '}
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="info">
                    <div className="icon icon-info">
                      <i className="material-icons">description</i>
                    </div>
                    <h4 className="info-title">Vložte popávku</h4>
                    <p>
                      Dalším krokem je vložení poptávky, kde definujete vaší aktuální potřebu - předmět toho, co poptáváte. Přiblížit detaily můžete vložením technické dokumentace. Demander je i totiž systémem pro náročné.
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="info">
                    <div className="icon icon-success">
                      <i className="material-icons">touch_app</i>
                    </div>
                    <h4 className="info-title">Vyberte dodavatele</h4>
                    <p>
                      V katalogu firem získáte přehled o dodavatelích, jejich zaměření, předmětu činnosti, poskytovaných službách, lokalitě a další pro vás užitečné informace.
                      {' '}
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
                <h3 className="title">Firemní stránka na Demandru </h3>
                <h6 className="description">
                  Prezentujte svoji firmu pomocí rozšířeného profilu firmy
                </h6>
                <h5 className="description">
                  Čím více dokážete vaší společnost přiblížit ostatním uživatelům poptávkového systému Demander, tím relevantnější nabídky obdržíte. Budujte svoji vizitku na trhu a dejte si záležet na prezentaci vaší firmy díky rozšířenému firemnímu profilu. Stačí vyplnit položky logo, slogan, přehled služeb a produktů, doplnit digitální vizitku, další poptávky a ihned se vaše společnost stane čitelnější. I detail dělá dojem.
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
                  <h3 className="title">Správa poptávek</h3>
                  <h6 className="description">
                    Efektivní správa poptávek na jednom místě
                  </h6>
                  <h5 className="description">
                    Poptávkový systém Demander vám nabízí přehlednou správu nabídek přímo ve vašem firemním profilu. Nabídky od dodavatelů jsou strukturované a poskytují jednoznačný rozcestník, ve kterém se snadno zorientujete. Obchodujete a komunikujete systematicky a s klidnou tváří.
                  </h5>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* <!--     *********    COMMENTS SECTION     *********      --> */}
        {/* <div className="row" id="comments_section">
          <div className="col-md-8 col-md-offset-2">
            <div className="media-area">
              <h3 className="title text-center">Komunikace</h3>
              <div className="media">
                <a className="pull-left" href="#pablo">
                  <div className="avatar">
                    <img
                      className="media-object"
                      src="http://demos.creative-tim.com/material-kit-pro/assets/img/faces/card-profile4-square.jpg"
                      alt="..."
                    />
                  </div>
                </a>
                <div className="media-body">
                  <h4 className="media-heading">
                    Ivana Dlouhá <small>· před 2 dny</small>
                  </h4>
                  <h6 className="text-muted" />

                  <p>
                    Dobrý den, rád bych se informovala, jakou kvaliu služby požadujete. Resp. máte nějakou dokumentaci stavby?
                  </p>

                  <div className="media-footer">
                    <a
                      href="#pablo"
                      className="btn btn-primary btn-simple pull-right"
                      rel="tooltip"
                      title=""
                      data-original-title="Reply to Comment"
                    >
                      <i className="material-icons">reply</i> Reagovat
                    </a>
                  </div>
                </div>
              </div>

              <div className="media">
                <a className="pull-left" href="#pablo">
                  <div className="avatar">
                    <img
                      className="media-object"
                      alt="Tim Picture"
                      src="http://demos.creative-tim.com/material-kit-pro/assets/img/faces/card-profile1-square.jpg"
                    />
                  </div>
                </a>
                <div className="media-body">
                  <h4 className="media-heading">
                    Michal Mráček <small>· před 7 minutami</small>
                  </h4>

                  <p>
                    Podklady Vám zašlu emailem. Jedná sa o jednoduchou dřevostavbu.
                  </p>

                  <div className="media-footer">
                    <a
                      href="#pablo"
                      className="btn btn-primary btn-simple pull-right"
                      rel="tooltip"
                      title=""
                      data-original-title="Reply to Comment"
                    >
                      <i className="material-icons">reply</i> Reagovat
                    </a>

                  </div>

                </div>
              </div>

            </div>
            <h3 className="title text-center">Vložit nový komentář</h3>
            <div className="media media-post">
              <a className="pull-left author" href="#pablo">
                <div className="avatar">
                  <img
                    className="media-object"
                    alt="64x64"
                    src="http://demos.creative-tim.com/material-kit-pro/assets/img/faces/card-profile1-square.jpg"
                  />
                </div>
              </a>
              <div className="media-body">
                <div className="form-group is-empty">
                  <textarea
                    className="form-control"
                    placeholder="Tělo komenáře"
                    rows="6"
                  />
                  <span className="material-input" />
                </div>
                <div className="media-footer">
                  <a
                    href="#pablo"
                    className="btn btn-primary btn-round btn-wd pull-right"
                  >
                    Vložit komenář
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <!--     *********    COMMENTS SECTION     *********      --> */}

        <div id="cards" className="cd-section">
          {/* <div className="section-gray"> */}

          <div className="section-gray">
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

          <div id="cards" className="cd-section">
            <div>
              {/* <!--     *********    BLOG CARDS     *********      --> */}

              <div className="cards">

                <div className="container">
                  <div className="title">
                    {/* <h2>Poptávky</h2> */}
                    <br /><br /><br /><br />
                    <h3>Nejnovější služby</h3>
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

        </div>{' '}
      </div>
    )
  }
}
