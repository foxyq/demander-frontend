import React from 'react'

export default class FooterWebsite extends React.Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <div className="container">
            <nav className="pull-left">
              <ul>
                <li>

                  <a href="#">
                    DOMŮ
                    <div className="ripple-container" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    SPOLEČNOSTI
                  </a>
                </li>
                <li>
                  <a href="#">
                    POUŽIVATELÉ
                  </a>
                </li>
                <li>
                  <a href="#">
                    POPTÁVKY
                  </a>
                </li>
                <li>
                  <a href="#">
                    NABÍDKY
                  </a>
                </li>

              </ul>
            </nav>
            <div className="copyright pull-right">
              © 2017 Parco Digital
            </div>
          </div>
        </footer>
      </div>
    )
  }
}
