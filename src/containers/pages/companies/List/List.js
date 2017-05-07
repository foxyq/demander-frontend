import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { getCompanies, deleteCompany } from 'redux/modules/api/companies'

import Listing from 'components/common/Listing/Listing'

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
    this.props.getCompanies()
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
        <div className="row">
          <div className="profile">

            <div className="name">
              <h3 className="title">Seznam společností</h3>
              <h6>společnosti registrované v systému Demander</h6>
            </div>
          </div>
        </div>

        {isLoading && <span>IS LOADING </span>}
        <Listing
          items={companies}
          controller="companies"
          onDelete={this.handleDeleteCompany}
          isCompany
          isAdmin
        />

        <div className="row pull-left">
          <div className="profile">

            <div className="text-left">
              {isLoading && <span>IS LOADING </span>}
              {companies &&
                companies.length > 0 &&
                companies.map(company => (
                  <div key={company._id}>
                    <div className="ripple-container" />

                    <Link
                      to={`/company/${company._id}`}
                      className="btn btn-primary"
                    >
                      {company.company_name}
                    </Link>

                    <Link
                      to={`/companies/${company._id}`}
                      className="btn btn-info"
                    >
                      Edit
                    </Link>

                    <button
                      type="button"
                      className="btn btn-danger "
                      onClick={() => this.handleDeleteCompany(company._id)}
                    >
                      Delete
                    </button>
                  </div>
                ))}
              <Link to={'/companies/new'} className="btn btn-success ">
                Přidat společnost
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
