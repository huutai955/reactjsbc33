import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Page404 extends Component {
  render() {
    return (
      <div>
        Không Tìm Thấy Trang
        <NavLink to={''}>Trở Về Trang</NavLink>
      </div>
    )
  }
}
