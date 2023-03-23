import axios from "axios";
import { Toast } from "bootstrap";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {

    const navigate = useNavigate();

    const { id } = useParams();


    const [name, setName] = useState("");
    const [desc, setDesc] = useState('');
    const [type, setType] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');

    useEffect(() => {
        getProduct();
    }, [])

    const getProduct = async () => {
        await axios.get(`/api/get_product/${id}`)
            .then(({ data }) => {
                setName(data.name);
                setDesc(data.desc);
                setType(data.type);
                setQuantity(data.quantity);
                setPrice(data.price);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const updateProduct = async (e) => {
        e.preventDefault();
        const form = new FormData;

        form.append('name', name);
        form.append('desc', desc);
        form.append('type', type);
        form.append('quantity', quantity);
        form.append('price', price);

        await axios.post(`/api/update_product/${id}`, form)
            .then(({ data }) => {
                toast.fire({
                    icon: 'success',
                    title: 'Product Updated Sucessfully'
                })
                navigate('/')
            }).catch((err) => {

            })
    }

    const getBack = (e) => {
        e.preventDefault()
        navigate('/')
    }


    return (
        <div className="body">
            <div className="container-new">
                <div className="title">Edit Product</div>
                <div className="content">
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">Name</span>
                            <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
                        </div>
                        <div className="input-box">
                            <span className="details">Description</span>
                            <input value={desc} onChange={(e) => { setDesc(e.target.value) }} />
                        </div>
                        <div className="input-box">
                            <span className="details">Type</span>
                            <input type="text" value={type} onChange={(e) => { setType(e.target.value) }} />
                        </div>
                        <div className="input-box">
                            <span className="details">Quantity</span>
                            <input type="text" value={quantity} onChange={(e) => { setQuantity(e.target.value) }} />
                        </div>
                        <div className="input-box">
                            <span className="details">Quantity</span>
                            <input type="text" value={price} onChange={(e) => { setPrice(e.target.value) }} />
                        </div>
                        <div className="input-box d-flex justify-content-center align-items-end">
                            <span className="details conspan"></span>
                            <div className="button me-1">
                                <button onClick={(e) => updateProduct(e)} >Update</button>
                            </div>
                            <span className="details conspan"></span>
                            <div className="buttonc ms-1">
                                <button className="button-del" onClick={(e) => getBack(e)} >Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Edit;
