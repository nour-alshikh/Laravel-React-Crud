import axios from "axios";
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

import '../../../../resources/css/new.css';

const New = () => {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [type, setType] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');

    const createProduct = async (e) => {
        e.preventDefault();
        const form = new FormData()

        form.append('name', name);
        form.append('desc', desc);
        form.append('type', type);
        form.append('quantity', quantity);
        form.append('price', price);

        await axios.post('/api/add_product', form)
            .then(({ data }) => {
                toast.fire({
                    icon: 'success',
                    title: 'Product Added Sucessfully'
                })
                navigate('/')
            })
            .catch(({ res }) => {

            })
    }

    const getBack = (e) => {
        e.preventDefault()
        navigate('/');
    }

    return (
        <div className="body">
            <div className="container-new">
                <div className="title">Add New Product</div>
                <div className="content">
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">Name</span>
                            <input type="text" required placeholder="Enter Your Product's Name" value={name} onChange={(e) => { setName(e.target.value) }} />
                        </div>
                        <div className="input-box">
                            <span className="details">Description</span>
                            <input type="text" required placeholder="Enter Your Product's Description" value={desc} onChange={(e) => { setDesc(e.target.value) }} />
                        </div>
                        <div className="input-box">
                            <span className="details">Type</span>
                            <input type="text" required placeholder="Enter Your Product's Type" value={type} onChange={(e) => { setType(e.target.value) }} />
                        </div>
                        <div className="input-box">
                            <span className="details">Quantity</span>
                            <input type="text" required placeholder="Enter Your Product's Quantity" value={quantity} onChange={(e) => { setQuantity(e.target.value) }} />
                        </div>
                        <div className="input-box">
                            <span className="details">Price</span>
                            <input type="text" required placeholder="Enter Your Product's Price" value={price} onChange={(e) => { setPrice(e.target.value) }} />
                        </div>
                        <div className="input-box d-flex justify-content-center align-items-end">
                            <span className="details conspan"></span>
                            <div className="button me-1">
                                <button onClick={(e) => createProduct(e)} >Add</button>
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


export default New;
