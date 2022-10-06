import React, { Component } from 'react'
import { connect } from 'react-redux'
import { decreaseQuantity, deleteItem, increaseQuantity } from '../../redux/reducers/cartReducer'
class Cart extends Component {
    
    render() {
        return (
            <div className='container'>
                <h3>Cart</h3>
                <h4>Total {this.props.cart.reduce((total, currentItem) => {
                    return total + currentItem.quantity
                }, 0)}</h4>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>IMG</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.cart.map((prod, index) => {
                            return <tr key={index}>
                            <td>{prod.id}</td>
                            <td>{prod.name}</td>
                            <td>
                                <img src={prod.image} width={50} height={50} alt="" />
                            </td>
                            <td>{prod.price}</td>
                            <td>
                                <button className='btn btn-danger me-2' onClick={() => {
                                    const action = increaseQuantity(prod.id);
                                    return this.props.dispatch(action)
                                }}>+</button>
                                {prod.quantity}
                                <button className='btn btn-danger ms-2' onClick={() => {
                                    const action = decreaseQuantity(prod.id);
                                    return this.props.dispatch(action)
                                }}>-</button></td>
                            <td>{prod.total}</td>
                            <td>
                                <button className='btn btn-danger' onClick={() => {
                                    // Tạo ra action đưa dữ liệu lên redux
                                    const action = deleteItem(prod.id);
                                    return this.props.dispatch(action)
                                }}>Del</button>
                            </td>
                        </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cart: state.cartReducer.cart
})


export default connect(mapStateToProps)(Cart)