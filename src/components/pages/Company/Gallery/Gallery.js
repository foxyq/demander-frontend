import React from 'react'
import Lightbox from 'react-images'

export default class Gallery extends React.Component {
  state = {
    lightboxIsOpen: true,
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    })
  }

  render() {
    const LIGHTBOX_IMAGE_SET = [
      {
        src: 'http://www.planwallpaper.com/static/images/bicycle-1280x720.jpg',
        caption: 'Sydney, Australia - Photo by Jill Smith',
      },
      {
        src: 'https://www.qdtricks.net/wp-content/uploads/2016/05/hd-road-wallpaper.jpg',
      },
      {
        src: 'http://www.uniwallpaper.com/static/images/HD-Wallpapers-89_FxDoTt7.jpg',
      },
    ]

    return (
      <Lightbox
        images={LIGHTBOX_IMAGE_SET}
        isOpen={this.state.lightboxIsOpen}
        // isOpen
        onClickPrev={this.gotoPrevious}
        onClickNext={this.gotoNext}
        onClose={this.closeLightbox}
      />
    )
  }
}
