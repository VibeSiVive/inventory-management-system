import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8080/api/items/')
            .then(response => setItems(response.data))
            .catch(error => console.error('Error fetching items:', error));
    }, []);

    return (
        <div>
            <h1>Inventory Items</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name} - {item.quantity} pcs @ ${item.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
