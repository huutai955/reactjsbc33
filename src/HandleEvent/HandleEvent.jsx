import React, { Component } from 'react'

export default class HandleEvent extends Component {
    handdleClick = (event) => {
        alert("Hello CyberSoft")
        event.target.innerHTML = "CLickMeAgain";
    }

    showMessage = (name) => {
      alert("Hello" + name)
    }

  render() {
    return (

      <div className='HandleEvent'>
            <button className='btn btn-dark' onClick={this.handdleClick}>CyberSoft</button>
            <button id='btn' className='btn btn-dark' onClick={(e) => {
              // Cach nay goi duoc nhieu ham 
              this.showMessage("Tai");
              e.target.innerHTML = 'Hi Tai!!';
            }}>Hi!</button>
      </div>
    )
  }
}
