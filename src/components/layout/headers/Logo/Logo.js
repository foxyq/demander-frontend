import React from 'react'
import styl from './Logo.styl'

export default class Logo extends React.Component {
  render() {
    return (
      <a href="#">
        <div className="logo-container">
          <div className="logo">
            <img
              src={require('assets/img/logo.png')}
              className={styl.logo}
              height="45"
              alt="Demander.cz logo"
              rel="tooltip"
              title=""
              data-placement="bottom"
              data-html="true"
              data-original-title="<b>Demander.cz</b> revoluce v systému obchodování"
            />
          </div>
        </div>
      </a>
    )
  }
}
