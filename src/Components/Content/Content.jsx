import React, { Component } from 'react'
import LeftNavigaion from './LeftNavigaion'
import RightNavigaion from './RightNavigaion'

export default class Content extends Component {
  render() {
    return (
      <div className='Content'>
        <div className='d-flex'>
          <div className='w-25'>
            <LeftNavigaion />
          </div>
          <div className='w-75'>
            <RightNavigaion />
          </div>
        </div>
      </div>
    )
  }
}
