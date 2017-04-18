import React, { Component, PropTypes } from 'react'
import { Layout } from 'antd'
const { Header, Footer, Content } = Layout

export default class PublicLayout extends Component {
  static propTypes = {
    children: PropTypes.object,
  }

  render() {
    return (
      <div>
        <Header>
          Headeris
        </Header>

        <Content>
          <div className="layout-wrapper">
            {this.props.children}
          </div>
        </Content>

        <Footer>
          footeris
        </Footer>
      </div>
    )
  }
}
