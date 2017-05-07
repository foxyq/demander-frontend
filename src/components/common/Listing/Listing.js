import React, { Component, PropTypes } from 'react'
import ListingItem from 'components/common/ListingItem/ListingItem'
import Company from 'components/common/Company/Company'

export default class Listing extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    controller: PropTypes.string.isRequired,
    onDelete: PropTypes.func,
    isAdmin: PropTypes.bool.isRequired,
    isCompany: PropTypes.bool,
  }

  render() {
    const { items, controller, onDelete, isAdmin, isCompany } = this.props

    return (
      <div className={'row'}>

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
            />
          ))}

      </div>
    )
  }
}
