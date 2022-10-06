

const src = './img/product/black-car.jpg'

export const imgSrc = (state = src, action) => {
    switch (action.type) {
        case 'CHANGE_COLOR': {
            state = `./img/product/${action.payload}-car.jpg`;
            return state
        }
        default: return state;
    }
    // return state;
}