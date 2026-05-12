# Development Guide

## Setup

1. **Clone and Install**
```bash
cd server
npm install
```

2. **Environment Setup**
```bash
cp .env.example .env
# Edit .env with your MySQL credentials
```

3. **Database Setup**
```bash
# MySQL must be running
# Database will initialize on first npm start
npm start
```

## Project Structure

The server follows a layered architecture:

- **Controllers**: Handle HTTP requests/responses
- **Services**: Business logic and data processing
- **Models**: Database queries
- **Middleware**: Authentication, validation, logging
- **Utils**: Helper functions
- **Routes**: API endpoints

## Adding a New Feature

### Example: Add Product Management

1. **Create Controller** - `src/controllers/productController.mjs`
```javascript
export const createProduct = async (req, res) => {
  // Request validation and handling
};
```

2. **Create Service** - `src/services/productService.mjs`
```javascript
export const saveProduct = async (data) => {
  // Business logic
};
```

3. **Create Route** - `src/routes/productRoutes.mjs`
```javascript
router.post('/products', authenticate, createProduct);
```

## Running Tests
```bash
npm test
```

## Code Style
- Format: `npm run prettier`
- Lint: `npm run lint`
