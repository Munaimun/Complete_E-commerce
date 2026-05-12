# Project Structure

## Directory Layout

```
server/
├── src/
│   ├── config/           # Environment and configuration
│   ├── controllers/      # Request handlers
│   ├── middleware/       # Express middleware (auth, logging, etc)
│   ├── models/           # Database models
│   ├── routes/           # Route definitions
│   ├── services/         # Business logic layer
│   ├── validators/       # Input validation schemas
│   ├── db/               # Database connection and initialization
│   ├── types/            # TypeScript type definitions
│   ├── utils/            # Helper functions
│   ├── constants/        # App constants
│   └── index.mjs         # Entry point
├── tests/                # Unit and integration tests
├── docs/                 # Documentation
├── .env                  # Environment variables (not in git)
├── .env.example          # Example env file
├── package.json
└── vercel.json           # Vercel deployment config
```

## Layers

### Controllers
Handle HTTP requests and responses. Validate request format and delegate to services.

### Services
Contain business logic. Handle transactions, validation, and orchestration.

### Models
Database queries and data access.

### Middleware
Authentication, logging, error handling, validation.

### Utils
Reusable helper functions (password hashing, JWT, email, etc).
