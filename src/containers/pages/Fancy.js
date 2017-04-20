import React, { Component } from 'react'
// import RaisedButton from 'material-ui/RaisedButton'

export default class Fancy extends Component {
  render() {
    return (
      <div>
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
                      <i className="material-icons">camera</i>
                      Studio
                    </a>
                  </li>
                  <li className="active">
                    <a
                      href="#work"
                      role="tab"
                      data-toggle="tab"
                      aria-expanded="true"
                    >
                      <i className="material-icons">palette</i>
                      Work
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="#shows"
                      role="tab"
                      data-toggle="tab"
                      aria-expanded="false"
                    >
                      <i className="material-icons">favorite</i>
                      Favorite
                    </a>
                  </li>
                </ul>

                <div className="tab-content gallery">
                  <div className="tab-pane" id="studio">
                    <div className="row">
                      <div className="col-md-6">
                        sdasd
                      </div>
                      <div className="col-md-6">
                        wwwww
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane text-center active" id="work">
                    <div className="row">
                      <div className="col-md-6">
                        asdsadasd
                      </div>
                      <div className="col-md-6">
                        sdasdsa
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane text-center" id="shows">
                    <div className="row">
                      <div className="col-md-6">
                        weqweqw
                      </div>
                      <div className="col-md-6">
                        qerewrwe
                      </div>
                    </div>
                  </div>

                </div>
                {/* tab content gallery */}

              </div>
            </div>

          </div>
        </div>
        {/* row with tabs */}
      </div>
    )
  }
}
