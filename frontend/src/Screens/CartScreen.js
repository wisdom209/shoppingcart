import React from "react";

function CartScreen() {
    return (
        <div className="cartBox">
            <div className="cartDetails">
                <div className="shoppingCartHeaderTop">
                    <div className="cartTitle">
                        Shopping Cart
                    </div>
                    <div>Price</div>
                </div>
                <div className="shoppingCartHeaderDetails">
                    <div className="cartItemBox">
                        <div>
                            <img src="/ProjectImages/2.jpg" alt="slim shirt" />
                        </div>
                        <div className="cartQuantity">
                            <div>Slim Shirts</div>
                            <div>
                                Qty :{" "}
                                <select>
                                    <option>1</option> <option>2</option> <option>3</option>
                                </select>
                                <button>delete</button>
                            </div>
                        </div>
                    </div>
                    <div>$100</div>
                </div>
            </div>
            <div className="cartSubtotalBox">
                <div>Subtotal (1 items): $40</div>
                <div>
                    <button>Proceed to checkout</button>
                </div>
            </div>
        </div>
    );
}

export default CartScreen;
