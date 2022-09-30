import React, { Component } from 'react'

export default class Tables extends Component {
  render() {
    let { arrProduct, editProd } = this.props;
    return (
      <div>
        <table className='table container'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>IMG</th>
              <th>Desc</th>
            </tr>
          </thead>
          <tbody>
            {arrProduct.map((prod, index) => {
              return <tr key={index}>
                <td>{prod.id}</td>
                <td>{prod.name}</td>
                <td>{prod.price}</td>
                <td>{prod.image}</td>
                <td>{prod.description}</td>
                <td className='text-center'>
                  <button className='btn btn-danger' onClick={() => {
                    return this.props.deleteProd(prod.id);
                  }}>Xóa</button>
                  <button className='btn btn-success' onClick={() => {
                    return editProd(prod)
                  }}>Sửa</button>
                </td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    )
  }
}
