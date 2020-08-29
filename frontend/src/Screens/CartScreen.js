import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteFromCart } from "../Redux/Actions.js/UpdateCartItem";
import UpdateQuantity from "../Redux/Actions.js/UpdateQuantity";

function CartScreen(props) {
    // const id = props.match.params.id;
    const dispatch = useDispatch();

    const cartItems = useSelector((state) => state.cartItems);
    const selectedQuantity = useSelector((state) => state.selectedQuantity);

    const deleteItem = (item) => {
        dispatch(deleteFromCart(item));
    };

    const totalItems = () => {
        let sum = 0;
        for (let key in selectedQuantity) {
            sum = Number(selectedQuantity[key]) + sum;
        }
        return sum;
    };

    const calculatedPrice = (item) => {
        let totalPrice = Number(selectedQuantity[item.id] * item.price);

        return totalPrice.toFixed(2);
    };

    const totalPrice = () => {
        const priceArray = cartItems.map((val) => selectedQuantity[val.id] * val.price);
        let sum = 0;
        for (let i of priceArray) {
            sum = i + sum;
        }

        return sum.toFixed(2);
    };

    return (
        <div className="cartBox">
            <div className="cartDetails">
                <div className="shoppingCartHeaderTop">
                    <div className="cartTitle">Shopping Cart</div>
                    <div>Price</div>
                </div>
                <div>
                    {cartItems.length > 0 ? (
                        cartItems.map((val) => (
                            <div className="shoppingCartHeaderDetails" key={val.id}>
                                <div className="cartItemBox">
                                    <div>
                                        <img src={val.image} alt="slim shirt" />
                                    </div>
                                    <div className="cartQuantity">
                                        <div>{val.title}</div>
                                        <div>
                                            Qty :{" "}
                                            <select
                                                value={Number(Number(selectedQuantity[val.id]))}
                                                onChange={(e) => {
                                                    dispatch(UpdateQuantity({ [val.id]: e.target.value }));
                                                }}
                                            >
                                                {Array(val.quantity).fill("x").map((v, i) => {
                                                    return <option key={i}>{i + 1}</option>;
                                                })}
                                            </select>
                                            <button onClick={() => deleteItem(val)}>delete</button>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <b>${calculatedPrice(val)}</b>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div style={{ padding: "1rem" }}>No items are in the cart</div>
                    )}
                </div>
            </div>
            <div className="cartSubtotalBox">
                <div>
                    Subtotal ({totalItems()} items): ${totalPrice()}
                </div>
                <div>
                    <button>Proceed to checkout</button>
                </div>
            </div>
        </div>
    );
}

export default CartScreen;
