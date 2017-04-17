import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { getCompanies, deleteCompany } from 'redux/modules/api/companies'
import { Spin } from 'antd'

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
    isLoading: PropTypes.boolean,
    companies: PropTypes.array,
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
        {isLoading && <Spin size="large" />}
        {companies &&
          companies.length > 0 &&
          companies.map(company => (
            <div key={company._id}>
              {`id: ${company._id}, name: ${company.company_name}`}

              <Link to={`/companies/${company._id}`}>Edit</Link>

              <button
                type="button"
                onClick={() => this.handleDeleteCompany(company._id)}
              >
                Delete
              </button>
            </div>
          ))}
        <Link to={'/companies/new'}>Create company</Link>
      </div>
    )
  }
}
