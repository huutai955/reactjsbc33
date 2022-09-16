import React, { Component } from 'react'
import ChangeCarColor from './ChangeCarColor';

export default class StateDemo2 extends Component {
    state = {
        fSize: 30, 
        color: "purple",
        img: 'https://i.pravatar.cc/?u=2'
    }

    changeAvatar = () => {  
        let ramdom = Math.random(Math.floor() * 100);
        let newIMG = `https://i.pravatar.cc/?u=${ramdom}`;

        this.setState({
            img: newIMG,
        })
    }

    render() {
        return (
            <div className='container'>
                <h3>Ví dụ 1: Tăng giảm font-size của đoạn văn bản</h3>
                <p style={{ fontSize: this.state.fSize }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore qui aliquam corporis saepe quos voluptas blanditiis, aperiam, explicabo quam, doloribus ex? Aperiam sapiente soluta quisquam ipsa, animi nihil asperiores, hic beatae et quam eligendi optio suscipit delectus quae? Sit possimus quia quaerat maxime rem, laborum placeat. Animi doloribus, iure eligendi deserunt facilis rem nulla, id ipsa quaerat nam, architecto modi.</p>
                <button className='mx-2 btn btn-dark' onClick={() => {
                    this.setState({
                        fSize: this.state.fSize + 1
                    })
                }}>+</button>
                <button className='mx-2 btn btn-dark' onClick={() => {
                    this.setState({
                        fSize: this.state.fSize - 1
                    })
                }}>-</button>

                <h3>Ví dụ 2: Thay đổi màu sắc của ngôi nhà</h3>
                <div className='fa fa-home fa-10x' style={{color: this.state.color}}>
                </div>
                <p>Chọn màu</p>
                <select className='form-control w-25 mt-2' onChange={(event) => {
                    // Event.target nó giống như lấy dom như es6
                    this.setState({color: event.target.value})
                }}>
                    <option value={"red"}>Red</option>
                    <option value={"green"}>Green</option>
                    <option value={"blue"}>Blue</option>
                </select>


                <div className='card w-25'>
                    <img src={this.state.img} alt="" />
                    <div className='card-body'>
                        <button className='btn btn-danger' onClick={() => {
                            this.changeAvatar();
                        }}>
                        Change</button>
                    </div>
                </div>


                <hr />

                <ChangeCarColor />
            </div>
        )
    }
}
