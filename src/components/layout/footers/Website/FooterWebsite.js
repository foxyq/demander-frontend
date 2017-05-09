import React from 'react'

export default class FooterWebsite extends React.Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <br /><br />
          <div className="container">

            {/* <nav className="pull-center"> */}
            <ul className="pull-left">
              <li>

                <a href="/">
                  DOMŮ
                  <div className="ripple-container" />
                </a>
              </li>
              {'|'}
              <li>
                <a href="/demands">
                  POPTÁVKY
                </a>
              </li>
              {'|'}
              <li>
                <a href="#">
                  SLUŽBY
                </a>
              </li>
              {'|'}
              <li>
                <a href="/companies">
                  DODAVATELÉ
                </a>
              </li>
              {'|'}
              <li>
                <a href="/howitworks">
                  JAK TO FUNGUJE?
                </a>
              </li>
              {'|'}
              <li>
                <a href="/contact">
                  KONTAKT
                </a>
              </li>

            </ul>
            {/* </nav> */}
            <div className="copyright pull-right">
              © 2017 Demander
            </div>
          </div>
          <br /><br />
        </footer>
      </div>
    )
  }
}
