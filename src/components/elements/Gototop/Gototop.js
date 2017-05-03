import React, { Component } from 'react'
import * as Scroll from 'react-scrollable-anchor'

export default class Gototop extends Component {
  render() {
    return (
      <a
        href={Scroll.goToTop()}
        id="goToTop"
        className="btn btn-primary btn-fab btn-round"
      >
        ^
      </a>
    )
  }
}
