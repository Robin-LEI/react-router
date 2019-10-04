import React, { Component } from 'react'

export default class UserDetail extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        UserDetail
        {/* 再render函数中，不能渲染对象 */}
        {this.props.match.params.id}
      </div>
    )
  }
}
