import React, { Component, PropTypes } from 'react'
// import { Layout } from 'antd'
// const { Footer, Content } = Layout

// import AppBar from 'material-ui/AppBar'
// import { Menu, Icon } from 'antd'
// const SubMenu = Menu.SubMenu
// const MenuItemGroup = Menu.ItemGroup
//
// import getMuiTheme from 'material-ui/styles/getMuiTheme'
// // import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import { purple500, purple700, purple50 } from 'material-ui/styles/colors'

import { HeaderWebsite } from 'components/layout/headers'
// import { FooterWebsite } from 'components/layout/Footer/FooterWebsite'

// const muiTheme = getMuiTheme({
//   AppBar: {
//     height: 70,
//   },
//   palette: {
//     primary1Color: purple500,
//     primary2Color: purple700,
//     alternateTextColor: purple50,
//     color: purple50,
//     accent1Color: purple50,
//     accent2Color: purple50,
//     accent3Color: purple50,
//     textColor: purple50,
//   },
//   color: {
//     color: purple50,
//   },
//   title: {
//     color: purple50,
//     height: 15,
//   },
// })

export default class PublicLayout extends Component {
  static propTypes = {
    children: PropTypes.object,
  }

  render() {
    return (
      <div>
        <HeaderWebsite />
        <div className="index-page wrapper">

          <div
            className="header header-filter"
            style={{
              backgroundImage: 'url("http://demos.creative-tim.com/material-kit/assets/img/bg2.jpeg")',
              translate3d: '(0px, 0px, 0px)',
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2">
                  <div className="brand">
                    <h1>Material Kit.</h1>
                    <h3>A Badass Bootstrap UI Kit based on Material Design.</h3>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* <MuiThemeProvider muiTheme={muiTheme}> */}

          {/* <AppBar */}
          {/* title={<HeaderWebsite />} */}
          {/* iconClassNameRight="muidocs-icon-navigation-expand-more" */}
          {/* /> */}
          {/* </MuiThemeProvider> */}

          {/* <Content> */}

          <div className="main main-raised">
            <div className="section section-basic">
              <div className="container">
                {this.props.children}
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br /><br />
                <br />
                <br />

                <br /><br />
                <br />

                <br />
              </div>
            </div>
          </div>
          {/* </Content> */}

          {/* <Footer> */}
          {/* <FooterWebsite /> */}
          {/* </Footer> */}

        </div>
      </div>
    )
  }
}
