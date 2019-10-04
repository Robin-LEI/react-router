import React, { Component } from 'react'

export default class UserAdd extends Component {
  constructor() {
    super()
    this.text = React.createRef()
  }
  submit = (e) => {
    // 提交页面到/user/list
    e.preventDefault()
    this.props.history.push('/user/list')
  }
  render() {
    return (
      <div>
        USerAdd
        <form onSubmit={this.submit}>
          <input ref={this.text} />
          <button type='submit'>提交</button>
        </form>
      </div>
    )
  }
}
