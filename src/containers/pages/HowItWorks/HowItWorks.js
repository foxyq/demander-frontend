import React, { Component } from 'react'
// import RaisedButton from 'material-ui/RaisedButton'

export default class HowItWorks extends Component {
  render() {
    return (
      <div>
        {/* <!--     *********    COMMENTS SECTION     *********      --> */}
        <div className="row" id="comments_section">
          <div className="col-md-8 col-md-offset-2">
            <div className="media-area">
              <h3 className="title text-center">Komunikace</h3>
              <div className="media">
                <a className="pull-left" href="#pablo">
                  <div className="avatar">
                    <img
                      className="media-object"
                      src="http://demos.creative-tim.com/material-kit-pro/assets/img/faces/card-profile4-square.jpg"
                      alt="..."
                    />
                  </div>
                </a>
                <div className="media-body">
                  <h4 className="media-heading">
                    Ivana Dlouhá <small>· před 2 dny</small>
                  </h4>
                  <h6 className="text-muted" />

                  <p>
                    Dobrý den, rád bych se informovala, jakou kvaliu služby požadujete. Resp. máte nějakou dokumentaci stavby?
                  </p>

                  <div className="media-footer">
                    <a
                      href="#pablo"
                      className="btn btn-primary btn-simple pull-right"
                      rel="tooltip"
                      title=""
                      data-original-title="Reply to Comment"
                    >
                      <i className="material-icons">reply</i> Reagovat
                    </a>
                  </div>
                </div>
              </div>

              <div className="media">
                <a className="pull-left" href="#pablo">
                  <div className="avatar">
                    <img
                      className="media-object"
                      alt="Tim Picture"
                      src="http://demos.creative-tim.com/material-kit-pro/assets/img/faces/card-profile1-square.jpg"
                    />
                  </div>
                </a>
                <div className="media-body">
                  <h4 className="media-heading">
                    Michal Mráček <small>· před 7 minutami</small>
                  </h4>

                  <p>
                    Podklady Vám zašlu emailem. Jedná sa o jednoduchou dřevostavbu.
                  </p>

                  <div className="media-footer">
                    <a
                      href="#pablo"
                      className="btn btn-primary btn-simple pull-right"
                      rel="tooltip"
                      title=""
                      data-original-title="Reply to Comment"
                    >
                      <i className="material-icons">reply</i> Reagovat
                    </a>

                  </div>

                </div>
              </div>

            </div>
            <h3 className="title text-center">Vložit nový komentář</h3>
            <div className="media media-post">
              <a className="pull-left author" href="#pablo">
                <div className="avatar">
                  <img
                    className="media-object"
                    alt="64x64"
                    src="http://demos.creative-tim.com/material-kit-pro/assets/img/faces/card-profile1-square.jpg"
                  />
                </div>
              </a>
              <div className="media-body">
                <div className="form-group is-empty">
                  <textarea
                    className="form-control"
                    placeholder="Tělo komenáře"
                    rows="6"
                  />
                  <span className="material-input" />
                </div>
                <div className="media-footer">
                  <a
                    href="#pablo"
                    className="btn btn-primary btn-round btn-wd pull-right"
                  >
                    Vložit komenář
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
