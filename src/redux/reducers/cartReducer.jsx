// rxreducer
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [

  ]
}

const cartReducer = createSlice({
  name: 'cartReducer',
  initialState,
  reducers: {
    addNewProduct: (state, { type, payload }) => {
      const itemCart = payload;
      // Xử Lý Thay Đổi state
      let index = state.cart.findIndex((prod) => {
        return prod.id === itemCart.id
      })
      if (index !== -1) {
        state.cart[index].quantity += 1
      } else {
        state.cart.push(itemCart);
      }
    },
    deleteItem: (state, {type, payload}) => {
      // B1: LẤY DỮ LIỆU PAYLOAD GỬI LÊN
      const id = payload
      state.cart = state.cart.filter((prod) => {
        return prod.id !== id
      })
    },

    increaseQuantity: (state, {type, payload}) => {
      const id = payload
      let item = state.cart.find((item) => {
        return item.id === id;
      })

      item.quantity += 1;
    },

    decreaseQuantity: (state, {type, payload}) => {
      const id = payload
      let item = state.cart.find((item) => {
        return item.id === id;
      })

      item.quantity -= 1;
    }
  }
});

export const { addNewProduct, deleteItem, increaseQuantity, decreaseQuantity, totalItem } = cartReducer.actions

export default cartReducer.reducer

// const initialState = {
//   cart: [

//   ]
// }

// export default (state = initialState, { type, payload }) => {
//   switch (type) {

//     case 'ADD_NEW_PRODUCT': {
//       const itemCart = payload;
//       // Xử Lý Thay Đổi state
//       let index = state.cart.findIndex((prod) => {
//         return prod.id === itemCart.id
//       })
//       if (index !== -1) {
//         state.cart[index].quantity += 1
//       }else {
//         state.cart.push(itemCart);
//       }
//     }

//     default:
//       return state
//   }
// }
