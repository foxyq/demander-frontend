import React from 'react'
import { Link } from 'react-router'

export default class Steps extends React.Component {
  render() {
    return (
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
              </p>
            </div>

            <Link to={'/users/new'} className="btn btn-danger btn-lg">
              Registrovat<div className="ripple-container" />
            </Link>

          </div>

          <div className="col-md-4">
            <div className="info">
              <div className="icon icon-info">
                <i className="material-icons">description</i>
              </div>
              <h4 className="info-title">Vložte popávku</h4>
              <p>
                Dalším krokem je vložení poptávky, kde definujete předmět Vaši poptávky. Přiblížit detaily můžete vložením technické dokumentace. Demander je i totiž systémem pro náročné.
              </p>
            </div>

            <Link to={'/demands/new'} className="btn btn-info btn-lg">
              Vložit poptávku<div className="ripple-container" />
            </Link>

          </div>

          <div className="col-md-4">
            <div className="info">
              <div className="icon icon-success">
                <i className="material-icons">touch_app</i>
              </div>
              <h4 className="info-title">Vyberte dodavatele</h4>
              <p>
                V katalogu firem získáte přehled o dodavatelích, jejich zaměření, předmětu činnosti, poskytovaných službách, lokalitě a další pro vás užitečné informace.
              </p>
            </div>

            <Link to={'/companies'} className="btn btn-success btn-lg">
              Seznam společností<div className="ripple-container" />
            </Link>

          </div>

        </div>
      </div>
    )
  }
}
