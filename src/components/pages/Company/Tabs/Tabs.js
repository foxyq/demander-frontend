import React from 'react'

export default class Tabs extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <div className="profile-tabs">
            <div className="nav-align-center">
              <ul className="nav nav-pills" role="tablist">
                <li className="">
                  <a
                    href="#studio"
                    role="tab"
                    data-toggle="tab"
                    aria-expanded="false"
                  >
                    <i className="material-icons">flip_to_back</i>
                    Facebook
                  </a>
                </li>
                <li className="active">
                  <a
                    href="#work"
                    role="tab"
                    data-toggle="tab"
                    aria-expanded="true"
                  >
                    <i className="material-icons">computer</i>
                    Twitter
                  </a>
                </li>
                <li className="">
                  <a
                    href="#shows"
                    role="tab"
                    data-toggle="tab"
                    aria-expanded="false"
                  >
                    <i className="material-icons">attach_money</i>
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
