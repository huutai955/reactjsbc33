import React, { Component } from 'react'
import { connect } from 'react-redux'

class ChangeCarColor extends Component {
    changeColor = (color) => {
        const action = {
            type: 'CHANGE_COLOR',
            payload: color
        }
        return this.props.dispatch(action);
    }
    render() {

        console.log(this.props.imgSrc)
        return (
            <div className='container'>
                <h3 className='text-center'>Bài Tập Chọn Xe</h3>
                <div className="row">
                    <div className="col-6">
                        <img src={this.props.imgSrc} className='w-100' alt="" />
                    </div>
                    <div className="col-6">
                        <button className='btn btn-danger me-2' onClick={() => {
                            return this.changeColor('red')
                        }}>Red</button>
                        <button className='btn btn-dark me-2' onClick={() => {
                            return this.changeColor('black')
                        }}>Black</button>
                        <button className='btn btn-ligh me-2' onClick={() => {
                            return this.changeColor('silver')
                        }}>Silver</button>
                        <button className='btn btn-secondary' onClick={() => {
                            return this.changeColor('steel')
                        }}>Steel</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        imgSrc: state.imgSrc
    }
}


const ComponentRedux = connect(mapStatetoProps)(ChangeCarColor)

export default ComponentRedux;
