export const UPDATE_ORDER_DETAILS = 'UPDATE_ORDER_DETAILS'

const OrderDetailsReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case UPDATE_ORDER_DETAILS:
            return payload;
        default:
            return state;
    }
};

export default OrderDetailsReducer