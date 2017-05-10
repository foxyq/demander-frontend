import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { getCompanies, deleteCompany } from 'redux/modules/api/companies'
import { getCategories } from 'redux/modules/api/categories'

import { Listing, Loading, Tabs } from 'components/common'

@connect(
  ({ api }) => ({
    companies: api.companies.getCompanies.data,
    categories: api.categories.getCategories.data,
    isLoading: api.companies.getCompanies.isLoading,
  }),
  { getCompanies, deleteCompany, getCategories },
)
export default class List extends Component {
  static propTypes = {
    getCompanies: PropTypes.func.isRequired,
    getCategories: PropTypes.func.isRequired,
    deleteCompany: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    companies: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
  }
  componentDidMount() {
    this.props.getCompanies()
    this.props.getCategories()
  }

  handleDeleteCompany = companyId => {
    const confirmed = confirm('Are you sure?')

    if (confirmed) {
      this.props.deleteCompany(companyId).then(() => {
        this.props.getCompanies('sort=-created_date')
      })
    }
  }

  filterCategory = id => {
    console.log(id)
    this.props.getCompanies('category=' + id)
    console.log(this.props.companies)
    // id !== undefined && this.props.getCompanies('category=' + id)
    // id === undefined && this.props.getCompanies('sort=-created_date')
  }

  render() {
    const { companies, isLoading, categories } = this.props

    return (
      <div>
        {isLoading && <Loading />}
        <div className="row">
          <div className="profile">
            <div className="name">
              <h3 className="title">Seznam společností</h3>
              <h6>Společnosti registrované v systému Demander</h6>
            </div>
            <div className="text-center">
              <Link to={'/companies/new'} className="btn btn-success btn-lg">
                Registrovat společnost<div className="ripple-container" />
              </Link>
            </div>
          </div>
        </div>

        <Tabs items={categories} onFilter={this.filterCategory} />

        <Listing
          items={companies}
          controller="companies"
          onDelete={this.handleDeleteCompany}
          onFilter={this.filterCategory}
          additionalClasses="tabs-padding-top"
          id="company-list"
          isCompany
          isAdmin
        />
      </div>
    )
  }
}
