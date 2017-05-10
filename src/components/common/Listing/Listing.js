import React, { Component, PropTypes } from 'react'
import cx from 'classnames'

import ListingItem from 'components/common/ListingItem/ListingItem'
import Company from 'components/common/Company/Company'

export default class Listing extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    controller: PropTypes.string.isRequired,
    onDelete: PropTypes.func,
    onFilter: PropTypes.func,
    isAdmin: PropTypes.bool.isRequired,
    isCompany: PropTypes.bool,
    additionalClasses: PropTypes.string,
    id: PropTypes.string,
  }

  render() {
    const {
      items,
      controller,
      onDelete,
      onFilter,
      isAdmin,
      isCompany,
      additionalClasses,
      id,
    } = this.props

    return (
      <div className={cx('row', additionalClasses)} id={id}>
        {items &&
          !isCompany &&
          items.length > 0 &&
          items.map(item => (
            <ListingItem
              key={item._id}
              item={item}
              controller={controller}
              onDelete={onDelete}
              isAdmin={isAdmin}
              onFilter={onFilter}
            />
          ))}

        {items &&
          isCompany &&
          items.length > 0 &&
          items.map(item => (
            <Company
              key={item._id}
              item={item}
              controller={controller}
              onDelete={onDelete}
              isAdmin={isAdmin}
              onFilter={onFilter}
            />
          ))}

      </div>
    )
  }
}
