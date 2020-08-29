export const UPDATE_QUANTITY_IN_CART = "UPDATE_QUANTITY_IN_CART";

const QuantityReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case UPDATE_QUANTITY_IN_CART:
            return Object.assign({}, state, payload);
        default:
          return state;
    }
};

export default QuantityReducer
