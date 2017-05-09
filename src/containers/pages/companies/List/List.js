import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { getCompanies, deleteCompany } from 'redux/modules/api/companies'

import { Listing, Loading } from 'components/common'

@connect(
  ({ api }) => ({
    companies: api.companies.getCompanies.data,
    isLoading: api.companies.getCompanies.isLoading,
  }),
  { getCompanies, deleteCompany },
)
export default class List extends Component {
  static propTypes = {
    getCompanies: PropTypes.func.isRequired,
    deleteCompany: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    companies: PropTypes.array.isRequired,
  }
  componentDidMount() {
    this.props.getCompanies('sort=-created_date')
  }

  handleDeleteCompany = companyId => {
    const confirmed = confirm('Are you sure?')

    if (confirmed) {
      this.props.deleteCompany(companyId).then(() => {
        this.props.getCompanies()
      })
    }
  }

  render() {
    const { companies, isLoading } = this.props

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
                Přidat společnost<div className="ripple-container" />
              </Link>
            </div>
          </div>
        </div>

        <Listing
          items={companies}
          controller="companies"
          onDelete={this.handleDeleteCompany}
          isCompany
          isAdmin
        />
      </div>
    )
  }
}
