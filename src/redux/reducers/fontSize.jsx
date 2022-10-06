



const stateDefault =  30

export const fontSizeReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'TANG_FONT': {
            // Xử lýs
            state += action.payload;
            return state;
        };
        case 'GIAM_FONT': {
            state -= action.payload
            return state
        }
    }
    return state;
}