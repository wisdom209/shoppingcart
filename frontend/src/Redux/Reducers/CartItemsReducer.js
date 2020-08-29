export const UPDATE_T0_CART = "UPDATE_TO_CART";
export const DELETE_FROM_CART = "DELETE_FROM_CART";

const CartItemsReducer = (state = [], { type, payload }) => {
    switch (type) {
        case UPDATE_T0_CART:
            return [ ...state, payload ].filter((val, index)=>[...state,payload].indexOf(val) === index);
        case DELETE_FROM_CART:
            return state.filter((val) => val.id !== payload.id);
        default:
            return state;
    }
};

export default CartItemsReducer;
