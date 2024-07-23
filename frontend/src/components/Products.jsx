import React, { useEffect, useState } from 'react';
import axios from 'axios'
const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()

    }, [])

    const getProducts = () => {

        axios.get(`${process.env.REACT_APP_BASE_URL}/products`).then((res) => {
            return setProducts(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    const deleteProduct = (item) => {
        axios.delete(`${process.env.REACT_APP_BASE_URL}/delete-product/${item._id}`).then((res) => {
            console.warn(res);
            getProducts()
        }).catch(err => console.log(err))
    }

    // console.warn(products)
    return <div>
        <h1>Products</h1>
        <table className='product-table'>
            <thead>
                <tr className='product-row'>
                    <th>Product</th>
                    <th>Company</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Operation</th>
                </tr>
            </thead>

            <tbody>
                {
                    products.map((item, index) => <tr className='product-row' key={index}>
                        <td>{item.name}</td>
                        <td>{item.company}</td>
                        <td>{item.price}</td>
                        <td>{item.category}</td>
                        <td>
                            <button onClick={() => deleteProduct(item)}>Delete</button>
                        </td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    </div>
}

export default Products;
