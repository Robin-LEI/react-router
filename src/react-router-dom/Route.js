import React, { Component } from 'react'
import pathToReg from 'path-to-regexp'
import {Consumer} from './context'
export default class Route extends Component {
  render() {
    return (
      <Consumer>
        {
          state => {
            let {path, component: Component, extract = false} = this.props
            let pathname = state.location.pathname
            let keys = []
            let regPath = pathToReg(path, keys, {end: extract})
            let ret = pathname.match(regPath)
            keys = keys.map(item => item.name) // [id, name]
            console.log(keys)
            let [url, ...values] = ret || []
            console.log('values', values)
            let props = {
              location: state.location,
              history: state.history,
              match: {
                params: keys.reduce((obj, current, index) => {
                  obj[current] = values[index]
                  return obj
                }, {})
              }
            }
            console.log(props.match.params)
            if (ret) {
              return <Component {...props} />
            }
            return null
          }
        }
      </Consumer>
    )
  }
}
