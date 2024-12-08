import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemList = () => {
    const [items, setItems] = useState([]);
    const [editItem, setEditItem] = useState(null);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = () => {
        axios.get('http://127.0.0.1:8080/api/items/')
            .then((response) => setItems(response.data))
            .catch((error) => console.error('Error fetching items:', error));
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            axios.delete(`http://127.0.0.1:8080/api/items/${id}/`)
                .then(() => fetchItems())
                .catch((error) => console.error('Error deleting item:', error));
        }
    };

    const handleEdit = (item) => {
        setEditItem(item);
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        if (editItem) {
            axios.put(`http://127.0.0.1:8080/api/items/${editItem.id}/`, editItem)
                .then(() => {
                    setEditItem(null);
                    fetchItems();
                })
                .catch((error) => console.error('Error updating item:', error));
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditItem((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Inventory Management System</h2>

            {/* Edit Form */}
            {editItem && (
                <form onSubmit={handleUpdate} className="mb-4">
                    <h4>Edit Item</h4>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control mb-2"
                            name="name"
                            value={editItem.name}
                            onChange={handleChange}
                            placeholder="Name"
                            required
                        />
                        <textarea
                            className="form-control mb-2"
                            name="description"
                            value={editItem.description}
                            onChange={handleChange}
                            placeholder="Description"
                            required
                        />
                        <input
                            type="number"
                            className="form-control mb-2"
                            name="quantity"
                            value={editItem.quantity}
                            onChange={handleChange}
                            placeholder="Quantity"
                            required
                        />
                        <input
                            type="number"
                            className="form-control mb-2"
                            name="price"
                            value={editItem.price}
                            onChange={handleChange}
                            placeholder="Price"
                            required
                        />
                        <button type="submit" className="btn btn-primary">
                            Save Changes
                        </button>
                        <button
                            type="button"
                            className="btn btn-secondary ml-2"
                            onClick={() => setEditItem(null)}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            )}

            {/* Item Table */}
            <table className="table table-bordered table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>{item.quantity}</td>
                            <td>${item.price}</td>
                            <td>
                                <button
                                    className="btn btn-warning btn-sm mx-1"
                                    onClick={() => handleEdit(item)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handleDelete(item.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ItemList;
