# E-Commerce API Documentation

## Base URL
```
Development: http://localhost:8000
Production: https://complete-e-commerce-backend.vercel.app
```

## Authentication
All protected endpoints require a JWT token in the `Authorization` header:
```
Authorization: Bearer <token>
```

## API Endpoints

### Users
- `POST /api/users/register` - Create new user account
- `POST /api/users/login` - Login user
- `POST /api/users/bootstrap-admin` - Promote user to admin

### Products (Admin Only)
- `GET /api/admin/products` - Get all products
- `POST /api/admin/products` - Create product
- `PUT /api/admin/products/:id` - Update product
- `DELETE /api/admin/products/:id` - Delete product

### Categories (Admin Only)
- `GET /api/admin/categories` - Get all categories
- `POST /api/admin/categories` - Create category
- `PUT /api/admin/categories/:id` - Update category
- `DELETE /api/admin/categories/:id` - Delete category

### Orders
- `POST /api/orders` - Create order
- `GET /api/orders` - Get user orders
- `GET /api/orders/:id` - Get order details

### Cart
- `POST /api/checkout` - Process checkout

## Error Responses
All errors follow this format:
```json
{
  "message": "Error description",
  "code": "ERROR_CODE"
}
```

## Status Codes
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `409` - Conflict
- `500` - Server Error
