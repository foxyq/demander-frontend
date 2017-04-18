import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import {
  getDemands,
  deleteDemand,
} from 'redux/modules/api/demands' /* , deleteDemand*/

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
    isLoading: PropTypes.boolean,
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
        {demands &&
          demands.length > 0 &&
          demands.map(demand => (
            <div key={demand._id}>
              {`id: ${demand._id}, name: ${demand.title}`}

              <Link to={`/demands/${demand._id}`}>Edit</Link>

              <button
                type="button"
                onClick={() => this.handleDeleteDemand(demand._id)}
              >
                Delete
              </button>
            </div>
          ))}
        <Link to={'/demands/new'}>Create demand</Link>
      </div>
    )
  }
}
