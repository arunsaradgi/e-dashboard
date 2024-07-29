import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

const UpdateProduct = () => {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/product/${id}`).then((res) => {
            console.log(res.data)
            let product = res.data
            setName(product.name)
            setPrice(product.price)
            setCategory(product.category)
            setCompany(product.company);
            
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const update = () => {
        axios.put(`${process.env.REACT_APP_BASE_URL}/product/${id}`, { name, price, category, company }).then((res) => {
            console.log(res)
            if (res) {
                navigate('/');
            }
        }).catch((err) => {
            console.log(err)
        })
    };


    return (
        <div className="SignUp">
            <h1>Update Product</h1>
            <input
                type="text"
                className="inputBox"
                placeholder="enter name"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />

            <input
                type="text"
                className="inputBox"
                placeholder="enter price"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
            />

            <input
                type="text"
                className="inputBox"
                placeholder="enter category"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
            />

            <input
                type="text"
                className="inputBox"
                placeholder="enter company"
                onChange={(e) => setCompany(e.target.value)}
                value={company}
            />

            <button className="Button" onClick={update}>
                Update product
            </button>
        </div>
    )
}

export default UpdateProduct
