import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducers/cartReducer';
import { fontSizeReducer } from './reducers/fontSize';
import { imgSrc } from './reducers/imgSrc';
export const store = configureStore({
    reducer: {
        // Nơi chứa toàn bộ state của ứng dụng
        fontSize: fontSizeReducer,
        imgSrc: imgSrc,
        cartReducer: cartReducer
    }
})