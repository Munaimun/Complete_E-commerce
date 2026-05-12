# Client Project Structure

## Directory Layout

```
client/
├── src/
│   ├── components/
│   │   ├── common/       # Reusable UI components (Button, Input, Modal, etc)
│   │   ├── features/     # Feature-specific components (Products, Cart, etc)
│   │   └── layout/       # Layout components (Header, Footer, Sidebar)
│   ├── pages/            # Page components
│   ├── hooks/            # Custom React hooks
│   ├── context/          # Context API for state management
│   ├── services/         # API service calls (axios wrappers)
│   ├── types/            # TypeScript interfaces
│   ├── utils/            # Helper functions
│   ├── constants/        # App constants (API URLs, routes, etc)
│   ├── lib/              # Library configurations (Firebase, etc)
│   ├── assets/           # Images, fonts, etc
│   ├── App.tsx           # Main app component
│   └── main.tsx          # Entry point
├── public/               # Static files
├── tests/                # Unit and integration tests
├── docs/                 # Documentation
└── vite.config.ts        # Vite configuration
```

## File Organization

### Components Structure
```
components/
├── common/
│   ├── Button.tsx
│   ├── Input.tsx
│   ├── Modal.tsx
│   └── index.ts
├── features/
│   ├── ProductCard.tsx
│   ├── CartItem.tsx
│   └── index.ts
└── layout/
    ├── Header.tsx
    ├── Footer.tsx
    └── index.ts
```

## Naming Conventions
- React components: PascalCase (ProductCard.tsx)
- Hooks: camelCase with `use` prefix (useAuth.ts)
- Services: camelCase (apiService.ts)
- Utilities: camelCase (formatPrice.ts)
- Types/Interfaces: PascalCase (IUser.ts)
