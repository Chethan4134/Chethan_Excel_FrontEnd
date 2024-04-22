import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

const FetchMethods = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://p-9x7e.onrender.com/products/products");
                setProducts(response.data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const handleDelete = async (deleteId) => {
        try {
            const res = await axios.delete(`https://p-9x7e.onrender.com/products/delete-product/${deleteId}`);
            if (res.data.error) {
                alert(res.data.message);
            } else {
                alert(res.data.message);
              const updatedProducts = products.filter(product => product._id !== deleteId);
                setProducts(updatedProducts);
            }
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    return (
        <Table border={1} cellPadding={0}>
            <thead>
                <tr>
                    <th>P Id</th>
                    <th>Product Name</th>
                    <th>Product Price</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product => (
                    <tr key={product._id}>
                        <td>{product._id}</td>
                        <td>{product.pName}</td>
                        <td>{product.pPrice}</td>
                        <td>{product.date}</td>
                        <td>
                            <Delete deleteId={product._id} handleDelete={handleDelete} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

const Delete = ({ deleteId, handleDelete }) => {
    return (
        <button onClick={() => handleDelete(deleteId)}>Delete</button>
    );
};

export default FetchMethods;