# **Inventory Management System**

A inventory management system built with **React** (frontend) and **Django REST Framework** (backend). This app enables users to manage inventory items with features like adding, viewing, updating, and deleting records. It’s designed for businesses to efficiently track their inventory.

---

## **Features**

- **Add Items**: Add new items to your inventory with details like name, description, quantity, and price.
- **View Items**: Browse all inventory items with an easy-to-read list.
- **Edit Items**: Update details of existing items in your inventory.
- **Delete Items**: Remove items no longer needed.
- **Real-time Updates**: See changes reflected instantly in the UI after every action.

---

## **Getting Started**

Follow these instructions to set up and run the project locally.

### **Prerequisites**

Ensure you have the following installed on your system:

- **Python 3.8+**
- **Node.js** and **npm** (download from [Node.js](https://nodejs.org/))

---

### **Installation**

#### Backend Setup:

1. **Clone the repository**:
   ```bash
   git clone <your-repository-link>
   cd inventory-management-system/backend
   ```
2. **Create a virtual environment**:
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```
3. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```
4. **Run database migrations**:
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```
5. **Start the backend server**:
   ```bash
   python manage.py runserver 8080
   ```
6. **Start the backend server**:
   ```bash
   python manage.py runserver 8080
   ```

#### Frontend Setup:

1. **Navigate to the frontend directory**:
   ```bash
   cd ../frontend
   ```
2. **Navigate to the frontend directory**:
   ```bash
   npm install
   ```
3. **Navigate to the frontend directory**:
   ```bash
   npm start
   ```

## **Libraries and Tools Used**

| Library / Tool                                                      | Description                                     |
| ------------------------------------------------------------------- | ----------------------------------------------- |
| [**React**](https://reactjs.org/)                                   | JavaScript library for building user interfaces |
| [**Django REST Framework**](https://www.django-rest-framework.org/) | Backend for API endpoints                       |
| [**Axios**](https://axios-http.com/)                                | HTTP client for API requests                    |
| [**Bootstrap**](https://getbootstrap.com/)                          | CSS framework for styling                       |

```bash
inventory-management-system/
├── backend/
│   ├── manage.py              # Django's main management file
│   ├── db.sqlite3             # SQLite database
│   ├── inventory/             # Django app for managing inventory
│   │   ├── models.py          # Database models
│   │   ├── serializers.py     # DRF serializers
│   │   ├── views.py           # API endpoints
│   │   └── urls.py            # App-specific URLs
│   └── backend/               # Django project root
│       ├── settings.py        # Project settings
│       └── urls.py            # Main URL configuration
├── frontend/
│   ├── public/                # Static public assets
│   ├── src/                   # React source code
│   │   ├── App.js             # Main application component
│   │   ├── components/        # Reusable components
│   │   │   ├── ItemForm.js    # Component to add/edit items
│   │   │   └── ItemList.js    # Component to display item list
│   │   └── api.js             # API request handlers
└── README.md                  # Documentation
```

## **Screenshots**

### Home Page

![Home Page](Home.png)

---

## **API**

The backend API is built using **Django REST Framework**. The base URL for the API is: (http://127.0.0.1:8080/api/items/)

```bash

| Endpoint             | Method | Description               |
|----------------------|--------|---------------------------|
| `/items/`            | GET    | Get all items             |
| `/items/`            | POST   | Create a new item         |
| `/items/<id>/`       | GET    | Get a single item         |
| `/items/<id>/`       | PUT    | Update an existing item   |
| `/items/<id>/`       | DELETE | Delete an item            |
```

---

## **Testing**

### **Frontend**

Run React component tests with:

```bash
npm test
```

### **Backend**

Django API tests can be added using `pytest` or Django's built-in testing framework.

---

## **Database Structure**

The database used in this project is **SQLite**, and it has one primary table called `inventory_item` which stores all the inventory details.

### **Table: `inventory_item`**

| Field Name    | Data Type             | Description                                                   |
| ------------- | --------------------- | ------------------------------------------------------------- |
| `id`          | Integer (Primary Key) | Auto-incrementing unique identifier for each item.            |
| `name`        | CharField             | Name of the item (maximum 255 characters).                    |
| `description` | TextField             | Detailed description of the inventory item.                   |
| `quantity`    | IntegerField          | The number of items in stock.                                 |
| `price`       | DecimalField          | The cost of the item (up to 10 digits, 2 decimals).           |
| `date_added`  | DateField             | The date the item was added to the inventory, auto-populated. |

### **Example Data**

| `id` | `name`             | `description`                     | `quantity` | `price` | `date_added` |
| ---- | ------------------ | --------------------------------- | ---------- | ------- | ------------ |
| 1    | Blue Tennis Racket | A high-quality tennis racket.     | 5          | 1500.00 | 2024-12-07   |
| 2    | Red Tennis Racket  | A durable and lightweight racket. | 10         | 2000.00 | 2024-12-07   |

---

### **Database Relationships**

Since this is a simple inventory management system, there are no relationships between tables (e.g., foreign keys). However, the `inventory_item` table can be expanded to include categories, suppliers, or any other necessary relationships in the future.

---

### **Database Commands**

Here are some useful SQL commands for interacting with the database directly:

1. **View All Items**:
   ```sql
   SELECT * FROM inventory_item;
   ```

## **Developers**

| **Name**                      | **Picture**                                                                                               |
| ----------------------------- | --------------------------------------------------------------------------------------------------------- |
| **Vivencio B. Bataga II**     | <img src="assets/Bataga.jpg" alt="Vivencio Bataga II" width="150" style="border-radius: 50%;"/>           |
| **Tristan Vincent C. Lemana** | <img src="assets/Lemana.jpg" alt="Tristan Vincent C. Lemana" width="150" style="border-radius: 50%;"/>    |
| **Justin John Navarro**       | <img src="assets/groupmate1.jpg" alt="[Other Groupmate Name 1]" width="150" style="border-radius: 50%;"/> |
| **Joshua C. Sayon**           | <img src="assets/Sayon.jpg" alt="[Other Groupmate Name 2]" width="150" style="border-radius: 50%;"/>      |
