import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { getDemands, deleteDemand } from 'redux/modules/api/demands'

import Listing from 'components/common/Listing/Listing'

@connect(
  ({ api }) => ({
    demands: api.demands.getDemands.data,
    isLoading: api.demands.getDemands.isLoading,
  }),
  { getDemands, deleteDemand },
)
export default class List extends Component {
  static propTypes = {
    getDemands: PropTypes.func.isRequired,
    deleteDemand: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    demands: PropTypes.array,
  }

  componentDidMount() {
    this.props.getDemands()
  }

  handleDeleteDemand = demandId => {
    const confirmed = confirm('Are you sure?')

    if (confirmed) {
      this.props.deleteDemand(demandId).then(() => {
        this.props.getDemands()
      })
    }
  }

  render() {
    const { demands, isLoading } = this.props

    return (
      <div>

        {isLoading && <h1>loader gif</h1>}

        <Link to={'/demands/new'} className="btn btn-success btn-lg">
          Create new demand<div className="ripple-container" />
        </Link>

        <div className="row">
          <div className="profile">

            <div className="name">
              <br /><br />
              <h3 className="title">Seznam poptávek</h3>
              <h6>Aktuální poptávky v systému Demander</h6>
            </div>
          </div>
        </div>

        {/* row with tabs */}
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
                      Textil
                    </a>
                  </li>
                  <li className="active">
                    <a
                      href="#work"
                      role="tab"
                      data-toggle="tab"
                      aria-expanded="true"
                    >
                      <i className="material-icons">build</i>
                      Služby
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
                      Finance
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="#shows"
                      role="tab"
                      data-toggle="tab"
                      aria-expanded="false"
                    >
                      <i className="material-icons">computer</i>
                      IT
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <br /><br />

        <Listing
          items={demands}
          controller="demands"
          onDelete={this.handleDeleteDemand}
          isAdmin="true"
        />

      </div>
    )
  }
}
