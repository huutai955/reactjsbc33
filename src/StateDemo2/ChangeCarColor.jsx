import React, { Component } from 'react'

export default class ChangeCarColor extends Component {
    state = {
        imgSrc: './img/product/red-car.jpg'
    }

    handleChangeColor = (color) => {
        return this.setState({
            imgSrc: `./img/product/${color}-car.jpg`
        })
    }

    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col-4'>
                        <img src={this.state.imgSrc} alt="" className='w-100' />
                    </div>
                    {/* <div className="col-8 ">
                <button className='btn btn-dark mx-2' onClick={() => {
                    this.setState({
                        imgSrc : './img/product/black-car.jpg'
                    })
                }}>Black car</button>
                <button className='btn btn-danger mx-2' onClick={() => {
                    this.setState({
                        imgSrc : './img/product/red-car.jpg'
                    })
                }}>Red car</button>
                <button className='btn btn-secondary mx-2' onClick={() => {
                    this.setState({
                        imgSrc : './img/product/silver-car.jpg'
                    })
                }}>Silver car</button>
                <button className='btn btn-light mx-2' onClick={() => {
                    this.setState({
                        imgSrc : './img/product/steel-car.jpg'
                    })
                }}>Steel car</button>
            </div> */}


                    <div className="col-8 ">
                        <button className='btn btn-dark mx-2' onClick={() => {
                            this.handleChangeColor("black")
                        }}>Black car</button>
                        <button className='btn btn-danger mx-2' onClick={() => {
                            this.handleChangeColor("red")
                        }}>Red car</button>
                        <button className='btn btn-secondary mx-2' onClick={() => {
                            this.handleChangeColor("silver")
                        }}>Silver car</button>
                        <button className='btn btn-light mx-2' onClick={() => {
                            this.handleChangeColor("steel")
                        }}>Steel car</button>
                    </div>
                </div>
            </div>
        )
    }
}
