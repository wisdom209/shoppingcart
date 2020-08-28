import React from "react";
import { Link } from "react-router-dom";

function SelectedProduct() {
    return (
        <div>
            <div style={{ margin: "3rem 0rem 0rem 0.5rem" }}>
                <Link to="/">Back to results</Link>
            </div>
            <div className="selectedProductBox" >
                <div className="selectedImage"> <img src="/ProjectImages/1.jpg" alt="product logo"/></div>
                <div className="selectedDetails">
                    <div><b>Slim Shirts</b></div>
                    <div>0 Stars</div>
                    <div>(0 Customer Reviews)</div>
                    <div>Price: <b>$40</b></div>
                    <div>Description: Sleek and Comfy</div>
                </div>
                <div className="selectToCartDetails">
                    <div>Price $40</div>
                    <div>Status: In Stock</div>
                    <div>Qty : <select><option>1</option><option>2</option> <option>3</option></select></div>
                    <button>Add to Cart</button>
                </div>
            </div>
          
        </div>
    );
}

export default SelectedProduct;
