import React, { Component } from 'react'
import {Provider} from './context'
export default class HashRouter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: {
        pathname: '/'
      },
      histoty: {
        push(to) {
          window.location.hash = to
        }
      }
    }
  }
  componentDidMount() {
    window.location.hash = window.location.hash || '/'
    window.addEventListener('hashchange', () => {
      this.setState({
        location: {
          ...this.state.location,
          pathname: window.location.hash.slice(1) || '/'
        }
      })
    })
  }
  render() {
    let value = {
      location: this.state.location,
      history: this.state.histoty
    }
    return (
      <Provider value={value}>
        {this.props.children}
      </Provider>
    )
  }
}
