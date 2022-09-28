import React, { Component } from 'react'

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
    }
  }

  handleInput = (e) => {
    let {id, value} = e.target;
    // console.log(id);
    let newValues = {...this.state.values}
    let newErrors = {...this.state.errors}
    newValues[id] = value;
    let messError = "";
    if (value.trim() === "") {
      messError = id + " không được bỏ trống!!"
    } 
    newErrors[id] = messError;

    this.setState({
      values:  newValues,
      errors: newErrors
    }, () => {
      console.log(this.state.values)
      // console.log(this.state.errors)
    })

  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <form className='container' onSubmit={this.handleSubmit}>
        <h3>Create Product</h3>
        <div className="card-header bg-dark text-warning">
          <h3>Product Infor</h3>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <p>id</p>
                <input type="text" className='form-control' id='id' name='id' onInput={this.handleInput}/>
                <p className='text-danger'>{this.state.errors.id}</p>
              </div>
              <div className="form-group">
                <p>name</p>
                <input type="text" className='form-control' id='name' name='name' onInput={this.handleInput}/>
                <p className='text-danger'>{this.state.errors.name}</p>
              </div>
              <div className="form-group">
                <p>price</p>
                <input type="text" className='form-control' id='price' name='price' onInput={this.handleInput}/>
                <p className='text-danger'>{this.state.errors.price}</p>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <p>image</p>
                <input type="text" className='form-control' id='image' name='image' onInput={this.handleInput}/>
                <p className='text-danger'>{this.state.errors.price}</p>
              </div>
              <div className="form-group">
                <p>Product Type</p>
                <select id='productType' onInput={this.handleInput}>
                  <option value={"phone"}>Phone</option>
                  <option value={"tablet"}>Tablet</option>
                  <option value={"laptop"}>Laptop</option>
                </select>
                <p className='text-danger'>{this.state.errors.price}</p>
              </div>
              <div className="form-group">
                <p>description</p>
                <textarea className='form-control' name="description" id="description" onInput={this.handleInput}></textarea>
                <p className='text-danger'>{this.state.errors.price}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button className='btn btn-success' type='submit'>Create</button>
        </div>
      </form>
    )
  }
}
