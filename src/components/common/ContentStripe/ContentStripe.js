import React, { PropTypes } from 'react'
import cx from 'classnames'

export default class ContentStripe extends React.Component {
  static propTypes = {
    children: PropTypes.object,
    isColored: PropTypes.string,
    title: PropTypes.string,
    additionalClasses: PropTypes.string,
  }
  render() {
    const { isColored, title, additionalClasses } = this.props

    return (
      <div
        className={cx('cd-section', 'section-' + isColored, additionalClasses)}
      >
        <div className="container">
          <div className="row">
            {title &&
              <div className="title text-center">
                <h3>{title}</h3>
              </div>}
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
