import React from 'react'

export default class Loading extends React.Component {
  render() {
    return (
      <div className="text-center">
        <img src={require('../../../assets/img/spinner.gif')} />
      </div>
    )
  }
}
