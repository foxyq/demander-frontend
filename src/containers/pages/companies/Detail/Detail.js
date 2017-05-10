import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { getCompany } from 'redux/modules/api/companies'
import { Listing, ContentStripe } from 'components/common'
import { Timeline } from 'components/elements'

import { Tabs } from 'components/pages/Company'

import Scrollchor from 'react-scrollchor'

import { getDemands } from 'redux/modules/api/demands'
import { getServices } from 'redux/modules/api/services'

import cx from 'classnames'
import style from './detail.styl'

@connect(
  ({ api }) => ({
    company: api.companies.getCompany.data,
    demands: api.demands.getDemands.data,
    services: api.services.getServices.data,
  }),
  { getCompany, getDemands, getServices },
)
export default class Detail extends Component {
  static propTypes = {
    getCompany: PropTypes.func.isRequired,
    getDemands: PropTypes.func.isRequired,
    getServices: PropTypes.func.isRequired,
    // isLoading: PropTypes.bool,
    company: PropTypes.any,
    demands: PropTypes.array,
    services: PropTypes.array,
  }
  state = {
    transform: 0,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    const companyId = this.props.params.id

    this.props.getCompany(companyId)
    this.props.getDemands('sort=-created_date&limit=3&company=' + companyId)
    this.props.getServices('sort=-created_date&limit=3&company=' + companyId)
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
    const { company, demands, services } = this.props

    return (
      <div>

        <div
          className="header header-filter"
          style={{
            transform: 'translate3d(0px,' + this.state.transform + 'px, 0px)',
            backgroundImage: 'url(http://www.triplepoint.co.uk/storage/images-processed/w-1200_h-482_m-cover_s-any__internet-technology-concept.jpg)',
            // backgroundImage: `url(${company.category.cover_photo_url}`,

            backgroundSize: '100%',
          }}
        >
          <div className={style.mottowrapper}>
            <div className={style.mottotext}>{company.company_about}</div>
          </div>
        </div>

        <div className="main main-raised">
          <div className="profile-content">
            <div className="container">

              <div className="row">
                <div className="profile">
                  <div className="avatar img-rounded">
                    <img
                      src={company.logo_url}
                      alt="Circle Image"
                      className="img-rounded img-responsive img-raised"
                    />
                  </div>
                  <div className="name">
                    <h3 className="title">{company.company_name}</h3>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-10 col-md-offset-1">
                  <h5>{company.company_description}</h5>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-4">
                  <div className="info info-horizontal">
                    <div className="icon icon-primary">
                      <i className="material-icons">pin_drop</i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Najděte nás</h4>
                      <p>
                        {company.contact_address} <br />
                        {company.company_opening_hours}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4">
                  <div className="info info-horizontal">
                    <div className="icon icon-primary">
                      <i className="material-icons">business_center</i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Údaje o firmě</h4>
                      <p>
                        {company.company_name}<br />
                        IČO: {company.company_id}<br />
                        DIČ: {company.company_vat_id}<br />
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4">
                  <div className="info info-horizontal">
                    <div className="icon icon-primary">
                      <i className="material-icons">phone</i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Kontakt</h4>
                      <p>
                        {company.contact_person}<br />
                        {company.contact_telephone}<br />
                        {company.contact_email} <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-6 col-md-3">
                  <Scrollchor
                    to="#nabidka_sluzeb"
                    animate={{ offset: -110, duration: 600 }}
                    className="btn btn-lg btn-primary fullwidth"
                  >
                    Nabídka služeb
                    <div className="ripple-container" />
                  </Scrollchor>
                </div>

                <div className="col-xs-6 col-md-3">
                  <Scrollchor
                    to="#poptavky"
                    animate={{ offset: -110, duration: 600 }}
                    className="btn btn-lg btn-primary fullwidth"
                  >
                    Poptávky
                    <div className="ripple-container" />
                  </Scrollchor>
                </div>

                <div className="col-xs-6 col-md-3">
                  <Scrollchor
                    to="#historie"
                    animate={{ offset: -110, duration: 600 }}
                    className="btn btn-lg btn-primary fullwidth"
                  >
                    Historie
                    <div className="ripple-container" />
                  </Scrollchor>
                </div>

                <div className="col-xs-6 col-md-3">
                  <Scrollchor
                    to="#kontakt"
                    animate={{ offset: -110, duration: 600 }}
                    className="btn btn-lg btn-primary fullwidth"
                  >
                    Kontakt
                    <div className="ripple-container" />
                  </Scrollchor>
                </div>
              </div>

            </div>
            {/* container */}
          </div>
        </div>
        {/* /main-raised */}

        {services.length > 0 &&
          <ContentStripe title="Nabídka služeb" id="nabidka_sluzeb">
            <Listing items={services} controller="demands" isAdmin={false} />
          </ContentStripe>}

        {demands.length > 0 &&
          <ContentStripe
            title="Aktuálně poptáváme"
            id="poptavky"
            isColored="gray"
          >
            <Listing items={demands} controller="demands" isAdmin={false} />
          </ContentStripe>}

        <ContentStripe title="Historie společnosti" id="historie">
          <Timeline />
        </ContentStripe>

        <ContentStripe title="Aktuality" id="aktuality" isColored="gray">
          <Tabs />
        </ContentStripe>

        <ContentStripe title="Galerie" id="galerie">
          {/* <Gallery /> */} galerie
        </ContentStripe>

        <ContentStripe title="Kontakt" id="kontakt" isColored="gray">
          kontakt
        </ContentStripe>

        <Scrollchor
          to="#top"
          animate={{ offset: -110, duration: 600 }}
          className={cx('btn btn-primary btn-fab btn-round', style.topbutton)}
        >
          <i className="material-icons">keyboard_arrow_up</i>
          <div className="ripple-container" />
        </Scrollchor>

      </div>
    )
  }
}
