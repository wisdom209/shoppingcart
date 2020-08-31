export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";

const AllProductsReducer = (state = [], { type, payload }) => {
    switch (type) {
        case GET_ALL_PRODUCTS:
            return payload;

        default:
            return state;
    }
};

export default AllProductsReducer;
