import React, { Component, PropTypes } from 'react'
import ListingItem from 'components/common/ListingItem/ListingItem'

export default class Listing extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    controller: PropTypes.string.isRequired,
    onDelete: PropTypes.func,
    isAdmin: PropTypes.bool.isRequired,
  }

  render() {
    const { items, controller, onDelete, isAdmin } = this.props

    return (
      <div className={'xxx-custom row'}>
        {items &&
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
      </div>
    )
  }
}
