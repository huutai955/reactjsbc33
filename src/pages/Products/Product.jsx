import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios';
import { addNewProduct } from '../../redux/reducers/cartReducer';


class Product extends Component {
  state = {
    arrProduct: []
  };
  async componentDidMount() {
    try {
      const result = await axios.get('https://shop.cyberlearn.vn/api/product');
      await this.setState({
        arrProduct: result.data.content
      });
      console.log(result.data.content)
    } catch (err) {
      console.log(err)
    }
  }

  renderProduct = (arr) => {
    return arr.map((prod, index) => {
      return <div className="col-3" key={index}>
        <div className="card">
          <img src={prod.image} className='w-100' alt="" />
          <div className="card-body">
            <h3>{prod.name}</h3>
            <p>{prod.price}</p>
            <button className='btn btn-dark' onClick={() => {
              const itemCart = {...prod, quantity: 1};
              // const action = {
              //   type: 'cartReducer/addNewProduct',
              //   payload: itemCart
              // }

              const action = addNewProduct(itemCart)
              this.props.dispatch(action)
            }}>Add to cart</button>
          </div>
        </div>
      </div>
    })
  }

  render() {
    return (
      <div className='container'>
        <h3>Product List</h3>
        <div className="row">
          {/* <div className="col-3">
            <div className="card">
              <img src="https://i.pravatar.cc/300" className='w-100' alt="" />
              <div className="card-body">
                <h3>Product Name</h3>
                <p>Product price</p>
                <button className='btn btn-dark'>Add to cart</button>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card">
              <img src="https://i.pravatar.cc/300" className='w-100' alt="" />
              <div className="card-body">
                <h3>Product Name</h3>
                <p>Product price</p>
                <button className='btn btn-dark'>Add to cart</button>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card">
              <img src="https://i.pravatar.cc/200" className='w-100' alt="" />
              <div className="card-body">
                <h3>Product Name</h3>
                <p>Product price</p>
                <button className='btn btn-dark'>Add to cart</button>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card">
              <img src="https://i.pravatar.cc/100" className='w-100' alt="" />
              <div className="card-body">
                <h3>Product Name</h3>
                <p>Product price</p>
                <button className='btn btn-dark'>Add to cart</button>
              </div>
            </div>
          </div> */}
          {this.renderProduct(this.state.arrProduct)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})



export default connect(mapStateToProps)(Product)