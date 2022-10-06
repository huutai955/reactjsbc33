import React, { Component } from 'react'
import { connect } from 'react-redux'

 class TangGiamFontSize extends Component {
  render() {
    console.log(this.props.fontSize)
    console.log(ComponentRedux);
    return (
      <div className='container'>
        <h3>Bài tập giảm fontsize</h3>
        <p style={{fontSize: this.props.fontSize}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, hic!</p>
        <button className='btn btn-success me-2' onClick={() => {
          // Action: Dữ liệu gửi lên redux
          const action = {
            type: 'TANG_FONT', //Thuộc tính bắt buộc phải có (tên action)
            payload: 1 //Payload sẽ là phần dữ liệu gửi lên redux
          };
          // Dùng props.dispatch để gửi dữ liệu lên redux
          this.props.dispatch(action)
        }}>+</button>
        <button className='btn btn-success' onClick={() => {
          const action = {
            type: 'GIAM_FONT',
            payload: 1
          }
          this.props.dispatch(action)
        }}>-</button>
      </div>
    )
  }
}

const mapStatetoProps = (state) => {
  return { //Hàm return về giá trị gì thì giá trị đó sẽ chuyển thành
    // this.props của component
    fontSize: state.fontSize
  }
}

const ComponentRedux = connect(mapStatetoProps)(TangGiamFontSize);

export default ComponentRedux

// function main() {
//   return 1
// }

