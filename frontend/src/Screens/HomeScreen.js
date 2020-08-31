import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import UpdateCartItems from "../Redux/Actions.js/UpdateSelectedItems";
import UpdateAllProducts from "../Redux/Actions.js/UpdateAllProducts";

function HomeScreen() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);

    useEffect(() => {
        axios.get("/api/products/").then((response) => {
            if (response) {
                dispatch(UpdateAllProducts(response.data));
            }
        });
    }, [dispatch]);

    const addToCart = (item) => {
        dispatch(UpdateCartItems(item));
    };

    return (
        <div className="itemGallery">
            {products.map((val) => (
                <div key={val._id} className="itemBox">
                    <div className="itemImageBox">
                        <Link to={`selectedproduct/${val._id}`}>
                            {" "}
                            <img src={val.image} onClick={() => addToCart(val)} alt="slim shirt" />
                        </Link>
                    </div>

                    <div className="itemName">
                        <Link to={`selectedproduct/${val._id}`} onClick={() => addToCart(val)}>
                            <b>{val.title}</b>
                        </Link>
                    </div>
                    <div className="itemBrand">{val.category}</div>
                    <div className="itemPrice">
                        <b>${val.price}</b>
                    </div>
                    <div className="itemRating">0 starts (0 Reviews)</div>
                </div>
            ))}
        </div>
    );
}

export default HomeScreen;
