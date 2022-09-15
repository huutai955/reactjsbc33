import React, { Component } from 'react'

export default class DemoDataBinding extends Component {
  renderTitle = () => {
    return <div className='bg-dark text-white text-center p-5'>
            CyberSoft Academy
      </div>
  }

  render() {
    const hoTen = "Hữu Tài"
    return (
      <div className='Container'>
        <h3>Họ Tên: <span>{hoTen}</span></h3>
        {this.renderTitle()}
      </div>
    )
  }
}
