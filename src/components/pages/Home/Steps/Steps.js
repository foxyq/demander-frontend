import React from 'react'

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
              </p>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
