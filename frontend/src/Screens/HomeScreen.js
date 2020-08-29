import React from "react";
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux"
import { data1 } from "../data1";
import UpdateCartItems from "../Redux/Actions.js/UpdateSelectedItems";

function HomeScreen() {
    const dispatch = useDispatch();
   
    const addToCart=(item)=>{
        dispatch(UpdateCartItems(item))
    }

    return (
        <div className="itemGallery">
            {data1.map((val) => (
                <div key={val.id} className="itemBox">
                    <div className="itemImageBox">
                        <Link to={`selectedproduct/${val.id}`}>
                            {" "}
                            <img src={val.image} onClick={()=>addToCart(val)} alt="slim shirt" />
                        </Link>
                    </div>

                    <div className="itemName">
                        <Link to={`selectedproduct/${val.id}`} onClick={()=>addToCart(val)}>
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
