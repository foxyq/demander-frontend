import React, { PropTypes } from 'react'
import cx from 'classnames'

export default class ContentStripe extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    id: PropTypes.string,
    isColored: PropTypes.string,
    title: PropTypes.string,
    titlelink: PropTypes.string,
    additionalClasses: PropTypes.string,
  }
  render() {
    const { isColored, title, titlelink, additionalClasses, id } = this.props

    return (
      <div
        id={id}
        className={cx('cd-section', 'section-' + isColored, additionalClasses)}
      >
        <div className="container">
          <div className="row">
            {title &&
              <div className="title text-center">
                <h3>
                  {titlelink && <a href={titlelink}>{title}</a>}
                  {!titlelink && title}
                </h3>
              </div>}
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
