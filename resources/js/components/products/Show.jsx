import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Show = () => {

    const navigate = useNavigate();
    const { id } = useParams();

    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [type, setType] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");

    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = async () => {
        await axios.get(`/api/show_product/${id}`)
            .then(({ data }) => {
                setName(data.name)
                setDesc(data.desc)
                setType(data.type)
                setQuantity(data.quantity)
                setPrice(data.price)
            }).catch((err) => {
                console.log(err);
            })
    }

    const getBack = (e) => {
        e.preventDefault();
        navigate('/')
    }

    return (
        <div className="body">
            <div className="container-new glass">
                <div className="fs-2 fw-semibold">Product's Name : <span className="fw-bold">{name}</span></div>
                <div className="fs-2 fw-semibold">Product's Description : <span className="fw-bold">{desc}</span></div>
                <div className="fs-2 fw-semibold">Product's Type : <span className="fw-bold">{type}</span></div>
                <div className="fs-2 fw-semibold">Product's Quantity : <span className="fw-bold">{quantity}</span></div>
                <div className="fs-2 fw-semibold">Product's Price : <span className="fw-bold">{price}</span></div>
                <div>
                    <span className="details conspan"></span>
                    <div className="buttonc ms-auto">
                        <button className="button-del" onClick={(e) => getBack(e)}>Back</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Show
