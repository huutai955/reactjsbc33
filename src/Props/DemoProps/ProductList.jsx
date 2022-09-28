import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
    arrProduct = [
        { id: 1, name: 'Red Car', img: './img/product/red-car.jpg', price: 1000 },
        { id: 2, name: 'Black Car', img: './img/product/black-car.jpg', price: 2000 },
        { id: 3, name: 'Silver Car', img: './img/product/silver-car.jpg', price: 3000 },
        { id: 4, name: 'Steel Car', img: './img/product/steel-car.jpg', price: 4000 }
    ]

    renderProduct = (arrProduct) => {
        return arrProduct.map((prod) => {
            return <div className="w-25 mt-2">
                <ProductItem product={prod} />
            </div>
        })
    }

    render() {
        return (
            <div className='container'>
                {/* <div className="w-25 mt-2">
                    <ProductItem productName="Red car" productIMG="./img/product/red-car.jpg" />
                </div>
                <div className="w-25 mt-2">
                    <ProductItem productName="Black car" productIMG="./img/product/black-car.jpg" />
                </div> */}

                {this.renderProduct(this.arrProduct)}
            </div>
        )
    }
}
