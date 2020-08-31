const { UPDATE_ORDER_DETAILS } = require("../Reducers/OrderDetailsReducer");

const UpdateOrderDetails =(payload)=>({
    type : UPDATE_ORDER_DETAILS,
    payload : payload
})

export default UpdateOrderDetails