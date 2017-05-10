import React, { Component, PropTypes } from 'react'
import { get } from 'lodash'
import { connect } from 'react-redux'
import { Link } from 'react-router'
// import 'antd/dist/antd.less'

import { getUsers } from 'redux/modules/api/users'
import { getDemands } from 'redux/modules/api/demands'
import { getServices } from 'redux/modules/api/services'

import { Listing, ContentStripe } from 'components/common'
import { Steps } from 'components/pages/Home'

@connect(
  ({ api, auth }) => ({
    users: get(api, 'users.getUsers.data'),
    demands: get(api, 'demands.getDemands.data'),
    services: get(api, 'services.getServices.data'),
    token: get(auth, 'user.token'),
  }),
  {
    getUsers,
    getDemands,
    getServices,
  },
)
export default class Home extends Component {
  static propTypes = {
    // users: PropTypes.array,
    getDemands: PropTypes.func.isRequired,
    getServices: PropTypes.func.isRequired,
    demands: PropTypes.array,
    services: PropTypes.array,
  }
  componentDidMount() {
    this.props.getDemands('sort=-created_date&limit=3')
    this.props.getServices('sort=-created_date&limit=3')
  }

  render() {
    const { demands, services } = this.props

    return (
      <div>

        <div className="section section-basic">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <h4 className="description text-center">
                  Demander.cz představuje moderní platformu zaměřenou na získávání nových zakázek, nabídku vlastních služeb a prezentaci firmy. Jedná se o B2B poptávkový systém, kde se setkávají zájmy a potřeby předních společností napříč všemi segmenty trhu.
                </h4>
              </div>
            </div>

            {/* three steps of basic functionality */}
            <Steps />

          </div>
        </div>

        {/* section with mac on right  */}
        <ContentStripe additionalClasses=" section-components ">
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
        </ContentStripe>

        {/* dark section with cards on left */}
        <ContentStripe
          isColored="dark"
          additionalClasses=" section section-cards "
        >
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
        </ContentStripe>

        {/* demands */}
        <ContentStripe
          title="Nejnovější poptávky"
          titlelink="/demands"
          isColored="gray"
          additionalClasses="text-center"
        >
          <Listing items={demands} controller="demands" isAdmin />

          <Link to={'/companies/new'} className="btn btn-lg btn-success">
            Přidat poptávku
          </Link>
        </ContentStripe>

        {/* sluzby */}
        <ContentStripe
          title="Nejnovější nabídky služeb"
          titlelink="/services"
          additionalClasses="text-center"
        >
          <Listing items={services} controller="services" isAdmin />
          <Link to={'/services/new'} className="btn btn-lg btn-success ">
            Nabídnout službu
          </Link>
        </ContentStripe>

      </div>
    )
  }
}
