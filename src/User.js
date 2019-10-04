import React, { Component } from 'react'
import {Link, Route} from './react-router-dom/index.js'
import UserAdd from './UserAdd'
import UserList from './UserList'
import UserDetail from './UserDetail'
export default class User extends Component {
  render() {
    return (
      <div>
        User
        <Link to='/user/add'>user add</Link>
        <Link to='/user/list'>user list</Link>
        <div>
          <Route path='/user/add' component={UserAdd}></Route>
          <Route path='/user/list' component={UserList}></Route>
          <Route path='/user/detail/:id' component={UserDetail}></Route>
        </div>
      </div>
    )
  }
}
