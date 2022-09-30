import React, { Component } from 'react'
import Tables from '../Components/Tables/Tables';

export default class ReactForm extends Component {
  state = {
    values: {
      id: '',
      name: '',
      price: '',
      image: '',
      productType: 'iphone',
      description: ''
    },
    errors: {
      id: '',
      name: '',
      price: '',
      image: '',
      productType: '',
      description: ''
    },
    isSubmit: true,
    arrProduct: [
      {
        id: 1,
        name: 'Iphone',
        price: 2000,
        image: 'IMG',
        productType: 'iphone',
        description: 'asdas'
      },
      {
        id: 2,
        name: 'Tablet',
        price: 2000,
        image: 'IMG',
        productType: 'Tablet',
        description: 'asdas'
      }
    ]
  }

  handleInput = (e) => {
    let { id, value } = e.target;
    // console.log(id);
    let newValues = { ...this.state.values }
    let newErrors = { ...this.state.errors }
    newValues[id] = value;
    let messError = "";
    if (value.toString().trim() === "") {
      messError = id + " không được bỏ trống!!"
    }
    newErrors[id] = messError;

    let submit = false;
    for (let key in newValues) {
      if (newValues[key].toString().trim() === '') {
        submit = true;
      }
    }

    this.setState({
      values: newValues,
      errors: newErrors,
      isSubmit: submit
    }, () => {
      console.log(this.state.values)
      console.log(this.state.arrProduct)
    })

  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Kiểm tra lỗi trước khi submit
    // Lấy ra object error từ state
    let { errors } = this.state;
    for (let key in errors) {
      if (errors[key] !== '') {
        alert("Dữ liệu không hợp lệ!!");
        return
      }
    }


    // Thêm dữ liệu vào arrProdcut
    this.state.arrProduct.push(this.state.values);

    // Cập nhật lại giao diện
    this.setState({
      arrProduct: this.state.arrProduct
    })
  }

  handleUpdate = () => {
    let {arrProduct, values} = this.state;
    let productUpdate = arrProduct.find((prod) => {
      return prod.id === values.id
    })
    // productUpdate.id = this.state.values.id;
    // productUpdate.price = this.state.values.price;
    // productUpdate.description = this.state.values.description;
    // productUpdate.image = this.state.values.image;
    // productUpdate.name = this.state.values.name;
    console.log(productUpdate);


    for (let key in productUpdate) {
      productUpdate[key] = values[key];
      // console.log(productUpdate[key])
    }

    this.setState({
      arrProduct: arrProduct
    })
  }

  deleteProd = (item) => {
    this.state.arrProduct = this.state.arrProduct.filter((prod) => {
      return prod.id !== item
    })

    this.setState({
      arrProduct: this.state.arrProduct
    })
  }

  editProd = (prod) => {
    this.setState({
      values: prod
    })
  }

  render() {
    return (
      <div className='container' >
        <form onSubmit={this.handleSubmit}>
          <h3>Create Product</h3>
          <div className="card-header bg-dark text-warning">
            <h3>Product Infor</h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <p>id</p>
                  <input type="text" className='form-control' id='id' name='id' value={this.state.values.id} onInput={this.handleInput} />
                  <p className='text-danger'>{this.state.errors.id}</p>
                </div>
                <div className="form-group">
                  <p>name</p>
                  <input type="text" className='form-control' id='name' name='name' value={this.state.values.name} onInput={this.handleInput} />
                  <p className='text-danger'>{this.state.errors.name}</p>
                </div>
                <div className="form-group">
                  <p>price</p>
                  <input type="text" className='form-control' id='price' name='price' value={this.state.values.price} onInput={this.handleInput} />
                  <p className='text-danger'>{this.state.errors.price}</p>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <p>image</p>
                  <input type="text" className='form-control' id='image' name='image' value={this.state.values.image} onInput={this.handleInput} />
                  <p className='text-danger'>{this.state.errors.price}</p>
                </div>
                <div className="form-group">
                  <p>Product Type</p>
                  <select id='productType' option="asdsa" onInput={this.handleInput}>
                    <option value={"phone"}>Phone</option>
                    <option value={"tablet"}>Tablet</option>
                    <option value={"laptop"}>Laptop</option>
                  </select>
                  <p className='text-danger'>{this.state.errors.price}</p>
                </div>
                <div className="form-group">
                  <p>description</p>
                  <textarea className='form-control' name="description" id="description" value={this.state.values.description} onInput={this.handleInput}></textarea>
                  <p className='text-danger'>{this.state.errors.price}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button className='btn btn-success me-3' type='submit' disabled={this.state.isSubmit}>Create</button>
            <button className='btn btn-primary' type='button' disabled={this.state.isSubmit} onClick={() => {
              this.handleUpdate(this.state.arrProduct)
            }}>Update</button>
          </div>
        </form>
        <Tables arrProduct={this.state.arrProduct} deleteProd={this.deleteProd} editProd={this.editProd} />
      </div>



    )
  }
}
