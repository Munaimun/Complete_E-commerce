# 🛍️ Complete E-commerce

![Complete E-commerce]([https://your-image-url.com](https://github.com/Munaimun/Complete_E-commerce/blob/master/homepage.png?raw=true))

## 🚀 Overview
Complete E-commerce is a full-stack e-commerce platform with a React frontend and an Express backend powered by MySQL. Product catalog, categories, users, and orders are now stored in a relational database for production-style data management.

## 🔥 Features

- 🏷 **Database-Driven Catalog**: Categories, products, highlights, and blogs are served from MySQL.
- 👤 **User Accounts API**: Register/login/profile endpoints with password hashing and JWT support.
- 🛒 **Order Persistence**: Checkout writes users and orders to MySQL (including order items).
- 🧾 **Order Lifecycle**: Order status and payment status flow with detailed order-items endpoint.
- 🔐 **Role-Based Admin APIs**: Admin-protected category/product CRUD endpoints.
- ⚡ **Auto Bootstrap**: Backend creates required tables and seeds initial catalog data on startup.

## 🛠️ Tech Stack

- **Frontend**: React + Vite + TypeScript
- **Backend**: Node.js + Express
- **Database**: MySQL (mysql2)
- **Authentication**: JWT + bcrypt (backend), Firebase auth still available in frontend

## 📸 Screenshots

| Homepage | Product Page | Cart Page |
|----------|-------------|-----------|
| ![Homepage](https://github.com/Munaimun/Complete_E-commerce/blob/master/homepage.png?raw=true) | ![Product Page](https://github.com/Munaimun/Complete_E-commerce/blob/master/products.png?raw=true) | ![Cart Page](https://github.com/Munaimun/Complete_E-commerce/blob/master/cartpage.png?raw=true) |

## ⚙️ Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Munaimun/Complete_E-commerce.git
   ```

2. Navigate to the project folder:
   ```sh
   cd complete-ecommerce
   ```

3. Install dependencies:
   ```sh
   npm install
   cd server && npm install
   cd ../client && npm install
   ```

4. Configure backend environment:
   ```sh
   cd server
   cp .env.example .env
   ```
   Then edit `.env` with your MySQL credentials.

5. Create the database in MySQL (one time):
   ```sql
   CREATE DATABASE complete_ecommerce;
   ```

6. Start backend and frontend:
   ```sh
   # terminal 1
   cd server
   npm start

   # terminal 2
   cd client
   npm run dev
   ```

## 🎯 Usage

- Sign up or log in to access your shopping cart.
- Browse products by category.
- Add/remove items from the cart and view real-time updates.
- Secure checkout with authentication.

## 🔐 Environment Variables

Backend (`server/.env`):
```env
PORT=8000
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=complete_ecommerce
JWT_SECRET=your_strong_secret
ADMIN_SETUP_KEY=your_one_time_admin_setup_key
```

Frontend (`client/.env`):
```env
VITE_SERVER=http://localhost:8000
```

## 🔑 Admin Bootstrap

After registering a user, promote that account to admin:

```http
POST /users/bootstrap-admin
Content-Type: application/json

{
   "email": "admin@example.com",
   "setupKey": "<ADMIN_SETUP_KEY>"
}
```

## 🧠 Core API

- `POST /users/register`
- `POST /users/login`
- `GET /users/profile` (Bearer token)
- `GET /products`
- `GET /products/:id`
- `GET /categories`
- `GET /categories/:id`
- `POST /checkout` (Bearer token)
- `GET /orders/user/:email` (Bearer token)
- `GET /orders/:id` (owner or admin)
- `PATCH /orders/:id/payment-status` (admin)
- `POST /admin/categories` (admin)
- `PUT /admin/categories/:id` (admin)
- `DELETE /admin/categories/:id` (admin)
- `POST /admin/products` (admin)
- `PUT /admin/products/:id` (admin)
- `DELETE /admin/products/:id` (admin)

## 🚀 Deployment

To deploy the app:
```sh
npm run build
```
Then, deploy using Vercel, Netlify, or Firebase Hosting.

## 🤝 Contribution

Contributions are welcome! Feel free to submit a pull request or open an issue.

## 📜 License

This project is licensed under the MIT License.

---
Made with ❤️ by [Munaimun Bari Fahad](https://personal-portfolio-chi-hazel.vercel.app/)
