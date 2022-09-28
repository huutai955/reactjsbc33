import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    const {id, name, img, price} = this.props.product;
    return (
      <div className='card'>
        <img src={img} alt="" />
        <div className="card-body">
            <p>{name}</p>
            <p>{price}</p>
            <button className='btn btn-dark'>Add to card</button>
        </div>
      </div>
    )
  }
}
