import React, { PropTypes } from 'react'

export default class Tabs extends React.Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
  }
  render() {
    const { items } = this.props

    return (
      <div className="row">
        <div className="col-md-12">
          <div className="profile-tabs">
            <div className="nav-align-center">
              <ul className="nav nav-pills" role="tablist">

                {items &&
                  items.length > 0 &&
                  items.map(item => (
                    <li key={item._id}>
                      <a
                        href="#studio"
                        role="tab"
                        data-toggle="tab"
                        aria-expanded="false"
                      >
                        <i className="material-icons">{item.icon}</i>
                        {item.title}
                      </a>
                    </li>
                  ))}

              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
