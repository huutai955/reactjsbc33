import React, { Component } from 'react'

export default class RenderArrayComponent extends Component {
    arrProduct = [
        { id: 1, name: 'Red Car', img: './img/product/red-car.jpg', price: 1000 },
        { id: 2, name: 'Black Car', img: './img/product/black-car.jpg', price: 2000 },
        { id: 3, name: 'Silver Car', img: './img/product/silver-car.jpg', price: 3000 },
        { id: 4, name: 'Steel Car', img: './img/product/steel-car.jpg', price: 4000 }
    ]

    renderProduct = (arrProduct) => {
        //    let arrTr = [];
        //    for (let key of arrProduct) {
        //     let trx = <tr key={key.id}>
        //         <td>{key.id}</td>
        //         <td>{key.name}</td>
        //         <td>
        //             <img src={key.img} alt=""  width={100} height={50} />
        //         </td>
        //         <td>{key.price}</td>
        //         <td>
        //             <button className='btn btn-danger'>Del</button>
        //         </td>
        //     </tr>

        //     arrTr.push(trx);
        //    }
        //    console.log(arrTr);

        let arrTr = arrProduct.map((product) => {
            return <tr>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>
                    <img src={product.img} alt="" width={100} height={50} />
                </td>
                <td>{product.price}</td>
                <td>
                    <button className='btn btn-danger'>Del</button>
                </td>
            </tr>
        })

        console.log(arrTr);
           return arrTr;
    }

    renderCardProduct = (arrProduct) => {
        return arrProduct.map((product) => {
            return  <div className="col-3 text-center" key={arrProduct.id}>
                        <img src={product.img} alt="" className='w-100' />
                        <h2 className='text-center'>{product.name}</h2>
                        <h3 className='text-center'>${product.price}</h3>
                        <button className='btn btn-success mt-4'>Add to card</button>
                    </div>
        })
    }

    render() {
        return (
            <div className='container'>
                <h3 className='text-center'>Product List</h3>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>IMG</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderProduct(this.arrProduct)}
                    </tbody>
                </table>

                <hr />

                <div className="row">
                    {/* <div className="col-3">
                        <img src="./img/product/red-car.jpg" alt="" className='w-100' />
                        <h2 className='text-center'>Red Car</h2>
                        <h3 className='text-center'>$1000</h3>
                    </div>
                    <div className="col-3">
                        <img src="./img/product/red-car.jpg" alt="" className='w-100' />
                    </div>
                    <div className="col-3">
                        <img src="./img/product/red-car.jpg" alt="" className='w-100' />
                    </div>
                    <div className="col-3">
                        <img src="./img/product/red-car.jpg" alt="" className='w-100' />
                    </div> */}
                    {this.renderCardProduct(this.arrProduct)}
                </div>
            </div>
        )
    }
}
