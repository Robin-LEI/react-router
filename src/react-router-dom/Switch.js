import React, { Component } from 'react'
import {Consumer} from './context'
import pathToReg from 'path-to-regexp'
export default class Switch extends Component {
  render() {
    return (
      <Consumer>
        {
          state => {
            let pathname = state.location.pathname
            let children = this.props.children
            for(let i = 0; i < children.length; i++) {
              let child = children[i]
              let path = child.props.path || ''
              let ret = pathToReg(path, [], {end: false})
              if (ret.test(pathname)) {
                return child
              }
            }
            return null
          }
        }
      </Consumer>
    )
  }
}
