import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { getDemands, deleteDemand } from 'redux/modules/api/demands'
import { getCategories } from 'redux/modules/api/categories'

import { Listing, Loading, Tabs } from 'components/common'

@connect(
  ({ api }) => ({
    demands: api.demands.getDemands.data,
    isLoading: api.demands.getDemands.isLoading,
    categories: api.categories.getCategories.data,
  }),
  { getDemands, deleteDemand, getCategories },
)
export default class List extends Component {
  static propTypes = {
    getDemands: PropTypes.func.isRequired,
    deleteDemand: PropTypes.func.isRequired,
    getCategories: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    demands: PropTypes.array,
    categories: PropTypes.array,
  }

  componentDidMount() {
    this.props.getDemands('sort=-created_date')
    this.props.getCategories()
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
    const { demands, isLoading, categories } = this.props

    return (
      <div>

        {isLoading && <Loading />}
        <div className="row">
          <div className="profile">
            <div className="name">
              <h3 className="title">Seznam poptávek</h3>
              <h6>Aktuální poptávky v systému Demander</h6>
            </div>
            <div className="text-center">
              <Link to={'/demands/new'} className="btn btn-success btn-lg">
                Vytvořit poptávku<div className="ripple-container" />
              </Link>
            </div>
          </div>
        </div>

        {/* filtering tabs with categories */}
        <Tabs items={categories} />

        {/* demands in cards in form of listing  */}
        <Listing
          items={demands}
          controller="demands"
          onDelete={this.handleDeleteDemand}
          isAdmin
        />

      </div>
    )
  }
}
