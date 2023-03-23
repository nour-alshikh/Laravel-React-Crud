import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Index = () => {

    const navigate = useNavigate();

    const [products, setProducts] = useState([]);

    const newProduct = () => {
        navigate('/products/new');
    }

    useEffect(() => {
        getAllProducts()
    }, [])

    const getAllProducts = async () => {
        await axios.get('/api/get_products')
            .then(({ data }) => {
                setProducts(data)
            })
    }

    const editProduct = (id) => {
        navigate('/products/edit/' + id);
    }

    const deleteProduct = (id) => {
        Swal.fire({
            title: "Are you sure you want to delete this product ?",
            text: "You can't revert this process",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "yes, delete it",
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33"
        })
            .then((result) => {
                if (result.isConfirmed) {
                    axios.get(`/api/delete_product/${id}`)
                        .then(() => {
                            Swal.fire(
                                'Deleted', 'Product Deleted Successfully', 'success'
                            )
                        })
                    getAllProducts();
                }
            })
    }

    const showProduct = (id) => {
        navigate('/products/show/' + id)
    }

    return (
        <div className="body">
            <div className="container my-5">
                <div className="row justify-content-between align-items-center w-100">
                    <div className="col-md-6">
                        <h2 className="m-0 d-inline-block title">Products</h2>
                    </div>
                    <div className="col-md-6">
                        <span className="details conspan"></span>
                        <div className="button ms-auto">
                            <button onClick={() => newProduct()}>Add New Product</button>
                        </div>
                    </div>
                </div>
                <table className="table table-hover my-5 text-center">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Type</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">price</th>
                            <th scope="col">actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.length > 0 && (
                                products.map((item, key) => (
                                    <tr key={key} className="cursor">
                                        <th scope="row">{key + 1}</th>
                                        <td onClick={(e) => showProduct(item.id)} >{item.name}</td>
                                        <td onClick={(e) => showProduct(item.id)} >{item.desc}</td>
                                        <td onClick={(e) => showProduct(item.id)} >{item.type}</td>
                                        <td onClick={(e) => showProduct(item.id)} >{item.quantity}</td>
                                        <td onClick={(e) => showProduct(item.id)} >{item.price}</td>
                                        <td>
                                            <div className="row align-items-center justify-content-between">
                                                <div className="col-md-6">
                                                    <span className="details conspan"></span>
                                                    <div className="buttond ms-auto">
                                                        <button className="button-del" onClick={() => deleteProduct(item.id)}>Delete</button>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <span className="details conspan"></span>
                                                    <div className="buttonu ms-auto">
                                                        <button className="button-up" onClick={() => editProduct(item.id)}>Edit</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )
                        }
                    </tbody>
                </table>
                {
                    products.length > 0 || (<h2 className="text-center">there are no products...</h2>)
                }
            </div>
        </div >
    )
}

export default Index;
