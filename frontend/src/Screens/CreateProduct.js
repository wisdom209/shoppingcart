import React from "react";

function CreateProduct() {
    return (
        <div className="createProduct">
            <button>Create Products/show products</button>
            <div className="createTableTitle">Products</div>
            <div>
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
                        <tr>
                            <td>101</td>
                            <td>Slim shirt</td>
                            <td>$309</td>
                            <td>Shirts</td>
                            <td>Nike</td>
                            <td>Sleek and comfy</td>
                            <td>4.3</td>
                            <td>9</td>
                            <td>
                                <button>Edit</button> <button>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        // <center>
        //     <center className="signInDiv">
        //         <form>
        //             <div className="signInHeader">
        //                 <b>Create Product</b>
        //             </div>
        //             <div className="inputDiv">
        //                 <label htmlFor="Name">
        //                     <div>
        //                         <b>Name</b>
        //                     </div>
        //                     <div>
        //                         <input type="text" value="" />
        //                     </div>
        //                 </label>
        //             </div>
        //             <div className="inputDiv">
        //                 <label htmlFor="Price">
        //                     <div>
        //                         <b>Price</b>
        //                     </div>
        //                     <div>
        //                         <input type="number" value="" />
        //                     </div>
        //                 </label>
        //             </div>
        //             <div className="inputDiv">
        //                 <label htmlFor="Image">
        //                     <div>
        //                         <b>Image</b>
        //                     </div>
        //                     <div>
        //                         <input type="text" value="" />
        //                     </div>
        //                 </label>
        //             </div>
        //             <div className="inputDiv">
        //                 <label htmlFor="Count in stock">
        //                     <div>
        //                         <b>Count in stock</b>
        //                     </div>
        //                     <div>
        //                         <input type="number" value="" />
        //                     </div>
        //                 </label>
        //             </div>
        //             <div className="inputDiv">
        //                 <label htmlFor="Description">
        //                     <div>
        //                         <b>Description</b>
        //                     </div>
        //                     <div>
        //                         <input type="text" value="" />
        //                     </div>
        //                 </label>
        //             </div>
        //             <div className="inputDiv">
        //                 <label htmlFor="Category">
        //                     <div>
        //                         {" "}
        //                         <b>Category</b>{" "}
        //                     </div>
        //                     <div>
        //                         <input type="text" value="" />
        //                     </div>
        //                 </label>
        //             </div>
        //             <div className="inputDiv">
        //                 <label htmlFor="Rating">
        //                     <div>
        //                         <b>Rating</b>
        //                     </div>
        //                     <div>
        //                         <input type="number" value="" />
        //                     </div>
        //                 </label>
        //             </div>
        //             <div className="inputDiv">
        //                 <label htmlFor="Number of reviews">
        //                     <div>
        //                         <b>Number of reviews</b>
        //                     </div>
        //                     <div>
        //                         <input type="number" value="" />
        //                     </div>
        //                 </label>
        //             </div>

        //             <div className="inputDiv">
        //                 <button className="signInBtn">Create product</button>
        //             </div>
        //         </form>
        //     </center>
        // </center>
    );
}

export default CreateProduct;
