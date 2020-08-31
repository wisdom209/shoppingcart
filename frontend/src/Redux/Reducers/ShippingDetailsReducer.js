export const UPDATE_SHIPPING_DETAILS = "UPDATE_SHIPPING_DETAILS"

const ShippingDetailsReducer=(state="", {type, payload})=>{
    switch (type) {
        case UPDATE_SHIPPING_DETAILS:
         return payload   
        default:
            return state;
    }
}

export default ShippingDetailsReducer