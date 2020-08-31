import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookie from "js-cookie";
import axios from "axios";
import UpdateAllProducts from "../Redux/Actions.js/UpdateAllProducts";

function CreateProduct() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);

    useEffect(
        () => {
            axios.get("/api/products/").then((response) => {
                if (response) {
                    dispatch(UpdateAllProducts(response.data));
                }
            });
        },
        [ dispatch ]
    );

    const [ id, setId ] = useState("");
    const [ name, setName ] = useState("");
    const [ price, setPrice ] = useState("");
    const [ category, setCategory ] = useState("");
    const [ image, setImage ] = useState("");
    const [ brand, setBrand ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ quantity, setQuantity ] = useState("");
    const [ rating, setRating ] = useState("");
    const [ numOfReviews, setNumOfReviews ] = useState("");

    const [ showProducts, setShowProducts ] = useState(true);
    const token = Cookie.get("token");

    const createAProduct = (e) => {
        e.preventDefault();
        const productToSend = {
            title        : name,
            price,
            category,
            brand,
            description,
            image,
            quantity,
            rating,
            numOfReviews : numOfReviews
        };
        axios
            .post("/api/products/createproduct", productToSend, { headers: { authorization: `Bearer ${token}` } })
            .then((response) => console.log(response.data))
            .catch((err) => console.log(err));
    };

    const editProduct = () => {};

    const deleteProduct = (id) => {
        const token = Cookie.get("token");
        console.log(token);
        axios
            .delete("/api/products/deleteproduct", { params: { id: id }, headers: { authorization: `Bearer ${token}` } })
            .then((responser) => {
                axios.get("/api/products/").then((response) => {
                    if (response) {
                        dispatch(UpdateAllProducts(response.data));
                    }
                });
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="createProduct">
            <div>
                <button
                    style={{ padding: "0.5rem", margin: "0.5rem" }}
                    onClick={() => {
                        setShowProducts(!showProducts);
                    }}
                >
                    {showProducts ? "create product" : "Show Products"}
                </button>
            </div>

            {
                <div>
                    {showProducts ? (
                        <div>
                            <div className="createTableTitle">Products</div>
                            <table className="createProductTable">
                                <thead>
                                    <tr>
                                        <th>id</th>

                                        <th>Name</th>

                                        <th>Price</th>

                                        <th>Category</th>

                                        <th>Brand</th>

                                        <th>Description</th>

                                        <th>Rating</th>

                                        <th>Number of Reviews</th>

                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((val) => {
                                        return (
                                            <tr key={val._id}>
                                                <td>{val._id}</td>
                                                <td>{val.title}</td>
                                                <td>${val.price}</td>
                                                <td>{val.category}</td>
                                                <td>{val.brand}</td>
                                                <td>{val.description}</td>
                                                <td>{val.rating}</td>
                                                <td>{val.NumOfReviews}</td>
                                                <td>
                                                    <button onClick={() => editProduct(val._id)}>Edit</button>{" "}
                                                    <button onClick={() => deleteProduct(val._id)}>Delete</button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <center>
                            <center className="signInDiv">
                                <form onSubmit={createAProduct}>
                                    <div className="signInHeader">
                                        <b>Create Product</b>
                                    </div>
                                    <div className="inputDiv">
                                        <label htmlFor="Name">
                                            <div>
                                                <b>Name</b>
                                            </div>
                                            <div>
                                                <input
                                                    type="text"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                            </div>
                                        </label>
                                    </div>
                                    <div className="inputDiv">
                                        <label htmlFor="Price">
                                            <div>
                                                <b>Price</b>
                                            </div>
                                            <div>
                                                <input
                                                    type="number"
                                                    value={price}
                                                    onChange={(e) => setPrice(e.target.value)}
                                                />
                                            </div>
                                        </label>
                                    </div>
                                    <div className="inputDiv">
                                        <label htmlFor="Price">
                                            <div>
                                                <b>Brand</b>
                                            </div>
                                            <div>
                                                <input
                                                    type="text"
                                                    value={brand}
                                                    onChange={(e) => setBrand(e.target.value)}
                                                />
                                            </div>
                                        </label>
                                    </div>
                                    <div className="inputDiv">
                                        <label htmlFor="Image">
                                            <div>
                                                <b>Image</b>
                                            </div>
                                            <div>
                                                <input
                                                    type="text"
                                                    value={image}
                                                    onChange={(e) => setImage(e.target.value)}
                                                />
                                            </div>
                                        </label>
                                    </div>
                                    <div className="inputDiv">
                                        <label htmlFor="Count in stock">
                                            <div>
                                                <b>Count in stock</b>
                                            </div>
                                            <div>
                                                <input
                                                    type="number"
                                                    value={quantity}
                                                    onChange={(e) => setQuantity(e.target.value)}
                                                />
                                            </div>
                                        </label>
                                    </div>
                                    <div className="inputDiv">
                                        <label htmlFor="Description">
                                            <div>
                                                <b>Description</b>
                                            </div>
                                            <div>
                                                <input
                                                    type="text"
                                                    value={description}
                                                    onChange={(e) => setDescription(e.target.value)}
                                                />
                                            </div>
                                        </label>
                                    </div>
                                    <div className="inputDiv">
                                        <label htmlFor="Category">
                                            <div>
                                                {" "}
                                                <b>Category</b>{" "}
                                            </div>
                                            <div>
                                                <input
                                                    type="text"
                                                    value={category}
                                                    onChange={(e) => setCategory(e.target.value)}
                                                />
                                            </div>
                                        </label>
                                    </div>
                                    <div className="inputDiv">
                                        <label htmlFor="Rating">
                                            <div>
                                                <b>Rating</b>
                                            </div>
                                            <div>
                                                <input
                                                    type="number"
                                                    value={rating}
                                                    onChange={(e) => setRating(e.target.value)}
                                                />
                                            </div>
                                        </label>
                                    </div>
                                    <div className="inputDiv">
                                        <label htmlFor="Number of reviews">
                                            <div>
                                                <b>Number of reviews</b>
                                            </div>
                                            <div>
                                                <input
                                                    type="number"
                                                    value={numOfReviews}
                                                    onChange={(e) => setNumOfReviews(e.target.value)}
                                                />
                                            </div>
                                        </label>
                                    </div>

                                    <div className="inputDiv">
                                        <button type="submit" className="signInBtn">
                                            Create product
                                        </button>
                                    </div>
                                </form>
                            </center>
                        </center>
                    )}
                </div>
            }
        </div>
    );
}

export default CreateProduct;
