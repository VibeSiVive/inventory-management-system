import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemForm from './ItemForm'; // Your form for adding items
import ItemList from './ItemList'; // Your item list component

const App = () => {
    const [items, setItems] = useState([]);

    const refreshItems = () => {
        axios.get('http://127.0.0.1:8080/api/items/')
            .then((response) => setItems(response.data))
            .catch((error) => console.error('Error fetching items:', error));
    };

    useEffect(() => {
        refreshItems();
    }, []);

    return (
        <div className="container mt-4">
            <h1 className="text-center">Welcome to Inventory Management System</h1>
            <ItemForm refreshItems={refreshItems} />
            <ItemList items={items} />
        </div>
    );
};

export default App;
