import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Products = () => {
    const [products, setProducts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = () => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/products`,{
            headers:{
                authorization:JSON.parse(window.localStorage.getItem('token'))
            }
        }).then((res) => {
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

    const search = (event) => {
        let key = event.target.value;
        if (key) {
            axios.get(`${process.env.REACT_APP_BASE_URL}/search/${key}`).then((res) => {
                setProducts(res.data)
            }).catch(err => console.log(err))
        } else {
            getProducts()
        }
    }


    return <div>
        <h1>Products</h1>
        <input type="text" placeholder='Search Product' className='search_box' onChange={search} />
        {products.length > 0 ? <table className='product-table'>
            <thead>
                <tr className='product-row'>
                    <th>Product</th>
                    <th>Company</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Operation</th>
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
                        <td>
                            <button onClick={() => navigate(`/update/${item._id}`)} >Update</button>
                        </td>
                    </tr>
                    )
                }
            </tbody>
        </table> : <h1>No products found</h1>}
    </div>
}

export default Products;
